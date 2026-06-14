---
url: https://de.wikipedia.org/wiki/Puffer%C3%BCberlauf
---

# Pufferüberlauf

## Überblick

Pufferüberläufe (englisch buffer overflow), nicht zu verwechseln mit Stapelüberläufen (englisch ‚stack overflows‘), gehören zu den häufigsten Sicherheitslücken in aktueller Software, die sich u. a. über das Internet ausnutzen lassen können. Im Wesentlichen werden bei einem Pufferüberlauf durch Fehler im Programm zu große Datenmengen in einen dafür zu kleinen reservierten Speicherbereich – den Puffer – geschrieben, wodurch nach dem Ziel-Speicherbereich liegende Speicherstellen überschrieben werden.
Ursache für unerwünschtes Schreiben außerhalb des Puffers kann nicht nur eine übergroße Datenmenge, sondern auch ein Überlauf (oder sonstige fehlerhafte Berechnung) der Zieladresse sein, die anzeigt, wo der Datensatz in den Puffer geschrieben werden soll. In diesem Fall wird von einem ‚pointer overflow‘ (vom englischen pointer, für „Zeiger“) gesprochen.

## Gefahren durch Pufferüberläufe

Ein Pufferüberlauf kann zum Absturz des betreffenden Programms, zur Verfälschung von Daten oder zur Beschädigung von Datenstrukturen der Laufzeitumgebung des Programms führen. Durch Letzteres kann die Rücksprungadresse eines Unterprogramms mit beliebigen Daten überschrieben werden, wodurch ein Angreifer durch Übermittlung von beliebigem Maschinencode beliebige Befehle mit den Privilegien des für den Pufferüberlauf anfälligen Prozesses ausführen kann. Dieser Code hat in der Regel das Ziel, dem Angreifer einen komfortableren Zugang zum System zu verschaffen, damit dieser das System dann für seine Zwecke verwenden kann. Pufferüberläufe in verbreiteter Server- und Clientsoftware werden auch von Internetwürmern ausgenutzt.
Angriffe mit Pufferüberläufen sind ein wichtiges Thema in der Computersicherheit und Netzwerksicherheit. Sie können nicht nur über jegliche Art von Netzwerken, sondern auch lokal auf dem System versucht werden. Behoben werden sie in der Regel nur durch kurzfristig gelieferte Fehlerkorrekturen (Patches) der Hersteller.
Interpretierte Sprachen sind, abgesehen von Fehlern im Interpreter, in der Regel nicht anfällig, da der Speicher vom Interpreter, und nicht vom Programm selbst, verwaltet wird.

## Programmiersprachen

Die wesentlichste Ursache für Pufferüberläufe ist die Verwendung von Programmiersprachen, die nicht die Möglichkeit bieten, Grenzen von Speicherbereichen automatisch zu überwachen, um eine Bereichsüberschreitung von Speicherbereichen zu verhindern. Dazu gehört besonders die Sprache C, die das Hauptgewicht auf Performance (und ursprünglich Einfachheit des Compilers) legt und auf eine Überwachung verzichtet, sowie die C-Weiterentwicklung C++. Hier ist ein Programmierer teilweise gezwungen, den entsprechenden Code von Hand zu generieren, wobei oft absichtlich oder aus Nachlässigkeit darauf verzichtet wird. Die Überprüfung ist häufig auch fehlerhaft implementiert, da während der Programmtests diese Programmteile meist nicht oder ungenügend getestet werden. Daneben stellen der (im Fall von C++) komplexe Sprachumfang und die Standardbibliothek sehr viele fehleranfällige Konstrukte zur Verfügung, zu denen es in vielen Fällen kaum eine Alternative gibt.
Die häufig verwendete Programmiersprache C++ bietet nur eingeschränkte Möglichkeiten zur automatischen Überprüfung von Feldgrenzen. Als Weiterentwicklung der Programmiersprache C übernimmt sie die meisten Eigenschaften von C, wobei sich aber das Risiko von Pufferüberläufen bei Benutzung von modernen Sprachmitteln (u. a. automatische Speicherverwaltung) weitestgehend vermeiden lässt. Aus Gewohnheit, Kompatibilitätsgründen zu vorhandenem C-Code, Systemaufrufen in C-Konvention sowie aus Performancegründen wird von diesen Möglichkeiten aber nicht immer Gebrauch gemacht. Laufzeitüberprüfungen sind im Gegensatz zu Sprachen wie beispielsweise Pascal oder Ada nicht Bestandteil der Sprache, lassen sich aber in einigen Anwendungsfällen (z. B. mit Smart Pointern) nachrüsten.
Da die meisten Programmiersprachen auch Standardbibliotheken definieren, bedeutet die Wahl einer Sprache meist auch die Verwendung der entsprechenden Standardbibliotheken. Im Fall von C und C++ enthält die Standardbibliothek eine Anzahl von gefährlichen Funktionen, die zum Teil gar keine sichere Verwendung zulassen und zu denen zum Teil keine Alternativen bestehen.
Auf Programmiersprachenebene kann die Gefahr von Pufferüberläufen durch die Verwendung von Programmiersprachen, die konzeptionell sicherer als C++ oder C sind, verringert oder ausgeschlossen werden. Ein sehr viel geringeres Risiko besteht zum Beispiel in Programmiersprachen wie Rust, Java, C# oder der Pascal-Familie Modula-2, Object Pascal oder Ada.
Fast ausgeschlossen sind Pufferüberläufe beispielsweise in der Programmiersprache Java, da die Ausführung im Bytecode überwacht wird. Aber auch in Java gibt es einerseits Pufferüberläufe, deren Ursache im Laufzeitsystem liegt und von denen mehrere JRE-Versionen betroffen sind.

## Prozessoren und Programmierstil

Weitere Eigentümlichkeiten von C und C++ sowie der am häufigsten eingesetzten Prozessoren machen das Auftreten von Pufferüberläufen wahrscheinlich. Die Programme in diesen Sprachen bestehen zum Teil aus Unterprogrammen. Diese besitzen lokale Variablen.
Bei modernen Prozessoren ist es üblich, die Rücksprungadresse eines Unterprogramms und dessen lokale Variablen auf einen als Stack bezeichneten Bereich zu legen. Dabei werden beim Unterprogrammaufruf zunächst die Rücksprungadresse und danach die lokalen Variablen auf den Stack gelegt. Bei modernen Prozessoren wie dem Intel Pentium wird der Stack durch eingebaute Prozessorbefehle verwaltet und wächst zwingend nach unten. Werden Felder oder Zeichenketten in den lokalen Variablen verwendet, werden diese meist nach oben beschrieben. Wird die Feldgrenze nicht geprüft, kann man damit durch Überschreiten des Feldes die Rückkehradresse auf dem Stack erreichen und gegebenenfalls absichtlich modifizieren.
Das folgende Programmstück in C, das in ähnlicher Form oft verwendet wird, zeigt einen solchen Pufferüberlauf:

Bei Prozessoren, die den Stack nach unten beschreiben, sieht dieser vor dem Aufruf von gets (Funktion der Standard-Bibliothek von C) so aus (wenn man vom eventuell vorhandenen Base Pointer absieht):

Der Stack wächst nach unten, die Variable wird nach oben überschrieben
gets liest eine Zeile von der Eingabe und schreibt die Zeichen ab line[0] in den Stack. Es überprüft die Länge der Zeile nicht. Gemäß der Semantik von C erhält gets nur die Speicheradresse als Pointer, jedoch keinerlei Information über die verfügbare Länge. Wenn man jetzt 1004 Zeichen eingibt, überschreiben die letzten 4 Bytes die Rücksprungadresse (unter der Annahme, dass eine Adresse hier 4 Bytes groß ist), die man auf ein Programmstück innerhalb des Stack richten kann. In den ersten 1000 Zeichen kann man gegebenenfalls ein geeignetes Programm eingeben.

00@45eA/%A@4 … ... … ... … ... … ... … ... … ... 0A&%
Eingabe, wird von gets in den Stack geschrieben (1004 Zeichen)

Überschreiben der Rücksprungadresse und Programmcode im Stack
Falls das Programm höhere Privilegien besitzt als der Benutzer, kann dieser unter Ausnutzung des Pufferüberlaufs durch eine spezielle Eingabe diese Privilegien erlangen.

## Gegenmaßnahmen

### Programmerstellung

Eine sehr nachhaltige Gegenmaßnahme besteht in der Verwendung typsicherer Programmiersprachen und -werkzeuge, wie zum Beispiel Java oder C#, bei denen die Einhaltung von zugewiesenen Speicherbereichen gegebenenfalls schon beim Übersetzen in Maschinensprache mit dem Compiler kontrolliert, aber spätestens zur Laufzeit mit entsprechendem Programmcode überwacht wird. Es ist hierbei unerlässlich, dass das Verändern von Zeigervariablen nur nach strengen, einschränkenden Regeln erfolgen darf, und es ist in diesem Zusammenhang auch hilfreich, wenn ausschließlich das Laufzeitsystem automatische Speicherbereinigungen durchführt.
Bei der Erstellung von Programmen muss also auf die Überprüfung aller Feldgrenzen geachtet werden. Dies liegt bei nicht-typsicheren Programmiersprachen in der Verantwortung des Programmierers. Allerdings sollte vorzugsweise die Verwendung von Programmiersprachen, die automatisch Feldgrenzen überwachen, in Erwägung gezogen werden, was jedoch nicht immer ohne weiteres möglich ist. Bei Verwendung von C++ sollte die Verwendung von Feldern im C-Stil so weit wie möglich vermieden werden.

Gegenmaßnahme: fgets überprüft die Eingabelänge

### Überprüfung des Programmcodes

Spezielle Überprüfungswerkzeuge erlauben die Analyse des Codes und entdecken mögliche Schwachstellen. Allerdings kann der Code zur Feldgrenzenüberprüfung fehlerhaft sein, was oft nicht getestet wird.

### Unterstützung durch Compiler

In C und C++ steht eine sehr große Auswahl bestehender Programme zur Verfügung. Moderne Compiler wie neue Versionen des GNU C-Compilers erlauben die Aktivierung von Überprüfungscode-Erzeugung bei der Übersetzung.
Sprachen wie C erlauben aufgrund ihres Designs nicht immer die Überprüfung der Feldgrenzen (Beispiel: gets). Die Compiler müssen andere Wege gehen: Sie fügen zwischen der Rücksprungadresse und den lokalen Variablen Platz für eine Zufallszahl (auch „Canary“ genannt) ein. Beim Programmstart wird diese Zahl ermittelt, wobei sie jedes Mal unterschiedliche Werte annimmt. Bei jedem Unterprogrammaufruf wird die Zufallszahl in den dafür vorgesehenen Bereich geschrieben. Der erforderliche Code wird vom Compiler automatisch generiert. Vor dem Verlassen des Programms über die Rücksprungadresse fügt der Compiler Code ein, der die Zufallszahl auf den vorgesehenen Wert überprüft. Wurde sie geändert, ist auch der Rücksprungadresse nicht zu trauen. Das Programm wird mit einer entsprechenden Meldung abgebrochen.

Gegenmaßnahme: Zufallszahlbarriere
Daneben kann man manche Compiler auch veranlassen, beim Unterprogrammaufruf eine Kopie der Rücksprungadresse unterhalb der lokalen Felder zu erzeugen. Diese Kopie wird beim Rücksprung verwendet, die Ausnutzung von Pufferüberläufen ist dann wesentlich erschwert:

Gegenmaßnahme: Kopie der Rücksprungadresse

## Compiler und Compilererweiterungen

Für die GNU Compiler Collection existieren beispielsweise zwei verbreitete Erweiterungen, die Maßnahmen wie die oben beschriebenen implementieren:

Der Stack Smashing Protector von IBM, ehemals als ProPolice bekannt (Homepage, englisch).
Der Stack Guard, entwickelt an der Oregon Health & Science University, zwischenzeitlich bei der Linux-Distribution Immunix, jetzt bei Novell.

## Heap-Überlauf

Ein Heap-Überlauf ist ein Pufferüberlauf, der auf dem Heap stattfindet. Speicher auf dem Heap wird zugewiesen, wenn Programme dynamischen Speicher anfordern, etwa über malloc() oder den new-Operator in C++. Werden in einen Puffer auf dem Heap Daten ohne Überprüfung der Länge geschrieben und ist die Datenmenge größer als die Größe des Puffers, so wird über das Ende des Puffers hinausgeschrieben und es kommt zu einem Speicherüberlauf.
Durch Heap-Überläufe kann durch Überschreiben von Zeigern auf Funktionen beliebiger Code auf dem Rechner ausgeführt werden, insbesondere wenn der Heap ausführbar ist. FreeBSD hat beispielsweise einen Heap-Schutz, hier ist das nicht möglich. Sie können nur in Programmiersprachen auftreten, in denen bei Pufferzugriffen keine Längenüberprüfung stattfindet. C, C++ oder Assembler sind anfällig, Java oder Perl sind es nicht.
Zum Bsp. wurde am 23. Juni 2015 von Adobe bekannt gegeben, dass durch solch einen Pufferüberlauf beliebiger Schadcode auf Systemen ausgeführt werden könne und so die Kontrolle über das System übernommen werden könnte, auf denen der Flash Player installiert sei.

## Beispiel

Da strcpy() die Größen von Quelle und Ziel nicht überprüft, sondern als Quelle einen null-terminierten ('\0') Speicherbereich erwartet, ist auch die folgende Variante unsicher (sie wird allerdings nicht über "buf" hinausschießen, sondern ggf. über das Ende des "s" zugewiesenen Speicherbereichs).

Der strncpy-Befehl dagegen kopiert maximal n Zeichen von der Quelle zum Ziel und funktioniert somit, wenn s nullterminiert oder größer als BUFSIZE ist.

Einige Betriebssysteme, z. B. OpenBSD, bieten die Funktion strlcpy an, die ihrerseits sicherstellt, dass der Zielstring nullterminiert wird und das Erkennen eines abgeschnittenen Zielstrings vereinfacht.
