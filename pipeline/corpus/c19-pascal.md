---
url: https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)
---

# Pascal (Programmiersprache)

## Überblick

Pascal ist eine Anfang der 1970er Jahre entwickelte imperative Programmiersprache.
Pascal wurde von Niklaus Wirth an der ETH Zürich als Lehrsprache eingeführt, um die strukturierte Programmierung zu lehren.

## Allgemeines

Pascal ist eine Weiterentwicklung von Algol 60. Es lehnt sich in seiner Syntax an die englische Grammatik an. Dies soll die Lesbarkeit für Programmiereinsteiger verbessern; Pascal ist daher als Lehrsprache geeignet. Seine Verbreitung in der professionellen Programmierung fand es als Borland/Turbo Pascal, später Object Pascal. Jene sind, gegenüber dem Ur-Pascal, wesentlich erweiterte Versionen.
Ein wichtiges Konzept der Fehlersicherheit, das Wirth zur Anwendung brachte, ist die starke Typisierung (englisch „strong typing“): Variablen sind bereits zur Übersetzungszeit einem bestimmten Datentyp zugeordnet, und dieser kann nicht nachträglich verändert werden. Typenstrenge bedeutet, dass Wertzuweisungen ausschließlich unter Variablen gleichen Typs erlaubt sind. In Pascal gibt es von diesem strikten Zwang lediglich wenige Ausnahmen:

Wertzuweisungen der Form [Variable vom Typ real] := [Wert vom Typ integer].
In Extended-Pascal Wertzuweisungen von ganzzahligen oder reellen Zahlen an Variablen vom Typ complex.
Wertzuweisungen von eingeschränkten Wertebereichen eines ordinalen Typs. Beispiel: type int10 = 1 .. 10; Werte dieses Typs können dann Integervariablen zugewiesen werden.
Wertzuweisungen von Mengen eines eingeschränkten Wertebereiches eines ordinalen Typs. Beispiel: type set10 = set of 1 .. 10; set20 = set of 1 .. 20; Werte des Typs set10 können dann Variablen des Typs set20 zugewiesen werden.
Wertzuweisungen auf eingeschränkte Wertebereiche eines ordinalen Typs oder einer Menge. In diesem Fall rufen Werte bzw. Mengen-Elemente außerhalb des Zielbereichs einen Laufzeitfehler hervor.
Wertzuweisungen zwischen unterschiedlichen String-Typen, inkl. char, Zeichen-Arrays gemäß Standard-Pascal und den verschiedenen String-Typen in Extended-Pascal, Borland Pascal usw. Sofern die Länge des Wertes nicht innerhalb der Kapazität des Ziels liegt, ergibt sich auch hier ein Laufzeitfehler.
Heute findet Pascal noch im universitären Bereich (Entwicklung/Ausbildung) und in sicherheitskritischen Bereichen (z. B. Verkehrstechnik, Energieversorgung, Medizintechnik, Raumfahrt, Militär, teilweise im Banken- und Versicherungswesen) Anwendung. Dies beruht hauptsächlich auf der guten Prüfbarkeit und Wartbarkeit des Codes und der klaren Zuordnung der Variablen. So war die 2005 eingeführte Betriebsleittechnik IV der 2011 stillgelegten Transrapid-Versuchsanlage Emsland in Pascal programmiert.
Eine pascalähnliche Notation wurde in der Informatik und Mathematik zur Darstellung von Algorithmen benutzt. Aus didaktischen Gründen, es seien hier die Typstrenge, Fehlersicherheit und frei verfügbare portierbare Pascalcompiler (Free Pascal, GNU Pascal) genannt, wird im aktuellen Informatikunterricht Pascal ebenfalls noch eingesetzt. Im Hobby-Bereich erlangte Pascal zeitweilig eine weite Verbreitung.

## Syntax

### Hallo Welt

Ein Hallo-Welt-Programm sieht in Pascal folgendermaßen aus:

In der Pascal-Version, die im 1973 erschienenen Revised Report beschrieben wird, sind die Textdateien input und output vordefinierte Programmparameter.
Sie als Programmparameter aufzuführen ist (in dieser Pascal-Version jedenfalls) ausdrücklich verboten.
Daher ist das folgende Programm äquivalent zum obigen.
In Dialekten wie Delphi wird der Programmkopf (nahezu) ignoriert und kann komplett entfallen, falls er jedoch vorhanden ist, muss er syntaktisch korrekt sein.

Ein Detail am Rande: In manchen alten Beispielen findet man ein readln nach dem writeln-Befehl. Das war nur notwendig, weil die I/O-Architektur der CDC Cyber 6000, auf der Wirth den ersten Pascal-Compiler entwickelte, das benötigte, um die internen Puffer zu leeren – sonst wäre im interaktiven Betrieb keine Ausgabe zu sehen gewesen. IDEs (integrierte Entwicklungsumgebungen) konnte man mit diesem readln zwingen, am Ende der Programmausführung nicht sofort wieder in den Editor-Modus umzuschalten, was die Ausgabe bei manchen IDEs (z. B. Turbo-Pascal) sonst hätte verschwinden lassen. Im Batch-Betrieb war das ohnehin nie notwendig.

### Datentypen

#### Standarddatenypen

Jeder Variablen muss in einer Variablendeklaration ein Datentyp zugeordnet werden. Der Datentyp bestimmt, welche möglichen Werte die Variable während des Programmablaufs speichern kann. In Pascal gibt es vier einfache Standardtypen, nämlich integer, real, boolean und char.
Die Längen der verschiedenen Datentypen außer boolean sind abhängig vom Compiler. Weiterhin haben viele Implementationen noch weitere vordefinierte einfache Datentypen.

#### Selbstdefinierte Datentypen

In Pascal ist es möglich, neben den vier Standardtypen eigene einfache Datentypen zu definieren. Dabei handelt es sich entweder um Aufzählungstypen oder Ausschnittstypen. Um einen neuen Aufzählungstyp zu definieren, schreibt man alle Werte, die eine Variable dieses Typs speichern können soll, der Reihe nach auf. Im folgenden Beispiel wird ein neuer Typ mit dem Namen Besteck definiert: Besteck = (Gabel, Messer, Loeffel)
Einen Ausschnittstyp definiert man, wenn der Wertebereich eines umfassenderen Typs nicht voll ausgeschöpft wird. Wenn eine Variable beispielsweise nur die Zahlen zwischen 0 und 255 speichern können soll, so ist es möglich, den Datentyp integer auf diese Teilmenge einzuschränken. Im folgenden Beispiel wird ein neuer Typ mit dem Namen byte definiert: byte = 0 .. 255;

#### Strukturierte Datentypen

Pascal bietet Programmierern vier strukturierte Datentypen, die es ermöglichen, mehrere Werte in einer Variablen zu speichern. In einem Feld (array) kann eine feste, also während der Laufzeit unveränderbare Anzahl von Werten gespeichert werden, die alle vom selben Datentyp sein müssen. Im folgenden Beispiel wird ein Feld definiert, in dem maximal 100 ganze Zahlen abgespeichert werden können:

In einer Menge (set) können ebenfalls Werte vom selben Datentyp gespeichert werden, allerdings wird nur festgehalten, welche Werte in der Menge enthalten sind, wobei es nicht darauf ankommt, wie oft ein einzelner Wert genannt wurde oder in welcher Reihenfolge die Werte genannt wurden. Ein Beispiel für die Definition einer Menge:

In einem Verbund (record) kann eine feste Anzahl von Werten gespeichert werden, wobei die Werte von verschiedenem Datentyp sein dürfen. Ein Beispiel einer Definition:

Eine beliebig lange Folge von Werten desselben Typs kann in Pascal mithilfe des Datentyps file (deutsch Datei) dargestellt werden. Beispiel einer Definition:

#### Zeiger

Hauptzweck der Verwendung von Zeigern ist in Pascal das Erstellen von verschiedenen Datenstrukturen, je nach den Vorstellungen des Programmierers. So lassen sich mithilfe von Zeigern etwa Listen und Bäume erstellen, die bei der Speicherung von Daten Vorteile gegenüber Feldern, Mengen, Verbünden und Dateien bieten. Ein weiterer Vorteil von Zeigern ist, dass Zeigervariablen den von ihnen benötigten Speicherplatz während der Laufzeit anfordern können. Der Programmierer muss also nicht schon im Vorhinein definieren, wie viel Platz die Variablen seines Programms bei der Ausführung benötigen werden und kann grundsätzlich vom Minimum ausgehen, über das, je nach Bedarfsfall, hinaus erweitert wird.

### Programmstrukturen

Charakteristisch für Pascal ist das Konzept der Verschachtelung von Prozeduren und Funktionen. Im Deklarationsteil einer Prozedur oder Funktion können andere Prozeduren und Funktionen definiert werden, die außerhalb nicht sichtbar sind. Beispiel:

### Kontrollstrukturen

#### Bedingte Anweisung und Verzweigung

Als bedingte Anweisungen und Verzweigungen stehen in Pascal die if- und die case-Anweisung zur Verfügung. Ein Beispiel einer if-Verzweigung:

#### Schleifen

Pascal bietet drei Arten von Schleifen. Soll vor jedem Schleifendurchlauf eine Abbruchbedingung geprüft werden, verwendet man die while-Anweisung, für eine Prüfung nach jedem Durchlauf die repeat-Anweisung. Für eine vorgegebene Anzahl von Durchläufen gibt es die for-Anweisung.

Die with-Anweisung ist keine Schleife, sie vereinfacht nur die Zugriffe auf Komponenten eines Record.
Sprunganweisungen können mit goto auch verwendet werden, dessen Gebrauch jedoch umstritten ist (siehe Artikel zu Sprunganweisungen).

## Compiler

Pascal-Compiler sind überwiegend Single-Pass-Compiler, d. h. die Quelle wird nur ein einziges Mal gelesen und analysiert. Das Design der Sprache war so gehalten, um genau das zu ermöglichen. Bei der damaligen geringen Geschwindigkeit der Rechner Anfang der 1970er Jahre war dies ein großer Vorteil.
Der erste Pascal-Compiler entstand auf der CDC Cyber 6000 der ETH Zürich. Daraus entstand dann Pascal 6000, das als erste operative Version eines Compilers der Sprache gesehen werden kann.
Ein zweiter Pascal-Compiler – der P4 „Portable Pascal Compiler“ von Urs Ammann, Kesav Nori und Christian Jacobi – stammte ebenfalls von der ETH Zürich. Der P4 erzeugte eine plattformunabhängige, als Assemblersprache ausgelegte Zwischensprache, den P-Code, der durch eine virtuelle Maschine (ein Programm) interpretiert wird. Später entstanden dann Compiler, die auf dem P4 basierten. Die verbreitetste Version wurde unter dem Namen UCSD Pascal bekannt, das auf vielen Systemen implementiert wurde, u. a. auf Apple II und Texas Instruments TI-99/4A und wesentlich zur Verbreitung der Sprache sowohl (zuerst) in den Vereinigten Staaten, später auch in Europa beitrug. Im Mai 2006 wurden die Quelltexte von Version II.0 freigegeben.

## Besonderheiten

Sehr hohe Prozesssicherheit
Da Pascal sowie der Quasi-Standard Borland/Turbo-Pascal eine strikte Trennung unterschiedlicher Typen vorsehen und die Zuweisungskompatibilität von Ausdrücken beachten, kommen implizite Typumwandlungen, anders als in C, praktisch nicht vor. Insbesondere bei der Übergabe von Daten (z. B. aus externen Dateien, aber auch innerhalb des Programms) an Funktionen oder Prozeduren kann der Compiler schon beim Kompilieren die Korrektheit der Typen kontrollieren.
Keine nullterminierten Zeichenketten
Standard Pascal hatte zwar Zeichenketten-Literale, aber keinen Typ string (s. oben). In den meisten späteren Implementierungen wurden Zeichenketten als char-Arrays definiert, bei denen das erste Feld (Byte) zur Speicherung der Länge verwendet wurde. Daraus ergab sich eine Längenbegrenzung von 255 Zeichen. Bei den in der C-Standard-Bibliothek verwendeten Strings handelt es sich dagegen um NUL-terminierte Strings. Durch die Längenspeicherung in Pascal können verschiedene Operationen wie Stringverkettung effizienter durchgeführt werden (kein Durchsuchen bis zum NUL-Zeichen erforderlich). Größere Zeichenketten mussten selbst definiert werden (z. B. als Array of char), sofern sie nicht (wie z. B. in Borland Pascal 7) durch die Compilerhersteller bereits implementiert wurden. Im Extended-Pascal-Standard wurden Zeichenketten als Scheme-Typ definiert. Auch hier muss die Kapazität angegeben werden, sie wird aber in runde Klammern geschrieben, und es gibt keine formale Längenbeschränkung: string(10240).
Strikte Trennung zwischen Programm, Funktionen und Prozeduren
Pascal trennt strikt zwischen einer Funktion (mit Rückgabewert) und einer Prozedur (kein Rückgabewert). Eine Funktion darf nicht als Prozedur aufgerufen werden – d. h., der Rückgabewert muss stets entgegengenommen werden. Seit Turbo Pascal 4.0 (1987) ist es jedoch möglich, Funktionen auch ohne Entgegennahme des Funktionsergebnisses aufzurufen. Weiterhin wird ein ausführbares Programm in Pascal durch das Schlüsselwort program gekennzeichnet, wohingegen in C der Einstiegspunkt für ein Programm die Funktion main ist, die sich außer durch ihren Namen nicht von anderen Funktionen unterscheidet.
Deklarationen
Programme, Funktionen und Prozeduren sind im Gegensatz zu C dreigegliedert: Es gibt neben dem Kopfteil, der den Namen und die Signatur enthält, einen separaten Deklarationsteil, in dem Typen, Variablen und verschachtelte Prozeduren/Funktionen deklariert werden und einen Definitionsteil, in dem implementiert wird. In C gibt es nur einen Funktionskopf und Funktionsrumpf, der den Deklarations- und Definitionsteil vereinigt. In C dürfen Funktionen nicht verschachtelt definiert werden.
Case sensitivity
Im Gegensatz zu C ist Pascal in Bezug auf Schlüsselwörter, Bezeichner von Variablen, Funktionen oder Prozeduren case-insensitive.
Semikolon
Das Semikolon wird nicht wie in C als Befehlsabschluss interpretiert, sondern als Trennzeichen zwischen Anweisungen. Vor einem end oder until kann es somit weggelassen werden. Vor einem else darf es in der Regel gar nicht stehen, da sonst der if-Zweig als abgeschlossen angesehen werden würde. Ein Fall, bei dem es vor dem else steht (und stehen muss), ist am Ende einer case-Auflistung.
Delimiter
Für Zeichenketten-Literale und Zeichen-Literale wird dasselbe Begrenzungszeichen (Delimiter), nämlich der Apostroph, verwendet.
Zuweisungen
Zuweisungen an Variablen werden durch die Sequenz := definiert, das Gleichheitszeichen allein dient dem Gleichheitsvergleich und der Definition von Konstanten. Damit werden „mathematisch falsche“ Ausdrücke, z. B. i = i + 1, vermieden. Verkürzte Schreibweisen für Zuweisungen wie i++ statt i := i + 1 oder i *= 2 statt i := 2 * i existieren in Pascal nicht. Für i++ sieht Pascal die intrinsische Funktion inc(i) und für i-- die Funktion dec(i) vor, die bei einigen Dialekten mächtiger sind als ein unärer Postfix- oder Präfix-Operator.
Operatoren
Pascal verwendet die Operatoren and, or, not, div (nur für Integer, bei Real ist es /), mod und <> anstatt der C-Operatoren &&, ||, !, /, % und !=. Die „Short Circuit“-Funktionalität von && und || in C (sobald das Ergebnis feststeht, nämlich wenn der linke Teil beim and FALSE beziehungsweise beim or TRUE ist, wird der rechte nicht mehr ausgewertet) schloss Niklaus Wirth explizit aus, da compilerinterne Optimierungsvorgänge die Reihenfolge der Auswertung verändern können. Spätere Pascalversionen implementierten eine lokal oder global zuschaltbare „Short Circuit“-Funktionalität, so dass der Programmierer im Einzelfall entscheiden kann, welche Art der Auswertung er wünscht. In Standard-Pascal gibt es keine Bitoperationen für Integer (wie &, |, ^ und ~ von C), aber stattdessen den Typ set of (mit den Operatoren *, + und - für Durchschnitt, Vereinigung und Mengendifferenz).
Strenge Typentrennung
Pascal betreibt strenge Typentrennung, sodass unter anderem der Typ char nicht austauschbar ist mit integer. Die Umwandlung muss mit den Funktionen ord() und chr() durchgeführt werden. Dadurch werden verdeckte (oder ungewollte) Umwandlungen vermieden; z. B. führt die Anweisung i := 7/2 (mit i als integer) zu einer Fehlermeldung, weil der Operator / ein Operator ist, der real als Ergebnis hat. Spätere Pascalversionen (z. B. Turbo Pascal) führten zusätzlich „explizite“ Typumwandlungen, sog. „type casts“, ein, so dass z. B. mit longint(i) der Wertebereich der Ganzzahlvariablen i erweitert oder eingeschränkt werden konnte. In Standard-Pascal musste dafür ein Umweg über (den Missbrauch von) Variantenrecords (union in C) genommen werden.
Zeigerarithmetik
In Pascal existiert keine Zeigerarithmetik, Iterationen über Arrays können nur über den Index erfolgen.

## Standards

Wirths erste Veröffentlichung der neuen Programmiersprache erschien 1971, eine überarbeitete und erweiterte Version dieses Berichts 1973. Ein weiteres Jahr später folgte ein mit Kathleen Jensen geschriebener Bericht, den Wirth als ultimative Referenz für Programmierer und Implementoren bezeichnete; das darin beschriebene Pascal nannte er Standard Pascal.
Es gibt drei Standards, die sich auf Pascal beziehen:

Standard Pascal: ANSI/IEEE770X3.97-1993 oder ISO 7185:1990;
Extended Pascal: ANSI/IEEE770X3.160-1989 oder ISO/IEC 10206:1991;
sowie einen Entwurf zu „Object-Oriented Extensions to Pascal“.
Allerdings sind – wie bei den meisten anderen Programmiersprachen auch – nur die wenigsten Compiler zu diesen Standards vollständig kompatibel. Diese Tatsache verleitete Scott A. Moore zu der bissigen Bemerkung „Pascal is, unfortunately, very much a great improvement on its successors“ („Pascal ist leider so ziemlich eine große Verbesserung seiner Nachfolger“ – damals bereits ein geflügelter Satz).
Selbst großen Compilern wie Delphi oder Free Pascal fehlen bis heute einige Elemente aus Standard Pascal, während Extended Pascal von kaum einem unterstützt wird. Lediglich Prospero Pascal ist vollständig kompatibel zu Extended Pascal, während auch GNU Pascal vollständige Kompatibilität anstrebt.

## Pascal und Mac OS

Historisch interessant ist, dass Apple bei der Entwicklung des Betriebssystems und der darauf laufenden Applikationen des Apple-II-Nachfolgers Macintosh auf Pascal gesetzt hatte. Hierzu wurde bei Apple in einem von Larry Tesler geführten Team unter Konsultation von Niklaus Wirth eine eigene Object-Pascal-Variante entwickelt, die von einer früheren objektorientierten Pascal-Variante namens Clascal abgeleitet wurde, die schon auf Lisa verfügbar war. Object Pascal war für die Unterstützung von MacApp, einem Macintosh Application Framework erforderlich, das heute unter den Begriff Klassenbibliothek fallen würde. Object Pascal wurde 1986 fertiggestellt. Apple beendete den Fokus auf Object Pascal mit der Umstellung von Motorola 68K-CPUs auf PowerPC-CPUs von IBM im Jahr 1994 mit der Betriebssystem-Version Mac OS 7.5. Zwecks Rückwärtskompatibilität blieb die Übergabe von Parametern für Betriebssystemaufrufe bis Mac OS 9.2.2 (veröffentlicht im Dezember 2001) an Pascal-Konventionen angelehnt.

## Implementierungen (Compiler, Interpreter und IDEs)

Pascal hatte von Anfang an im universitären Bereich sehr großen Erfolg, was sich u. a. auch in der Programmiersprache Ada niederschlug, die sehr stark an der Syntax von Pascal angelehnt ist. Ebenfalls fand es weite Verbreitung, auch im kommerziellen Bereich, mit den Produkten der Firma Borland Turbo Pascal, Borland Pascal und Delphi. Diese Versionen sind durch starke Erweiterungen des ursprünglichen Sprachstandards gekennzeichnet. Die Objektorientierung wurde dabei mit Version 5.5 eingeführt.

### Freie Implementierungen

UCSD Pascal
Eine Pascal-Implementierung der University of California, San Diego (UCSD).
Free Pascal
Ein unter der GNU Lesser General Public License stehendes Open-Source-Projekt, das sich zum Ziel gesetzt hat, einen freien 32/64-Bit-Compiler zu erzeugen, der 100-prozentig kompatibel zu Turbo Pascal und Delphi sein soll und mittlerweile eine leichte Portierung von Pascal-Programmen auf fast alle gängigen Betriebssysteme und Hardwareplattformen ermöglicht.
GNU Pascal (GPC)
Ein Pascal-Compiler, der als Frontend zur GNU Compiler Collection konzipiert ist. Er ist kein Bestandteil der GCC selbst, ist aber durch die Verwendung der GCC plattformunabhängig. GPC wird nicht mehr weiterentwickelt.
Virtual Pascal
Diese inzwischen freie Implementierung eines Borland-kompatiblen Pascal-Compilers für OS/2 wurde auch auf andere Plattformen portiert, wird aber seit 2005 nicht mehr weiterentwickelt.

### Integrierte Entwicklungsumgebungen

Lazarus
Eine Entwicklungsumgebung für Free Pascal, die auch verschiedene Komponenten zur Verfügung stellt. Die IDE ist sehr Delphi-ähnlich gestaltet und verwendet unter Unix das GTK+ als Grafik-Toolkit, unter Windows (win32/win64/wince) setzt es auf der nativen API auf, und auf Apple-Betriebssystemen kann wahlweise die native Carbon-API oder das X-Window-System verwendet werden. Darüber hinaus unterstützt Lazarus Cross Compiling, so dass auch Software für weitere Plattformen wie Windows CE, OS/2, Palm OS oder Nintendo DS entwickelt werden kann.
Dev-Pascal
Eine unter Windows laufende IDE, die auf Free Pascal oder GNU-Pascal als Compiler aufsetzen kann. Sie wird nicht mehr weiterentwickelt.
Delphi
Nachfolger von Borland Pascal, für Windows.
Kyan Pascal
Eine 1986 von Kyan Software veröffentlichte, auf dem Heimcomputer Apple II lauffähige Pascal-Entwicklungsumgebung inklusive Editor, Assembler, Makroassembler und Programmierkurs.
Kyan Pascal 128
Eine 1987 von Kyan Software weiterentwickelte Version für die Heimcomputer Commodore 128 und Atari 800.
Pascal C128
Eine vom Markt+Technik Verlag veröffentlichte, auf dem Commodore 128 im C128-Modus lauffähige Pascal-Entwicklungsumgebung mit Compiler, Editor und Linker.
Profi-Pascal Plus
Eine 1987 von Data Becker veröffentlichte, auf dem Commodore 128 im C128-Modus lauffähige Pascal-Entwicklungsumgebung mit Compiler, Editor und Linker.
QuickPascal
Eine 1989 von Microsoft veröffentlichte Pascal-Entwicklungsumgebung für MS-DOS.
Super Pascal 128
Eine 1986 von Abacus Software veröffentlichte, auf dem Commodore 128 im C128-Modus lauffähige Pascal-Entwicklungsumgebung inklusive Editor, Assembler und Dienstprogrammpaket.
Turbo Pascal
(Später Borland Pascal) Kommerziell erfolgreichste Pascal-IDE für MS-DOS.
HP 64800 Pascal compiler package
Beispielsweise bei der Entwicklung von Donkey Kong für ColecoVision.

## Geschichte

Pascal wurde nach dem französischen Mathematiker Blaise Pascal benannt. Die Entwicklung der Programmiersprache Algol (bis 1958) wie auch die ihrer Nachfolger war Produkt von Entwicklungskomitees. Niklaus Wirth war maßgeblich an der Erstellung des Abkömmlings Algol W beteiligt, das in Zürich entwickelt und 1966 fertiggestellt wurde. Er berichtete später von den Nachteilen einer gemeinsamen Entwicklung. Konsens innerhalb des Komitees musste mühsam erarbeitet werden, auch erschienen dem praktisch denkenden Wirth, der sich nicht nur als Wissenschaftler, sondern auch als Ingenieur sah, einige Entwicklungsziele mancher Kollegen als übertrieben und unumsetzbar.
Im Jahr 1968 erhielt Wirth eine Professur an der ETH Zürich, wo er neben seiner Lehrtätigkeit Zeit fand, mit der Entwicklung einer neuen Sprache zu beginnen. Er arbeitete diesmal alleine und konnte Pascal im Laufe des Jahres 1969 fertigstellen. Einer der Gründe für die Neuentwicklung war laut Wirth das Fehlen einer für den universitären Unterricht geeigneten Sprache. Weder das zu unwissenschaftlich angelegte Fortran noch das für die praktische Ingenieurstätigkeit ungeeignete Algol konnten Wirths Ansprüchen genügen. Über den Programmierunterricht hinaus sollte Pascal aber ebenso in der Wirtschaft, der Forschung und bei der Entwicklung von Compilern und Betriebssystemen einsetzbar sein.
Weitere Ziele für die Entwicklung von Pascal bestanden daher darin, ein zuverlässiges und effizientes Werkzeug für das Schreiben großer Programme bereitzustellen und den "Canyon" zwischen wissenschaftlicher und kommerzieller Entwicklung, wie sie durch die damals verbreiteten Sprachen Fortran und COBOL verkörpert wurden, mit einer universellen Programmiersprache zu überbrücken.

Nachdem Wirth die Sprache 1969 fertiggestellt hatte, folgte ein Jahr später die Entwicklung des ersten Pascal-Compilers. Dieser wurde für Computer der CDC 6000 Serie geschrieben und ging bereits 1970 in Betrieb. Im Jahr 1971 veröffentlichte Wirth die nur 28 Seiten lange Beschreibung der Sprache, 1972 konnten Lehrende Pascal erstmals für einführende Programmierkurse verwenden. 1973 folgte eine überarbeitete und 54 Seiten lange Überarbeitung der Spezifikation.

## Kritik

Da die Sprache als Lehrsprache konzipiert war, wies das Standard-Pascal einige Merkmale auf, die den kommerziellen Einsatz erschwerten: Das Konzept für Dateizugriffe („file I/O“) war nicht mächtig, die Laufzeitbibliothek wenig umfangreich, und Zeichenketten konnten nur über Umwege (packed array) direkt im Code verwendet werden. Das führte dazu, dass praktisch jede kommerzielle Implementierung hierzu eigene Lösungen anbot, was zunächst (ähnlich wie die Diversifizierung bei C) zu eigenen Pascal-Dialekten und damit zu Kompatibilitätsproblemen führte. Mit der monopolartigen Dominanz der Turbo-Pascal-Produkte von Borland verschwanden diese Unterschiede fast vollständig.
Ein anderer wesentlicher Nachteil war, dass eine Modularisierung im Sinne getrennter Kompilierung nicht vorgesehen war – was mit der Weiterentwicklung Modula-2 geändert wurde. Plattformspezifische Implementierungen sahen dafür eigene Lösungen vor (z. B. die Units von Turbo-Pascal, fortgeführt in äquivalenten Unit-Implementierungen in Free Pascal und Delphi, oder später die Module in ANSI/ISO Extended Pascal).

## Aufstieg in den 1970er und 1980er Jahren

In den zwei Jahrzehnten nach 1975 gewann Pascal mehr Einfluss und wurde zu einer dominierenden Programmiersprache auf wichtigen Plattformen wie Apple II, Apple III, Apple Lisa, Commodore-Systemen, Z-80-basierten Maschinen und IBM PC. Dies ist unter anderem der Entwicklung von UCSD-Pascal und Turbo Pascal zu verdanken.
Trotz der ursprünglichen Kritik entwickelte sich Pascal weiter, so dass die Mehrzahl der früheren Probleme in kommerziellen Implementierungen behoben wurden. Allerdings waren die Lösungen meist zwischen den Compilern inkompatibel. In den 1990er Jahren vereinfachte sich die Situation allerdings dadurch, dass sich die Varianten graduell zwei Hauptkategorien, ISO-Pascal und Borland-ähnlichem Pascal, annäherten.
Einige der verbleibenden Schwierigkeiten, die durch die Unterschiede in den Pascal-Implementierungen entstanden, wurden später teilweise in Free Pascal gelöst, das verschiedene Dialekte mit Modus-Direktiven unterstützt.

## Weiterentwicklungen

Pascal-XSC Pascal Dialekt mit „Language eXtensions for Scientific Computation“
Oberon, Oberon-2
POW! – basiert auf Oberon und Pascal
Component Pascal – Weiterentwicklung von Oberon-2
Embarcadero Delphi – Objektorientiertes Pascal als Weiterentwicklung von Borland Pascal.
Free Pascal – eine zu Delphi weitgehend kompatible freie Implementierung. Dazu gibt es die Delphi ähnliche IDE Lazarus.
RemObjects Chrome, Oxygene, nun lizenziert als Delphi Prism von CodeGear
PocketStudio
Pascal Script
StatPascal
Modula-2
Concurrent Pascal – Pascal für nebenläufige Programme
HP PPL, eine von HP entwickelte Pascal-Variante für Computeralgebra
