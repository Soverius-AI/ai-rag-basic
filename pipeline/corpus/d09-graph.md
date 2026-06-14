---
url: https://de.wikipedia.org/wiki/Graph_(Graphentheorie)
---

# Graph (Graphentheorie)

## Überblick

Ein Graph ist in der Graphentheorie eine abstrakte Struktur, die eine Menge von Objekten zusammen mit den zwischen diesen Objekten bestehenden Verbindungen repräsentiert. Die mathematischen Abstraktionen der Objekte werden dabei Knoten (auch Ecken) des Graphen genannt. Die paarweisen Verbindungen zwischen Knoten heißen Kanten (manchmal auch Bögen). Die Kanten können gerichtet oder ungerichtet sein. Häufig werden Graphen anschaulich gezeichnet, indem die Knoten durch Punkte und die Kanten durch Linien dargestellt werden.

In einem U-Bahn-Netz stellt jeder Knoten eine U-Bahn-Station dar und jede Kante eine direkte Zugverbindung zwischen zwei Stationen. Die chemische Graphentheorie betrachtet Moleküle als Graphen, mit Atomen als Knoten und Molekularverbindungen als Kanten. Komplexe räumliche Gebilde wie Polyeder können als Graphen dargestellt werden (Schlegeldiagramm). Das Internet ist ein riesiger Graph aus Computern und Datenverbindungen.
Bäume wie etwa Stammbäume sind ein Sonderfall der Graphen und enthalten keine Zyklen.
Die mathematische Betrachtung von Graphen begann im 18. Jahrhundert mit dem Königsberger Brückenproblem.

## Typen von Graphen

### Ungerichteter Graph

In ungerichteten Graphen werden die Verbindungen zwischen Knoten durch Kanten gekennzeichnet. Die Kanten haben keine Richtung. Jede Kante kann in beide Richtungen durchlaufen werden.

### Gerichteter Graph (Digraph)

In Digraphen (von englisch directed graph, auch gerichtete Graphen genannt) werden Kanten statt durch Linien durch Pfeile gekennzeichnet, wobei der Pfeil von ihrem Anfangs- zu ihrem Endknoten zeigt. Dies verdeutlicht, dass jede Kante des Graphen nur in eine Richtung durchlaufen werden kann. Ein Spezialfall davon sind orientierte Graphen, in denen es keine ungerichteten Kanten gibt, d. h. gibt es eine Kante von Knoten A nach B, dann gibt es nie auch die umgekehrte Kante von B nach A.

### Baum

Ein Baum ist in der Graphentheorie ein spezieller Typ von Graph, der zusammenhängend ist und keine geschlossenen Pfade, also Zyklen der Länge größer oder gleich 3, enthält. Bei allen Bäumen ist die Anzahl der Knoten offensichtlich um 1 größer als die Anzahl der Kanten.
Bäume haben sehr viele praktische Anwendungen, vor allem in der Informatik. Viele Algorithmen werden mithilfe von Bäumen programmiert. Zum Beispiel können Netzwerke, Verkehrsnetze oder Versorgungsnetze mit einer Breitensuche oder einer Tiefensuche effektiv durchlaufen werden. Im Bereich der künstlichen Intelligenz und der Strategiespiele ist die Alpha-Beta-Suche wichtig. Sie basiert auf Suchbäumen.

### Multigraph

In Multigraphen können zwei Knoten durch mehrere Kanten verbunden sein, was in einfachen Graphen nicht erlaubt ist. Außerdem dürfen Multigraphen Schleifen enthalten: Kanten, die zum selben Knoten führen, von dem sie ausgehen.

### Planarer Graph

Ein planarer Graph ist ein Graph, der auf einer Ebene, mit Punkten für die Knoten und Linien für die Kanten, dargestellt werden kann, sodass sich keine Kanten schneiden. Jeder planare Graph hat einen dualen Graphen. Das ist ein Graph, wo jeder Fläche des Graphen ein Knoten zugeordnet ist, der innerhalb dieser Fläche liegt, und umgekehrt. Die Dualität von planaren Graphen ist immer gegenseitig, das heißt, der duale Graph des dualen Graphen jedes planaren Graphen ist der ursprüngliche planare Graph.
Für planare Graphen gilt der Eulersche Polyedersatz, der oft mit der Gleichung

        E
        −
        K
        +
        F
        =
        2

    {\displaystyle E-K+F=2}

 dargestellt wird.

### Hypergraph

Bei Hypergraphen verbindet eine Kante (auch Hyperkante genannt) nicht nur zwei, sondern mehrere Knoten gleichzeitig. Hypergraphen können beispielsweise durch mehrere planare Graphen mit Indizierung der Kanten dargestellt werden. Hypergraphen mit wenigen Kanten (sogenannte dünne Graphen) zeichnet man so, dass man eine Menge von Punkten zeichnet, die den Knoten entsprechen, und die zu einer Hyperkante gehörigen Punkte werden dann durch eine geschlossene Linie umkreist, die somit die Teilmenge der zu ihr gehörenden Knoten innerhalb aller Knoten angibt. Bei Hypergraphen mit vielen Kanten wird diese Darstellung aber schnell unübersichtlich. Weniger intuitiv, aber übersichtlicher ist es dann, einen Hypergraphen als bipartiten Meta-Graphen darzustellen, wobei die eine der beiden Bipartitionsmengen den Knoten des Hypergraphen, die andere Bipartitionsmenge den Hyperkanten des Hypergraphen entspricht. Die Kanten zwischen diesen beiden Bipartitionsmengen symbolisieren dann die Zugehörigkeit der Knoten zu den Hyperkanten.
Das Physik-Projekt von Stephen Wolfram (siehe auch: Wolfram Research und Mathematica) zur Erklärung der Grundlagen der Physik basiert unter anderem auf dem Raum der Regeln über Hypergraphen: „Und zumindest in einer gewissen Annäherung können wir dann sagen, dass Energie mit der Aktivität im Hypergraphen, die Information durch die Zeit fortpflanzt, assoziiert ist, während Impuls mit Aktivität assoziiert ist, die Information im Raum fortpflanzt.“

## Definitionen

Ein Graph

        G

    {\displaystyle G}

 ist ein geordnetes Paar

        (
        V
        ,
        E
        )

    {\displaystyle (V,E)}

, wobei

        V

    {\displaystyle V}

 eine Menge von Knoten (englisch vertex/vertices, oft auch Ecken genannt) und

        E

    {\displaystyle E}

 eine Menge von Kanten (englisch edge/edges, manchmal auch Bögen genannt) bezeichnet. Dabei ist

        E

    {\displaystyle E}

 in

ungerichteten Graphen ohne Mehrfachkanten eine Teilmenge aller 2-elementigen Teilmengen von

        V

    {\displaystyle V}

,
gerichteten Graphen ohne Mehrfachkanten eine Teilmenge des kartesischen Produkts

        V
        ×
        V

    {\displaystyle V\times V}

,
ungerichteten Graphen mit zusammengefassten Mehrfachkanten eine Multimenge über der Menge

        W

    {\displaystyle W}

 aller 2-elementigen Teilmengen von

        V

    {\displaystyle V}

, also eine Funktion

        E
        :
        W
        →

            N

            0

    {\displaystyle E\colon W\to \mathbb {N} _{0}}

,
gerichteten Graphen mit zusammengefassten Mehrfachkanten eine Multimenge über dem kartesischen Produkt

        V
        ×
        V

    {\displaystyle V\times V}

, also eine Funktion

        E
        :
        V
        ×
        V
        →

            N

            0

    {\displaystyle E\colon V\times V\to \mathbb {N} _{0}}

,
gerichteten Graphen mit eigenständigen Mehrfachkanten eine beliebige Menge, deren Elemente mit Hilfe von zwei Funktionen

          s
          r
          c

        ,

          t
          g
          t

        :
        E
        →
        V

    {\displaystyle \mathrm {src} ,\mathrm {tgt} \colon E\to V}

, die den Elementen einen Quell- bzw. Zielknoten zuordnen, als Kanten angesehen werden (so ein Graph ist dasselbe wie ein Funktor

        G
        :

            G

        →

          S
          e
          t

    {\displaystyle G\colon {\mathcal {G}}\to \mathbf {Set} }

, wobei

            G

    {\displaystyle {\mathcal {G}}}

 die recht überschaubare Kategorie

            G

        =
        {
        V

                ⟵

                  s
                  r
                  c

        E

                ⟶

                  t
                  g
                  t

        V
        }

    {\displaystyle {\mathcal {G}}=\{V{\stackrel {\mathrm {src} }{\longleftarrow }}E{\stackrel {\mathrm {tgt} }{\longrightarrow }}V\}}

 mit zwei Objekten und zwei ausgezeichneten Pfeilen ist)
Hypergraphen eine Teilmenge der Potenzmenge von

        V

    {\displaystyle V}

.

Den Zusatz „ohne Mehrfachkanten“ lässt man gewöhnlich weg und nennt Graphen mit Mehrfachkanten Multigraphen. Ferner verzichtet man meist auf das Attribut „ungerichtet“ und kennzeichnet nur gerichtete Graphen explizit. Ungerichtete Graphen ohne Mehrfachkanten nennt man auch häufig schlicht oder einfach. Eine andere Bezeichnung für gerichtete Graphen ist Digraph (Directed Graph).

### Abgeleitete Bezeichnungen

Statt die Knoten- und Kantenmenge eines Graphen

        G

    {\displaystyle G}

 mit den Symbolen

        V

    {\displaystyle V}

 und

        E

    {\displaystyle E}

 zu identifizieren, kann man auch allgemeine Abbildungen

        V

    {\displaystyle V}

 und

        E

    {\displaystyle E}

 definieren, die einen Graphen auf dessen Knotenmenge oder Kantenmenge abbilden. Für zwei Graphen

          G

            1

        =
        (

          V

            1

        ,

          E

            1

        )

    {\displaystyle G_{1}=(V_{1},E_{1})}

 und

          G

            2

        =
        (

          V

            2

        ,

          E

            2

        )

    {\displaystyle G_{2}=(V_{2},E_{2})}

 bezeichnen also

        V
        (

          G

            1

        )
        :=

          V

            1

    {\displaystyle V(G_{1}):=V_{1}}

 und

        E
        (

          G

            1

        )
        :=

          E

            1

    {\displaystyle E(G_{1}):=E_{1}}

 sowie

        V
        (

          G

            2

        )
        =

          V

            2

    {\displaystyle V(G_{2})=V_{2}}

 und

        E
        (

          G

            2

        )
        =

          E

            2

    {\displaystyle E(G_{2})=E_{2}}

.
Die Mehrdeutigkeit

        V
        (
        G
        )
        =
        V

    {\displaystyle V(G)=V}

 und

        E
        (
        G
        )
        =
        E

    {\displaystyle E(G)=E}

 wird bei dieser Notation in Kauf genommen, obwohl die Abbildungen etwas anderes darstellen als die mit ihr verbundene Knoten- und Kantenmenge. Als Konvention bietet sich an, mit

        V

    {\displaystyle V}

 bzw.

        E

    {\displaystyle E}

 ohne Argument Knoten- bzw. Kantenmenge zu bezeichnen,

        V

    {\displaystyle V}

 bzw.

        E

    {\displaystyle E}

 mit Argument bezeichnen dagegen die definierten Abbildungen.
Ist

        G

    {\displaystyle G}

 ein Graph, so sagt man allgemein

        v

    {\displaystyle v}

 ist Knoten bzw. Ecke von

        G

    {\displaystyle G}

, wenn

        v

    {\displaystyle v}

 zu

        V
        (
        G
        )

    {\displaystyle V(G)}

 gehört. Außerdem bezeichnet man Kanten

        e
        ∈
        E
        (
        G
        )

    {\displaystyle e\in E(G)}

 als

ungerichtete Kante von

        G

    {\displaystyle G}

, falls

        G

    {\displaystyle G}

 ein ungerichteter Graph ist.
gerichtete Kante von

        G

    {\displaystyle G}

, falls

        G

    {\displaystyle G}

 ein gerichteter Graph ist.
Hyperkante von

        G

    {\displaystyle G}

, falls

        G

    {\displaystyle G}

 ein Hypergraph ist.
In einer ungerichteten Kante

        e
        =
        {
        v
        ,
        w
        }

    {\displaystyle e=\lbrace v,w\rbrace }

 bezeichnet man

        v

    {\displaystyle v}

 und

        w

    {\displaystyle w}

 als Endknoten von

        e

    {\displaystyle e}

. In einer gerichteten Kante

        e
        =
        (
        v
        ,
        w
        )

    {\displaystyle e=(v,w)}

 bezeichnet man

        v

    {\displaystyle v}

 als Startknoten und

        w

    {\displaystyle w}

 als Endknoten von

        e

    {\displaystyle e}

.
Bei Multigraphen bezeichnet

        E
        (
        G
        )
        (
        e
        )

    {\displaystyle E(G)(e)}

 die Vielfachheit von

        e

    {\displaystyle e}

. Wenn

        E
        (
        G
        )
        (
        e
        )
        >
        1

    {\displaystyle E(G)(e)>1}

 gilt, so spricht man von einer Multi- oder Mehrfachkante.
Hat eine Kante

        e

    {\displaystyle e}

 in gerichteten Graphen die Form

        (
        v
        ,
        v
        )

    {\displaystyle (v,v)}

, so spricht man von einer Schleife. Ist die Schleife

        e

    {\displaystyle e}

 in einem Multigraphen

        G

    {\displaystyle G}

 zugleich eine Mehrfachkante, so spricht man von einer Mehrfachschleife. Gerichtete Graphen ohne Schleifen nennt man schleifenlos oder schleifenfrei.
Als Knotenzahl

        n
        (
        G
        )
        =
        |
        V
        (
        G
        )
        |

    {\displaystyle n(G)=\vert V(G)\vert }

 eines Graphen

        G

    {\displaystyle G}

 bezeichnet man die Anzahl seiner Knoten, als Kantenzahl

        m
        (
        G
        )
        =
        |
        E
        (
        G
        )
        |

    {\displaystyle m(G)=\vert E(G)\vert }

 bezeichnet man die Anzahl seiner Kanten (in Multigraphen summiert man über die Vielfachheit der Kanten).
Zwei Knoten heißen benachbart, wenn eine Kante sie verbindet.

### Spezialfälle

Verbindet in einem gerichteten Graphen die Kante

          e

            1

    {\displaystyle e_{1}}

 zwei Knoten, und die Kante

          e

            2

    {\displaystyle e_{2}}

 dieselben Knoten in umgekehrter Richtung, kann man beide zusammen auch als eine ungerichtete Kante innerhalb des gerichteten Graphen betrachten. Im Falle von Mehrfachkanten müssen die Vielfachheiten beider Kanten übereinstimmen.
Gibt es zu jeder Kante eines gerichteten Graphen eine solche entgegengesetzte Kante im Graphen, so ist er ein symmetrischer Graph.
Einen Graphen, dessen Knotenmenge endlich ist, nennt man einen endlichen Graphen. Im Gegensatz dazu nennt man einen Graphen, dessen Knotenmenge unendlich ist, unendlichen Graphen. Meist betrachtet man nur endliche Graphen und lässt daher das Attribut „endlich“ weg, während man unendliche Graphen explizit kennzeichnet.

#### Teilgraphen, Wege und Zyklen

Ein Teilgraph

          G
          ′

    {\displaystyle G'}

 eines Graphen

        G

    {\displaystyle G}

 enthält nur Knoten und Kanten, die auch in

        G

    {\displaystyle G}

 enthalten sind. Ein von einer Knotenmenge U induzierter Teilgraph enthält die Knoten aus U und alle Kanten aus G zwischen diesen Knoten.
Eine Folge von paarweise verschiedenen Knoten

          v

            1

        ,
        …
        ,

          v

            n

    {\displaystyle v_{1},\ldots ,v_{n}}

, in der aufeinander folgende Knoten

          v

            i

    {\displaystyle v_{i}}

 und

          v

            i
            +
            1

    {\displaystyle v_{i+1}}

 im Graphen durch eine Kante verbunden sind, bezeichnet man als Weg, manchmal auch als Pfad. Gilt

          v

            1

        =

          v

            n

    {\displaystyle v_{1}=v_{n}}

, und ist dies der einzige doppelte Knoten, spricht man von einem Zyklus oder Kreis. Eine Sequenz von benachbarten Knoten, in der sich Knoten wiederholen dürfen, bezeichnet man als Kantenfolge. Die Begriffe Weg, Pfad, Kantenfolge, Kreis und Zyklus werden in der Literatur zum Teil unterschiedlich definiert.
Enthält ein gerichteter Graph keinen Zyklus, nennt man ihn azyklisch oder zyklenfrei – also einen gerichteten azyklischen Graphen (englisch DAG, directed acyclic graph). Ein solcher Graph lässt sich durch die Ergänzung aller Kanten, die gleichen Ausgangs- und Endknoten wie Wege haben, also die Umwege über andere Kanten zu einem Zielknoten abkürzen, zu einer (endlichen und diskreten) Halbordnung erweitern. Diesen Vorgang nennt man die Bildung der transitiven Hülle. Ein Hasse-Diagramm ist ein gerichteter azyklischer Graph, bei dem die durch das Transitivitätsgesetz implizierten Kanten weggelassen sind (transitive Reduktion).

## Grundlegende Operationen

Bei der Untersuchung von Grapheneigenschaften kommt es häufiger vor, dass man auf Graphen einfache Operationen anwenden muss, um möglichst kompakt und damit leichter verständlich schreiben zu können. Besonders häufig werden die üblichen Operationen der Mengenlehre (Vereinigung, Durchschnitt, Differenz und Komplement) auf Knoten- bzw. Kantenmengen von Graphen angewendet, sodass diese direkt auf Graphen definiert werden.
Sind

          G

            1

        =
        (

          V

            1

        ,

          E

            1

        )

    {\displaystyle G_{1}=(V_{1},E_{1})}

 und

          G

            2

        =
        (

          V

            2

        ,

          E

            2

        )

    {\displaystyle G_{2}=(V_{2},E_{2})}

 Graphen desselben Typs, so bezeichnet

          G

            1

        +

          G

            2

    {\displaystyle G_{1}+G_{2}}

 den Graphen, der entsteht, wenn man die Knoten- und Kantenmenge vereinigt,

          G

            1

        −

          E

            2

    {\displaystyle G_{1}-E_{2}}

 den Graphen, der entsteht, wenn man

          E

            2

    {\displaystyle E_{2}}

 von der Kantenmenge von

          G

            1

    {\displaystyle G_{1}}

 abzieht und

          G

            1

        −

          V

            2

    {\displaystyle G_{1}-V_{2}}

 den Graphen, der entsteht, wenn man

          V

            2

    {\displaystyle V_{2}}

 von der Knotenmenge von

          G

            1

    {\displaystyle G_{1}}

 abzieht und alle Kanten entfernt, die Knoten aus

          V

            2

    {\displaystyle V_{2}}

 enthalten.
Man beachte dabei die unterschiedliche Definition der Begriffe Vereinigungsmenge und Differenzmenge für Mengen und Multimengen. Man schreibt auch abkürzend

          G

            1

        +

          E

            2

    {\displaystyle G_{1}+E_{2}}

, falls

          V

            2

    {\displaystyle V_{2}}

 Teilmenge von

          V

            1

    {\displaystyle V_{1}}

 ist,

          G

            1

        +

          V

            2

    {\displaystyle G_{1}+V_{2}}

, falls

          E

            2

    {\displaystyle E_{2}}

 leer oder Teilmenge von

          E

            1

    {\displaystyle E_{1}}

 ist,

          G

            1

        +
        {
        v
        ,
        w
        }

    {\displaystyle G_{1}+\{v,w\}}

, falls

          G

            2

        =
        (
        {
        v
        ,
        w
        }
        ,
        {
        {
        v
        ,
        w
        }
        }
        )

    {\displaystyle G_{2}=(\{v,w\},\{\{v,w\}\})}

,

          G

            1

        +
        v

    {\displaystyle G_{1}+v}

, falls

          G

            2

        =
        (
        {
        v
        }
        ,
        {
        }
        )

    {\displaystyle G_{2}=(\{v\},\{\})}

,

          G

            1

        −
        {
        v
        ,
        w
        }

    {\displaystyle G_{1}-\{v,w\}}

, falls

          E

            2

        =
        {
        {
        v
        ,
        w
        }
        }

    {\displaystyle E_{2}=\{\{v,w\}\}}

 und

          G

            1

        −
        v

    {\displaystyle G_{1}-v}

 falls

          V

            2

        =
        {
        v
        }

    {\displaystyle V_{2}=\{v\}}

.
Kantenkontraktion und die Bildung des Komplementgraphen sind weitere Basisoperationen.

## Bemerkungen

Ungerichtete Graphen ohne Mehrfachkanten sind Spezialfälle von Hypergraphen.
Multigraphen, in denen keine Mehrfachkanten vorkommen, sind zwar nicht formal, aber anschaulich äquivalent zu Graphen ohne Mehrfachkanten, weshalb man auch diese als Graphen ohne Mehrfachkanten bezeichnet. Es gibt eine bijektive Zuordnung zwischen den beiden Varianten.
In diesem Sinne sind Graphen ohne Mehrfachkanten also Spezialfälle von Graphen mit Mehrfachkanten. Ähnlich verhält es sich mit ungerichteten Graphen, die in gewissem Sinn Spezialfälle von gerichteten Graphen sind. Ist ein gerichteter Graph symmetrisch und schleifenlos, so bezeichnet man diesen auch als ungerichtet, da es auch hier eine einfache eineindeutige Zuordnung zwischen beiden Varianten gibt (siehe auch Adjazenzmatrix).
Es lassen sich natürlich auch ungerichtete Graphen mit Schleifen definieren, wobei man diese wohl am einfachsten wie eben als (formale) Spezialfälle von gerichteten Graphen definiert und die Bedingung der Schleifenlosigkeit weg lässt. Solche Graphen sind aber nur selten Gegenstand der Betrachtungen in der Graphentheorie.
Der wohl allgemeinste Typ von Graphen sind gerichtete Hypergraphen mit Mehrfachkanten. Jeder oben definierte Graphentyp kann dann als Spezialfall von diesem betrachtet werden. Solche Graphen sind aber so gut wie gar nicht Gegenstand der Betrachtungen in der Graphentheorie, weshalb sie hier auch nicht näher erläutert werden.
Sollen Graphen als Darstellung eines Sachverhaltes herhalten, werden Algorithmen benötigt, die für das Graphzeichnen benötigt werden. Diese Disziplin der Informatik hat sich in den letzten Jahren stets fortentwickelt und liefert Lösungen für unterschiedliche Visualisierungen, die auf Graphen beruhen.

## Erweiterungen

Graphen können mit weiteren Eigenschaften bzw. Informationen ergänzt werden.

### Gefärbte Graphen

Eine Erweiterung von Graphen

        G
        =
        (
        V
        ,
        E
        )

    {\displaystyle G=(V,E)}

 zu knotengefärbten Graphen erhält man, indem das Tupel

        (
        V
        ,
        E
        )

    {\displaystyle (V,E)}

 zu einem Tripel

        (
        V
        ,
        E
        ,
        f
        )

    {\displaystyle (V,E,f)}

 ergänzt wird.

        f

    {\displaystyle f}

 ist eine Abbildung von

        V

    {\displaystyle V}

 in die Menge der natürlichen Zahlen. Anschaulich gibt man jedem Knoten damit eine Farbe.
Statt der Knoten kann man in Graphen ohne Mehrfachkanten und in Hypergraphen auch die Kanten färben und spricht dann von einem kantengefärbten Graphen. Dazu erweitert man ebenfalls das Tupel

        (
        V
        ,
        E
        )

    {\displaystyle (V,E)}

 zu einem Tripel

        (
        V
        ,
        E
        ,
        f
        )

    {\displaystyle (V,E,f)}

, wobei

        f

    {\displaystyle f}

 aber eine Abbildung von

        E

    {\displaystyle E}

 (statt von

        V

    {\displaystyle V}

) in die Menge der natürlichen Zahlen ist. Anschaulich gibt man jeder Kante damit eine Farbe. In Graphen mit Mehrfachkanten ist dies zwar prinzipiell auch möglich, aber schwieriger zu definieren, insbesondere, wenn Mehrfachkanten entsprechend ihrer Vielfachheit mehrere verschiedene Farben zugeordnet werden sollen.
Man beachte, dass die Begriffe „Färbung“ und „färben“ in der Graphentheorie auch eine speziellere Bedeutung besitzen. Exakt spricht man dann zwar von gültiger Färbung, lässt das Attribut „gültig“ aber meist weg.
Analog gibt es auch benannte Graphen

        (
        V
        ,
        E
        ,
        f
        ,
        g
        )

    {\displaystyle (V,E,f,g)}

, bei denen Knoten und/oder Kanten einen Namen tragen, und die Abbildungen

        f

    {\displaystyle f}

 bzw.

        g

    {\displaystyle g}

 den Knoten bzw. Kanten einen Namen zuordnen. Die zuvor abgebildeten Beispiele sind benannte Graphen, bei denen die Knoten mit Buchstaben benannt wurden. Dies wird oft bei Visualisierungen gemacht, so dass man besser über den Graphen diskutieren kann.

### Gewichtete Graphen

Statt von knoten- bzw. kantengefärbten Graphen spricht man von knoten- bzw. kantengewichteten Graphen, falls

        f

    {\displaystyle f}

 statt in die natürlichen Zahlen in die reellen Zahlen abbildet. Knoten- bzw. kantengefärbte Graphen sind also Spezialfälle von knoten- bzw. kantengewichteten Graphen.
Man bezeichnet

        f
        (
        v
        )

    {\displaystyle f(v)}

 bzw.

        f
        (
        e
        )

    {\displaystyle f(e)}

 auch als Gewicht des Knotens

        v

    {\displaystyle v}

 bzw. der Kante

        e

    {\displaystyle e}

. Zur Unterscheidung spricht man auch von Knotengewicht bzw. Kantengewicht. Eine solche Gewichtung wird erforderlich, wenn die Information über Knotenbeziehungen nicht ausreicht. Fasst man beispielsweise das Straßennetz (vereinfacht) als Graph auf (Orte sind Knoten, die Orte verbindende Straßen sind Kanten), so könnte eine Gewichtung der Kanten Aufschluss über die Distanz zwischen zwei Orten geben. Die Kantengewichte eines Graphen können in einer quadratischen Gewichtsmatrix, der Adjazenzmatrix, gesammelt werden.

### Abbildungen zwischen Graphen

Schließlich lassen sich auch Abbildungen zwischen Graphen definieren. Interessant sind insbesondere solche, die mit der Struktur der beiden verträglich sind, so genannte „Homomorphismen“.
Seien dazu

          G

            1

        =

          (

              V

                1

            ,

              E

                1

          )

    {\displaystyle G_{1}=\left(V_{1},E_{1}\right)}

 und

          G

            2

        =

          (

              V

                2

            ,

              E

                2

          )

    {\displaystyle G_{2}=\left(V_{2},E_{2}\right)}

 Graphen desselben Typs. Eine Abbildung

        p
        :

          V

            1

        →

          V

            2

    {\displaystyle p\colon V_{1}\to V_{2}}

 heißt Homomorphismus zwischen

          G

            1

    {\displaystyle G_{1}}

 und

          G

            2

    {\displaystyle G_{2}}

, falls gilt:

In ungerichteten Graphen ohne Mehrfachkanten: Ist

        {
        v
        ,
        w
        }

    {\displaystyle \{v,w\}}

 eine Kante von

          G

            1

    {\displaystyle G_{1}}

, so ist

        {
        p
        (
        v
        )
        ,
        p
        (
        w
        )
        }

    {\displaystyle \{p(v),p(w)\}}

 eine Kante von

          G

            2

    {\displaystyle G_{2}}

.
In gerichteten Graphen ohne Mehrfachkanten: Ist

        (
        v
        ,
        w
        )

    {\displaystyle (v,w)}

 Kante von

          G

            1

    {\displaystyle G_{1}}

, dann ist

        (
        p
        (
        v
        )
        ,
        p
        (
        w
        )
        )

    {\displaystyle (p(v),p(w))}

 Kante von

          G

            2

    {\displaystyle G_{2}}

.
In ungerichteten Graphen mit Mehrfachkanten:

          E

            1

        (
        {
        v
        ,
        w
        }
        )
        ≤

          E

            2

        (
        {
        p
        (
        v
        )
        ,
        p
        (
        w
        )
        }
        )

    {\displaystyle E_{1}(\{v,w\})\leq E_{2}(\{p(v),p(w)\})}

, d. h. je zwei Ecken sind mit höchstens so vielen Kanten verbunden wie ihre Bildecken.
In gerichteten Graphen mit Mehrfachkanten:

          E

            1

        (
        v
        ,
        w
        )
        ≤

          E

            2

        (
        p
        (
        v
        )
        ,
        p
        (
        w
        )
        )

    {\displaystyle E_{1}(v,w)\leq E_{2}(p(v),p(w))}

.
In gerichteten Graphen mit eigenständigen Mehrfachkanten:

        p

    {\displaystyle p}

 hat einen dazugehörenden Partner

        q
        :

          E

            1

        →

          E

            2

    {\displaystyle q\colon E_{1}\to E_{2}}

 und für alle Kanten

        e
        ∈

          E

            1

    {\displaystyle e\in E_{1}}

 gilt

            s
            r
            c

            2

        (
        q
        (
        e
        )
        )
        =
        p
        (

            s
            r
            c

            1

        (
        e
        )
        )

    {\displaystyle \mathrm {src} _{2}(q(e))=p(\mathrm {src} _{1}(e))}

 sowie

            t
            g
            t

            2

        (
        q
        (
        e
        )
        )
        =
        p
        (

            t
            g
            t

            1

        (
        e
        )
        )

    {\displaystyle \mathrm {tgt} _{2}(q(e))=p(\mathrm {tgt} _{1}(e))}

 (werden

          G

            1

    {\displaystyle G_{1}}

 und

          G

            2

    {\displaystyle G_{2}}

 als Funktoren angesehen, ist ein Graphhomomorphismus gerade eine natürliche Transformation).
In Hypergraphen: Ist

        {

          v

            1

        ,
        ⋯
        ,

          v

            k

        }

    {\displaystyle \{v_{1},\cdots ,v_{k}\}}

 Kante von

          G

            1

    {\displaystyle G_{1}}

, so ist

        {
        p
        (

          v

            1

        )
        ,
        ⋯
        ,
        p
        (

          v

            k

        )
        }

    {\displaystyle \{p(v_{1}),\cdots ,p(v_{k})\}}

 Kante von

          G

            2

    {\displaystyle G_{2}}

.
Das Bild p(G1) ist dann ein Teilgraph von G2. Ist p umkehrbar und die Umkehrfunktion ebenfalls ein Homomorphismus, so ist p ein Isomorphismus von Graphen.
Zu beachten ist, dass die Knoten vor den Kanten einen Vorrang haben, indem p als Funktion nur auf den Knoten spezifiziert ist, die auf den Kanten lediglich eine induzierte Wirkung entfaltet.

## Kombinatorik

Die Anzahl der einfachen ungerichteten Graphen mit

        n

    {\displaystyle n}

 Knoten steigt rasant mit der Anzahl der Knoten und ist gleich

          2

                  n
                  ⋅
                  (
                  n
                  −
                  1
                  )

                2

    {\displaystyle 2^{\tfrac {n\cdot (n-1)}{2}}}

. Sie steigt also exponentiell zur Anzahl

                n
                ⋅
                (
                n
                −
                1
                )

              2

    {\displaystyle {\tfrac {n\cdot (n-1)}{2}}}

 der Kanten des vollständigen Graphen

          K

            n

    {\displaystyle K_{n}}

. Wenn die Knoten nicht nummeriert sind, isomorphe Graphen also nicht mitgezählt werden, ist diese Anzahl etwa proportional zu

              1

                n
                !

        ⋅

          2

                  n
                  ⋅
                  (
                  n
                  −
                  1
                  )

                2

    {\displaystyle {\tfrac {1}{n!}}\cdot 2^{\tfrac {n\cdot (n-1)}{2}}}

, weil für die meisten Isomorphieklassen alle

        n
        !

    {\displaystyle n!}

 Graphen, die sich durch Permutation der nummerierten Knoten ergeben, verschieden sind. Die folgende Tabelle zeigt die mit Hilfe eines Computers bestimmten Anzahlen für

        n
        ≤
        8

    {\displaystyle n\leq 8}

:

## Datenstrukturen

Für die Repräsentation von Graphen im Computer gibt es im Wesentlichen zwei gebräuchliche Formen: die Adjazenzmatrix (auch Nachbarschaftsmatrix) und die Adjazenzliste (Nachbarschaftsliste). Die Bedeutung der beiden Darstellungen liegt darin, dass praktisch jede algorithmische Lösung graphentheoretischer Probleme auf wenigstens eine der beiden Repräsentationen zurückgreift. Eine weitere, aber seltener genutzte Möglichkeit zur Darstellung von Graphen im Computer ist die Inzidenzmatrix, die man auch als Knoten-Kanten-Matrix bezeichnet.
Inzidenzmatrizen sind zwar aufwändiger zu implementieren und zu verwalten, bieten aber eine Reihe von Vorteilen gegenüber Adjazenzmatrizen. Zum einen verbrauchen sie bei fester Anzahl von Kanten stets nur linear viel Speicherplatz bezüglich der Anzahl der Knoten, was insbesondere bei dünnen Graphen (also Graphen mit wenig Kanten) von Vorteil ist, während die Adjazenzmatrix quadratischen Platzbedarf bezüglich der Anzahl Knoten besitzt (dafür aber kompakter bei dichten Graphen, also Graphen mit vielen Kanten ist). Zum anderen lassen sich viele graphentheoretische Probleme nur mit Adjazenzlisten in linearer Zeit lösen. In der Praxis verwendet man daher meist diese Form der Repräsentation.

## Programmierung

Das folgende Beispiel in der Programmiersprache C++ zeigt die Implementierung eines gerichteten Graphen mit Adjazenzlisten. Der gerichtete Graph wird als Klasse DirectedGraph deklariert. Bei der Ausführung des Programms wird die Methode main verwendet.
