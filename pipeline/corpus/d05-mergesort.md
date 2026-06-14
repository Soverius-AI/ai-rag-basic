---
url: https://de.wikipedia.org/wiki/Mergesort
---

# Mergesort

## Überblick

Mergesort (von englisch merge ‚verschmelzen‘ und sort ‚sortieren‘) ist ein stabiler Sortieralgorithmus, der nach dem Prinzip teile und herrsche (divide and conquer) arbeitet. Er wurde erstmals 1945 durch John von Neumann vorgestellt.

## Funktionsweise

Mergesort betrachtet die zu sortierenden Daten als Liste und zerlegt sie in kleinere Listen, die jede für sich sortiert werden. Die kleinen sortierten Listen werden dann im Reißverschlussverfahren zu größeren sortierten Listen zusammengefügt (engl. (to) merge), bis eine sortierte Gesamtliste erreicht ist. Das Verfahren arbeitet bei Arrays in der Regel nicht in-place, es sind dafür aber (trickreiche) Implementierungen bekannt, in welchen die Teil-Arrays üblicherweise rekursiv zusammengeführt werden. Verkettete Listen sind besonders geeignet zur Implementierung von Mergesort, dabei ergibt sich die in-place-Sortierung fast von selbst.

### Veranschaulichung der Funktionsweise

Das Bild veranschaulicht die drei wesentlichen Schritte eines Teile-und-herrsche-Verfahrens, wie sie im Rahmen von Mergesort umgesetzt werden. Der Teile-Schritt ist ersichtlich trivial (die Daten werden einfach in zwei Hälften aufgeteilt). Die wesentliche Arbeit wird beim Verschmelzen (merge) geleistet – daher rührt auch der Name des Algorithmus. Bei Quicksort ist hingegen der Teile-Schritt aufwendig und der Merge-Schritt einfacher (nämlich eine Konkatenierung).
Bei der Betrachtung des in der Grafik dargestellten Verfahrens sollte man sich allerdings bewusst machen, dass es sich hier nur um eine von mehreren Rekursionsebenen handelt. So könnte etwa die Sortierfunktion, welche die beiden Teile 1 und 2 sortieren soll, zu dem Ergebnis kommen, dass diese Teile immer noch zu groß für die Sortierung sind. Beide Teile würden dann wiederum aufgeteilt und der Sortierfunktion rekursiv übergeben, so dass eine weitere Rekursionsebene geöffnet wird, welche dieselben Schritte abarbeitet. Im Extremfall (der bei Mergesort sogar der Regelfall ist) wird das Aufteilen so weit fortgesetzt, bis die beiden Teile nur noch aus einzelnen Datenelementen bestehen und damit automatisch sortiert sind.

## Implementierung

Der folgende Pseudocode illustriert die Arbeitsweise des Algorithmus, wobei liste die zu sortierenden Elemente enthält.

funktion mergesort(liste);
  falls (Größe von liste <= 1) dann antworte liste
  sonst
     halbiere die liste in linkeListe, rechteListe
     linkeListe = mergesort(linkeListe)
     rechteListe = mergesort(rechteListe)
     antworte merge(linkeListe, rechteListe)

funktion merge(linkeListe, rechteListe);
  neueListe
  solange (linkeListe und rechteListe nicht leer)
       falls (erstes Element der linkeListe <= erstes Element der rechteListe)
       dann füge erstes Element linkeListe in die neueListe hinten ein und entferne es aus linkeListe
       sonst füge erstes Element rechteListe in die neueListe hinten ein und entferne es aus rechteListe
  solange_ende
  solange (linkeListe nicht leer)
       füge erstes Element linkeListe in die neueListe hinten ein und entferne es aus linkeListe
  solange_ende
  solange (rechteListe nicht leer)
       füge erstes Element rechteListe in die neueListe hinten ein und entferne es aus rechteListe
  solange_ende
  antworte neueListe

## Beispiel

Im letzten Verschmelzungsschritt ist das Reißverschlussverfahren beim Verschmelzen (in der Abb. „Mischen:“) angedeutet. Blaue Pfeile verdeutlichen den Aufteilungsschritt, grüne Pfeile die Verschmelzungsschritte.
Es folgt ein Beispielcode analog zum obigen Abschnitt „Implementierung“ für den rekursiven Sortieralgorithmus. Er teilt rekursiv absteigend die Eingabe in 2 kleinere Listen, bis diese trivialerweise sortiert sind, und verschmilzt sie auf dem rekursiven Rückweg, wodurch sie sortiert werden.

function merge_sort(list x)
    if length(x) ≤ 1 then
        return x      // Kurzes x ist trivialerweise sortiert.
    var l := empty list
    var r := empty list
    var nx := length(x)−1
    // Teile x in die zwei Hälften l und r ...
    for i := 0 to floor(nx/2) do
        append x[i] to l
    for i := floor(nx/2)+1 to nx do
        append x[i] to r
    // ... und sortiere beide (einzeln).
    l := merge_sort(l)
    r := merge_sort(r)
    // Verschmelze die sortierten Hälften.
    return merge(l, r)

Beispielcode zum Verschmelzen zweier sortierter Listen.

function merge(list l, list r)
    var y := empty list    // Ergebnisliste
    var nl := length(l)−1
    var nr := length(r)−1
    var il := 0
    for i := 0 to nl+nr+1 do
        if il > nl then
            append r[i−il] to y
            continue
        if il < i−nr then
            append l[il] to y
            il := il+1
            continue
        // Jetzt ist 0 ≤ il ≤ nl und 0 ≤ i−il ≤ nr.
        if l[il] ≤ r[i−il] then
            append l[il] to y
            il := il+1
        else
            append r[i−il] to y
    return y

### Java-Implementation

Eine iterative Implementation in der Programmiersprache Java unter Verwendung von verketteten Listen könnte folgendermaßen aussehen:

(Es wird eine merge()-Funktion zum Verschmelzen zweier Listen verwendet, die im Absatz darunter erläutert wird.)

#### Der Merge-Schritt im Detail

Gegeben sind zwei in sich sortierte Listen

        A

    {\displaystyle A}

 und

        B

    {\displaystyle B}

, die zu einer sortierten Liste

        C

    {\displaystyle C}

 zusammengefügt werden sollen.
Man vergleicht nun die beiden kleinsten Elemente (am Anfang der Listen

        A

    {\displaystyle A}

 und

        B

    {\displaystyle B}

), fügt das kleinere zu

        C

    {\displaystyle C}

 hinzu und nimmt es aus der jeweiligen Liste

        A

    {\displaystyle A}

 oder

        B

    {\displaystyle B}

 heraus.
Dies wird so lange wiederholt, bis eine der beiden Listen A oder B leer ist, danach wird der Rest aus der anderen Liste

        A

    {\displaystyle A}

 oder

        B

    {\displaystyle B}

 (in der noch Einträge vorhanden sind) ans Ende von

        C

    {\displaystyle C}

 gehängt.

Der Mergeschritt braucht genau immer

          |

        A

          |

        +

          |

        B

          |

    {\displaystyle |A|+|B|}

 Operationen, da jedes Element aus beiden Listen in konstanter Zeit gelöscht und hinzugefügt werden kann. Die Laufzeit beträgt folglich:

            O

        (

          |

        A

          |

        +

          |

        B

          |

        )

    {\displaystyle {\mathcal {O}}(|A|+|B|)}

## Komplexität

Mergesort ist ein stabiles Sortierverfahren, vorausgesetzt der Merge-Schritt ist entsprechend implementiert. Seine Komplexität beträgt im Worst-, Best- und Average-Case in Landau-Notation ausgedrückt stets

            O

        (
        n
        ⋅
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle {\mathcal {O}}(n\cdot \log(n))}

.
Damit ist Mergesort hinsichtlich der Komplexität Quicksort grundsätzlich überlegen, da Quicksort (ohne besondere Vorkehrungen) ein Worst-Case-Verhalten von

        Θ
        (

          n

            2

        )

    {\displaystyle \Theta (n^{2})}

 besitzt. Es benötigt jedoch zusätzlichen Speicherplatz (der Größenordnung

            O

        (
        n
        )

    {\displaystyle {\mathcal {O}}(n)}

), ist also kein In-place-Verfahren.
Für die Laufzeit

        T
        (
        n
        )

    {\displaystyle T(n)}

 von Mergesort bei

        n

    {\displaystyle n}

 zu sortierenden Elementen gilt die Rekursionsformel

        T
        (
        n
        )
        =

                T
                (
                ⌊

                      n
                      2

                ⌋
                )

              ⏟

            Aufwand, den einen Teil zu sortieren

        +

                T
                (
                ⌈

                      n
                      2

                ⌉
                )

              ⏟

            Aufwand, den anderen Teil zu sortieren

        +

                    O

                (
                n
                )

              ⏟

            Aufwand, die beiden Teile zu verschmelzen

    {\displaystyle T(n)=\underbrace {T(\lfloor {\tfrac {n}{2}}\rfloor )} _{\text{Aufwand, den einen Teil zu sortieren}}+\underbrace {T(\lceil {\tfrac {n}{2}}\rceil )} _{\text{Aufwand, den anderen Teil zu sortieren}}+\underbrace {{\mathcal {O}}(n)} _{\text{Aufwand, die beiden Teile zu verschmelzen}}}

mit dem Rekursionsanfang

        T
        (
        1
        )
        =
        1

    {\displaystyle T(1)=1}

.
Nach dem Master-Theorem kann die Rekursionsformel durch

        2

        T
        (
        ⌊

              n
              2

        ⌋
        )
        +
        n

    {\displaystyle 2\,T(\lfloor {\tfrac {n}{2}}\rfloor )+n}

 bzw.

        2

        T
        (
        ⌈

              n
              2

        ⌉
        )
        +
        n

    {\displaystyle 2\,T(\lceil {\tfrac {n}{2}}\rceil )+n}

 approximiert werden mit jeweils der Lösung (2. Fall des Mastertheorems, s. dort)

        T
        (
        n
        )
        =

            O

        (
        n
        ⋅
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle T(n)={\mathcal {O}}(n\cdot \log(n))}

.

## Korrektheit und Terminierung

Der Rekursionsabbruch stellt die Terminierung von Mergesort offensichtlich sicher, so dass lediglich noch die Korrektheit gezeigt werden muss. Dies geschieht, indem wir folgende Behauptung beweisen:
Behauptung: In Rekursionstiefe

        i

    {\displaystyle i}

 werden die sortierten Teillisten aus Rekursionstiefe

        i

          +

        1

    {\displaystyle i{+}1}

 korrekt sortiert.
Beweis: Sei o. B. d. A. die

        (
        i

          +

        1
        )

    {\displaystyle (i{+}1)}

-te Rekursion die tiefste. Dann sind die Teillisten offensichtlich sortiert, da sie einelementig sind. Somit ist ein Teil der Behauptung schon mal gesichert. Nun werden diese sortierten Teillisten eine Rekursionsebene nach oben, also in die

        i

    {\displaystyle i}

-te Rekursion übergeben. Dort werden diese nach Konstruktion der merge-Prozedur von Mergesort korrekt sortiert. Somit ist unsere Behauptung erfüllt und die totale Korrektheit von Mergesort bewiesen.

## Natural Mergesort

Natural Mergesort (natürliches Mergesort) ist eine Erweiterung von Mergesort, die
bereits vorsortierte Teilfolgen, so genannte runs, innerhalb der zu sortierenden Startliste ausnutzt. Die Basis für den Mergevorgang bilden hier nicht die rekursiv oder iterativ gewonnenen Zweiergruppen, sondern die in einem ersten Durchgang zu bestimmenden runs:

Startliste    : 3--4--2--1--7--5--8--9--0--6
Runs bestimmen: 3--4  2  1--7  5--8--9  0--6
Merge         : 2--3--4  1--5--7--8--9  0--6
Merge         : 1--2--3--4--5--7--8--9  0--6
Merge         : 0--1--2--3--4--5--6--7--8--9

Diese Variante hat den Vorteil, dass sortierte Folgen „erkannt“ werden und die Komplexität im Best-Case

            O

        (
        n
        )

    {\displaystyle {\mathcal {O}}(n)}

 beträgt. Average- und Worst-Case-Verhalten ändern sich hingegen nicht.
Außerdem eignet sich Mergesort gut für größere Datenmengen, die nicht mehr im Hauptspeicher gehalten werden können – es müssen jeweils nur beim Verschmelzen in jeder Ebene zwei Listen vom externen Zwischenspeicher (z. B. Festplatte) gelesen und eine dorthin geschrieben werden. Eine Variante nutzt den verfügbaren Hauptspeicher besser aus (und minimiert Schreib-/Lesezugriffe auf der Festplatte), indem mehr als nur zwei Teil-Listen gleichzeitig vereinigt werden, und damit die Rekursionstiefe abnimmt.

## Paralleler Mergesort

Mergesort lässt sich aufgrund des Teile-und-herrsche Ansatzes gut parallelisieren. Verschiedene parallele Varianten wurden in der Vergangenheit entwickelt. Manche sind stark verwandt mit der hier vorgestellten sequentiellen Variante, während andere eine grundlegend verschiedene Struktur besitzen und das K-Wege-Mischen verwenden.

### Mergesort mit parallelen Rekursionsaufrufen

Der sequentielle Mergesort kann in zwei Phasen beschrieben werden, die Teilen-Phase und die anschließende Misch-Phase. Die erste besteht aus vielen rekursiven Aufrufen, die immer wieder den gleichen Aufteilungsprozess durchführen, bis die Teilsequenzen trivial sortiert sind (mit einem oder keinem Element). Ein intuitiver Ansatz ist es, diese rekursiven Aufrufe zu parallelisieren. Der folgende Pseudocode beschreibt den klassischen Mergesort Algorithmus mit paralleler Rekursion unter Verwendung der Schlüsselwörter fork and join.

// Sort elements lo through hi (exclusive) of array A.
algorithm mergesort(A, lo, hi) is
    if lo+1 < hi then  // Two or more elements.
        mid := ⌊(lo + hi) / 2⌋
        fork mergesort(A, lo, mid)
        mergesort(A, mid, hi)
        join
        merge(A, lo, mid, hi)

Dieser Algorithmus ist die triviale Modifikation des sequentiellen Algorithmus und ist noch nicht optimal. Sein Speedup ist dementsprechend auch nicht beeindruckend. Er hat einen Spann von

        Θ
        (
        n
        )

    {\displaystyle \Theta (n)}

, was nur eine Verbesserung um den Faktor

        Θ
        (
        log
        ⁡
        n
        )

    {\displaystyle \Theta (\log n)}

 ist im Vergleich zur sequentiellen Version. Dies liegt hauptsächlich an der sequentiellen Mischmethode, welche der Flaschenhals der parallelen Ausführung ist.

### Mergesort mit paralleler Mischmethode

Ein besserer Parallelismus kann durch eine parallele Mischmethode erreicht werden. Cormen et al. präsentieren eine binäre Variante, welche zwei sortierte Teilsequenzen in eine sortierte Ausgabesequenz mischt.
In der längeren der beiden Sequenzen (falls ungleich lang) wird das Element des mittleren Indexes ausgewählt. Seine Position in der anderen Sequenz wird so bestimmt, dass die Sequenz sortiert bliebe, wenn dieses Element an der bestimmten Stelle eingefügt werden würde. So weiß man, wie viele Elemente insgesamt kleiner sind als das Pivotelement, und die finale Position des Pivots kann in der Ausgabesequenz berechnet werden. Für die so erzeugten Teilfolgen der kleineren und größeren Elemente wird die Mischmethode wieder parallel ausgeführt, bis der Basisfall der Rekursion erreicht ist.
Der folgende Pseudocode illustriert den Mergesort mit modifizierter paralleler Mischmethode (aus Cormen et al.).

/**
 * A: Input array
 * B: Output array
 * lo: lower bound
 * hi: upper bound
 * off: offset
 */
algorithm parallelMergesort(A, lo, hi, B, off) is
    len := hi - lo + 1
    if len == 1 then
        B[off] := A[lo]
    else let T[1..len] be a new array
        mid := ⌊(lo + hi) / 2⌋
        mid' := mid - lo + 1
        fork parallelMergesort(A, lo, mid, T, 1)
        parallelMergesort(A, mid + 1, hi, T, mid' + 1)
        join
        parallelMerge(T, 1, mid', mid' + 1, len, B, off)

Um eine Rekurrenzrelation für den Worst Case zu erhalten, müssen die rekursiven Aufrufe von parallelMergesort aufgrund der parallelen Ausführung nur einmal aufgeführt werden. Man erhält

          T

            ∞

            sort

        (
        n
        )
        =

          T

            ∞

            sort

          (

              n
              2

          )

        +

          T

            ∞

            merge

        (
        n
        )
        =

          T

            ∞

            sort

          (

              n
              2

          )

        +
        Θ

          (

            log
            ⁡
            (
            n

              )

                2

          )

    {\textstyle T_{\infty }^{\text{sort}}(n)=T_{\infty }^{\text{sort}}\left({\frac {n}{2}}\right)+T_{\infty }^{\text{merge}}(n)=T_{\infty }^{\text{sort}}\left({\frac {n}{2}}\right)+\Theta \left(\log(n)^{2}\right)}

.
Für genauere Informationen über die Komplexität der parallelen Mischmethode.
Die Lösung dieser Rekurrenz ist

          T

            ∞

            sort

        =
        Θ

          (

            log
            ⁡
            (
            n

              )

                3

          )

    {\textstyle T_{\infty }^{\text{sort}}=\Theta \left(\log(n)^{3}\right)}

.
Dieser Algorithmus erreicht eine Parallelisierbarkeit von

        Θ

            (

            n

              (
              log
              ⁡
              n

                )

                  2

            )

    {\displaystyle \Theta {\biggr (}{n \over (\log n)^{2}}{\biggr )}}

, was um einiges besser ist als der Parallelismus des vorherigen Algorithmus. Solch ein Sortieralgorithmus kann, wenn er mit einem schnellen stabilen sequentiellen Sortieralgorithmus und einer sequentiellen Mischmethode als Basisfall für das Mischen von zwei kleinen Sequenzen ausgestattet ist, gut in der Praxis funktionieren.

### Paralleler Mehrwege-Mergesort

Es wirkt unnatürlich, Mergesort Algorithmen auf binäre Mischmethoden zu beschränken, da oftmals mehr als zwei Prozessoren zur Verfügung stehen. Ein besserer Ansatz wäre es, ein K-Wege-Mischen zu realisieren. Diese Generalisierung mischt im Gegensatz zum binären Mischen

        k

    {\displaystyle k}

 sortierte Sequenzen zu einer sortierten Sequenz. Diese Misch-Variante eignet sich gut zur Beschreibung eines Sortieralgorithmus auf einem PRAM.

#### Grundidee

Gegeben sei eine Folge von

        n

    {\displaystyle n}

 Elementen. Ziel ist es, diese Sequenz mit

        p

    {\displaystyle p}

 verfügbaren Prozessoren zu sortieren. Die Elemente sind dabei gleich auf alle Prozessoren aufgeteilt und werden zunächst lokal mit einem sequentiellen Sortieralgorithmus vorsortiert. Dementsprechend bestehen die Daten nun aus sortierten Folgen

          S

            1

        ,
        .
        .
        .
        ,

          S

            p

    {\displaystyle S_{1},...,S_{p}}

 der Länge

        ⌈

            n
            p

        ⌉

    {\textstyle \lceil {\frac {n}{p}}\rceil }

. Der Einfachheit halber sei

        n

    {\displaystyle n}

 ein Vielfaches von

        p

    {\displaystyle p}

, so dass für

        i
        =
        1
        ,
        .
        .
        .
        ,
        p

    {\displaystyle i=1,...,p}

 gilt:

          |

            S

              i

          |

        =

            n
            p

    {\textstyle \left\vert S_{i}\right\vert ={\frac {n}{p}}}

. Jede dieser Sequenzen wird wiederum in

        p

    {\displaystyle p}

 Teilsequenzen

          S

            i
            ,
            1

        ,
        .
        .
        .
        ,

          S

            i
            ,
            p

    {\displaystyle S_{i,1},...,S_{i,p}}

 partitioniert, indem für

        j
        =
        1
        ,
        .
        .
        .
        ,
        p

    {\displaystyle j=1,...,p}

 die Trennelemente

          v

            j

    {\displaystyle v_{j}}

 mit globalem Rang

        k
        =
        j

            n
            p

    {\textstyle k=j{\frac {n}{p}}}

 bestimmt werden. Die korrespondierenden Indizes werden in jeder Folge

          S

            i

    {\displaystyle S_{i}}

 mit binärer Sucher ermittelt, sodass die Folgen anhand der Indizes aufgeteilt werden können. Formal definiert gilt somit

          S

            i
            ,
            j

        :=
        {
        x
        ∈

          S

            i

          |

        r
        a
        n
        k
        (

          v

            j
            −
            1

        )
        <
        r
        a
        n
        k
        (
        x
        )
        ≤
        r
        a
        n
        k
        (

          v

            j

        )
        }

    {\displaystyle S_{i,j}:=\{x\in S_{i}|rank(v_{j-1})<rank(x)\leq rank(v_{j})\}}

.
Nun werden die Elemente von

          S

            1
            ,
            i

        ,
        .
        .
        .
        ,

          S

            p
            ,
            i

    {\displaystyle S_{1,i},...,S_{p,i}}

 dem Prozessor

        i

    {\displaystyle i}

 zugeteilt. Dies sind alle Elemente vom globalen Rang

        (
        i
        −
        1
        )

            n
            p

    {\textstyle (i-1){\frac {n}{p}}}

 bis zum Rang

        i

            n
            p

    {\textstyle i{\frac {n}{p}}}

, die über die

          S

            i

    {\displaystyle S_{i}}

 verteilt sind. So erhält jeder Prozessor eine Folge von sortierten Sequenzen. Aus der Tatsache, dass der Rang

        k

    {\displaystyle k}

 der Trennelemente

          v

            i

    {\displaystyle v_{i}}

 global gewählt wurde, ergeben sich zwei wichtige Eigenschaften: Zunächst sind die Trennelemente so gewählt, dass jeder Prozessor nach der Zuteilung der neuen Daten immer noch mit

        n

          /

        p

    {\textstyle n/p}

 Elementen betraut ist. Der Algorithmus besitzt also eine perfekte Lastverteilung. Außerdem sind alle Elemente des Prozessors

        i

    {\displaystyle i}

 kleiner oder gleich der Elemente des Prozessors

        i
        +
        1

    {\displaystyle i+1}

. Wenn nun jeder Prozessor ein p-Wege-Mischen lokal durchführt, sind aufgrund dieser Eigenschaft die Elemente global sortiert. Somit müssen die Ergebnisse nur in der Reihenfolge der Prozessoren zusammengesetzt werden.

#### Trennelementbestimmung

In der einfachsten Form sind

        p

    {\displaystyle p}

 sortierte Folgen

          S

            1

        ,
        .
        .
        .
        ,

          S

            p

    {\displaystyle S_{1},...,S_{p}}

 gleichverteilt auf

        p

    {\displaystyle p}

 Prozessoren sowie ein Rang

        k

    {\displaystyle k}

 gegeben. Gesucht ist nun ein Trennelement

        x

    {\displaystyle x}

 mit globalem Rang

        k

    {\displaystyle k}

 in der Vereinigung der Folgen. Damit kann jede Folge

          S

            i

    {\displaystyle S_{i}}

 an einem Index

          l

            i

    {\displaystyle l_{i}}

 in zwei Teile aufgeteilt werden: Der untere Teil besteht nur aus Elementen, die kleiner

        x

    {\displaystyle x}

 sind, während der obere Teil alle Elemente enthält, welche größer oder gleich als

        x

    {\displaystyle x}

 sind.
Der hier vorgestellte sequentielle Algorithmus gibt die Indizes der Trennungen zurück, also die Indizes

          l

            i

    {\displaystyle l_{i}}

in den Folgen

          S

            i

    {\displaystyle S_{i}}

, sodass

          S

            i

        [

          l

            i

        ]

    {\displaystyle S_{i}[l_{i}]}

 einen global kleineren Rang als

        k

    {\displaystyle k}

 hat und

          r
          a
          n
          k

          (

              S

                i

            [

              l

                i

            +
            1
            ]

          )

        ≥
        k

    {\displaystyle \mathrm {rank} \left(S_{i}[l_{i}+1]\right)\geq k}

 ist.

algorithm msSelect(S : Array of sorted Sequences [S_1,..,S_p], k : int) is
    for i = 1 to p do
 (l_i, r_i) = (0, |S_i|-1)

    while there exists i: l_i < r_i do
 //pick Pivot Element in S_j[l_j],..,S_j[r_j], chose random j uniformly
 v := pickPivot(S, l, r)
 for i = 1 to p do
     m_i = binarySearch(v, S_i[l_i, r_i]) //sequentially
 if m_1 + ... + m_p >= k then //m_1+ ... + m_p is the global rank of v
     r := m  //vector assignment
 else
     l := m

    return l

Für die Komplexitätsanalyse wurde das PRAM-Modell gewählt. Die p-fache Ausführung der binarySearch Methode hat eine Laufzeit in

            O

          (

            p
            log
            ⁡

              (

                n

                  /

                p

              )

          )

    {\displaystyle {\mathcal {O}}\left(p\log \left(n/p\right)\right)}

, falls die Daten über alle

        p

    {\displaystyle p}

 Prozessoren gleichverteilt anliegen. Die erwartete Rekursionstiefe beträgt wie im Quickselect Algorithmus

            O

          (

            log
            ⁡

              (

                  ∑

                    i

                  |

                  S

                    i

                  |

              )

          )

        =

            O

        (
        log
        ⁡
        (
        n
        )
        )

    {\displaystyle {\mathcal {O}}\left(\log \left(\textstyle \sum _{i}|S_{i}|\right)\right)={\mathcal {O}}(\log(n))}

. Somit ist die gesamte erwartete Laufzeit

            O

          (

            p
            log
            ⁡
            (
            n

              /

            p
            )
            log
            ⁡
            (
            n
            )

          )

    {\displaystyle {\mathcal {O}}\left(p\log(n/p)\log(n)\right)}

.
Angewandt auf den parallelen Mehrwege-Mergesort muss die msSelect Methode parallel ausgeführt werden, um alle Trennelemente vom Rang

        i

            n
            p

    {\textstyle i{\frac {n}{p}}}

 gleichzeitig zu finden. Dies kann anschließend verwendet werden, um jede Folge in

        p

    {\displaystyle p}

 Teile zu zerschneiden. Es ergibt sich die gleiche Gesamtlaufzeit

            O

          (

            p

            log
            ⁡
            (
            n

              /

            p
            )
            log
            ⁡
            (
            n
            )

          )

    {\displaystyle {\mathcal {O}}\left(p\,\log(n/p)\log(n)\right)}

.

#### Pseudocode

Hier ist der komplette Pseudocode für den parallelen Mehrwege-Mergesort. Dabei wird eine Barriere-Synchronisation vor und nach der Trennelementbestimmung angenommen, sodass jeder Prozessor seine Trennelemente und die Partitionierung seiner Sequenz richtig berechnen kann.

/**
 * d: Unsorted Array of Elements
 * n: Number of Elements
 * p: Number of Processors
 * return Sorted Array
 */
algorithm parallelMultiwayMergesort(d : Array, n : int, p : int) is
    o := new Array[0, n]                         // the output array
    for i = 1 to p do in parallel                // each processor in parallel
        S_i := d[(i-1) * n/p, i * n/p]           // Sequence of length n/p
 sort(S_i)                                // sort locally
        synch
 v_i := msSelect([S_1,...,S_p], i * n/p)          // element with global rank i * n/p
        synch
 (S_i,1 ,..., S_i,p) := sequence_partitioning(si, v_1, ..., v_p) // split s_i into subsequences

 o[(i-1) * n/p, i * n/p] := kWayMerge(s_1,i, ..., s_p,i)  // merge and assign to output array

    return o

#### Analyse

Zunächst sortiert jeder Prozessor die zugewiesenen

        n

          /

        p

    {\displaystyle n/p}

 Elemente lokal mit einem vergleichsbasierten Sortieralgorithmus der Komplexität

            O

          (

            n

              /

            p

            log
            ⁡
            (
            n

              /

            p
            )

          )

    {\displaystyle {\mathcal {O}}\left(n/p\;\log(n/p)\right)}

. Anschließend können die Trennelemente in Zeit

            O

          (

            p

            log
            ⁡
            (
            n

              /

            p
            )
            log
            ⁡
            (
            n
            )

          )

    {\displaystyle {\mathcal {O}}\left(p\,\log(n/p)\log(n)\right)}

 bestimmt werden. Schließlich müssen jede Gruppe von

        p

    {\displaystyle p}

 Teilstücken gleichzeitig von jedem Prozessor zusammen gemischt werden. Dies hat eine Laufzeit von

            O

        (
        log
        ⁡
        (
        p
        )

        n

          /

        p
        )

    {\displaystyle {\mathcal {O}}(\log(p)\;n/p)}

, indem ein sequentieller k-Wege Mischalgorithmus verwendet wird. Somit ergibt sich eine Gesamtlaufzeit von

            O

          (

                n
                p

            log
            ⁡

              (

                  n
                  p

              )

            +
            p
            log
            ⁡

              (

                  n
                  p

              )

            log
            ⁡
            (
            n
            )
            +

                n
                p

            log
            ⁡
            (
            p
            )

          )

    {\displaystyle {\mathcal {O}}\left({\frac {n}{p}}\log \left({\frac {n}{p}}\right)+p\log \left({\frac {n}{p}}\right)\log(n)+{\frac {n}{p}}\log(p)\right)}

.

#### Praktische Anpassung und Anwendung

Der Mehrwege-Mergesort Algorithmus ist durch seine hohe Parallelität, was den Einsatz vieler Prozessoren ermöglicht, sehr skalierbar. Dies macht den Algorithmus zu einem brauchbaren Kandidaten für das Sortieren großer Datenmengen, wie sie beispielsweise in Computer-Clustern verarbeitet werden. Da der Speicher in solchen Systemen in der Regel keine limitierende Ressource darstellt, ist der Nachteil der Speicherkomplexität von Mergesort vernachlässigbar. Allerdings werden in solchen Systemen andere Faktoren wichtig, die bei der Modellierung auf einer PRAM nicht berücksichtigt werden. Hier sind unter anderem die folgenden Aspekte zu berücksichtigen: Die Speicherhierarchie, wenn die Daten nicht in den Cache der Prozessoren passen, oder der Kommunikationsaufwand beim Datenaustausch zwischen den Prozessoren, der zu einem Engpass werden könnte, wenn auf die Daten nicht mehr über den gemeinsamen Speicher zugegriffen werden kann.
Sanders et al. haben in ihrem Paper einen bulk synchronous parallel-Algorithmus für einen mehrstufigen Mehrwege-Mergesort vorgestellt, der

        p

    {\displaystyle p}

 Prozessoren in

        r

    {\displaystyle r}

 Gruppen der Größe

          p
          ′

    {\displaystyle p'}

 unterteilt. Alle Prozessoren sortieren zuerst lokal. Im Gegensatz zu einem einstufigen Mehrwege-Mergesort werden diese Sequenzen dann in

        r

    {\displaystyle r}

 Teile aufgeteilt und den entsprechenden Prozessorgruppen zugeordnet. Diese Schritte werden innerhalb dieser Gruppen rekursiv wiederholt. So wird die Kommunikation reduziert und insbesondere Probleme mit vielen kleinen Nachrichten vermieden. Die hierarchische Struktur des zugrundeliegenden realen Netzwerks (z. B. Racks, Cluster,...) kann zur Definition der Prozessorgruppen verwendet werden.

### Weitere Varianten

Mergesort war einer der ersten Sortieralgorithmen, bei dem ein optimaler Speedup erreicht wurde, wobei Richard Cole einen cleveren Subsampling-Algorithmus verwendete, um die O(1)-Zusammenführung sicherzustellen. Andere ausgeklügelte parallele Sortieralgorithmen können die gleichen oder bessere Zeitschranken mit einer niedrigeren Konstante erreichen. David Powers beschrieb beispielsweise 1991 einen parallelisierten Quicksort (und einen verwandten Radixsort), der durch implizite Partitionierung in

        O
        (
        log
        ⁡
        n
        )

    {\displaystyle O(\log n)}

 Zeit auf einer CRCW-Parallel Random Access Machine (PRAM) mit

        n

    {\displaystyle n}

 Prozessoren arbeiten kann. Powers zeigt ferner, dass eine Pipeline-Version von Batchers Bitonic Mergesort in

        O
        (
        (
        log
        ⁡
        n

          )

            2

        )

    {\displaystyle O((\log n)^{2})}

 Zeit auf einem Butterfly-Sortiernetzwerk in der Praxis schneller ist als sein

        O
        (
        log
        ⁡
        n
        )

    {\displaystyle O(\log n)}

 Sortieralgorithmus auf einer PRAM, und er bietet eine detaillierte Diskussion der versteckten Overheads beim Vergleich, bei der Radix- und der Parallelsortierung.

## Sonstiges

Da Mergesort die Startliste sowie alle Zwischenlisten sequenziell abarbeitet, eignet er sich besonders zur Sortierung von verketteten Listen. Für Arrays wird normalerweise ein temporäres Array derselben Länge des zu sortierenden Arrays als Zwischenspeicher verwendet (das heißt Mergesort arbeitet normalerweise nicht in-place, s. o.). Quicksort dagegen benötigt kein temporäres Array.
Für die Größe des temporären Arrays reicht die halbe Größe der Anzahl der Elemente (n/2) aus. Unoptimierte Codebeispiele arbeiten mit einem Hilfsarray der Größe (n), dies ist für den Mergesort Algorithmus nicht erforderlich.
Die SGI-Implementierung der Standard Template Library (STL) verwendet den Mergesort als Algorithmus zur stabilen Sortierung.
