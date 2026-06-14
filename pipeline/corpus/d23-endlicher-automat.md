---
url: https://de.wikipedia.org/wiki/Endlicher_Automat
---

# Endlicher Automat

## Überblick

Ein endlicher Automat (EA, auch Zustandsmaschine, Zustandsautomat; englisch finite state machine, FSM) ist ein Modell eines Verhaltens, bestehend aus Zuständen, Zustandsübergängen und Aktionen. Ein Automat heißt endlich, wenn die Menge der Zustände, die er annehmen kann (später S genannt), endlich ist. Ein endlicher Automat ist ein Spezialfall aus der Menge der Automaten.
Ein Zustand kann Information über die Vergangenheit beinhalten, da das System ihn ja auf dessen bisherigem Weg erreicht hat, d. h., er reflektiert in gewissem Umfang die Änderungen der Eingabe seit dem Systemstart bis zum aktuellen Zeitpunkt.
Ein Zustandsübergang ist ein Übergang aus dem aktuellen Zustand in einen neuen (anderen) Zustand. Zu diesem Übergang kommt es, wenn die angegebenen logischen Bedingungen/„Eingaben“ vorliegen, die erfüllt sein müssen, um den Übergang zu ermöglichen.
Eine Aktion ist die „Ausgabe“ des EA, die in einer bestimmten Situation erfolgt. Es gibt vier Typen von Aktionen:

Eingangsaktion
Die Aktion wird ausgeführt/ausgegeben beim Eintreten in einen Zustand (egal über welchen Zustandsübergang der Zustand erreicht wurde, falls es mehrere gibt).
Ausgangsaktion
Die Aktion wird beim Verlassen eines Zustandes generiert (egal über welchen Zustandsübergang der Zustand verlassen wird).
Eingabeaktion
Die Aktion wird abhängig vom aktuellen Zustand und der Eingabe generiert. Einem Zustand können also mehrere Aktionen zugeordnet sein, die abhängig davon ausgeführt werden, über welchen Zustandsübergang er erreicht/verlassen wird.
Übergangsaktion
Die Aktion wird abhängig/während eines Zustandsübergangs ausgeführt.
Ein EA kann als Zustandsübergangsdiagramm wie in Abbildung 1 dargestellt werden. Zusätzlich werden mehrere Typen von Übergangstabellen (bzw. Zustandsübergangstabellen) benutzt. Die folgende Tabelle zeigt eine sehr verbreitete Form von Übergangstabellen: Die Kombination aus dem aktuellen Zustand (B) und Eingabe (Y) führt zum nächsten Zustand (C). Die komplette Information über die möglichen Aktionen wird mit Hilfe von Fußnoten angegeben. Eine Definition des EA, die auch die volle Ausgabeinformation beinhaltet, ist mit Zustandstabellen möglich, die für jeden Zustand einzeln definiert werden (siehe auch virtueller EA).

Die Definition des EA wurde ursprünglich in der Automatentheorie eingeführt und später in der Computertechnik übernommen.
Zustandsmaschinen werden hauptsächlich in der Entwicklung digitaler Schaltungen, Modellierung des Applikationsverhaltens (Steuerungen), generell in der Softwaretechnik sowie Wort- und Spracherkennung benutzt.
Das Testen der Qualität eines Systems umfasst die Überprüfung aller Zustände und Zustandsübergänge, indem alle potenziellen Eingaben in Betracht gezogen werden, die eingegeben werden können. In einigen Fällen wird der endliche Automat unter Verwendung einer Programmiersprache eingerichtet und Zustandsübergangsfunktionen werden ausgeführt. Darüber hinaus kann künstliche Intelligenz verwendet werden, um Daten über Systeme mit Mustererkennung und automatisierten Modellen zu sammeln. Bei einfacheren Problemen können die gleichen Informationen in Tabellen, Matrizen, Abbildungen und Programmablaufplänen angezeigt werden, aber mit endlichen Automaten können größere und kompliziertere Szenarien modelliert werden.

## Klassifizierung

Generell werden zwei Gruppen von EA unterschieden: Akzeptoren und Transduktoren.

### Akzeptoren

Sie akzeptieren und erkennen die Eingabe und signalisieren durch ihren Zustand das Ergebnis nach außen. In der Regel werden Symbole (Buchstaben) als Eingabe benutzt. Das Beispiel in der Abbildung 2 zeigt einen EA, der das Wort „gut“ akzeptiert. Akzeptoren werden vorwiegend in der Wort- und Spracherkennung eingesetzt.

### Transduktoren (Transducer)

Transduktoren generieren Ausgaben in Abhängigkeit von Zustand und Eingabe mit Hilfe von Aktionen. Sie werden vorwiegend für Steuerungsaufgaben eingesetzt, wobei grundsätzlich zwei Typen unterschieden werden:

Moore-Automat
Im Moore-Modell werden nur Eingangsaktionen benutzt, d. h., die Ausgabe

        Γ

    {\displaystyle \Gamma }

 hängt nur vom Zustand

        S

    {\displaystyle S}

 ab (

        S
        →
        Γ

    {\displaystyle S\to \Gamma }

). Das Verhalten eines Moore-Automaten ist dadurch, verglichen mit dem Mealy-Modell, einfacher und leichter zu verstehen. Das Beispiel in Abbildung 3 zeigt einen Moore-Automaten, der eine Aufzugtür steuert. Die Zustandsmaschine kennt zwei Befehle, „aufmachen“ und „zumachen“, die von einem Benutzer eingegeben werden können. Die Eingangsaktion (E:) im Zustand „Aufgehend“ startet einen Motor, der die Tür öffnet, und die Eingangsaktion im Zustand „Zugehend“ startet den Motor in entgegengesetzter Richtung. Die Eingangsaktionen in den Zuständen „Auf“ und „Zu“ halten den Motor an. Sie signalisieren außerdem die Situation nach außen (z. B. zu anderen EA).

Mealy-Automat
Im Mealy-Modell werden Eingabeaktionen benutzt, d. h., die Ausgabe

        Γ

    {\displaystyle \Gamma }

 hängt von Zustand

        S

    {\displaystyle S}

 und Eingabe

        Σ

    {\displaystyle \Sigma }

 ab (

        S
        ×
        Σ
        →
        Γ

    {\displaystyle S\times \Sigma \to \Gamma }

). Der Einsatz von Mealy-Automaten führt oft zu einer Verringerung der Anzahl zu berücksichtigender Zustände. Die Funktion des EA ist dadurch komplexer und oft schwieriger zu verstehen. Das Beispiel in der Abbildung 4 zeigt einen Mealy-EA, der das gleiche Verhalten wie der EA im Moore-Beispiel aufweist. Dabei gibt es zwei Eingabeaktionen (I:) mit „starte den Motor, um die Tür zu schließen, wenn die Eingabe ‚zumachen‘ erfolgt“ und „starte den Motor in entgegengesetzter Richtung, um die Tür zu öffnen, wenn die Eingabe ‚aufmachen‘ erfolgt“.
Sofern das zeitliche Verhalten unberücksichtigt bleiben kann, sind Moore- und Mealy-Automaten gleichwertig. Unter dieser Voraussetzung kann der eine in den jeweils anderen überführt werden; oft werden in der Praxis Mischmodelle benutzt. Im Bereich des synchronen Systemdesigns (Digitalelektronik) dagegen gibt es wichtige Unterschiede, die nicht außer Acht gelassen werden dürfen. Diese betreffen sowohl die unterschiedliche Zahl von Zuständen als auch die zeitliche Charakteristik der generierten Kontrollsignale.
Eine weitere Klassifizierung der EA wird durch die Unterscheidung zwischen deterministischen (DEA) und nicht-deterministischen (NEA) Automaten gemacht. In den deterministischen Automaten existiert für jeden Zustand genau ein Übergang für jede mögliche Eingabe. Bei den nicht-deterministischen Automaten kann es keinen oder auch mehr als einen Übergang für die mögliche Eingabe geben.
Ein EA, der nur aus einem Zustand besteht, wird als kombinatorischer EA bezeichnet. Er benutzt nur Eingabeaktionen.

## Die Logik des EA

Der nächste Zustand und die Ausgabe des EA ist eine Funktion der Eingabe und des aktuellen Zustandes. Abbildung 5 zeigt den Ablauf der Logik.

## Das mathematische Modell

Es gibt unterschiedliche Definitionen, je nach Typ des DEA. Ein Akzeptor ist ein 5-Tupel (

        Q
        ,
        s
        ,
        Σ
        ,
        F
        ,
        δ

    {\displaystyle Q,s,\Sigma ,F,\delta }

), wobei:

        Q

    {\displaystyle Q}

 ist die endliche Zustandsmenge (

          q

            0

        −

          q

            x

    {\displaystyle q_{0}-q_{x}}

)

        s

    {\displaystyle s}

 ist der Startzustand (

        s
        ∈
        Q

    {\displaystyle s\in Q}

)

        Σ

    {\displaystyle \Sigma }

 ist das endliche Eingabealphabet

        F

    {\displaystyle F}

 ist die Endzustandsmenge (

        F
        ⊂
        Q

    {\displaystyle F\subset Q}

)

        δ

    {\displaystyle \delta }

 ist die Übergangsfunktion, sie lässt sich als Automatentafel oder als Zustandsübergangsgraph darstellen.
Ein Transduktor ist ein 7-Tupel (

        Σ
        ,
        Γ
        ,
        S
        ,

          s

            0

        ,
        F
        ,
        δ
        ,
        ω

    {\displaystyle \Sigma ,\Gamma ,S,s_{0},F,\delta ,\omega }

), wobei:

        Σ

    {\displaystyle \Sigma }

 ist das Eingabealphabet (eine endliche nicht leere Menge von Symbolen),

        Γ

    {\displaystyle \Gamma }

 ist das Ausgabealphabet (eine endliche nicht leere Menge von Symbolen),

        S

    {\displaystyle S}

 ist eine endliche nicht leere Menge von Zuständen,

        F

    {\displaystyle F}

 ist die Endzustandsmenge (

        F
        ⊂
        S

    {\displaystyle F\subset S}

)

          s

            0

    {\displaystyle s_{0}}

 ist der Anfangszustand und ein Element aus

        S

    {\displaystyle S}

,

        δ

    {\displaystyle \delta }

 ist die Zustandsübergangsfunktion:

        δ
        :
        S
        ×
        Σ
        →
        S

    {\displaystyle \delta \colon S\times \Sigma \to S}

,

        ω

    {\displaystyle \omega }

 ist die Ausgabefunktion:

        ω
        :
        S
        ×
        Σ
        →
        Γ

    {\displaystyle \omega \colon S\times \Sigma \to \Gamma }

,
Falls die Ausgabefunktion eine Funktion von Zustand und Eingabealphabet ist (

        ω
        :
        S
        ×
        Σ
        →
        Γ

    {\displaystyle \omega \colon S\times \Sigma \to \Gamma }

), dann handelt es sich um ein Mealy-Modell. Falls die Ausgabefunktion nur vom Zustand abhängt (

        ω
        :
        S
        →
        Γ

    {\displaystyle \omega \colon S\to \Gamma }

), dann ist es ein Moore-Modell.

## Beispiele

### Abstraktes Beispiel

Der EA in Abbildung 6 hat die Zustandsmenge

        S
        :=
        {

          q

            1

        ,

          q

            2

        ,

          q

            3

        }

    {\displaystyle S:=\{q_{1},q_{2},q_{3}\}}

, den Startzustand

          q

            1

    {\displaystyle q_{1}}

, das Eingabealphabet

        Σ
        :=
        {
        a
        ,
        b
        }

    {\displaystyle \Sigma :=\{a,b\}}

, das Ausgabealphabet

        Γ
        :=
        {
        0
        ,
        1
        }

    {\displaystyle \Gamma :=\{0,1\}}

, die Zustandsübergangsfunktion

        δ
        :
        S
        ×
        Σ
        →
        S

    {\displaystyle \delta \colon S\times \Sigma \to S}

 mit

        δ
        (

          q

            1

        ,
        a
        )
        =

          q

            3

    {\displaystyle \delta (q_{1},a)=q_{3}}

,

        δ
        (

          q

            1

        ,
        b
        )
        =

          q

            2

    {\displaystyle \delta (q_{1},b)=q_{2}}

,

        δ
        (

          q

            2

        ,
        a
        )
        =

          q

            1

    {\displaystyle \delta (q_{2},a)=q_{1}}

,

        δ
        (

          q

            2

        ,
        b
        )
        =

          q

            2

    {\displaystyle \delta (q_{2},b)=q_{2}}

,

        δ
        (

          q

            3

        ,
        a
        )
        =

          q

            1

    {\displaystyle \delta (q_{3},a)=q_{1}}

,

        δ
        (

          q

            3

        ,
        b
        )
        =

          q

            2

    {\displaystyle \delta (q_{3},b)=q_{2}}

 und die Ausgabefunktion

        ω
        :
        S
        ×
        Σ
        →
        Γ

    {\displaystyle \omega \colon S\times \Sigma \to \Gamma }

 mit

        ω
        (

          q

            1

        ,
        a
        )
        =
        0

    {\displaystyle \omega (q_{1},a)=0}

,

        ω
        (

          q

            1

        ,
        b
        )
        =
        1

    {\displaystyle \omega (q_{1},b)=1}

,

        ω
        (

          q

            2

        ,
        a
        )
        =
        1

    {\displaystyle \omega (q_{2},a)=1}

,

        ω
        (

          q

            2

        ,
        b
        )
        =
        1

    {\displaystyle \omega (q_{2},b)=1}

,

        ω
        (

          q

            3

        ,
        a
        )
        =
        0

    {\displaystyle \omega (q_{3},a)=0}

,

        ω
        (

          q

            3

        ,
        b
        )
        =
        0

    {\displaystyle \omega (q_{3},b)=0}

.

### Stark vereinfachter Verkaufsautomat

Ein Verkaufsautomat kann stark vereinfacht mit den Zuständen

        w

    {\displaystyle w}

: warten auf Bezahlung

        a

    {\displaystyle a}

: die Bezahlung wurde ausgeführt, warten auf Warenauswahl

        r

    {\displaystyle r}

: die Ware wurde ausgegeben, warten auf Warenentnahme
und den Eingabesymbolen

        p

    {\displaystyle p}

: bezahlen

        s

    {\displaystyle s}

: Ware auswählen

        t

    {\displaystyle t}

: Ware entnehmen

        c

    {\displaystyle c}

: Kauf abbrechen
modelliert werden. Die Zustandsübergangsfunktion ist wie folgt definiert:

        δ
        (
        w
        ,
        p
        )
        =
        a

    {\displaystyle \delta (w,p)=a}

        δ
        (
        a
        ,
        s
        )
        =
        r

    {\displaystyle \delta (a,s)=r}

        δ
        (
        a
        ,
        c
        )
        =
        w

    {\displaystyle \delta (a,c)=w}

        δ
        (
        r
        ,
        t
        )
        =
        w

    {\displaystyle \delta (r,t)=w}

## Optimierung

Ein EA wird optimiert, indem die Zustandsmaschine mit der geringsten Anzahl von Zuständen gefunden wird, die die gleiche Funktion erfüllt. Dieses Problem kann zum Beispiel mit Hilfe von Färbungsalgorithmen gelöst werden.

## Homing-Folgen und UIO-Folgen

### Homing-Folgen

Eine Homing-Folge (auch Homing-Sequenz) ist eine Folge von Eingaben, sodass sich anhand der Ausgaben bestimmen lässt, in welchem Zustand sich die Maschine danach befindet. Dadurch kann bei stark zusammenhängenden Zustandsmaschinen sehr leicht eine Folge gefunden werden, um wieder zum Initialzustand zurückzukehren, also nach Hause (englisch home). Jede minimale Zustandsmaschine besitzt eine Homing-Folge.

### UIO-Folgen

Eine UIO-Folge (Unique-Input-Output-Folge) ist eine Folge von Eingaben, um anhand der Ausgaben zu bestimmen, aus welchem Zustand man gestartet ist. Eine solche Folge existiert nicht immer, das Problem, eine zu finden, ist PSPACE-vollständig.
Beispiel UIO-Folgen zu Abbildung 6:

          q

            1

    {\displaystyle q_{1}}

:

        a

          /

        0

    {\displaystyle a/0}

,

        a

          /

        0

    {\displaystyle a/0}

,

        b

          /

        1

    {\displaystyle b/1}

          q

            2

    {\displaystyle q_{2}}

:

        a

          /

        1

    {\displaystyle a/1}

          q

            3

    {\displaystyle q_{3}}

:

        b

          /

        0

    {\displaystyle b/0}

## Implementierung

### Hardware

In digitalen Schaltungen werden EA mit Hilfe von speicherprogrammierbaren Steuerungen, logischen Gattern, Flip-Flops oder Relais gebaut. Eine Hardwareimplementation benötigt normalerweise ein Register, um die Zustandsvariable zu speichern, eine Logikeinheit, die die Zustandsübergänge bestimmt, eine zweite Logikeinheit, die für die Ausgabe verantwortlich ist, sowie einen Taktgeber oder ein Verzögerungsglied, um zwischen vorherigem, aktuellem und nachfolgendem Zustand weiterschalten/unterscheiden zu können.

### Software

In der Softwareentwicklung werden meist folgende Konzepte verwendet, um Applikationen mit Hilfe von Zustandsmaschinen zu modellieren bzw. implementieren:

Ereignisgesteuerter endlicher Automat
Virtueller endlicher Automat

### Reale Computer als EA-Server

Alle in der wirklichen Welt existenten digitalen Computer haben eine endliche Speichergröße und können somit nur eine endliche (wenn auch sehr hohe) Zahl von digitalen Schaltzuständen annehmen. Sie lassen sich daher als Teilmenge der endlichen Automaten betrachten. Jedoch ist es für theoretische Betrachtungen oft nützlicher, sie stattdessen als Teilmenge leistungsfähigerer Automatenmodelle, wie etwa der Turingmaschine, zu betrachten.

## Darstellung endlicher Automaten

Die allgemeinen Regeln für das Zeichnen eines Zustandsübergangsdiagramms sind wie folgt:

Kreise stellen Zustände dar. Im Kreis steht der Name des Zustands.
Pfeile zwischen Zuständen stellen die Transitionen dar. Auf jedem Pfeil steht, welche Bedingungen den Übergang ermöglichen.
