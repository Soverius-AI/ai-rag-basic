---
url: https://de.wikipedia.org/wiki/Sicherheitsl%C3%BCcke
---

# Sicherheitslücke

## Überblick

Eine Sicherheitslücke oder Schwachstelle ist im Gebiet der Informationssicherheit ein Fehler in einer Software oder einer Hardware, durch den ein Programm mit Schadwirkung (Exploit) oder ein Angreifer in ein Computersystem eindringen kann.

## Entstehung

Eine Sicherheitslücke stellt eine Bedrohung für die Sicherheit eines Computersystems dar. Es besteht das Risiko, dass die Sicherheitslücke ausgenutzt und das betroffene Computersystem kompromittiert werden kann. Sicherheitslücken entstehen unter anderem durch den unzureichenden Schutz eines Computers vor Angriffen aus dem Netz (beispielsweise mangels Firewall oder anderer Sicherheitssoftware) sowie durch Programmierfehler im Betriebssystem, Webbrowser oder anderen Softwareanwendungen, die auf dem System betrieben werden.
Sicherheitslücken können im Entwicklungsprozess entstehen, wenn Sicherheitsaspekte in der Planung, Konzeption und Entwicklung vernachlässigt werden und Sicherheitsvorgaben nicht ausreichend berücksichtigt werden, z. B. als Qualitätsziele.
Des Weiteren ergeben sich Sicherheitslücken aus Fehlern, die auf Grund der Komplexität von Softwaresystemen im Entwicklungsprozess entstehen können. Grobe Schätzungen zeigen, dass ein Programmierer pro 1000 Programmzeilen einen Fehler erzeugt, das entspricht einem Promille Fehlerhäufigkeit; bei 1.000.000 Zeilen sind also etwa 1000 Fehler zu erwarten. Falls beim Alpha- und Beta-Prozess nicht alle Fehler gefunden werden, wird ein fehlerhaftes Erzeugnis ausgeliefert.
Viele Fehler werden nie entdeckt, da der Fehlergehalt gering ist oder die Auswirkung erst bei längerer Laufzeit des Programms Schaden erzeugen würde. In hochkomplexen Programmen werden solche einfachen Fehler bei Entdeckung zunächst nur dokumentiert und erst später behoben. Dies nicht nur aus Kostengründen, sondern auch deshalb, da jede zur Behebung notwendige Änderung am Programmcode wiederum Quelle neuer Fehler sein kann. Manche Fehler erzeugen jedoch schwerwiegende Sicherheitslücken, ohne dass dies sofort zu einem kompletten Absturz führt.
Derartige Sicherheitslücken sind symptomatisch für Programme, welche mit Programmiersprachen geschrieben wurden, die entwickelt wurden, um die Leistung (Performance) von Software steigern/verbessern zu können (beispielsweise C oder Assembler) und die aufgrund ihres Programmiermodells anfällig für Fehler sind (Stichwort: Zeigerarithmetik). Durch die weite Verbreitung derartiger Programmiersprachen, dem hohen Zeitdruck in der Softwareerzeugung, verbunden mit dem ausgeprägten Kostendruck der Softwareerzeugerfirmen und dem wenig sensiblen Umgang mit dem Thema sichere Software sind Sicherheitslücken eher die Regel als die Ausnahme.
Ein häufig genanntes Problem sind vor allem Softwareangebote von Hardwareherstellern zu ihren Produkten, welche oftmals nur aus Marketinggründen bei bestimmten Produkten beiliegen (vergleiche Videoschnittsoftware bei Camcordern). Durch kostengünstige Entwicklung und dadurch schlechte Programmierung werden eine Vielzahl von Programmfehlern und Sicherheitslücken geschaffen, die vor allem den Heimanwenderbereich betreffen. Erschwerend kommt hinzu, dass Hardwarefirmen oft nicht auf die Entwicklung von Anwendungssoftware spezialisiert sind, daher Entwicklungsaufträge an Fremdfirmen vergeben, und somit die Produktqualität auch nicht mehr ohne weiteres selbst überprüfen können. Zum andern sind die Fremdfirmen unter Umständen noch nicht einmal auf die Entwicklung der speziellen Software spezialisiert.
Diese Faktoren führen dazu, dass immer wieder neue, fehlerbelastete Software auf den Markt kommt, anstatt dass alte Software weiterentwickelt und verbessert wird.
Einige Fehler könnten einfach vermieden werden, wenn statt der sehr systemnahen Sprachen, die eine direkte Adressierung von Speicherbereichen zulassen, Programmiersprachen wie Rust verwendet würden. Einige Entwickler des sehr viel im Serverbereich verwendeten Betriebssystems Linux überlegen, Rust für einzelne Kernel-Module zu verwenden. Microsoft hat ebenfalls Projekte zum Umschreiben von Low-Level-Komponenten von Windows, die ursprünglich in C und C++ geschrieben waren. Das Unternehmen AMD suchte in Stellenanzeigen nach Mitarbeitern, welche neue Radeon-Treiber in Rust schreiben sollen.
Sicherheitslücken können anhand des Common Vulnerability Scoring System (CVSS) nach ihrem Schweregrad bewertet und in Sicherheitslückendatenbanken wie der Datenbank Common Vulnerabilities and Exposures (CVE) erfasst werden. Im Mai 2026 waren in der CVE-Datenbank mehr als 332.000 Sicherheitslücken registriert.

## Zero Day

Als Zero Day (auch 0day) wird eine Sicherheitslücke bezeichnet, für die noch kein Patch des Herstellers der Komponente verfügbar ist.

## Ausnutzung

Diese Programmfehler ermöglichen es unter Umständen einem Angreifer mit einem Exploit in ein Computersystem einzudringen und dort Programme auszuführen, die schaden können. Einer der häufigsten Fehler, der zum Eindringen in Computersysteme benutzt wird, ist der Pufferüberlauf. Mangelnde oder überhaupt fehlende Überprüfung der kopierten Datenmenge führt zum Überschreiben anderer Programmteile, was von Angreifern gezielt zum Verändern des Programms oder Einbringen fremder Programmteile benutzt wird.
Bei vorhandenen Hardwarefehlern kann durch Anpassung der darauf laufenden Software die Ausnutzung verhindert oder erschwert werden. So werden bei Hardware-Designfehlern entweder Patches am Mikrocode der Prozessoren selbst oder Workarounds in der auf den Systemen laufenden Software, oder beides in Kombination realisiert. Nach der 2018 veröffentlichten Entdeckung der Sicherheitslücken Meltdown und Spectre mussten auch in großem Umfang die Betriebssysteme und diverse Anwendungsprogramme angepasst werden, allerdings konnte der Fehler ohne eine veränderte Funktionsweise des Prozessors selbst (u. a. durch angepassten Mikrocode) nicht vollständig beseitigt werden. Besonders bei älteren Prozessoren, die keine Firmware-Aktualisierungen mehr erhalten, kann eine Ausnutzung der Sicherheitslücke daher nicht verhindert werden.

## Umgang

In so genannten Closed-Source-Anwendungen ist es die Aufgabe des Herstellers des Programms, die Sicherheitslücke durch einen Patch oder die Bereitstellung einer neuen, fehlerbereinigten Version zu beheben. Die Bereinigung ist nicht zwingend und kann unterbleiben, wenn z. B. der Supportzyklus für das Produkt abgelaufen ist oder der Hersteller die Sicherheitslücke nicht als solche anerkennt und keinen Handlungsbedarf sieht.
Bei Open Source und freier Software sind es oftmals mehrere Entwickler (meist diejenigen, die schon länger an dieser Software beteiligt sind), verstreut auf der ganzen Welt, die einen Patch dafür schreiben, sobald der Fehler entdeckt und veröffentlicht wurde. Gerade bei großen Open-Source-Projekten, wie Linux gibt es meist kurz nach der Entdeckung der Lücke Patches, um diese zu beheben.

## Beispiele

Zu den Sicherheitslücken mit großem Bekanntheitsgrad gehören:

Heartbleed (OpenSSL, 2014)
Shellshock (Bash, 2014)
Stagefright (Android, 2015)
EternalBlue (Windows, 2017)
BlueKeep (Windows, 2019)
