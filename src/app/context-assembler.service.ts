import { Injectable } from '@angular/core';
import type { ContextSegment, ConversationTurn, SourceSection } from './types';

export interface AssembledContext {
  system: string;
  prompt: string;
  segments: ContextSegment[];
  usedTokens: number;
}

@Injectable({ providedIn: 'root' })
export class ContextAssemblerService {
  // Keep the app-level budget well below Gemma's maximum context to avoid
  // browser-side KV-cache pressure.
  readonly budget = 32_768;

  countTokens(text: string): number {
    return estimateTokens(text);
  }

  private static readonly SYSTEM_PROMPT = [
    '# Rolle',
    'Du bist „Soverius Assist“, ein präziser, faktentreuer Recherche-Assistent für ein Wissensarchiv.',
    '',
    '# Aufgabe',
    'Beantworte die Frage des Nutzers anhand ALLER unten bereitgestellten Kontext-Abschnitte.',
    '',
    '# Regeln',
    '1. Nutze ausschließlich den Kontext – kein eigenes Vorwissen, keine Vermutungen.',
    '2. Erfinde keine Namen, Zahlen oder Daten und verknüpfe nur, was der Kontext selbst verknüpft.',
    '3. Lehne nicht ab: Gib stets die beste Antwort, die sich aus den Abschnitten ableiten lässt, und nenne die passenden Personen, Geräte und Jahre.',
    '4. Belege deine Antwort mit der Quelle in Klammern, z. B. (Quelle: Konrad Zuse).',
    '5. Antworte ausführlich und gut strukturiert: erkläre die relevanten Fakten aus dem Kontext, ordne sie ein und nenne wichtige Namen, Geräte und Jahreszahlen. Nutze bei mehreren Punkten eine Aufzählung. Antworte in der Sprache der Frage.',
    '',
    '# Beispiel',
    'Frage: Wann wurde TLS veröffentlicht?',
    'Antwort: TLS 1.0 wurde 1999 als Nachfolger von SSL 3.0 veröffentlicht. Es verschlüsselt die Verbindung zwischen Client und Server und wurde später durch TLS 1.2 (2008) und TLS 1.3 (2018) abgelöst. (Quelle: Transport Layer Security)',
  ].join('\n');

  private static readonly SYSTEM_PROMPT_NO_RAG = [
    '# Rolle',
    'Du bist „Soverius Assist“, ein hilfsbereiter Assistent.',
    '',
    '# Aufgabe',
    'Für diesen Vergleichslauf steht KEIN Wissensarchiv zur Verfügung (RAG ist aus). Beantworte die Frage aus deinem eigenen Trainingswissen.',
    '',
    '# Regeln',
    '1. Antworte knapp und in der Sprache der Frage.',
    '2. Mach Unsicherheiten transparent, statt zu raten.',
  ].join('\n');

  private static readonly REWRITE_SYSTEM = [
    '# Aufgabe',
    'Formuliere die Folgefrage in eine eigenständige Suchanfrage um, die ohne den Verlauf verständlich ist.',
    '',
    '# Regeln',
    '1. Löse Bezüge wie „er“, „dabei“, „dieses Jahr“, „und davor“ mithilfe des Verlaufs auf.',
    '2. Übernimm das konkrete Thema und die Eigennamen aus der LETZTEN Frage UND der LETZTEN Antwort (Personen, Geräte, Ereignisse, Jahre).',
    '3. Das Thema muss in der Suchanfrage ausdrücklich genannt werden – niemals nur „der Wurm“, sondern z. B. „der erste Computerwurm (Morris, 1988)“.',
    '4. Behalte die Sprache der Frage bei. Gib NUR die Suchanfrage aus – ohne Erklärung, ohne Anführungszeichen.',
    '',
    '# Beispiel',
    'Verlauf:',
    'Nutzer: Wann wurde der erste Computerwurm entwickelt?',
    'Assistent: Der erste Computerwurm war der Morris-Wurm von 1988.',
    'Folgefrage: wie hat er funktioniert',
    'Suchanfrage: Wie funktionierte der erste Computerwurm (Morris-Wurm, 1988)?',
  ].join('\n');

  buildRagContext(question: string, sections: SourceSection[], history: ConversationTurn[]): AssembledContext {
    const systemTokens = estimateTokens(ContextAssemblerService.SYSTEM_PROMPT);
    const historyTokens = countHistoryTokens(history);
    const queryTokens = estimateTokens(question);

    const segments: ContextSegment[] = [
      { label: 'System-Prompt', tokenCount: systemTokens, type: 'system' },
    ];
    if (historyTokens > 0) {
      segments.push({ label: `Verlauf (${history.length} Turns)`, tokenCount: historyTokens, type: 'history' });
    }
    segments.push({ label: 'Frage', tokenCount: queryTokens, type: 'query' });

    let used = systemTokens + historyTokens + queryTokens;
    const keptParts: string[] = [];
    for (const section of sections) {
      const available = this.budget - used;
      if (available <= 0) break;
      const sectionTokens = estimateTokens(section.content);
      if (sectionTokens <= available) {
        keptParts.push(section.content);
        used += sectionTokens;
        segments.push({ label: section.title, tokenCount: sectionTokens, type: 'chunk' });
      } else {
        // Clamp oversized sections before they reach the model.
        keptParts.push(section.content.slice(0, available * CHARS_PER_TOKEN));
        used += available;
        segments.push({ label: `${section.title} (gekürzt)`, tokenCount: available, type: 'chunk' });
        break;
      }
    }

    const remaining = this.budget - used;
    if (remaining > 0) segments.push({ label: 'Frei', tokenCount: remaining, type: 'remaining' });

    const context = keptParts.join('\n\n---\n\n');

    return {
      system: ContextAssemblerService.SYSTEM_PROMPT,
      prompt: `Kontext-Abschnitte:\n"""\n${context}\n"""\n\nFrage: ${question}`,
      segments,
      usedTokens: used,
    };
  }

  buildRewritePrompt(question: string, history: ConversationTurn[]): { system: string; prompt: string } {
    const recent = history
      .slice(-4)
      .map((turn) => `${turn.role === 'user' ? 'Nutzer' : 'Assistent'}: ${turn.content.slice(0, 600)}`)
      .join('\n');
    return {
      system: ContextAssemblerService.REWRITE_SYSTEM,
      prompt: `Verlauf:\n${recent}\n\nFolgefrage: ${question}\n\nSuchanfrage:`,
    };
  }

  buildControlContext(question: string, history: ConversationTurn[]): AssembledContext {
    const systemTokens = estimateTokens(ContextAssemblerService.SYSTEM_PROMPT_NO_RAG);
    const historyTokens = countHistoryTokens(history);
    const queryTokens = estimateTokens(question);
    const used = systemTokens + historyTokens + queryTokens;

    const segments: ContextSegment[] = [
      { label: 'System-Prompt', tokenCount: systemTokens, type: 'system' },
    ];
    if (historyTokens > 0) {
      segments.push({ label: `Verlauf (${history.length} Turns)`, tokenCount: historyTokens, type: 'history' });
    }
    segments.push({ label: 'Frage', tokenCount: queryTokens, type: 'query' });
    const remaining = this.budget - used;
    if (remaining > 0) segments.push({ label: 'Frei (kein Kontext)', tokenCount: remaining, type: 'remaining' });

    return {
      system: ContextAssemblerService.SYSTEM_PROMPT_NO_RAG,
      prompt: question,
      segments,
      usedTokens: used,
    };
  }
}

const CHARS_PER_TOKEN = 4;

function estimateTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

function countHistoryTokens(history: ConversationTurn[]): number {
  return history.reduce((sum, turn) => sum + estimateTokens(turn.content), 0);
}
