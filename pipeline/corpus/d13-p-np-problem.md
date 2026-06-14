---
url: https://de.wikipedia.org/wiki/P-NP-Problem
---

# P-NP-Problem

## Überblick

Das P-NP-Problem (auch P≟NP oder P versus NP) ist ein ungelöstes Problem der Komplexitätstheorie in der theoretischen Informatik. Dabei geht es um die Frage, ob die Menge der Probleme, die schnell lösbar sind (P), und die Menge der Probleme, bei denen man eine vorgeschlagene Lösung schnell auf Korrektheit überprüfen kann (NP), identisch sind. Schnell lösbar bzw. prüfbar bedeutet hier, dass dafür ein Algorithmus existiert, dessen Rechenaufwand (Zahl der Rechenschritte), abhängig von der Größe der Eingabe, durch eine Polynomfunktion beschränkt ist. Die Größe der Eingabe ist hier vereinfacht gesagt die Anzahl der Elemente, die dem Algorithmus eingegeben werden. Beim Sortieren von Karteikarten wäre dies zum Beispiel die Anzahl der Karteikarten.
Es ist zwar offensichtlich, dass man bei allen schnell lösbaren Problemen auch schnell die Korrektheit einer Lösung überprüfen kann, in der umgekehrten Richtung ist dies jedoch nicht klar: Für manche Probleme existiert zwar ein Algorithmus, der eine vorgeschlagene Lösung schnell überprüfen kann, aber es konnte weder ein Algorithmus gefunden werden, der auch schnell eine korrekte Lösung findet, noch konnte die Unmöglichkeit eines solchen Algorithmus bewiesen werden. Somit ist die Fragestellung ungelöst. Würde man für alle schnell prüfbaren Probleme

        N
        P

    {\displaystyle NP}

 einen Algorithmus finden, der diese auch schnell löst, so gälte

        P
        =
        N
        P

    {\displaystyle P=NP}

. Könnte für mindestens ein Problem aus

        N
        P

    {\displaystyle NP}

 gezeigt werden, dass dieses prinzipiell nicht schnell lösbar ist, wäre

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 bewiesen.

## Geschichte

Erkannt wurde das P-NP-Problem zu Beginn der 1970er Jahre durch unabhängige Arbeiten von Stephen Cook und Leonid Levin. Es gilt als eines der wichtigsten ungelösten Probleme der Informatik und wurde vom Clay Mathematics Institute in die Liste der Millennium-Probleme aufgenommen.
Wie später bekannt wurde, findet sich eine Formulierung des Problems bereits in einem Brief von Kurt Gödel, den dieser an John von Neumann kurz vor dessen Tod schickte (am 20. März 1956). Eine weitere frühe Formulierung findet sich in einem Brief von John Forbes Nash 1955 an die National Security Agency, wobei es um Kryptographie ging.

## P und NP

Die Komplexitätstheorie klassifiziert Probleme, die von Computern berechnet werden können, anhand des zu ihrer Lösung erforderlichen Aufwands von Zeit oder Speicher, genauer: danach, wie schnell der Aufwand mit der Größe des Problems wächst. Ein Problem ist beispielsweise das Sortieren von Karteikarten. Dabei kann untersucht werden, wie sich die benötigte Zeit ändert, wenn z. B. ein doppelt so hoher Stapel sortiert wird.
Das hier genutzte Maß für den Berechnungsaufwand ist die Zahl der Rechenschritte, die der Algorithmus für ein Problem benötigt (Zeitkomplexität). Um den Berechnungsaufwand eindeutig anzugeben, werden außerdem formale Maschinenmodelle zur Darstellung der Lösungsalgorithmen benötigt. Ein häufig verwendetes Modell ist dabei die deterministische Turingmaschine, die als die Abstraktion eines realen Computers angesehen werden kann.

### P

Eine der Problemkategorien ist die Komplexitätsklasse

        P

    {\displaystyle P}

. Sie enthält die Probleme, für die eine deterministische Turingmaschine existiert, die das Problem in Polynomialzeit löst. Das heißt, es gibt ein Polynom

        f
        (
        n
        )
        =

          n

            k

        +
        c

    {\displaystyle f(n)=n^{k}+c}

 mit

        c
        ,
        k
        ∈

          N

    {\displaystyle c,k\in \mathbb {N} }

, so dass die Turingmaschine für jede beliebige Probleminstanz

        x

    {\displaystyle x}

 höchstens

        f
        (
        n
        )

    {\displaystyle f(n)}

 Rechenschritte braucht, wobei

        n
        =
        len
        ⁡
        (
        x
        )

    {\displaystyle n=\operatorname {len} (x)}

 die Länge der Eingabe ist, mit der die Probleminstanz der Maschine eingegeben wird. Probleme aus

        P

    {\displaystyle P}

 sind somit deterministisch in Polynomialzeit lösbar.
Das oben erwähnte Sortierproblem ist in

        P

    {\displaystyle P}

, weil es Algorithmen gibt, die

        n

    {\displaystyle n}

 Datensätze (Karteikarten) in einer Zeit sortieren, die durch eine quadratische Funktion in

        n

    {\displaystyle n}

 beschränkt ist. Ein weiteres Beispiel eines Problems in

        P

    {\displaystyle P}

 ist das Schaltkreis-Auswertungsproblem.
Der Unterschied zwischen einer Turingmaschine und realen Computern spielt hier keine Rolle, weil jeder Algorithmus, der auf einem realen Rechner ein Problem in Polynomialzeit löst, auch mit einer Turingmaschine in polynomieller Zeit realisiert werden kann (wobei aber der Grad des die Laufzeit beschränkenden Polynoms in der Regel höher sein wird).

### NP

Ein weiteres Maschinenmodell ist die nichtdeterministische Turingmaschine (NTM); sie ist eine Verallgemeinerung der deterministischen Variante. Eine NTM kann in einer Situation mehrere Möglichkeiten haben, ihre Berechnung fortzusetzen; der Rechenweg ist also nicht immer eindeutig bestimmt. Es handelt sich dabei um ein theoretisches Modell, denn es gibt keine real existierenden Computer, die ihren Rechenweg derart verzweigen können. Sein Nutzen ist in diesem Zusammenhang, dass damit eine weitere Komplexitätsklasse

        N
        P

    {\displaystyle NP}

 definiert werden kann, die viele Probleme von praktischem Interesse enthält, von denen man noch nicht weiß, ob sie in

        P

    {\displaystyle P}

 liegen.

        N
        P

    {\displaystyle NP}

 ist als die Menge der von einer NTM in Polynomialzeit lösbaren Probleme definiert. Die deterministische Turingmaschine ist ein Spezialfall der NTM; sie verzichtet auf das Verzweigen des Rechenwegs. Darum ist

        P

    {\displaystyle P}

 eine Teilmenge von

        N
        P

    {\displaystyle NP}

.
Man kann

        N
        P

    {\displaystyle NP}

 gleichbedeutend als die Menge der Probleme definieren, von denen sich in Polynomialzeit mit einer deterministischen Turingmaschine entscheiden lässt, ob eine vorgeschlagene Lösung zutrifft. Beispielsweise ist derzeit kein deterministischer Algorithmus bekannt, um eine gegebene Zahl in Polynomialzeit zu faktorisieren. Es ist jedoch sehr einfach prüfbar, ob ein vorgeschlagener Faktor die Zahl ohne Rest teilt und damit tatsächlich ein Faktor der Zahl ist.

### Ist P = NP?

Unbekannt ist, ob die beiden Klassen

        P

    {\displaystyle P}

 und

        N

        P

    {\displaystyle N\;\!\!P}

 identisch sind, ob also auch die schwersten Probleme der Klasse

        N

        P

    {\displaystyle N\;\!\!P}

 mit deterministischen Maschinen effizient lösbar sind. Um den Begriff des „schwersten Problems in

        N

        P

    {\displaystyle N\;\!\!P\,}

“ formal zu fassen, wurden die Begriffe der NP-Vollständigkeit und der NP-Schwere eingeführt. Ein Problem X ist NP-schwer, wenn man jedes Problem in

        N

        P

    {\displaystyle N\;\!\!P}

 durch Polynomialzeitreduktion auf X reduzieren kann. Sollte man ein NP-schweres Problem X finden, das sich deterministisch in Polynomialzeit lösen lässt, könnte man auch jedes Problem in

        N

        P

    {\displaystyle N\;\!\!P}

 deterministisch-polynomiell lösen, indem man es auf X zurückführt, und es wäre

        P
        =
        N

        P

    {\displaystyle P=N\;\!\!P}

 gezeigt. Ein Problem, das in

        N

        P

    {\displaystyle N\;\!\!P}

 liegt und NP-schwer ist, heißt NP-vollständig.
Ein anschauliches NP-vollständiges Problem ist das Rucksackproblem: Ein Behälter einer bestimmten Größe soll so mit einer Auswahl aus vorgegebenen Gegenständen gefüllt werden, dass der Inhalt so wertvoll wie nur möglich ist, ohne die Kapazität des Behälters zu überschreiten. Ein anderes wichtiges Beispiel ist das Erfüllbarkeitsproblem der Aussagenlogik.
Es wurde außerdem gezeigt: falls

        P

        ≠

        N

        P

    {\displaystyle P\!\neq \!N\;\!\!P}

 ist und somit die NP-vollständigen Probleme nicht in

        P

    {\displaystyle P}

 liegen, dann gibt es in

        N

        P

    {\displaystyle N\;\!\!P}

 auch Probleme, die weder NP-vollständig noch in

        P

    {\displaystyle P}

 sind, die also in ihrer Schwierigkeit eine Zwischenstufe darstellen (Satz von Ladner). Ein Kandidat für ein solches Problem ist das Graphen-Isomorphismus-Problem, von dem man bisher weder weiß, ob es in

        P

    {\displaystyle P}

 liegt, noch ob es NP-vollständig ist.

## Lösung des Problems

Bisher sind zum exakten Lösen von NP-vollständigen Problemen nur Exponentialzeitalgorithmen auf deterministischen Rechenmaschinen bekannt. Es ist aber nicht bewiesen, dass es keine polynomzeitlichen Algorithmen für die Lösung gibt, im Gegensatz zu einer anderen Klasse von Problemen, die garantiert mindestens exponentielle Laufzeit benötigen (EXPTIME-vollständige Probleme) und die somit beweisbar außerhalb der Klasse

        P

    {\displaystyle P}

 liegen. Würde man für eines dieser NP-vollständigen Probleme für alle Eingaben einen auf deterministischen Rechenmaschinen polynomiell zeitbeschränkten Algorithmus finden (Klasse

        P

    {\displaystyle P}

), so könnte jedes beliebige Problem aus

        N
        P

    {\displaystyle NP}

 durch Polynomialzeitreduktion darauf reduziert und somit in deterministischer Polynomialzeit gelöst werden; in diesem Falle wäre also

        P
        =
        N
        P

    {\displaystyle P=NP}

.
Da es bisher nicht gelang, einen solchen Algorithmus zu entwerfen, vermutet der Großteil der Fachwelt, dass

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 gilt. Dies könnte mathematisch dadurch nachgewiesen werden, dass für ein Problem aus der Klasse

        N
        P

    {\displaystyle NP}

 bewiesen wird, dass kein deterministischer Polynomialzeitalgorithmus zu dessen Lösung existiert.
Denkbare Szenarien für eine Lösung des Problems wären

Es wird bewiesen, dass

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

.
Es wird bewiesen, dass

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 logisch unabhängig von ZFC ist.
Es wird bewiesen, dass

        P
        =
        N
        P

    {\displaystyle P=NP}

, indem für ein NP-vollständiges Problem ein effizienter Algorithmus angegeben wird.
Es wird mittels nicht-konstruktiver Techniken bewiesen, dass

        P
        =
        N
        P

    {\displaystyle P=NP}

 gilt, also ohne einen expliziten Algorithmus zu konstruieren.
Für die Komplexität des Problems spricht, dass bereits für verschiedene Beweistechniken gezeigt wurde, dass sie allein nicht ausreichend sind, um die Fragestellung zu klären.

### Relativierende Beweistechniken

Ein Beweis für die Beziehung zweier Komplexitätsklassen ist relativierend, wenn die Beziehung für beliebig hinzugefügte Orakel erhalten bleibt. Unter die Klasse der relativierenden Beweistechniken fällt z. B. auch das in der Komplexitätstheorie häufig eingesetzte Verfahren der Diagonalisierung. Zeigt man beispielsweise

        K
        ≠

          K
          ′

    {\displaystyle K\neq K'}

 mittels Diagonalisierung, so gilt automatisch

          K

            A

        ≠

          K

            ′

              A

    {\displaystyle K^{A}\neq K'^{A}}

 für jedes Orakel

        A

    {\displaystyle A}

. Der folgende wichtige Satz von Theodore Baker, John Gill und Robert Solovay beweist, dass relativierende Beweistechniken kein probates Mittel für das P-NP-Problem sein können und viele Angriffsmethoden auf das P-NP-Problem aus der theoretischen Informatik hierdurch ausfallen:

Es existieren zwei Orakel

        A

    {\displaystyle A}

 und

        B

    {\displaystyle B}

, so dass

          P

            A

        =

          NP

            A

    {\displaystyle \operatorname {P} ^{A}=\operatorname {NP} ^{A}}

 und

          P

            B

        ≠

          NP

            B

    {\displaystyle \operatorname {P} ^{B}\neq \operatorname {NP} ^{B}}

.

### Natürliche Beweise

Alexander Alexandrowitsch Rasborow und Steven Rudich führten das Konzept der „natürlichen Beweise“ (engl. natural proofs) in ihrer gleichnamigen Arbeit von 1994 ein. Unter der allgemeinen vermuteten Annahme, dass bestimmte Einwegfunktionen existieren, zeigten sie, dass es nicht möglich ist,

        P

    {\displaystyle P}

 und

        N
        P

    {\displaystyle NP}

 durch eine bestimmte Sorte kombinatorischer Beweistechniken zu trennen.
Vereinfacht formuliert ist ein Beweis „natürlich“, wenn er ein Kriterium für „Einfachheit“ definiert und zeigt, dass Funktionen aus

        P

    {\displaystyle P}

 diese Eigenschaft haben und es ein NP-vollständiges Problem gibt, das diese Eigenschaft nicht besitzt. Das Kriterium für „Einfachheit“ muss hier zum einen für eine ausreichend große Menge von Funktionen gelten, zum anderen ausreichend einfach nachprüfbar sein.

## Beweisversuche

Viele Amateure und professionelle Forscher haben sich am P-NP-Problem versucht und ihre Resultate veröffentlicht. Gerhard Woeginger betrieb eine Sammlung an Beweisversuchen. Im September 2016 enthielt sie 62 angebliche Beweise für

        P
        =
        N
        P

    {\displaystyle P=NP}

, 50 Beweise, die

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 zeigen sollten, zwei Beweise, dass das Problem nicht beweisbar ist, und einen Beweis, dass es unentscheidbar ist. Unter all diesen Arbeiten gibt es nur eine einzige, die in einer peer-reviewed Zeitschrift erschienen ist, von den Experten auf diesem Gebiet gründlich überprüft wurde und von der Forschungsgemeinschaft allgemein als korrekt akzeptiert wird, nämlich die Arbeit von Mihalis Yannakakis, die allerdings nicht die P-gegen-NP-Frage klärt, sondern nur zeigt, dass ein bestimmter Ansatz zur Klärung dieser Frage niemals funktionieren wird.
In jüngerer Zeit bekannt geworden ist der Beweisversuch für

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 vom 6. August 2010 des bei Hewlett-Packard angestellten Mathematikers Vinay Deolalikar. Er galt schnell als widerlegt, aber es gebührt ihm der Verdienst, sowohl in der Öffentlichkeit als auch in Fachkreisen das Thema zeitweise neu in den Fokus gerückt zu haben.
Im Jahr 2013 behauptete der indische Mathematiker Vinay Deolalikar, eine Lösung für das P-NP-Problem gefunden zu haben, dies jedoch ohne Erfolg. Deolalikar sandte ein Manuskript an 21 Mathematiker, das den Versuch eines Beweises enthielt, dass P ungleich NP ist, aber seine Behauptung wurde nicht von der mathematischen Gemeinschaft anerkannt. Deolalikars Behauptung erregte beträchtliche Aufmerksamkeit, da sie potenziell die Klärung eines der Millennium-Probleme darstellte, für dessen Lösung die Clay-Stiftung eine Million Dollar Preisgeld ausgelobt hatte. Trotz Deolalikars Anspruch und seiner Bemühungen, einen Beweis vorzulegen, der seine Behauptung stützte, konnte sein Manuskript keine Zustimmung von Experten finden. Es wurde festgestellt, dass weitere Überprüfungen und Analysen erforderlich waren, um die Gültigkeit seines Beweises zu bestätigen. Seitdem wird das P-NP-Problem weiterhin als ungelöst angesehen, und die Suche nach einer Lösung bleibt eine der größten Herausforderungen der theoretischen Informatik.

## Praktische Relevanz

Sehr viele praktisch relevante Probleme sind NP-vollständig. Die Lösung des P-NP-Problems könnte daher von großer Bedeutung sein. Der Beweis von

        P
        =
        N
        P

    {\displaystyle P=NP}

 würde bedeuten, dass für die Probleme der Klasse

        N
        P

    {\displaystyle NP}

 Algorithmen existieren, die sie in Polynomialzeit lösen. Da jedoch in den vergangenen Jahrzehnten trotz intensiver Suche kein Algorithmus gefunden wurde, der ein NP-vollständiges Problem in Polynomialzeit löst, wird in der Fachwelt angezweifelt, dass solche Algorithmen überhaupt existieren, d. h., man geht von

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 aus.
Viele NP-vollständige Probleme, wie zum Beispiel das Problem des Handlungsreisenden, das Rucksackproblem oder das Problem der Färbung von Graphen, wären im Fall

        P
        =
        N
        P

    {\displaystyle P=NP}

 theoretisch optimal in kurzer Zeit lösbar. Allerdings könnten die Exponenten und Konstanten der Laufzeitfunktion eines polynomialen Verfahrens auch derart hoch sein, dass für praktisch relevante Anwendungen eines der bisher bekannten Lösungsverfahren, z. B. ein approximatives oder probabilistisches, immer noch das bessere ist.
Mit dem Beweis von

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 wären NP-Probleme endgültig als schwer lösbar klassifiziert.

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 entspricht derzeit der Annahme der meisten Wissenschaftler, und der Beweis wäre weniger folgenschwer als der Beweis von

        P
        =
        N
        P

    {\displaystyle P=NP}

.
In der Kryptologie ist Komplexität im Gegensatz zu den meisten anderen Bereichen eine erwünschte Eigenschaft. Die Sicherheit einiger asymmetrischer Verschlüsselungsverfahren basiert allein auf diesem Faktor. Ein NP-Algorithmus kann ein beliebiges asymmetrisches Kryptosystem brechen, indem er den geheimen Schlüssel „errät“ und mit dem Verfahren, das der eigentliche Empfänger der Nachricht benutzen würde, dieses effizient entschlüsselt und so den Schlüssel verifiziert. Ein Beweis von

        P
        =
        N
        P

    {\displaystyle P=NP}

 würde also bedeuten, dass die Aussicht besteht, diese Kryptosysteme in der Praxis zu brechen. Entsprechend steht die Lösung des P-NP-Problems in Zusammenhang mit der offenen Frage, ob es Einwegfunktionen gibt. Falls es sie gibt, würde

        P
        ≠
        N
        P

    {\displaystyle P\neq NP}

 folgen.

## Trivia

In der amerikanischen Fernsehserie Elementary dreht sich in die Folge Staffel2, Folge2 "Nach X auflösen" (im Original: Solve for X) alles um P versus NP. Es werden zwei Mathematiker ermordet. Der Grund ist, dass sie Nahe an der Lösung von P versus NP gewesen seien, jemand anderes aber das Preisgeld einstreichen wollte. In der Serie ermittelt ein moderner Sherlock Holmes.
