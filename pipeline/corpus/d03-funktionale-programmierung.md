---
url: https://de.wikipedia.org/wiki/Funktionale_Programmierung
---

# Funktionale Programmierung

## Überblick

Funktionale Programmierung ist ein Programmierparadigma, in dem Funktionen nicht nur definiert und angewendet werden können, sondern auch wie Daten miteinander verknüpft, als Parameter verwendet und als Funktionsergebnisse auftreten können. Dadurch kann ein funktionales Programm sehr weitreichend neue Berechnungsvorschriften zur Laufzeit zusammensetzen und anwenden. Programmiersprachen, die funktionale Programmierung ermöglichen, werden als funktionale Programmiersprachen bezeichnet.
Die funktionale Programmierung entspringt der mathematischen Grundlagenforschung. In den 1930er Jahren entwickelte Alonzo Church den Lambda-Kalkül als Instrument, um das Entscheidungsproblem zu bearbeiten und dazu den Begriff der berechenbaren Funktion zu definieren. Der Lambda-Kalkül selbst beschäftigt sich nicht mit bestimmten Funktionen, sondern ist nur ein Regelwerk dafür, wie die Anwendung von Funktionen auf ihre Argumente erfolgt und wie dabei mit freien und gebundenen Variablen verfahren wird.
Die besonderen Eigenschaften der funktionalen Programmierung ermöglichen es, auf die in der prozeduralen Programmierung benötigten Zustandsänderungen außerhalb eines Unterprogrammes, die auch Seiteneffekte genannt werden, zu verzichten, falls sie überhaupt möglich sind. Der Verzicht auf die Seiteneffekte vereinfacht auf der einen Seite die semantische Analyse eines Computerprogramms erheblich und eröffnet auf der anderen Seite weitreichende Möglichkeiten zur regelbasierten, algebraischen Programmtransformation und -synthese. Daraus ergibt sich die erhebliche praktische Bedeutung der funktionalen Programmierung für die Informatik.
Eine weitere Konsequenz ist, dass es in funktionaler Programmierung besonders einfach ist, Algorithmen ohne Berücksichtigung der Beschaffenheit der bearbeiteten Datenobjekte zu beschreiben und dadurch generischen Programmcode zu erstellen. Viele funktionale Verfahren sind so generisch, dass sie seit den 1950er Jahren keiner Anpassung unterworfen werden mussten.
Die erste bedeutende, in funktionaler Programmierung erstellte Software ist der von John McCarthy im Jahr 1958 erstellte, metazirkuläre Lisp-Interpreter mit Namen eval, der die Semantik von LISP aus fünf einfachen Funktionen zusammengesetzt darstellt. Er findet auf einer DIN-A4-Seite Platz und ist bis heute konzeptionelle Grundlage für die Implementierung der meisten Programmiersprachen.

## Definition

Die funktionale Programmierung ist durch folgende Eigenschaften gekennzeichnet:

Computerprogramme werden als Funktionen verstanden, die für eine Eingabe eine Ausgabe liefern, die nur von dieser abhängig ist.
Funktionen werden nicht als Abfolge von Anweisungen dargestellt, sondern als ineinander verschachtelte Funktionsaufrufe.
Funktionen sind gegenüber allen anderen Datenobjekten gleichberechtigt. Das bedeutet, dass sie als Parameter in Funktionen eingehen dürfen und ebenso als Berechnungsergebnisse aus Funktionen hervorgehen können. Insbesondere können Funktionen wie andere Datenobjekte zur Laufzeit erstellt werden oder entfallen.
Eine Funktion kann auf Variablen Bezug nehmen, die dem Kontext angehören, in dem ihre Erstellung erfolgt ist. Dies kann sie auch dann noch tun, wenn sie den Kontext verlassen hat. Die Belegung der Variablen zum Zeitpunkt des Verlassens dieses Kontextes wird dann innerhalb dieser Funktion eingefroren. Eine so entstandene Funktion heißt Closure und die eingefrorenen Variablenbelegungen heißen Closure-Variablen.
Funktionsdefinitionen können insbesondere bei Funktionsanwendungen ohne explizite Namensgebung literal in der Stellung des Funktionssymbols stehen. Solche Funktionen heißen anonym und werden oft salopp „Lambdas“ genannt.

## Funktionale Programmiersprachen

Eine rein funktionale Programmiersprache wäre strikt isomorph zum Lambda-Kalkül. Das gilt mit minimalen Einschränkungen beispielsweise für die esoterische Programmiersprache unlambda.
Wichtige Vertreter funktionaler Programmiersprachen sind die Lisp-Programmiersprachenfamilie und die rein funktionale Programmiersprache Haskell.
Vornehmlich zur funktionalen Programmierung gedachte Sprachen sind:

Clojure (2007)
Elixir (2011)
Erlang (1987)
F# (2002)
Haskell (1990)
LISP (1958)
ML (1973)
OCaml (1996)
Scala (2004).
Fast alle in jüngster Zeit entstandenen Programmiersprachen gestatten funktionale Programmierung. Sprachen, die funktionale Programmierung neben anderen Paradigmen ermöglichen, sind zum Beispiel Perl, ECMAScript, Dylan, Ruby und Visual Basic.NET. Python hat Einschränkungen bei der Formulierung von anonymen Funktionen. Viele eigentlich objektorientierte Sprachen wurden in jüngsten Versionen aufgerüstet wie C++ (ab Version 11), Delphi (ab Version 2009) oder Java (ab Version 8). Allerdings leidet darunter die Syntax, sodass die Kompaktheit von LISP oder Haskell nicht erreicht wird.
Populäre Programmiersprachen, die keinerlei Möglichkeiten zur funktionalen Programmierung bieten, sind zum Beispiel C und VBA.

## Mathematische Konzepte

Die allgemeingültigen Konzepte der funktionalen Programmierung entstammen der Mathematik der 1930er und 1940er Jahre. Von besonderer Bedeutung sind der Lambda-Kalkül und die Kategorientheorie. Der Lambda-Kalkül ist ein operatives Regelwerk, mit dessen Hilfe die Bedeutung von symbolischen Ausdrücken bestimmt werden kann. Kategorientheoretisch (Kategorientheorie) sind Datentypen Objekte und Funktionen Morphismen, die zwischen diesen abbilden und für die die gewöhnliche Funktionskomposition als zweistellige, assoziative Verknüpfung und die Identitäts-Abbildung als neutrales Element definiert ist. Damit bilden die Funktionen eine „Gruppe ohne das Gesetz vom inversen Element“.

### Listen

In der imperativen Programmierung übliche Datenstrukturen wie Arrays sind in der funktionalen Programmierung schwierig im Gebrauch, da sie durch Rekursion nur schwierig darstellbar sind, auch wenn es Ansätze wie das Functional Programming System gibt, die explizit mit solchen Strukturen arbeiten. Listen und Bäume sind hingegen sehr gut mit der Funktionalen Programmierung verträglich.
Sei

        A

    {\displaystyle A}

 ein beliebiger Datentyp. Dann ist der Typ

          A

            ∗

    {\displaystyle A^{*}}

 der beliebig langen Listen mit mindestens 0 Elementen des Typs

        A

    {\displaystyle A}

 gegeben durch die Rekursion

          A

            ∗

        =
        N
        i
        l

          |

        C
        o
        n
        s
        (
        A
        ,

          A

            ∗

        )

    {\displaystyle A^{*}=Nil|Cons(A,A^{*})}

. Dabei ist

        N
        i
        l

    {\displaystyle Nil}

 die leere Liste und

        C
        o
        n
        s
        :
        A
        ×

          A

            ∗

        →

          A

            ∗

    {\displaystyle Cons:A\times A^{*}\to A^{*}}

 eine zweistellige Operation, die aus einem Wert

        a

    {\displaystyle a}

 und einer Liste

        L

    {\displaystyle L}

 eine neue Liste

        M

    {\displaystyle M}

 konstruiert, indem sie

        a

    {\displaystyle a}

 vorne an

        L

    {\displaystyle L}

 anhängt.
Man kann diesen rekursiven Aufbau benutzen, um Funktionen

        h
        :

          A

            ∗

        →
        B

    {\displaystyle h\colon A^{*}\to B}

 zu schreiben, die eine Liste zerlegen und dabei einen Wert ermitteln. Eine solche Funktion

        h

    {\displaystyle h}

 heißt Katamorphismus.

### Katamorphismen

Sei

        B

    {\displaystyle B}

 ein Datentyp,

        b
        ∈
        B

    {\displaystyle b\in B}

 ein Wert und

        ⊗
        :
        A
        ×
        B
        →
        B

    {\displaystyle \otimes \colon A\times B\to B}

 eine Abbildung. Dann ist durch

                h
                :

                  A

                    ∗

                →
                B

                N
                i
                l

                ↦
                b

                C
                o
                n
                s
                (
                a
                ,
                L
                )

                ↦
                a
                ⊗
                h
                (
                L
                )

    {\displaystyle {\begin{aligned}h\colon A^{*}&\to B\\Nil&\mapsto b\\Cons(a,L)&\mapsto a\otimes h(L)\end{aligned}}}

der Katamorphismus (zu griech. κατά = entlang, herab) mit Initialwert

        b

    {\displaystyle b}

 und Verknüpfung

        ⊗

    {\displaystyle \otimes }

 gegeben. In der üblichen Notation mit Bananenklammern wird er als

        h
        =
        (

          |

        b
        ,
        ⊗

          |

        )

    {\displaystyle h=(|b,\otimes |)}

 geschrieben. Im Sinne der funktionalen Programmierung ist die Zirkumfix-Operation

        (

          |

        ⋅
        ,
        ⋅

          |

        )

    {\displaystyle (|\cdot ,\cdot |)}

 eine Funktion höherer Ordnung. In funktionalen Programmiersprachen gibt es zur Berechnung von Katamorphismen die Funktion reduce oder fold. Ein Katamorphismus, der obiger Definition folgt, ist rechtshändig. Er entspricht der folgenden Programmschleife, die eine Liste von ihrem Ende her traversiert:

                x
                :=
                b

                F
                o
                r

                i
                :=
                L
                e
                n
                g
                t
                h
                (
                L
                )

                   Downto

                1

                   Do

                x
                :=

                  L

                    i

                ⊗
                x

                E
                n
                d

                R
                e
                t
                u
                r
                n
                (
                x
                )

    {\displaystyle {\begin{aligned}&x:=b\\&For\;i:=Length(L){\text{ Downto }}1{\text{ Do}}\\&\;\;x:=L_{i}\otimes x\\&End\\&Return(x)\\\end{aligned}}}

Ein linkshändiger Katamorphismus würde beim Index 1 beginnen.
Viele grundlegende Verfahren der Programmierung sind Katamorphismen. So berechnet

        (

          |

        0
        ,
        +

          |

        )

    {\displaystyle (|0,+|)}

 die Summe einer Zahlenliste,

        (

          |

        ϵ
        ,
        ⋅

          |

        )

    {\displaystyle (|\epsilon ,\cdot |)}

 hängt Strings aneinander und

        (

          |

        0
        ,
        I
        n
        c

          |

        )

    {\displaystyle (|0,Inc|)}

 mit

        I
        n
        c
        :
        (
        n
        ,
        k
        )
        ↦
        k
        +
        1

    {\displaystyle Inc:(n,k)\mapsto k+1}

 berechnet die Länge einer Liste.
Eine Funktion, die eine Liste

        l

    {\displaystyle l}

 nach Elementen filtert, die die Eigenschaft

        p

    {\displaystyle p}

 erfüllen, kann mit der Funktion

        f
        i
        l
        t
        e
        r

    {\displaystyle filter}

 aus

        p

    {\displaystyle p}

 errechnet werden, die wie folgt definiert ist:

        f
        i
        l
        t
        e
        r
        :
        p
        ↦
        (

          |

        N
        i
        l
        ,
        f

          |

        )

    {\displaystyle filter:p\mapsto (|Nil,f|)}

 mit

        f
        :
        C
        o
        n
        s
        (
        a
        ,
        L
        )
        ↦
        C
        o
        n
        s
        (
        a
        ,
        L
        )

    {\displaystyle f:Cons(a,L)\mapsto Cons(a,L)}

 falls

        p
        (
        a
        )

    {\displaystyle p(a)}

 und

        f
        :
        C
        o
        n
        s
        (
        a
        ,
        L
        )
        ↦
        L

    {\displaystyle f:Cons(a,L)\mapsto L}

 sonst.
Ist die Operation

        h

    {\displaystyle h}

 assoziativ mit dem neutralen Element

        ∅

    {\displaystyle \emptyset }

, dann ist der Katamorphismus

        (

          |

        ∅
        ,
        h

          |

        )

    {\displaystyle (|\emptyset ,h|)}

 die eindeutige Erweiterung der Operation

        h

    {\displaystyle h}

 auf beliebig viele Argumente. Das ist eine nützliche Eigenschaft, die viel Arbeit in der praktischen Programmierung einsparen kann. Ist zum Beispiel eine zweistellige Funktions-Komposition

        f
        ∘
        g

    {\displaystyle f\circ g}

 bereits implementiert, so lässt sich die Komposition

          ⨀

            i
            =
            1

            n

          f

            i

    {\displaystyle \bigodot _{i=1}^{n}f_{i}}

 von

        n

    {\displaystyle n}

 Funktionen als

        (

          |

        i
        d
        ,
        ∘

          |

        )

    {\displaystyle (|id,\circ |)}

 darstellen (dabei ist

        i
        d

    {\displaystyle id}

 die identische Abbildung).

### Anamorphismen

Während Katamorphismen Listen zu Einzelwerten reduzieren, bauen Anamorphismen Listen aus Einzelwerten auf. Die Begriffe sind dual zueinander.
Es sei

        p
        :
        B
        →
        {
        w
        ,
        f
        }

    {\displaystyle p\colon B\to \{w,f\}}

 ein Prädikat und

        g
        :
        B
        →
        A
        ×
        B

    {\displaystyle g\colon B\to A\times B}

 eine Abbildung. Ein Anamorphismus

        h
        :
        B
        →

          A

            ∗

    {\displaystyle h\colon B\to A^{*}}

 ist dann so definiert:

                h
                :
                b

                ↦
                N
                i
                l

                   falls

                p
                (
                b
                )
                =
                w

                b

                ↦
                C
                o
                n
                s
                (
                a
                ,
                h
                (

                  b
                  ′

                )
                )

                   mit

                [
                a
                ,

                  b
                  ′

                ]
                =
                g
                (
                b
                )

                   falls

                p
                (
                b
                )
                =
                f

    {\displaystyle {\begin{aligned}h:b&\mapsto Nil{\text{ falls }}p(b)=w\\b&\mapsto Cons(a,h(b')){\text{ mit }}[a,b']=g(b){\text{ falls }}p(b)=f\end{aligned}}}

Der Anamorphismus mit Generator

        g

    {\displaystyle g}

 und Prädikat

        p

    {\displaystyle p}

 wird mit Linsenklammern notiert:

        h
        =
        [
        (
        p
        ,
        g
        )
        ]

    {\displaystyle h=[(p,g)]}

. Ein Beispiel für einen einfachen Anamorphismus ist die Funktion

        ι
        =
        [
        (
        i
        ↦
        (
        i
        <
        1
        )
        ,
        i
        ↦
        [
        i
        ,
        i
        −
        1
        ]
        )
        ]

    {\displaystyle \iota =[(i\mapsto (i<1),i\mapsto [i,i-1])]}

. Sie errechnet aus einer natürlichen Zahl

        n

    {\displaystyle n}

 die (umgedrehte) Liste der ersten

        n

    {\displaystyle n}

 natürlichen Zahlen

        ι
        (
        n
        )
        =
        [
        n
        ,
        n
        −
        1
        ,
        n
        −
        2
        ,
        .
        .
        ,
        1
        ]

    {\displaystyle \iota (n)=[n,n-1,n-2,..,1]}

.

### Hylomorphismen

Sei

        (

          |

        z
        ,
        f

          |

        )

    {\displaystyle (|z,f|)}

 ein Katamorphismus und

        [
        (
        p
        ,
        g
        )
        ]

    {\displaystyle [(p,g)]}

 ein Anamorphismus. Dann ist die Abbildung

        (

          |

        z
        ,
        f

          |

        )
        ∘
        [
        (
        p
        ,
        g
        )
        ]

    {\displaystyle (|z,f|)\circ [(p,g)]}

 ein sogenannter Hylomorphismus (altgriechisch ὕλη hýlē, deutsch ‚Holz, Material‘). Hylomorphismen sind in der Lage, einen ganzen Verarbeitungsprozess darzustellen, innerhalb dessen eine Struktur durch einen Anamorphismus entwickelt und durch einen Katamorphismus wieder eingedampft wird. Diese Darstellung ermöglicht es, die durch den Anamorphismus erzeugte Zwischenstruktur algebraisch zu entfernen. Die daraus resultierende, eigenständige Darstellung des Hylomorphismus ohne Zwischenstruktur führt in der Praxis zu einer erheblichen Reduktion des benötigten Speicherplatzes.
Es ist problemlos möglich, einen komplexeren Algorithmus wie den Minimax-Algorithmus, der den besten Zug in einem Zweipersonenspiel wie Schach findet, als Hylomorphismus darzustellen. Der Hylomorphismus

        !
        =
        (

          |

        1
        ,
        ×

          |

        )
        ∘
        (
        [
        (
        i
        ↦
        (
        i
        <
        1
        )
        ,
        i
        ↦
        [
        i
        ,
        i
        −
        1
        ]
        )
        ]

    {\displaystyle !=(|1,\times |)\circ ([(i\mapsto (i<1),i\mapsto [i,i-1])]}

, der den Katamorphismus

        (

          |

        1
        ,
        ×

          |

        )

    {\displaystyle (|1,\times |)}

 zur Berechnung eines Zahlenprodukts mit dem oben genannten Anamorphismus

        ι

    {\displaystyle \iota }

 kombiniert, berechnet die Fakultät einer Zahl.

## Abgrenzung von imperativer Programmierung

Im Gegensatz zu imperativen Programmen, die aus Rechenanweisungen bestehen, sind funktionale Programme eine Menge von (Funktions)-Definitionen, die mathematisch eine partielle Abbildung von Eingabedaten auf Ausgabedaten sind und gleichzeitig selbst aus Funktionsaufrufen zusammengesetzt sind.
Ein typisches Beispiel ist die Berechnung der Fakultät n! einer Zahl n (n! = 1 · 2 · 3 · … · n), hier eine imperative Lösung:

Eingabe:
    Zahl n
Ausgabe:
    Zahl b (= 1 · 2 · 3 · … · n)
Algorithmus:
    b := 1 (Zuweisung)

    solange n > 0 führe aus
        b := n · b
        n := n − 1

    Ausgabe: b

Charakteristisch für die imperative Programmierung sind hier die Zuweisungen (Änderung von Werten, durch das Symbol := im Pseudocode repräsentiert). Zwar berechnet der Algorithmus die Fakultät der Zahl n, aber die Korrektheit dieses Rechenweges ist nicht offensichtlich.
Nun kann man die Fakultät jedoch auch mithilfe von rekursiven Funktionen definieren, was zur funktionalen Lösung führt.

        n
        !
        =
        f
        (
        n
        )
        =

            {

                  n
                  ⋅
                  f
                  (
                  n
                  −
                  1
                  )

                    f

                          u
                          ¨

                    r

                  n
                  >
                  0

                  1

                    f

                          u
                          ¨

                    r

                  n
                  =
                  0

    {\displaystyle n!=f(n)={\begin{cases}n\cdot f(n-1)&\mathrm {f{\ddot {u}}r} \ \ n>0\\1&\mathrm {f{\ddot {u}}r} \ \ n=0\end{cases}}}

Funktion f(n):
    wenn n > 0 dann:
        Ausgabe: n · f(n - 1)
    sonst wenn n = 0 dann:
        Ausgabe: 1

Die funktionale Programmierung kommt also ohne Schleifen und Zuweisungen aus, benötigt dafür aber Rekursion.

## Lambda-Kalkül

Die theoretische Grundlage der funktionalen Programmierung ist der λ-Kalkül (Lambda-Kalkül) von Alonzo Church. Jeder Ausdruck und jeder Wert wird dabei als auswertbare Funktion betrachtet, so dass die ganze Programmierung auf der Übergabe von Funktionen als Parameter an Funktionen fußt.
Der Lambda-Kalkül erlaubt es, vollständige Teilausdrücke separat auszuwerten. Dies ist der wichtigste Vorteil gegenüber der imperativen Programmierung. Dieses Konzept vereinfacht die Programmverifikation und Programmoptimierung, beispielsweise die Überführung der Programme in eine parallel auswertbare Form.

## Typsystem

Historisch ist Lisp als die erste funktionale Programmiersprache aufzufassen. Sprachen der LISP-Familie (wie auch Scheme) sind dynamisch typisiert. Seit der Entwicklung von Standard-ML (SML) konzentriert sich die Forschung auf dem Gebiet der funktionalen Programmiersprachen auch auf statisch typisierte Sprachen, insbesondere auf solche, die das Typsystem nach Hindley und Milner verwenden. Der Vorteil dieses Typsystems ist die Verfügbarkeit von parametrischem Polymorphismus zusammen mit Typinferenz: Programmierer müssen die Typen ihrer Funktionen und anderen Werte nicht angeben, sondern bekommen sie gratis vom Übersetzer ausgerechnet, der zugleich noch während der Übersetzung Typfehler monieren kann. Dies wird allgemein als wesentlicher Vorteil gegenüber dynamisch typisierten Sprachen (Lisp, Python) aufgefasst, die zwar ebenfalls keine Typannotationen benötigen (im Gegensatz z. B. zu Java oder C), dafür aber Typfehler erst zur Laufzeit anmahnen können. Letzteres hat jedoch wiederum den Vorteil einer breiteren Anwendbarkeit bereits definierter Funktionen auf ggf. zum Entwicklungszeitpunkt noch nicht vorhergesehene neue Einsatzgebiete.
Das Hindley-Milner-System erlaubt allerdings nur Polymorphismus ersten Ranges; Erweiterungen für Polymorphismus zweiten und allgemein k-ten Ranges sind inzwischen in dem Haskell-Übersetzer GHC als Erweiterungen verfügbar, bedingen jedoch wieder explizite Annotationen (Typinferenz ab Polymorphismus zweiten Ranges ist unentscheidbar).

## Rein funktionale Programmiersprachen

Rein funktionale Programmiersprachen fassen Programme als mathematische Funktion auf.  Es gibt keine Zustandsvariablen, die während einer Berechnung geändert werden. Um erwünschte Wirkungen (Benutzerinteraktion, Eingabe/Ausgabe-Operationen) beschreiben zu können, sind meist besondere Vorkehrungen notwendig. Die meisten funktionalen Programmiersprachen (Standard ML, Caml, Scheme und weitere) erlauben allerdings solche Wirkungen und sind daher keine reinen funktionalen Programmiersprachen.
Um Programmierung auch mit Wirkungen zu erlauben, ohne dabei zu einer sog. unreinen (englisch impure) Sprache zu werden, wird in der Sprache Haskell das aus der Kategorientheorie stammende Konzept der Monaden verwendet (insbesondere von Eugenio Moggi und Philip Wadler), welches Wirkbehaftung durch parametrische Typen ausdrückt und somit das Typsystem dazu zwingt, zwischen Ausdrücken mit und Ausdrücken ohne Wirkungen zu unterscheiden. Auch in Clean und Mercury wird das Typsystem verwendet, um solche Wirkungen zu kennzeichnen. Dort benutzt man allerdings das Konzept der „Uniqueness“-Typen.

## Funktionen höherer Ordnung

Man unterscheidet Funktionen erster Ordnung und Funktionen höherer Ordnung. Bei Funktionen höherer Ordnung sind Funktionen selbst Werte. Dies erlaubt es insbesondere, Funktionen als Ergebnisse oder Argumente anderer Funktionen zu verwenden. Ein klassisches Beispiel ist der Ableitungsoperator, dessen Darstellbarkeit in Lisp obligatorisch für das Design dieser Sprache war: Eingabe ist eine differenzierbare Funktion, Ausgabe ist die Ableitung dieser Funktion.
Ein einfacheres Standardbeispiel für eine Funktion höherer Ordnung ist die Funktion map, welche als Eingabe eine Funktion f und eine Liste l erhält und die modifizierte Liste zurückgibt, die dadurch entsteht, dass die Funktion f auf jedes Element der Liste l angewendet wird. Definition von map in Haskell:

In der ersten Zeile wird das Ergebnis für eine leere Liste [] zurückgegeben; die zweite Zeile wendet die Funktion f auf das erste Listenelement x an und führt dann einen Rekursionsschritt für die restliche Liste xs durch.

## Bedarfsauswertung und strikte Auswertung

Funktionale Sprachen kann man auch nach ihrer Auswertungsstrategie unterscheiden: Bei strikter Auswertung (englisch eager bzw. strict evaluation) werden die Argumente von Funktionen zuerst ausgewertet. Dagegen werden bei der nicht-strikten Auswertung zunächst die Ausdrücke als Ganzes übergeben und dann ausgewertet.
Man kann zum Beispiel den Ausdruck

        (
        3
        +
        5

          )

            2

    {\displaystyle (3+5)^{2}}

 auf zwei Arten berechnen:

        (
        3
        +
        5

          )

            2

        =

          8

            2

        =
        8
        ⋅
        8
        =
        64

    {\displaystyle (3+5)^{2}=8^{2}=8\cdot 8=64}

        (
        3
        +
        5

          )

            2

        =
        (
        3
        +
        5
        )
        ⋅
        (
        3
        +
        5
        )
        =
        8
        ⋅
        8
        =
        64

    {\displaystyle (3+5)^{2}=(3+5)\cdot (3+5)=8\cdot 8=64}

Im ersten Fall wird der Ausdruck strikt ausgewertet, da erst die Argumente der Potenz-Funktion berechnet werden. Im zweiten Fall werden diese Argumente erst bei Bedarf ausgewertet, also nachdem die Potenzfunktion aufgelöst wurde (nicht-strikte Auswertung).
Eine Variante der nicht-strikten Auswertung ist die Bedarfsauswertung (englisch lazy evaluation), bei der Ausdrücke erst ausgewertet werden, wenn deren Wert in einer Berechnung benötigt wird. Dadurch lassen sich z. B. unendlich große Datenstrukturen (die Liste aller natürlicher Zahlen, die Liste aller Primzahlen etc.) definieren und bestimmte Algorithmen vereinfachen sich.
Manche Berechnungen lassen sich mit strikter Auswertung, andere mit Bedarfsauswertung effizienter ausführen. Terminiert die strikte Auswertung eines Ausdruckes, so terminiert auch die nicht-strikte Auswertung. Hintergrund hiervon ist die Konfluenz-Eigenschaft des jeder funktionalen Sprache zugrundeliegenden λ-Kalküls, die aussagt, dass das Ergebnis der Berechnung nicht von der Reihenfolge der Auswertung abhängt.

## Funktionale Algorithmen und Datenstrukturen

Algorithmen geben vorteilhafte Verfahren für die Lösung wichtiger Probleme an (z. B. Sortieren) und sind in der Regel gut analysiert, so dass ein Entwickler auf bewährte, einschätzbare Lösungen zurückgreifen kann. Gleiches leisten Datenstrukturen für die Organisation von Daten. Sammlungen von guten Algorithmen und Datenstrukturen haben somit eine große praktische Bedeutung.
Der Verzicht auf Zuweisungen führt dazu, dass etliche klassische Algorithmen und Datenstrukturen, die regen Gebrauch von dieser Möglichkeit machen, so nicht für funktionale Sprachen verwendet werden können und nach neuen Lösungen gesucht werden muss.
Chris Okasaki schreibt:

Gerade rein funktionale Datenstrukturen sind von ihrer Natur her anders als die gewohnten Datenstrukturen, die meist nur eine Version ihrer Daten verwalten (ephemere Datenstrukturen), wohingegen funktionale Datenstrukturen mehrere Versionen verwalten (persistente Datenstrukturen).

## Beispiele

Folgende Programme definieren eine Funktion ringarea, die die Fläche berechnet, die zwischen den beiden konzentrischen Kreisen mit den Radien R und r bzw. r1 und r2 mit gemeinsamem Mittelpunkt liegt, entsprechend dem mathematischen Ausdruck:

        A
        =
        π
        ⋅
        (

          r

            1

            2

        −

          r

            2

            2

        )

    {\displaystyle A=\pi \cdot (r_{1}^{2}-r_{2}^{2})}

. Dazu werden die Konstante pi und die Hilfsfunktion sq definiert. Diese werden von ringarea dann für die Berechnung benutzt. Anmerkung: Wir setzen voraus, dass

          r

            1

        ≥

          r

            2

    {\displaystyle r_{1}\geq r_{2}}

 gilt.

### Common Lisp

### F# und OCaml

### Haskell

Der Typ der Funktionen sq, ringArea ist polymorph und wird durch die Angabe der Typklasse Floating eingegrenzt. Die explizite Spezifikation des Typs ist optional und kann ebenso gut durch den Haskell-Compiler inferenziert werden. Pi ist in Haskell vordefiniert.

### Joy

DEFINE
pi == 3.14;
sq == dup *;
ringarea == sq swap sq swap - pi *.
Joy benutzt die umgekehrte polnische Notation. Man beachte, dass hier alle Variablen Funktionen bezeichnen (auch pi ist eine Funktion).

### Julia

### Python

### Matlab

### Scala

### Kotlin

Es gibt entweder die Möglichkeit, den Funktionstyp separat anzugeben (oben), oder die Parametertypen innerhalb des Lambdas zu definieren (unten).

### Java

### Scheme

### SML

Der Typ von x muss hier explizit angegeben werden, da ein SML97-Übersetzer sonst den Typ int inferieren würde. Das zugrundeliegende Problem ist das der Überladung von Operatoren; dieses Problem wurde erst mit Einführung von Typklassen gelöst, allerdings in Haskell und verwandten Sprachen.

### Swift

### XSLT

XSLT dient dem Transformieren von XML (insbesondere in XHTML) und hat zusammen mit XML stark an Bedeutung gewonnen. Sie ist funktional, wie Dimitre Novatchev gezeigt hat. Die im folgenden Beispiel definierte Funktion kehrt die Reihenfolge der Wörter einer Zeichenkette um. Typisch für funktionale Programmiersprachen ist der rekursive Aufruf. Der zweite Absatz zeigt, wie die Funktion verwendet wird.
