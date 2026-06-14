---
url: https://de.wikipedia.org/wiki/Sortierverfahren
---

# Sortierverfahren

## Überblick

Unter einem Sortierverfahren versteht man in der Informatik einen Algorithmus, der dazu dient, ein Tupel (i. Allg. ein Array) zu sortieren. Voraussetzung ist, dass auf der Menge der Elemente eine strenge schwache Ordnung definiert ist („kleiner-gleich“), z. B. die lexikographische Ordnung von Zeichenketten oder die numerische Ordnung von Zahlen.
Es gibt verschiedene Sortierverfahren, die unterschiedlich effizient arbeiten bezüglich der Zeitkomplexität (Anzahl der nötigen Operationen) sowie der Platzkomplexität (zusätzlich zum Eingabe-Array benötigter weiterer Speicherplatz). Die Komplexität eines Algorithmus wird üblicherweise in der Landau-Notation dargestellt (s. u. Ausdrücke wie

        Θ
        (
        n
        ⋅
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle \Theta (n\cdot \log(n))}

 (Theta) oder stilisiertes „Oh“, Omega groß, Omega klein). Die Zeitkomplexität hängt bei einigen Sortierverfahren von der anfänglichen Anordnung der Werte im Array ab, man unterscheidet dann zwischen Best Case (bei günstigster „Vorsortierung“), Average Case (Normalfall) und Worst Case (schlechtester Fall ~ die Werte sind „maximal ungünstig“).
Häufig sind zusätzliche Faktoren zu beachten, die Einfluss auf Zeit- oder Platzkomplexität haben, zum Beispiel langsamer Zugriff auf extern liegende Daten, begrenzte Größe des Arbeitsspeichers oder ähnliches.
Man unterscheidet zudem zwischen stabilen und instabilen Sortierverfahren. Stabile Sortierverfahren sind solche, die die relative Reihenfolge von Elementen, die bezüglich der Ordnung äquivalent sind, nicht verändern, während instabile Sortierverfahren dies nicht garantieren. Ist beispielsweise die Mitarbeiterliste einer Firma nach Nachname geordnet und wird anschließend nach Alter (in Jahren) sortiert, so bleibt die (Nachnamen-)Reihenfolge unter gleichaltrigen Mitarbeitern bei einem stabilen Sortierverfahren bestehen.
Zudem unterscheidet man zwischen Sortierverfahren, die in-place (auch in situ) arbeiten, d. h. der zusätzliche Speicherbedarf ist unabhängig von der Anzahl der zu sortierenden Elemente (also konstant und meist gering), und solchen, bei denen er abhängig ist (out-of-place oder ex situ).
Und man unterscheidet auch zwischen natürlichen Sortierverfahren, die bei vorsortierten Daten schneller arbeiten als bei unsortierten Daten, und solchen, die es nicht tun. Algorithmen, bei denen der Kontrollfluss von den Daten abhängt, nennt man adaptiv und dementsprechend Sortierverfahren, die nicht von den Eingabedaten abhängen, nicht-adaptiv. Nicht-adaptive Algorithmen sind demnach besonders interessant für Hardware-Implementierungen.
Manuelles Sortieren (etwa von Karteikarten) sowie elektro-mechanische Sortierverfahren (z. B. für Lochkarten) entsprechen meist einem der hier beschriebenen softwarebasierten Sortierverfahren, oder Mischtypen.

## Vergleichsbasiertes Sortieren

Allgemeine Verfahren basieren auf dem paarweisen Vergleich der zu sortierenden Elemente, ob das eine Element „kleiner“ als, „größer“ als oder „gleich(groß)“ wie das andere Element ist. Bei der Komplexitätsanalyse wird davon ausgegangen, dass der Aufwand zum Vergleich zweier Elemente konstant ist.
Die Tabelle zeigt den Aufwand für unterschiedliche Sortierverfahren.

## Nicht-vergleichsbasiertes Sortieren

Bei Sortierverfahren, die nicht auf Vergleichen beruhen, bei denen die zu sortierenden Objekte also nicht untereinander auf „kleiner“, „größer“ oder „gleich“ verglichen werden, kann bei entsprechend konditionierter Eingabe erreicht werden, dass die benötigte Zeit nur linear mit der Anzahl der zu sortierenden Elemente ansteigt. Bei großen Anzahlen zu sortierender Datensätze sind diese Algorithmen den vergleichsbasierten Verfahren überlegen, sofern sie (wegen des zusätzlichen Speicherbedarfs) angewendet werden können.
Sie können allerdings nur für numerische Datentypen verwendet werden (oder unter der Bedingung, dass der Datentyp in annehmbarem Aufwand auf Zahlenwerte gleicher Anordnung abgebildet werden kann).
Dabei wird implizit angenommen, dass die Länge des Schlüssels beschränkt ist, so dass seine Verwertung in konstanter Zeit möglich ist.
Das Senken der Zeitkomplexität von der Elementanzahl wird erkauft durch eine zusätzliche zeitliche Abhängigkeitsgröße (meist der Schlüssellänge oder der Anzahl möglicher Schlüsselwerte), oft auch durch erheblichen zusätzlichen Speicherbedarf.

Dabei stellt

        n

    {\displaystyle n}

 die Anzahl der Elemente dar,

        k

    {\displaystyle k}

 die Anzahl der möglichen Werte und

        l

    {\displaystyle l}

 die Anzahl der Stellen des längsten Schlüssels.

## Sortierung nach Beziehungen

Wenn nicht mehr nach Eigenschaften, sondern nur noch nach paarweisen Beziehungen sortiert werden kann, so spricht man von einer topologischen Sortierung. Dies ist beispielsweise der Fall, wenn Aufgaben erledigt werden müssen, manche Aufgaben aber unbedingt vor anderen durchzuführen sind, bei anderen jedoch die Reihenfolge keine Rolle spielt.
Für das topologische Sortieren gibt es Algorithmen, deren Laufzeit von der Anzahl der Beziehungen abhängt. Topologisches Sortieren ist nicht möglich, wenn gegenseitige (zyklische) Abhängigkeiten bestehen. Eine topologische Sortierung muss nicht eindeutig sein.
Wenn die Beziehungen vollständig sind, also für je zwei Objekte eine Abhängigkeit vorgegeben ist, so geht die topologische Sortierung in eine gewöhnliche Sortierung über.

## Indirektes Sortieren

In den Fällen, bei denen das Umstellen der Daten mit hohem Aufwand verbunden ist, kann man auch indirektes Sortieren anwenden. Man benötigt dazu zusätzlichen Speicher proportional zur Anzahl der Elemente (bspw. einen Zeiger auf das jeweilige Element, oder dessen Indexnummer im Basis-Array). Dann wird dieses Array sortiert und stellt somit einen (gemäß dem Vergleichskriterium) sortierten Index dar. Sollen die eigentlichen Daten anschließend ebenfalls in die richtige Reihenfolge gebracht werden, ist ein zusätzlicher Aufwand von

        Θ

          (
          n
          )

    {\displaystyle \Theta \left(n\right)}

 erforderlich.
Ist auch der (wahlfreie) Zugriff auf die Elemente „teuer“, so werden mitunter auch diejenigen Datenkomponenten in den Index übernommen, die in den Sortierschlüssel einfließen/der Sortierschlüssel sind. Dies benötigt dann weiteren zusätzlichen Speicherplatz.

## Beweis der unteren Schranke für vergleichsbasiertes Sortieren

Es lässt sich beweisen, dass ein vergleichsbasiertes Sortierverfahren nicht schneller als

        Ω
        (
        n
        ⋅
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle \Omega (n\cdot \log(n))}

 sein kann:
Sei

        B

    {\displaystyle B}

 der Entscheidungsbaum für die Zahlenfolge

        X
        =
        (

          x

            1

        ,
        …
        ,

          x

            n

        )

    {\displaystyle X=(x_{1},\ldots ,x_{n})}

. Da alle Permutationen von

        X

    {\displaystyle X}

 das Ergebnis des Sortieralgorithmus sein könnten, muss der Entscheidungsbaum

        B

    {\displaystyle B}

 mindestens

        n
        !

    {\displaystyle n!}

 Blätter haben.
Da eine Mindestanzahl von Schritten gesucht ist, treten im Entscheidungsbaum keine unnötigen Vergleiche auf.
In einem Entscheidungsbaum mit

        n
        !

    {\displaystyle n!}

 Blättern beträgt die maximale und die mittlere Tiefe eines Blattes mindestens

        log
        ⁡
        (
        n
        !
        )

    {\displaystyle \log(n!)}

.
Da eine untere Schranke gesucht ist, kann

        n
        !

    {\displaystyle n!}

 mittels

        n
        !
        ≥

            (

                n
                2

            )

            n

              /

            2

    {\displaystyle n!\geq \left({\frac {n}{2}}\right)^{n/2}}

 nach unten hin abgeschätzt werden. Damit gilt

        log
        ⁡
        (
        n
        !
        )
        ≥

          (

              n
              2

          )

        ⋅
        log
        ⁡

          (

              n
              2

          )

        =
        Ω
        (
        n
        ⋅
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle \log(n!)\geq \left({\frac {n}{2}}\right)\cdot \log \left({\frac {n}{2}}\right)=\Omega (n\cdot \log(n))}

.
Es bleibt noch zu zeigen, dass in einem Binärbaum mit

        k

    {\displaystyle k}

 Blättern die maximale und die mittlere Tiefe eines Blattes mindestens

        log
        ⁡
        (
        k
        )

    {\displaystyle \log(k)}

 beträgt. Angenommen

        B

    {\displaystyle B}

 sei ein Binärbaum, für welchen die obige Aussage nicht gilt. Seien

          T

            1

    {\displaystyle T_{1}}

 und

          T

            2

    {\displaystyle T_{2}}

 Teilbäume eines Binärbaumes mit

        k
        >
        2

    {\displaystyle k>2}

 Blättern. Für die Anzahl der Blätter

          k

            1

    {\displaystyle k_{1}}

 in

          T

            1

    {\displaystyle T_{1}}

 bzw.

          k

            2

    {\displaystyle k_{2}}

 in

          T

            2

    {\displaystyle T_{2}}

 gilt nun offensichtlich

          k

            1

        <
        k

    {\displaystyle k_{1}<k}

,

          k

            2

        <
        k

    {\displaystyle k_{2}<k}

 und

          k

            1

        +

          k

            2

        =
        k

    {\displaystyle k_{1}+k_{2}=k}

.
Für die Tiefe jedes Blattes, bezogen auf die Wurzel von

        B

    {\displaystyle B}

, gilt:

                  mittlere Tiefe

                (
                B
                )

                =

                      k

                        1

                    k

                ⋅
                (

                    tiefe

                    mittlere

                (

                  T

                    1

                )
                +
                1
                )
                +

                      k

                        2

                    k

                ⋅
                (

                    tiefe

                    mittlere

                (

                  T

                    2

                )
                +
                1
                )

                ≥

                      k

                        1

                    k

                ⋅
                (
                log
                ⁡
                (

                  k

                    1

                )
                +
                1
                )
                +

                      k

                        2

                    k

                ⋅
                (
                log
                ⁡
                (

                  k

                    2

                )
                +
                1
                )

                =

                    1
                    k

                ⋅
                (

                  k

                    1

                ⋅
                log
                ⁡
                (
                2
                ⋅

                  k

                    1

                )
                +

                  k

                    2

                ⋅
                log
                ⁡
                (
                2
                ⋅

                  k

                    2

                )
                )

    {\displaystyle {\begin{aligned}{\text{mittlere Tiefe}}(B)&={\frac {k_{1}}{k}}\cdot ({\text{tiefe}}_{\text{mittlere}}(T_{1})+1)+{\frac {k_{2}}{k}}\cdot ({\text{tiefe}}_{\text{mittlere}}(T_{2})+1)\\&\geq {\frac {k_{1}}{k}}\cdot (\log(k_{1})+1)+{\frac {k_{2}}{k}}\cdot (\log(k_{2})+1)\\&={\frac {1}{k}}\cdot (k_{1}\cdot \log(2\cdot k_{1})+k_{2}\cdot \log(2\cdot k_{2}))\end{aligned}}}

Das Minimum dieser Funktion liegt nun bei

          k

            1

        +

          k

            2

        =
        k

    {\displaystyle k_{1}+k_{2}=k}

 und

          k

            1

        =

          k

            2

        =

            k
            2

    {\displaystyle k_{1}=k_{2}={\frac {k}{2}}}

. Eingesetzt in obige Formel ergibt das:

          mittlere Tiefe

        (
        B
        )
        ≥

            1
            k

        ⋅

          (

                k
                2

            ⋅
            log
            ⁡
            (
            k
            )
            +

                k
                2

            ⋅
            log
            ⁡
            (
            k
            )

          )

        =
        log
        ⁡
        (
        k
        )

    {\displaystyle {\text{mittlere Tiefe}}(B)\geq {\frac {1}{k}}\cdot \left({\frac {k}{2}}\cdot \log(k)+{\frac {k}{2}}\cdot \log(k)\right)=\log(k)}

.
Dies ergibt einen Widerspruch zur Annahme, womit obige Aussage bewiesen ist.
