---
url: https://de.wikipedia.org/wiki/Heartbleed
---

# Heartbleed

## Überblick

Der Heartbleed-Bug ist eine Sicherheitslücke in älteren Versionen der Open-Source-Bibliothek OpenSSL. Durch Ausnutzung eines schwerwiegenden Programmfehlers können über verschlüsselte TLS-Verbindungen private Daten von Clients und Servern ausgelesen werden. Der Fehler betrifft die OpenSSL-Versionen 1.0.1 bis 1.0.1f und wurde mit Version 1.0.1g am 7. April 2014 behoben. Dadurch war ein großer Teil der Online-Dienste, darunter auch namhafte Websites, sowie auch VoIP-Telefone, Router und Netzwerkdrucker für Angriffe anfällig.

## Beschreibung

Der Fehler befindet sich in der OpenSSL-Implementierung der Heartbeat-Erweiterung für die Verschlüsselungsprotokolle TLS und DTLS. Die Heartbeat-Erweiterung sieht vor, dass ein Kommunikationsteilnehmer eine bis zu 16 kByte große Menge an beliebigen Daten (Payload und Padding) an die Gegenseite schickt, die anschließend den Payload-Teil unverändert zurücksendet, womit periodisch abgeprüft werden kann, ob die Verbindung zum Server noch besteht.
Compiler der für OpenSSL verwendeten Programmiersprache C erzeugen standardmäßig keinen Code zur automatischen Überprüfung der Datenlänge. Sofern der Programmierer solche Fehler nicht explizit durch einen zusätzlichen Programmcode abfängt, wird daher auch nicht überprüft, ob die angegebene Länge der Daten mit der tatsächlichen Länge der mitgelieferten Daten übereinstimmt. Ist die angegebene Länge größer als die tatsächliche Länge, so kopiert die OpenSSL-Implementierung über das Ende des Eingabepuffers hinaus Daten aus dem Heap in den Ausgabepuffer. Aufgrund der fehlenden Überprüfung kann ein Angreifer mit einer Anfrage bis zu 64 kByte des Arbeitsspeichers der Gegenstelle auslesen. Der Angriff kann mehrmals hintereinander durchgeführt werden, um mehr Speicher auszulesen. In Tests gelang es damit unter anderem, den privaten Schlüssel des Serverzertifikats, Benutzernamen und Passwörter von Servern auszulesen.
Bei der Sicherheitslücke handelt es sich um einen lesenden Zugriff über die Grenzen eines Datenpuffers (buffer over-read). Anders als bei einem Pufferüberlauf werden keine Daten außerhalb von Puffergrenzen geschrieben.

## Entstehung

Der Quellcode, der den Fehler aufweist, wurde am 31. Dezember 2011 von dem einzigen fest angestellten Mitarbeiter des OpenSSL-Teams aus dem Entwurfszweig in das OpenSSL-Git-Repository eingepflegt und erstmals am 14. März 2012 mit OpenSSL-Version 1.0.1 veröffentlicht. Der Code wurde zuvor von einem Studenten der Fachhochschule Münster und der Universität Duisburg-Essen im Rahmen der Vorarbeiten zu seiner Dissertation über das SCTP-Protokoll entwickelt und als Entwurf bei OpenSSL eingereicht. Er erweitert OpenSSL um ein Heartbeat-Verfahren. Das Verfahren wurde von dem Studenten und zwei Mitautoren in RFC 6520 spezifiziert und ermöglicht es in TLS und DTLS, zu erfragen, ob die Gegenseite noch erreichbar ist. So werden z. B. die Verbindungszustände von eventuell in die OpenSSL-Kommunikation involvierten NAT-Routern aufgefrischt, damit die Verbindung bei einer vorübergehenden Inaktivität nicht gelöscht wird. Bei DTLS kann das Heartbeat-Verfahren zur Path MTU Discovery verwendet werden. In der Dissertation begründet der Programmierer Designentscheidungen in der Heartbeat-Spezifikation, unter anderem den Einsatz des Padding-Felds, als Schutz vor Known-Plaintext-Angriffen.

## Entdeckung

Am 7. April 2014 hat das OpenSSL-Team einen Sicherheitshinweis des Inhalts herausgegeben, dass die OpenSSL-Versionen 1.0.1 bis einschließlich 1.0.1f, sowie 1.0.2-beta bis einschließlich 1.0.2-beta1 vom sogenannten Heartbleed-Bug betroffen seien. Es ist jedoch möglich, OpenSSL ohne die fehlerhafte Heartbeat-Komponente zu kompilieren (-DOPENSSL_NO_HEARTBEATS), eine so kompilierte Version war dadurch auch gegen einen Heartbleed-Angriff immun.
Die Sicherheitslücke bestand insgesamt 27 Monate, bis sie unabhängig voneinander von Antti Karjalainen (Codenomicon, Oulu, Finnland) und Neel Mehta (Google Security) entdeckt und behoben wurde. Bereits vor dem öffentlichen Bekanntwerden des Fehlers waren einige Anbieter informiert, die daraufhin bereits ihre Systeme absicherten.

## Bewertung

Der Kryptologe und Sicherheitsexperte Bruce Schneier beschreibt die Tragweite des Heartbleed-Bug als:

Der Programmierer erklärte, er habe einen unabsichtlichen Programmierfehler begangen und die Prüfung einer Eingabevariable versäumt, in der die Länge des zurückzuliefernden Puffers mitgeteilt wird. Sein Fehler sei zwar trivial, aber folgenreich gewesen. Ferner stellte er fest, dass sein Fehler offensichtlich deshalb nicht bemerkt worden sei, weil zu wenige Menschen den Code von OpenSSL tatsächlich überprüfen.
Der IT-Sicherheitsexperte Felix von Leitner kritisierte, dass eine Heartbeat-Erweiterung für TCP aufgrund der vorhandenen Keepalive-Unterstützung nicht notwendig sei und dass man für einen Heartbeat keinen Payload brauche. Der Bug habe laut von Leitner den Anschein einer Backdoor. Von Leitner verteidigte die Namensnennung des Entwicklers in seinem Blog und rief zu mehr Verantwortung bei der Open-Source-Entwicklung auf. Die Schuld für Softwarefehler liege beim Programmierer.
OpenBSD- und OpenSSH-Entwickler Theo de Raadt bezeichnete in diesem Zusammenhang das OpenSSL-Team als nicht verantwortungsbewusst, da dieses einen Sicherheitsmechanismus, der bei der Entwicklung diesen Fehler nicht zugelassen hätte, aus Gründen der Leistung explizit umgehe. Das OpenSSL-Team verwendete eigene Funktionen zur Speicherallokation (malloc) und -deallokation (free) und umging damit mögliche Schutzmechanismen des Betriebssystems. Das OpenSSL-Team wies auf zu wenig Ressourcen als strukturelles Problem bei der Entwicklung der Software hin und bat um finanzielle Unterstützung.

## Auswirkungen

Der Heartbleed-Bug betraf Millionen von Geräten, die eine verwundbare OpenSSL-Version beinhalteten.

### Entschlüsselung während der Webserver-Verbindungsaufnahme

Durch den Angriff können private Schlüssel der Serverzertifikate und möglicherweise auch andere Zugangsdaten kompromittiert werden. Es wurde empfohlen, diese auszutauschen. Betroffene Diensteanbieter rieten ihren Nutzern zum Wechsel des Passworts.
Durch die hohe Anzahl betroffener Systeme stellte der Zertifikatsaustausch im April 2014 professionelle Zertifikatsanbieter vor Herausforderungen. Im Rahmen von Heartbleed wurde auch auf die unzureichenden Möglichkeiten zur Prüfung auf zurückgezogene Serverzertifikate (CRL und OCSP) hingewiesen.

### Entschlüsselung archivierter Daten

Abgesehen von möglicherweise abgegriffenen Zugangsdaten (Benutzernamen, Passwörter) kann mit dem privaten Schlüssel des Serverzertifikats ein auch lange vor dem Bekanntwerden des Fehlers aufgezeichneter Datenverkehr nachträglich entschlüsselt werden, sofern die Verschlüsselung nicht mit Perfect Forward Secrecy geschützt war. Außerdem können mit dem privaten Schlüssel des Serverzertifikats Man-in-the-middle-Angriffe durchgeführt werden, sofern das Serverzertifikat noch nicht abgelaufen oder widerrufen ist. Es können alle Dienste betroffen sein, wie beispielsweise E-Mail-Verkehr oder verschlüsselte Chats, sofern eine betroffene OpenSSL-Version verwendet wurde. SSH ist nicht betroffen, da es TLS nicht verwendet.

### Betroffene Produkte

TLS-Verbindungen dienen nicht nur der abgesicherten Verbindungsaufnahme mit einem Webserver. Auch VoIP-Telefone, Netzwerkdrucker und Router, die zur Authentifizierung Varianten des EAP-Protokolls verwenden, sind von der Sicherheitslücke betroffen. So waren beispielsweise einige VoIP-Telefon-Modelle des Herstellers Cisco betroffen. Der portugiesische Sicherheitsexperte Luis Grangeia zeigte an einem Konzeptbeispiel, wie ein maliziöser Access Point über EAP verwundbare Geräte angreifen kann.
Durch bereitgestellte Firmware-Updates zur Behebung des Heartbleed-Bug kam es zum Komplettausfall einiger NAS-Modelle des Herstellers Synology.
Googles Betriebssystem Android war ausschließlich in der Version 4.1.1 beim Bekanntwerden der Lücke betroffen.

### Ausmaß der Ausnutzung

Das Abgreifen von Daten hinterlässt auf einem angegriffenen System kaum Spuren. Daher ist nicht sicher, in welchem Maß der Fehler ausgenutzt wurde. Es gibt Hinweise auf einen Missbrauch im November 2013.
Die Nachrichtenagentur Bloomberg berichtete unter Berufung auf „zwei informierte Personen“, dass der Heartbleed-Bug praktisch von Beginn an durch die NSA genutzt wurde, was vom Büro des NSA-Direktors jedoch umgehend dementiert wurde. In einer im September 2014 veröffentlichten Studie kommen mehrere Sicherheitsforscher zu dem Ergebnis, dass es keine Hinweise auf ein Ausnutzen des Fehlers vor dessen Veröffentlichung gebe.

### Durchgeführte Angriffe

Durch den Heartbleed-Bug kam es zu einem Datendiebstahl beim kanadischen Finanzamt, bei dem innerhalb von sechs Stunden Sozialversicherungsnummern von 900 Personen entwendet wurden. Als Angreifer wurde ein 19-jähriger Teenager festgenommen.
Bei Community Health Systems, dem größten Krankenhausbetreiber in den USA, kam es durch Ausnutzung von Heartbleed zu einem Datendiebstahl von 4,5 Millionen betroffenen Patienten.

### LibreSSL

Um den Quellcode der OpenSSL-Bibliothek von nicht benötigten Bestandteilen zu bereinigen, erstellte das OpenBSD-Team den Fork LibreSSL. Der Quellcode wurde um mehr als 90.000 Zeilen bereinigt (Stand 21. April 2014).

### Behebung weiterer Fehler

Bedingt durch den Heartbleed-Bug wurde der Quellcode von OpenSSL in der Folgezeit intensiver überprüft und so wurden im Juni 2014 noch weitere Lücken entdeckt und geschlossen, darunter weitere des Programmierers, der auch den Heartbleed-Bug verursacht hat.

## Andere Bibliotheken

Die alternativen TLS-Bibliotheken PolarSSL, GnuTLS, NSS und MatrixSSL waren im Gegensatz zu OpenSSL nicht von der Heartbleed-Lücke betroffen. Bei GnuTLS wurde allerdings kurze Zeit später eine ähnliche Sicherheitslücke bekannt.
