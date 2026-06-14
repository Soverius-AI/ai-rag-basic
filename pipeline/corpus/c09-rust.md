---
url: https://de.wikipedia.org/wiki/Rust_(Programmiersprache)
---

# Rust (Programmiersprache)

## Überblick

Rust ist eine Multiparadigmen-Systemprogrammiersprache, die von der Open-Source-Community entwickelt wird. Sie wird mit dem Ziel entwickelt, jeden dazu zu befähigen, zuverlässige und effiziente Software zu entwickeln. Zuverlässigkeit bezieht sich dabei insbesondere auf die Vermeidung von Programmfehlern, die zu Speicherzugriffsfehlern oder Pufferüberläufen und damit unter Umständen auch zu Sicherheitslücken führen, vor allem auch in nebenläufigen Prozessen. Der Wertebereich von Variablen wird dabei mittels eines Typsystems eingeschränkt und die angestrebte Typsicherheit wurde formal bewiesen.
Rust vereint Ansätze aus verschiedenen Programmierparadigmen, unter anderem aus der funktionalen, der objektorientierten und der nebenläufigen Programmierung und erlaubt so ein hohes Abstraktionsniveau. Beispielsweise gibt es in Rust algebraische Datentypen, Pattern Matching, Traits (ähnlich den Typklassen in Haskell), Closures sowie Unterstützung für RAII. Die Sprache wurde so entworfen, dass die Kosten der Abstraktionen zur Laufzeit so gering wie möglich bleiben können (zero-cost abstractions), um eine mit C++ vergleichbare Performanz zu erreichen.
Rust wurde ursprünglich bei Mozilla entwickelt. Seit 2021 besteht allerdings die Rust Foundation, eine gemeinnützige Stiftung, die die Weiterentwicklung der Sprache betreut und das Eigentum an den Marken und Logos von Rust hat. Zu den Sponsoren der Stiftung und der Entwickler gehören große Konzerne wie Google, Amazon AWS, Meta und Microsoft.

## Geschichte

Die Sprache entstand aus einem persönlichen Projekt des Mozilla-Mitarbeiters Graydon Hoare. Sein Fokus lag darauf, eine Programmiersprache mit sicherer Speicherverwaltung zu entwerfen, die schnellen und kompakten Code generiert. Frühe Versionen von Rust unterschieden sich selbst von der Version 1.0 wesentlich, so gab es automatisch verwaltete Zeiger mittels ~T ähnlich wie in Swift, ein Effektsystem, Green Threads, prototypen-ähnliche Objektorientierung, und heutige Features wie async, const und der Fehlerbehandlungsoperator ? fehlten.
Mozilla begann das Sponsoring des Projekts im Jahr 2009. Es wurde 2010 zum ersten Mal angekündigt. Im selben Jahr begann der Wechsel von einem (noch in OCaml geschriebenen) ersten Compiler zu einem neuen Compiler, der selbst in Rust geschrieben ist. Dieser rustc genannte Compiler verwendet LLVM als Back-End und kann sich seit 2011 erfolgreich selbst übersetzen. Eine erste stabile Version von Compiler und Standardbibliothek, Rust 1.0, wurde am 15. Mai 2015 veröffentlicht.
Im August 2020 entließ Mozilla im Rahmen einer Unternehmensumstrukturierung unter anderem große Teile des Rust-Teams. Das Servo-Team wurde komplett aufgelöst. Nach Angaben der Vorstandsvorsitzenden Mitchell Baker wurde dies durch die Folgen der COVID-19-Pandemie notwendig. Das Ereignis führte zu Bedenken über die Zukunft von Rust.
Daher gründete das Rust-Kernteam eine Stiftung, um das Eigentum an allen Markenzeichen und Domainnamen zu übernehmen wie auch die finanzielle Verantwortung für deren Kosten. Am 8. Februar 2021 gaben die Unternehmen AWS, Huawei, Google, Microsoft und Mozilla sowie fünf Mitglieder aus dem Rust-Team die Gründung der Rust Foundation bekannt.

## Sprachdesign

### Syntax, Sprachkonstrukte

Syntaktisch ist die Sprache an C angelehnt. Sie besitzt auch Einflüsse aus der ML-Sprachfamilie. Mehrere aufeinanderfolgende Anweisungen werden durch ein Semikolon getrennt, Blöcke stehen in geschweiften Klammern. In vielen Details weicht die Syntax allerdings davon ab. So werden beispielsweise keine Klammern um die Bedingungen von if- und while-Statements benötigt, stattdessen aber geschweifte Klammern um den dahinterstehenden Block erzwungen, auch wenn dort nur eine Anweisung steht. Das Schlüsselwort for leitet in Rust immer eine Foreach-Schleife ein, die das Iterieren über beliebige (auch benutzerdefinierte) Container und Objekte ermöglicht. Anstelle des switch-Statements gibt es die wesentlich mächtigeren match-Ausdrücke, die nicht nur mit Zahlen und Zeichenketten umgehen können, sondern Pattern Matching auf beliebig verschachtelten Strukturen durchführen können.
Die Styleguides empfehlen die Namenskonventionen snake_case für Variablen, SCREAMING_SNAKE_CASE für Konstanten und PascalCase für Datentypen, mit Ausnahme der Primitiven.
Typparameter von generischen Typen und Funktionen stehen in spitzen Klammern. Zwei Doppelpunkte drücken wie in C++ aus, dass der Bezeichner auf der rechten Seite aus dem Namensraum des Bezeichners auf der linken Seite entstammen soll. Die Bindung eines Bezeichners x an einen Wert wird

geschrieben, wobei die Angabe des Typs auch entfallen darf, wenn der Typ abgeleitet werden kann. Diese Syntax entstammt der ML-Familie an Programmiersprachen. Eine Variablen-Deklaration für die Variable v hat die Form:

oder allgemeiner:

Der Compiler überprüft mittels Datenflussanalyse, ob alle Bindungen und Variablen vor dem Auslesen initialisiert wurden. Verwendung von uninitialisiertem Speicher ist nur über einen speziellen Befehl möglich, welcher zwingend mit unsafe markiert werden muss.

### Typsystem

Benutzerdefinierte Datentypen können entweder als struct (Struktur wie in C, Produkttypen) oder als enum (tagged-Union, Summentypen) definiert werden. Dabei ist enum vielseitiger als das gleichnamige Schlüsselwort in C und C++: In Rust können die Varianten des enum auch innere Werte (wie Strukturen oder Tupel) enthalten.

Für beide Arten von Datentypen kann man mittels des impl-Schlüsselwortes Methoden definieren. Die sonst für objektorientierte Programmierung übliche Vererbung gibt es in Rust allerdings nicht; Polymorphie wird stattdessen durch Traits und generische Programmierung ermöglicht. Ein Trait definiert eine Menge von Funktionen und Methoden, die dann jeweils zusammen von Datentypen implementiert werden und bei Typparametern als Einschränkung für die erlaubten Typen dienen können. Dies wird auch für Operatoren verwendet, sodass beispielsweise der Operator + mit jedem Datentyp verwendet werden kann, der den Trait Add implementiert. Alle Funktions-, Methoden- und Operatoraufrufe werden dabei statisch gebunden, wodurch dem Compiler einige Optimierungen ermöglicht werden. Allerdings kann über sogenannte Trait-Objects auch mittels dynamischer Bindung auf Trait-Methoden zugegriffen werden. Es ist erlaubt, sowohl existierende Traits aus fremdem Code für benutzerdefinierte Typen als auch neue, benutzerdefinierte Traits für existierende Typen zu implementieren.

### Zeiger, Speicherverwaltung

Rust kennt neben den sogenannten Raw-Pointern, die Zeigern in C entsprechen und nur in explizit als unsafe markiertem Code dereferenziert werden dürfen, auch noch Referenzen. Diese zeigen immer auf gültigen Speicher und dürfen niemals den Wert null annehmen. Es werden zwei verschiedene Arten von Referenzen unterschieden: gemeinsame Referenzen (shared references), eingeleitet durch &, und veränderbare Referenzen (mutable references), eingeleitet durch &mut. Der Rust-Compiler garantiert statisch, dass keine Referenz das von ihr referenzierte Objekt „überlebt“, dass das referenzierte Objekt nicht verändert wird, während eine Referenz (egal ob gemeinsam oder veränderbar) existiert, und dass eine veränderbare Referenz – wenn eine solche existiert – stets die einzige Referenz auf ein Objekt ist, sodass Veränderungen am Objekt vorgenommen werden können, ohne dabei Referenzen zum selben Objekt an anderen Stellen im Code oder sogar in anderen Threads ungültig zu machen. Um ein eigentlich unveränderliches Objekt innen veränderlich zu machen, gibt es den Hilfstyp Cell.
Das Erstellen von Referenzen wird auch als Borrowing (Ausleihen) bezeichnet und bildet zusammen mit dem Konzept der Ownership (Besitz) die Grundlage für die sichere Speicherverwaltung ohne Garbage Collection. Ownership bedeutet hier, dass jedes Objekt im Speicher im Besitz derjenigen Variable ist, der es bei der Erstellung zugewiesen wird. Am Ende der Lebensdauer dieser Variable wird der Speicher automatisch freigegeben. Für die meisten komplexeren Datentypen verwendet Rust die sogenannte Move-Semantik, sodass bei Zuweisung eines Objektes zu einer anderen Variablen das Objekt „verschoben“ wird, und ein Zugriff auf die alte Variable daraufhin nicht mehr möglich ist. Auch beim Übergeben von Objekten als Wertparameter an Funktionen (call by value) werden solche Objekte in die Funktion „hineingeschoben“ und sind von außen nicht mehr zugreifbar, wenn sie nicht wieder von der Funktion zurückgegeben werden. Primitive Datentypen im engeren Sinne verwenden keine Move-Semantik, sondern die sonst übliche Copy-Semantik (Zuweisungen erstellen eine Kopie). Dies gilt nicht für folgende Datentypen, die in Rust als primitiv gelten: veränderbare Referenzen (mutable references), manche Closures, str und manche Arrays und manche Tupel. Bei benutzerdefinierten Datentypen kann mittels des Copy-Traits selbst entschieden werden, ob Move- oder Copy-Semantik verwendet werden soll.
Zur dynamischen Speicherverwaltung stehen die Smart-Pointer-Typen Box, Rc und der Hilfstyp RefCell zur Verfügung, welche einerseits dem System Ownership-Borrowing-Lifetime-Move unterworfen sind, dieses System andererseits auf die Laufzeitdynamik übertragen. Der Typ Box<T> beschreibt einen besitzenden Zeiger auf einen Wert vom Typ T im dynamisch allozierten Speicher. Der Typ Rc<T> beschreibt über Referenzzählung einen gemeinschaftlichen Besitz auf einen unveränderlichen Wert. Ein unveränderlicher Wert kann jedoch veränderliche innere Daten vom Typ RefCell<T> besitzen, wobei jeweils ein Referenzzähler für einen Zugriff analog zu & und &mut das sichere dynamische Borrowing durch Prüfung zur Laufzeit ermöglicht.
Mit Rc allein ist keine Dynamik zyklischer Datenstrukturen möglich. Hierzu kann wieder RefCell herangezogen werden, wobei die Zyklen manuell aufgebrochen werden müssen, damit es nicht zu einem Speicherleck kommt. Als alternatives Konzept ist der Zeigertyp Weak<T> vorhanden, bei dem die Zeiger analog zu Rc sind, jedoch keinen Besitz am Wert haben. Zur Umsetzung von Weak ist in Rc ein zweiter Referenzzähler implementiert. Ein Zeiger vom Typ Weak verhindert zwar nicht den Destruktor-Aufruf beim Verschwinden aller Zeiger vom Typ Rc, die Deallokation des brach liegenden Knotens geschieht dann allerdings erst beim Verschwinden des letzten Zeigers vom Typ Weak. Die Destruktor-Aufrufe sorgen dabei für ein automatisches Aufbrechen der Zyklen.
Für die nebenläufige Programmierung ist ein Austausch von Rc gegen Arc, und RefCell sowie Cell gegen die analogen Konzepte Mutex oder RwLock notwendig.
Nullzeiger kommen in Rust nicht vor. Abwesenheit eines Werts wird stattdessen durch den Typ Option<T> modelliert, welcher es als enum ermöglicht, zwischen Some(T) (Vorhandensein) und None (Abwesenheit) zu unterscheiden. Die Verwendung von Optionen ist nicht auf Zeiger beschränkt. Möchte man z. B. einen großen Teil einer struct zunächst uninitialisiert lassen, dann kann man diesen als innere struct hinter einer Option verbergen und mit None initialisieren.

### Fehlerbehandlung

Rust unterscheidet zwischen nicht behebbaren (unrecoverable) und behebbaren (recoverable) Fehlern. Tritt ein nicht behebbarer Fehler auf, der in der Regel mit panic!() ausgelöst wird, wird eine Meldung ausgegeben, der Stack aufgeräumt (unwinding) und der betroffene Thread beendet. Wenn dies nicht der Haupt-Thread ist, läuft das Programm weiter. Ein sofortiger Programmabbruch via abort ist auch konfigurierbar und auf eingebetteten Systemen üblich.

Für behebbare Fehler gibt es in Rust die in vielen Sprachen vorhandene Ausnahmebehandlung mit automatischem Stack-Unwinding nicht. Stattdessen werden behebbare Fehler als gewöhnliche Rückgabewerte von Funktionen modelliert. Zur strengen Typisierung dienen dabei die Typen Result<T,E> und Option<T>. Beide Typen sind als enum formuliert, Result unterscheidet hierbei zwischen Ok(T) (normale Werte) und Err(E) (Fehlerwerte), Option definiert hingegen Some(T) (normale Werte) und None (kein Wert). Wird eine Funktion aufgerufen, die einen Fehler erzeugen kann, so kann mit dem ?-Operator dieser Fehler direkt an die nächsthöhere Funktion weitergegeben werden, ohne ihn zu behandeln.Ein Laufzeitnachteil entsteht bei der Rückgabe von enum bzw. struct innerhalb von Option oder Result in vielen Fällen nicht, da der Compiler mit sogenannten „Nischenoptimierungen“ in der Lage ist, unbenutzten Platz im Typ zu finden und diesen für die Markierung des Zustands (also Ok vs. Err, oder Some vs. None) zu verwenden. Beispielsweise ist Option<&u64> genauso groß wie &u64 bzw. jeder andere Zeiger, da &u64 niemals Null sein kann und somit der Wert 0 stattdessen zur Repräsentation von None benutzt werden kann.

### Übersetzungszeitberechnungen

Mittels const lassen sich viele Berechnungen zur Übersetzungszeit ausführen, die dann nicht zur Laufzeit ausgeführt werden müssen. Dies ähnelt C++ constexpr. Eine mit const markierte Funktion darf zur Laufzeit oder zur Übersetzungszeit ausgeführt werden. Eine Konstante mit const berechnet ihren Wert zur Übersetzungszeit und lässt sich zur Laufzeit nicht ändern. Sie wird (wie auch z. B. Ganzzahlliterale) in der Regel an jedem Verwendungsort eingefügt, um die größtmögliche Performance zu erreichen. Genauso müssen statische Variablen mit static durch einen const-kompatiblen Wert initialisiert werden (der Compiler schreibt diesen Wert ins Datensegment der Objektdatei), können aber als globale Variablen zur Laufzeit verändert werden.

### Nebenläufigkeit

Rust unterstützt in der Standardbibliothek Threads des Betriebssystems zur nebenläufigen Programmierung. Außerdem werden Synchronisierungsprimitive wie Mutex, Atomic und RwLock bereitgestellt.
Bei der nebenläufigen Programmierung bestehen zusätzliche Gefahren, die durch nicht synchronisierten Zugriff auf gemeinsame Daten, insbesondere statische Variablen geschehen. Diese Fehler vermeidet Rust, indem durch das Typsystem und die besonderen Traits Send und Sync sichergestellt wird, dass nur solche Daten zwischen mehreren Ausführungssträngen geteilt werden können, die dafür auch geeignet sind. Daten, die Sync implementieren, erlauben den gemeinsamen Zugriff durch zwei oder mehr Ausführungsstränge, daher erfordern statische Variablen auch Sync von ihren Typen. Cell ist beispielsweise nicht Sync, da es keine Mechanismen zum gegenseitigen Ausschluss hat, Mutex wiederum ist Sync. Daten, die Send implementieren, dürfen zwischen Threads hin- und hergeschickt werden. Dies trifft ebenso wie Sync für viele Typen standardmäßig zu, nicht aber beispielsweise für betriebssystemabhängige threadspezifische Daten wie MutexGuard (da POSIX erfordert, dass Mutexe auf demselben Thread entsperrt werden, auf dem sie gesperrt wurden).
Neben der Benutzung von Kernel-Threads können in Rust auch Koroutinen mittels async eingesetzt werden, ähnlich zu JavaScript (Promises) und Python. Aus einer mit async markierten Funktion erzeugt der Compiler einen Automaten, sodass die Funktion bis zu einem await-Punkt ausgeführt wird, dann unterbrochen werden kann, und ein anderer async-Task ausgeführt wird. async ist also für kooperatives Multitasking geeignet und ähnelt User-Threads, da die Anzahl der Tasks deutlich höher als die Anzahl der Betriebssystem-Threads sein kann. await wird genutzt, um auf I/O-Operationen oder zeitgebundene Ereignisse zu warten, häufig Lesen oder Schreiben einer Datei und Netzwerkkommunikation. Die Standardbibliothek enthält nur Grundfunktionalität für async, wie den Future-Trait (Zustandsmaschine einer async-Funktion). Für die Verwendung einer Laufzeitumgebung, die async-Tasks tatsächlich ausführt, und die I/O-Operationen implementiert, stehen verschiedene Bibliotheken zur Verfügung, wie tokio und async-std.
Obwohl async primär für hochgradig parallele Netzwerkanwendungen wie Cloud Computing und Webserver entwickelt wurde, eignet sich das async-Modell ebenfalls für eingebettete Anwendungen, einschließlich kleiner Mikrocontroller. Zu den Vorteilen im eingebetteten Bereich gehören die Möglichkeit zur Taskverwaltung ohne jegliche Speicherallozierung, das kooperative Multitasking zum Erreichen von Echtzeitgarantien, die Unterstützung einer Vielzahl von unabhängigen Tasks auf einem einzigen physischen Prozessor, und die Kompatibilität des Polling- und Waker-basierten async-I/O-Modells mit Interrupts. Die Laufzeitumgebung embassy weist in einem direkten Vergleich zum C-basierten FreeRTOS einen kleineren Speicherverbrauch (RAM und Flash), geringere Task-Laufzeiten und kleinere Interrupt-Verarbeitungslatenzen auf. Embassy verfügt über optionale Komponenten, die es um async-basierte RTOS-Funktionalität wie mehrere Task-Prioritäten erweitert.

## Beispiele

### Hello-World-Funktion

Das obige Beispiel gibt den Text Hello, world! am Ausgabemedium aus. println!() ist hierbei keine gewöhnliche Funktion, sondern ein Makro. Die Funktionsdeklaration erfolgt in Rust mit dem Schlüsselwort fn.

### Fakultäts-Funktion

Für die Berechnung der Fakultät einer Zahl

        n

    {\displaystyle n}

, also

        n
        !
        =
        1
        ⋅
        2
        ⋅
        3
        ⋯
        n
        =

          ∏

            k
            =
            1

            n

        k

    {\displaystyle n!=1\cdot 2\cdot 3\dotsm n=\prod _{k=1}^{n}k}

, existieren verschiedene Lösungswege, insbesondere ein rekursiver und ein iterativer. Beide sind in Rust umsetzbar.

#### Iterativ

Da die Fakultät für alle natürlichen Zahlen definiert ist, kann als Datentyp auf u64, eine vorzeichenlose 64-Bit-Ganzzahl, zurückgegriffen werden. In dieser Variante wird die Fakultät nach obiger Definition umgesetzt. Auffällig ist das Schlüsselwort mut in Zeile 2, das in der Deklaration der Variable acc vorkommt, um diese als veränderlich (mutable) zu kennzeichnen, da im Schleifenkörper in Zeile 4 eine erneute Wertzuweisung vorgenommen wird. Eine explizite return-Anweisung wird in Rust nicht benötigt, weil der letzte Ausdruck (der aufgrund des fehlenden Semikolons keine Anweisung ist) als Rückgabewert gilt. Dieser Ausdruck muss dem Rückgabetypen aus dem Funktionskopf entsprechen.

Alternativ erlaubt es Rust, das Problem im Sinne der funktionalen Programmierung anzugehen. Sogenannte Iterators bieten eine Möglichkeit, iterierbare Objekte zu verarbeiten. So lässt sich die Fakultät mit Hilfe des Iterators (1..=i) und dessen Methode product() wie folgt darstellen:

#### Rekursiv

Bei dieser Variante liegt der Kern in einer Fallunterscheidung, mit der die Fakultät ebenfalls definiert werden kann:

        n
        !
        =

            {

                  1
                  ,

                  n
                  =
                  0

                  n
                  ⋅
                  (
                  n
                  −
                  1
                  )
                  !
                  ,

                  n
                  >
                  0

    {\displaystyle n!={\begin{cases}1,&n=0\\n\cdot (n-1)!,&n>0\end{cases}}}

Dieser Ausdruck lässt sich in Rust mittels Pattern Matching und rekursivem Funktionsaufruf implementieren.

#### Behandlung von Überlauf

Mit dem hier benutzten 64-Bit-Integer-Datentyp lässt sich die Fakultät nur bis 20 berechnen, bis ein Überlauf passiert, welcher nur noch falsche Ergebnisse liefert. Dies geschieht häufig unbemerkt. Je nach Kompiliermethode würde dieser Überlauf in den obigen Beispielen als nicht behebbarer Fehler bemerkt, sodass das Programm sich beendet, oder es würde mit dem Überlauf weitergerechnet.
Stattdessen kann dieser Fehlerfall wie folgt mit Hilfe des Typsystems behandelt werden:

### Stapelspeicher

Die kombinierte Nutzung von Enumerationen, Strukturen und Zeigern erlaubt die Konstruktion komplexer Datenstrukturen. Das folgende Beispiel zeigt die Implementierung eines unbeschränkten Stapelspeichers als einfach verkettete Liste, der durch Verhüllung in ein Modul zu einem abstrakten Datentyp gemacht wird. Die öffentliche Schnittstelle ist durch das Schlüsselwort pub gekennzeichnet.
Die Formulierung des abstrakten Datentyps Stack<T> ist generisch über seinem Elementtyp T gestaltet. Man sagt auch, Stack<T> ist parametrisch polymorph oder ist allquantifiziert über die Typvariable T. Bei der Erzeugung von Maschinencode wird die Funktion für jeden tatsächlich im Programm verwendeten Elementtyp separat generiert, ein Monomorphisierung genannter Prozess.

Die Notation &mut self ist eine Kurzschreibweise für self: &mut Self.
Bei der Entnahme des Knotens in pop gibt es ein Problem: Weil es hier zur Besitzübertragung an node kommt, würde die Speicherzelle ungültig werden. Zur Umgehung dieser gefährlichen Situation wurde die Methode Option::take genutzt, die die ungültige Speicherzelle sogleich mit dem Wert None überschreibt.
Die Standardbibliothek enthält viele Hilfsfunktionen, die manchmal lediglich zur moderaten Verknappung von Quelltext herangezogen werden können. Die Benutzung der monadischen Methode Option::map gestattet bspw. eine kürzere Formulierung der Methode pop:

Es ist im Allgemeinen nicht empfehlenswert, grundlegende Datenstrukturen neu zu erfinden, da dies eine vermeidbare Fehlerquelle ist und den Datenaustausch verkomplizieren kann. Anstelle des hier beispielhaft gezeigten Stack sollte Vec verwendet werden.

## Verwendung

Der Rust-Compiler wird standardmäßig mit Cargo, einer Paketverwaltung für Rust-Software, ausgeliefert, die verwendete Bibliotheken automatisch herunterlädt und Abhängigkeiten auflöst. Jedes Paket beinhaltet eine Konfigurationsdatei im TOML-Format, die als Cargo.toml im Paketverzeichnis abgelegt wird. In dieser werden neben allgemeinen Informationen zum Paket (u. a. Name, Version, Autoren und Kompiliereinstellungen) auch die benötigten Abhängigkeiten angegeben.
Eine Vielzahl wiederverwendbarer Open-Source-Komponenten stehen im offiziellen Paket-Repository crates.io zur Verfügung. Ab der Version 1.34.0 ist es zudem möglich, andere Paket-Repositories zu nutzen. Dies ermöglicht beispielsweise, dass Unternehmen eigene, interne Paket-Repositories erstellen und für Closed-Source-Komponenten nutzen.
Rust ist mit C direkt interoperabel (sogenanntes Foreign Function Interface bzw. FFI). C-Funktionen können in Rust als extern deklariert werden, genauso können Rust-Funktionen und manche Datentypen die extern "C"-ABI benutzen und somit aus C verwendet werden. Mithilfe von Werkzeugen wie cbindgen, welches C-Header für Rust-Funktionen und Datentypen erzeugt, und bindgen, welches Rust-Module aus C-Headern erzeugt, ist es möglich, in einem Programm C und Rust gemischt zu verwenden. Die Interoperabilität von Rust und C++ ist mit komplexeren Werkzeugen wie CXX beschränkt möglich, soll aber in Zukunft in der Sprache selbst besser unterstützt werden. Dank der Interoperabilität setzen bereits viele C- und C++-Projekte Rust in kleinem Umfang ein.
Rust findet unter anderem in folgenden Projekten Verwendung:

Mozilla Firefox
Mozilla Thunderbird – ab Version 128, für mehr Performance und Sicherheit, aber auch um zukünftig Code zwischen Desktop und Mobile gleichermaßen entwickeln und teilen zu können.
Servo – eine neue Layout-Engine für Webbrowser, ehemals von Mozilla. Servo war das erste Projekt, welches ausschließlich und im großen Stil Rust einsetzte.
OpenDNS – verwendet Rust in zwei Softwarekomponenten.
librsvg – freie SVG-Bibliothek, Teil des Gnome-Projektes.
Google Fuchsia – ein Betriebssystem, das von Google entwickelt wird.
Deno – eine Laufzeitumgebung für JavaScript und TypeScript als Alternative zu Node.js
RustDesk – eine Remote-Desktop-Anwendung
Signal Messenger – Kernfunktionalitäten wie Signal-Protokoll oder Kryptographie für alle Apps (Android, iOS, Desktop).
Matrix – Offizielle Bibliothek für Matrix-Protokoll-Clients, Serverimplementierung conduit und seine Abspaltungen (u. a. continuwuity und tuwunel)
Tor – „Arti“, experimentelle Reimplementierung der gesamten C-Tor-Codebase
Fish – eine Shell für unixoide Systeme, seit Version 4.0
Zed – ein Texteditor
Weitere Projekte, wie CPython und Git, planen oder erörtern, zukünftig Rust einzusetzen und zumindest Teile der Kernfunktionalität in Rust umzuschreiben.

### Betriebssysteme

Rust findet in vielen Betriebssystemen zunehmend Anwendung, da vor allem Speicherzugriffsfehler oder Pufferüberläufe immer wieder zu Sicherheitslücken führen, welche mit Rust von Haus aus vermieden werden können. Dabei wird zumeist C oder C++ ersetzt.

#### Microsoft Windows

Microsoft ist Gründungsmitglied der Rust Foundation und bezahlt als Platinum-Sponsor 300.000 US-Dollar im Jahr an die Organisation.
2020 hatte Microsoft angekündigt, Teile von Windows in Rust neu zu schreiben. DWriteCore, eine Engine zur Textanalyse, Layout und Rendering, besteht mittlerweile aus rund 150.000 Zeilen Rust. „Auch wenn es sich um einen kleinen Test handelt, werden wir die Nutzung von Rust im Kernel weiter steigern“, heißt es in einem Windows Blog Post vom Juli 2023, zur Implementierung der GDI-Region in win32kbase_rs.sys in sicherem Rust. Bereits im Oktober 2023 war Rust im Kernel von Windows 11, als ein SysCall, angekommen.
Im November 2023 hat der bei Microsoft für Betriebssystemsicherheit zuständige David Weston angegeben, dass Rust von Microsofts hauseigenen Entwicklungswerkzeugen künftig „erstklassig“ unterstützt werden und damit auf einer Stufe wie C oder C++ stehen soll. Dies bedeutet vor allem Arbeiten an sowie Investitionen in interne Systeme. Dafür sind 10 Millionen US-Dollar veranschlagt. Als Ziel möchte man vor allem die Speichersicherheit der eigenen Anwendungen erhöhen. Zusätzlich zu der Ankündigung hat man neben dem Mitgliedsbeitrag eine Million an die Rust Foundation gespendet.

#### Google Android

Google ist Gründungsmitglied der Rust Foundation und zahlt als Platinum-Sponsor 300.000 US-Dollar im Jahr an die Organisation.
Bereits seit 2019 wird Rust von Google in Android verwendet, was laut Aussage von Android-Sicherheits-Ingenieur Jeffrey Vander Stoep von 2019 bis 2022 bereits die Anzahl der Speichersicherheitsfehler von 223 auf 85 pro Jahr reduzieren konnte. Bisher wurden auch keine Speicherfehler im hinzugefügten Rust-Code gefunden.
In Android 12 wurde Rust-Support erstmals angekündigt. In Android 13 war bereits ein größerer Teil des neu hinzugefügten Code in Rust geschrieben.
Für Android 14 wurde bereits eine Bare-Metal-Rust-Umsetzung veröffentlicht. Die Protected-Virtual-Machine-Firmware ersetzt den in C geschriebenen Open-Source-Bootloader U-Boot. Grund dafür sind Speicherfehler wie Pufferüberlauf oder Out-of-Bounds-Fehler im Bootloader, die aufgrund der Angreifbarkeit eines Bootloaders zumeist als kritisch eingestuft werden und zukünftig damit vermieden werden könnten.
Im November 2023 wurde der erste komplette Linux-Treiber für Android namens Binder erstellt. Dabei handelt es sich um eine komplett neue Umsetzung der Interprozesskommunikation (IPC), zuvor in C umgesetzt, und im Zuge dessen wurden auch weitere Pläne und Funktionen umgesetzt.

#### Linux

Der Linuxkernel enthält 25 000 Zeilen Rustcode bei 34 000 000 Zeilen C-Code, Rust macht somit 0,07 % aus (Stand: 2025).
Für Kernelentwickler bietet Rust als Sprache, Bibliothek und Tooling viele moderne Verbesserungen im Vergleich zu C.
Die zahlenmäßig meisten gefundenen Fehler im Kernelcode betreffen Spezialfälle in C, die in Rust nicht vorkommen können, wie beispielsweise überschriebener Speicher, Aufräumarbeiten im Fehlerfall, vergessene Fehlerüberprüfung und Speichernutzung nach Rückgabe. Dies betrifft rund 70 % der Sicherheitslücken. Rust erzwingt bereits beim Kompilieren die Validierung nicht vertrauenswürdiger Daten, die Regeln für Speicherverwaltung, Sperrregeln, Fehlerbehandlung und Typsicherheit, das vereinfacht Codereviews und reduziert Programmierfehler im Linuxkernel.
Mit dem Linux-Kernel 6.1 wurde erstmals die Möglichkeit geschaffen, neben der Programmiersprache C auch Rust als zweite Programmiersprache im Kernel zu verwenden. Dies war aber noch nicht als produktiv zu bezeichnen, da noch entsprechende Rust-Module im Kernel fehlten.
Erst mit den folgenden Kerneln wurden Module und mehrere Updates der Toolchain gemacht, um dem produktiven Einsatz näher zu kommen und zukünftig näher an der aktuellen Entwicklung von Rust zu sein.
Die Umstellung auf Rust warf aber auch diverse Diskussionen auf, in deren Folge im Jahr 2025 langjährige Kernel-Maintainer das Projekt verlassen haben.
