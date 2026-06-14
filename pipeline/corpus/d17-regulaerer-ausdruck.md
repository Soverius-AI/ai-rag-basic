---
url: https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck
---

# Regulärer Ausdruck

## Überblick

Ein regulärer Ausdruck (englisch regular expression, Abkürzung RegExp oder Regex) ist in der theoretischen Informatik eine Zeichenkette, die der Beschreibung von Mengen von Zeichenketten mit Hilfe bestimmter syntaktischer Regeln dient. Neben Implementierungen in vielen Programmiersprachen verarbeiten auch viele Texteditoren reguläre Ausdrücke in der Funktion „Suchen und Ersetzen“. Ein einfacher Anwendungsfall von regulären Ausdrücken sind Wildcards.
Reguläre Ausdrücke können als Filterkriterien in der Textsuche verwendet werden, indem der Text mit dem Muster des regulären Ausdrucks abgeglichen wird. Dieser Vorgang wird auch Pattern Matching genannt. So ist es beispielsweise möglich, alle Wörter aus einer Wortliste herauszusuchen, die mit S beginnen und auf D enden, ohne die dazwischen liegenden Buchstaben oder deren Anzahl explizit vorgeben zu müssen.
Der Begriff des regulären Ausdrucks geht im Wesentlichen auf den Mathematiker Stephen Kleene zurück, der die ähnliche Bezeichnung reguläre Menge verwendete.

## Reguläre Ausdrücke in der theoretischen Informatik

### Theoretische Grundlagen

Reguläre Ausdrücke sind spezielle Formeln, die reguläre Sprachen beschreiben können. Diese regulären Sprachen befinden sich auf der untersten Stufe der Chomsky-Hierarchie (Typ-3). Sie werden durch reguläre Grammatiken erzeugt.
Zu jedem regulären Ausdruck existiert ein endlicher Automat, der die vom Ausdruck spezifizierte Sprache akzeptiert. Ein entsprechender (nichtdeterministischer) endlicher Automat kann mit der Thompson-Konstruktion aus einem regulären Ausdruck konstruiert werden. Daraus folgt die relativ einfache Implementierbarkeit regulärer Ausdrücke. Umgekehrt existiert zu jedem endlichen Automaten ein regulärer Ausdruck, der die vom Automaten akzeptierte Sprache beschreibt. Ein entsprechender regulärer Ausdruck kann mit Kleenes Algorithmus aus einem nichtdeterministischen endlichen Automaten konstruiert werden. Kleenes Algorithmus erzeugt meist sehr lange reguläre Ausdrücke. Die Zustands-Elimination (deutsch eigentlich: „Zustands-Eliminierung“) liefert in der Praxis meist kürzere reguläre Ausdrücke. Im schlimmsten Fall (englisch „worst case“) liefern jedoch beide Algorithmen reguläre Ausdrücke der Länge

          |

        Σ

          |

          4

              |

            Q

              |

    {\displaystyle |\Sigma |4^{|Q|}}

, wobei

          |

        Σ

          |

    {\displaystyle |\Sigma |}

 die Anzahl der Zeichen des zugrundeliegenden Alphabets und

          |

        Q

          |

    {\displaystyle |Q|}

 die Anzahl der Zustände im Automaten bezeichnen.

#### Syntax

Die Syntax definiert genau, wie reguläre Ausdrücke aussehen.
Reguläre Ausdrücke sind immer über einer vorgegebenen endlichen Zeichenmenge

        Σ

    {\displaystyle \Sigma }

 definiert, dem sogenannten Alphabet. Reguläre Ausdrücke basieren auf genau drei Operationen: Alternative, Verkettung und Wiederholung. Die formale Definition sieht folgendermaßen aus:

        ∅

    {\displaystyle \varnothing }

 (das spezielle Symbol für die leere Menge) ist ein regulärer Ausdruck.
für alle

        a
        ∈
        Σ

    {\displaystyle a\in \Sigma }

 ist

        a

    {\displaystyle a}

 (die Repräsentation eines Zeichens aus dem zugrunde liegenden Alphabet) ein regulärer Ausdruck.
Sind

        x

    {\displaystyle x}

 und

        y

    {\displaystyle y}

 reguläre Ausdrücke, so sind auch

        (
        x

          |

        y
        )

    {\displaystyle (x|y)}

 (Alternative),

        (
        x
        y
        )

    {\displaystyle (xy)}

 (Verkettung) und

        (

          x

            ∗

        )

    {\displaystyle (x^{*})}

 (Kleenesche Hülle, Kleene-Stern) reguläre Ausdrücke.
Für Alternative wird statt

          |

    {\displaystyle |}

 auch das Symbol

        +

    {\displaystyle +}

 verwendet. Man schreibt dann

        (
        x
        +
        y
        )

    {\displaystyle (x+y)}

. Für die Verkettung (Konkatenation) gibt es alternativ auch ein Operatorsymbol; man schreibt dann

        (
        x
        ⋅
        y
        )

    {\displaystyle (x\cdot y)}

.
Man kann auch zusätzliche Konstanten und Operationen erlauben, sofern sich ihre Wirkung auch mit den oben genannten Grundregeln beschreiben ließe. So findet man in der Literatur unter anderem auch

        ϵ

    {\displaystyle \epsilon }

 als regulären Ausdruck oder die positive Kleenesche Hülle

          x

            +

    {\displaystyle x^{+}}

, die als Abkürzung von

        (
        x
        (

          x

            ∗

        )
        )

    {\displaystyle (x(x^{*}))}

 betrachtet werden kann.
Gibt man eine Rangfolge der Operatoren an, kann man auf einige Klammern verzichten. Die Rangfolge ist üblicherweise Kleene-Stern vor Konkatenation vor Alternative. Statt

        (
        (
        (
        a
        b
        )

          |

        c

          )

            ∗

        )

    {\displaystyle (((ab)|c)^{*})}

 genügt dann die Schreibweise

        (
        a
        b

          |

        c

          )

            ∗

    {\displaystyle (ab|c)^{*}}

.
Die Anzahl der verschachtelten *-Operatoren wird als Sternhöhe bezeichnet.

#### Semantik

Die Semantik regulärer Ausdrücke definiert genau, welche formale Bedeutung die Syntax regulärer Ausdrücke hat.
Ein regulärer Ausdruck beschreibt eine formale Sprache, also eine Menge von Wörtern (Zeichenketten). Die Definition der Semantik lässt sich analog zur Syntaxdefinition beschreiben. Dabei bezeichnet

            L

        (
        r
        )

    {\displaystyle {\mathcal {L}}(r)}

 die formale Sprache, die durch den regulären Ausdruck

        r

    {\displaystyle r}

 spezifiziert wird.

            L

        (
        ∅
        )
        =
        ∅

    {\displaystyle {\mathcal {L}}(\varnothing )=\emptyset }

Das Symbol für die leere Menge spezifiziert die leere Sprache.
für alle

        a
        ∈
        Σ

    {\displaystyle a\in \Sigma }

 gilt

            L

        (
        a
        )
        =
        {
        a
        }

    {\displaystyle {\mathcal {L}}(a)=\{a\}}

Jeder Repräsentant eines Zeichens aus dem Alphabet spezifiziert die Sprache, die nur das Wort der Länge eins mit diesem Zeichen enthält.
sind

        x

    {\displaystyle x}

 und

        y

    {\displaystyle y}

 reguläre Ausdrücke, so gilt:

            L

        (
        x

          |

        y
        )
        =

            L

        (
        x
        )
        ∪

            L

        (
        y
        )

    {\displaystyle {\mathcal {L}}(x|y)={\mathcal {L}}(x)\cup {\mathcal {L}}(y)}

Die Alternative zwischen zwei Ausdrücken beschreibt die Sprache, die aus der Vereinigung der zwei Sprachen entsteht, die durch die beiden Ausdrücke beschrieben werden.

            L

        (
        x
        y
        )
        =
        {

        α
        β

          |

        α
        ∈

            L

        (
        x
        )
        ∧
        β
        ∈

            L

        (
        y
        )

        }

    {\displaystyle {\mathcal {L}}(xy)=\{\,\alpha \beta \,|\,\alpha \in {\mathcal {L}}(x)\land \beta \in {\mathcal {L}}(y)\,\}}

Die Konkatenation zweier Ausdrücke beschreibt die Sprache, die nur die Wörter enthält, die ein Wort aus der vom ersten Ausdruck beschriebenen Sprache als Präfix haben und deren unmittelbar folgendes Rest-Suffix ein Wort aus der vom zweiten Ausdruck beschriebenen Sprache ist.

            L

        (

          x

            ∗

        )
        =
        {

          α

            1

        …

          α

            n

          |

        n
        ∈

            N

            0

        ,

          α

            1

        ,
        …
        ,

          α

            n

        ∈

            L

        (
        x
        )

        }

    {\displaystyle {\mathcal {L}}(x^{*})=\{\,\alpha _{1}\dots \alpha _{n}\,|\,n\in \mathbb {N} _{0},\,\alpha _{1},\dots ,\alpha _{n}\in {\mathcal {L}}(x)\,\}}

Die kleenesche Hülle eines regulären Ausdrucks

        x

    {\displaystyle x}

 beschreibt die Sprache mit jenen Wörtern, die durch Aneinanderreihen beliebiger Wörter der durch

        x

    {\displaystyle x}

 beschriebenen Sprache entstehen.
Enthält die Syntaxdefinition regulärer Ausdrücke auch die Konstante

        ϵ

    {\displaystyle \epsilon }

, so ist deren Bedeutung definiert als

            L

        (
        ϵ
        )
        =
        {
        ε
        }

    {\displaystyle {\mathcal {L}}(\epsilon )=\{\varepsilon \}}

, also die Sprache, die nur das leere Wort

        ε

    {\displaystyle \varepsilon }

 enthält.
Das leere Wort ist ein Wort einer formalen Sprache (

        ε
        ∈

          Σ

            ∗

    {\displaystyle \varepsilon \in \Sigma ^{*}}

) und somit kein regulärer Ausdruck. Die Sprache, die nur das leere Wort enthält, lässt sich aber auch ohne die Konstante

        ϵ

    {\displaystyle \epsilon }

 durch einen regulären Ausdruck beschreiben, zum Beispiel:

          ∅

            ∗

    {\displaystyle \varnothing ^{*}}

. Es wird jedoch nicht immer optisch zwischen einem regulären Ausdruck und der zugehörigen Sprache unterschieden, sodass man statt

          a

    {\displaystyle \mathbf {a} }

 auch

        a

    {\displaystyle a}

 als regulären Ausdruck für die Sprache

        {
        a
        }

    {\displaystyle \{a\}}

 verwendet, ebenso kann die Unterscheidung zwischen

        ∅

    {\displaystyle \varnothing }

 und

        ∅

    {\displaystyle \emptyset }

 sowie zwischen

        ϵ

    {\displaystyle \epsilon }

 und

        ε

    {\displaystyle \varepsilon }

 entfallen.

### Beispiele

Wenn das Alphabet aus den Buchstaben

        a

    {\displaystyle a}

,

        b

    {\displaystyle b}

 und

        c

    {\displaystyle c}

 besteht, also

        Σ
        =
        {
        a
        ,
        b
        ,
        c
        }

    {\displaystyle \Sigma =\{a,b,c\}}

, dann lassen sich die folgenden Sprachen mit den entsprechenden regulären Ausdrücken beschreiben:

Die Sprache aller Wörter, die aus beliebig vielen

        a

    {\displaystyle a}

 oder aus beliebig vielen

        b

    {\displaystyle b}

 bestehen:
Syntax:

          r
          e
          g
          e
          x

        =

            a

            ∗

          |

            b

            ∗

    {\displaystyle \mathrm {regex} =\mathbf {a} ^{*}|\mathbf {b} ^{*}}

. Semantik:

            L

        (

          r
          e
          g
          e
          x

        )
        =
        {
        a

          }

            ∗

        ∪
        {
        b

          }

            ∗

    {\displaystyle {\mathcal {L}}(\mathrm {regex} )=\{a\}^{*}\cup \{b\}^{*}}

Die Sprache aller Wörter, die mit

        a

    {\displaystyle a}

 anfangen und mit beliebig vielen

        b

    {\displaystyle b}

 oder beliebig vielen

        c

    {\displaystyle c}

 enden:
Syntax:

          r
          e
          g
          e
          x

        =

          a

        (

            b

            ∗

          |

            c

            ∗

        )

    {\displaystyle \mathrm {regex} =\mathbf {a} (\mathbf {b} ^{*}|\mathbf {c} ^{*})}

. Semantik:

            L

        (

          r
          e
          g
          e
          x

        )
        =
        {
        a
        φ

        |

        φ
        ∈
        {
        b

          }

            ∗

        ∪
        {
        c

          }

            ∗

        }

    {\displaystyle {\mathcal {L}}(\mathrm {regex} )=\{a\varphi \;\vert \;\varphi \in \{b\}^{*}\cup \{c\}^{*}\}}

Die Sprache aller Wörter, die mit

        a

    {\displaystyle a}

 anfangen und mit einer beliebigen Folge aus den Zeichen

        a
        ,
        b
        ,
        c

    {\displaystyle a,b,c}

 enden:
Syntax:

          r
          e
          g
          e
          x

        =

          a

        (

          a

          |

          b

          |

          c

          )

            ∗

    {\displaystyle \mathrm {regex} =\mathbf {a} (\mathbf {a} |\mathbf {b} |\mathbf {c} )^{*}}

. Semantik:

            L

        (

          r
          e
          g
          e
          x

        )
        =
        {
        a
        φ

        |

        φ
        ∈

          Σ

            ∗

        }

    {\displaystyle {\mathcal {L}}(\mathrm {regex} )=\{a\varphi \;\vert \;\varphi \in \Sigma ^{*}\}}

Die Sprache aller Wörter, die zwei Zeichen lang sind und aus den Zeichen

        a

    {\displaystyle a}

 und

        b

    {\displaystyle b}

 bestehen:
Syntax:

          r
          e
          g
          e
          x

        =
        (

          a

          |

          b

        )
        (

          a

          |

          b

        )

    {\displaystyle \mathrm {regex} =(\mathbf {a} |\mathbf {b} )(\mathbf {a} |\mathbf {b} )}

. Semantik:

            L

        (

          r
          e
          g
          e
          x

        )
        =
        {
        ψ
        φ

        |

        ψ
        ,
        φ
        ∈
        {
        a
        ,
        b
        }
        }
        =
        {
        a
        a
        ,
        a
        b
        ,
        b
        a
        ,
        b
        b
        }

    {\displaystyle {\mathcal {L}}(\mathrm {regex} )=\{\psi \varphi \;\vert \;\psi ,\varphi \in \{a,b\}\}=\{aa,ab,ba,bb\}}

Die Sprache aller Wörter, die aus beliebig vielen Teilwörtern

        a
        b

    {\displaystyle ab}

 bestehen:
Syntax:

          r
          e
          g
          e
          x

        =
        (

          a

          b

          )

            ∗

    {\displaystyle \mathrm {regex} =(\mathbf {a} \mathbf {b} )^{*}}

. Semantik:

            L

        (

          r
          e
          g
          e
          x

        )
        =
        {
        a
        b

          }

            ∗

        =
        {
        ϵ
        ,
        a
        b
        ,
        a
        b
        a
        b
        ,
        a
        b
        a
        b
        a
        b
        ,
        ⋯
        }

    {\displaystyle {\mathcal {L}}(\mathrm {regex} )=\{ab\}^{*}=\{\epsilon ,ab,abab,ababab,\cdots \}}

## Anwendung regulärer Ausdrücke

Ken Thompson nutzte diese Notation in den 1960er Jahren, um qed (eine Vorgängerversion des Unix-Editors ed) zu bauen und später das Werkzeug grep zu schreiben. Seither implementieren sehr viele Programme und Bibliotheken von Programmiersprachen Funktionen, um reguläre Ausdrücke zum Suchen und Ersetzen von Zeichenketten zu nutzen. Beispiele dafür sind die Programme sed, awk, grep, lex, emacs, die Programmiersprachen Perl und Tcl und Standardbibliotheken der Programmiersprachen C, C++, Java, JavaScript, Python, PHP, R, Ruby und das .Net-Framework. Auch die Textverarbeitung und die Tabellenkalkulation des Office-Paketes OpenOffice.org bieten die Möglichkeit, mit regulären Ausdrücken im Text zu suchen.
Zwischen verschiedenen Regexp-Implementierungen gibt es Unterschiede in Funktionsumfang und Syntax. In Programmiersprachen haben sich überwiegend die Perl Compatible Regular Expressions (PCRE) durchgesetzt, die sich an der Umsetzung in Perl 5.0 orientieren. Daneben wird bei POSIX zwischen „grundlegenden“ regulären Ausdrücken (basic regular expressions) und „erweiterten“ regulären Ausdrücken (extended regular expressions) unterschieden.
Einige Programme, zum Beispiel der Texteditor Vim, bieten die Möglichkeit, zwischen verschiedenen Regexp-Syntaxen hin- und herzuschalten.
Reguläre Ausdrücke spielen eine wichtige Rolle bei der lexikalischen Analyse von Quelltexten, beispielsweise in Compilern oder zur Syntaxhervorhebung in Editoren. Ein lexikalischer Scanner zerlegt den Quelltext mithilfe von regulären Ausdrücken in sogenannte Tokens (Schlüsselwörter, Operatoren, …). Da es sich bei den meisten Programmiersprachen um kontextfreie Sprachen handelt, sind reguläre Ausdrücke nicht mächtig genug, um deren Syntax zu beschreiben. Daher wird die bei Compilern folgende syntaktische Analyse in der Regel von einem separaten Programm, dem Parser, erledigt.
Reguläre Ausdrücke spielen auch in der Bioinformatik eine Rolle. Sie kommen in Proteindatenbanken zum Einsatz, um Proteinmotive zu beschreiben. Der reguläre Ausdruck
W-x{9,11}-[VFY]-[FYW]-x{6,7}-[GSTNE]-[GSTQCR]-[FYW]-R-S-A-P
beschreibt zum Beispiel eine Proteindomäne in PROSITE. Der obige reguläre Ausdruck besagt Folgendes: Am Anfang wähle die Aminosäure Tryptophan (Einbuchstabencode W), dann wähle 9 bis 11 Aminosäuren frei aus, dann wähle entweder V, F oder Y, dann wähle entweder F, Y oder W, dann wieder 6 bis 7 Aminosäuren frei, dann entweder G, S, T, N oder E, dann entweder G, S, T, Q, C oder R, dann F, Y oder W, dann R dann S dann A dann P.

## Reguläre Ausdrücke in der Praxis

Die meisten heutigen Implementierungen unterstützen Erweiterungen wie zum Beispiel Rückwärtsreferenzen (backreferences). Hierbei handelt es sich nicht mehr um reguläre Ausdrücke im Sinne der theoretischen Informatik, denn die so erweiterten Ausdrücke beschreiben nicht mehr notwendigerweise Sprachen vom Typ 3 der Chomsky-Hierarchie.
Die folgenden Syntaxbeschreibungen beziehen sich auf die Syntax der gängigen Implementierungen mit Erweiterungen, sie entsprechen also nur teilweise der obigen Definition aus der theoretischen Informatik.
Eine häufige Anwendung regulärer Ausdrücke besteht darin, spezielle Zeichenketten in einer Menge von Zeichenketten zu finden. Die im Folgenden angegebene Beschreibung ist eine (oft benutzte) Konvention, um Konzepte wie Zeichenklasse, Quantifizierung, Verknüpfung und Zusammenfassen konkret zu realisieren. Hierbei wird ein regulärer Ausdruck aus den Zeichen des zugrunde liegenden Alphabets in Kombination mit den Metazeichen [ ] ( ) { } | ? + - * ^ $ \ . (teilweise kontextabhängig) gebildet, bei manchen Implementierungen auch : ! < =. Die Meta-Eigenschaft eines Zeichens kann durch einen vorangestellten Rückwärtsstrich (Backslash) aufgehoben werden. Alle übrigen Zeichen des Alphabets stehen für sich selbst.

### Zeichenliterale

Diejenigen Zeichen, die direkt (wörtlich, literal) übereinstimmen müssen, werden auch direkt notiert. Je nach System gibt es auch Möglichkeiten, das Zeichen durch den Oktal- oder Hexadezimalcode (\ooo bzw. \xhh) oder die hexadezimale Unicode-Position (\uhhhh) anzugeben.

### Ein Zeichen aus einer Auswahl

Mit eckigen Klammern ([ und ]) lässt sich eine Zeichenauswahl definieren. Der Ausdruck in eckigen Klammern steht dann für genau ein Zeichen aus dieser Auswahl. Innerhalb dieser Zeichenklassendefinitionen haben einige Symbole andere Bedeutungen als im normalen Kontext. Teilweise ist die Bedeutung eines Symbols vom Kontext abhängig, in dem es innerhalb der Klammern auftritt.
Beispielsweise bedeutet ein Zirkumflex ^ am Anfang einer Zeichenklassendefinition, dass die Zeichenklasse negiert bzw. invertiert wird (im Sinne der Komplementbildung). Steht ein Zirkumflex jedoch irgendwo sonst in der Definition, ist es wörtlich („literally“) zu verstehen. Ebenfalls kontextabhängig ist die Bedeutung des Bindestrich-Zeichens (-). Zudem unterscheiden sich hier die Regexp-Auswerter („regex engines“) (zum Beispiel POSIX und PCRE) in einigen Punkten voneinander. Steht ein Bindestrich - zwischen zwei Zeichen in der Klassendefinition, zum Beispiel [a-g], so ist er als Bis-Strich zu verstehen, das heißt als Beschreibung eines Zeichenintervalls oder Zeichenbereichs bezüglich der ASCII-Tabelle. Das genannte Beispiel wäre äquivalent zu [abcdefg]. Am Anfang oder Ende einer Zeichenklasse stehende Bindestriche werden als das Zeichen selbst interpretiert.

### Vordefinierte Zeichenklassen

Es gibt vordefinierte Zeichenklassen, die allerdings nicht von allen Implementierungen in gleicher Weise unterstützt werden, da sie lediglich Kurzformen sind und auch durch eine Zeichenauswahl beschrieben werden können. Wichtige Zeichenklassen sind:

Ein Punkt (.) bedeutet, dass an seinem Platz ein (fast) beliebiges Zeichen stehen kann. Die meisten RegExp-Implementierungen sehen standardmäßig Zeilenumbrüche nicht als beliebiges Zeichen an, jedoch kann dieses in einigen Programmen mittels des sogenannten Single-Line-Modifiers s (zum Beispiel in /foo.bar/s) erreicht werden.
In vielen neueren Implementierungen können innerhalb der eckigen Klammern nach POSIX auch Klassen angegeben werden, die selbst wiederum eckige Klammern enthalten. Sie lauten beispielsweise:

### Quantoren

Quantoren (englisch quantifier, auch Quantifizierer oder Wiederholungsfaktoren) erlauben es, den vorherigen Ausdruck in verschiedener Vielfachheit in der Zeichenkette zuzulassen.

Die Quantoren beziehen sich dabei auf den vorhergehenden regulären Ausdruck, jedoch nicht zwangsläufig auf die durch ihn gefundene Übereinstimmung. So wird zwar zum Beispiel durch a+ ein „a“ oder auch „aaaa“ vertreten, jedoch entspricht [0-9]+ nicht nur sich wiederholenden gleichen Ziffern, sondern auch Folgen gemischter Ziffern, beispielsweise „072345“.
Weitere Beispiele sind:

[ab]+ entspricht „a“, „b“, „aa“, „bbaab“ etc.
[0-9]{2,5} entspricht zwei, drei, vier oder fünf Ziffern in Folge, z. B. „42“ oder „54072“, jedoch nicht den Zeichenfolgen „0“, „1.1“ oder „a1a1“.
Soll eine Zeichenkette nur aus dem gesuchten Muster bestehen (und es nicht nur enthalten), so muss in den meisten Implementierungen explizit definiert werden, dass das Muster vom Anfang (\A oder ^) QF1 bis zum Ende der Zeichenkette (\Z, \z oder $) QF1 reichen soll. Andernfalls erkennt zum Beispiel [0-9]{2,5} auch bei der Zeichenkette „1234507“ die Teilzeichenkette „12345“. Aus dem gleichen Grund ergäbe beispielsweise a* immer einen Treffer, da jede Zeichenfolge insbesondere das leere Wort mindestens 0-mal das Zeichen „a“ enthält.
Quantoren sind standardmäßig „gierig“ (englisch greedy) implementiert. Das heißt, ein regulärer Ausdruck wird zur größtmöglichen Übereinstimmung aufgelöst. Da dieses Verhalten jedoch nicht immer so gewollt ist, lassen sich bei vielen neueren Implementierungen Quantoren als „genügsam“ oder „zurückhaltend“ (englisch non-greedy, reluctant) deklarieren. Zum Beispiel wird in Perl oder tcl hierfür dem Quantor ein Fragezeichen ? nachgestellt. Die Implementierung von genügsamen Quantoren ist vergleichsweise aufwendig und während des Suchvorgangs langsam (erfordert Backtracking), weshalb manche Implementierungen diese ausdrücklich vermeiden z. B. sed.

Beispiel (Perl-Syntax)
Angenommen, es wird der reguläre Ausdruck A.*B auf die Zeichenfolge „ABCDEB“ angewendet, so würde er sie als „ABCDEB“ finden. Mit Hilfe des „genügsamen“ Quantors *? passt der nun modifizierte Ausdruck – also A.*?B – nur die Zeichenkette „AB“, bricht also die Suche nach dem ersten gefundenen „B“ ab. Ein gleichwertiger regulärer Ausdruck für Interpreter, die diesen Quantor nicht unterstützen, wäre A[^B]*B.

### Possessives Verhalten

Eine Variante des oben beschriebenen gierigen Verhaltens ist das possessive matching. Da hierbei jedoch das Backtracking verhindert wird, werden einmal übereinstimmende Zeichen nicht wieder freigegeben. Daher finden sich in der Literatur auch die synonymen Bezeichnungen atomic grouping, independent subexpression oder non-backtracking subpattern. Die Syntax für diese Konstrukte variiert bei den verschiedenen Programmiersprachen. Ursprünglich wurden solche Teilausdrücke (englisch „subpattern“) in Perl durch (?>Ausdruck) formuliert. Daneben existieren seit Perl 5.10 die äquivalenten, in Java bereits üblichen possessiven Quantoren ++, *+, ?+ und {min,max}+.

Beispiel
Angenommen es wird auf die Zeichenfolge „ABCDEB“ der reguläre Ausdruck A.*+B angewendet, so fände er keine Übereinstimmung. Bei der Abarbeitung des regulären Ausdrucks würde der Teil .*+ bis zum Ende der Zeichenkette übereinstimmen. Um jedoch den gesamten Ausdruck zu finden, müsste ein Zeichen – hier also das „B“ – wieder freigegeben werden. Der possessive Quantor verbietet dies aufgrund des unterdrückten Backtrackings, weshalb keine erfolgreiche Übereinstimmung gefunden werden kann.

### Gruppierungen und Rückwärtsreferenzen

Ausdrücke lassen sich mit runden Klammern ( und ) zusammenfassen:
Etwa erlaubt (abc)+ ein „abc“ oder ein „abcabc“ etc. Wörtlich gemeinte Klammern kann man
mit \( und \) benennen. Bei manchen Implementationen ist es umgekehrt; in jedem Fall sind aber runde Klammern innerhalb von Zeichenklassen immer wörtlich.
Einige Implementierungen speichern die gefundenen Übereinstimmungen von Gruppierungen ab und ermöglichen deren Wiederverwendung im regulären Ausdruck oder bei der Textersetzung. Diese werden Rückwärtsreferenzen (englisch back references) genannt. Häufig wird dazu die Schreibweise \n oder $n verwendet, wobei n die Übereinstimmung der n-ten Gruppierung entspricht. Eine Sonderstellung stellt dabei n=0 dar, das meist für die Übereinstimmung des gesamten regulären Ausdrucks steht.

Beispiel
Ein Suchen und Ersetzen mit AA(.*?)BB als regulärem Suchausdruck und \1 als Ersetzung ersetzt alle Zeichenketten, die von AA und BB eingeschlossen sind, durch den zwischen AA und BB enthaltenen Text. Das heißt AA und BB und der Text dazwischen werden ersetzt durch den Text, der ursprünglich zwischen AA und BB stand, also fehlen AA und BB im Ergebnis.
Interpreter von regulären Ausdrücken, die Rückwärtsreferenzen im Suchmuster zulassen, entsprechen nicht mehr dem Typ 3 der Chomsky-Hierarchie. Mit dem Pumping-Lemma lässt sich zeigen, dass ein regulärer Ausdruck, der feststellt, ob in einer Zeichenkette vor und nach der 1 die gleiche Anzahl von 0 steht, keine reguläre Sprache ist.
Daneben gibt es auch noch Gruppierungen, die keine Rückwärtsreferenz erzeugen (englisch non-capturing). Die Syntax dafür lautet in den meisten Implementierungen (?:…). Regexp-Dokumentationen weisen darauf hin, dass die Erzeugung von Rückwärtsreferenzen stets vermieden werden soll, wenn kein späterer Zugriff auf sie erfolge. Denn die Erzeugung der Referenzen kostet Ausführungszeit und belegt Platz zur Speicherung der gefundenen Übereinstimmung. Zudem lassen die Implementationen nur eine begrenzte Anzahl an Rückwärtsreferenzen zu (häufig nur maximal 9).

Beispiel

Mit dem regulären Ausdruck \d+(?:-\d+)* können Folgen von durch Bindestriche getrennten Zahlenfolgen gefunden werden, ohne dabei die letzte durch einen Bindestrich getrennte Zahlenfolge als Rückreferenz zu erhalten.

Beispiel

Ein Datum im Format MM/DD/YYYY soll in das Format YYYY-MM-DD überführt werden.

Mit Hilfe des Ausdrucks ([0-1]?[0-9])\/([0-3]?[0-9])\/([0-9]{4}) werden die drei Zahlengruppen extrahiert.
Mit dem Ersetzungs-Ausdruck \3-\1-\2 werden die einzelnen Gruppen in das richtige Format überführt.

### Alternativen

Man kann alternative Ausdrücke mit dem |-Symbol zulassen.

Beispiel
ABC|abc bedeutet „ABC“ oder „abc“, aber z. B. nicht „Abc“.

### Weitere Zeichen

Um die oft auf Zeichenketten bezogenen Anwendungen auf dem Computer zu unterstützen, werden in der Regel zusätzlich zu den bereits genannten die folgenden Zeichen definiert:

Beispiel
[^ ]$ bedeutet: Die Zeichenkette muss aus mindestens einem Zeichen bestehen, und das letzte Zeichen darf kein Leerzeichen sein.

### Look-around assertions

Perl Version 5 führte zusätzlich zu den üblichen regulären Ausdrücken auch look-ahead und look-behind assertions (etwa „vorausschauende“ bzw. „nach hinten schauende“ Annahmen oder Behauptungen) ein, was unter dem Begriff look-around assertions zusammengefasst wird. Diese Konstrukte erweitern die regulären Ausdrücke um die Möglichkeit, kontextabhängige (englisch: „context sensitive“) Bedingungen zu formulieren, ohne den Kontext selbst als passend zu finden. Das heißt, möchte man alle Zeichenfolgen „Sport“ finden, denen die Zeichenfolge „verein“ folgt, ohne dass jedoch die gefundene Zeichenfolge die Zeichenfolge „verein“ selbst enthält, wäre dies mit einer look-ahead assertion möglich: Sport(?=verein). Im Beispielsatz „Ein Sportler betreibt Sport im Sportverein.“ würde jener reguläre Ausdruck also zum letzten Vorkommen von „Sport“ passen, da nur diesem die Zeichenfolge „verein“ folgt; er würde jedoch nicht zur Teilzeichenkette „Sportverein“ passen.
Aufgrund der Eigenschaft, dass der angegebene Kontext (im Beispiel „verein“) zwar angegeben wird, jedoch kein expliziter Bestandteil der passenden Zeichenkette (hier „Sport“) ist, wird im Zusammenhang mit assertions meist das Attribut zero-width mitgenannt. Die vollständigen Bezeichnungen lauten somit – je nachdem, ob ein bestimmter Kontext gefordert (positiv) oder verboten (negativ) ist – zero-width positive/negative look-ahead/behind assertions. Die Bezeichnungen der Richtungen rühren daher, dass Regexp-Parser eine Zeichenkette immer von links nach rechts abarbeiten.

Look-arounds werden nicht nur von Perl und PCRE, sondern unter anderem auch von Java, .NET und Python unterstützt. JavaScript interpretiert ab Version 1.5 positive und negative Look-Aheads.

Beispiel
\s(?=EUR) steht für ein „Whitespace“-Zeichen (d. h. Leerzeichen oder Tabulator), dem die Zeichenkette EUR folgt. Im Gegensatz zu \sEUR gehört hier EUR nicht zu einer passenden Zeichenkette (englisch: „matched character string“).

### Inline modifiers

Einige Implementierungen (unter anderem PHP, Perl/PCRE, Python sowie die PowerShell-Operatoren -match und -replace) unterstützen eingebettete Modifikatoren:

Es können mehrere Modifikatoren hintereinander geschrieben werden, wobei voranstehende Minuszeichen (-) deren Wirkungen negieren. Verbreitete Modifikatoren sind:

Beispiele:

(?i)i als auch (?i:i) finden jeweils in Iris zwei Treffer.
(?-i)i als auch (?-i:i) finden jeweils in Iris nur einen Treffer.

### Bedingte Ausdrücke

Relativ wenig verbreitet sind bedingte Ausdrücke. Diese sind unter anderem in Perl, PCRE und dem .Net-Framework einsetzbar. Python bietet für solche Ausdrücke im Zusammenhang mit Look-around assertions nur eingeschränkte Funktionalität.

Ist der falsch-Ausdruck leer, so kann der senkrechte Strich (|) entfallen. Als Bedingung kann u. a. eine Look-around assertion oder die Nummer einer Gruppierung angegeben werden, die zutreffen muss, damit der wahr-Ausdruck Anwendung findet.
Beispiele

Ob die linke oder rechte Seite einer Alternative angewandt werden soll, lässt sich an eine Bedingung knüpfen: Auf die Zeichenkette abc treffen sowohl die regulären Ausdrücke (.b|a)c als auch (?(?=a).b|a)c zu; ebenso trifft darauf (a|.b)c zu, jedoch nicht (?(?=a)a|.b)c.
Mit den Ausdrücken (\()?\d+(?(1)\)) und (?(?=\()\(\d+\)|\d+) werden jeweils Zeichenfolgen wie 1, (2), 34 oder (567) getroffen, aber nicht (42 oder 3). Es soll nicht unerwähnt bleiben, dass sich im vorliegenden Fall mittels der einfachen Alternative \(\d+\)|\d+ das gleiche Ergebnis erzielen lässt.

## Beispiele

Die folgende Tabelle zeigt einige reguläre Ausdrücke und jeweils dazu passende Zeichenketten:
