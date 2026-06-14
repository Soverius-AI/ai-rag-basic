---
url: https://de.wikipedia.org/wiki/OpenSSL
---

# OpenSSL

## Überblick

OpenSSL, ursprünglich SSLeay, ist eine freie Software für Transport Layer Security, ursprünglich Secure Sockets Layer (SSL).
OpenSSL umfasst Implementierungen der Netzwerkprotokolle und verschiedener Verschlüsselungen sowie das Programm openssl für die Kommandozeile zum Beantragen, Erzeugen und Verwalten von Zertifikaten. Die in C geschriebene Basisbibliothek stellt allgemeine kryptographische Funktionen zum Ver- und Entschlüsseln sowie diverse weitere Werkzeuge bereit.

## Geschichte

SSLeay ermöglichte Mitte der 1990er Jahre, SSL auch außerhalb der USA mit starker Verschlüsselung einzusetzen, weil diese Implementierung in Australien entstand und somit keinen Exportbeschränkungen unterlag. Den Namen der Software bildeten die Initialen des Netzwerkprotokolls und des Programmierers. Eric A. Young hatte zuvor an Implementierungen von Kerberos und DES gearbeitet. Zu diesem neuen Projekt regte ihn 1995 sein Freund Tim J. Hudson an. Hudson trug auch maßgeblich zum Projekt bei, indem er zugehörige Patches für andere freie Software und für Windows programmierte.
Die Version SSLeay 0.9.1b vom Sommer 1998 wurde nicht mehr veröffentlicht, sondern von einem neuen Team bis Dezember 1998 weiterentwickelt und als OpenSSL 0.9.1c veröffentlicht. Ralf S. Engelschall, Mitbegründer dieser Gruppe, beschreibt die Entwicklung von OpenSSL als Voraussetzung für die Schaffung von mod_ssl, dem meistgenutzten Verschlüsselungsmodul für Apache-Webserver. Im Gegensatz zu diesem praktisch fertigen Modul, das nur noch gewartet zu werden brauche, sei die Entwicklung bei OpenSSL noch nicht abgeschlossen. Stattdessen würden engagierte, freie Programmierer weiterhin Applikationen entwerfen und dabei auf den bereits etablierten Basisfunktionen von OpenSSL aufbauen.

## Abspaltungen

2014 kam es in der Folge des Heartbleed-Bugs zu mehreren Abspaltungen. Aufgrund der Komplexität des über viele Jahre gewachsenen Projektes und damit einher gehender Schwierigkeiten bei der Auditierung auf Sicherheitslücken entschlossen sich die Entwickler des Betriebssystems OpenBSD um Theo de Raadt zur Veröffentlichung einer OpenSSL-Version mit halbiertem Code-Umfang unter dem Namen LibreSSL.
Auch Google benutzt und veröffentlicht seitdem einen eigenen Fork von OpenSSL unter dem Namen BoringSSL. Dieser kommt u. a. in Chrome und Android zum Einsatz.

## FIPS-140-2-Zertifizierung

OpenSSL ist das erste nach FIPS 140-2 zertifizierte Open-Source-Programm. Hierbei handelt es sich um einen Sicherheitsstandard, den das National Institute of Standards and Technology (NIST) für das Cryptographic Module Validation Program festgelegt hat.
Die Freigabe wurde im Januar 2006 erteilt. Im Juni wurde sie vorläufig wieder zurückgezogen, jedoch am 16. Februar 2007 wieder erteilt. Nach Aussage von John Weathersby vom Open Source Software Institute (OSSI) war das Problem „politischer Natur“ (im Original: a political challenge), da eine vergleichbare Zertifizierung kommerzielle Anbieter erhebliches Geld kostet. Bezahlt wurde der Prozess vom amerikanischen Verteidigungsministerium und interessierten Firmen, die sich von einer freien Lösung finanzielle Einsparungen sowie Standardisierung erhofften.

## Bemerkenswerte Sicherheitslücken

### Schwache Schlüssel unter Debian

Am 13. Mai 2008 gab das Debian-Projekt bekannt, dass das OpenSSL-Paket der Distributionen seit 17. September 2006 (Version 0.9.8c-1 bis 0.9.8g-9) eine Sicherheitslücke enthielt. Durch einen Fehler in einem Debian-spezifischen Patch sind die mit dem in diesen Paketen enthaltenen Zufallszahlengenerator erzeugten Schlüssel vorhersagbar. Davon betroffen seien SSH-, OpenVPN-, DNSSEC-Schlüssel, Schlüssel in X.509-Zertifikaten sowie Sitzungsschlüssel, die in SSL/TLS-Verbindungen (HTTPS) genutzt werden. Schlüssel, die mit GnuPG oder GnuTLS erzeugt wurden, seien nicht betroffen.
Die Sicherheitslücke entstand beim Versuch, eine Warnmeldung des Codeanalysewerkzeugs Valgrind zu beseitigen. Dabei sollte eine wenig relevante Codezeile, welche die Warnung verursachte, entfernt werden, allerdings wurde auch ein zweites Vorkommen dieser Zeile entfernt, welches in einem anderen Kontext stand und eine völlig andere Bedeutung hatte.
Die entsprechenden Schlüsselpaare sind leicht angreifbar, da es möglich ist, sämtliche in Frage kommenden privaten Schlüssel innerhalb weniger Tage zu berechnen. Für die betroffenen SSH-Schlüssel existiert ein frei herunterladbares Paket im Internet. Durch diesen Fehler waren und sind SSL-Verbindungen zu vielen Servern durch Man-in-the-Middle-Angriffe verwundbar. Verbindungen zu Servern, die jemals ein Zertifikat mit einem schwachen Schlüssel aufwiesen, sind so lange angreifbar, bis die Zertifikate ablaufen oder wirksam widerrufen werden. Dabei ist zu beachten, dass viele Browser nicht auf widerrufene Zertifikate prüfen. Besonders prominent in diesem Zusammenhang war ein verwundbarer Server des Dienstleisters Akamai, welcher unter anderem für die Bereitstellung der ELSTER-Software der deutschen Finanzämter sowie von Treiber-Updates von AMD verantwortlich ist.

### Heartbleed-Bug

Durch den Heartbleed-Bug können in betroffenen OpenSSL-Versionen über TLS- und DTLS-Verbindungen Teile des Arbeitsspeichers der Gegenseite ausgelesen werden. Dadurch können Daten von betroffenen Systemen unberechtigt kopiert werden, wie etwa private Schlüssel von X.509-Zertifikaten, Benutzernamen und Passwörter. Betroffen ist die Heartbeat-Implementierung in den OpenSSL-Versionen 1.0.1 vom 14. März 2012 bis einschließlich 1.0.1f, sowie mehrere Beta-Versionen von 1.0.1 und 1.0.2. Die Sicherheitslücke wurde mit Version 1.0.1g am 7. April 2014 behoben.

## Lizenz

OpenSSL steht unter der Lizenz von SSLeay und seiner eigenen Lizenz, die zusammengefasst gelten. Beide sind der ursprünglichen BSD-Lizenz ähnlich. Die wesentliche Einschränkung ist demzufolge, dass Werbung für Fremdprodukte, die OpenSSL enthalten, OpenSSL und die beiden Urheber von SSLeay erwähnen muss.
Ab Version 3.0.0 steht OpenSSL unter der Apache-2.0-Lizenz, um die Verwendung in anderen Open-Source-Projekten zu vereinfachen.

## Versionsgeschichte

Derzeit gibt es zwei Entwicklungszweige, die aktiv weiterentwickelt werden: OpenSSL 1.x.x und OpenSSL 3.x.x. Die Versionsnummer 2.x.x wurde vom OpenSSL Management Committee übersprungen, weil es ein OpenSSL FIPS-Modul gab, was bereits die Versionsnummer 2.0.0 belegt hatte.
Die folgende Tabelle stellt eine Übersicht der Hauptversionen von OpenSSL dar.
