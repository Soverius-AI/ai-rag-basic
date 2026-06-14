---
url: https://de.wikipedia.org/wiki/Dijkstra-Algorithmus
---

# Dijkstra-Algorithmus

## Überblick

Der Algorithmus von Dijkstra (nach seinem Erfinder Edsger W. Dijkstra) ist ein Algorithmus aus der Klasse der Greedy-Algorithmen und löst das Problem der kürzesten Pfade für einen gegebenen Startknoten. Er berechnet somit einen kürzesten Pfad zwischen dem gegebenen Startknoten und einem der (oder allen) übrigen Knoten in einem kantengewichteten Graphen (sofern dieser keine Negativkanten enthält).
Für unzusammenhängende ungerichtete Graphen ist der Abstand zu denjenigen Knoten unendlich, zu denen kein Pfad vom Startknoten aus existiert. Dasselbe gilt auch für gerichtete nicht stark zusammenhängende Graphen. Dabei wird der Abstand synonym auch als Entfernung, Kosten oder Gewicht bezeichnet.

## Algorithmus

### Informelle Darstellung

Die Grundidee des Algorithmus ist es, immer derjenigen Kante zu folgen, die den kürzesten Streckenabschnitt vom Startknoten aus verspricht. Andere Kanten werden erst dann verfolgt, wenn alle kürzeren Streckenabschnitte (auch über andere Knoten hinaus) beachtet wurden. Dieses Vorgehen gewährleistet, dass bei Erreichen eines Knotens kein kürzerer Pfad zu ihm existieren kann. Eine einmal berechnete Distanz zwischen dem Startknoten und einem besuchten Knoten wird gespeichert. Die aufsummierten Distanzen zu noch nicht abgearbeiteten Knoten können sich hingegen im Laufe des Algorithmus durchaus verändern, nämlich verringern. Dieses Vorgehen wird fortgesetzt, bis die Distanz des Zielknotens berechnet wurde (single-pair shortest path) oder die Distanzen aller Knoten zum Startknoten bekannt sind (single-source shortest path).

Der Algorithmus lässt sich durch die folgenden Schritte beschreiben. Es werden sowohl die kürzesten (aufsummierten) Wegstrecken als auch deren Knotenfolgen berechnet.

Weise allen Knoten die beiden Eigenschaften (Attribute) „Distanz“ und „Vorgänger“ zu. Initialisiere die Distanz im Startknoten mit 0 und in allen anderen Knoten mit

        ∞

    {\displaystyle \infty }

.
Solange es noch unbesuchte Knoten gibt, wähle darunter denjenigen mit minimaler (aufsummierter) Distanz aus und
Speichere, dass dieser Knoten schon besucht wurde.
Berechne für alle noch unbesuchten Nachbarknoten die Gesamtdistanz des Pfades über die Summe des jeweiligen Kantengewichtes und der bereits berechneten Distanzen des Pfades vom Startknoten zum aktuellen Knoten.
Ist dieser Wert für einen Knoten kleiner als die dort gespeicherte bisherige aufsummierte Distanz des Pfades, aktualisiere sie und setze den aktuellen Knoten als Vorgänger.
Dieser Schritt wird auch als Update oder Relaxation/Relaxierung bezeichnet.
In dieser Form berechnet der Algorithmus ausgehend von einem Startknoten die kürzesten Wege zu allen anderen Knoten. Ist man dagegen nur an dem Weg zu einem ganz bestimmten Zielknoten interessiert, so kann man in Schritt (2) schon abbrechen, wenn der gesuchte Knoten der aktive ist.

Aufgrund der Eigenschaft, einmal festgelegte Distanzen zum Startknoten nicht mehr zu verändern, gehört der Dijkstra-Algorithmus zu den Greedy-Algorithmen, die in jedem Schritt die momentan aussichtsreichste Teillösung bevorzugen. Anders als manche andere Greedy-Algorithmen berechnet der Dijkstra-Algorithmus jedoch stets eine optimale Lösung. Diese Eigenschaft basiert auf der Annahme, dass die kürzesten Teilstrecken zwischen Knoten in einem Pfad zusammen die kürzeste Strecke auf diesem Pfad bilden. Unter der Voraussetzung positiver Kantengewichte ist die Annahme gültig, denn fände man nachträglich einen kürzeren Weg vom Startknoten zu einem Zielknoten, hätte man auch dessen kürzere Teilstrecke früher untersuchen müssen, um den Algorithmus korrekt durchzuführen. Dann hätte man aber über die kürzere Teilstrecke den Zielknoten früher gefunden als auf dem längeren Weg.
Die Annahme trifft jedoch nicht mehr zu, wenn der Graph negative Kantengewichte enthält. Dann kann jede Teilstrecke für sich zwar eine kürzeste Strecke zwischen den Endpunkten sein, man könnte jedoch über einen längeren Teilweg die Gesamtdistanz verbessern, wenn eine negative Kante die Weglänge wieder reduziert. Im Bild mit den Knoten 1, 2, 3 und 4 würde der Dijkstra-Algorithmus den kürzesten Weg von 1 nach 3 über 2 finden, da der Schritt zu 4 insgesamt schon länger ist als der gesamte obere Pfad. Die negative Kante bewirkt aber, dass der untere Pfad kürzer ist.

### Algorithmus in Pseudocode

Die folgenden Zeilen Pseudocode beschreiben eine Funktion namens Dijkstra, die einen Graphen und einen Startknoten im Graphen als Eingabe erhält. Der Startknoten gibt den Knoten an, von dem aus die kürzesten Wege zu allen Knoten gesucht werden. Das Ergebnis ist eine Liste, die zu jedem Knoten

        v

    {\displaystyle v}

 den Vorgängerknoten auf dem Weg vom Startknoten zu

        v

    {\displaystyle v}

 angibt.
Der Graph besteht aus Knoten und gewichteten Kanten, wobei das Gewicht die Entfernung zwischen den Knoten darstellt. Existiert eine Kante zwischen zwei Knoten, so sind die Knoten jeweils Nachbarn. Der aktuell im Teilschritt betrachtete Knoten wird mit

        u

    {\displaystyle u}

 bezeichnet und wird „Betrachtungsknoten“ genannt. Die möglichen, kommenden Nachbarknoten werden in der jeweiligen, kommenden Zwischenuntersuchung mit jeweils

        v

    {\displaystyle v}

 als „Prüfknoten“ bezeichnet. Das Kantengewicht zwischen Betrachtungsknoten

        u

    {\displaystyle u}

 und jeweiligen Prüfknoten

        v

    {\displaystyle v}

 wird im Pseudocode als abstand_zwischen(u,v) angegeben.
Der Zahlenwert von abstand[v] enthält in dem Untersuchungszweig die jeweilige Gesamtentfernung, die die Teilentfernungen vom Startpunkt über mögliche Zwischenknoten und den aktuellen Knoten

        u

    {\displaystyle u}

 bis zum nächsten zu untersuchenden Knoten

        v

    {\displaystyle v}

 summiert.
Zunächst werden abhängig vom Graphen und Startknoten die Abstände und Vorgänger initialisiert. Dies geschieht in der Methode initialisiere. Der eigentliche Algorithmus verwendet eine Methode distanz_update, die ein Update der Abstände durchführt, falls ein kürzerer Weg gefunden wurde.

Die Initialisierung setzt die Abstände auf unendlich und die Vorgänger als unbekannt. Nur der Startknoten hat die Distanz 0. Die Menge

        Q

    {\displaystyle Q}

 enthält die Knoten, zu denen noch kein kürzester Weg gefunden wurde.

Der Abstand vom Startknoten zum Knoten

        v

    {\displaystyle v}

 verkürzt sich dann, wenn der Weg zu

        v

    {\displaystyle v}

 über

        u

    {\displaystyle u}

 kürzer als der bisher bekannte Weg ist. Entsprechend wird

        u

    {\displaystyle u}

 zum Vorgänger von

        v

    {\displaystyle v}

 auf dem kürzesten Weg.

Falls man nur am kürzesten Weg zwischen zwei Knoten interessiert ist, kann man den Algorithmus nach Zeile 5 der Dijkstra-Funktion abbrechen lassen, falls

        u

    {\displaystyle u}

 = Zielknoten ist.
Den kürzesten Weg zu einem Zielknoten kann man nun durch Iteration über die vorgänger ermitteln:

### Implementierung

Knoten und Kanten zwischen Knoten lassen sich meistens durch Matrizen oder Zeigerstrukturen darstellen. Auch auf den Vorgänger eines Knotens kann ein Zeiger verweisen. Die Abstände der Knoten können in Feldern gespeichert werden.
Für eine effiziente Implementierung wird die Menge Q der Knoten, für die noch kein kürzester Weg gefunden wurde, durch eine Prioritätswarteschlange implementiert. Die aufwändige Initialisierung findet nur einmal statt, dafür sind die wiederholten Zugriffe auf Q effizienter. Als Schlüsselwert für den Knoten wird sein jeweiliger Abstand verwendet, der im Pseudocode mit abstand[v] angegeben ist. Verkürzt sich der Abstand, ist eine teilweise Neusortierung der Warteschlange nötig.
Als Datenstruktur bietet sich hierfür eine Entfernungstabelle oder eine Adjazenzmatrix an.

## Programmierung

Das folgende Beispiel in der Programmiersprache C++ zeigt die Implementierung des Dijkstra-Algorithmus für einen ungerichteten Graphen, der als Adjazenzliste gespeichert wird. Bei der Ausführung des Programms wird die Funktion main verwendet, die einen kürzesten Weg auf der Konsole ausgibt.

## Beispiel mit bekanntem Zielknoten

Ein Beispiel für die Anwendung des Algorithmus von Dijkstra ist die Suche nach einem kürzesten Pfad auf einer Landkarte. Im hier verwendeten Beispiel will man in der unten gezeigten Landkarte von Deutschland einen kürzesten Pfad von Frankfurt nach München finden.
Die Zahlen auf den Verbindungen zwischen zwei Städten geben jeweils die Entfernung zwischen den beiden durch die Kante verbundenen Städten an. Die Zahlen hinter den Städtenamen geben die ermittelte Distanz der Stadt zum Startknoten Frankfurt an, ∞ steht dabei für eine unbekannte Distanz. Die hellgrau unterlegten Knoten sind die Knoten, deren Abstand relaxiert wird (also verkürzt wird, falls eine kürzere Strecke gefunden wurde), die dunkelgrau unterlegten Knoten sind diejenigen, zu denen der kürzeste Weg von Frankfurt bereits bekannt ist.
Die Auswahl des nächsten Nachbarn erfolgt nach dem Prinzip einer Prioritätswarteschlange. Relaxierte Abstände erfordern daher eine Neusortierung.

## Grundlegende Konzepte und Verwandtschaften

Ein alternativer Algorithmus zur Suche kürzester Pfade, der sich dagegen auf das Optimalitätsprinzip von Bellman stützt, ist der Floyd-Warshall-Algorithmus. Das Optimalitätsprinzip besagt, dass, wenn der kürzeste Pfad von A nach C über B führt, der Teilpfad A B auch der kürzeste Pfad von A nach B sein muss.
Ein weiterer alternativer Algorithmus ist der A*-Algorithmus, der den Algorithmus von Dijkstra um eine Abschätzfunktion erweitert. Falls diese gewisse Eigenschaften erfüllt, kann damit der kürzeste Pfad unter Umständen schneller gefunden werden.
Es gibt verschiedene Beschleunigungstechniken für den Dijkstra-Algorithmus, zum Beispiel Arcflag.

## Berechnung eines Spannbaumes

Nach Ende des Algorithmus ist in den Vorgängerzeigern π ein Teil-Spannbaum der Komponente von

        s

    {\displaystyle s}

 aus kürzesten Pfaden von

        s

    {\displaystyle s}

 zu allen Knoten der Komponente, die in die Queue aufgenommen wurden, verzeichnet. Dieser Baum ist jedoch nicht notwendigerweise auch minimal, wie die Abbildung zeigt:
Sei

        x

    {\displaystyle x}

 eine Zahl größer 0. Minimal spannende Bäume sind entweder durch die Kanten

          {

            a
            ,
            s

          }

    {\displaystyle \left\{a,s\right\}}

 und

          {

            a
            ,
            b

          }

    {\displaystyle \left\{a,b\right\}}

 oder

          {

            b
            ,
            s

          }

    {\displaystyle \left\{b,s\right\}}

 und

          {

            a
            ,
            b

          }

    {\displaystyle \left\{a,b\right\}}

 gegeben. Die Gesamtkosten eines minimal spannenden Baumes betragen

        2
        +
        x

    {\displaystyle 2+x}

. Dijkstras Algorithmus liefert mit Startpunkt

        s

    {\displaystyle s}

 die Kanten

          {

            a
            ,
            s

          }

    {\displaystyle \left\{a,s\right\}}

 und

          {

            b
            ,
            s

          }

    {\displaystyle \left\{b,s\right\}}

 als Ergebnis. Die Gesamtkosten dieses spannenden Baumes betragen

        2
        +
        2
        x

    {\displaystyle 2+2x}

.
Die Berechnung eines minimalen Spannbaumes ist mit dem Algorithmus von Prim oder dem Algorithmus von Kruskal möglich.

## Zeitkomplexität

Die folgende Abschätzung gilt nur für Graphen, die keine negativen Kantengewichte enthalten.
Die Laufzeit des Dijkstra-Algorithmus hängt ab von der Anzahl der Kanten

          |

        E

          |

    {\displaystyle |E|}

 und der Anzahl der Knoten

          |

        V

          |

    {\displaystyle |V|}

. Die genaue Zeitkomplexität hängt von der Datenstruktur

        Q

    {\displaystyle Q}

 ab, in der die Knoten gespeichert werden.
Für alle Implementierungen von

        Q

    {\displaystyle Q}

 gilt:

        O
        (

          |

        E

          |

        ⋅

          T

              d
              k

        +

          |

        V

          |

        ⋅

          T

              e
              m

        )

    {\displaystyle O(|E|\cdot T_{\mathrm {dk} }+|V|\cdot T_{\mathrm {em} })}

wobei

          T

              d
              k

    {\displaystyle T_{\mathrm {dk} }}

 und

          T

              e
              m

    {\displaystyle T_{\mathrm {em} }}

 für die Komplexität der decrease-key- und extract-minimum-Operationen bei

        Q

    {\displaystyle Q}

 stehen. Die einfachste Implementierung für

        Q

    {\displaystyle Q}

 ist eine Liste oder ein Array. Dabei ist die Zeitkomplexität

        O
        (

          |

        E

          |

        +

          |

        V

            |

            2

        )
        =
        O
        (

          |

        V

            |

            2

        )

    {\displaystyle O(|E|+|V|^{2})=O(|V|^{2})}

.
Im Normalfall wird man hier auf eine Vorrangwarteschlange zurückgreifen, indem man dort die Knoten als Elemente mit ihrer jeweiligen bisherigen Distanz als Schlüssel/Priorität verwendet.
Die optimale Laufzeit für einen Graphen

        G
        =
        (
        V
        ,
        E
        )

    {\displaystyle G=(V,E)}

 beträgt

        O
        (

          |

        V

          |

        log
        ⁡
        (

          |

        V

          |

        )
        +

          |

        E

          |

        )

    {\displaystyle O(|V|\log(|V|)+|E|)}

 mittels Verwendung eines Fibonacci-Heaps für den Dijkstra-Algorithmus.

## Brechen der „Sortierbarriere“

Forschung aus dem Jahr 2025 zeigt, dass die Schranke

        O
        (
        m
        +
        n
        log
        ⁡
        n
        )

    {\displaystyle O(m+n\log n)}

 nicht grundsätzlich optimal für SSSP in reell gewichteten Graphen ist, sofern nur Distanzen, nicht aber die vollständige Reihenfolge der Knoten nach Distanz ausgegeben werden muss. Duan u. a. (2025) geben einen deterministischen Algorithmus mit Laufzeit

        O
        (
        m

          log

            2

              /

            3

        ⁡
        n
        )

    {\displaystyle O(m\log ^{2/3}n)}

 im Comparison-Addition-Modell (nur Vergleiche und Additionen der Kantengewichte, konstante Kosten pro Operation) für gerichtete Graphen mit nichtnegativen Gewichten an.
Der Ansatz verringert die Größe der „Frontier“ (Menge der relevanten Kandidatenknoten) rekursiv, kombiniert Dijkstra-artige Extraktionen mit Bellman-Ford-artigen Mehrschritt-Relaxationen und nutzt partielle Priorisierung statt vollständiger Sortierung. Dadurch wird die klassische Sortierbarriere umgangen. Das Ergebnis belegt, dass Dijkstras Algorithmus für die reine Distanzberechnung auf dünn besetzten (sparse) Graphen nicht optimal ist; eine universelle Optimalität bleibt bestehen, wenn die Ausgabe die vollständige Distanzordnung verlangt (siehe u. a. Haeupler, Hladík, Rozhoň, Tarjan, Tětek, 2024).
Zur Einordnung: Für ungerichtete Graphen existieren bereits frühere deterministische Verbesserungen im selben Modell, z. B. durch Pettie und Ramachandran (2005) mit einer Laufzeit von

        O
        (
        m
        α
        (
        m
        ,
        n
        )
        +
        min
        {
        n
        log
        ⁡
        n
        ,

        n
        log
        ⁡
        log
        ⁡
        r
        }
        )

    {\displaystyle O(m\alpha (m,n)+\min\{n\log n,\,n\log \log r\})}

, wobei

        α

    {\displaystyle \alpha }

 die inverse Ackermann-Funktion und

        r

    {\displaystyle r}

 das Verhältnis zweier Kantengewichte bezeichnet; die Arbeit von Duan u. a. durchbricht die Sortierbarriere explizit für den gerichteten Fall.

## Anwendungen

Routenplaner sind ein prominentes Beispiel, bei dem dieser Algorithmus eingesetzt werden kann. Der Graph repräsentiert hier das Verkehrswegenetz, das verschiedene Punkte miteinander verbindet. Gesucht ist die kürzeste Route zwischen zwei Punkten.
Einige topologische Indizes, etwa der J-Index von Balaban, benötigen gewichtete Distanzen zwischen den Atomen eines Moleküls. Die Gewichtung ist in diesen Fällen die Bindungsordnung.
Dijkstras Algorithmus wird auch im Internet als Routing-Algorithmus im OSPF-, IS-IS- und OLSR-Protokoll eingesetzt. Das letztere Optimized Link State Routing-Protokoll ist eine an die Anforderungen eines mobilen drahtlosen LANs angepasste Version des Link State Routing. Es ist wichtig für mobile Ad-hoc-Netze. Eine mögliche Anwendung davon sind die freien Funknetze.
Auch bei der Lösung des Münzproblems, eines zahlentheoretischen Problems, das auf den ersten Blick nichts mit Graphen zu tun hat, kann der Dijkstra-Algorithmus eingesetzt werden.

## Andere Verfahren zur Berechnung kürzester Pfade

Hat man genug Informationen über die Kantengewichte im Graphen, um daraus eine Heuristik für die Kosten einzelner Knoten ableiten zu können, ist es möglich, den Algorithmus von Dijkstra zum A*-Algorithmus zu erweitern. Um alle kürzesten Pfade von einem Knoten zu allen anderen Knoten in einem Graphen zu berechnen, kann man auch den Bellman-Ford-Algorithmus verwenden, der mit negativen Kantengewichten umgehen kann. Der Algorithmus von Floyd und Warshall berechnet schließlich die kürzesten Pfade aller Knoten zueinander.
