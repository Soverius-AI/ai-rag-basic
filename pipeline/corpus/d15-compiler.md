---
url: https://de.wikipedia.org/wiki/Compiler
---

# Compiler

## Überblick

Ein Compiler (auch Kompilierer; von englisch compile ‚zusammentragen‘ bzw. lateinisch compilare ‚aufhäufen‘) ist ein Computerprogramm, das Quellcodes einer bestimmten Programmiersprache in eine Form übersetzt, die von einem Computer (direkter) ausgeführt werden kann. Daraus entsteht ein mehr oder weniger direkt ausführbares Programm. Davon zu unterscheiden sind Interpreter, etwa für frühe Versionen von BASIC, die keinen Maschinencode erzeugen.
Teils wird zwischen den Begriffen Übersetzer und Compiler unterschieden. Ein Übersetzer überführt ein Programm aus einer formalen Quellsprache in ein semantisches Äquivalent in einer formalen Zielsprache. Compiler sind spezielle Übersetzer, die Programmcode aus höheren Programmiersprachen, in ausführbare Maschinensprache einer bestimmten Rechnerarchitektur oder einen Zwischencode überführen. Diese Trennung zwischen den Begriffen Übersetzer und Compiler wird nicht in allen Fällen vorgenommen.
Der Vorgang der Übersetzung durch den Compiler wird als Kompilierung oder Umwandlung bezeichnet. Das Gegenteil, also die Rückübersetzung von Maschinensprache in Quelltext einer bestimmten Programmiersprache, wird Dekompilierung und entsprechende Programme Decompiler genannt.

## Terminologie

Ein Übersetzer ist ein Programm, das als Eingabe ein in einer Quellsprache formuliertes Programm akzeptiert und es in ein semantisch äquivalentes Programm in einer Zielsprache übersetzt. Es wird also insbesondere gefordert, dass das erzeugte Programm die gleichen Ergebnisse wie das gegebene Programm liefert. Als Ausnahme wird oft die Quell-Sprache Assembler angesehen – ihr Übersetzer (in Maschinencode) heißt „Assembler“ und wird i. A. nicht als „Compiler“ bezeichnet. Die Aufgabe des Übersetzers umfasst ein großes Spektrum an Teilaufgaben, von der Syntaxanalyse bis zur Zielcodeerzeugung. Eine wichtige Aufgabe besteht auch darin, Fehler im Quellprogramm zu erkennen und zu melden.
Das Wort „Compiler“ stammt vom Englischen „to compile“ (dt. zusammentragen, zusammenstellen) ab und heißt im eigentlichen Wortsinn also „Zusammentrager“. In den 1950er-Jahren war der Begriff noch nicht fest in der Computerwelt verankert. Ursprünglich bezeichnete Compiler ein Hilfsprogramm, das ein Gesamtprogramm aus einzelnen Unterprogrammen oder Formelauswertungen zusammentrug, um spezielle Aufgaben auszuführen. (Diese Aufgabe erfüllt heute der Linker, der jedoch auch im Compiler integriert sein kann.) Die einzelnen Unterprogramme wurden noch „von Hand“ in Maschinensprache geschrieben. Ab 1954 kam der Begriff „algebraic compiler“ für ein Programm auf, das die Umsetzung von Formeln in Maschinencode selbständig übernahm. Das „algebraic“ fiel im Laufe der Zeit weg.
Ende der 1950er-Jahre wurde der Begriff des Compilers im englischsprachigen Raum noch kontrovers diskutiert. So hielt das Fortran-Entwicklerteam noch jahrelang am Begriff „translator“ (deutsch „Übersetzer“) fest, um den Compiler zu bezeichnen. Diese Bezeichnung ist sogar im Namen der Programmiersprache Fortran selbst enthalten: Fortran ist zusammengesetzt aus Formula und Translation, heißt also in etwa Formel-Übersetzung. Erst 1964 setzte sich der Begriff Compiler auch im Zusammenhang mit Fortran gegenüber dem Begriff Translator durch. Nach Carsten Busch liegt eine „besondere Ironie der Geschichte darin“, dass der Begriff Compiler im Deutschen mit „Übersetzer“ übersetzt wird.  Einige deutsche Publikationen verwenden jedoch auch den englischen Fachbegriff Compiler anstelle von Übersetzer.
In einem engeren Sinne verwenden einige deutschsprachige Publikationen den Fachbegriff Compiler jedoch nur, wenn die Quellsprache eine höhere Programmiersprache ist als die Zielsprache. Typische Anwendungsfälle sind die Übersetzung einer höheren Programmiersprache in die Maschinensprache eines Computers, sowie die Übersetzung in Bytecode einer virtuellen Maschine. Zielsprache von Compilern (in diesem Sinne) kann auch eine Assemblersprache sein. Ein Übersetzer zur Übertragung von Assembler-Quellprogrammen in Maschinensprache wird als Assembler oder Assemblierer bezeichnet.

## Geschichte

Bereits für die erste entworfene höhere Programmiersprache, den Plankalkül von Konrad Zuse, plante dieser – nach heutiger Terminologie – einen Compiler. Zuse bezeichnete ein einzelnes Programm als Rechenplan und hatte schon 1944 die Idee für ein sogenanntes Planfertigungsgerät, welches automatisch aus einem mathematisch formulierten Rechenplan einen gestanzten Lochstreifen mit entsprechendem Maschinenplan für den Zuse-Z4-Computer erzeugen sollte.
Konkreter als die Idee von Zuse eines Planfertigungsgeräts war ein Konzept von Heinz Rutishauser zur automatischen Rechenplanfertigung. In einem Vortrag vor der Gesellschaft für Angewandte Mathematik und Mechanik (GAMM) wie auch 1951 in seiner Habilitationsschrift an der ETH Zürich beschrieb er, welche zusätzlichen Programmierbefehle (Instruktionen) und Hardware-Ergänzungen an der damals an der ETHZ genutzten Z4 nötig seien, um den Rechner ebenfalls als Hilfsmittel zur automatischen Programmerstellung einzusetzen.

Ein früher Compiler wurde 1949 von der Mathematikerin Grace Hopper konzipiert. Bis zu diesem Zeitpunkt mussten Programmierer direkt Maschinencode erstellen. (Der erste Assembler wurde zwischen 1948 und 1950 von Nathaniel Rochester für eine IBM 701 geschrieben.) Um diesen Prozess zu vereinfachen, entwickelte Grace Hopper eine Methode, die es ermöglichte, Programme und ihre Unterprogramme in einer mehr an der menschlichen als der maschinellen Sprache orientierten Weise auszudrücken. Am 3. Mai 1952 stellte Hopper den ersten Compiler A-0 vor, der Algorithmen aus einem Katalog abrief, Code umschrieb, in passender Reihenfolge zusammenstellte, Speicherplatz reservierte und die Zuteilung von Speicheradressen organisierte. Anfang 1955 präsentierte Hopper bereits einen Prototyp des Compilers B-0, der nach englischen, französischen oder deutschen Anweisungen Programme erzeugte. Hopper nannte ihren Vortrag zum ersten Compiler „The Education of a Computer“ („Die Erziehung eines Computers“).
Die Geschichte des Compilerbaus wurde von den jeweils aktuellen Programmiersprachen (vgl. Zeittafel der Programmiersprachen) und Hardwarearchitekturen geprägt. Weitere frühe Meilensteine sind 1957 der erste Fortran-Compiler und 1960 der erste COBOL-Compiler. Viele Architekturmerkmale heutiger Compiler wurden aber erst in den 1960er Jahren entwickelt.
Früher wurden teilweise auch Programme als Compiler bezeichnet, die Unterprogramme zusammenfügen. Dies geht an der heutigen Kernaufgabe eines Compilers vorbei, weil Unterprogramme heutzutage mit anderen Mitteln eingefügt werden können: Entweder im Quelltext selbst, beispielsweise von einem Präprozessor (siehe auch Precompiler) oder bei übersetzten Komponenten von einem eigenständigen Linker.

## Arbeitsweise

Die prinzipiellen Schritte bei der Übersetzung eines Quellcodes in einen Zielcode lauten:

Syntaxprüfung
Es wird geprüft, ob der Quellcode ein gültiges Programm darstellt, also der Syntax der Quellsprache entspricht. Festgestellte Fehler werden protokolliert. Ergebnis ist eine Zwischendarstellung des Quellcodes.
Analyse und Optimierung
Die Zwischendarstellung wird analysiert und optimiert. Dieser Schritt variiert im Umfang je nach Compiler und Benutzereinstellung stark. Er reicht von einfacheren Effizienzoptimierungen bis hin zu Programmanalyse.
Codeerzeugung
Die optimierte Zwischendarstellung wird in entsprechende Befehle der Zielsprache übersetzt. Hierbei können weitere, zielsprachenspezifische Optimierungen vorgenommen werden.
Beachte: Moderne Compiler führen mittlerweile (meist) keine Codegenerierung mehr selbst durch.
C++ bei eingeschalteter globaler Optimierung: Die Codegenerierung erfolgt beim Linken.
C#: Die Codegenerierung erfolgt aus, während der Kompilierung erzeugtem, Common-Intermediate-Language-Code während der Laufzeit durch den JIT- oder NGEN-Compiler der .NET-Umgebung.
gleiches gilt für andere Sprachen, die die Common Language Infrastructure nutzen wie F# und VB.NET, siehe Liste von .NET-Sprachen.
Java: Die Codegenerierung erfolgt aus, während der Kompilierung erzeugtem, Java-Byte-Code während der Laufzeit durch den Java-JIT-Compiler.
Codegenerierung während der Runtime ermöglicht:
modulübergreifende Optimierungen,
exakte Anpassungen an die Zielplattform (Befehlssatz, Anpassung an die Fähigkeiten der CPU),
Nutzung von Profiling-Informationen.

## Aufbau eines Compilers

Der Compilerbau, also die Programmierung eines Compilers, ist eine eigenständige Disziplin innerhalb der Informatik.
Moderne Compiler werden in verschiedene Phasen gegliedert, die jeweils verschiedene Teilaufgaben des Compilers übernehmen. Einige dieser Phasen können als eigenständige Programme bzw. Softwarekomponenten realisiert werden, z. B. Precompiler oder Präprozessor. Sie werden sequentiell ausgeführt. Im Wesentlichen lassen sich zwei Phasen unterscheiden: das Frontend (auch Analysephase), das den Quelltext analysiert und daraus einen attributierten Syntaxbaum erzeugt, sowie das Backend (auch Synthesephase), das daraus den Programmcode der Zielsprache erzeugt.

### Frontend (auch „Analysephase“)

Im Compiler-Frontend wird der Code analysiert, strukturiert und auf Fehler geprüft. Es ist selbst wiederum in Phasen gegliedert.
Sprachen wie modernes C++ erlauben aufgrund von Mehrdeutigkeiten in ihrer Grammatik keine Aufteilung der Syntaxanalyse in lexikalische Analyse, syntaktische Analyse und semantische Analyse. Ihre Compiler sind entsprechend komplex.

#### Lexikalische Analyse

Die lexikalische Analyse zerteilt den eingelesenen Quelltext in lexikalische Einheiten (Tokens) verschiedener Typen, zum Beispiel Schlüsselwörter, Bezeichner, Zahlen, Zeichenketten oder Operatoren. Dieser Teil des Compilers heißt Tokenizer, Scanner oder Lexer.
Ein Scanner benutzt gelegentlich einen separaten Screener, um Whitespace (Leerraum, also Leerzeichen, Tabulatorzeichen, Zeilenenden usw.) und Kommentare zu überspringen.
Eine weitere Funktion der lexikalischen Analyse ist es, erkannte Tokens mit ihrer Position (z. B. Zeilennummer) im Quelltext zu assoziieren. Werden in der weiteren Analysephase, deren Grundlage die Tokens sind, Fehler im Quelltext gefunden (z. B. syntaktischer oder semantische Art), können die erzeugten Fehlermeldungen mit einem Hinweis auf den Ort des Fehlers versehen werden.
Lexikalische Fehler sind Zeichen oder Zeichenfolgen, die keinem Token zugeordnet werden können. Zum Beispiel erlauben die meisten Programmiersprachen keine Bezeichner, die mit Ziffern beginnen (z. B. „3foo“).

#### Syntaktische Analyse

Die syntaktische Analyse überprüft, ob der eingelesene Quellcode in einer korrekten Struktur der zu übersetzenden Quellsprache vorliegt, das heißt der kontextfreien Syntax (Grammatik) der Quellsprache entspricht. Dabei wird die Eingabe in einen Syntaxbaum umgewandelt. Der syntaktische Analysierer wird auch als Parser bezeichnet. Falls der Quellcode nicht zur Grammatik der Quellsprache passt, gibt der Parser einen Syntaxfehler aus.
Der so erzeugte Syntaxbaum ist für die nächste Phase (semantische Analyse) mit den „Inhalten“ der Knoten annotiert; d. h. z. B., Variablenbezeichner und Zahlen werden, neben der Information, dass es sich um solche handelt, weitergegeben.
Die syntaktische Analyse prüft beispielsweise, ob die Klammerung stimmt, also zu jeder öffnenden Klammer eine schließende desselben Typs folgt, sowie ohne Klammer-Verschränkung. Auch geben die Schlüsselworte bestimmte Strukturen vor.

#### Semantische Analyse

Die semantische Analyse überprüft die statische Semantik, also über die syntaktische Analyse hinausgehende Bedingungen an das Programm. Zum Beispiel muss eine Variable in der Regel deklariert worden sein, bevor sie verwendet wird, und Zuweisungen müssen mit kompatiblen (verträglichen) Datentypen erfolgen. Dies kann mit Hilfe von Attributgrammatiken realisiert werden. Dabei werden die Knoten des vom Parser generierten Syntaxbaums mit Attributen versehen, die Informationen enthalten. So kann zum Beispiel eine Liste aller deklarierten Variablen erstellt werden. Die Ausgabe der semantischen Analyse nennt man dann dekorierten oder attributierten Syntaxbaum.

### Backend (auch „Synthesephase“)

Das Compiler-Backend erzeugt den Programmcode der Zielsprache aus dem attributierten Syntaxbaum, welcher vom Frontend erstellt wurde.

#### Zwischencodeerzeugung

Viele moderne Compiler erzeugen aus dem Syntaxbaum einen Zwischencode, der schon relativ maschinennah sein kann und führen auf diesem Zwischencode zum Beispiel Programmoptimierungen durch. Das bietet sich besonders bei Compilern an, die mehrere Quellsprachen oder verschiedene Zielplattformen unterstützen. Hier kann der Zwischencode auch ein Austauschformat sein.

#### Programmoptimierung

Der Zwischencode ist Basis vieler Programmoptimierungen. Siehe Programmoptimierung.

#### Codegenerierung

Bei der Codegenerierung wird der Programmcode der Zielsprache entweder direkt aus dem attributierten Syntaxbaum
oder aus dem Zwischencode erzeugt. Falls die Zielsprache eine Maschinensprache ist, kann das Ergebnis direkt ein ausführbares Programm sein oder eine sogenannte Objektcode-Datei, die durch das Linken mit der Laufzeitbibliothek und evtl. weiteren Objektcodedateien zu einer Bibliothek oder einem ausführbaren Programm führt. Dies alles wird vom Codegenerator ausgeführt, der Teil des Compilersystems ist, manchmal als Programmteil des Compilers, manchmal als eigenständiges Modul.

## Einordnung verschiedener Compiler-Arten

Native Compiler
Compiler, der den Zielcode für die Plattform erzeugt, auf der er selbst läuft. Der Code ist plattformspezifisch.
Cross-Compiler

Compiler, der auf einer Plattform ausgeführt wird und Zielcode für eine andere Plattform, zum Beispiel ein anderes Betriebssystem oder eine andere Prozessorarchitektur, erzeugt.
Eine typische Anwendung ist die Erstellung von Programmen für ein eingebettetes System, das selbst keine oder keine guten Werkzeuge zur Softwareerstellung enthält, sowie die Erstellung oder Portierung eines Betriebssystems auf eine neue Plattform.
Single-pass-Compiler
Compiler, der in einem einzigen Durchlauf aus dem Quellcode den Zielcode erzeugt (im Gegensatz zum Multi-pass-Compiler); der Compiler liest also den Quelltext von vorne nach hinten nur ein Mal und erzeugt zugleich das Ergebnisprogramm. Üblicherweise ist ein derartiger Compiler sehr schnell, aber kann nur einfache Optimierungen durchführen. Nur für bestimmte Programmiersprachen, zum Beispiel Pascal, C und C++, kann ein Single-Pass-Compiler erstellt werden, denn dazu darf die Programmiersprache keine Vorwärtsbezüge enthalten (es darf nichts verwendet werden, was nicht bereits „weiter oben“ im Quelltext deklariert wurde).
Multi-pass-Compiler
Bei diesem Compilertyp wird der Quellcode in mehreren Schritten in den Zielcode übersetzt (ursprünglich: der Quellcode wird mehrmals eingelesen bzw. mehrfach „von vorne nach hinten“ komplett durchgearbeitet). In den Anfangszeiten des Compilerbaus wurde der Übersetzungsprozess hauptsächlich deshalb in mehrere Durchläufe zerlegt, weil die Kapazität der Computer oft nicht ausreichte, um den vollständigen Compiler und das zu übersetzende Programm gleichzeitig im Hauptspeicher zu halten. Heutzutage dient ein Multi-pass-Compiler vor allem dazu, Vorwärtsreferenzen (Deklaration eines Bezeichners „weiter unten im Quelltext“ als dessen erste Verwendung) aufzulösen und aufwändige Optimierungen durchzuführen.

## Sonderformen

Bei einem Transcompiler (auch als Transpiler oder Quer-Übersetzer bezeichnet) handelt es sich um einen speziellen Compiler, der Quellcode einer Programmiersprache in den Quellcode einer anderen Programmiersprache übersetzt, zum Beispiel von Pascal in C. Man nennt diesen Vorgang „Code-Transformation“ oder „übersetzen“. Da jedoch viele Programmiersprachen besondere Eigenschaften und Leistungsmerkmale besitzen, kann es, wenn diese nicht vom Transcompiler berücksichtigt werden, zu Effizienzverlusten kommen. Da Programmiersprachen meist unterschiedlichen Programmierparadigmen folgen, ist der neu generierte Quelltext oft nur schwer für Entwickler lesbar. Manchmal ist auch eine manuelle Nachbearbeitung des Codes nötig, da die automatische Übersetzung nicht in allen Fällen reibungsfrei funktioniert. Außerdem gibt es in vielen modernen Programmiersprachen umfangreiche Unterprogrammbibliotheken. Das Umsetzen von Bibliotheksaufrufen erschwert den Übersetzungsvorgang zusätzlich.
Compiler-Compiler und Compilergeneratoren sind Hilfsprogramme zur automatischen Generierung von Compilerteilen oder vollständigen Compilern. Siehe auch: ANTLR, Coco/R, JavaCC, Lex, Yacc
Just-in-time-Compiler (oder JIT-Compiler) übersetzen Quellcode oder Zwischencode erst bei der Ausführung des Programms in Maschinencode. Dabei werden Programmteile erst übersetzt, wenn diese erstmals oder mehrmals ausgeführt werden. Meist ist der Grad der Optimierung abhängig von der Benutzungshäufigkeit der entsprechenden Funktion.
Beim Compreter wird der Programm-Quellcode zunächst in einen Zwischencode übersetzt, der dann zur Laufzeit interpretiert wird. Compreter sollten die Vorteile des Compilers mit den Vorteilen des Interpreters verbinden. Effektiv sind viele heutige Interpreter zur Verringerung der Ausführungszeit intern als Compreter implementiert, die den Quellcode zur Laufzeit übersetzen, bevor das Programm ausgeführt wird. Auch ein Bytecode-Interpreter ist ein Compreter, z. B. die virtuellen Maschinen von Java bis Version 1.2.

## Programmoptimierung (ausführlich)

Viele Optimierungen, die früher Aufgabe des Compilers waren, werden mittlerweile innerhalb der CPU während der Codeabarbeitung vorgenommen.
Maschinencode ist gut, wenn er kurze kritische Pfade und wenig Überraschungen durch falsch vorhergesagte Sprünge aufweist, Daten rechtzeitig aus dem Speicher anfordert und alle Ausführungseinheiten der CPU gleichmäßig auslastet.

Zur Steuerung des Übersetzens kann der Quelltext neben den Anweisungen der Programmiersprache zusätzliche spezielle Compiler-Anweisungen enthalten.
Üblicherweise bietet ein Compiler Optionen für verschiedene Optimierungen mit dem Ziel, die Laufzeit des Zielprogramms zu verbessern oder dessen Speicherplatzbedarf zu minimieren. Die Optimierungen erfolgen teilweise in Abhängigkeit von den Eigenschaften der Hardware, zum Beispiel wie viele und welche Register der Prozessor des Computers zur Verfügung stellt. Es ist möglich, dass ein Programm nach einer Optimierung langsamer ausgeführt wird, als das ohne die Optimierung der Fall gewesen wäre. Dies kann zum Beispiel eintreten, wenn eine Optimierung für ein Programmkonstrukt längeren Code erzeugt, der zwar an sich schneller ausgeführt werden würde, aber mehr Zeit benötigt, um erst einmal in den Cache geladen zu werden. Er ist damit erst bei häufigerer Benutzung vorteilhaft.
Einige Optimierungen führen dazu, dass der Compiler Zielsprachenkonstrukte erzeugt, für die es gar keine direkten Entsprechungen in der Quellsprache gibt. Ein Nachteil solcher Optimierungen ist, dass es dann kaum noch möglich ist, den Programmablauf mit einem interaktiven Debugger in der Quellsprache zu verfolgen.
Optimierungen können sehr aufwendig sein. Vielfach muss vor allem in modernen JIT-Compilern daher abgewogen werden, ob es sich lohnt, einen Programmteil zu optimieren. Bei Ahead-of-time-Compilern werden bei der abschließenden Übersetzung alle sinnvollen Optimierungen verwendet, häufig jedoch nicht während der Software-Entwicklung (reduziert den Kompilier-Zeitbedarf). Für nichtautomatische Optimierungen seitens des Programmierers können Tests und Anwendungsszenarien durchgespielt werden (s. Profiler), um herauszufinden, wo sich komplexe Optimierungen lohnen.
Im Folgenden werden einige Optimierungsmöglichkeiten eines Compilers betrachtet. Das größte Optimierungspotenzial besteht allerdings oft in der Veränderung des Quellprogramms selbst, zum Beispiel darin, einen Algorithmus durch einen effizienteren zu ersetzen. Dieser Vorgang kann meistens nicht automatisiert werden, sondern muss durch den Programmierer erfolgen. Einfachere Optimierungen können dagegen an den Compiler delegiert werden, um den Quelltext lesbar zu halten.

### Einsparung von Maschinenbefehlen

In vielen höheren Programmiersprachen benötigt man beispielsweise eine Hilfsvariable, um den Inhalt zweier Variablen zu vertauschen:

Mit der Optimierung werden statt 6 nur noch 4 Assemblerbefehle benötigt, außerdem wird der Speicherplatz für die Hilfsvariable hilf nicht gebraucht. D. h., diese Vertauschung wird schneller ausgeführt und benötigt weniger Hauptspeicher. Dies gilt jedoch nur, wenn ausreichend Register im Prozessor zur Verfügung stehen. Die Speicherung von Daten in Registern statt im Hauptspeicher ist eine häufig angewendete Möglichkeit der Optimierung.
Die oben als optimiert gezeigte Befehlsfolge hat noch eine weitere Eigenschaft, die bei modernen CPUs mit mehreren Verarbeitungs-Pipelines einen Vorteil bedeuten kann: Die beiden Lesebefehle und die beiden Schreibbefehle können problemlos parallel verarbeitet werden, sie sind nicht vom Resultat des jeweils anderen abhängig. Lediglich der erste Schreibbefehl muss auf jeden Fall abwarten, bis der letzte Lesebefehl ausgeführt wurde. Tiefer gehende Optimierungsverfahren fügen deshalb unter Umständen zwischen b → Register 2 und Register 2 → a noch Maschinenbefehle ein, die zu einer ganz anderen hochsprachlichen Befehlszeile gehören.

### Statische Formelauswertung zur Übersetzungszeit

Die Berechnung des Kreisumfangs mittels

kann ein Compiler bereits zur Übersetzungszeit zu u = 6.28318 * r auswerten. Diese Formelauswertung spart die Multiplikation 2 * pi zur Laufzeit des erzeugten Programms. Diese Vorgehensweise wird als Konstantenfaltung (englisch „constant folding“) bezeichnet.

### Eliminierung von totem Programmcode

Wenn der Compiler erkennen kann, dass ein Teil des Programmes niemals durchlaufen wird, dann kann er diesen Teil bei der Übersetzung weglassen.
Beispiel:

Wenn in diesem Programm niemals ein GOTO auf die Sprungmarke 200 erfolgt, kann auf die Anweisung 200 k=3 verzichtet werden. Der Sprungbefehl 100 goto 900 ist dann ebenfalls überflüssig.

### Erkennung unbenutzter Variablen

Wird eine Variable nicht benötigt, so muss dafür kein Speicherplatz reserviert und kein Zielcode erzeugt werden.
Beispiel:

Hier wird die Variable c nicht benötigt: Sie steht nicht in der Parameterliste, wird in späteren Berechnungen nicht verwendet und wird auch nicht ausgegeben. Deshalb kann die Anweisung c = 3.14 * b entfallen.

### Optimierung von Schleifen

Insbesondere Schleifen versucht man zu optimieren, indem man zum Beispiel

möglichst viele Variablen in Registern hält (normalerweise mindestens die Schleifenvariable);
statt eines Index, mit dem auf Elemente eines Feldes (englisch array) zugegriffen wird, Zeiger auf die Elemente verwendet, dadurch wird der Aufwand beim Zugriff auf Feldelemente geringer;
Berechnungen innerhalb der Schleife, die in jedem Durchlauf dasselbe Ergebnis liefern, nur einmal vor der Schleife ausführt (Loop-invariant code motion);
zwei Schleifen, die über denselben Wertebereich gehen, zu einer Schleife zusammenfasst, damit fällt der Verwaltungsaufwand für die Schleife nur einmal an;
die Schleife teilweise oder (bei Schleifen mit konstanter, niedriger Durchlaufzahl) komplett auflöst (englisch loop unrolling), sodass die Anweisungen innerhalb der Schleife mehrfach direkt hintereinander ausgeführt werden, ohne dass jedes Mal nach den Anweisungen eine Prüfung der Schleifenbedingung und ein Sprung zum Schleifenbeginn erfolgen;
die Schleife (vor allem bei Zählschleifen mit for) umdreht, da beim Herunterzählen auf 0 effiziente Sprungbefehle (Jump-Not-Zero) benutzt werden können;
die Schleife umformt, damit die Überprüfung der Abbruchbedingung am Ende der Schleife durchgeführt wird (Schleifen mit Anfangsüberprüfung haben stets eine bedingte und eine unbedingte Sprunganweisung, während Schleifen mit Endüberprüfung nur eine bedingte Sprunganweisung haben);
die ganze Schleife entfernt, wenn sie (nach einigen Optimierungen) einen leeren Rumpf besitzt. Dies kann allerdings dazu führen, dass Warteschleifen, die ein Programm absichtlich verlangsamen sollen, entfernt werden. Allerdings sollten für diesen Zweck, soweit möglich, sowieso Funktionen des Betriebssystems benutzt werden.
verschachtelte Schleifen (Schleifen in Schleifen) – wenn es die verwendete Programmierlogik erlaubt – aufsteigend anordnet, von der äußersten Schleife mit den wenigsten Schleifendurchläufen bis zur innersten Schleife mit den meisten Schleifendurchläufen. Damit verhindert man vielfache Mehrinitialisierungen der inneren Schleifenkörper.
Manche dieser Optimierungen sind bei aktuellen Prozessoren ohne Nutzen oder sogar kontraproduktiv.

### Einfügen von Unterprogrammen

Bei kleinen Unterprogrammen fällt der Aufwand zum Aufruf des Unterprogrammes verglichen mit der vom Unterprogramm geleisteten Arbeit stärker ins Gewicht. Daher versuchen Compiler, den Maschinencode kleinerer Unterprogramme direkt einzufügen – ähnlich wie manche Compiler/Assembler/Präcompiler Makro-Anweisungen in Quellcode auflösen. Diese Technik wird auch als Inlining bezeichnet. In manchen Programmiersprachen ist es möglich, durch inline-Schlüsselwörter den Compiler darauf hinzuweisen, dass das Einfügen von bestimmten Unterprogrammen gewünscht ist. Das Einfügen von Unterprogrammen eröffnet oft, abhängig von den Parametern, weitere Möglichkeiten für Optimierungen.

### Halten von Werten in Registern

Anstatt mehrfach auf dieselbe Variable im Speicher, beispielsweise in einer Datenstruktur, zuzugreifen, kann der Wert nur einmal gelesen und für weitere Verarbeitungen in Registern oder im Stack zwischengespeichert werden. In C, C++ und Java muss dieses Verhalten ggf. mit dem Schlüsselwort volatile abgeschaltet werden: Eine als volatile bezeichnete Variable wird bei jeder Benutzung wiederholt vom originalen Speicherplatz gelesen, da ihr Wert sich unterdessen geändert haben könnte. Das kann beispielsweise der Fall sein, wenn es sich um einen Hardware-Port handelt oder ein parallel laufender Thread den Wert geändert haben könnte.
Beispiel:

Im Maschinenprogramm wird nur einmal auf array[25]->element.x zugegriffen, der Wert wird zwischengespeichert und zweimal verwendet. Ist x volatile, dann wird zweimal zugegriffen.
Es gibt außer volatile noch einen anderen Grund, der eine Zwischenspeicherung in Registern unmöglich macht: Wenn der Wert der Variablen v durch Verwendung des Zeigers z im Speicher verändert werden könnte, kann eine Zwischenspeicherung von v in einem Register zu fehlerhaftem Programmverhalten führen. Da die in der Programmiersprache C oft verwendeten Zeiger nicht auf ein Array beschränkt sind (sie könnten irgendwohin im Hauptspeicher zeigen), hat der Optimizer oft nicht genügend Informationen, um eine Veränderung einer Variablen durch einen Zeiger auszuschließen.

### Verwendung schnellerer äquivalenter Anweisungen

Statt einer Multiplikation oder Division von Ganzzahlen mit einer Zweierpotenz kann ein Schiebebefehl verwendet werden. Es gibt Fälle, in denen nicht nur Zweierpotenzen, sondern auch andere Zahlen (einfache Summen von Zweierpotenzen) für diese Optimierung herangezogen werden. So kann zum Beispiel (n << 1) + (n << 2) schneller sein als n * 6. Statt einer Division durch eine Konstante kann eine Multiplikation mit dem Reziprokwert der Konstante erfolgen. Selbstverständlich sollte man solch spezielle Optimierungen auf jeden Fall dem Compiler überlassen.

### Weglassen von Laufzeitüberprüfungen

Programmiersprachen wie Java fordern Laufzeitüberprüfungen beim Zugriff auf Felder oder Variablen. Wenn der Compiler ermittelt, dass ein bestimmter Zugriff immer im erlaubten Bereich sein wird (zum Beispiel ein Zeiger, von dem bekannt ist, dass er an dieser Stelle nicht NULL ist), kann der Code für diese Laufzeitüberprüfungen weggelassen werden.

### Reduktion von Paging zur Laufzeit

Eng zusammenhängende Codebereiche, zum Beispiel ein Schleifenrumpf, sollte zur Laufzeit möglichst auf der gleichen oder in möglichst wenigen Speicherseiten („Page“, zusammenhängend vom Betriebssystem verwalteter Speicherblock) im Hauptspeicher liegen. Diese Optimierung ist Aufgabe des (optimierenden) Linkers. Dies kann zum Beispiel dadurch erreicht werden, dass dem Zielcode an geeigneter Stelle Leeranweisungen („NOPs“ – No OPeration) hinzugefügt werden. Dadurch wird der erzeugte Code zwar größer, aber wegen der reduzierten Anzahl notwendiger TLB-Cache-Einträge und notwendiger Pagewalks wird das Programm schneller ausgeführt.

### Vorziehen bzw. Verzögern von Speicherzugriffen

Durch das Vorziehen von Speicherlesezugriffen und das Verzögern von Schreibzugriffen lässt sich die Fähigkeit moderner Prozessoren zur Parallelarbeit verschiedener Funktionseinheiten ausnutzen. So kann beispielsweise bei den Befehlen: a = b * c; d = e * f; der Operand e bereits geladen werden, während ein anderer Teil des Prozessors noch mit der ersten Multiplikation beschäftigt ist.

## Ein Beispielcompiler

Folgendes in ANTLR erstelltes Beispiel soll die Zusammenarbeit zwischen Parser und Lexer erklären. Der Übersetzer soll Ausdrücke der Grundrechenarten beherrschen und vergleichen können. Die Parsergrammatik wandelt einen Dateiinhalt in einen abstrakten Syntaxbaum (AST) um.

### Grammatiken

Die Baumgrammatik ist in der Lage, die im AST gespeicherten Lexeme zu evaluieren. Der Operator der Rechenfunktionen steht in der AST-Schreibweise vor den Operanden als Präfixnotation. Daher kann die Grammatik ohne Sprünge Berechnungen anhand des Operators durchführen und dennoch Klammerausdrücke und Operationen verschiedener Priorität korrekt berechnen.

Ist eines der oben als compare bezeichnete Ausdrücke noch kein Lexem, so wird es von der folgenden Lexer-Grammatik in einzelne Lexeme aufgeteilt. Dabei bedient sich der Lexer der Technik des rekursiven Abstiegs. Ausdrücke werden so immer weiter zerlegt, bis es sich nur noch um Token vom Typ number oder Operatoren handeln kann.

Die Ausgabe hinter dem Token start zeigt außerdem den gerade evaluierten Ausdruck.

### Ausgabe des Beispiels

Eingabe:

5 = 2 + 3
32 * 2 + 8
(2 * 2^3 + 2) / 3

Ausgabe (in den ersten Zeilen wird nur der Ausdruck der Eingabe in der AST-Darstellung ausgegeben):

(= 5 (+ 2 3))
(+ (* 32 2) 8)
(/ (+ (* 2 (^ 2 3)) 2) 3)
1.0
72.0
6.0

Der erste Ausdruck wird also als wahr (1) evaluiert, bei den anderen Ausdrücken wird das Ergebnis der Rechnung ausgegeben.
