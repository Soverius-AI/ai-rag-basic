---
url: https://de.wikipedia.org/wiki/Transport_Layer_Security
---

# Transport Layer Security (TLS)

## Überblick

Transport Layer Security (TLS, englisch für „Transportschichtsicherheit“), auch bekannt unter der Vorgängerbezeichnung Secure Sockets Layer (SSL), ist ein Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet.
TLS ist ein offizielles Internetprotokoll und in RFC: 8446 (englisch). und seinen Vorgängern beschrieben. Es spezifiziert als Hauptbestandteile den Aufbau einer sicheren Verbindung (TLS Handshake) und die Datenübertragung (TLS Record), sowie Verfahren, wie mit Ereignissen umzugehen ist. Während des TLS Handshake finden ein sicherer Schlüsselaustausch und eine zertifikatsbasierte Authentifizierung statt. Für die verschlüsselte und geschützte Datenübertragung verwendet TLS dann den zuvor ausgehandelten symmetrischen Schlüssel.
Für den Schlüsselaustausch sind in den älteren TLS-Versionen verschiedene Algorithmen mit unterschiedlichen Sicherheitsgarantien im Einsatz. Die neueste Version TLS 1.3 verwendet das Diffie-Hellman-Schlüsselaustauschprotokoll (DHE oder ECDHE). Dabei wird für jede Verbindung ein neuer Sitzungsschlüssel (Session Key) ausgehandelt. Da dies ohne Verwendung eines Langzeitschlüssels geschieht, erreicht TLS 1.3 Perfect Forward Secrecy.

## TLS in der Praxis

TLS-Verschlüsselung wird vor allem mit HTTPS eingesetzt. Die aktuellen  Webserver und  Webbrowser nutzen TLS 1.3 und TLS 1.2. Die älteren Versionen TLS 1.1 und TLS 1.0 werden seit 2020 seltenst unterstützt. SSLv3 und SSLv2 sind i. A. deaktiviert, da diese Protokollversionen eine Reihe von Unsicherheiten, unter anderem die des Poodle-Angriffs, beinhalten. Die Weiterentwicklung TLS 1.3 wird von allen Browsern auf Desktops und Smartphones unterstützt, TLS 1.2 wird von 98,7 % aller Browserinstallationen unterstützt; Ausnahmen waren mehrere Jahre alte Versionen (Stand 02/2022).
Das Deutsche Bundesamt für Sicherheit in der Informationstechnik empfiehlt bei der Verwendung von TLS die Versionen 1.2 und 1.3. Cipher Suiten mit Perfect Forward Secrecy werden bevorzugt empfohlen.
Von 2007 bis 2019 waren Extended-Validation-Zertifikate verbreitet (EV-Zertifikate). In der Adresszeile des Browsers wird zusätzlich ein Feld angezeigt, in dem Zertifikats- und Domaininhaber im Wechsel mit der Zertifizierungsstelle eingeblendet werden. Je nach verwendetem Browser und/oder Add-on wurde die Adresszeile (teilweise) grün eingefärbt. Internetnutzer sollten so schneller erkennen, ob die besuchte Webseite echt ist, und besser vor Phishingversuchen geschützt werden. EV-Zertifikate bieten in technischer Sicht keinen erweiterten Schutz, die Verschlüsselung und deren Stärke ist identisch. Nur der Inhaber wird dabei besser und aufwändiger verifiziert. Seit 2019 werden diese Zertifikate in den Browsern nicht mehr prominent hervorgehoben, weil der Gewinn an Sicherheit für den Endbenutzer ausblieb.
Seit Januar 2017 markiert der Web-Browser Chrome Internetseiten als unsicher, die Informationen sammeln, ohne dabei HTTPS zu nutzen. Im Februar 2017 war HTTPS bei 2,57 % aller registrierten deutschen Internet-Domains sowie bei 3,70 % der österreichischen Domains und 9,71 % der Schweizer Domains aktiviert. Eine Untersuchung von rund 40.000 Webseiten klein- und mittelständischer Unternehmen in Baden-Württemberg durch den Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg ergab, dass rund 7 % der untersuchten Webseiten über HTTPS angeboten werden. Bei jenen Webseiten, die über HTTPS angeboten wurden, war die serverseitige Unterstützung für TLS 1.0 noch sehr weit verbreitet (99 %).
TLS ist ohne eine zertifikatsbasierte Authentifizierung anfällig für Man-in-the-Middle-Angriffe: Ist der Man-in-the-Middle vor der Übergabe des Schlüssels aktiv, kann er beiden Seiten seine Schlüssel vorgaukeln und so den gesamten Datenverkehr im Klartext aufzeichnen und unbemerkt manipulieren. Wegen der mangelnden Vertrauenswürdigkeit einiger Zertifizierungsstellen wird seit Anfang 2010 die Sicherheit von TLS grundsätzlich angezweifelt. Durch die Deaktivierung fragwürdiger Zertifizierungsstellen im eigenen Browser lässt sich dieses Risiko jedoch weitgehend beseitigen.
In Verbindung mit einem virtuellen Server, zum Beispiel mit HTTP (etwa beim Apache HTTP Server über den VHost-Mechanismus), ist es grundsätzlich als Nachteil zu werten, dass pro Kombination aus IP-Adresse und Port nur ein Zertifikat verwendet werden kann, da die eigentlichen Nutzdaten des darüber liegenden Protokolls (und damit der Name des VHosts) zum Zeitpunkt des TLS-Handshakes noch nicht übertragen wurden. Dieses Problem wurde mit der TLS-Erweiterung Server Name Indication (SNI) im Juni 2003 durch den RFC 3546 behoben. Dabei wird bereits beim Verbindungsaufbau der gewünschte Servername mitgesendet. Die ursprüngliche Erweiterung wurde für TLS 1.0 beschrieben, aufgrund der Kompatibilität der einzelnen TLS-Versionen zueinander wird SNI auch bei TLS 1.1, Version 1.2 und 1.3 entsprechend der Empfehlung umgesetzt. In der Version 1.3 wird zusätzlich auch versucht, die SNI zu verschlüsseln, um mitzulesenden Parteien nicht zu ermöglichen, trotz verschlüsselter Verbindung Informationen über den Zielserver preiszugeben. Das muss jedoch vom Browser unterstützt, im Domain Name System (DNS) ein Schlüssel hinterlegt und verschlüsseltes DNS genutzt werden. Da bei SNI jedoch weiterhin unverschlüsselte Metadaten anfallen (der Servername wird im Klartext gesendet) wurde aus Sicherheitsgründen zunächst in 2018 Encrypted SNI (ESNI) und später in 2020 Encrypted Client Hello (ECH) eingeführt. Dies stößt jedoch bis heute bei einzelnen Akteuren auf Ablehnung, da sie nun keine Möglichkeit mehr haben, ihnen unliebsame Verbindungen entweder komplett zu unterdrücken oder künstlich zu verlangsamen. Nationale Sicherheitsbehörden wie das BSI sehen es im Gegensatz aber als „bedeutenden Fortschritt in Bezug auf die Privatsphäre und Sicherheit im Internet“, welches „das Risiko von Angriffen und Datenlecks verringert“.
Im Tor-Netzwerk sind TLS-Zertifikate für Verbindungen in das Internet von besonderer Bedeutung, da ein Abhören einer unverschlüsselten Verbindung mittels Man-in-the-Middle-Angriff dort durch den Rechner, der die Verbindung in das Internet herstellt (bezeichnet als „exit node“), sehr einfach möglich wäre. Da eine Verbindung zwischen zwei Endpunkten im Tor-Netzwerks jedoch verschlüsselt ist, kann die verschlüsselte Übertragung von Daten innerhalb des Netzwerks nachrangig betrachtet werden, sofern man dem Routing der Verbindungen vertraut. Hier liegt das Hauptmerkmal der TLS-Verschlüsselung in der Authentizität der Gegenseite.
Neben HTTPS als verschlüsselte Variante von HTTP sind weitere bekannte Anwendungsfälle für TLS beispielsweise:

POP3S für POP3
SMTPS für SMTP
NNTPS für NNTP
SIPS für SIP
IMAPS für IMAP
XMPPS für XMPP
IRCS für IRC
LDAPS für LDAP
MBS/IP-TLS
FTPS für FTP
EAP-TLS
TN3270-TLS
OpenVPN
DNS over TLS, DNS over HTTPS und DNS over QUIC um DNS-Abfragen durch TLS zu tunneln
Auch Verbindungen zu Datenbanksystemen können über TLS abgesichert werden. Dabei werden die Identität des Servers oder auch des Clients geprüft und die gesamte Kommunikation verschlüsselt.

### Versionen

## Geschichte

Die erste Protokollversion von TLS wurde ab August 1986 im Rahmen des im September 1987 erstmals beschrieben Projektes Secure Data Network System (SDNS) entwickelt.
1994, neun Monate nach der ersten Ausgabe von Mosaic, dem ersten verbreiteten Webbrowser, stellte Netscape Communications die erste Version von SSL (1.0) fertig.
Fünf Monate später wurde zusammen mit einer neuen Ausgabe des Netscape Navigator die nächste Version SSL 2.0 veröffentlicht.
Ende 1995 veröffentlichte Microsoft die erste Version seines Webbrowsers Internet Explorer. Kurz darauf wurde auch die erste Version ihres SSL-Pendants bekannt, PCT 1.0 (Private Communication Technology). PCT hatte einige Vorteile gegenüber SSL 2.0, die später in SSL 3.0 aufgenommen wurden.
Im Sommer 1996 übergab Netscape die Versionskontrolle über sein Protokoll SSL 3.0 an die IETF zur Entwicklung eines Internet-Standards.
Ab November 1996 entwickelte die IETF TLS WG auf Basis von Netscapes SSL 3.0 das verbesserte Protokoll „Transport Layer Security (TLS) Protocol Version 1.0“ (interne Versionsnummer 3.1), welches schließlich im Januar 1999 als RFC 2246 veröffentlicht wurde. Das finale Spezifikationsdokument von Netscapes SSL 3.0 war viele Jahre schwer zu finden und wurde im August 2011 nachträglich veröffentlicht als RFC 6101.
Später wurde TLS durch weitere RFCs erweitert:
RFC 2712 – Addition of Kerberos Cipher Suites to Transport Layer Security (TLS).
RFC 2817 erläutert die Benutzung des Upgrade-Mechanismus in HTTP/1.1, um Transport Layer Security (TLS) über eine bestehende TCP-Verbindung zu initialisieren. Dies erlaubt es, für unsicheren und für sicheren HTTP-Verkehr die gleichen „well-known“ TCP Ports (80 bzw. 443) zu benutzen.
RFC 2818 trennt sicheren von unsicherem Verkehr durch getrennte Server-TCP-Ports.
RFC 3268 nutzt die Erweiterbarkeit von TLS und fügt den symmetrischen Verschlüsselungsalgorithmen (RC2, RC4, International Data Encryption Algorithm (IDEA), Data Encryption Standard (DES) und Triple DES) den Advanced Encryption Standard (AES) hinzu.
RFC 3546 – Transport Layer Security (TLS) Extensions führt das Konzept der Erweiterungen ein, wodurch optionale Datenfelder oder Header vor allem bei der anfänglichen Aushandlung übertragen werden können. Eine dieser Erweiterungen ist Server Name Indication.
Im April 2006 wurde in RFC 4346 die Version 1.1 von TLS standardisiert und damit RFC 2246 obsolet. In TLS 1.1 wurden kleinere Sicherheitsverbesserungen vorgenommen und Unklarheiten beseitigt.
Im Mai 2006 hat RFC 4492 mehrere Cipher Suites hinzugefügt, die die Benutzung elliptischer Kurven und der zugehörigen Schlüsselaustauschverfahren ermöglichen.
Im August 2008 erschien mit RFC 5246 die Version 1.2 von TLS, welche RFC 4346 obsolet machte. Hierbei wurde die Festlegung auf MD5/SHA-1 in der Pseudozufallsfunktion (PRF) und bei signierten Elementen ersetzt durch flexiblere Lösungen, bei denen die Hash-Algorithmen spezifiziert werden können.
Im Februar 2015 wurde RFC 7465 veröffentlicht, das RC4 für Verschlüsselung verbietet.
Im Mai 2015 wurden mit RFC 7525 Empfehlungen zum sicheren Einsatz von TLS und DTLS veröffentlicht. Demnach sollen SSLv2, SSLv3, RC4 und sonstige durch Exportbeschränkungen auf unter 112 Bit Schlüssellänge beschränkte Verschlüsselungsalgorithmen nicht verwendet werden. Vom Einsatz von 3DES zur Verschlüsselung und RSA zum Schlüsselaustausch mit statischen Parametern wird abgeraten. Empfohlen werden Cipher Suiten, die zum Schlüsselaustausch Ephemeral Diffie-Hellman kombiniert mit RSA verwenden, was Forward Secrecy (gegen späteres nachträgliches Entschlüsseln) bietet, zur Verschlüsselung AES im Galois/Counter Mode mit 128 oder 256 Bit Schlüssellänge sowie die Hashfunktion SHA-256 oder SHA-384 für die Pseudozufallsfunktion von TLS.
Im August 2018 wurde in RFC 8446 TLS-Version 1.3 veröffentlicht, das seit 2014 entwickelt wurde. und mit RFC 8422 die Menge der Cipher Suites unter Verwendung elliptischer Kurven noch einmal angepasst.
Im Oktober 2018 gaben die Hersteller der Browser Firefox, Chrome, Edge und Safari an, die in die Jahre gekommenen Protokolle TLS 1.0 und 1.1 beginnend ab März 2020 nicht mehr zu unterstützen. In Google Chrome 84 wurde die Unterstützung für TLS 1.0 und 1.1 daher entfernt.
Im März 2021 wurden mit RFC 8996 die Protokolle TLS 1.0 und 1.1 als überholt klassifiziert.
Im August 2024 wurde erstmals ein "post-quantumsafe"-Handshakeverfahren, basierend auf den "Kyber"-Algorithmus für TLS 1.3 für den elliptischen Handshake eingeführt (ML-KEM-Verfahren / FIPS 203). OpenSSL unterstützt dies für Server seit der Version 3.5 seines Stacks, ferner unterstützen das auch etliche Clients bereits.

## Funktionsweise

Der Client baut eine Verbindung zum Server auf. Der Server authentifiziert sich gegenüber dem Client mit einem Zertifikat. Der Client überprüft hierbei die Vertrauenswürdigkeit des X.509-Zertifikats und ob der Servername mit dem Zertifikat übereinstimmt. Optional kann sich der Client mit einem eigenen Zertifikat auch gegenüber dem Server authentifizieren. Dann schickt entweder der Client dem Server eine mit dem öffentlichen Schlüssel des Servers verschlüsselte geheime Zufallszahl, oder die beiden Parteien berechnen mit dem Diffie-Hellman-Schlüsselaustausch ein gemeinsames Geheimnis. Aus dem Geheimnis wird dann ein kryptographischer Schlüssel abgeleitet. Dieser Schlüssel wird in der Folge benutzt, um alle Nachrichten der Verbindung mit einem symmetrischen Verschlüsselungsverfahren zu verschlüsseln und zum Schutz von Nachrichten-Integrität und Authentizität durch einen Message Authentication Code abzusichern.

### TLS-Protokolle im Protokollstapel

Im OSI-Modell ist TLS in Schicht 5 (der Sitzungsschicht) angeordnet. Im TCP/IP-Modell ist TLS oberhalb der Transportschicht (zum Beispiel TCP) und unterhalb Anwendungsprotokollen wie HTTP oder SMTP angesiedelt. In den Spezifikationen wird dies dann zum Beispiel als „HTTP over TLS“ bezeichnet. Sollen jedoch beide Protokolle zusammengefasst betrachtet werden, wird üblicherweise ein „S“ für Secure dem Protokoll der Anwendungsschicht angehängt (zum Beispiel HTTPS). TLS arbeitet transparent, so dass es leicht eingesetzt werden kann, um Protokollen ohne eigene Sicherheitsmechanismen abgesicherte Verbindungen zur Verfügung zu stellen. Zudem ist es erweiterbar, um Flexibilität und Zukunftssicherheit bei den verwendeten Verschlüsselungstechniken zu gewährleisten.
Das TLS-Protokoll besteht aus zwei Schichten:

### TLS Record Protocol

Das TLS Record Protocol ist die untere der beiden Schichten und dient zur Absicherung der Verbindung. Es setzt direkt auf der Transportschicht auf und bietet zwei verschiedene Dienste, die einzeln oder gemeinsam genutzt werden können:

Ende-zu-Ende-Verschlüsselung mittels symmetrischer Algorithmen. Der verwendete Schlüssel wird dabei im Voraus über ein weiteres Protokoll (zum Beispiel das TLS Handshake Protocol) ausgehandelt und kann nur einmal für die jeweilige Verbindung verwendet werden. TLS unterstützt für die symmetrische Verschlüsselung unter anderem DES, Triple DES und AES
Sicherung der Nachrichten-Integrität und Authentizität durch einen Message Authentication Code, in der Regel HMAC.
Außerdem werden zu sichernde Daten in Blöcke von maximal 16.384 (214) Byte fragmentiert und beim Empfänger wieder zusammengesetzt. Dabei schreibt der Standard vor, dass die Blockgröße diesen Wert nicht übersteigt, außer der Block ist komprimiert oder verschlüsselt – dann darf die Blockgröße um 1024 Byte (bei Kompression) bzw. 2048 Byte (bei Verschlüsselung) größer sein. Auch können die Daten vor dem Verschlüsseln und vor dem Berechnen der kryptografischen Prüfsumme komprimiert werden. Das Komprimierungsverfahren wird ebenso wie die kryptografischen Schlüssel mit dem TLS Handshake-Protokoll ausgehandelt.
Der Aufbau einer TLS-Record-Nachricht lautet wie folgt: Content Type (1 Byte: Change Cipher Spec = 20, Alert = 21, Handshake = 22, Application Data = 23) | Protokollversion Major (1 Byte) | Protokollversion Minor (1 Byte) | Länge (1 Short bzw. zwei Byte).

### TLS Handshake Protocol

Das TLS Handshake Protocol baut auf dem TLS Record Protocol auf und erfüllt die folgenden Funktionen, noch bevor die ersten Bits des Anwendungsdatenstromes ausgetauscht wurden:

Aushandeln zu benutzender kryptografischer Algorithmen und Schlüssel. TLS unterstützt auch eine unverschlüsselte Übertragung.
Identifikation und Authentifizierung der Kommunikationspartner auf Basis asymmetrischer Verschlüsselungsverfahren und Public-Key-Kryptografie. Dieser Schritt ist optional eine Zwei-Wege-Authentifizierung (in diesem Fall wird manchmal von mutual TLS, oder auch „mTLS“ gesprochen). Primär findet mTLS im Business-to-Business-Kontext Anwendung. Auch wird zwischen Client-zu-Server und Server-zu-Server unterschieden. Ersteres wird z. B. für Anmeldung via Chipkarten verwendet, wohingegen letzteres primär für die Authentifizierung von Servern untereinander zum Einsatz kommt (z. B. im Rahmen von PSD2 zwischen den Beteiligten, bei XMPP-Server, Peer-to-Peer (Service-Mesh)-Architekturen, OAuth 2.0, Microsoft AD FS, SMTP-relays). Es kann auch als Ersatz für ein Peer-to-Peer-VPN (wie z. B. Tailscale, oder LogMeIn Hamachi) verwendet werden. Die Anwendung bekommt hiervon genau wie bei einem VPN nichts mit, sprich die Authentifizierung an der Anwendung ist getrennt von der im mTLS. Es wird deshalb auch gelegentlich als einfachste Möglichkeit zum Hinzufügen einer 2FA-Authentifizierung an bereits existierende Software verwendet.
Der Handshake selbst kann in vier Phasen unterteilt werden:

Der Client schickt zum Server ein ClientHello, und der Server antwortet dem Client mit einem ServerHello. Die Parameter der Nachrichten sind:
die Version (die höchste vom Client unterstützte TLS-Protokoll-Version)
eine 32 Byte lange Zufallsinformation (4 Byte Timestamp + 28 Byte lange Zufallszahl), die später verwendet wird, um das pre-master-secret zu bilden (sie schützt damit vor Replay-Attacken)
eine Session-ID
die zu verwendende Cipher Suite (Algorithmen für Schlüsselaustausch, Verschlüsselung und Authentifizierung)
Optional den gewünschten FQDN für die Unterstützung von Server Name Indication
in der TLS 1.3 Version (mit Diffie-Hellman-Schlüsselaustausch) werden hier auch schon die Key-Shares übertragen, die den gemeinsamen Schlüssel definieren.
Der Server identifiziert sich gegenüber dem Client. Hierzu wird per Certificate ein X.509v3-Zertifikat an den Client geschickt, gefolgt von einem CertificateVerify (in einigen TLS Versionen). Die CertificateVerify Nachricht enthält eine Unterschrift von zuvor ausgetauschten Nachrichten. Damit beweist der Server, dass er einen Secret-Key besitzt, der zu dem auf dem Server-Zertifikat enthaltenen Public-Key passt. Der Client prüft das Zertifikat und die Unterschrift. Bei Misserfolg bricht der Client die Verbindung ab. Außerdem kann der Server optional per CertificateRequest ein Zertifikat zur Client-Authentifizierung anfordern. Diese Phase darf nur weggelassen werden, wenn eine anonyme Cipher Suite ohne Authentifizierung verwendet wird.
Das zuvor erhaltene Server-Zertifikat enthält den öffentlichen Schlüssel des Servers. Wird eine Cipher Suite mit RSA-Schlüsselaustausch verwendet (siehe Abbildung), so wird das vom Client generierte pre-master-secret mit diesem öffentlichen Schlüssel verschlüsselt und kann vom Server mit dem nur ihm bekannten privaten Schlüssel wieder entschlüsselt werden. Alternativ kann hier auch der Diffie-Hellman-Schlüsselaustausch verwendet werden, um ein gemeinsames pre-master-secret zu generieren. Werden die Diffie-Hellman-Geheimnisse von Server und Client während des Handshakes frisch und zufällig ausgehandelt, sind die Voraussetzungen für Perfect Forward Secrecy erfüllt. Nach der Übertragung des pre-master-secrets  identifiziert sich der Client mittels Zertifikat gegenüber dem Server, sofern dieser einen CertificateRequest geschickt hat. Dazu schickt der Client per Certificate das Client-Zertifikat, gefolgt von einem CertificateVerify. Die CertificateVerify Nachricht enthält eine Unterschrift aller zuvor ausgetauschten Nachrichten. Damit beweist der Client gegenüber dem Server, dass er einen Secret-Key besitzt, der zu dem auf dem Client-Zertifikat enthaltenen Public-Key passt. Ab hier ist dem Server also bekannt, mit wem er kommuniziert.
Diese Phase schließt den Handshake ab. Aus dem vorhandenen pre-master-secret kann das master secret abgeleitet werden, das einen einmaligen Sitzungsschlüssel (englisch session key) darstellt. Aus dem master secret werden wiederum Schlüssel abgeleitet, die zum Ver- und Entschlüsseln der Daten sowie für die Integritätsprüfung verwendet werden. Die Nachrichten, die die Kommunikationspartner sich nun gegenseitig zusenden, werden nur noch verschlüsselt übertragen. Falls sich der Server nicht im Schritt 2 via CertificateVerify authentifiziert hat, ist dem Client erst nach dem Erhalt der ersten verschlüsselten Nachricht bekannt, dass er mit dem rechtmäßigen Besitzer des Zertifikats kommuniziert.

### TLS Change Cipher Spec Protocol

Das Change Cipher Spec Protocol besteht nur aus einer einzigen Nachricht. Diese Nachricht ist ein Byte groß und besitzt den Inhalt 1. Durch diese Nachricht teilt der Sender dem Empfänger mit, dass er in der aktiven Sitzung auf die im Handshake Protocol ausgehandelte Cipher Suite wechselt.
Ein wesentlicher Grund für die Definition eines eigenen Protokolls für diese Nachricht besteht darin, dass TLS-Implementierungen mehrere Nachrichten eines Protokolls in einem Record (also einer TLS-Dateneinheit) zusammenfassen können. Für die Nachricht „Change Cipher Spec“ ist das unerwünscht. Weil Records verschiedener Protokolle nicht zusammengefasst werden dürfen, ist das Problem durch Definition eines eigenen Protokolls gelöst.

### TLS Alert Protocol

Das Alert Protocol unterscheidet etwa zwei Dutzend verschiedene Mitteilungen. Eine davon teilt das Ende der Sitzung mit (close_notify). Andere beziehen sich zum Beispiel auf die Protokollsyntax oder die Gültigkeit der verwendeten Zertifikate. Es wird zwischen Warnungen und Fehlern unterschieden, wobei letztere die Verbindung sofort beenden.
Der Aufbau einer Fehlermeldung lautet wie folgt: AlertLevel (1 Byte: Warning = 1, Fatal = 2) | AlertDescription (1 Byte: close_notify = 0, […], no_renegotiation = 100).
In der Spezifikation von TLS werden die folgenden schweren Fehlertypen definiert:

In der Spezifikation von TLS werden die folgenden Warnungen definiert:

In der Spezifikation von TLS 1.0 wurden folgende Warnungen ergänzt:

### TLS Application Data Protocol

Die Anwendungsdaten werden über das Record Protocol transportiert, in Teile zerlegt, komprimiert und in Abhängigkeit vom aktuellen Zustand der Sitzung auch verschlüsselt. Inhaltlich werden sie von TLS nicht näher interpretiert.

### Berechnung des Master Secrets

Aus dem pre-master-secret wird in früheren Protokollversionen mit Hilfe der Hashfunktionen SHA-1 und MD5, in TLS 1.2 mit Hilfe einer durch eine Cipher Suite spezifizierten Pseudozufallsfunktion das Master Secret berechnet. In diese Berechnung fließen zusätzlich die Zufallszahlen der Phase 1 des Handshakes mit ein. Die Verwendung beider Hash-Funktionen sollte sicherstellen, dass das Master Secret immer noch geschützt ist, falls eine der Funktionen als kompromittiert gilt. In TLS 1.2 wird dieser Ansatz durch die flexible Austauschbarkeit der Funktion ersetzt.

## Sicherheit

Auf SSL und TLS sind jeweils eine Reihe von Angriffen bekannt, die die Sicherheitsgarantien untergraben. Die folgende Liste stellt einen Teil der bekannten Angriffe dar.

### Padding-Oracle-Angriffe

Der Kryptologe Serge Vaudenay entdeckte 2002, dass ein Man-in-the-Middle-Angreifer aus dem Padding einer mit dem Cipher Block Chaining Mode (CBC) verschlüsselten Nachricht Informationen erhalten kann, die zur Entschlüsselung der Nachricht genutzt werden können. Durch gezielte Manipulation einer verschlüsselten Nachricht lernt der Angreifer, ob der Server ein gültiges Padding meldet und damit ein Teil des Klartexts richtig erraten wurde.
Als Schutzmaßnahme sollte der Server ungültige Nachrichten verwerfen, ohne dabei zu offenbaren, ob das Padding oder die Nachrichtenauthentizität ungültig war. Allerdings kann ein Angreifer diese Information auch durch eine Analyse der Antwortzeiten herleiten (Timing-Angriff). Betroffen sind SSL, TLS bis Version 1.2 und DTLS, sofern eine Cipher Suite mit CBC verwendet wird. Cipher Suites mit Authenticated Encryption sind nicht betroffen.
Im Oktober 2014 demonstrierten Sicherheitsforscher den POODLE-Angriff (Padding Oracle On Downgraded Legacy Encryption), mit dem ein Angreifer ein Versions-Downgrade einer TLS-Verbindung erzwingt, um einen Padding-Oracle-Angriff gegen SSL 3.0 durchzuführen. Zwecks Kompatibilität wurde SSL 3.0 trotz zu dem Zeitpunkt bekannter Sicherheitsschwächen noch von Webbrowsern und anderen Implementierungen unterstützt. Im Nachgang hat die Internet Engineering Task Force SSL 3.0 als überholt gekennzeichnet und ein Verfahren zum Schutz vor Downgrade-Angriffen auf TLS spezifiziert.

### BEAST

SSL 3.0 und TLS 1.0 verwenden im CBC-Modus einen vorhersagbaren Initialisierungsvektor. Ein Angreifer kann dadurch mit einem Chosen-Plaintext-Angriff unbekannte Teile des Klartexts ermitteln. Ein Angriffsszenario ist das Stehlen von HTTP-Cookies, die verschlüsselt übertragen werden. Hierzu muss der Angreifer das Angriffsopfer auf eine bösartige Website locken, die wiederholt HTTP-Anfragen an eine fremde Domain auslöst, wobei der Webbrowser automatisch die für die Domain gesetzten HTTP-Cookies mitsendet. Durch den teilweise selbst gewählten Inhalt der HTTP-Anfragen und durch Abhören der verschlüsselten TLS-Nachrichten kann der Angreifer das Cookie zeichenweise erraten.
Die Grundlagen des Angriffs wurden 2004 beschrieben und 2011 erstmals in der Praxis unter dem Namen BEAST (Browser Exploit Against SSL/TLS) demonstriert. TLS-Version 1.1 und höher sind nicht betroffen, da jede Nachricht mit einem pseudozufälligen Initialisierungsvektor verschlüsselt wird.
Der kryptographische Unterschied zwischen TLS 1.0 und TLS 1.1 ist marginal und es gibt einen trivialen und abwärtskompatiblen Workaround mittels 1/(n-1) TLS record splitting, welcher diesen marginalen Unterschied zwischen TLS 1.0 und TLS 1.1 formal beweisbar irrelevant macht. Dieser triviale Workaround wurde von allen von BEAST betroffenen Anwendungen im Laufe des Jahres 2011 eingebaut. BEAST betrifft nur Webbrowser, Java im Browser und SSL-VPNs, weil BEAST nur als Inside-Angriff möglich ist.

### Kompressionsangriffe

Die Verwendung der optionalen Kompression von Nutzdaten eröffnet eine Klasse von Angriffen, die das Erraten von Teilen des Klartexts ermöglichen. Das Angriffsszenario ist ähnlich wie beim BEAST-Angriff: der Angreifer führt einen Chosen-Plaintext-Angriff durch und beobachtet die verschlüsselten TLS-Nachrichten im Netz. Das Kompressionsverfahren entfernt Redundanzen aus den Nutzdaten, sodass der zu verschlüsselnde Klartext und damit auch der Geheimtext kürzer wird. Hat der Angreifer einen Teil des unbekannten Klartexts erraten, zum Beispiel ein Zeichen eines HTTP-Cookies, so erfährt er dies aus dem Längenunterschied einer verschlüsselten TLS-Nachricht.
Der Angriff wurde 2012 von den Urhebern des BEAST-Angriffs unter dem Namen CRIME (Compression Ratio Info-leak Made Easy) veröffentlicht. Neben SSL und TLS ist auch das SPDY-Protokoll betroffen. Als Schutzmaßnahme wird von der Verwendung der Kompression abgeraten. TLS ab Version 1.3 unterstützt keine Kompression mehr. Der SPDY-Nachfolger HTTP/2 verwendet ein vereinfachtes Kompressionsformat (HPACK), das weniger effizient komprimiert als Deflate, dafür aber schwerer anzugreifen ist.
TIME und BREACH sind verbesserte Varianten des Angriffs. TIME (Timing Info-leak Made Easy) leitet die Größe einer verschlüsselten TLS-Nachricht aus der Antwortzeit her, ohne dass der Netzwerkverkehr abgehört werden muss. Beide Angriffe erlauben das Erraten von TLS-verschlüsselten Inhalten, wenn TLS-Kompression abgeschaltet ist und stattdessen HTTP-Kompression verwendet wird. Da TLS Kompressionsangriffe nicht grundsätzlich verhindern kann, müssen anwendungsspezifische Schutzmaßnahmen verwendet werden, zum Beispiel der vollständige Verzicht auf Kompression.

### Downgrade auf Exportverschlüsselung

Als Folge der Exportbeschränkungen von Kryptographie aus den Vereinigten Staaten sind in TLS zahlreiche exporttaugliche Cipher Suites spezifiziert, die nur kurze Schlüssel verwenden. Trotz bekannter Sicherheitsschwächen wurden oder werden diese zum Teil noch von Implementierungen unterstützt. Der TLS-Handshake soll eigentlich verhindern, dass ein Man-in-the-Middle-Angreifer einen Downgrade auf eine nicht angefragte Cipher Suite erzwingen kann, indem die Handshake-Nachrichten authentifiziert werden. Die Sicherheit der Authentifizierung hängt allerdings auch von der ausgehandelten Cipher Suite ab, sodass der Angreifer den Schlüssel brechen kann.
Beim 2015 veröffentlichten FREAK-Angriff (Factoring RSA Export Keys) findet ein Downgrade auf RSA-basierte Cipher Suites mit 512 Bit langen Exportschlüsseln statt. Der Angriff setzt einen Implementierungsfehler voraus, bei dem der Client den 512-Bit-Schlüssel anstatt des längeren Schlüssels aus dem Serverzertifikat verwendet. Der Fehler betraf unter anderem OpenSSL und SecureTransport (Apple).
Kurz darauf veröffentlichte ein Forscherteam den Logjam-Angriff, der einen Downgrade des Diffie-Hellman-Schlüsselaustauschs auf 512-Bit-Restklassengruppen ermöglicht. Ursache ist die Unterstützung von exporttauglichen Cipher Suites mit Ephemeral Diffie-Hellman. Anders als bei FREAK handelt es sich um eine Protokollschwäche in TLS, die auch ohne Implementierungsfehler ausgenutzt werden kann. Der Logjam-Angriff kann in der Praxis performant durchgeführt werden, da ein Großteil der Rechenarbeit zum Brechen des Schlüssels schon vor dem Verbindungsaufbau durchgeführt werden kann. Der erforderliche Rechenaufwand während des eigentlichen Schlüsselaustauschs dauert etwa 70 Sekunden. Als Schutzmaßnahme sollten Server die Unterstützung für exporttaugliche Cipher Suites abschalten und mindestens 2048 Bit lange Gruppen verwenden. Clients sollten Gruppen verwerfen, die kürzer als 1024 Bit sind.

### Implementierungsfehler

Neben Sicherheitsschwächen im Protokoll sind TLS-Implementierungen in wiederkehrender Regelmäßigkeit von sicherheitsrelevanten Implementierungsfehlern betroffen. Einer der schwerwiegendsten Fehler war der 2014 entdeckte Heartbleed-Bug in OpenSSL.

### Öffentlicher und vorsätzlicher Bruch der Verschlüsselung

Über die ETSI wurde ein sozialer Angriff auf den TLS-Standard gestartet, bei dem eine nachschlüsselfähige und daher als gebrochen anzusehende Version des Standards Eingang in allgemeine Kommunikationsprozesse finden soll.
Die Angreifer leiten eine Berechtigung für ihren Angriff auf die Verschlüsselung daraus ab, dass es in der Wirtschaft, insbesondere in der Finanzindustrie, sowie bei Behörden Möglichkeiten geben müsse, übergeordneten Einblick in verschlüsselte Kommunikation zu nehmen, ohne dass die Beteiligten davon erfahren. Viele Fachleute und Organisationen, wie z. B. die EFF, warnen aufgrund der möglichen Kollateralschäden sehr deutlich vor der Nutzung dieses Verfahrens.
Der Versuch, diese defekte Verschlüsselung als „eTLS“ („Enterprise TLS“) in die TLS-Familie einzuführen, wurde über die Namensrechte an TLS abgewehrt, weshalb das Verfahren in ETS umbenannt werden wird.
Da ETS/eTLS als CVE von TLS anerkannt ist, kann man ETS/eTLS auch als (vorsätzlich) fehlerhafte Implementierung von TLS bezeichnen.
Infolgedessen erhielt das Technical Committee CYBER des ETSI 2019 den Negativpreis BigBrotherAward:

## Vor- und Nachteile

Der Vorteil des TLS-Protokolls ist die Möglichkeit, jedes höhere Protokoll auf Basis des TLS-Protokolls zu implementieren. Damit ist eine Unabhängigkeit von Anwendungen und Systemen gewährleistet.
Der Nachteil der TLS-verschlüsselten Übertragung besteht darin, dass der Verbindungsaufbau auf Serverseite rechenintensiv und deshalb langsamer ist. Die Verschlüsselung selbst beansprucht je nach verwendetem Algorithmus nur wenig Rechenzeit.
Verschlüsselte Daten sind auf niedrigeren Schichten (etwa auf PPTP-Ebene) kaum durch Kompression zu verdichten.
TLS verschlüsselt nur die Kommunikation zwischen zwei Stationen. Es sind Szenarien in serviceorientierten Architekturen denkbar, in denen eine Nachricht über mehrere Stationen gesendet wird. Wenn jede Station nur einen Teil der Nachricht lesen darf, reicht TLS nicht aus, da jede Station alle Daten der Nachricht entschlüsseln kann. Somit entstehen Sicherheitslücken an jeder Station, die nicht für sie bestimmte Daten entschlüsseln kann.

## Implementierungen

Zu den bekanntesten Programmbibliotheken, die Transport Layer Security implementieren, gehören:

OpenSSL
GnuTLS
LibreSSL
Network Security Services
mbed TLS, vormals PolarSSL
BoringSSL
Cryptlib
SChannel (Microsoft)
WolfSSL
