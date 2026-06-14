---
url: https://de.wikipedia.org/wiki/Berechenbarkeit
---

# Berechenbarkeit

## Überblick

Eine mathematische Funktion ist berechenbar (auch effektiv berechenbar oder rekursiv), wenn für sie eine Berechnungsanweisung (Algorithmus) formuliert werden kann (Berechenbarkeitstheorie). Die Funktion, die ein Algorithmus berechnet, ist gegeben durch die Ausgabe, mit der der Algorithmus auf eine Eingabe reagiert. Der Definitionsbereich der Funktion ist die Menge der Eingaben, für die der Algorithmus eine Ausgabe produziert. Wenn der Algorithmus nicht terminiert, dann ist die Eingabe kein Element der Definitionsmenge.
Dem Algorithmusbegriff liegt ein Berechnungsmodell zugrunde. Verschiedene Berechnungsmodelle sind entwickelt worden, es hat sich aber herausgestellt, dass die stärksten davon zum Modell der Turingmaschine gleich stark (Turing-mächtig) sind. Die Church-Turing-These behauptet daher, dass die Turingmaschinen den intuitiven Begriff der Berechenbarkeit wiedergeben. In der Berechenbarkeitstheorie heißen genau die Funktionen berechenbar, die Turing-berechenbar sind.
Zu den Turing-mächtigen Berechnungsmodellen gehören neben der Turingmaschine beispielsweise Zweikellerautomaten, WHILE-Programme, μ-rekursive Funktionen, Registermaschinen und der Lambda-Kalkül.
Zu den Berechnungsmodellen, die schwächer sind als Turingmaschinen, gehören zum Beispiel die LOOP-Programme. Diese können zum Beispiel die Turing-berechenbare Ackermannfunktion nicht berechnen.
Ein dem Begriff der Berechenbarkeit eng verwandter Begriff ist der der Entscheidbarkeit. Eine Teilmenge einer Menge (zum Beispiel eine Formale Sprache) heißt entscheidbar, wenn ihre charakteristische Funktion (im Wesentlichen das zugehörige Prädikat) berechenbar ist.

## Formale Definition

Angenommen wird: der Algorithmus

        P

    {\displaystyle P}

 berechnet die Funktion

        f
        :
        T
        →

          N

    {\displaystyle f\colon T\rightarrow \mathbb {N} }

 mit

        T
        ⊆

            N

            k

    {\displaystyle T\subseteq \mathbb {N} ^{k}}

, wenn

        P

    {\displaystyle P}

 bei Eingabe von

          (

              n

                1

            ,
            …
            ,

              n

                k

          )

        ∈
        T

    {\displaystyle \left(n_{1},\ldots ,n_{k}\right)\in T}

 nach einer endlichen Zahl von Schritten den Wert

        f

          (

              n

                1

            ,
            …
            ,

              n

                k

          )

    {\displaystyle f\left(n_{1},\ldots ,n_{k}\right)}

 ausgibt
und bei Eingabe von

          (

              n

                1

            ,
            …
            ,

              n

                k

          )

        ∈

            N

            k

        ∖
        T

    {\displaystyle \left(n_{1},\ldots ,n_{k}\right)\in \mathbb {N} ^{k}\setminus T}

 nicht terminiert.
Eine Funktion heißt berechenbar, wenn es einen Algorithmus gibt, der sie berechnet.
Den Berechenbarkeitsbegriff kann man gleichwertig auf partielle Funktionen übertragen. Eine partielle Funktion

        f
        :

            N

            k

        ⇝

          N

    {\displaystyle f\colon \mathbb {N} ^{k}\rightsquigarrow \mathbb {N} }

 heißt berechenbar, wenn sie eingeschränkt auf ihren Definitionsbereich

        f
        :
        Def
        ⁡
        (
        f
        )
        →

          N

    {\displaystyle f\colon \operatorname {Def} (f)\to \mathbb {N} }

 eine berechenbare Funktion ist.

### Zahlenfunktionen

In der Berechenbarkeitstheorie werden meist nur Funktionen natürlicher Zahlen betrachtet.

#### Definition berechenbarer Funktionen mit Registermaschinen

Eine Funktion

        f
        :

            N

            k

        →

          N

    {\displaystyle f\colon \mathbb {N} ^{k}\rightarrow \mathbb {N} }

ist berechenbar genau dann, wenn es eine

        k

    {\displaystyle k}

-stellige Registermaschine

        M

    {\displaystyle M}

gibt, deren Maschinenfunktion mit

        f

    {\displaystyle f}

übereinstimmt, also

        f
        =

          f

            M

    {\displaystyle f=f_{M}}

gilt.
Z. B. ist die Funktion

        f
        (
        x
        )
        =

            div

    {\displaystyle f(x)={\mbox{div}}}

(die für kein Argument terminiert) berechenbar, da es eine entsprechende Registermaschine gibt.

#### Definition mit WHILE-Programmen

Eine Funktion

        f

    {\displaystyle f}

 (wie oben) ist berechenbar genau dann, wenn es ein WHILE-Programm

        P

    {\displaystyle P}

 gibt mit

        f
        =
        A
        C
        ∘
        τ
        (
        P
        )
        ∘
        E
        C

    {\displaystyle f=AC\circ \tau (P)\circ EC}

.
Dabei ist

        E
        C

    {\displaystyle EC}

 die Eingabecodierung,

        A
        C

    {\displaystyle AC}

 die Ausgabecodierung und

        τ
        (
        P
        )

    {\displaystyle \tau (P)}

 die von

        P

    {\displaystyle P}

 über die Semantik realisierte Maschinenfunktion.

#### Definition durch Rekursion

Seien

        μ

    {\displaystyle \mu }

, Sub und Prk die Operationen der µ-Rekursion, der Substitution und primitiven Rekursion. Funktionen, die sich aus der Menge der primitiv-rekursiven Grundfunktionen durch wiederholtes Anwenden dieser Operatoren erzeugen lassen, heißen µ-rekursiv. Die Menge der

        μ

    {\displaystyle \mu }

-rekursiven Funktionen ist genau die Menge der berechenbaren Funktionen.

#### Übergang von einstelligen zu mehrstelligen Funktionen

Über die cantorsche Paarungsfunktion wird der Begriff der Berechenbarkeit einer k-stelligen Funktion auf den der Berechenbarkeit von einstelligen Funktionen zurückgeführt. Insbesondere wird damit in natürlicher Weise definiert ob Funktionen von rationalen Zahlen berechenbar sind.

### Wortfunktionen

Die Berechenbarkeit von Wortfunktionen lässt sich etwa mit Hilfe von Turingmaschinen zeigen. Alternativ führt man eine Standardnummerierung über die Wörter über

          Σ

            ∗

    {\displaystyle \Sigma ^{*}}

 ein und zeigt, dass die so erzeugten Zahlenfunktionen berechenbar sind.

## Uniforme Berechenbarkeit

Eine zweistellige Funktion f(x,y) mit der Eigenschaft, dass für jeden festen Wert a die durch fa(y) = f(a,y) definierte einstellige Funktion fa berechenbar ist, muss selbst nicht unbedingt berechenbar sein; für jeden Wert a gibt es zwar einen Algorithmus (also etwa ein
Programm für eine Turingmaschine) Ta, der fa berechnet, aber die Abbildung a → Ta ist im Allgemeinen nicht berechenbar.
Eine Familie (fa: a=0, 1, 2, …) von berechenbaren Funktionen heißt uniform berechenbar, wenn es einen Algorithmus gibt, der zu jedem a einen Algorithmus Ta liefert, welcher fa berechnet. Man kann leicht zeigen, dass so eine Familie genau dann uniform berechenbar ist, wenn die zweistellige Funktion (x, y) → fx(y) berechenbar ist.

## Eigenschaften

Die Komposition von berechenbaren Funktionen ist berechenbar.
Der Definitionsbereich einer berechenbaren Funktion ist rekursiv aufzählbar (siehe Projektionssatz).
Der Wertebereich einer berechenbaren Funktion ist rekursiv aufzählbar.
Die universelle Funktion nimmt ihren ersten Parameter als Gödelnummer eines Algorithmus und wendet diesen Algorithmus an auf ihren zweiten Parameter. Die universelle Funktion ist berechenbar zum Beispiel durch eine universelle Turingmaschine.
