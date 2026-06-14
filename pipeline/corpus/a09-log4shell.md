---
url: https://de.wikipedia.org/wiki/Log4Shell
---

# Log4Shell

## Überblick

Log4j ist ein Framework für das Logging von Anwendungsmeldungen in Java.
Innerhalb vieler Open-Source- und kommerzieller Softwareprodukte hat es sich über die Jahre zu einem De-facto-Standard entwickelt. Log4j gilt als Vorreiter für andere Logging-Frameworks, auch in anderen Programmiersprachen.

## Geschichte

Das Projekt wurde von Ceki Gülcü 1996 während seiner Arbeit am IBM-Entwicklungslabor in Zürich gegründet. Heute ist es ein Teil des Logging-Projekts der Apache Software Foundation und steht unter der Apache-Lizenz 2.0. Es entstand zu einer Zeit, als es in den Java-Standardbibliotheken noch keine Logging-Mechanismen gab. Heutzutage ist es durch seine Ausgereiftheit und Konfigurierbarkeit für viele Softwareentwickler das Log-System der ersten Wahl.
Die Ausstrahlung der Log4j-Konzepte auf andere Programmiersprachen bzw. Plattformen ist so groß, dass es mittlerweile etliche Adaptionen gibt. Einige werden vom Apache Logging Projekt selbst gepflegt. Zum Beispiel:

log4cxx für C++ mit zu Log4J kompatiblen Konfigurationsdateien
log4Net für das .Net-Framework
log4php für PHP
Viele Varianten werden jedoch außerhalb von Apache Logging entwickelt:

log4C für C
log4cplus für C++
log4cpp für C++
Log4Qt für Qt
Log4js für JavaScript
log4perl für Perl
log4D für Delphi
log4sh für Unix-Shells
log4plsql für Oracle PL/SQL
log4sas für SAS Institute
AndroidLoggingLog4J
Modul logging für Python
logger für LabVIEW
Seit Juli 2014 ist Log4j 2 als Nachfolger des Log4j 1.x verfügbar.

## Das Apache-Logging-Projekt

Das Apache-Logging-Projekt versucht, Log4j-ähnliche Systeme für diverse Programmiersprachen zusammenzuführen. Bisher sind das log4j, log4cxx, log4net, log4php und Chainsaw (ein Logdatei-Betrachter und -Analysewerkzeug).
Außerdem werden sogenannte Companions entwickelt, die zusätzliche Funktionalität für Apache Log4j bereitstellen.

## Funktionsweise

Anstatt auftretende Fehler und Infomeldungen auf der Standardausgabe auszugeben, dient Log4j dazu, die Meldungen über sogenannte Logger an das gewählte Ausgabeziel weiterzuleiten („Appender“). Neben der Auswahl des Ausgabeziels (z. B. eine Logdatei) wird gleichzeitig aufgrund der Wichtigkeit („Log-Level“) der Meldung entschieden, ob diese überhaupt weitergeleitet wird. Der Programmierer muss sich beim Erstellen des Programms nur um die Wichtigkeit der Meldungen Gedanken machen. Für eine Meldung können mehrere Appender mit unterschiedlicher Wichtigkeit angeschlossen werden, so dass ein Appender hier die Rolle eines Kanals spielt. Die Filterung und Art der Ausgabe kann zur Laufzeit konfiguriert werden.
Log4j ist auf möglichst hohe Geschwindigkeit ausgelegt, damit das Protokollieren die Systemleistung nicht negativ beeinflusst. So dauert die Entscheidung, ob eine Meldung ausgegeben werden muss, auch auf einem veralteten System (AMD Duron mit 800 MHz, JDK 1.3.1) nur 5 Nanosekunden, die Ausgabe selbst – je nachdem, welches Layout verwendet wird – zwischen 21 und 37 Mikrosekunden.

### Ausgabe-Umfang

In der Konfigurationsdatei kann die Ausgabe je nach Wichtigkeit der Nachrichten gefiltert werden. Der Ausgabe-Umfang sinkt mit der zugewiesenen Wichtigkeitsstufe und umfasst alle Nachrichten der Stufe selbst sowie aller noch dringenderen Stufen. Die Reihenfolge stellt sich dabei wie folgt dar: ALL → TRACE → DEBUG → INFO → WARN → ERROR → FATAL → OFF.
Für die Einstufung der Wichtigkeit gelten folgende Richtwerte:

ALL
Alle Meldungen werden ungefiltert ausgegeben
TRACE
ausführlicheres Debugging (ab Version 1.2.12), Kommentare
DEBUG
allgemeines Debugging (Auffinden von Fehlern)
INFO
allgemeine Informationen (Programm gestartet, Programm beendet, Verbindung zu Host Foo aufgebaut, Verarbeitung dauerte soundsoviel Sekunden …)
WARN
Auftreten einer unerwarteten Situation
ERROR
Fehler (Ausnahme wurde abgefangen. Bearbeitung wurde alternativ fortgesetzt)
FATAL
Kritischer Fehler, Programmabbruch
OFF
Logging ist deaktiviert

### Appender

Mittels Appender kann das Ausgabeziel/können die Ausgabeziele der erzeugten Protokollausgaben festgelegt werden.
Nachfolgend die wichtigsten Appender-Arten:

ConsoleAppender
Gibt auf Standardausgabe aus
FileAppender
Schreibt in eine Datei
RollingFileAppender
Beginnt eine neue Datei ab einer gewissen Größe
DailyRollingFileAppender
Beginnt zu gewissen Zeiten mit einer neuen Datei
SyslogAppender
Protokolliert mittels Syslog-Dienst
JDBCAppender
Schreibt in eine Datenbank
NTEventLogAppender
Schreibt ins Ereignisprotokoll des Windows-Systems
SMTPAppender
Schickt bei gewissen Meldungen eine Mail.
SocketAppender
Sendet die Protokollnachricht an einen konfigurierten Socket-Listener.
LogCatAppender
Protokolliert in den Android LogCat
Weitere Appender können jederzeit hinzugefügt werden.

### Konfiguration

Es gibt drei Arten, Log4j zu konfigurieren: mittels einer Properties- oder einer XML-Datei oder im Programmcode. Es wird empfohlen, eine Properties- oder XML-Datei zu verwenden, damit ist die Konfiguration vom Code getrennt, was es ermöglicht, ohne Modifikation oder Neustart der Applikation die Konfiguration des Loggings anzupassen. Somit kann beispielsweise eine Applikation so lange nur mit der Wichtigkeitsstufe FATAL betrieben werden, bis ein Fehler auftritt. Ab dann wird die Stufe WARN gesetzt, ohne die Applikation anzuhalten.
Die Konfigurationsdateien definieren mittels der folgenden Komponenten das Verhalten von Log4j:

Appender
Diese bestimmen mittels Konfiguration der entsprechenden Appender-Klasse, wohin die Protokollausgaben geschrieben werden sollen, und mittels Konfiguration des Layouts, wie dorthin geschrieben werden soll. Neben der reinen Nachricht können mittels Muster zusätzlich Wichtigkeit, Datum, Name des Loggers, Klassenname und Methodenname bis hin zur genauen Codezeile ausgegeben werden.
Logger
Ein Logger ist ein Objekt, welches die Protokollierungsaufgaben einer Klasse übernimmt. Es wird über seinen Namen identifiziert. Üblicherweise wird der Klassenname als Name für den Logger verwendet. Es ist allerdings auch möglich, einen Fantasie-Namen zu verwenden, der von mehreren Klassen benutzt wird. Ein typisches Beispiel könnte so aussehen: Logger log = Logger.getLogger(org.wikipedia.MyClass). Damit kann das Protokollierungsverhalten einer Klasse gesteuert werden. Da der Logger auch die Paket-Informationen erhält, ist es auch möglich Logging für ganze (Super)-Pakete zu konfigurieren. Die Konfigurationsdatei kann dann eben den Logger-Namen – also z. B. „org.wikipedia.MyClass“ – und auch die gewünschte Wichtigkeitsstufe (Log-Level) enthalten. Es ist wie bereits erwähnt möglich, eine Konfiguration für ein Paket wie „org.wikipedia“ festzulegen. Darüber hinaus können entweder allgemein oder auch zu jedem Logger spezifisch ein oder mehrere Appender definiert werden. Somit ist es beispielsweise möglich, fatale Fehler nicht nur in eine Datei zu schreiben, sondern auch gleichzeitig per E-Mail an einen Administrator zu schicken. Log4j 2.0 bietet neben diesen klassischen Konfigurationen auch modernere Möglichkeiten an, in das Protokollierungsverhalten einzugreifen. Beispielsweise werden sogenannte Marker unterstützt.
Ein weiteres nützliches Merkmal ist der Mapped Diagnostic Context. Dabei wird einer Kontextvariablen ein Wert zugewiesen und in der Konfigurationsdatei kann darauf referenziert werden. Dabei hat jeder Thread seinen eigenen Kontext und kann zusätzliche Informationen wie z. B. die Adresse des Clients bei einer Serveranwendung protokollieren.

#### Beispiel

Die folgende XML-Konfiguration konfiguriert eine Applikation so, dass FATAL-Fehler von Fremdbibliotheken auf die Konsole protokolliert werden, ERROR-Fehler der eigenen Applikation zusätzlich auch per E-Mail geschickt werden, bei einer spezifischen Komponente darüber hinaus auch noch INFO-Meldungen protokolliert werden und bei einer bestimmten Klasse sogar noch DEBUG-Meldungen.

## Apache Log4j 2

Version 2 wurde von Grund auf neu geschrieben, auch wenn Teile von Log4j 1.x übernommen wurden. Die neue Version verfügt über eine moderne Schnittstelle, wie sie auch von logback bekannt ist. Außerdem unterstützt sie slf4j native. Zugleich wurden Schwächen von logback analysiert und versucht zu verbessern. Somit verliert Log4j 2 beispielsweise keine Logging-Events, wenn sich das System neu konfiguriert. Außerdem wurde eine Plugin-Architektur bereitgestellt und die Konfiguration mittels JSON ermöglicht.
Das Projekt gab im August 2015 bekannt, dass der 1.x‐Zweig das „End of Life“ erreicht hat und damit die Weiterentwicklung eingestellt wird. Entwickler werden deswegen gebeten, auf den 2.x‐Zweig zu migrieren.
Auf der Website von Apache werden einige Unterschiede zwischen Log4j 1 und Log4j 2 aufgelistet.

### Log4j 2 Konfigurationsbeispiel

In Log4j 2 hat sich die Syntax der Konfiguration geändert. Es folgt eine beispielhafte Konfigurationsdatei nach dem neuen Standard:

## Bekanntwerden einer Sicherheitslücke im Dezember 2021

Am 10. Dezember 2021 wurde eine Zero-Day-Lücke in Log4j-Version 2 bekannt (CVE-2021-44228, oft als Log4Shell bezeichnet), die Angreifer ausnutzen konnten, um Code auf dem jeweiligen Hostsystem auszuführen (Remote Code Execution) und somit zum Beispiel Rechenleistung von den infizierten Servern zu benutzen, um Krypto-Mining zu betreiben. Die Schwachstelle wurde vom Alibaba-Cloud-Sicherheitsdienst an Apache gemeldet. Aufgrund der weiten Verbreitung von Log4j und der einfach auszunutzenden Schwachstelle bezeichneten Fachleute die Meldung als „Größte Schwachstelle in der Geschichte des modernen Computing“.
Zahlreiche Softwareentwickler, Dienstanbieter, Unternehmen und Behörden waren potentiell betroffen, unter anderem Amazon Web Services, Steam und iCloud. Laut Bundesamt für Sicherheit in der Informationstechnik (BSI) ergaben Berichte von CERT-Quellen, dass weltweite Massenscans und versuchte Kompromittierungen, sowie laut F-Secure auch Ransomware-Angriffe im Zuge der Zero-Day-Lücke stattfanden. Das BSI verwies auf eine „unvollständige Auflistung“ von 140 Unternehmen, die besonders anfällig seien, schätze die direkte Bedrohung für Endanwender jedoch als eher gering ein.
Bekannte Fälle, in denen die Sicherheitslücke kriminell ausgenutzt wurde, sind (Auswahl):

Am 9. Dezember wurde der erste Angriff auf einen Server des Spiels Minecraft dokumentiert.
Am 16. Dezember 2021 wurden mit dem Internet verbundene Systeme des belgischen Militärs über die Lücke angegriffen.
Am 17. Dezember 2021 wurde die Website des Bundesfinanzhofs wegen einer solchen Attacke abgeschaltet.
Die Schließung der Sicherheitslücke war nach kurzer Zeit über eine Softwareaktualisierung möglich, die Umsetzung durch die jeweils betroffenen Softwarehersteller zog sich jedoch aufgrund der Komplexität der Nutzung von Log4j über mehrere Wochen und teilweise sogar Monate hin. Im März 2023, 15 Monate nach Entdeckung und Schließung der Sicherheitslücke, waren immer noch mehr als ein Drittel der täglich heruntergeladenen Versionen von Log4j von der Sicherheitslücke betroffen. Dies wird auf automatische Softwareverteilung und -downloads durch Abhängigkeiten zurückgeführt.

## Alternativen

Java Logging – seit Java 1.4 Bestandteil der Java-Klassenbibliothek; ähnlich wie Log4j, weniger Appender, kein PatternLayout
Apache Commons Logging – Schnittstelle für beliebig austauschbare Logging-Frameworks, unter anderem Log4j
tinylog – schlankes Logging-Framework mit einem statischen Logger
slf4j mit logback – weit verbreitete moderne Alternative
