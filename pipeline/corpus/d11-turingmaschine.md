---
url: https://de.wikipedia.org/wiki/Turingmaschine
---

# Turingmaschine

## Überblick

Eine Turingmaschine ist ein mathematisches Modell der theoretischen Informatik, das eine abstrakte Maschine definiert. Bei diesem Rechnermodell werden nach festgelegten Regeln Manipulationen von Zeichen vorgenommen. Die Turingmaschine ist benannt nach dem britischen Mathematiker Alan Turing, der sie 1936/37 einführte.
Turingmaschinen machen die Begriffe des Algorithmus und der Berechenbarkeit mathematisch fassbar, das heißt, sie formalisieren diese Begriffe. Im Gegensatz zu einem physischen Computer ist eine Turingmaschine damit ein mathematisches Objekt und kann mit mathematischen Methoden untersucht werden.
Eine Turingmaschine repräsentiert einen Algorithmus bzw. ein Programm. Eine Berechnung besteht dabei aus schrittweisen Manipulationen von Symbolen bzw. Zeichen, die nach bestimmten Regeln auf ein Speicherband geschrieben und auch von dort gelesen werden. Ketten dieser Symbole können verschieden interpretiert werden, unter anderem als Zahlen. Damit beschreibt eine Turingmaschine eine Funktion, welche Zeichenketten, die anfangs auf dem Band stehen, auf Zeichenketten abbildet, die nach „Bearbeitung“ durch die Maschine auf dem Band stehen. Eine Funktion, die anhand einer Turingmaschine berechnet werden kann, wird Turing-berechenbar oder auch einfach berechenbar genannt.
Turingmaschinen spielen auch eine bedeutende Rolle bei der Akzeptanz von formalen Sprachen.
So entsprechen die Sprachen, die von Turingmaschinen akzeptiert werden, den mit Typ-0-Grammatiken definierbaren Sprachen. Es konnte gezeigt werden, dass eine Transformationsgrammatik der Grammatik einer Turingmaschine entsprechen kann, die in der Lage ist, jede berechenbare Funktion zu berechnen. Eine Sprache oder ein Computersystem heißen Turing-vollständig, wenn es alle Operationen ausführen kann, die eine universelle Turingmaschine ausführen kann.

## Informelle Beschreibung

Die Turingmaschine hat ein Steuerwerk, in dem sich das Programm befindet, und besteht außerdem aus

einem unendlich langen Speicherband mit unendlich vielen sequentiell angeordneten Feldern. Pro Feld kann genau ein Zeichen aus einem vordefinierten Alphabet gespeichert werden. Als zusätzliches Zeichen ist ein Blank (englisch für „leer/unbeschrieben“) zugelassen, das einem leeren Feld auf dem Speicherband entspricht.
einem programmgesteuerten Lese- und Schreibkopf, der sich auf dem Speicherband feldweise bewegen und die Zeichen verändern (im Fall eines zu „schreibenden“ Blanks auch löschen) kann.
Eine Berechnung für ein Eingabewort startet mit dem Eingabewort auf dem Band und dem Lese- und Schreibkopf auf dem ersten Symbol des Eingabeworts. Die Turingmaschine verarbeitet dann die Eingabe auf dem Band schrittweise nach dem festgelegten Programm.
Mit jedem Schritt liest der Lese-Schreib-Kopf das aktuelle Zeichen, überschreibt dieses mit einem anderen (oder dem gleichen) Zeichen und bewegt sich dann ein Feld nach links oder rechts oder bleibt stehen. Welches Zeichen geschrieben wird und welche Bewegung ausgeführt wird, hängt von dem an der aktuellen Position vorgefundenen Zeichen sowie dem Zustand ab, in dem sich die Turingmaschine gerade befindet. Dies wird durch eine zu der Turingmaschine gehörende Überführungsfunktion definiert. Zu Beginn befindet sich die Turingmaschine in einem vorgegebenen Startzustand und geht bei jedem Schritt in einen neuen Zustand über. Die Anzahl der Zustände, in denen sich die Turingmaschine befinden kann, ist endlich. Ein Zustand kann mehrere Male durchlaufen werden, er sagt nichts über die auf dem Band vorliegenden Zeichen aus.
Eine Turingmaschine stoppt, wenn für den aktuellen Zustand und das gelesene Bandsymbol keine Überführung zu einem neuen Zustand definiert ist. Es hängt also im Allgemeinen von der Kombination aus Zustand und Symbol ab, ob die Turingmaschine weiter rechnet oder stoppt. Zustände, in denen die Turingmaschine unabhängig von dem gelesenen Bandsymbol anhält, bezeichnet man als Endzustände. Es gibt aber auch Turingmaschinen, die für gewisse Eingaben niemals stoppen.
Neben der Berechnung von Funktionen wird die Turingmaschine – wie viele andere Automaten – auch für Entscheidungsprobleme eingesetzt, also für Fragen, die mit „ja“ oder „nein“ zu beantworten sind. Bestimmte Endzustände werden als „akzeptierend“, andere als „nicht akzeptierend“ definiert. Die Eingabe wird genau dann akzeptiert, wenn die Turingmaschine einen akzeptierbaren Endzustand liefert.

## Bedeutung

Der Mathematiker Alan Turing stellte die Turingmaschine 1936 im Rahmen des von David Hilbert im Jahr 1920 formulierten Hilbertprogramms speziell zur Lösung des so genannten Entscheidungsproblems in der Schrift On Computable Numbers, with an Application to the Entscheidungsproblem vor.
Das von Hilbert aufgestellte Entscheidungsproblem fragt, ob eine gegebene Formel der Prädikatenlogik allgemeingültig sei, also ob die Formel unter jeder Interpretation wahr sei. Hilbert stellte die Frage, ob dieses Problem automatisch gelöst werden könne. Die Methode, die für eine prädikatenlogische Formel bestimmt, ob sie allgemeingültig sei, soll also von einer „Maschine“ durchgeführt werden können. Vor der Erfindung des Computers bedeutete dies, dass ein Mensch nach festen Regeln – einem Algorithmus – eine Berechnung durchführt.
Turing definierte mit seinem Modell die Begriffe des Algorithmus und der Berechenbarkeit als formale, mathematische Begriffe. Im Allgemeinen wird davon ausgegangen, dass die Turing-Berechenbarkeit das intuitive Verständnis von Berechenbarkeit trifft; diese Aussage ist als Church-Turing-These bekannt. Ihr wohnt eine starke Plausibilität inne, u. a. durch die mathematische Äquivalenz des Begriffs der Turing-Berechenbarkeit mit anderen Berechenbarkeits-Begriffen (wie zum Beispiel der Ausdrückbarkeit im Lambda-Kalkül oder als partiell-rekursive Funktion sowie die Berechenbarkeit durch Registermaschinen, welche strukturell heute verwendeten Computern nachempfunden sind). Das Besondere an einer Turingmaschine ist dabei ihre strukturelle Einfachheit: Sie benötigt nur drei Operationen (Lesen, Schreiben und Schreib-Lese-Kopf-Bewegen), um alle Operationen der üblichen Computerprogramme zu simulieren. Im Rahmen der theoretischen Informatik eignet sie sich deshalb besonders gut zum Beweis von Eigenschaften formaler Probleme, wie sie von der Komplexitäts- und Berechenbarkeitstheorie betrachtet werden.
Die Komplexität (etwa Laufzeit- und Speicherkomplexität) von Algorithmen wird in Bezug auf bestimmte Maschinenmodelle definiert. Auf Turingmaschinen ist etwa die asymptotische Anzahl der Zustandsübergänge in Abhängigkeit von der Eingabelänge ein mögliches Laufzeitkomplexitätsmaß eines Algorithmus. Auf anderen Modellen werden oftmals Komplexitätsmaße definiert, die einen wahlfreien Zugriff auf jede Speicherzelle oder die Ausführung arithmetischer Operationen als einzelne Schritte definieren. Diese Maße eignen sich im beschränkten Rahmen (kleiner Datenmengen bzw. kleiner Zahlen) besonders gut, um die Laufzeit vieler Algorithmen auf realen Computern abzuschätzen, und sind dementsprechend oft (insbesondere unspezifiziert) anzutreffen. Aufgrund der sequentiellen Struktur von Turingmaschinen ist daher die Laufzeitkomplexität im Sinne der asymptotischen Anzahl der Zustandsübergänge für viele Algorithmen verglichen mit Definitionen für Registermaschinen höher. Die Komplexitätstheorie befasst sich mit der Frage, für welche Probleme Algorithmen mit welcher Komplexität existieren, etwa in welchen Komplexitätsklassen Probleme liegen bzw. nicht liegen. Sofern es bei der Untersuchung der Laufzeitkomplexität nicht auf Faktoren polynomiell in der Eingabelänge ankommt, sind Turingmaschinen hier recht allgemein einsetzbar, da die Simulation vieler Registermaschinen in vielen Komplexitätsmaßen nur polynomiellen Mehraufwand bedeutet.
Nicht alle mathematischen Funktionen können von einer Turingmaschine berechnet werden, selbst wenn man sich auf wohldefinierte Funktionen mit endlicher Ein- und Ausgabe beschränkt (etwa lassen sich Funktionen zwischen beliebigen reellen Zahlen nicht durch Funktionen mit endlicher Ein- und Ausgabe repräsentieren, da die reellen Zahlen überabzählbar sind, und es gibt formal gesehen Funktionen, die sich überhaupt nicht spezifizieren lassen). So konnte Turing zeigen, dass eine Turingmaschine das Hilbert’sche Entscheidungsproblem nicht lösen kann, genauso wenig das Halteproblem.
Ebenfalls unentscheidbar ist nach dem Satz von Rice jede nicht-triviale Eigenschaft eines Programms in einer turingmächtigen Programmiersprache. Selbst wenn man sich auf terminierende Turingmaschinen beschränkt, ist es unentscheidbar, ob zwei terminierende Turingmaschinen dieselbe Sprache akzeptieren. Die Berechenbarkeitstheorie beschäftigt sich mit der Frage, welche Probleme von welchen Maschinenmodellen berechenbar bzw. nicht berechenbar sind.
Systeme, Computer und Programmiersprachen, die unter Ausblendung der Beschränktheit des Speichers und damit verbundener Eigenschaften eine Turingmaschine emulieren könnten, werden als turingvollständig bezeichnet.

## Formale Definition

Formal kann eine deterministische Turingmaschine als 7-Tupel

        M
        =
        (
        Q
        ,
        Σ
        ,
        Γ
        ,
        δ
        ,

          q

            0

        ,
        ◻
        ,
        F
        )

    {\displaystyle M=(Q,\Sigma ,\Gamma ,\delta ,q_{0},\square ,F)}

 dargestellt werden (siehe auch nichtdeterministische Turingmaschine):

        Q

    {\displaystyle Q}

 ist die endliche Zustandsmenge

        Σ

    {\displaystyle \Sigma }

 ist das endliche Eingabealphabet

        Γ

    {\displaystyle \Gamma }

 ist das endliche Bandalphabet und es gilt

        Σ
        ⊂
        Γ

    {\displaystyle \Sigma \subset \Gamma }

        δ
        :
        (
        Q
        ∖
        F
        )
        ×
        Γ
        →
        Q
        ×
        Γ
        ×
        {
        L
        ,
        N
        ,
        R
        }

    {\displaystyle \delta \colon (Q\setminus F)\times \Gamma \to Q\times \Gamma \times \{L,N,R\}}

 ist die (partielle) Überführungsfunktion

          q

            0

        ∈
        Q

    {\displaystyle q_{0}\in Q}

 ist der Anfangszustand

        ◻
        ∈
        Γ
        ∖
        Σ

    {\displaystyle \square \in \Gamma \setminus \Sigma }

 steht für das leere Feld (Blank)

        F
        ⊆
        Q

    {\displaystyle F\subseteq Q}

 die Menge der akzeptierenden Endzustände
Die partielle Überführungsfunktion

        δ

    {\displaystyle \delta }

 liefert zu einem Zustand und einem gelesenen Bandsymbol (i) den nächsten Zustand, (ii) ein Bandsymbol, das in das aktuelle Feld geschrieben wird, und
(iii) die Bewegungsrichtung des Lese-Schreib-Kopfes (L … ein Feld nach links, N … nicht bewegen, R … ein Feld nach rechts).
Da in akzeptierenden Endzuständen die Berechnung auf jeden Fall anhält, sind diese in der Definitionsmenge der Überführungsfunktion ausgenommen.

### Konfigurationen

Die Konfiguration einer Turingmaschine beschreibt nicht nur den ihr eigenen momentanen Zustand

        q
        ∈
        Q

    {\displaystyle q\in Q}

, sondern auch die Position des Lese-Schreib-Kopfes und die gerade auf dem Band vorhandenen Symbole.
Die Symbole befinden sich in einem endlichen Bereich des Bandes, der von unendlich vielen leeren Symbolen umgeben ist. Es genügt deshalb, diesen endlichen Bereich zu betrachten.
Formal besteht eine Konfiguration aus dem aktuellen Zustand

        q
        ∈
        Q

    {\displaystyle q\in Q}

, einem endlichen Wort

        u
        ∈

          Γ

            ∗

    {\displaystyle u\in \Gamma ^{*}}

, das den Inhalt des Bands links des Lese-Schreib-Kopfes enthält, und einem endlichen Wort

        v
        ∈

          Γ

            ∗

    {\displaystyle v\in \Gamma ^{*}}

, das den Inhalt des Bandes ab der aktuellen Position des Lese-Schreib-Kopfes enthält.
Eine Konfiguration ist also ein Tripel

        (
        q
        ,
        u
        ,
        v
        )

    {\displaystyle (q,u,v)}

 mit

        q
        ∈
        Q

    {\displaystyle q\in Q}

,

        u
        ∈

          Γ

            ∗

    {\displaystyle u\in \Gamma ^{*}}

,

        v
        ∈

          Γ

            ∗

    {\displaystyle v\in \Gamma ^{*}}

,
wobei das Band durch

        u
        v

    {\displaystyle uv}

 gegeben ist und der Lese-Schreib-Kopf auf dem ersten Zeichen von

        v

    {\displaystyle v}

 steht.
Oft werden Konfigurationen auch durch eine Folge

          X

            1

          X

            2

        …

          X

            i
            −
            1

        q

          X

            i

          X

            i
            +
            1

        …

          X

            n

    {\displaystyle X_{1}X_{2}\ldots X_{i-1}qX_{i}X_{i+1}\ldots X_{n}}

, mit

          X

            ℓ

        ∈
        Γ

    {\displaystyle X_{\ell }\in \Gamma }

,

        q
        ∈
        Q

    {\displaystyle q\in Q}

 beschrieben, bei der der aktuelle Zustand

        q

    {\displaystyle q}

 an der aktuellen Position des Lese-Schreib-Kopfes in das Wort, das den Bandinhalt wiedergibt, eingefügt wird.

          X

            1

    {\displaystyle X_{1}}

 ist das am weitesten links stehende nicht-leere Bandsymbol,

          X

            n

    {\displaystyle X_{n}}

 das am weitesten rechts stehende nicht-leere Bandsymbol
und

          X

            i

    {\displaystyle X_{i}}

 das Symbol, über dem sich der Lese-Schreib-Kopf befindet.
Bewegt sich der Lese-Schreib-Kopf über den Rand hinaus, sind der Konfiguration noch weitere

        ◻

    {\displaystyle \square }

-Symbole hinzuzufügen.
Durch eine Startkonfiguration wird das Eingabewort festgelegt.
Eine übliche Startkonfiguration ist

          q

            0

          X

            1

        …

          X

            n

    {\displaystyle q_{0}X_{1}\ldots X_{n}}

 mit Startzustand

          q

            0

    {\displaystyle q_{0}}

 und Eingabewort

          X

            1

        …

          X

            n

    {\displaystyle X_{1}\ldots X_{n}}

.
Diese entspricht dem Tripel

        (

          q

            0

        ,
        ϵ
        ,

          X

            1

        …

          X

            n

        )

    {\displaystyle (q_{0},\epsilon ,X_{1}\ldots X_{n})}

, wobei

        ϵ

    {\displaystyle \epsilon }

 das leere Wort ist.

### Berechnung

Die Überführungsfunktion

        δ

    {\displaystyle \delta }

 gibt zu einer Startkonfiguration den Ablauf einer Turingmaschine vor. Sie wechselt in einem Schritt von der aktuellen Konfiguration in die Nachfolgekonfiguration. Ein solcher Schritt von Konfiguration

          c

            1

    {\displaystyle c_{1}}

 zu Konfiguration

          c

            2

    {\displaystyle c_{2}}

 kann als

          c

            1

        ⊢

          c

            2

    {\displaystyle c_{1}\vdash c_{2}}

 dargestellt werden.
Schreibt die Überführungsfunktion für einen Zustand

        q

    {\displaystyle q}

 und das Eingabesymbol

          X

            i

    {\displaystyle X_{i}}

 zum Beispiel vor, dass

        Y

    {\displaystyle Y}

 geschrieben wird, der Lese-Schreib-Kopf sich nach links bewegt und der Nachfolgezustand

        p

    {\displaystyle p}

 ist, so bedeutet dies folgenden Schritt:

          X

            1

        …

          X

            i
            −
            1

        q

          X

            i

          X

            i
            +
            1

        …

          X

            n

        ⊢

          X

            1

        …
        p

          X

            i
            −
            1

        Y

          X

            i
            +
            1

        …

          X

            n

    {\displaystyle X_{1}\ldots X_{i-1}qX_{i}X_{i+1}\ldots X_{n}\vdash X_{1}\ldots pX_{i-1}YX_{i+1}\ldots X_{n}}

.
Die Berechnung einer Turingmaschine ist eine endliche oder unendliche Folge von Konfigurationsschritten. Eine Turingmaschine akzeptiert ein durch die Startkonfiguration gegebenes Wort, wenn die Berechnung in dieser Startkonfiguration beginnt und in einer Konfiguration endet, in der die Turingmaschine in einem akzeptierenden Endzustand

          q

            f

        ∈
        F

    {\displaystyle q_{f}\in F}

 ist. Endet die Berechnung in einer anderen Konfiguration, verwirft die Turingmaschine das Eingabewort. Ist die Berechnung der Turingmaschine unendlich, wird das Wort weder akzeptiert noch verworfen.

### Intuition

Die Turingmaschine führt eine Berechnung aus, indem sie schrittweise eine Eingabe in eine Ausgabe umwandelt. Ein- und Ausgabe und Zwischenergebnisse werden auf dem unendlich langen Band gespeichert.
Zu Beginn steht ein Wort als Eingabe auf dem Band (pro Bandfeld ein Zeichen des Eingabewortes), der Rest des Bandes besteht aus leeren Feldern

        ◻

    {\displaystyle \square }

. Der Lese-Schreib-Kopf steht auf dem ersten Zeichen der Eingabe und die Turingmaschine befindet sich im Startzustand

          q

            0

    {\displaystyle q_{0}}

.
Die Überführungsfunktion gibt an, wie die Turingmaschine schrittweise den Bandinhalt liest und beschreibt, ihren Zustand wechselt und die Position des Lese-Schreib-Kopfes ändert. Diese Funktion nimmt als Argument den aktuellen Zustand und das Zeichen, das sich in der aktuellen Konfiguration unter dem Lese-Schreib-Kopf befindet. Als Ergebnis liefert sie dann:

genau einen Zustand (dieser wird zum Nachfolgezustand der Turingmaschine),
ein Zeichen (mit diesem wird der Inhalt des Feldes, auf welches der Lese-Schreib-Kopf weist, überschrieben) und
entweder das Symbol L (in diesem Fall bewegt sich der Lese-Schreib-Kopf um ein Feld nach links), R (in diesem Fall bewegt er sich ein Feld nach rechts) oder N (dann verharrt er auf demselben Feld).
Damit hat die Turingmaschine einen Schritt ihres Arbeitszyklus durchlaufen und steht für einen weiteren bereit.
Da die Überführungsfunktion partiell ist, muss sie nicht für jeden Zustand und jedes Eingabezeichen einen Übergang definieren. Der Endzustand hat beispielsweise für kein Eingabezeichen einen Nachfolgezustand. Erreicht die Turingmaschine einen Endzustand

          q

            f

        ∈
        F

    {\displaystyle q_{f}\in F}

, kann die Turingmaschine deshalb keine weiteren Aktionen durchführen und die Berechnung ist beendet. Die Ausgabe ist dann der Inhalt des Bandes.

## Beispiel

Die folgende deterministische Ein-Band-Turingmaschine

        M

    {\displaystyle M}

 erwartet eine Folge von Einsen als Eingabe auf dem Band. Sie verdoppelt die Anzahl der Einsen, wobei ein Leersymbol in der Mitte stehen bleibt. Aus „11“ wird beispielsweise die Zeichenfolge „11011“. Der Schreib-Lese-Kopf befindet sich initial auf der ersten Eins. Der Anfangszustand ist

          s

            1

    {\displaystyle s_{1}}

, der Endzustand

          s

            6

    {\displaystyle s_{6}}

. Die Null steht für das leere Feld

        ◻

    {\displaystyle \square }

 und das Band besteht bis auf die darauf geschriebenen Einsen aus leeren Feldern.

        M
        =
        (
        Q
        ,
        Σ
        ,
        Γ
        ,
        δ
        ,

          s

            1

        ,
        0
        ,
        {

          s

            6

        }
        )

    {\displaystyle M=(Q,\Sigma ,\Gamma ,\delta ,s_{1},0,\{s_{6}\})}

        Q
        =
        {

          s

            1

        ,

          s

            2

        ,

          s

            3

        ,

          s

            4

        ,

          s

            5

        ,

          s

            6

        }

    {\displaystyle Q=\{s_{1},s_{2},s_{3},s_{4},s_{5},s_{6}\}}

        Σ
        =
        {
        1
        }

    {\displaystyle \Sigma =\{1\}}

        Γ
        =
        {
        1
        ,
        0
        }

    {\displaystyle \Gamma =\{1,0\}}

Die Überführungsfunktion

        δ

    {\displaystyle \delta }

 ist wie folgt definiert:

        M

    {\displaystyle M}

 durchläuft im oben erwähnten Beispiel, also bei der Eingabe „11“, folgende Zustände, wobei die aktuelle Kopfposition fett gedruckt ist:

Die Berechnung beginnt im Anfangszustand

          s

            1

    {\displaystyle s_{1}}

. Hier wird die erste Eins durch ein leeres Feld ersetzt, der Schreib-Lese-Kopf bewegt sich nach rechts und neuer Zustand wird

          s

            2

    {\displaystyle s_{2}}

. Der Kopf wandert nun so lange nach rechts, bis ein leeres Feld gelesen wird. Danach gelangt die Turingmaschine in den Zustand

          s

            3

    {\displaystyle s_{3}}

 und überliest alle weiteren Einsen, bis sie erneut ein leeres Feld findet. Dieses wird dann durch eine Eins ersetzt. Im Zustand

          s

            4

    {\displaystyle s_{4}}

 bewegt sich der Kopf zurück, überliest wieder alle Einsen, bis er auf ein leeres Feld trifft, Zustandswechsel auf

          s

            5

    {\displaystyle s_{5}}

. Der Kopf bewegt sich nun solange nach links, bis das ursprünglich in Zustand

          s

            1

    {\displaystyle s_{1}}

 geschriebene leere Feld gefunden wird. Dieses wird wieder durch eine Eins ersetzt, der Kopf bewegt sich ein Feld nach rechts und die Turingmaschine gelangt wieder in den Zustand

          s

            1

    {\displaystyle s_{1}}

. Hier beginnt ein neuer Rechenzyklus.
Wird im Zustand

          s

            1

    {\displaystyle s_{1}}

 ein leeres Feld gelesen, so gelangt die Turingmaschine

        M

    {\displaystyle M}

 in den Endzustand

          s

            6

    {\displaystyle s_{6}}

, woraufhin die Berechnung beendet wird.

## Äquivalente Varianten der Turingmaschine

In der Literatur findet man zahlreiche unterschiedliche Definitionen und Varianten der Turingmaschine, die sich jeweils in einigen Details unterscheiden. Diese sind äquivalent in dem Sinne, dass Turingmaschinen einer Definition leicht in Turingmaschinen der anderen Definitionen umgewandelt werden können, sodass diese die gleichen Berechnungen durchführen.
Häufige Abweichungen von der obigen Definition sind:

Es wird nicht zwischen Eingabealphabet und Bandalphabet unterschieden.
Statt einer Menge von akzeptierenden Endzuständen gibt es nur einen einzigen akzeptierenden Endzustand.
Zusätzlich zu einem oder mehreren akzeptierenden Endzuständen gibt es noch einen oder mehrere verwerfende Endzustände.
Der Lese-Schreib-Kopf bewegt sich immer entweder nach links oder nach rechts. Für die Bewegung des Kopfes gibt es also nur die Symbole

        L

    {\displaystyle L}

,

        R

    {\displaystyle R}

.
Die Funktion

        δ

    {\displaystyle \delta }

 ist als totale Funktion gegeben. Die Maschine hält in Endzuständen und in Zuständen

        q
        ∈
        Q

    {\displaystyle q\in Q}

, wenn das Symbol

        a

    {\displaystyle a}

 gelesen wird und

        δ
        (
        q
        ,
        a
        )
        =
        (
        q
        ,
        a
        ,
        N
        )

    {\displaystyle \delta (q,a)=(q,a,N)}

.
Semiunendliches Speicherband: Das Speicherband ist nur in eine Richtung unendlich. Es gibt ein spezielles Symbol, das den Anfang der Eingabe markiert. Der Lese-Schreib-Kopf kann sich dann nicht darüber hinaus nach links bewegen, aber beliebig weit nach rechts.
Zudem gibt es Erweiterungen, die ebenfalls hinsichtlich der Berechenbarkeit äquivalent zu Turingmaschinen sind. Selbst komplexitätstheoretisch sind die Unterschiede zwischen vielen der Varianten weitgehend zu vernachlässigen. Insgesamt führen sehr viele Varianten zu nicht mehr als polynomialen Aufwandsunterschieden (wobei Aufwand hier eine beliebige Ressource meint) und sind daher für viele komplexitätstheoretische Untersuchungen vernachlässigbar. Man passt in Abhängigkeit von den Zielen der jeweiligen Analyse das verwendete Modell so an, dass die Analyse möglichst einfach durchgeführt werden kann. Es gibt jedoch auch hinsichtlich der Berechenbarkeit, nicht aber der Komplexität (im Sinne von „bis auf polynomiellen Mehraufwand“) äquivalente Erweiterungen der Turingmaschine, wie zum Beispiel nichtdeterministische Turingmaschinen und bestimmte Orakel-Turingmaschinen.

Mehrspuren-Turingmaschine (engl. multi-track Turing machine): Turingmaschinen, die erlauben, mehrere Symbole in ein Feld des Speicherbands zu speichern.
Mehrband-Turingmaschine (engl. multitape Turing machine): Turingmaschinen mit mehreren Bändern mit jeweils einem Lese-Schreib-Kopf.
Vergessliche Turingmaschine (engl. oblivious Turing machines): Eine Turingmaschine wird vergesslich oder auch bewegungsuniform genannt, falls die Kopfbewegungen nicht vom konkreten Inhalt der Eingabe abhängen, sondern nur von der Länge der Eingabe. Jede Turingmaschine kann durch eine vergessliche simuliert werden.
Zweikellerautomat (engl. two-stack push down automaton): ein Kellerautomat mit zwei Kellerspeichern.
Zählermaschinen (engl. counter machine) mit mindestens zwei Zählern.

### Überführungsfunktion δ als Ganzzahl

In seinem ursprünglichen Artikel zu Hilberts Entscheidungsproblem beschreibt Alan Turing eine Möglichkeit, die Überführungsfunktion, die man meistens grafisch abbildet oder in einer Tabelle aufschreibt, mithilfe einer einzigen Zahl zu definieren. Dazu überführt er die Tabelle zuerst in eine Normalform und ersetzt dann die einzelnen Zustände, Buchstaben und Anweisungen durch Zahlen, die dann zu einer langen Zahl zusammengefasst werden.

## Universelle Turingmaschine

In der obigen Definition ist das Programm fest in die Maschine eingebaut und kann nicht verändert werden. Kodiert man die Beschreibung einer Turingmaschine als hinreichend einfache Zeichenkette, so kann man eine sogenannte universelle Turingmaschine – selbst eine Turingmaschine – konstruieren, welche eine solche Kodierung einer beliebigen Turingmaschine als Teil ihrer Eingabe nimmt und das Verhalten der kodierten Turingmaschine auf der ebenfalls gegebenen Eingabe simuliert. Aus der Existenz einer solchen universellen Turingmaschine folgt zum Beispiel die Unentscheidbarkeit des Halteproblems. Eine ähnliche Idee, bei der das Programm als ein Teil der veränderbaren Eingabedaten betrachtet wird, liegt auch fast allen heutigen Rechnerarchitekturen zugrunde (Von-Neumann-Architektur).
Formal ist eine universelle Turingmaschine eine Maschine

              U
              T
              M

            ϕ

    {\displaystyle {\mathit {UTM}}_{\phi }}

, die eine Eingabe

        w
        ‖
        x

    {\displaystyle w\|x}

 liest. Das Wort

        w

    {\displaystyle w}

 ist hierbei eine hinreichend einfache Beschreibung einer Maschine

          M

            w

    {\displaystyle M_{w}}

, die zu einer bestimmten Funktion mit Eingabe

        x

    {\displaystyle x}

 die Ausgabe berechnet.

        ‖

    {\displaystyle \|}

 ist ein Trennzeichen zwischen Programmbeschreibung und Eingabe.

              U
              T
              M

            ϕ

    {\displaystyle {\mathit {UTM}}_{\phi }}

 simuliert also das Verhalten von

          M

            w

    {\displaystyle M_{w}}

 mit Hilfe der Funktionsbeschreibung

        w

    {\displaystyle w}

 und der Eingabe

        x

    {\displaystyle x}

. Der Index

        ϕ

    {\displaystyle \phi }

 in

              U
              T
              M

            ϕ

    {\displaystyle {\mathit {UTM}}_{\phi }}

 zeigt an, dass es nicht nur eine einzige universelle Turingmaschine gibt. So könnten z. B.

              U
              T
              M

            1

    {\displaystyle {\mathit {UTM}}_{1}}

 und

              U
              T
              M

            2

    {\displaystyle {\mathit {UTM}}_{2}}

 verschiedene Wörter verstehen. Das Wort

        w

    {\displaystyle w}

 muss dabei in einer Sprache codiert sein, die die

              U
              T
              M

            ϕ

    {\displaystyle {\mathit {UTM}}_{\phi }}

 versteht.

## Bekannte Turingmaschinen

### Fleißiger Biber

Als Fleißige Biber (engl. busy beaver) werden die deterministischen Turingmaschinen bezeichnet, die bezogen auf alle terminierenden deterministischen Turingmaschinen mit derselben Anzahl von Zuständen und Symbolen die maximale Anzahl eines bestimmten Symbols auf das Band schreiben und dann anhalten. Es existiert keine berechenbare Funktion, die einer gegebenen Anzahl von Symbolen und Zuständen eines entsprechenden Fleißigen Bibers die Anzahl der von ihm am Ende geschriebenen Symbole (die sogenannte Radó-Funktion) oder die Anzahl der Schritte zuordnet, die er braucht, um zu terminieren.

### Ameise

Chris Langtons Ameise ist eine Turingmaschine mit zweidimensionalem Band (eigentlich eine Fläche) und sehr einfachen Regeln, dessen Bandinhalt als zweidimensionales Bild zunächst chaotisch aussieht, jedoch nach über 10.000 Schritten eine gewisse sichtbare Struktur herausbildet.

## An Turingmaschinen angelehnte Maschinenmodelle

### Nichtdeterministische Turingmaschine

Eine nichtdeterministische Turingmaschine verwendet anstatt der Übergangsfunktion

        δ

    {\displaystyle \delta }

 eine Übergangsrelation.
In der Konfiguration dieser nichtdeterministischen Turingmaschine kann es daher mehrere Möglichkeiten für den nächsten Berechnungsschritt geben. Die Maschine akzeptiert ein Wort, wenn eine der möglichen Berechnungen, die mit dem Wort als Eingabe starten, einen akzeptierenden Endzustand erreicht.

### Alternierende Turingmaschine

Eine alternierende Turingmaschine ist eine nichtdeterministische Turingmaschine, welche die Regeln für die Akzeptanz einer Eingabe erweitert.
Dabei werden existentielle und universelle Zustände der Maschine unterschieden.
Erstere akzeptieren eine Eingabe, wenn es eine mögliche Berechnung gibt, die akzeptiert, während die zweiten Zustände Eingaben nur dann akzeptieren, wenn alle möglichen Berechnungen akzeptiert werden.

### Orakel-Turingmaschine

Orakel-Turingmaschinen sind Verallgemeinerungen der Turingmaschine, bei der die Turingmaschine in einem Schritt bestimmte zusätzliche Operationen durchführen kann, etwa die Lösung unentscheidbarer oder nur mit hohem Aufwand entscheidbarer Probleme. Somit erlauben Orakel-Turingmaschinen eine weitere Kategorisierung unentscheidbarer Probleme (siehe hierzu Turinggrad) oder auch die Definition zusätzlicher Komplexitätsklassen.

### Probabilistische Turingmaschine

Probabilistische Turingmaschinen erlauben für jeden Zustand und jede Eingabe zwei (oder äquivalent dazu endlich viele) mögliche Übergänge, von denen bei der Ausführung – intuitiv ausgedrückt – einer zufällig ausgewählt wird, und dienen der theoretischen Beschreibung randomisierter Algorithmen.

### Quanten-Turingmaschine

Quanten-Turingmaschinen dienen in der Quanteninformatik als abstrakte Maschinenmodelle zur theoretischen Beschreibung der Möglichkeiten von Quantencomputern. Quantenschaltungen sind in diesem Kontext als anderes verbreitetes Modell zu nennen.

### Persistente Turingmaschine

Um interaktive Modelle (im Sinne von „Modellen mit Gedächtnis“) durch eine Turingmaschine darzustellen, ist eine Erweiterung derselben um ebendieses Gedächtnis notwendig.
Laut Definition ist eine persistente Turingmaschine (PTM) eine nichtdeterministische 3-Band-Turingmaschine mit einem Eingabe-, einem Arbeits- und einem Ausgabeband. Die Eingabe wird auf dem Arbeitsband verarbeitet und erst nach vollständiger Bearbeitung gelangen die Ergebnisse auf dem Ausgabeband zurück in die „Umwelt“. Danach kann eine erneute Eingabe aus der Umwelt verarbeitet werden. Zwischen zwei Arbeitsschritten bleiben die Inhalte des Arbeitsbandes als „Gedächtnis“ erhalten.

### Zenomaschine

Die Zenomaschine ist eine in geometrischer Reihe beschleunigt immer schneller rechnende Turingmaschine. Sie stellt ein fiktives Modell jenseits der Turing-Berechenbarkeit dar.

## Beziehung zwischen einer Turingmaschine und einer formalen Sprache

### Akzeptierte Sprache

Eine Turingmaschine akzeptiert eine Sprache

        L

    {\displaystyle L}

, wenn sie bei Eingabe eines jeden Wortes

        x
        ∈
        L

    {\displaystyle x\in L}

 nach endlich vielen Schritten in einem akzeptierenden Zustand hält und bei Eingabe eines jeden Wortes

        x
        ∉
        L

    {\displaystyle x\notin L}

 in einem nicht akzeptierenden Zustand oder überhaupt nicht hält.
Eine Sprache

        L
        ⊆

          Σ

            ⋆

    {\displaystyle L\subseteq \Sigma ^{\star }}

 heißt genau dann rekursiv aufzählbar bzw. semientscheidbar (Typ 0 der Chomsky-Hierarchie), wenn es eine Turingmaschine gibt, die

        L

    {\displaystyle L}

 akzeptiert.

### Entscheidbare Sprache

Akzeptiert eine Turingmaschine eine Sprache und hält sie zusätzlich bei allen Eingaben, die nicht zu dieser Sprache gehören, so entscheidet die Turingmaschine diese Sprache.
Eine Sprache

        L
        ⊆

          Σ

            ⋆

    {\displaystyle L\subseteq \Sigma ^{\star }}

 heißt rekursiv oder entscheidbar genau dann, wenn es eine Turingmaschine gibt, die

        L

    {\displaystyle L}

 entscheidet.
