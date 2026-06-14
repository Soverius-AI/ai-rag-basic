---
url: https://de.wikipedia.org/wiki/Fortran
---

# Fortran

## Überblick

Fortran ist eine prozedurale, seit 2003 auch eine objektorientierte Programmiersprache, die insbesondere für numerische Berechnungen in Wissenschaft, Technik und Forschung eingesetzt wird. Der Name entstand aus FORmula TRANslation (dt. „Formel-Übersetzung“) und wurde bis zur Version FORTRAN 77 mit Großbuchstaben geschrieben.
Im Juni 2025 stand Fortran an zehnter Stelle der beliebten Programmiersprachen im TIOBE-Index.

## Geschichte

Fortran gilt als die erste jemals tatsächlich realisierte höhere Programmiersprache. Sie geht auf einen Vorschlag zurück, den John W. Backus, Programmierer bei IBM, 1953 seinen Vorgesetzten unterbreitete.
Dem Entwurf der Sprache folgte die Entwicklung eines Compilers durch ein IBM-Team unter Leitung von Backus. Das Projekt begann 1954 und war ursprünglich auf sechs Monate ausgelegt. Tatsächlich konnte Harlan Herrick, der Erfinder der später heftig kritisierten Goto-Anweisung, am 20. September 1954 das erste Fortran-Programm ausführen. Doch erst 1957 wurde der Compiler für marktreif befunden und mit jedem IBM-704-System ausgeliefert. Backus hatte darauf bestanden, den Compiler von Anfang an mit der Fähigkeit zu Optimierungen auszustatten: Er sah voraus, dass sich Fortran nur dann durchsetzen würde, wenn ähnliche Ausführungsgeschwindigkeiten wie mit bisherigen Assembler-Programmen erzielt würden. Die Erreichbarkeit dieses Ziels wurde damals allgemein stark bezweifelt.

### Versionen

Fortran wurde mehrmals erweitert. Viele neue Sprachelemente wurden zunächst von einem einzelnen Hersteller eingeführt und später in den internationalen Standard übernommen. Als Versionen folgten aufeinander FORTRAN I, FORTRAN II, FORTRAN IV, FORTRAN 66, FORTRAN 77, Fortran 90, Fortran 95, Fortran 2003, Fortran 2008, Fortran 2018 und Fortran 2023. Ab FORTRAN 66 ist Fortran durch die ISO standardisiert. Die Fortschreibung der Standards ist ein komplizierter Prozess, der oft wesentlich länger dauert als zunächst angestrebt: Der Nachfolger des 1978 erschienenen Standards FORTRAN 77, der als Fortran 8x bezeichnet wurde, war ursprünglich für das Jahr 1982 geplant, später dann für das Jahr 1985, und wurde schließlich unter der Bezeichnung Fortran 90 erst am 11. April 1991 als neuer Standard und Nachfolger von FORTRAN 77 angenommen. 2018 wurde Fortran 2018 freigegeben. Es wurden die Interoperabilität mit C und Funktionen bezüglich der Parallelprogrammierung verbessert. Weitere Neuerungen betreffen die Gleitkommaarithmetik auf Mikroprozessoren und die Ein- und Ausgabe von Hexadezimalzahlen.

### Sprachelemente

Im Laufe dieser Erweiterungen wurden zahlreiche Sprachelemente aus später entstandenen Programmiersprachen übernommen. Frühe FORTRAN-Versionen bis Version 4 hatten als Flusskontrollstruktur nur zwei verschiedene Goto-Anweisungen und den Aufruf von Unterprogrammen. Strukturierte Programmierung mit Schleifen wurde mit FORTRAN 77 möglich. Mit Fortran 90 wurde neben dem aus der Lochkartenzeit stammenden festen Zeilenformat ein von späteren Programmiersprachen verwendetes freieres Format erlaubt. Ab Fortran 90 werden Elemente eingeführt, die auch beispielsweise in Ada vorhanden sind, beispielsweise optionale Parameter und die Möglichkeit, Prozedurparameter nicht nur über die Position in der Parameterliste zu identifizieren, sondern auch über ihren Namen. Seit Fortran 2003 werden auch polymorphe Datentypen und Vererbung unterstützt, so dass man objektorientiert programmieren kann. Seit Fortran 2008 ist mit Coarray Fortran eine Parallelisierung in die Sprache eingebaut, die dem PGAS-Schema folgt.
Beispiel:

Mögliche Aufrufe sind dann z. B.:

Während beim ersten Aufruf die Parameterassoziation über die Reihenfolge der Parameter erfolgt, so werden bei den anderen Beispielen die Parameter mittels der Namen identifiziert. Bei letzteren spielt die Reihenfolge dann keine Rolle mehr.

### Varianten

Einige von Fortran abgeleitete Programmiersprachen sind Ratfor, F und HPF (High Performance Fortran).

## Eigenschaften

Fortran war und ist für numerische Berechnungen vorgesehen und optimiert. Von Anfang an hatte Fortran den Potenz-Operator ** – der in vielen anderen Hochsprachen nicht vorhanden ist – und einen Datentyp für komplexe Zahlen. Mit Fortran 90 wurden Vektor- und Matrix-Operationen standardisiert. Außerdem ist Fortran case insensitive, d. h. im Gegensatz zu Sprachen wie C oder C++ wird vom Compiler nicht zwischen Groß- und Kleinschreibung unterschieden. Es liegt im Stil des Programmierers, ob er groß oder klein schreibt, generell sieht man aber immer öfter (z. B. in Lehrbüchern) den Trend, alles kleinzuschreiben.
Insbesondere für wissenschaftliche und numerische Berechnungen gibt es in Fortran umfangreiche Bibliotheken, die immer noch weit verbreitet sind, auch wenn eine zunehmende Menge an Funktionalität inzwischen nach C und C++ portiert wurde.

### Arrays in Zuweisungen und Ausdrücken und intrinsische Array-Funktionen

Arrays mit gleicher Zahl von Elementen und gleichem Rang können in Ausdrücken und Zuweisungen verwendet werden, auch gemischt mit Skalaren.

Verschiedene Array-Funktionen werden durch die Sprachnorm vordefiniert. So gibt beispielsweise die Funktion MAXVAL den maximalen Wert eines Arrays zurück und MAXLOC den Index des maximalen Wertes. Die intrinsischen Funktionen DOT_PRODUCT und MATMUL liefern das Skalarprodukt und die Matrixmultiplikation.

### Implizite Variablendeklaration

In Anlehnung an mathematischen Notationsgebrauch sind Variablen in Fortran ohne Deklaration über ihren Anfangsbuchstaben deklariert: Bezeichner, die mit einem der Buchstaben i, j, k, l, m, n beginnen, stehen für eine Integer-Variable oder einen Integer-Funktionswert, alle übrigen Bezeichner stehen für Gleitkommazahlen. Diese implizite Typenvereinbarung von Variablen kann durch die Deklaration einzelner Variablen überschrieben werden, sie kann durch eine Zeile wie

verändert werden, und die implizite Vereinbarung kann durch den Befehl

ganz aufgehoben werden, was für alle neuen Programme empfohlen wird.  In diesem Fall löst die Verwendung eines nichtdeklarierten Bezeichners einen Fehler während der Übersetzung aus. Dadurch vereinfacht sich die Fehlersuche erheblich.

### Übergabe von Argumenten

#### Bis FORTRAN 77

Bis einschließlich FORTRAN 77 konnten Unterprogramme vor ihrer Verwendung nicht deklariert werden. Es konnte durch eine Deklaration nur der Typ des Rückgabewerts einer Funktion festgelegt werden. Der Compiler überprüfte normalerweise nicht, ob ein Unterprogrammaufruf mit typrichtigen Argumenten erfolgt. Die Übergabe von Argumenten an Unterprogramme (subroutine oder function) erfolgt üblicherweise per Adresse.  Eine automatische Typumwandlung findet nicht statt.
Die meisten Fortran-Systeme führen auch keine Typüberprüfung zur Laufzeit durch. Das ist bei der Verwendung dieses veralteten Programmierstils eine häufige Fehlerquelle.
Programmbeispiel 1:

Im Unterprogramm drucke_zahl() ist meine_zahl, weil mit m beginnend, implizit als Integer deklariert. Zur Laufzeit erfolgt ein Aufruf mit dem real-Argument 3.14. Dann wird die Integer-Variable meine_zahl mit den Bits der Gleitkommadarstellung von 3.14 aufgefüllt – was auf beliebig abwegige numerische Ergebnisse führt.
Viele Fortran-Compiler übergeben Parameter per Referenz. Das führt teilweise zu nicht beabsichtigten Ergebnissen, beispielsweise folgendes Programmbeispiel 2:

Dieses würde bei manchen Compilern die Zahl 42 ausgeben. Das Programm ist allerdings so nicht korrekt.
Programmierwerkzeuge wie „ftnchek“ ermöglichen eine separate Prüfung der Übereinstimmung von Argumentlisten und würden in diesen Fällen warnen. Aktuelle Compiler führen ebenfalls solche Überprüfungen durch oder erzeugen einen Laufzeitfehler bei der Zuweisung eines Wertes an eine Konstante; diese beiden Prüfungen waren schon seit 1970 am Rechner TR 440 verfügbar.

#### Modernes Fortran

In Fortran 90 und nachfolgenden Versionen besteht die Möglichkeit, die Parametertypen der Unterprogramme anhand von Schnittstellen (interface) und Modulen (module) zu definieren. Der Compiler kann somit überprüfen, ob der übergebene Parametertyp und der erwartete Typ übereinstimmen. Diese Bekanntgabe ist allerdings nicht zwingend, wie es in anderen Programmiersprachen – beispielsweise Ada – der Fall ist. Die von Fortran 95 abgeleitete Programmiersprache F erzwingt dieses; in F sind nur Aufrufe von Unterprogrammen erlaubt, deren Parameterliste beispielsweise durch use-Anweisungen bekannt gemacht sind. In einem Unterprogramm kann auch festgelegt werden, ob ein Parameter Eingabeparameter (intent(in)), Ausgabeparameter (intent(out)) oder beides (intent(in out)) ist. In Fortran 90 deklariert man das Unterprogramm bar folgendermaßen:

Falls das Unterprogramm versuchen sollte, den Wert des Aktualparameter i zu verändern, würde der Compiler einen Fehler anzeigen.
Weiterhin kann Fortran 90 Arrays einschließlich ihrer Größen übergeben, diese können
dann im Unterprogramm verwendet werden:

Es können dann auch Teile von Arrays übergeben werden, z. B. mit

Dies übergibt einen Array mit den Elementen x(1), x(3), x(5), x(7), x(9) an foo.

### Dynamische Speicherallokation

Unter dynamischer Speicherallokation versteht man die Möglichkeit, Speicher (insbesondere für Felder wie z. B. für Matrizen) erst zur Laufzeit des Programms anzufordern, das heißt, dass die Größe von Arrays nicht bereits zum Zeitpunkt des Übersetzens des Programms festgelegt zu sein braucht. Ein einfaches Beispiel:

Bis FORTRAN 77 ist eine dynamische Speicherallokation nicht oder nur über nicht standardisierte Erweiterungen der Compilerhersteller möglich. Ab Fortran 90 ist die dynamische Speicherverwaltung im Sprachstandard enthalten.
Ein anderes Beispiel für dynamische Speicherreservierung: Anlegen und Bearbeiten einer verketteten Liste:

### Coarrays

Fortran unterstützt seit der Sprachversion Fortran 2008 Coarrays. Ein Programm läuft in unterschiedlichen Instanzen, die als „images“ bezeichnet werden. Jede Instanz kann auf lokale Variablen zugreifen. Zugriff auf Variablen auf anderen Images wird über Coarrays realisiert, die wie ein normaler Array mit einem bestimmten Cosubscript angesprochen werden. Bevor der Wert einer Variable verwendet werden kann, der von einem anderen Image geschrieben wurde, muss synchronisiert werden, dies geschieht am einfachsten durch einen SYNC ALL-Befehl.  Ein einfaches Beispiel:

was dann mit vier Images beispielsweise die Ausgabe

 Gruesse von 3 an 4
 Gruesse von 1 an 2
 Gruesse von 2 an 3
 Gruesse von 4 an 1

erzeugt.

### Objektorientierung

Vererbung wird in Fortran durch Erweiterung von Typen realisiert. In Fortran kann ein Pointer oder ein Argument eines Unterprogrammes ein CLASS-Argument sein.  Falls erforderlich, kann der Typ durch SELECT TYPE unterschieden werden.

Methoden werden in Fortran als „Type-bound procedures“ bezeichnet:

Ein Benutzer, der eine Variable x vom Typ oder der Klasse foo verwendet, kann dann die Routinen foo%add, foo%subtract und foo%get_val aufrufen, der direkte Zugriff auf foo%i ist durch das Schlüsselwort private nicht möglich.

## Compiler

Fortran-Compiler gibt es für praktisch alle Computer, von Arbeitsplatzrechnern bis zu Supercomputern.

### Proprietäre Software

Kommerzielle Anbieter von Fortran-Compilern sind entweder Computerhersteller wie z. B. IBM, SUN, HP, Intel oder spezialisierte Softwarehersteller wie Absoft, NAG, Lahey, Salford. Reine FORTRAN-77-Compiler werden heute zumeist nicht mehr hergestellt, da FORTRAN 77 fast vollständig im Sprachstandard Fortran 95 enthalten ist (nur DO-Schleifen mit REAL-Iterationsvariablen und Hollerith-Edit-Deskriptoren sind in Fortran 95 und später nicht mehr vorhanden).
Einige der oben genannten Compiler sind für Privatanwender bzw. nichtkommerzielle Nutzung unentgeltlich, zum Beispiel die Linux-Variante des Intel-Fortran-Compilers, Sun Studio Express (mit Fortran-, C- und C++-Compilern für Linux und Solaris), für Microsoft Windows der Compiler von Salford und DEC Fortran für OpenVMS.

### Freie Software

Ab Version 4.0 enthält die praktisch für alle Plattformen verfügbare GNU Compiler Collection (GCC) einen Compiler für Fortran 95 (GNU Fortran). Ältere Versionen von GCC enthalten noch den FORTRAN-77-Compiler g77. An dem freien Compiler G95 wurden die Arbeiten 2012 eingestellt, er ist allerdings weiterhin verfügbar. Aus diesem ging 2003 gfortran als neuer GNU-Fortran-Compiler hervor.
Ab Version 4.4 „Luna“ existiert eine integrierte Entwicklungsumgebung für Eclipse.
Auch die OpenWatcom-Entwicklersuite verfügt über einen FORTRAN-77-Compiler.

### Transcompiler

Es gibt Transcompiler, wie beispielsweise f2c, zur automatischen Übersetzung von Fortran-77 in C. Der daraus erzeugte Quelltext ist allerdings kaum für den Menschen lesbar. Auch der NAG-Compiler verwendet als Zwischensprache C; allerdings ist die nötige Laufzeitbibliothek nicht im Quelltext erhältlich.

### Sprachunterstützung

Die meisten aktuellen Compiler unterstützen den 2008- oder 2018-Standard.

## Verfügbare Software und Programmbeispiele

### Mathematische Bibliotheken

Die Referenz-Implementierung der BLAS-Bibliothek, die Grundoperationen der linearen Algebra zur Verfügung stellt, ist in Fortran geschrieben und verwendet die API von Fortran, ebenso wie die auf BLAS aufsetzende LAPACK-Bibliothek.
Zahlreiche der bei Netlib verfügbaren Algorithmen sind in Fortran geschrieben, typischerweise in älteren Dialekten.

### Programmbeispiele

Zahlreiche Programmbeispiele finden sich bei den Webseiten „Programming Idioms“ und bei Rosetta Code.

## Literatur zur Geschichte von Fortran

Annals of History of Computing. Vol. 6, No. 1, 1984, ISSN 0164-1239.
John C. McPherson: Early Computers and Computing Institutions. S. 15–16. doi:10.1109/MAHC.1984.10005
Herbert S. Bright: Early Fortran User Experience. S. 28–30. doi:10.1109/MAHC.1984.10011
Daniel N. Leeson: IBM Fortran Exhibit and Film. S. 41–48. doi:10.1109/MAHC.1984.10000
J. A. N. Lee: An Annotated Bibliography of Fortran. S. 49–58. doi:10.1109/MAHC.1984.10003
Michael Metcalf: The Seven Ages of Fortran. In: Journal of Computer Science & Technology (JCS&T), Band 11, Nr. 1, S. 1–8, 2011 (online (Memento vom 24. Oktober 2021 im Internet Archive)).
History of FORTRAN and FORTRAN II. Sammlung präsentiert vom Computer History Museum (englisch).
Saul Rosen (Hrsg.): Programming Systems and Languages. McGraw-Hill, New York NY u. a. 1967.
Richard L. Wexelblat (Hrsg.): History of Programming Languages. Academic Press, New York NY u. a. 1981, ISBN 0-12-745040-8, S. 25–74.
FORTRAN-Fachwörterbuch. In: Blätter der Deutschen Gesellschaft für Versicherungsmathematik. Band 8, H. 3, Oktober 1967, S. 499–520.

## Literatur zu Fortran

Stephen J. Chapman: Fortran 90/95 for Scientists and Engineers. 2. Auflage. McGraw Hill Higher Education, Boston MA u. a. 2004, ISBN 0-07-123233-8.
Thomas Kühme, Peter Witschital: Die FORTRAN-Fibel. Strukturierte Programmierung mit FORTRAN 77. Lehr- und Arbeitsbuch für Anfänger. 3., durchgesehene Auflage. Oldenbourg, München u. a. 1991, ISBN 3-486-22016-0.
Michael Metcalf, John Reid, Malcolm Cohen, Reinhold Bader: Modern Fortran Explained, Incorporating Fortran 2023. Oxford University Press, Oxford u. a. 2023, ISBN 978-0-19-887657-1.
William H. Press, Saul A. Teukolsky, William T. Vetterling, Brian P. Flannery: Numerical recipes in Fortran 77. The Art of Scientific Computing (= Numerical recipes in Fortran. Vol. 1). 2. Auflage. Cambridge University Press, Cambridge u. a. 1992, ISBN 0-521-43064-X (2., korr. Auflage. ebenda 2003).
William H. Press, Saul A. Teukolsky, William T. Vetterling, Brian P. Flannery: Numerical Recipes in Fortran 90. The Art of Parallel Scientific Computing (= Numerical recipes in Fortran. Vol. 2). 2. Auflage. Cambridge University Press, Cambridge u. a. 1996, ISBN 0-521-57439-0 (2., korr. Auflage. ebenda 1999).
Günter Schmitt: Fortran-90-Kurs technisch orientiert. Einführung in die Programmierung mit Fortran 90. Oldenbourg, München u. a. 1996, ISBN 3-486-23896-5.
Dragos Chirila, Gerrit Lohmann: Introduction to Modern Fortran for Earth System Sciences. Springer, Berlin/Heidelberg 2015, ISBN 978-3-642-37008-3.
