---
url: https://de.wikipedia.org/wiki/Assemblersprache
---

# Assemblersprache

## Überblick

Eine Assemblersprache, kurz auch Assembler genannt (von englisch to assemble  ‚zusammenfügen‘), ist eine Programmiersprache, die auf den Befehlsvorrat eines bestimmten Computertyps (d. h. dessen Prozessorarchitektur) ausgerichtet ist.
Assemblersprachen bezeichnet man deshalb als maschinenorientierte Programmiersprachen und – als Nachfolger der direkten Programmierung mit Zahlencodes – als Programmiersprachen der zweiten Generation: Anstelle eines Binärcodes der Maschinensprache können Befehle und deren Operanden durch leichter verständliche mnemonische Symbole in Textform (z. B. „MOVE“), Operanden z. T. als symbolische Adresse (z. B. „PLZ“), notiert und dargestellt werden.
Der Quelltext eines Assemblerprogramms wird mit Hilfe einer Übersetzungssoftware (Assembler oder Assemblierer) in Maschinencode übersetzt. Dagegen übersetzt in höheren Programmiersprachen (Hochsprachen, dritte Generation) ein sogenannter Compiler abstraktere (komplexere, nicht auf den Prozessor-Befehlssatz begrenzte) Befehle in den Maschinencode der gegebenen Zielarchitektur – oder in eine Zwischensprache.
Umgangssprachlich werden die Ausdrücke „Maschinensprache“ und „Assembler(sprache)“ häufig synonym verwendet.

## Übersicht

Auch wenn der Begriff „Assemblersprache“ zunächst den Anschein erweckt, es handele sich um eine einzige Sprache, bezieht sich dieser tatsächlich auf eine ganze Familie an Sprachen:
So unterscheiden sie sich

im Grad der Abstraktion
Assembler gibt es von einfachen Inline-Assemblern, über „gewöhnliche“ Assembler und Makroassemblern bis hin zu Assemblersprachen wie PL/A, entwickelt von Gordon Villy Cormack, Theodor Holm Nelson und John A. N. Lee bei IBM in den frühen 1970er Jahren und stellt den Übergang zu modernen Hochsprachen dar. All diesen Sprachen ist gemein, dass sie noch die vollständige Kontrolle über die CPU zulassen und dass winzige Programme geschrieben werden können.
in Unterschieden in der Syntax bei identischer Architektur
Es gibt Unterschiede in der Syntax bei verschiedenen Assembler-Programmen für den gleichen Prozessor. So hat kaum ein Assembler-Programm die gleiche Syntax wie ein anderes, insbesondere da es keine Standardisierung gibt. Die Unterschiede zwischen verschiedenen Assemblersprachen können geringfügig oder grundlegend sein. Bekannte Beispiele sind die Intel-Syntax beim 8080 und die Zilog-Syntax beim Z80 (STAX B vs. LD (BC),A) sowie die Intel-Syntax und die AT&T-Syntax aktueller Assembler aktueller Prozessoren
mov eax,[ebx+esi*8+1Fh]
movl 0x1F(%ebx,%esi,8),%eax
in der unterstützen Architektur
Hier Beispiele für einen Intel 80386, einen Motorola 68000 und einen MIPS 4000. Hier gibt es die gravierendsten Unterschiede, insbesondere welche Register, Adressierungsarten und Operationen es gibt.
add eax,[edx+16]
add.l 16(a2),d0
lw t2,16(t1); add t0,t3, t2
in der unterstützten Mikro-Architektur
Des Weiteren gibt es noch Unterschiede in Abhängigkeit der verwendeten Mikro-Architekturen, insbesondere, welche Befehle erlaubt sind.
in der Semantik
Neben den eben genannten Unterschieden gibt es noch versteckte semantische Unterschiede, wie Delayed Branches und Zugriffe auf falsch ausgerichtete Operanden, die im Syntax nicht zu sehen sind, aber zu beachten sind.
in weiteren Hilfsmitteln
Komplexere Assembler erlauben das Schreiben von Modulen und Bibliotheken sowie das Verbinden mit Modulen und Bibliotheken, die in anderen Sprachen geschrieben wurden. Einfachere erzeugen direkt den Code.
Dabei übernimmt der Assembler im Allgemeinen:

Entfernen von Kommentaren
Übersetzen der Mnemonics und Operanden in die richtigen Opcodes (insbesondere bei Sprungbefehlen)
Verwalten von Symbolen und Konstanten
Verwalten von Speicher und Adressen
Auswerten von Konstanten und Ausdrücken
Speicherbelegung: Verwalten von Segmenten, Alignment von Code und Daten
Erzeugen von Objektdaten und Assembler-Listings
Makroassembler: Ausführen von Makros und bedingten Übersetzungen
Anwendung findet Assembler auch heute noch an vielen Stellen

Embedded-Prozessoren
Hardware-Treiber
High-Performance-Bibliotheken
Code, der massiven Nutzen aus SIMD zieht (Faktor 20 bis 30 sind hier gegenüber C++ nicht selten)
Krypto-Routinen (Gewährleistung konstanter Laufzeit)
Computer-Grafik, Video-Codecs, Signalverarbeitung
Ein Quelltext in Assemblersprache wird auch als Assemblercode bezeichnet. Programme in Assemblersprachen zeichnen sich dadurch aus, dass alle Möglichkeiten des Mikroprozessors genutzt werden können, was heutzutage selten erforderlich ist. Sie werden im Allgemeinen nur noch dann verwendet, wenn Programme bzw. einzelne Teile davon sehr zeitkritisch sind, z. B. beim Hochleistungsrechnen oder bei Echtzeitsystemen. Ihre Nutzung kann auch dann sinnvoll sein, wenn für die Programme nur sehr wenig Speicherplatz zur Verfügung steht (z. B. in eingebetteten Systemen).
Unter dem Aspekt der Geschwindigkeitsoptimierung kann der Einsatz von Assemblercode auch bei verfügbaren hochoptimierenden Compilern noch seine Berechtigung haben, Vor- und Nachteile sollten aber für die spezifische Anwendung abgewogen werden.
Bei komplexer Technik wie Intel Itanium und verschiedenen digitalen Signalprozessoren kann ein Compiler u. U. durchaus besseren Code erzeugen als ein durchschnittlicher Assemblerprogrammierer, da das Ablaufverhalten solcher Architekturen mit komplexen mehrstufigen intelligenten Optimierungen (z. B. Out-of-order execution, Pipeline-Stalls, …) hochgradig nichtlinear ist.
Die Geschwindigkeitsoptimierung wird immer komplexer, da zahlreiche Nebenbedingungen eingehalten werden müssen. Dies ist ein gleichermaßen wachsendes Problem sowohl für die immer besser werdenden Compiler der Hochsprachen als auch für Programmierer der Assemblersprache. Für einen optimalen Code wird immer mehr Kontextwissen benötigt (z. B. Cachenutzung, räumliche und zeitliche Lokalität der Speicherzugriffe), welches der Assemblerprogrammierer teilweise (im Gegensatz zum Compiler) durch Laufzeitprofiling des ausgeführten Codes in seinem angestrebten Anwendungsfeld gewinnen kann. Ein Beispiel hierfür ist der SSE-Befehl MOVNTQ, welcher wegen des fehlenden Kontextwissens von Compilern kaum optimal eingesetzt werden kann.
Die Rückwandlung von Maschinencode in Assemblersprache wird Disassemblierung genannt. Der Prozess ist allerdings bei fehlenden Debug-Informationen hochgradig verlustbehaftet, da sich viele Informationen wie ursprüngliche Bezeichner oder Kommentare nicht wiederherstellen, da diese beim Assemblieren nicht in den Maschinencode übernommen oder berechnet wurden.

## Beschreibung

Programmbefehle in Maschinensprache bilden sich aus dem Operationscode (Opcode) und meist weiteren, je nach Befehl individuell festgelegten Angaben wie Adressen, im Befehl eingebettete Literale, Längenangaben etc. Da die Zahlenwerte der Opcodes schwierig zu merken sind, verwenden Assemblersprachen leichter merkbare Kürzel, sogenannte mnemonische Symbole (kurz Mnemonics).
Beispiel: Der folgende Befehl in der Maschinensprache von x86-Prozessoren

10110000 01100001 (in hexadezimaler Darstellung: 'B0 61')

entspricht dem Assemblerbefehl

bzw.

und bedeutet, dass der hexadezimale Wert „61“ (dezimal 97) in den niederwertigen Teil des Registers „ax“ geladen wird; „ax“ bezeichnet das ganze Register, „al“ (für low) den niederwertigen Teil des Registers. Der hochwertige Teil des Registers kann mit „ah“ angesprochen werden (für „high“).
Am Beispiel ist zu erkennen, dass – obwohl in denselben Maschinencode übersetzt wird – die beiden Assembler-Dialekte deutlich verschieden formulieren.

Die Information, dass ein Byte zu kopieren ist, steckt bei AT&T im „movb“; der Intel-mov entnimmt sie dem Umstand, dass Register(teil) „al“ ein Byte groß ist.
Quelle und Ziel des Kopierens werden vertauscht angegeben.
Auch das Format zum Ansprechen eines Registers sowie zur Angabe eines direkten Zahlenwerts ist verschieden.
Mit Computerhilfe kann man das eine in das andere weitgehend eins zu eins übersetzen. Jedoch werden Adressumformungen vorgenommen, so dass man symbolische Adressen benutzen kann. Die Eingabedaten für einen Assembler enthalten neben den eigentlichen Codes/Befehlen (die er in Maschinencode übersetzt) auch Steueranweisungen, die seine Arbeitsweise bestimmen/festlegen, zum Beispiel zur Definition eines Basisregisters.
Häufig werden komplexere Assemblersprachen (Makroassembler) verwendet, um die Programmierarbeit zu erleichtern. Makros sind dabei im Quelltext enthaltene Aufrufe, die vor dem eigentlichen Assemblieren automatisch durch (meist kurze) Folgen von Assemblerbefehlen ersetzt werden. Dabei können einfache, durch Parameter steuerbare Ersetzungen vorgenommen werden. Die Disassemblierung von derart generiertem Code ergibt allerdings den reinen Assemblercode ohne die beim Übersetzen expandierten Makros.

## Beispielprogramm

Ein sehr einfaches Programm, das zu Demonstrationszwecken häufig benutzte Hallo-Welt-Beispielprogramm, kann zum Beispiel in der Assemblersprache MASM für MS-DOS aus folgendem Assemblercode bestehen:

Vergleichende Gegenüberstellungen für das Hallo-Welt-Programm in unterschiedlichen Assemblerdialekten enthält diese Liste.
In einem Pascal-Quelltext (eine Hochsprache) kann der Programmcode für „Hallo Welt“ dagegen deutlich kürzer sein:

## Verschiedene Assemblersprachen

Jede Computerarchitektur hat ihre eigene Maschinensprache und damit Assemblersprache. Mitunter existieren auch mehrere Assemblersprachen-Dialekte („verschiedene Assemblersprachen“, sowie zugehörige Assembler) für die gleiche Prozessorarchitektur. Die Sprachen verschiedener Architekturen unterscheiden sich in Anzahl und Typ der Operationen.
Jedoch haben alle Architekturen die folgenden grundlegenden Operationen:

Daten lesen und schreiben von/nach Hauptspeicher in/aus dem Prozessor (i. A. von/zu einem Register); fast immer auch von-Register-zu-Register, meistens auch von-Hauptspeicher-zu-Hauptspeicher,
einfache logische Operationen (z. B. Bit-Operationen wie AND/OR/NOT/SHIFT),
einfache Kontrolle des Programmflusses (v. a. durch Prozessor-Flag-bedingte Sprünge),
einfache arithmetische Operationen (z. B. Ganzzahl-Addition, Ganzzahl-Vergleich).
Bestimmte Rechnerarchitekturen haben oft auch komplexere Befehle (CISC) wie z. B.:

Aufrufe von Ein- bzw. Ausgabegeräten,
eine einfache Operation (z. B. Addition) auf einen Vektor von Werten anwenden,
Speicherblock-Operationen (z. B. kopieren oder mit Nullen füllen),
höhere Arithmetik: Befehle, die durch (mehrere) einfache nachgebaut werden könnten (z. B. „Verringere Wert in Register A um 1; wenn es nun =0 ist, springe an Programmstelle xyz“ (DJZ A,xyz ~ 'decrement A, Jump if Zero to xyz')),
Gleitkomma-Arithmetik wie Gleitkomma-Addition, -Multiplikation, Sinus-, Kosinus- und Wurzelberechnung (entweder über spezielle Zusatzprozessoren realisiert oder über Softwareroutinen),
massive, direkte Parallelprogrammierbarkeit des Prozessors, etwa bei digitalen Signalprozessoren,
Synchronisation mit anderen Prozessoren für SMP-Systeme,
Unterbrechungssteuerungen, die besonders für Prozessrechner benötigt werden.

## Geschichte

Die erste Assemblersprache wurde 1947 von Kathleen Booth entwickelt. Sie entwarf im Anschluss den Assembler für die ersten Computersysteme am Birkbeck College der University of London. Zwischen 1948 und 1950 schrieb Nathaniel Rochester einen der frühsten symbolischen Assembler für eine IBM 701.
In den 1980er und frühen 1990er Jahren wechselte die Sprache, in der Betriebssysteme für größere Rechner geschrieben wurden, von Assembler zu Hochsprachen hin, meist C, aber auch C++ oder Objective C. Hauptauslöser war die steigende Komplexität von Betriebssystemen bei größerem verfügbaren Speicher im Bereich oberhalb von einem Megabyte.
In Assembler verblieben zum Beispiel das Zwischenspeichern von Registern bei Prozesswechsel (siehe Scheduler), oder bei der x86-Architektur der Teil des Boot-Loaders, der innerhalb des 512 Byte großen Master Boot Records untergebracht sein muss. Auch Teile von Gerätetreibern werden in Assemblersprache geschrieben, falls aus den Hochsprachen kein effizienter Hardware-Zugriff möglich ist. Manche Hochsprachencompiler erlauben es, direkt im eigentlichen Quellcode Assemblercode, sogenannte Inline-Assembler, einzubetten.
Bis ca. 1990 wurden die meisten Computerspiele in Assemblersprachen programmiert, da nur so auf Heimcomputern und den damaligen Spielkonsolen eine akzeptable Spielgeschwindigkeit und eine den kleinen Speicher dieser Systeme nicht sprengende Programmgröße zu erzielen war. Noch heute gehören Computerspiele zu den Programmen, bei denen am ehesten kleinere assemblersprachliche Programmteile zum Einsatz kommen, um so Prozessorerweiterungen wie SSE zu nutzen.
Bei vielen Anwendungen für Geräte, die von Mikrocontrollern gesteuert sind, war früher oft eine Programmierung in Assembler notwendig, um die knappen Ressourcen dieser Mikrocontroller optimal auszunutzen. Um Assemblercode für solche Mikrocontroller zu Maschinencode zu übersetzen, werden Cross-Assembler bei der Entwicklung eingesetzt.
Heute sind Mikrocontroller so günstig und leistungsfähig, dass moderne C-Compiler auch in diesem Bereich die Assembler weitgehend abgelöst haben. Nicht zuletzt aufgrund größerer Programmspeicher bei geringen Aufpreisen für die Chips fallen die Vorteile von Hochsprachen gegenüber den teils geringen Vorteilen der Assemblersprache immer mehr ins Gewicht.

## Vergleich zur Programmierung in einer Hochsprache

### Notwendigkeit

Es gibt verschiedene Aufgaben in einem Betriebssystem, die sich mit üblichen Hochsprachen nicht abbilden lassen.
Dazu gehören frühe Stufen des Starts des Betriebssystems, Setzen von Spezialregistern der Systemverwaltung, Prozesswechsel durch Prozesse selbst und durch Interrupts, Koroutinenverwaltung, Übergänge zwischen User- und Systemmode und einiges anderes mehr.
In ausführbaren Programmen sind Teile der Startup-Codes in Assembler geschrieben, die alles vorbereiten, um Hochsprachen-Code starten zu können.

### Nachteile

Assemblerprogramme sind sehr hardwarenah geschrieben, da sie direkt die unterschiedlichen Spezifikationen und Befehlssätze der einzelnen Computerarchitekturen (Prozessorarchitektur) abbilden. Daher kann ein Assemblerprogramm im Allgemeinen nicht auf ein anderes Computersystem (andere Prozessorarchitektur) übertragen werden, ohne dass der Quelltext angepasst wird. Das erfordert, abhängig von den Unterschieden der Assemblersprachen, hohen Umstellungsaufwand, unter Umständen ist ein komplettes Neuschreiben des Programmtextes erforderlich. Im Gegensatz dazu muss bei Hochsprachen oft nur ein Compiler für die neue Zielplattform verwendet werden.
Quelltexte in Assemblersprache sind fast immer deutlich länger als in einer Hochsprache, da die Instruktionen weniger komplex sind und deshalb gewisse Funktionen/Operationen mehrere Assemblerbefehle erfordern; z. B. müssen beim logischen Vergleich von Daten (= > < …) ungleiche Datenformate oder -Längen zunächst angeglichen werden. Die dadurch größere Befehlsanzahl erhöht das Risiko, unübersichtlichen, schlecht strukturierten und schlecht wartbaren Programmcode herzustellen.

### Vorteile

Nach wie vor dient Assembler zur Mikro-Optimierung von Berechnungen, für die der Hochsprachencompiler nicht ausreichend effizienten Code generiert. In solchen Fällen können Berechnungen effizienter direkt in Assembler programmiert werden. Beispielsweise sind im Bereich des wissenschaftlichen Rechnens die schnellsten Varianten mathematischer Bibliotheken wie BLAS oder bei architekturabhängigen Funktionen wie der C-Standardfunktion memcpy weiterhin die mit Assembler-Code. Auch lassen sich gewisse, sehr systemnahe Operationen unter Umgehung des Betriebssystems (z. B. direktes Schreiben in den Bildschirmspeicher) nicht in allen Hochsprachen ausführen.
Der Nutzen von Assembler liegt auch im Verständnis der Arbeits- und Funktionsweise eines Systems, das durch Konstrukte in Hochsprachen versteckt wird. Auch heute noch wird an vielen Hochschulen Assembler gelehrt, um ein Verständnis für die Rechnerarchitektur und seine Arbeitsweise zu bekommen.
