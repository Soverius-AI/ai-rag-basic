---
url: https://de.wikipedia.org/wiki/COBOL
---

# COBOL

## Überblick

COBOL ist eine Programmiersprache, die in der Frühzeit der Computerentwicklung, Ende der 1950er-Jahre, entstand und bis heute verwendet wird. Der Stil dieser Programmiersprache ist stark an die natürliche Sprache angelehnt und dient vor allem der Programmierung kaufmännischer Anwendungen.
Die Abkürzung COBOL steht für „Common Business Oriented Language“.

## Geschichte

COBOL entstand aus dem dringenden Wunsch, eine hardwareunabhängige, standardisierte, problemorientierte Sprache für die Erstellung von Programmen für den betriebswirtschaftlichen Bereich anwenden zu können. Die Programmierung kaufmännischer Anwendungen unterscheidet sich von technisch-wissenschaftlichen Anwendungen vor allem durch die Handhabung großer Datenmengen statt der Ausführung umfangreicher Berechnungen. Nachdem die Programmierung technisch-wissenschaftlicher Anwendungen durch FORTRAN bereits sehr vereinfacht worden war, sollte die neue Programmiersprache   kaufmännische Problemstellungen, insbesondere die Handhabung großer Datenmengen und deren Ein- und Ausgabe stärker unterstützen – wozu bis dahin weitgehend Assemblersprachen verwendet wurden.
Eine vom amerikanischen Verteidigungsministerium eingesetzte Arbeitsgruppe entwickelte einen Standard aus der Verbindung der damaligen Programmiersprachen FLOW-MATIC von Sperry Univac (Remington-Rand), Commercial Translator (COMTRAN) von IBM und FACT von Minneapolis-Honeywell.
Namentlich beteiligt hieran war Grace M. Hopper, die bereits FLOW-MATIC sowie den ersten Compiler (A-0) entwickelt hatte.
Das Ergebnis wurde 1960 als COBOL-60 von CODASYL verabschiedet, in der Folgezeit weiterentwickelt und von nationalen und internationalen Normierungsinstituten (ANSI, ISO) standardisiert.
COBOL fand schnell den Weg in die zivile Nutzung als eine der ersten kommerziell eingesetzten kompilierbaren Programmiersprachen und ist bis heute eine der am weitesten verbreiteten für kaufmännische Anwendungen.
2020 entstand in den USA noch einmal Nachfrage nach COBOL-Entwicklern, als im Zuge der Corona-Pandemie die Arbeitslosenzahlen sprunghaft anstiegen, aber die Verwaltungssysteme der Arbeitslosenversicherung im US-Bundesstaat New Jersey der Nachfrage nicht mehr gewachsen waren.

## Sprachsyntax

Ursprünglich wurde COBOL nur in Großbuchstaben geschrieben, da nur Lochkarten und Zeilendrucker ohne Kleinbuchstaben zur Verfügung standen. Auch heute wird nicht zwischen Groß- und Kleinschreibung unterschieden. COBOL ist somit case insensitive.
Ein COBOL-Programm ist in Teile (DIVISION), Kapitel (SECTION) und Abschnitte (PARAGRAPH) gegliedert.
Die vier DIVISIONs sind in ihrer festgelegten Reihenfolge:

Identification Division mit dem Programmnamen und einigen weitgehend obsoleten Paragraphen für Kommentare;
Environment Division, in der Schnittstellen zum Betriebs- und dessen Dateisystem definiert werden;
Data Division mit der Definition der Programmvariablen und Datenstrukturen und
Procedure Division mit den prozeduralen Anweisungen.
In der IDENTIFICATION DIVISION gibt es keine SECTIONs, und in der PROCEDURE DIVISION können neuerdings SECTIONs und auch PARAGRAPHs entfallen. ENVIRONMENT und DATA DIVISIONs können unter Umständen ganz entfallen.
Hieran sieht man die strikte Trennung von Datendeklaration und prozeduralen Anweisungen, durch die sich COBOL auszeichnet. Im Prozedurteil kann man nur Variablen benutzen, die vorher im Datenteil deklariert worden sind. Auch das Aussehen von formatierten Ausgaben wird nicht im Prozedurteil, sondern im Datenteil durch die PICTURE-Klausel festgelegt. Der REPORT WRITER macht es möglich, die Struktur einer Druckliste komplett im Datenteil als physische Struktur von Seiten und logische Struktur von Postenzeilen mit Gruppensummen etc. zu beschreiben, ohne dass sich der Prozedurteil darum kümmern muss.

### Kodierung

Das traditionelle Kodierschema bei COBOL entspricht der Lochkarte mit ihren 80 Spalten, d. h. Schreibstellen.
Dabei waren die ersten 6 Stellen für die Zeilennummerierungen reserviert. Spalte 7 wurde zur Kennzeichnung einer Kommentar- oder einer Fortsetzungszeile beziehungsweise einer, die nur für das Debugging übersetzt werden soll, reserviert. Spalte 8 bis 11 (Area A) beinhaltete die Namen von Divisions, Sections und Paragraphs. Die 12. bis 72. Spalte (Area B) beherbergten alles übrige, zum Beispiel Anweisungen (statements). Spalte 73 bis 80 waren für sonstige Markierungen wie z. B. den Namen des Programms oder Quelltext-Elementen vorgesehen.
Die Standards ab 2002 kennen neben dem fixen Zeilenformat, das die Einteilung in Area A und Area B aufhebt, ein ganz freies Format, das in den Spalten 1 bis 255 alles erlaubt. Die Sonderrolle der Spalte 7 entfällt, da Kommentare mit *> eingeleitet, Literale mittels & zusammengesetzt und Debuggingzeilen mittels bedingter Übersetzung realisiert werden >>DEFINE … >>IF ….
Ein fast minimales COBOL-Programm:

### Datendeklarationen

… erfolgen in der Data Division

Dateien und deren Satzstrukturen werden in der File Section beschrieben.
Statische (globale) Variablen werden in der Working-Storage Section definiert.
Automatische (lokale bzw. dynamische) Variablen werden in der Local-Storage Section definiert (siehe Stack).
Aufruf-Parameter werden in der Linkage Section definiert.
Komplexe Drucklisten werden in der Report Section definiert.
Bildschirmein- und -ausgabe in der Screen Section.
Zur Deklaration von Variablen bietet COBOL zahlreiche Klauseln, deren wichtigsten die Stufennummer, die PICTURE-Klausel und die USAGE-Klausel sind.

Stufennummer

Die Stufennummer 77 kennzeichnet eine freistehende Variable. Die Stufennummer 01 kann ebenfalls eine freistehende Variable bezeichnen, leitet aber normalerweise die Deklaration einer Gruppe ein – was in anderen Sprachen als Record (Pascal u. ä.) oder struct (C++, C u. ä.) bezeichnet wird. Die Stufennummern 02 bis 49 kennzeichnen dann dieser Gruppe untergeordnete Datendeklarationen, die selber auch wieder Gruppen sein können. Eine Datendeklaration, die keine untergeordneten Datendeklarationen (d. h. mit höheren Stufennummern) hat, wird in COBOL als elementar (elementary item) bezeichnet, anderenfalls ist es eine Gruppen-Variable (group item). Derartige Datendeklarationen kann man abstrakt als Baum darstellen; mit den Gruppen als Knoten und den elementary items als Blättern – denen über die PIC-Klausel Datenformate zugeordnet sind.
Mit der speziellen Stufennummer 66 kann man ganzen Speicherbereichen einen anderen Namen geben, mit 88 einen Bedingungsnamen definieren, der wie ein boolescher Ausdruck in zum Beispiel einer IF-Anweisung verwandt werden kann.
Die Stufennummern werden üblicherweise zweistellig geschrieben. Aus den Lochkartenzeiten stammt die Gewohnheit, die Stufennummern in einer Gruppendefinition nicht fortlaufend, sondern in Schritten von 5 oder 10 zu vergeben, weil man dann Zwischenstufen einfügen konnte, ohne gleich einen ganzen Kartenstapel neu lochen zu müssen.
Das folgende Beispiel beschreibt das Layout der traditionellen 80-stelligen COBOL-Programmzeile:

Die Definition eines Wertebereiches sieht als Beispiel so aus:

Internes und Externes Datenformat

Äußere Erscheinung und interne Repräsentation werden im Wesentlichen durch die Klauseln PICTURE und USAGE bestimmt. Mit USAGE COMP werden binäre Rechen- und Vergleichsoperationen ausgeführt, USAGE DISPLAY dient zur Anzeige. Arithmetische Operationen und Vergleiche (kleiner/gleich/größer …) sind mit USAGE COMP-3 direkt möglich.
Mit Angaben  hinter PICTURE wird die Anzahl der Stellen/Zeichen oder auch Editiersymbole wie Dezimal- oder Tausendertrennzeichen, Vorzeichen, Währungssymbole, gedachtes Dezimaltrennzeichen (V) etc. festgelegt. Sie bestimmen eine elementare Variable damit als entweder alphabetisch, alphanumerisch, numerisch oder numerisch-editiert. Sind für arithmetische Operationen (wie ADD BETRAG-X to SUMME-Y oder IF DATUM-A > DATUM-B) Variablen mit uneinheitlichen numerischen Formaten beteiligt, so wird vor der Operation automatisch eines oder beide der Datenfelder in ein (für die Operation) gültiges Format konvertiert.
Die Formatierung für sichtbare Ausgaben wird durch die Datendeklaration bestimmt, nicht durch prozedurale Anweisungen wie in Sprachen wie Pascal oder C. Weitere der insgesamt etwa 60 möglichen Klauseln einer Datendeklaration möge man in einem COBOL-Handbuch nachschlagen.

Tabellenformate

Mehrfach auftretende Daten (in COBOL ‚Tabellen‘ genannt, siehe Feld (Datentyp)) werden durch die OCCURS-Klausel definiert; Beispiel für eine mehrdimensionale Tabelle:

05 PRODUKT      OCCURS 100.
10 PRODUKTNR    PICTURE 999.
10 PRODUKTNAME  PICTURE X(30).
10 PREIS        PICTURE 999V99   OCCURS 5 INDEXED BY IND_KUNDENGRUPPE.

Die Occurs-Klausel ist sowohl je Datengruppe als auch für Elementarfelder möglich. Die Adressierung der jeweiligen Dimension kann alternativ durch die Index-Methode (Zusatz Indexed BY <IND-NAME>) oder durch ein Subscript erfolgen:

Ein ‚Subscript‘ ist der Name einer (numerischen) Variable im jeweiligen COBOL-Befehl (Beispiel: MOVE PRODUKTNR (PNR) TO xx).
Ein ‚Index‘ enthält die Distanz der zu adressierenden Datendimension zum Beginn der Tabelle und wird mit einem SET-Befehl explizit auf diesen Wert eingestellt: SET IND_KUNDENGRUPPE BY KUNDENGRP. Die Indizierung ist vorteilhaft, wenn sich mehrere/viele Einzelbefehle auf die zu adressierende Dimension beziehen, weil der wesentliche Teil der Adressberechnung nicht je Befehlsausführung, sondern bei SET erfolgt.
Die Maschinenbefehle zur Berechnung des Abstands der durch Index/Subscript adressierten Dimension zum Anfang der Tabelle {z. B. (PNR-1)*Länge(Datengruppe PRODUKT)} werden in beiden Versionen automatisch dem eigentlichen COBOL-Befehl (MOVE, IF usw.) vorangestellt und ausgeführt. In mehrdimensionalen Tabellen (siehe Beispiel) können beide Adressierungsmethoden gemischt angewendet werden.
Mit dem Zusatz DEPENDING ON xxx kann die Anzahl der Tabellenelemente variabel definiert werden.

### Prozedurale Anweisungen

In der Procedure Division findet sich der ausführbare Programmcode. Die Ausführung beginnt mit der ersten Anweisung hinter der Überschrift Procedure Division bzw. den DECLARATIVES, deren Ausführung nur durch bestimmte Ereignisse ausgelöst wird. Danach werden alle Anweisungen sequentiell ausgeführt, bis ein STOP RUN das Programm beendet, oder ein GO TO bzw. PERFORM (mit anschließender Rückkehr) zu einer anderen Stelle im Programm verzweigt.
Die Procedure Division besteht aus einer oder mehreren Prozeduren.
Eine Prozedur ist entweder

eine Section: Bezeichnet mit einem Namen, der in Spalte 8 beginnt, gefolgt von dem Schlüsselwort SECTION und einem Punkt; enthält meist mehrere Paragraphen.
ein Paragraph: Bezeichnet mit einem Namen, der in Spalte 8 beginnt und mit Punkt endet.
Eine solche Prozedur enthält die Anweisungen des COBOL-Programms (Statements).
Prozeduren können mit der COBOL-Anweisung Perform von anderen Stellen im Programm aus ausgeführt/aufgerufen werden. Durch den Zusatz THRU <proz-name> in der Perform-Anweisung können mehrere Prozeduren zur Ausführung zusammengefasst werden. Es gibt keine formale Parameterübergabe, alle Prozeduren haben Zugriff auf alle Felder in der Data Division.
Mittels CALL können externe Programme (COBOL oder andere Programmiersprachen) aufgerufen werden. Dabei werden Parameter By Reference oder By Content (je nach COBOL-Version auch By Value genannt) übergeben, wodurch u. a. unterschieden wird, ob übergebene Parameter-Variablen vom aufgerufenen Programm für das aufrufende Programm wirksam geändert werden können (by ref) oder nicht (by content).
COBOL unterstützt seit dem Standard 1974 (VS COBOL II) die strukturierte Programmierung; seither ist die Verwendung von ‚GOTO‘ zwar noch möglich, aber verpönt. In der professionellen Programmierung herrschen hausinterne Programmierstandards, welche in der Mehrzahl festlegen, dass Prozeduren ausschließlich aus einer Section bestehen.
COBOL wurde mit einer an der englischen Sprache angelehnten Syntax entworfen, um ‚selbst-dokumentierend‘ und auch für Nicht-Programmierer im Wesentlichen leicht lesbar zu sein. Alle Anweisungen beginnen mit einem in den ‚COBOL-Schlüsselwörtern‘ reservierten Verb (wie in MOVE x TO y) – im Gegensatz zu Kurznotierungen (wie y = x) in anderen modernen Programmiersprachen.

#### Einfache Codebeispiele

Zur Darstellung der Syntax wird einfache C-Syntax zu Hilfe genommen.

Eine Zuweisung a = b in C
entspricht in COBOL MOVE b TO a
Arithmetische Ausdrücke und Zuweisungen:
a = b + c
kann in COBOL folgendermaßen geschrieben werden: ADD b TO c GIVING a
oder alternativ COMPUTE a = b + c
analog b = a - 1 in C
entspricht in COBOL SUBTRACT 1 FROM a GIVING b
Der Inkrementoperator ++a in C
entspricht in COBOL ADD 1 TO a
Der Dekrementoperator --a in C
entspricht in COBOL SUBTRACT 1 FROM a

#### IF/ELSE und EVALUATE

IF und ELSE funktionieren so, wie man es erwartet. Das End-If wurde erst mit dem COBOL85-Standard eingeführt. Im COBOL74-Standard wurde die IF-Anweisung noch durch einen Punkt beendet, was eine leicht zu übersehende Fehlerquelle darstellen konnte.
COBOL85-Syntax:

COBOL68-Syntax:

EVALUATE macht die mehrfache Fallunterscheidung, womit jede Form von CASE oder Switch (wie in C), Folgen von IF/ELSIF/ELSIF/END-IF bis hin zu vollständigen Entscheidungstabellen dargestellt werden kann. Die Anweisung EVALUATE wurde erstmals in COBOL85 integriert, COBOL-Versionen vor der 85-Version kennen kein EVALUATE, so dass dort mehrfache Fallunterscheidungen über – teils schwierig zu lesende – IF-Konstrukte abgebildet werden mussten.

Eine COBOL-Spezialität sind die sogenannten Conditional Statements, das sind COBOL-Anweisungen mit einer Bedingungs-Klausel:
COBOL85-Syntax:

#### Schleifen

Eine C-Schleife wie „for (i=0; i<10; ++i) {...}“ wird in COBOL mit PERFORM kodiert (COBOL85-Syntax):

## COBOL heute

Das Haupteinsatzgebiet der Programmiersprache COBOL ist die betriebswirtschaftliche Datenverarbeitung. Wenn EDV-Programme in eine Benutzerschnittstelle, einen Verarbeitungsteil und einen Datenhaltungsteil strukturiert werden, liegt der Einsatzschwerpunkt von COBOL-Programmen im Verarbeitungsteil. In modernerer Terminologie entspricht COBOL dem Backend.
Insbesondere auf PCs, aber auch auf anderen Systemen können als Benutzerschnittstelle eine Vielzahl von Möglichkeiten zum Einsatz kommen. Neben den Standard-COBOL-Anweisungen ACCEPT zur Tastatureingabe und DISPLAY zur Bildschirmausgabe kommt aus der X/OPEN-Spezifikation die SCREEN SECTION hinzu, außerdem herstellerspezifische Lösungen. Hiermit lassen sich als Benutzerschnittstelle Terminals programmieren.
Sofern die Anwendungsarchitektur in mehrere Schichten getrennt ist, kann die Präsentationsschicht auch auf den Client verlagert werden. Dies erlaubt den Zugriff auf COBOL-Anwendungen über grafische Frontends. Client und Server müssen dazu ein Kommunikationsprotokoll unterstützen. Musste ein solches ursprünglich manuell entwickelt werden, so stellten später die Architekturmuster der SOA entsprechende Standards bereit.
Der Datenhaltungsteil kann mit COBOL-Mitteln oder mit einem Datenbankanschluss realisiert werden. Für den Zugriff auf relationale Datenbanken stellt COBOL embedded SQL (EXEC SQL) zur Verfügung. Auch kann man Vorratsprozeduren in COBOL programmieren.
COBOL ist in der Wirtschaft, insb. bei Banken und Versicherungen, und der Verwaltung, z. B. bei den Finanzbehörden, weit verbreitet. Aufgrund der historisch gewachsenen Anzahl an COBOL-Programmen ist es für die Unternehmen sehr schwer und sehr teuer, diese zu pflegen und zu ersetzen. Mangelnde Dokumentation ist hier jedoch als Hauptgrund zu nennen (Softwarekrise), nicht jedoch die Unersetzlichkeit von COBOL.
Einer Umfrage aus dem Jahr 2022 in 49 Ländern zufolge wird der Bestand an produktiv genutztem COBOL-Code auf rund 800 Milliarden Zeilen geschätzt.
Einige der Neuerungen in COBOL der letzten Jahrzehnte – in Klammern der Standard, der dies einführte:

Nested Program (COBOL 85) erlaubt es, innerhalb eines COBOL-Programms Prozeduren mit lokalen Variablen zu schreiben.
Intrinsic Functions (Anhang von 1989 zu COBOL 85) für mathematische und andere Funktionen.
Das COBOL-Verb XML PARSE (proprietär) bietet einen integrierten XML-Parser. Ebenso gibt es JSON PARSE für JSON.
OO-Erweiterungen (COBOL 2002) erleichterten die Zusammenarbeit mit objektorientierten Programmiersprachen.
Formatfreie Notation (COBOL 2002) erlaubt eine Zeilenlänge von 255 Zeichen und ein Verzicht auf die alten Margins A und B.
Bedingte Kompilierung (COBOL 2002) und ein preprocessing (proprietär).

## Entwicklung und Standardisierung

Ein Ausschuss des oben erwähnten CODASYL erarbeitete im Jahr 1959 einige Grundsätze, legte den Namen COBOL fest und veröffentlichte im April 1960 seinen Abschlussbericht mit den ersten Spezifikationen der Programmiersprache, die als COBOL-60 in die Geschichte eingingen.
Im Rahmen von CODASYL gab es dann ständig einen Ausschuss, teilweise mit Unterausschüssen, der bzw. die sich mit der Weiterentwicklung von COBOL befassten und im Lauf der Jahrzehnte verschiedene Namen und verschiedene Status innerhalb von CODASYL hatten.

### Entwicklung durch CODASYL

COBOL-60 zeigte die Praktikabilität der angestrebten gemeinsamen Programmiersprache.
COBOL-61 war nur teilweise kompatibel mit der Vorgängerversion, wurde aber weitgehend in zahlreichen Compilern implementiert. CODASYL hat sich dann darauf verpflichtet, die Sprache von da aus evolutionär weiterzuentwickeln, statt revolutionäre Änderungen vorzunehmen.
Mit COBOL-61 EXTENDED kamen u. a. die SORT-Möglichkeiten und der REPORT WRITER hinzu.
COBOL, EDITION 1965 fügte u. a. interne Tabellen und Optionen für Dateibearbeitung hinzu.
Weitere Dokumente zur Entwicklung sind die CODASYL COBOL JOURNAL OF DEVELOPMENT der Jahre 1968, 1969, 1970, 1973, 1976, 1978, 1981 und 1984.

### Erweiterungen durch X/Open, die Open Group

Im Rahmen der Bemühungen um einen Standard für das Betriebssystem Unix durch die Industrievereinigung X/Open, die Open Group, wurden dafür auch Spezifikationen für COBOL vereinbart, deren jüngste von 1991 aus den höchsten Stufen der vorgeschriebenen Module von COBOL-85 besteht, mit der Erweiterung von 1989 durch die „Intrinsic Functions“, aber ohne Report-Writer, Segmentierung und Debugging, dafür aber mit eigenen Erweiterungen für Interaktion mit Bildschirmformularen (SCREEN SECTION und ACCEPT/DISPLAY), gemeinsamen Zugriff auf Dateien mit Sperren auf Dateien und Sätze, sowie Internationalisierung mit z. B. Doppelbyte-Zeichensätzen.

### Standardisierung durch ANSI

Im Jahr 1960 wurde, angeregt durch den Industrieverband „Computer and Business Equipment Manufacturers Association“, im Rahmen der US-amerikanischen Standardisierungsorganisation (ASA) ein „Committee on Computers and Information Processing“ mit der Nummer X3 geschaffen, welches dann einen Unterausschuss X3.4 für Programmiersprachen einrichtete, der wiederum einen Unterausschuss X3.4.4 für COBOL einrichtete. Im Dezember 1962 wurden Hersteller und andere Interessierte zur Mitarbeit an der Standardisierung eingeladen, wobei dann festgelegt wurde, dass die Standardisierung auf den Publikationen des CODASYL fußen sollten.
Der erste Standard wurde am 23. August 1968 als USA Standard COBOL 1968 verabschiedet und als Dokument X3.23-1968 veröffentlicht.
Der Ausschuss X3.4.4 wurde dann zum Technischen Komitee X3J4, wie er auch heute noch heißt, und machte sich an die Arbeit, den nächsten Standard zu entwickeln, der dann am 10. Mai 1974 als American National Standard COBOL 1974 verabschiedet und dann im Dokument ANS X3.23-1974 veröffentlicht wurde.
Der nächste Standard wurde im April 1985 von X3J4 verabschiedet und im September vom zuständigen Entscheidungsgremium der inzwischen ANSI heißenden Organisation angenommen und dann als ANS X3.23-1985 veröffentlicht. COBOL-85 führte mit Begrenzern wie END-IF und END-PERFORM erstmals die Möglichkeit ein, in COBOL beliebig geschachtelte Entscheidungs- (IF, EVALUATE) und Wiederholungsanweisungen (PERFORM) zu schreiben und damit die sogenannte strukturierte Programmierung in COBOL zu praktizieren. Zu COBOL-85 wurde später ein Zusatz mit eingebauten (intrinsic) Funktionen und ein weiterer mit Korrekturen zum Standard veröffentlicht.
Ein neuer Standard wurde 2002 verabschiedet. Wesentliche Änderungen darin sind die Übernahme der Erweiterungen durch X/Open, die explizite Unterstützung von internationalen Zeichensätzen einschließlich Unicode, die objektorientierte Programmierung sowie bedingte Kompilierung, neben zahlreichen anderen Erweiterungen und Präzisierungen.
Nach dem Ende von CODASYL hat das Komitee J4 auch die Verantwortung nicht nur für die Standardisierung, sondern auch für die Entwicklung übernommen.
Der nächste Standard wurde für das Jahr 2010 vorbereitet und wurde 2014 veröffentlicht.

### Internationale Standardisierung bei ISO

Das Komitee X3J4 (früher X3.4.4) hat von Anfang an eng mit verschiedenen internationalen Gremien zusammengearbeitet. Dementsprechend stimmte ANS COBOL X3.23-1968 mit der ISO-Empfehlung für COBOL überein.
In der ISO ist das Technical Committee ISO/TC 97, Computers and Information Processing zuständig, dessen Sekretariat vom ANSI gestellt wird.
ISO hat zu COBOL eine Empfehlung (Recommendation) R-1989:1972 sowie Standards ISO 1989:1978 und ISO 1989:1985 verabschiedet und dabei die Vorgabe des US-Standardisierungsgremiums übernommen.
2002 wurde ein weiterer Standard umgekehrt zuerst als ISO/IEC 1989:2002 veröffentlicht und dann von den nationalen Standardorganisationen übernommen. Dieser wurde 2014 als ISO/IEC 1989:2014 erweitert.
Der aktuelle Standard wurde im Januar 2023 als ISO/IEC 1989:2023 veröffentlicht.

### Module und standardkonforme Implementierungen

COBOL-68, COBOL-74 und COBOL-85 ordneten die verschiedenen Features der Sprache einem Modul mit jeweils einem bis drei „Levels“ zu, woraus dann minimale und volle Implementierungen des Standards als Kombination von bestimmten Levels der jeweiligen Module definiert wurden. Eine mit COBOL-2002 konforme Implementierung muss den gesamten Sprachumfang implementieren.

### COBOL-Compiler

Für Computer der Klassen „Großrechner“ und „Mittlere Datentechnik“ boten und bieten deren jeweilige Hersteller – IBM, Unisys, Siemens, Fujitsu-Siemens, HP, Bull u. a. – auf ihre proprietären Betriebssysteme zugeschnittene COBOL-Compiler an, z. T. verschiedene Compiler, die beispielsweise verschiedenen Standards entsprechen.
Für Betriebssysteme, die aus der UNIX- bzw. MS-DOS-Tradition entstanden sind, gibt es COBOL-Compiler von verschiedenen Software-Herstellern.
Mit GnuCOBOL und GCC COBOL existieren zwei quelloffene Implementierungen der Programmiersprache.

### COBOL-Generatoren

Es gibt Codegeneratoren, die COBOL-Programme bzw. Teile davon generieren und so die Entwicklungsarbeit erleichtern. Dazu gehören zum Beispiel SWT01 und SWT/VDA des Herstellers FSP, CA Gen (ehemals Cool:Gen) von CA Technologies, sowie die Generatorsysteme ADSplus und SCORE von Delta Software Technology.
