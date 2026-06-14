---
url: https://de.wikipedia.org/wiki/Haskell_(Programmiersprache)
---

# Haskell (Programmiersprache)

## Überblick

Haskell ist eine rein funktionale Programmiersprache, benannt nach dem US-amerikanischen Mathematiker Haskell Brooks Curry, dessen Arbeiten zur mathematischen Logik eine Grundlage funktionaler Programmiersprachen bilden. Haskell basiert auf dem Lambda-Kalkül, weshalb auch der griechische Buchstabe Lambda als Logo verwendet wird. Die wichtigste Implementierung ist der Glasgow Haskell Compiler (GHC).

## Entwicklung

Gegen Ende der 1980er Jahre gab es bereits einige funktionale Programmiersprachen. Um der Wissenschaft eine einheitliche Forschungs- und Entwicklungsbasis bereitzustellen, sollte eine standardisierte und moderne Sprache die funktionale Programmierung vereinheitlichen. Zunächst wollte man dazu Miranda als Ausgangspunkt benutzen, doch deren Entwickler waren nicht daran interessiert. So wurde 1990 Haskell 1.0 veröffentlicht.
Die Sprachderivate von Haskell sind zahlreich; dazu zählen Parallel Haskell, Distributed Haskell (ehemals Goffin), Eager Haskell, Eden mit einem neuen Ansatz zum parallelen Programmieren und Bedarfsauswertung, DNA-Haskell und sogar objektorientierte Varianten (Haskell++, O’Haskell, Mondrian). Des Weiteren diente Haskell beim Entwurf neuer Programmiersprachen als Vorlage. So wurde beispielsweise im Falle von Python die Lambda-Notation sowie Listenverarbeitungssyntax übernommen.

## Eigenschaften

### Programmfluss

Haskell ist eine rein funktionale Programmiersprache. Funktionen geben nur Werte zurück, ändern aber nicht den Zustand eines Programms (d. h. Funktionen haben keine Nebeneffekte). Das Ergebnis einer Funktion hängt deshalb nur von den Eingangsparametern ab, und nicht vom Kontext, in dem die Funktion aufgerufen wird (z. B. Zeitpunkt des Aufrufs). Daraus folgt, dass bei wiederholtem Aufrufen einer Funktion mit denselben Parametern auch jedes Mal dasselbe Ergebnis folgt. Dies können Haskell-Implementationen nutzen, um Funktionen zu cachen.

Es gibt keine nativen imperativen Sprachkonstrukte. Durch die IO-Monade ist es möglich, Ein- und Ausgabeoperationen und zustandsabhängige Berechnungen, wie Zufallszahlengeneratoren, rein funktional zu behandeln. Haskell stellt jedoch die sogenannte do-Notation bereit, welche es erlaubt, die Verkettung von Monaden in Stil von imperativen Sprachen darzustellenEs gibt keine Unterscheidung zwischen Variablen und Konstanten, da der Wert einer Variable in Haskell nicht verändert werden kann. Man spricht von unveränderlichen oder nicht veränderbaren Variablen. Dies ist auch der Grund, weshalb es keine Unterscheidung von Identität und Gleichwertigkeit von Variablen gibt. Durch diese Eigenschaften ist Haskell der Mathematik sehr nahe und es ist möglich, die Richtigkeit gewisser Programme zu beweisen, beispielsweise durch Vollständige Induktion.
Haskell ist nicht-strikt. Es werden nur Ausdrücke ausgewertet, die für die Berechnung des Ergebnisses gebraucht werden.

Die Funktion first liefert bei Eingabe zweier Parameter den ersten als Ergebnis zurück. Bei der Eingabe von first x (3+7) ist die Auswertung der Summe (3+7) zur Ergebnisbestimmung nicht notwendig, sollte also unberücksichtigt bleiben.
Die Funktion quadrat berechnet bei Eingabe eines Parameters dessen Quadrat. Bei Eingabe von quadrat(3+5), was im Laufe des Auswertungsprozesses zu (3+5)*(3+5) wird, wäre eine doppelte Berechnung der Summe (3+5) ineffizient, sollte also vermieden werden.
Die Auswertungsstrategie, welche die beiden eben geschilderten Probleme umgeht, wird Bedarfsauswertung (englisch lazy evaluation) genannt und kommt in Haskell meist zum Einsatz.
Die Bedarfsauswertung ist vor allem wegen der strengen Einhaltung des funktionalen Konzepts möglich. Umgekehrt macht die Bedarfsauswertung die funktionale Programmierung angenehmer, denn sie erlaubt es besser, Funktionen, die reine Berechnungen durchführen, von Ein-/Ausgabefunktionen zu trennen.
Die Bedarfsauswertung erlaubt das Arbeiten mit undefinierten Werten und potentiell unendlich großen Datenmengen. So kann man elegant mit Potenzreihen, Zeitreihen (etwa Audiosignalströmen), Kettenbruchzerlegungen, Entscheidungsbäumen und ähnlichem umgehen. Aber auch bei endlichen, aber großen, oder endlichen und noch nicht vollständig bekannten Daten erlaubt diese Art der Ausführung elegante Programme. So kann man etwa eine Transformation eines XML-Dokumentes als Folge von Transformationen des gesamten XML-Baumes beschreiben. Ausgeführt wird die Gesamttransformation aber von Beginn zum Ende des XML-Dokumentes, auch wenn das Ende noch gar nicht verfügbar ist.
Man beachte allerdings, dass Haskell nach Sprachdefinition lediglich nicht-strikt ist; die Bedarfsauswertung ist nur eine mögliche Implementierung der Nicht-Striktheit - die allerdings von allen gängigen Haskell-Übersetzern angewandt wird. Andere Implementierungen sind möglich (z. B. optimistic evaluation, Ennals & Peyton Jones, ICFP’03).

### Typsystem

Haskell ist stark typisiert. Es wird also zum Beispiel streng zwischen Wahrheitswerten, Zeichen, ganzen Zahlen, Gleitkommazahlen und Funktionen von und zu verschiedenen Typen unterschieden.
Haskell erlaubt Typvariablen. Damit können Funktionen sehr allgemein formuliert werden. Wird eine allgemeingehaltene Funktion für bestimmte Typen verwendet, werden automatisch die Typen abgeglichen (Typinferenz).
Die Funktion map wendet eine beliebige Funktion auf die Elemente einer Liste an. Ihr Typ wird so angegeben:

Wird map etwa mit der speziellen Funktion toUpper vom Typ Char -> Char aufgerufen, ergibt der Typabgleich

Haskell ist von der Grundidee her statisch typisiert, obwohl es auch Erweiterungen für dynamische Typen gibt. Das bedeutet, dass für die meisten Berechnungen die Typen bereits zum Zeitpunkt der Programmübersetzung feststehen. Dies deckt viele „offensichtliche“ Fehler noch vor Ausführung des Programms auf.
Haskell unterstützt Funktionen höherer Ordnung (Funktionale). Das sind Funktionen, die Funktionen als Eingabeparameter bzw. Funktionen als Ergebnis haben. Ein Beispiel ist die map-Funktion, die eine Funktion f auf jedes Element eines Datentyps (hier Liste) anwendet.

Funktionen erlauben Currying. Während man in anderen Sprachen Tupel als Argumente an Funktionen übergibt, also Funktionstypen der Form (a, b) -> c verwendet, ist in Haskell die Curry-Form a -> b -> c üblicher. Damit wird die partielle Auswertung von Funktionen bequem möglich. Der Ausdruck map toUpper ist beispielsweise eine teilweise Auswertung von map, denn er beschreibt eine Funktion, nämlich die Funktion, welche alle Kleinbuchstaben einer Liste in Großbuchstaben verwandelt.
Haskell erlaubt benutzerdefinierte Datentypen. Diese algebraischen Datentypen werden mit Hilfe von Datenkonstruktoren definiert.

Das Beispiel zeigt die Datenstruktur eines mit ganzen Zahlen beschrifteten binären Baumes. Solch ein Baum Tree besteht entweder aus einem Blatt (Leaf Int) oder einer Verzweigung (Branch Int t1 t2), wobei t1 und t2 die Teilbäume darstellen, die wiederum die Struktur Tree haben. Zur Definition dieser Datenstruktur wurde sowohl der einstellige Konstruktor Leaf als auch der dreistellige Konstruktor Branch verwendet.
Datentypen mit mehreren ausschließlich parameterlosen Konstruktoren können als Aufzählungen eingesetzt werden.

Haskell unterstützt Typenklassen. Mit Typenklassen lassen sich Typen zusammenfassen, welche eine bestimmte Menge an Operationen unterstützen. In Signaturen von Funktionen dürfen als Abstufung zwischen festen Typen wie Char und freien Typvariablen auch noch Typvariablen mit Einschränkung auf bestimmte Klassen verwendet werden.
Alle Ausprägungen einer Methode der Typklasse tragen den gleichen Namen. In gewisser Weise entsprechen Typklassen also dem Überladen von Funktionen. Der gleiche Funktionsname steht also abhängig vom Typ für verschiedene Funktionen. Zum Beispiel ist mit der ==-Methode der Klasse Eq der Vergleich sowohl zweier Zahlen als auch zweier Texte möglich. Trotzdem arbeitet der Gleichheitstest je nach Argumenttyp anders.
In Haskell haben Ein- und Ausgabefunktionen einen speziellen Typkonstruktor namens IO.

putStrLn gibt einen Text und einen Zeilenumbruch auf der Standardausgabe aus. Da es kein informationstragendes Ergebnis gibt, wird der Einheitstyp () als Rückgabetyp verwendet. getLine liest eine Textzeile von der Standardeingabe. Der IO-Typkonstruktor stellt sicher, dass man den Nutzern der Funktion offenlegen muss, dass die Ergebnisse durch Ein-/Ausgabe gewonnen wurden. Diese strenge Handhabung ermuntert Haskell-Programmierer zur klaren Trennung von Ein- und Ausgabe und anderen Teilen eines Programms. Der größte Teil eines Haskell-Programms besteht in der Regel aus Funktionen ohne Ein- und Ausgabe. Man kann IO-Typen natürlich auch in andere Typen einbetten und so zum Beispiel einen speziellen IO-Typ definieren, der nur Eingaben erlaubt.

### Syntax

Haskell unterscheidet Groß- und Kleinschreibung. Bezeichner, die mit einem Großbuchstaben beginnen, stehen für Typ- und Wertkonstruktoren. Bezeichner, die mit einem Kleinbuchstaben beginnen, stehen für Typvariablen, Funktionen und Parameter.
Der Umgang mit Leerzeichen und Zeilenumbrüchen geschieht in Anlehnung an das intuitive Verständnis von mathematischer Notation, bei Zeilenumbrüchen muss lediglich eine Einrückung beliebiger Tiefe geschehen, damit der Zusammenhang nicht verlorengeht. So ist der Ausdruck

völlig gleichwertig zu

Haskell unterstützt einzeilige und mehrzeilige Kommentare, erstere ab den Zeichen -- bis zum Ende der Zeile und letztere im Einschluss von {- und -}.

Haskell bietet eine Reihe von syntaktischen Besonderheiten. Diese sollen nicht darüber hinwegtäuschen, dass alles rein funktional erklärt ist.

Die do-Notation verleiht Berechnungen mit Monaden das Aussehen von imperativen Programmen.Statt

oder

kann man auch

schreiben.
Sowohl symbolische Bezeichner (bestehend etwa aus +, -, *, /, >, <) als auch alphanumerische Bezeichner (Buchstaben, Ziffern und Apostroph) können für Funktionsnamen verwendet werden und sowohl als Infix-Operatoren als auch in Präfixschreibweise eingesetzt werden. Es gilt beispielsweise

Haskell erlaubt spezielle Notationen bei der Listenverarbeitung. So können unter anderem Zahlenfolgen mit zwei Punkten (..) angedeutet werden:

Wird kein Endwert angegeben, dann wird eine unendliche Liste erzeugt

Des Weiteren ist eine Notation erlaubt, genannt „list comprehension“, die an die mathematische Schreibweise für Mengendefinitionen angelehnt ist. In folgendem Beispiel wird aus der Folge der positiven natürlichen Zahlen die Folge der geraden Zahlen extrahiert.

als Umschreibung für

Im Allgemeinen kann hinter dem senkrechten Strich eine beliebige nichtleere Folge aus Generatoren (pat <- xs), Prädikaten (Ausdrücken mit dem Typ Bool) und let-Bindungen angegeben werden. Insbesondere ist es möglich, überhaupt keine Generatoren zu verwenden. Der Ausdruck

nimmt je nach Wert von x, welches als bereits definiert vorausgesetzt wird, den Wert [] oder [x] an.

### Programmierung

Haskell erlaubt Mustervergleiche (engl. pattern matching). So nennt man die Verwendung von Konstruktortermen als formale Parameter. Dabei sind die Parameterterme die Muster (engl. pattern) der Funktionsargumente.

Die Funktion fak berechnet die Fakultät einer Zahl. 0 und n sind dabei die Muster (Pattern), von denen die Ergebnisbestimmung abhängt. Für Zahlen größer als 0 greift nur das Muster n, so dass zweitere Alternative verwendet wird. Diese errechnet das Ergebnis durch n * fak (n-1), wobei sie sich, solange (n-1) > 0 ist, rekursiv selbst aufruft, bis sie bei 0 ankommt. Dort greift dann das Muster 0, so dass erstere Alternative verwendet wird, welches die Rekursion sauber abschließt, 1 zurückgibt und die Rücksprungkette einleitet.

### Module

Zu Haskell gehört auch ein Modulsystem. Der Haskell-98-Standard definiert eine Grundmenge von Modulen, die ein standardkonformes Haskell-System zur Verfügung stellen muss. Beispielsweise ein Modul, welches Ein- und Ausgabe-Funktionen bereitstellt oder ein Modul, welches Funktionen auf Listen implementiert.
Um Module nutzen zu können, muss man sie importieren. Dies geschieht mithilfe des import-Befehls.

In verschiedenen Modulen können Funktionen und Typen die gleichen Namen besitzen.
Diese Bezeichner können unterschieden werden,

indem nur einer der Bezeichner importiert wird,

oder indem die Bezeichner qualifiziert, also durch Verbinden mit dem Modulnamen eindeutig gemacht werden.

oder

Ebenfalls möglich, aber nicht empfohlen ist das Ausblenden von Bezeichnern beim Importieren mit hiding.

## Beispiele

### Fakultät

Eine elegante Definition der Fakultätsfunktion, die Haskells Notation für Listen benutzt:

Oft wird aber auch rekursiv gearbeitet:

Endrekursion ist dabei oftmals effizienter, aber auch aufwendiger zu schreiben:

Diesen Schreibaufwand kann man jedoch reduzieren.
In _facrt enthält der Parameter r das jeweilige (Zwischen-)Resultat. Zu Beginn der Iteration wird r auf den Startwert gesetzt. Bei jedem Iterationsschritt wird das neue Zwischenergebnis mit einer bestimmten Funktion aus dem bisherigen Zwischenresultat und n berechnet. Zum Schluss wird r als Endergebnis zurückgegeben. Dieses Prinzip kann man durch eine wiederverwendbare Funktion recur ausdrücken:

Unter Verwendung von recur kann man die Fakultätsfunktion mit Endrekursion dann sehr kompakt schreiben:

### Fibonacci

Eine einfache Implementierung der Fibonacci-Funktion:

Eine schnelle Implementierung der Folge:

tail entfernt das erste Element aus einer Liste, zipWith kombiniert zwei Listen elementweise mithilfe einer weiteren Funktion (hier (+)). Die Definition entspricht einer Fixpunktgleichung.
Dass die Definition stimmt, überprüft man am schnellsten, indem man sich vorstellt, dass fibs bereits fertig berechnet vorliegt. Als Nächstes muss man sich noch überlegen, dass die Definition auch ausgewertet werden kann. Die ersten beiden Glieder von fibs sind unmittelbar klar: 0 und 1. Für das Berechnen jedes weiteren Gliedes muss aber nur auf bereits berechnete Glieder von fibs zurückgegriffen werden. Die Bedarfsauswertung führt dazu, dass die Folge fibs tatsächlich elementweise berechnet wird.
Man könnte auch sagen, dass fibs ein Fixpunkt der Funktion   \xs -> 0 : 1 : (zipWith (+) xs (tail xs))   ist.
Das wiederum lässt sich in Haskell direkt notieren als

### Differenzengleichung

Man kann auf diese Weise sehr elegant Differentialgleichungen bezüglich Potenzreihen oder Differenzengleichungen bezüglich Zahlenfolgen formulieren und gleichzeitig lösen.
Angenommen, man möchte die Differentialgleichung   y'(x) = f(x, y(x))   bezüglich y in Form einer Zeitreihe lösen, also einer Liste von Zahlen. Durch diese Diskretisierung wird die Differentialgleichung zur Differenzengleichung. Statt eines Integrals berechnen wir Partialsummen. Die folgende Funktion hat als Parameter die Integrationskonstante und eine Zahlenfolge.

scanl akkumuliert die Werte einer Folge mit Hilfe einer anderen Funktion, hier (+), und gibt die Liste der Akkumulatorzustände zurück.
Damit kann man bereits das explizite Eulerverfahren für die Schrittweite 1 implementieren. x0 und y0 sind hierbei die Anfangswerte. Der Apostroph hat keine eigenständige Bedeutung, er ist Teil des Namens y'.

Diese Funktionsdefinition besteht also im Wesentlichen aus der Feststellung, dass y das Integral von y' mit Anfangswert y0 ist, (oder umgekehrt, y' die Ableitung von y) und aus der eigentlichen Differentialgleichung   y' = zipWith f x y. Weil man hierbei den Algorithmus eher in der Form der Aufgabenstellung als in Form eines Lösungsweges notiert, spricht man hierbei von deklarativer Programmierung.

### Quicksort

Der Quicksort-Algorithmus, formuliert in Haskell:

Die erste Zeile definiert die Signatur von Quicksort. Die zweite Zeile gibt an, dass die Funktion auf eine leere Liste angewendet wieder eine leere Liste ergeben soll. Die dritte Zeile sortiert rekursiv nicht-leere Listen: das erste Element x wird als mittleres Element der Ergebnisliste verwendet. Davor werden alle nicht-größeren sortiert, dahinter alle größeren Elemente eingeordnet. Listenbeschreibungen werden dazu verwendet, aus der Restliste xs alle diejenigen auszuwählen, die größer als x sind, und alle jene, die es nicht sind.
Wie man es von Quicksort erwartet, besitzt auch diese Implementierung eine mittlere asymptotische Laufzeit von O(n·logn) und eine Worst-Case-Laufzeit von O(n²). Im Gegensatz zur geläufigen Implementierung in einer imperativen Sprache arbeitet dieses qsort jedoch nicht in-place.

### Algebra

Dieses Beispiel stellt die Nutzung von Typklassen heraus.

fib stellt eine schnelle Berechnung von Elementen der Fibonacci-Folge dar. Ausgenutzt wird das vordefinierte ^, das auf Num-implementierenden Typen arbeitet.

## Implementierungen

Es gibt inzwischen eine Reihe Haskell-Implementierungen, von denen die meisten aber den Sprachstandard nicht vollständig umsetzen.

Der Glasgow Haskell Compiler (GHC) unterstützt Haskell 98 sowie zahlreiche Spracherweiterungen. Er übersetzt Haskell-Programme in Maschinencode; für nicht direkt unterstützte Plattformen erzeugt er C-Code, der dann mit einem C-Compiler übersetzt wird.
Hugs ist ein Bytecode-Compiler, der Haskell 98 fast vollständig sowie einige Erweiterungen implementiert. Hugs ist selbst in C geschrieben.
nhc (auch nhc98) ist ein weiterer Bytecode-Compiler, der Haskell 98 mit gewissen Einschränkungen unterstützt. Der York Haskell Compiler oder Yhc ist eine Weiterentwicklung von nhc mit dem Ziel, Portabilität und Performance der kompilierten Programme zu verbessern.
Der Utrecht Haskell Compiler (UHC) ist eine experimentelle Implementierung, die an der Universität Utrecht entwickelt wird. Der Compiler basiert auf Attributgrammatiken und übersetzt Haskell in C-Code. Er implementiert Haskell 98 fast vollständig sowie einige Erweiterungen.
Helium wird ebenfalls an der Universität Utrecht entwickelt. Der Schwerpunkt des Projekts liegt darauf, leicht verständliche Fehlermeldungen zu erzeugen, um Anfängern das Erlernen von Haskell zu erleichtern. Daher wird auch ein eingeschränkter Haskell-Dialekt implementiert, der unter anderem keine Typklassen hat.
Die hier genannten Implementierungen sind alle Open-Source-Software. Bis auf Hugs sind sie auch alle in Haskell selbst implementiert.

## Einfluss

Haskell dient wegen seiner stark akademischen Herkunft vielen Programmier- und Scriptsprachen als Vorbild für neue Sprachfunktionalität. So haben u. a. Perl, Python, JavaScript, Java, Scala, Rust und PHP Ideen der funktionalen Programmierung von Haskell übernommen. Dazu gehören Funktionen höherer Ordnung wie map, filter usw., Teile der Art, wie generische Programmierung implementiert wurde, und anderes.
