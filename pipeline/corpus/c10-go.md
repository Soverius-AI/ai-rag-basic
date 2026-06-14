---
url: https://de.wikipedia.org/wiki/Go_(Programmiersprache)
---

# Go (Programmiersprache)

## Überblick

Go (auch Golang) ist eine kompilierbare Programmiersprache, die Nebenläufigkeit und automatische Speicherbereinigung unterstützt. Entwickelt wurde Go von Mitarbeitern des Unternehmens Google Inc. Die Entwürfe stammen von Robert Griesemer, Rob Pike und Ken Thompson.

## Überblick

Go wurde von Google entwickelt, um Problemen, die C, C++, Java und Co. mit sich brachten, zu begegnen. Insbesondere Probleme im Hinblick auf skalierbare Netzwerkdienste, Cluster- und Cloud Computing haben das Team dazu geführt, Go zu entwickeln. Vor allem hat Go viel weniger Schlüsselwörter als die Sprachen aus der C-Familie. Zudem sollte Go eins lösen: die Compiler-Ineffizienz in der C-Familie. Wichtige Ziele bei der Entwicklung waren unter anderem die Unterstützung von Nebenläufigkeit mit nativen Sprachelementen und die Erleichterung der Softwareentwicklung mit großen Entwicklerteams und großen Codebasen. Go besitzt einen eigenen Garbage Collector, erlaubt die Verwendung von Zeigern, verzichtet jedoch auf Zeigerarithmetik. Go ist eine kompilierte Sprache, bei der Wert auf eine hohe Übersetzungsgeschwindigkeit gelegt wurde.
Go orientiert sich syntaktisch an der Programmiersprache C mit einigem Einfluss aus der Wirthschen Sprachfamilie (Pascal, Modula und insbesondere Oberon). Die Unterstützung für Nebenläufigkeit wurde nach Vorbild der von Tony Hoare eingeführten Communicating Sequential Processes (CSP) gestaltet und steht in Tradition der Programmiersprachen Newsqueak, Alef und Limbo.

## Merkmale und Sprachmittel

Go bietet Closures und Reflexion sowie Typsicherheit und eine automatische Speicherbereinigung.
Objektorientierung unterstützt Go durch Interfaces und Mixins. Auf Klassen und Vererbung von Klassen wird bewusst verzichtet. Außerdem ist es möglich, den Quellcode wie bei Java durch Pakete zu modularisieren.
Nebenläufigkeit wird durch Communicating Sequential Processes realisiert, die Goroutinen genannt werden und über Kanäle (Channels) miteinander kommunizieren können. Generische Typen wurden in Version 1.18 eingeführt.
Unicode wird in Form von UTF-8 unterstützt, sowohl für Strings als auch für Variablenbezeichner im Quelltext (allerdings nur Unicode-Buchstaben und -Ziffern), Δt = t2 - t1 ist also möglich.

## Syntax

Die Syntax von Go orientiert sich im Wesentlichen an der Syntax der Programmiersprache C, weicht davon aber an einigen Stellen ab. So kann beispielsweise auf den Abschluss von Anweisungen durch ein Semikolon verzichtet werden. Datentypen werden bei Deklarationen hinter den Bezeichner geschrieben statt davor, um die Deklaration von Funktionstypen zu vereinfachen. Code-Blöcke werden mit geschweiften Klammern abgegrenzt. Neben dem einfachen Gleichheitszeichen als Zuweisungsoperator gibt es zusätzlich den Operator :=, der Deklaration mit Typinferenz und Zuweisung kombiniert. Die Sprache umfasst mit 25 Schlüsselwörtern weniger Schlüsselwörter als ANSI C.
Kommentare werden wie in C oder C++ mit Schrägstrichen markiert; /* bis */ bezeichnet einen Kommentar, der auch mehrere Zeilen enthalten kann, // leitet einen Kommentar bis zum Ende der Zeile ein.
Jede Quelldatei gehört genau einem Paket an, das am Anfang der Datei mit der package-Anweisung angegeben wird.
Das Schlüsselwort für Funktionen lautet func, die Funktion main in dem „main“-Paket ist der Einsprungpunkt des Go-Programms. Funktionen können mehrere Werte zurückgeben. Es ist üblich, als letzten Rückgabewert den Status über den Erfolg oder Misserfolg des Funktionsaufrufs zu übermitteln und sogleich mit einer bedingten Kontrollstruktur zu überprüfen.
Jede Variable hat einen definierten Typ. Jede Variable, mit Ausnahme des „Blank identifier“ _, muss verwendet werden. Der „Blank identifier“ ignoriert eine Zuweisung, er ist ein anonymer Platzhalter.
Die Prüfung einer Bedingung in einer Kontrollstruktur wie if, for oder switch wird anders als bei anderen Sprachen nicht von Klammern umschlossen.

## Einfache Beispiele

Das obige Hallo-Welt-Programm gibt am Ausgabemedium den String Hallo Welt aus.
Ein weiteres Beispiel berechnet die Kreiszahl Pi näherungsweise über die Leibniz-Reihe.
Für die Berechnung werden nichtsequentielle Go-Routinen und ein Kanal verwendet:

Die einzelnen Summanden der mathematischen Reihe werden nichtsequentiell ausgeführt und schreiben ihre Ergebnisse jeweils in den Kanal ch. Gleichzeitig werden die Werte aus dem Kanal zu einem Gesamtergebnis addiert. Am Ausgabegerät erscheint die Ziffernfolge 3.141392653591793. Die Abweichung zur eigentlichen Kreiszahl ab der vierten Nachkommastelle ist vor allem auf die langsame Konvergenz der Leibniz-Reihe zurückzuführen.

## Typkonvertierung

Anders als bei der Sprache C müssen Typen immer konvertiert werden. Es ist zum Beispiel nicht möglich, einen Wert vom Typ Integer in einer Variable vom Typ Float zu speichern, ohne den Wert vorher zu konvertieren. Im folgenden Beispiel wird eine Variable vom Typ Integer deklariert und der Wert dieser Variable einer anderen Variable vom Typ Float zugewiesen. Man beachte, dass zwischen int und uint unterschieden wird. 8-Bit-„Unsigned Integer“ uint8 umfassen einen Bereich von (0 … 255) während int8 einen Bereich von (−128 … 127) umfassen. Diese Vorgehensweise der strikten Typisierung ist sehr sinnvoll, da schwer zu findende Programmierfehler so leichter erkannt werden können.

Sofern bei der Deklaration direkt ein Wert zugewiesen wird, ist die explizite Nennung des Typs optional. Der Compiler ermittelt ihn anhand des Wertes oder der angegebenen Typenkonverterfunktionen. Auf Paketebene muss jede Anweisung mit einem Schlüsselwort beginnen, deshalb kann die folgende Kurzform nur innerhalb von Funktionen verwendet werden:

## Zeiger

Im Gegensatz zu vielen Hochsprachen wie Java arbeitet die Programmiersprache Go mit Zeigern. Ein Zeiger (englisch pointer) enthält als Wert die Adresse eines Speicherbereichs. Bestimmte Aufgaben können ohne Zeiger nicht programmiert werden. Dazu gehört die Übergabe von Werten an Funktionen (Call by reference). Im folgenden Beispiel wird eine Variable vom Typ Integer mit dem Namen „n“ und dem Wert 100 initialisiert. Anschließend wird die Speicheradresse, also die Adresse im Speicher des Computers ausgegeben. Die Adresse der Variable „n“ wird also mit &n abgerufen. Die Syntax der Zeiger erinnert stark an die Sprache C.

Im nächsten Beispiel wird wieder eine Variable vom Typ Integer mit dem Namen „n“ und dem Wert 100 initialisiert. Dann wird eine Pointer-Variable vom Typ Integer-Zeiger deklariert. Der Typ einer Zeiger-Variable wird durch einen führenden Asterisk (*) vor dem Variablentyp deklariert. Aus int wird *int. Anschließend wird die Speicheradresse der Variable „n“ als Wert der Zeiger-Variable „p“ deklariert. Daraufhin wird jene Adresse des Speichers ausgegeben, die von der Variable „n“ belegt wurde. Zuletzt wird jener Wert ausgegeben, der sich in der Speicheradresse befindet. Der Wert einer Speicherstelle, der in der Zeiger-Variable „p“ deklariert ist, kann mit *p ermittelt werden.

Eine Zeiger-Adresse ohne gespeicherten Zeiger wird „nil pointer“ genannt. Man kann einfach abfragen, ob eine Zeigeradresse eine Speicheradresse als Inhalt hat oder nicht.

Im letzten Beispiel soll die Verwendung beim Aufruf einer Funktion dargestellt werden. Zuerst werden zwei Variablen vom Typ Integer deklariert. Der Inhalt dieser zwei Variablen soll getauscht werden.

Man kann also grob zusammenfassen, dass & die Speicheradresse einer Variable ermittelt, während * den gespeicherten Wert einer Speicheradresse ermittelt.

## Objektorientierung

Go unterstützt objektorientierte Programmierung, sie ist jedoch nicht klassenbasiert. Datentypen können in Go Methoden besitzen. Polymorphie wird über Interfaces (Schnittstellen) erreicht, über die Methodenaufrufe zur Laufzeit an die konkrete Implementierung gebunden werden (Dynamische Bindung). Für einen Datentyp muss nicht explizit deklariert werden, dass er ein bestimmtes Interface erfüllt. Diese Beziehung wird stattdessen implizit beim Kompilieren ermittelt, um lose Kopplung zu erreichen.
Statt Vererbung und Typ-Hierarchien kommt in Go Komposition zum Einsatz. Hierfür unterstützt Go eine Form von Mixins, die in Go embedding („Einbettung“) genannt wird: Eine Datenstruktur kann beliebig viele andere Datentypen einbetten, sodass sie deren Methoden und Datenfelder erhält.
Beispiel zu Typen, Interfaces und Mixins:

## Nebenläufigkeit

Zur Unterstützung der nebenläufigen Programmierung in Go wird das Konzept der Kanäle (channels) genutzt, das eine relativ stark abstrahierte Möglichkeit der synchronen oder asynchronen Kommunikation zwischen Go-Routinen bietet. Ein Kanal ist dabei ein Speicherbereich, der durch Semaphore abgesichert ist und eine Warteschlange (buffered/asynchronous channel) oder lediglich eine Schnittstelle (unbuffered/synchronous channel) zur Verfügung stellt. Über einen Kanal lassen sich dabei nur Daten eines festen Typs übertragen. Hierbei ist jedoch keinerlei Begrenzung hinsichtlich des Typs gegeben, auch Channels für Channels sind denkbar.
Ein Kanal wird durch den Aufruf make(chan typ) (synchron) bzw. make(chan typ, größe) (asynchron, wenn größe > 0) erstellt. Anschließend können Go-Routinen in den Channel schreiben, von ihm lesen und ihn schließen.
Bei synchronen Kanälen blockiert ein Lesezugriff, bis eine andere Go-Routine in den Channel schreibt, bzw. der Schreibzugriff, bis eine andere Routine liest.
Bei asynchronen Kanälen tritt ein solches Verhalten nur auf, wenn der zu lesende Channel leer bzw. der zu schreibende Channel voll ist.
Es gibt in Go keine Beschränkung hinsichtlich der Anzahl an Go-Routinen, die einen Channel lesen und schreiben.
Trotz der ausgefeilten Synchronisationsmechanismen kann bei der Benutzung von Channels ein Deadlock auftreten, der die Go-Laufzeitumgebung veranlasst, das Programm zu beenden.
Eine Go-Routine kann über das select-Konstrukt auf mehreren Channels gleichzeitig lauschen, bzw. versuchen, in mehrere Channels zu schreiben, wobei dasjenige case-Statement ausgeführt wird, das zuerst nicht mehr blockiert, oder es wird im Fall mehrerer Optionen eine pseudozufällige Wahl getroffen.
Daten werden mit kanal <- Wert in einen Kanal geschrieben und mit variable = <-kanal gelesen, wobei beim Lesen die Variablenzuweisung wegfallen kann. Das Lauschen auf einem Channel kann auch mit dem for-Konstrukt automatisiert werden, wobei die Schleife verlassen wird, sobald der Channel geschlossen ist.
Beispiel:

Im Beispiel ruft main() die Go-Routine zehnMal() auf, die einen empfangenen String zehnmal über den gleichen Kanal zurückgibt und ihn danach schließt. Durch den synchronen Kanal warten die beiden Go-Routinen aufeinander, sodass main() erst in die for-Schleife eintritt, wenn zehnMal() den String empfangen hat. Wäre der Kanal nicht synchron, könnte ein Deadlock auftreten, wenn main() die geschriebene Variable sofort wieder liest (und sie dabei aus dem Puffer entfernt) und zehnMal() dadurch vergeblich auf sein Argument wartet. Wichtig ist auch, dass zehnMal() nach dem Schreiben der Strings den Kanal schließt, da main() sonst die Schleife nicht verlassen kann.

## Implementierungen

Es gibt mindestens zwei Compiler für Go, die auf Linux, macOS, Windows und FreeBSD betrieben werden können und die Go-1-Spezifikation vollständig implementieren:

Gc
ist der offizielle Go-Compiler und wurde initial von Ken Thompson in C geschrieben, basierte auf der „Plan 9“-Toolchain und nutzte Yacc/Bison zum Parsen. Mit Version 1.5 wurde dieser Compiler von C nach Go übersetzt und ist damit self-hosting. Ursprünglich bestand der Compiler aus mehreren ausführbaren Kommandos, die unterschiedliche Namen je nach Ziel-Architektur hatten: „8 g“ für x86, „6 g“ für x86_64, „5 g“ für ARM. Mit Version 1.5 wurden sie zu einem einzelnen ausführbaren Kommando zusammengefasst (go tool compile), und die Ziel-Architektur kann über die Umgebungsvariable GOARCH gewählt werden.
Gccgo
von Ian Taylor ist ein Go-Frontend für die GNU Compiler Collection (GCC). Das in C++ geschriebene Frontend nutzt zum Parsen einen rekursiven Abstieg. Die folgenden Backend-Schritte sind die der Standard-GCC-Verarbeitung. Durch dieses Vorgehen wird zwar die Kompilierzeit im Vergleich zum Gc-Compiler erhöht, jedoch ist der produzierte Code effizienter. Die GNU Compiler Collection (GCC) unterstützt Go 1 mit Version 4.7.1 vollständig, der GNU Debugger (gdb) unterstützt Go ab Version 7.5.
Beide Compiler implementieren eine parallele Mark-and-Sweep-Speicherbereinigung.
Der offizielle Compiler wird von dem Kommandozeilen-Werkzeug go begleitet, das als Fassade für verschiedene Werkzeuge dient, wie z. B. dem Installieren von Paketen aus Quelltext-Repositories im Internet wie etwa GitHub oder Google Code (go get), dem automatischen Formatieren von Quelltext (go fmt), dem Ausführen von Tests (go test), dem Erzeugen von Dokumentation aus Quelltext-Kommentaren (go doc) oder dem Kompilieren des Projektes (go build), sodass keinerlei Makefiles nötig sind, wenn eine empfohlene Verzeichnisstruktur eingehalten wird.

## Geschichte

Die Entwurfsphase begann am 21. September 2007, anfangs als 20-Prozent-Projekt auf Initiative von Robert Griesemer, Rob Pike und Ken Thompson. Bald darauf stießen weitere Entwickler dazu, und Go wurde zum Vollzeit-Projekt. Am 30. Oktober 2009 wurde Go von Rob Pike in einem Google TechTalk präsentiert und die Veröffentlichung als freie Software angekündigt, die dann wie angekündigt am 10. November erfolgte. Seitdem sind zahlreiche Beiträge von Entwicklern aus der Go-Community außerhalb Googles hinzugekommen. Am 28. März 2012 wurde Version 1 freigegeben. Seitdem gelten Sprachspezifikation und Standardbibliothek als stabil und sollen innerhalb der 1.x-Serie auf Quelltext-Ebene abwärtskompatibel bleiben. Am 14. Mai 2013 wurde Go 1.1 freigegeben, das vor allem Performance-Verbesserungen an der Implementierung enthält. Jeweils sechs Monate später erschienen die Versionen Go 1.2 bis Go 1.10.
Vom 24. bis zum 26. April 2014 fand die erste Konferenz zu Go, die GopherCon, in Denver statt, die seitdem jährlich stattfindet.

## Maskottchen

Das Go-Maskottchen ist eine Taschenratte (englisch Gopher). Es wurde von Renée French entworfen, die auch Glenda, das Plan-9-Häschen, entworfen hat. Das Logo und das Maskottchen stehen unter der „Creative Commons Attribution 3.0“-Lizenz.
