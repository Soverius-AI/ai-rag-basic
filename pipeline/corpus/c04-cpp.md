---
url: https://de.wikipedia.org/wiki/C%2B%2B
---

# C++

## Überblick

C++ ist eine von der ISO genormte Programmiersprache. Sie wurde ab 1979 von Bjarne Stroustrup bei AT&T als Erweiterung der Programmiersprache C entwickelt. C++ ermöglicht sowohl die effiziente und maschinennahe Programmierung als auch eine Programmierung auf hohem Abstraktionsniveau. Der Standard definiert auch eine Standardbibliothek, zu der verschiedene Implementierungen existieren.

## Einsatzgebiete

C++ wird sowohl in der Systemprogrammierung als auch in der Anwendungsprogrammierung eingesetzt und gehört in beiden Bereichen zu den verbreitetsten Programmiersprachen.

### Systemprogrammierung

Typische Anwendungsfelder in der Systemprogrammierung sind Betriebssysteme, eingebettete Systeme, virtuelle Maschinen, Treiber und Signalprozessoren. C++ nimmt hier oft den Platz ein, der früher ausschließlich Assemblersprachen und der Programmiersprache C vorbehalten war.
Zum Beispiel werden bei der SAP SE sowohl der ABAP Kernel als auch diverse Komponenten der HANA Datenbank in C++ entwickelt.

### Anwendungsprogrammierung

Bei der Anwendungsprogrammierung kommt C++ vor allem dort zum Einsatz, wo hohe Anforderungen an die Effizienz gestellt werden, um durch technische Rahmenbedingungen vorgegebene Leistungsgrenzen möglichst gut auszunutzen. Ab dem Jahr 2000 wurde C++ aus der Domäne der Anwendungsprogrammierung von den Sprachen Java und C# zurückgedrängt.

## Eigenschaften

### Sprachdesign

Den Kern der Sprache bilden nur etwa 60 Schlüsselwörter, einige wenige werden jedoch zum Teil mehrfach belegt und können in unterschiedlichen Kontexten verwendet werden (z. B. static, default).
Ähnlich wie auch in der Ursprungssprache C stellt die C++-Standardbibliothek eine umfangreiche Sammlung an Strukturen und Algorithmen zur Verfügung, die in der eigentlichen Kernsprache selbst nicht enthalten sind. Dies beinhaltet unter anderem verschiedene Datencontainer (Arrays, Vektoren, Listen, Map, Sets, …), Verbindung zum Betriebssystem (iostream, fopen, exit, …), Speicherverwaltung (Allocators, Smart Pointer), als auch Schnittstellen zur Entwicklung nebenläufiger Anwendungen.
C++ legt einen Schwerpunkt auf die Sprachmittel zur Entwicklung von Bibliotheken. Dadurch favorisiert es verallgemeinerte Mechanismen für typische Problemstellungen und besitzt kaum in die Sprache integrierte Einzellösungen.
Eine der Stärken von C++ ist die Kombinierbarkeit von effizienter, maschinennaher Programmierung mit mächtigen Sprachmitteln, die einfache bis komplexe Implementierungsdetails zusammenfassen und weitgehend hinter abstrakten Befehlsfolgen verbergen. Dabei kommt vor allem die Template-Metaprogrammierung zum Zuge: Eine Technik, die eine nahezu kompromisslose Verbindung von Effizienz und Abstraktion erlaubt.
Einige Design-Entscheidungen werden allerdings auch häufig kritisiert:

#### Ressourcenverwaltung

C++ hat keine Garbage Collection. Bis Version 20 gab es minimale Funktionalitäten für eine Garbage-Collection. Es gibt Bestrebungen, eine funktionale Garbage-Collection durch Bibliotheken oder durch Aufnahme in den Sprachstandard zu ermöglichen. Siehe auch Boehm-Speicherbereinigung. Mit Version 23 wurde die im Code implementierte Garbage Collection vollständig entfernt.
Es ist möglich, die Speicherverwaltung von C (malloc/realloc/free) zu verwenden; zur Implementierung von Low-Level-Funktionen in Bibliotheken wie der C++-Standardbibliothek ist dies zum Zugriff auf C Bibliotheksfunktionen notwendig. In allgemeinem C++-Code wird hiervon jedoch dringend abgeraten.
Stattdessen ist es dort üblich, die Speicherverwaltung von der C++-Standardbibliothek übernehmen zu lassen, indem man die angebotenen Containerklassen verwendet.
Andere Ressourcen, z. B. Dateihandles oder Netzwerksockets werden in C++ üblicherweise in eigenen Klassen mit dem Prinzip RAII verwaltet, um das automatische Aufräumen nach der Verwendung sicherzustellen.
Dies ist konzeptionell in anderen Programmiersprachen oft mit der Implementierung spezieller Basisklassen/Schnittstellen gestaltet – wie z. B. „AutoCloseable“ in Java oder „IDisposable“ in C#.
In anderen Programmiersprachen benötigen diese nicht verwalteten Ressourcen oft ein spezielles Handling (z. B. „using“-Schlüsselwort in C#), um die Lebenszeit dieser Objekte ausnahmesicher in Verbindung mit dem Garbage Collector zu verwalten.
Die RAII-basierten Implementierungen in C++ sind konzeptbedingt nicht anfällig bezüglich dieser Probleme, da Speicher in C++ keinen Sonderstatus als Ressource hat. Eine korrekte Implementierung der Objektlebenszeit garantiert hier die Freigabe aller Ressourcen.
Für Verweise auf Objekte werden üblicherweise Referenzen verwendet, solange der Verweis das Objekt nicht besitzen soll – z. B. als Parameter bei Funktionsaufrufen.
Um den Besitz von dynamisch allokierten Objekten zu verwalten, werden üblicherweise Smart Pointer eingesetzt, welche die Destruktion und Speicherfreigabe übernehmen.
Die Standardbibliothek unterscheidet hier strikt den Besitz. Während beim unique_ptr nur dieser Zeiger den Speicher besitzt, kann der Besitz des Speichers beim shared_ptr zwischen mehreren Zeigerinstanzen geteilt werden.
Technisch realisiert ist dies beim shared_ptr meist mit Reference counting.

#### Unvollständige Objektorientierung

##### Sichtbarkeit privater Elemente

In C++ gehören private Eigenschaften (Variablen und Methoden) normalerweise mit zur Schnittstelle, die in der Header-Datei veröffentlicht ist. Dadurch entstehen zur Compilezeit und zur Laufzeit Abhängigkeiten der Objekte zu den Stellen, die sie verwenden.
Diese Abhängigkeiten können durch bestimmte Konstruktionen, wie dem pimpl-Idiom (pointer to implementation idiom), vermieden werden. Dabei werden die privaten Felder der Klasse (example_class) in eine private, vorwärts-deklarierte Hilfsklasse verschoben, und ein Zeiger auf ein Objekt dieser Hilfsklasse (example_class::impl * impl_ptr) bleibt in der eigentlichen Klasse. Die Definition der implementierenden Klasse findet bei der Implementierung der öffentlichen Klasse statt und ist damit für den Verwender der Klasse (der nur die Header-Datei kennt) unsichtbar. Dadurch, dass die Hilfsklasse nur durch einen Zeiger referenziert wird, bleiben alle Quelltextänderungen an privaten Feldern transparent und die Binärkompatibilität wird erhalten.

##### Unvollständige Kapselung

In C++ sind die Speicherbereiche der einzelnen Objekte zur Laufzeit nicht vor (absichtlichen oder versehentlichen) gegenseitigen Änderungen geschützt.

#### Undefiniertes Verhalten

Das Verhalten von einigen Sprachkonstrukten ist nicht definiert. Dies bedeutet, dass der Standard weder vorgibt noch empfiehlt, was in einem solchen Fall passiert. Die Auswirkungen reichen von Implementierungsabhängigkeit (d. h. je nach Zielrechner und Compiler kann sich das Konstrukt unterschiedlich verhalten) über unsinnige Ergebnisse oder Programmabstürze bis hin zu Sicherheitslücken. Einige dieser Freiheiten des Compilers lassen zusätzliche Optimierungen des Codes zu.
Es kommt zu unterschiedlichem Verhalten bei

verschiedenen Compilern
verschiedenen Compiler-Versionen
verschiedener Architektur (ARM, x86, x64)
verschiedenen Optimierungseinstellungen (Debug, Release, Optimierung)
ausgewählter Befehlssatz, Aufrufkonventionen, u. v. a. m.
Quellcode mit Codepassagen mit undefiniertem Verhalten kann nach der Kompilierung unerwartetes und absurd erscheinenden Verhalten zeigen. So werden zu spät durchgeführte Überprüfungen wegoptimiert oder Schleifen, die auf einen ungültigen Index eines Arrays zugreifen, durch leere Endlosschleifen ersetzt.
Wichtig für das Verständnis von undefiniertem Verhalten ist insbesondere, dass niemals nur eine einzelne Operation ungültig ist, sondern das gesamte Programm ungültig wird und kein wohlgeformtes C++ mehr darstellt. Der Grund ist, dass manche Arten von „undefiniertem Verhalten“ Auswirkungen auf ganz andere, auch in sich korrekte, Programmteile haben und deren Verhalten beeinflussen können, beispielsweise bei Pufferüberläufen oder der unbeabsichtigten Änderung von Prozessor-Flags, die durch eine ungültige arithmetische Operation verursacht wurde und die nachfolgenden Berechnungen beeinflussen kann.
Beispiele für undefiniertes Verhalten:

Überlauf von vorzeichenbehafteten Ganzzahlen (auch z. B. bei Umwandlung von unsigned int nach int)
Nullzeiger-Dereferenzierungen
Arrayzugriffe mit ungültigem Index
Schiebeoperationen mit einer Schiebeweite, die negativ oder größergleich der Zahl der Bits des zu schiebenden Typs ist
Division durch null mit integralen Datentypen
Weglassen des return-Statements in Funktionen mit Rückgabewert (die Hauptfunktion main bildet die einzige Ausnahme)
Ein Nebeneffekt ändert eine Variable, die mehrmals in dem Ausdruck (v[i] = i++;) oder in der Argumentliste (f(i, i++);) vorkommt (die Auswertungsreihenfolge von Teilausdrücken und Funktionsargumenten ist nicht festgelegt)
Einerseits ist das hieraus resultierende nichtdeterministische Laufzeitverhalten, insbesondere bei kleinen Änderungen der Plattform, mindestens als Risiko, in der Praxis oft aber als klarer Nachteil einzustufen. Andererseits werden hierdurch schnellere Programme ermöglicht, da Gültigkeitsüberprüfungen weggelassen werden können und der Compiler zudem oft Programmteile stärker optimieren kann, indem er Randfälle als per Definition ausgeschlossen ignoriert.
Ein oft nicht wahrgenommener Vorteil ist darüber hinaus, dass dadurch, dass undefiniertes Verhalten praktisch nur in äußerst fragwürdigen Konstrukten auftritt, die aber nicht zwingend während des Kompilierens feststellbar sind, unsemantischer oder anderweitig suboptimaler Code gewissermaßen verboten wird.
Beispielsweise besteht eine illegale Art zu prüfen, ob die Summe zweier positiver Ganzzahlen

        a

    {\displaystyle a}

 und

        b

    {\displaystyle b}

 vom Typ ‚int‘ verlustfrei wieder in einem ‚int‘ abgebildet werden kann, daraus, zu schauen, ob ihre Summe größer 0 ist (bei Überlauf entsteht auf den meisten Computern durch die Zweierkomplement-Arithmetik eine negative Zahl). Eine derartige Überprüfung ist allerdings aus mathematischer Sicht nicht besonders sinnvoll. Eine bessere (semantischere) Herangehensweise ist hier, die eigentliche Frage, ob

        a
        +
        b
        ≤

          I
          N
          T
          _
          M
          A
          X

    {\displaystyle a+b\leq \mathrm {INT\_MAX} }

, wobei

          I
          N
          T
          _
          M
          A
          X

    {\displaystyle \mathrm {INT\_MAX} }

 die größte in einem ‚int‘ darstellbare Zahl ist, nach der mathematisch validen Umformung zu

        a
        ≤

          I
          N
          T
          _
          M
          A
          X

        −
        b

    {\displaystyle a\leq \mathrm {INT\_MAX} -b}

 zu verwenden.

### Kompatibilität mit C

Um an die Verbreitung der Programmiersprache C anzuknüpfen, wurde C++ als Erweiterung von C gemäß dem damaligen Stand von 1990 (ISO/IEC 9899:1990, auch kurz C90 genannt) entworfen.
Die Kompatibilität mit C zwingt C++ zur Fortführung einiger dadurch übernommener Nachteile. Dazu zählt die teilweise schwer verständliche C-Syntax, der als überholt geltende Präprozessor sowie verschiedene von der jeweiligen Plattform abhängige Details der Sprache, die die Portierung von C++-Programmen zwischen unterschiedlichen Rechnertypen, Betriebssystemen und Compilern erschweren.
Einige C-Sprachkonstrukte haben in C++ eine leicht abgewandelte Bedeutung oder Syntax, so dass manche C-Programme erst angepasst werden müssen, um sich als C++-Programm übersetzen zu lassen. Weitere Änderungen an C fanden in den Jahren 1999 (ISO/IEC 9899:1999, aka C99) und 2011 (ISO/IEC 9899:2011, aka C11) also nach der ersten Normung von C++ statt, so dass dort eingeflossene Änderungen nicht in C++98 berücksichtigt werden konnten. In die C++-Revision von 2011 wurde ein Teil der Neuerungen von C99 übernommen; auf der anderen Seite wurden dem C-Standard neue Features hinzugefügt, die auch mit C++11 nicht kompatibel sind.

### Sprachmerkmale im Detail

C++ basiert auf der Programmiersprache C, wie in ISO/IEC 9899:1990 beschrieben. Zusätzlich zu den in C vorhandenen Möglichkeiten bietet C++ weitere Datentypen sowie neuartige Typumwandlungsmöglichkeiten, Klassen mit Mehrfachvererbung und virtuellen Funktionen, Ausnahmebehandlung, Templates (Schablonen), Namensräume, Inline-Funktionen, Überladen von Operatoren und Funktionsnamen, Referenzen, Operatoren zur Verwaltung des dynamischen Speichers und mit der C++-Standardbibliothek eine erweiterte Bibliothek.

### Programmbeispiel

Der folgende Quelltext ist ein einfaches C++-Programm, das den Text „Hallo Welt!“ in den Standardausgabestrom, üblicherweise das Terminal, schreibt:

Der Präprozessorbefehl oder auch Präprozessordirektive genannt #include bindet Header-Dateien ein, die typischerweise Deklarationen von Variablen, Typen und Funktionen enthalten. Im Gegensatz zu C besitzen Header der C++-Standardbibliothek keine Dateiendung.
Der Header <iostream> ist Teil der C++-Standardbibliothek und deklariert unter anderem den Standardeingabestrom std::cin und die Standardausgabeströme std::cout und std::cerr für die aus der C-Standardbibliothek bekannten Objekte stdin, stdout und stderr.
Bei main() handelt es sich um die Funktion, die den Einsprungpunkt jedes C++-Programms darstellt. Das Programm wird ausgeführt, indem die Funktion main() aufgerufen wird, wobei diese ihrerseits andere Funktionen aufrufen kann. Die Funktion main() selbst darf allerdings in einem C++-Programm nicht rekursiv aufgerufen werden.
Der Standard verlangt von Implementierungen, zwei Signaturen für die Funktion main() zu unterstützen: Eine ohne Funktionsparameter wie im Beispiel, und eine, die einen Integer und einen Zeiger auf Zeiger auf char entgegennimmt, um auf Kommandozeilenparameter zugreifen zu können (was nicht in allen Programmen vonnöten ist): int main(int argc, char **argv). Implementierungen dürfen darüber hinaus weitere Signaturen für main() unterstützen, alle müssen jedoch den Rückgabetyp int (Integer) besitzen, also eine Ganzzahl zurückgeben. Würde main() keinen Wert zurückgeben, schreibt der C++-Standard der Implementierung vor, return 0; anzunehmen. main() gibt also 0 zurück, wenn kein anderslautendes return-Statement in ihr vorhanden ist.
std::cout ist eine Instanz der Klasse std::basic_ostream<char>, die sich wie die gesamte C++-Standardbibliothek im Namensraum std befindet. Bezeichner in Namensräumen werden mit dem Bereichsoperator (::) angesprochen.
Die Ausgabe des Zeichenkettenliterals "Hallo Welt" übernimmt der Operator <<. Zeichenkettenliterale sind in C++ vom Typ Array aus N konstanten chars (char const[N]), wobei N gleich der Länge der Zeichenkette + 1 für die abschließende Nullterminierung ist. Da die Standardtypumwandlungen von C++ die als pointer-to-array decay bekannte implizite Umwandlung eines Arrays T[N] in einen Pointer T* vorsehen, und damit char const[N] in einen char const* zerfällt, passt der überladene Operator template<class traits> basic_ostream<char,traits>& operator<<(std::basic_ostream<char,traits>&, char const *); aus <ostream> und wird entsprechend aufgerufen (operator<<( std::cout, "Hallo Welt!" );) und gibt die Zeichenkette aus. Durch den Ausgabemanipulator std::endl wird ein Zeilenendezeichen ausgegeben.
Bei return 0 wird dem aufrufenden Programm über das Betriebssystem mitgeteilt, dass die Ausführung des Programms erfolgreich war.

### Dateiendungen

Typische Dateiendungen sind .C, .cc, .cpp, .cxx, .c++, .h, .hh, .hpp, .hxx, .h++, .ipp, .tpp, .ixx.

## Umsetzung

### C++-Compiler

Die Implementierung eines C++-Compilers gilt als aufwendig. Nach der Fertigstellung der Sprachnorm 1998 dauerte es mehrere Jahre, bis die Sprache von C++-Compilern weitestgehend unterstützt wurde.
Zu den verbreitetsten C++-Compilern gehören:

Visual C++
Der in Microsoft Visual C++ enthaltene Compiler ist der am weitesten verbreitete für das Betriebssystem Windows. Die Community-Edition stellt Microsoft kostenlos zur Verfügung.
GCC
Der g++ ist die C++-Ausprägung der GNU Compiler Collection (GCC); g++ ist quelloffen und frei verfügbar. Der g++ unterstützt eine Vielzahl von Betriebssystemen (darunter Unix, Linux, macOS, Windows und AmigaOS) und Prozessorplattformen. GNU C++ existiert seit 1987 und ist somit einer der ältesten C++-Compiler.
Clang
Clang, ein C++ Compiler-Frontend für plattformübergreifende Compilerinfrastruktur LLVM, die unter anderem auch in der Apple eigenen integrierten Entwicklungsumgebung Xcode verwendet wird. Im Clang/LLVM Ecosystem sind auch mehrere Tools zur statischen Codeanalyse entstanden wie z. B. „clang-tidy“ und „clang-format“.
Intel C++ Compiler
Der Intel C++ Compiler verwendet ebenfalls das unten erwähnte C++-Front-End von EDG. Der Intel C++ Compiler erzeugt Maschinencode für die Intel-Prozessoren unter den Betriebssystemen Windows, Linux und macOS. Da die mit dem Intel C++ Compiler erzeugten Programme den Befehlssatz der Intel-Prozessoren besonders gut ausnutzen, erzeugen sie besonders effiziente Programme für diese Plattform. (Kompilate des Intel-Compilers laufen ebenfalls auf AMD-Chips meist schneller als Kompilate der alternativen Compiler, entsprechende Optimierungsflags sperrt Intel jedoch, wobei sich die Sperre aufheben lässt.) Der Intel C++ Compiler nutzt im Unterbau wesentliche Teile des g++ und ersetzt und erweitert Teile der Code-Optimierung und Code-Generierung.
Oracle Developer Studio
Im Rahmen der IDE Oracle Developer Studio stellt Oracle eine C++ Compiler mit Unterstützung der Standards C++ 2011 und C++ 2014 zur Verfügung.
Comeau C++
Der Comeau C++. Das sogenannte „Front-End“ des Compilers, also der Teil, der die Analyse-Phase implementiert, wurde von der Firma Edison Design Group (EDG) entwickelt, die sich auf die Entwicklung von Compiler-Front-Ends spezialisiert hat und deren C++-Front-End auch in vielen anderen kommerziellen C++-Compilern integriert ist. Der Comeau-Compiler kann auch über das Internet ausprobiert werden.
Turbo C++
Mit Turbo C++/C++ Builder steht ein weiterer Compiler zur Verfügung.

## Integrierte Entwicklungsumgebungen

### Freie Entwicklungsumgebungen

Anjuta
Arduino
CodeLite
Code::Blocks
Eclipse
Geany
GNAT Programming Studio
GNU Emacs (Mit C++ Erweiterungen)
KDevelop
MonoDevelop
NetBeans IDE
Orwell Dev-C++
Qt Creator
TOPCASED
Ultimate++
WideStudio
Visual Studio Code (Mit C++ Erweiterung)

### Proprietäre Entwicklungsumgebungen

C++Builder
CLion (basiert auf IntelliJ IDEA)
CodeWarrior
Conzept 16 (Programmiersprache C++ ähnlich)
Cubic IDE
ICON-L
Kylix
Visual Studio
Xcode

## Vergleich mit anderen Sprachen

### Objective-C

C++ war nicht der einzige Ansatz, die Programmiersprache C um Eigenschaften zu erweitern, die das objektorientierte Programmieren vereinfachen. In den 1980er Jahren entstand die Programmiersprache Objective-C, die sich aber im Gegensatz zu C++ syntaktisch wie von ihrem Funktionsprinzip an Smalltalk und nicht an Simula orientierte. Die Syntax von Objective-C (C beeinflusst durch Smalltalk) unterscheidet sich erheblich von C++ (C beeinflusst von Simula mit ganz eigenen syntaktischen Erweiterungen). Ende der 1980er Jahre wurde Objective-C erstmals kommerziell in NeXTStep verwendet, in dem es einen zentralen Bestandteil darstellt. Heutzutage findet es in der Programmierschnittstelle OpenStep (bzw. Cocoa und GNUstep) sowie in den Betriebssystemen iOS und macOS ein wichtiges Einsatzgebiet.

### Java und C#

Die Programmiersprachen Java und C# verfügen über eine ähnliche, ebenfalls an C angelehnte Syntax wie C++, sind auch objektorientiert und unterstützen seit einiger Zeit Typparameter. Trotz äußerlicher Ähnlichkeiten unterscheiden sie sich aber konzeptionell von C++ zum Teil beträchtlich.
Generische Techniken ergänzen die objektorientierte Programmierung um Typparameter und erhöhen so die Wiederverwertbarkeit einmal kodierter Algorithmen. Die generischen Java-Erweiterungen sind jedoch lediglich auf Klassen, nicht aber auf primitive Typen oder Datenkonstanten anwendbar. Demgegenüber beziehen die generischen Spracherweiterungen von C# auch die primitiven Typen mit ein. Dabei handelt es sich allerdings um eine Erweiterung für Generik zur Laufzeit, die die auf Kompilationszeit zugeschnittenen C++-Templates zwar sinnvoll ergänzen, nicht aber ersetzen können.
Gerade die generische Programmierung macht C++ zu einem mächtigen Programmierwerkzeug. Während die objektorientierte Programmierung in Java und C# nach wie vor den zentralen Abstraktionsmechanismus darstellt, ist diese Art der Programmierung in C++ rückläufig. So werden tiefe Klassenhierarchien vermieden, und zu Gunsten der Effizienz und der Minimierung des Ressourcenverbrauchs verzichtet man in vielen Fällen auf Polymorphie, einen der fundamentalen Bestandteile der objektorientierten Programmierung.

## Entstehung und Weiterentwicklung

### Entstehungsgeschichte

Auf die Idee für eine neue Programmiersprache kam Stroustrup durch Erfahrungen mit der Programmiersprache Simula während seiner Doktorarbeit an der Cambridge University. Simula erschien zwar geeignet für den Einsatz in großen Software-Projekten, die Struktur der Sprache erschwerte aber die Erstellung hocheffizienter Programme. Demgegenüber ließen sich effiziente Programme zwar mit der Sprache BCPL schreiben, für große Projekte war BCPL aber wiederum ungeeignet.
Mit den Erfahrungen aus seiner Doktorarbeit erweiterte Stroustrup in den AT&T Bell Laboratories im Rahmen von Untersuchungen des Unix-Betriebssystemkerns in Bezug auf verteiltes Rechnen ab 1979 die Programmiersprache C. Die Wahl fiel auf die Programmiersprache C, da C eine Mehrzwecksprache war, die schnellen Code produzierte und einfach auf andere Plattformen zu portieren war. Als dem Betriebssystem Unix beiliegende Sprache hatte C außerdem eine erhebliche Verbreitung.
Eine der ersten Erweiterungen war ein Klassenkonzept mit Datenkapselung, für das die Sprache Simula-67 das primäre Vorbild war. Danach kamen abgeleitete Klassen hinzu, ein strengeres Typsystem, Inline-Funktionen und Standard-Argumente.
Während Stroustrup C with Classes („C mit Klassen“) entwickelte (woraus später C++ wurde), schrieb er auch cfront, einen Compiler, der aus C with Classes zunächst C-Code als Zwischenresultat erzeugte. Die erste kommerzielle Version von cfront erschien im Oktober 1985.
1983 wurde C with Classes in C++ umbenannt. Erweiterungen darin waren: Überladen von Funktionsnamen und Operatoren, virtuelle Funktionen, Referenzen, Konstanten, eine änderbare Freispeicherverwaltung und eine verbesserte Typüberprüfung. Die Möglichkeit von Kommentaren, die an das Zeilenende gebunden sind, wurde aus BCPL übernommen (//).
1985 erschien die erste Version von C++, die eine wichtige Referenzversion darstellte, da die Sprache damals noch nicht standardisiert war. 1989 erschien die Version 2.0 von C++. Neu darin waren Mehrfachvererbung, abstrakte Klassen, statische Elementfunktionen, konstante Elementfunktionen und die Erweiterung des Zugriffsmodells um protected. 1990 erschien das Buch The Annotated C++ Reference Manual, das als Grundlage für den darauffolgenden Standardisierungsprozess diente.
Relativ spät wurden der Sprache Templates, Ausnahmebehandlung, Namensräume, neuartige Typumwandlungen und boolesche Typen hinzugefügt.
Im Zuge der Weiterentwicklung der Sprache C++ entstand auch eine gegenüber C erweiterte Standardbibliothek. Erste Ergänzung war die Stream-I/O-Bibliothek, die Ersatz für traditionelle C-Funktionen wie zum Beispiel printf() und scanf() bietet. Eine der wesentlichen Erweiterungen der Standardbibliothek kam später durch die Integration großer Teile der bei Hewlett-Packard entwickelten Standard Template Library (STL) hinzu.

#### Standardisierung

Nach jahrelanger Arbeit wurde schließlich 1998 die endgültige Fassung der Sprache C++ (ISO/IEC 14882:1998) genormt. Diese Version wurde im Nachhinein, als weitere Versionen der Sprache erschienen, auch C++98 genannt. Im Jahr 2003 wurde ISO/IEC 14882:2003 verabschiedet, eine Nachbesserung der Norm von 1998, in der einige Missverständnisse beseitigt und mehrere Details klarer formuliert wurden. Diese Version wird umgangssprachlich auch C++03 genannt.

### Weiterentwicklung der Programmiersprache C++ nach 2005

Um mit den aktuellen Entwicklungen der sich schnell verändernden Computer-Technik Schritt zu halten, aber auch zur Ausbesserung bekannter Schwächen, erarbeitete das C++-Standardisierungskomitee die nächste größere Revision von C++, die inoffiziell mit C++0x abgekürzt wurde, worin die Ziffernfolge eine grobe Einschätzung des möglichen Erscheinungstermins andeuten sollte. Später, als ein Erscheinungstermin bis Ende 2009 nicht mehr zu halten war, änderte sich der inoffizielle Name zu C++1x.
Die vorrangigen Ziele für die Weiterentwicklung von C++ waren Verbesserungen im Hinblick auf die Systemprogrammierung sowie zur Erstellung von Programmbibliotheken. Außerdem sollte die Erlernbarkeit der Sprache für Anfänger verbessert werden.
Im November 2006 wurde der Zieltermin für die Fertigstellung auf das Jahr 2009 festgelegt. Im Juli 2009 wurde dieser Termin auf frühestens 2010 geändert. Im August 2011 wurde die Revision einstimmig von der ISO angenommen und am 11. Oktober 2011 als ISO/IEC 14882:2011 offiziell veröffentlicht. Inoffiziell heißt die Version C++11.

#### Verbesserungen am Sprachkern

C++98 deckte einige typische Problemfelder der Programmierung noch nicht ausreichend ab, zum Beispiel die Unterstützung von Nebenläufigkeit (Threads), deren Integration in C++, insbesondere für die Verwendung in Mehrprozessorumgebungen, eine Überarbeitung der Sprache unumgänglich machte. Durch die Einführung eines Speichermodells wurden Garantien der Sprache für den nebenläufigen Betrieb festgelegt, um Mehrdeutigkeiten in der Abarbeitungsreihenfolge sowohl aufzulösen als auch in bestimmten Fällen aufrechtzuerhalten und dadurch Spielraum für Optimierungen zu schaffen.
Zu den weitreichenderen Spracherweiterungen gehörte ferner die automatische Typableitung zur Ableitung von Ergebnistypen aus Ausdrücken und die sogenannten R-Wert-Referenzen, mit deren Hilfe sich als Ergänzung zu dem bereits vorhandenen Kopieren von Objekten dann auch ein Verschieben realisieren lässt, außerdem bereichsbasierte For-Schleifen (foreach) über Container und eingebaute Felder.

#### Erweiterung der Programmbibliothek

Im April 2006 gab das C++-Standardisierungskomitee den sogenannten ersten Technischen Report (TR1) heraus, eine nicht normative Ergänzung zur aktuell gültigen, 1998 definierten Bibliothek, mit der Erweiterungsvorschläge vor einer möglichen Übernahme in die C++-Standardbibliothek auf ihre Praxistauglichkeit hin untersucht werden sollen. Viele Compiler-Hersteller lieferten den TR1 mit ihren Produkten aus.
Im TR1 waren u. a. reguläre Ausdrücke, verschiedene intelligente Zeiger, ungeordnete assoziative Container, eine Zufallszahlenbibliothek, Hilfsmittel für die C++-Metaprogrammierung, Tupel sowie numerische und mathematische Bibliotheken enthalten. Die meisten dieser Erweiterungen stammten aus der Boost-Bibliothek, woraus sie mit minimalen Änderungen übernommen wurden. Außerdem waren sämtliche Bibliothekserweiterungen der 1999 überarbeiteten Programmiersprache C (C99) in einer an C++ angepassten Form enthalten.
Mit Ausnahme der numerischen und mathematischen Bibliotheken wurden alle TR1-Erweiterungen in die Sprachnorm C++11 übernommen. Ebenfalls wurde eine eigene Bibliothek zur Unterstützung von Threads eingeführt.

#### C++11

Mit der Norm ISO/IEC 14882:2011, auch bekannt als C++11, wurden viele weitreichende Neuerungen in C++ eingeführt, wie auszugsweise:

Lambdas (Anonyme Funktionen), welche vor der Verabschiedung des C++11-Standards in anderen Sprachen schon teils breite Anwendung fanden, erweitern die Sprache vor allem im Bereich der funktionalen Programmierung.
Eine erleichterte Typbehandlung mit Typinferenz ist nun über das Schlüsselwort auto (das nun nicht mehr ein Speicherklassen-Specifier ist) einerseits und das Schlüsselwort decltype (das den Typ eines Ausdrucks statisch zur Compilezeit zurückgibt, sofern ermittelbar) andererseits möglich. Beide Schlüsselworte zeigen ihre Stärke zudem auch im Verbund. So können ganze Funktionen, deren Rückgabetypen beispielsweise nur schwer vom Programmierer einzusehen sind, weil sie beispielsweise innerhalb komplexerer Klassentemplates liegen, komfortabel definiert werden:
Streng typisierte enums (enum class) beseitigen Probleme mit Namenskollisionen und schränken die Fehleranfälligkeit in Bezug auf implizite Typkonvertierungen ein.
Sogenannte „range-based loops“ mittels eines modifizierten for-Statements erleichtern die Arbeit mit Containern und Arrays in der Art, dass Iteratoren beim Traversieren von Objekten dieser Datentypen für viele Anwendungsfälle überflüssig werden:
Es dürfen direkt aufeinanderfolgende spitze Klammern bei Templates benutzt werden: map<int, vector<int>>.
Überdies erfolgte mit der Einführung von variadischen (vielstelligen) Templates eine großräumige Erweiterung der Nutzungsmöglichkeiten von Templates. Diese ermöglichen nun eine nicht fixe Anzahl von Template-Argumenten  template<typename... Values> class VariadicExampleClass;, was weitreichende Optionen und Vereinfachungen im Code- bzw. Algorithmenaufbau und der Codestruktur allgemein ermöglicht. Des Weiteren haben sie, wie viele andere C++11-Erweiterungen auch, das Potential, die Notwendigkeit zur Nutzung von teils fehleranfälligen und nicht robusten Macros weiter einzuschränken.
Die explizite Nutzbarkeit sogenannter Rvalue-Referenzen ermöglicht, aufbauend unter anderem auf sogenannter Bewegungssemantik, ein breites Spektrum von Codevereinfachungen, Laufzeitoptimierungen und ausnahmesicherer Programmierung. Mit den Rvalue-Referenzen wurden auch die sogenannten universellen Referenzen eingeführt, welche das Problem des „Perfect forwarding“ auf Sprachebene robust und einfach lösbar machen (die konsistente Weiterreichung von Typen innerhalb von Templatekonstrukten, die per „type deduction“ aufgelöst wurden, an weiterführende Templates). Vor der Verabschiedung des C++11-Standards war dies zumindest rein auf Sprachebene nicht möglich und erforderte vom Programmierer je nach Problemfall mehr oder weniger viel Eigenregie mit teils entsprechender Codeaufblähung und -Duplizierung.
Außerdem wurden einige Features aus C11 übernommen, zum Beispiel Ganzzahlen mit mindestens 64 Bit (long long) oder Zusicherungen zur Übersetzungszeit mittels static_assert (in C11: _Static_assert).
Themen der Sprache C++, die Rechenzeit und Speicherplatz betreffen, wurden im sogenannten technical report ISO/IEC TR 18015:2006 behandelt.
Zum Zeitpunkt der Einführung des Standards und auch noch vergleichsweise lange darüber hinaus unterstützten viele gängige Compiler diesen nicht vollständig bzw. mit Bezug auf einige Erweiterungen mitunter fehlerhaft. Besonders starke Einschränkungen zeigte diesbezüglich zum Beispiel Microsoft mit Visual C++ 2012. Mit Visual C++ 2015 sind mittlerweile jedoch nahezu alle wichtigen größeren Spracherweiterungen berücksichtigt worden.

#### C++14

C++14, beschrieben im Standard ISO/IEC 14882:2014, erweitert die Einsatzmöglichkeiten von auto und decltype, schwächt die Voraussetzungen für constexpr ab, erlaubt Variablen-Templates zu definieren (beispielsweise um mehrere Versionen von π mit je nach Typ unterschiedlicher Genauigkeit zu definieren), führt Binärliterale ein (0b...), führt Hochkommata als Trennzeichen in Zahlen ein, erlaubt generische Lambdas, erweitert Lambda capture expressions und führt das Attribut deprecated ein.
Außerdem wurde die Standardbibliothek um ein paar Funktionen ergänzt, die bei C++11 „vergessen“ bzw. „übersehen“ wurden (z. B. std::make_unique) und etliche Funktionsdeklarationen nun als constexpr umdeklariert, was dem Compiler aggressivere Optimierungen gestattet.
Während der Entwicklungsphase wurde C++14 auch C++1y genannt, um anzudeuten, dass es die Nachfolgeversion der vormals als C++0x genannten Version sein wird.

#### C++17

Im März 2017 hat das ISO-C++-Komitee den Sprachstandard C++17 technisch abgeschlossen. Für die neue Fassung wurde unter anderem die Aufnahme des Typen std::byte beschlossen. Dieser ist explizit für den byte-weisen Zugriff auf den Speicher bestimmt. Es wurden neue, generische Container eingeführt: std::any als Alternative zu void* mit Typüberprüfung zur Laufzeit, std::variant als Alternative zur aus C übernommenen Union mit Laufzeit-Typprüfung und std::optional, ein Container, der genau ein Element enthalten kann, aber nicht muss.
Bis zur offiziellen Verabschiedung wurde die Fassung auch als C++1z bezeichnet.
Nach dem Sommer-Meeting Mitte Juli verriet der C++-Experte Herb Sutter, der für die Einberufung des Komitees verantwortlich ist, in seinem Blog bereits erste Pläne für C++20.

#### C++20

Die finale Version von C++20 wurde im Dezember 2020 veröffentlicht, nachdem er im Februar finalisiert und im September bestätigt wurde.

Concepts als Erweiterung zu Templates
bestimmte Initialisierer (zuerst in C99)
[=, this] in Lambdas
Template-Parameter-Listen in Parametern
Dreiwegevergleich mit dem „spaceship operator“, operator <=>
Koroutinen
ein Modulsystem zur Codekapselung und kürzeren Kompilierzeiten
std::format zur String-Interpolation. Es handelt sich um typsicheren und durch den Benutzer erweiterbaren Ersatz für sprintf und stringstreams, der sich stark an Python anlehnt.
std::span als Verallgemeinerung des Konzeptes von string_view (C++17). Ein span beschreibt einen Speicherbereich durch einen Pointer und eine Größenangabe.

#### C++23/26

Reflection
Executors
Pattern Matching
Networking

### Der Name „C++“

Der Name C++ ist eine Wortschöpfung von Rick Mascitti, einem Mitarbeiter Stroustrups, und wurde zum ersten Mal im Dezember 1983 benutzt. Der Name kommt von der Verbindung der Vorgängersprache C und dem Inkrement-Operator ++, der den Wert einer Variablen inkrementiert (um eins erhöht). Der Erfinder von C++, Bjarne Stroustrup, nannte C++ zunächst „C mit Klassen“ (C with classes).

## Kritik

Oft geäußerte Kritik an der Sprache umfasst beispielsweise:

C++ sei sehr komplex und fehleranfällig zu programmieren. Man müsse viel lernen und üben, um es gut zu beherrschen, und viele Features gelten als äußerst komplex.
C++ sei zu low-level-mäßig aufgebaut; während es viele Features von höher abstrahierenden Sprachen aufweist (Klassen, generische Klassen/Funktionen etc.), seien als wichtig empfundene Dinge, insbesondere Garbage Collection, nicht vorhanden.
C++ gilt zwar als schnell, beispielsweise wegen der Möglichkeit, frei mit Pointern zu arbeiten, doch diese Leistung sei auf den heutigen, schnellen Computersystemen nur in Ausnahmefällen nötig: Während es sinnvoll sei, Betriebssysteme o. Ä. in C++ zu schreiben, sei es softwaretechnisch viel günstiger, Anwendungsprogramme in höheren Sprachen zu schreiben, da diese leichter zu warten seien und immer noch eine ausreichende Leistung aufwiesen.
Typisch in Verbindung mit C++ ist das Zitat von Bjarne Stroustrup:

Soll heißen: C++ erleichtert zunächst vieles, aber es bringt gleichzeitig viele Mittel mit sich, die mit Bedacht eingesetzt werden müssen. Zum Beispiel können durch die dynamische Speicherallokation ohne automatische Speicherfreigabe Speicherlecks entstehen. Zeiger können auf falsche Speicherbereiche verweisen und verstecktes Fehlverhalten erzeugen (Hängender Zeiger).
