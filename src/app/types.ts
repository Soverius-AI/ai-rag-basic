export interface Chunk {
  id: string;
  documentId: string;
  title: string;
  url: string;
  sectionId: string;
  parentSectionId: string | null;
  sectionPath: string;
  depth: number;
  position: number;
  content: string;
  tokenCount: number;
}

export interface IndexedChunk extends Chunk {
  embedding: number[];
}

export interface RagIndex {
  embeddingModel: string;
  dim: number;
  chunks: IndexedChunk[];
}

export interface Retrieved {
  chunk: Chunk;
  score: number;
}

export interface ContextSegment {
  label: string;
  tokenCount: number;
  type: 'system' | 'history' | 'query' | 'chunk' | 'remaining';
  chunkId?: string;
}

export interface ConversationTurn {
  role: 'user' | 'assistant';
  content: string;
}

export interface SourceSection {
  title: string;
  url: string;
  content: string;
}

export interface Source {
  title: string;
  url: string;
}

export type I18nParams = Record<string, string | number>;

export interface StatusMessage {
  key: string;
  params?: I18nParams;
}

export interface ThinkingStep {
  kind: 'read' | 'rewrite';
  label: string;
  detail?: string;
  tokens?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  sources?: Source[];
  thinking?: ThinkingStep[];
}
