---
url: https://de.wikipedia.org/wiki/Man-in-the-Middle-Angriff
---

# Man-in-the-Middle-Angriff

## Überblick

Ein Man-in-the-Middle-Angriff (MITM-Angriff, auch Machine-in-the-Middle) ist eine Angriffsform, die in Rechnernetzen ihre Anwendung findet. Der Angreifer steht dabei entweder physisch oder logisch zwischen den beiden Kommunikationspartnern, hat dabei mit seinem System vollständige Kontrolle über den Datenverkehr zwischen zwei oder mehreren Netzwerkteilnehmern und kann die Informationen nach Belieben einsehen und sogar manipulieren. Die Janusköpfigkeit des Angreifers besteht darin, dass er den Kommunikationspartnern vortäuscht, das jeweilige Gegenüber zu sein.

## Beispiele

Diese Sonderstellung zwischen den Kommunikationspartnern kann beispielsweise auf folgende Arten erreicht werden:

Angreifer befindet sich im selben LAN wie der Angegriffene:
Der Angreifer hat physischen Zugang zu den Datenleitungen.
Im Ethernet modifiziert der Angreifer die ARP-Tabellen der Opfersysteme und leitet dadurch den gesamten Datenverkehr durch sein System. Diese Methode ermöglicht auch das Abhören des Datenverkehrs an Switches, siehe ARP-Spoofing. Dieses Verfahren funktioniert immer dann, wenn der Angreifer und das Opfer im selben lokalen Netz sind. Dies ist auch bei Kabelnetzanbietern und z. B. bei öffentlichen WLAN-Hotspots gegeben.
Der Angreifer hängt am selben Netzwerkbus wie das Opfer, wodurch ohnehin alle Pakete auch bei ihm ankommen. Dies funktioniert allerdings nur noch bei Netzwerken mit Busstruktur, wie z. B. Ethernet mit Hub oder 10BASE2 sowie bei einer Token-Ring-Infrastruktur. Diese Techniken sind aber veraltet und nur noch sehr selten anzutreffen.
Eine weitere Angriffsmethode dieser Art ist das Vorspielen eines falschen DHCP-Servers. Durch Angabe einer falschen Standard-Gateway-Adresse zum Internet kann die Kommunikation durch einen Rechner des Angreifers geleitet werden.
Nur für WLAN-relevante Angriffe:
Möglich ist bei öffentlichen WLAN-Hotspots das Vortäuschen eines falschen WLAN-Access-Points durch Snarfing. Auch in diesem Fall leitet der falsche Access-Point die Daten – nach Auswertung und gegebenenfalls Manipulation – zum korrekten Access-Point weiter.
Weitere MITM-Angriffe:
Der Angreifer hat Kontrolle über einen Router, durch den der Datenverkehr geschleust wird. Dies funktioniert sowohl im WAN als auch im LAN und im WLAN.
Durch DNS Cache Poisoning gibt der Angreifer eine falsche Zieladresse für die Internet-Kommunikation vor und leitet dadurch den Verkehr durch seinen eigenen Rechner (Poison Routing).
Durch Manipulation der Hosts-Datei auf dem Rechner des Angegriffenen können trotz Eingabe der echten URL gefälschte IP-Adressen aufgelöst werden. Simuliert der Angreifer dann einen gültigen Webserver, hat er gute Chancen, als MITM unerkannt zu bleiben. Siehe dazu: Pharming
Beim MFA-Phishing schaltet sich der Angreifer mit einer gefälschten Login-Seite zwischen Nutzer und echte Login-Seite. Er reicht die Daten als MITM in beide Richtungen in Echtzeit weiter, sodass sein Angriff möglichst unbemerkt bleibt. Er kopiert sich lediglich den Session-Token, mit dem während einer laufenden Sitzung die Authentizität bestätigt wird. Mit diesem Token erhält der Angreifer trotz Multi-Faktor-Authentisierung Zugriff und kann das Konto, zumindest für die Laufzeit dieser Session, nutzen.
Bekannte Computerprogramme für MITM-Angriffe sind Ettercap und Cain & Abel.

## Gegenmaßnahmen

### Sicherung vor Mitlesen

Am effektivsten lässt sich dieser Angriffsform mit einer Verschlüsselung der Datenpakete entgegenwirken, wobei allerdings Schlüssel über ein zuverlässiges Medium verifiziert werden müssen. Das bedeutet, es muss eine gegenseitige Authentifizierung stattfinden; die beiden Kommunikationspartner müssen auf anderem Wege ihre digitalen Zertifikate oder einen gemeinsamen Schlüssel ausgetauscht haben, d. h., sie müssen sich entweder kennen oder eine Zertifizierungsstelle nutzen. Sonst kann z. B. ein Angreifer bei einer verschlüsselten Verbindung beiden Opfern falsche Schlüssel vortäuschen und somit auch den Datenverkehr mitlesen. Dem Grundsatz dieser Form der Geheimhaltung entspricht in jedem Fall dem HBCI-Standard.
Anmerkungen zu einzelnen Protokollen, die Verschlüsselung verwenden:

SSH (Secure Shell) bietet eine Möglichkeit, durch Fingerabdruck („fingerprint“) nach dem erstmaligen Anmelden (Login) zu prüfen, ob man tatsächlich den Zielrechner erreicht hat.
TLS (Transport Layer Security): Das u. a. bei HTTPS verwendete TLS beruht auf Zertifikaten; einem Schlüssel-Paar (öffentlicher und privater) plus beschreibender Informationen. Dieses Zertifikat wird i. d. R. von einer vertrauenswürdigen Zertifizierungsstelle unterschrieben, nachdem diese die Identität des Antragstellers festgestellt hat. Es ist allerdings zu bedenken, dass mittels TLS lediglich die Übertragung verschlüsselt sowie die Authentizität der involvierten Parteien gesichert werden kann. Gezielte Manipulationen bei der Datenverarbeitung in den Systemen der einzelnen Parteien selbst, z. B. durch Malware, können weder festgestellt noch ausgeschlossen werden. Ein weiterer Schwachpunkt: Wenn die Zertifizierungsstelle mit dem Lauscher kooperiert, z. B. auf behördliche Anordnung oder aufgrund einer Kompromittierung, kann der Angreifer einen TLS-Proxy aufbauen und unbemerkt mithören; er kann dann auch Inhalte vortäuschen. Bei einer manuellen Prüfung des Zertifikats (z. B. durch Abgleich des Fingerabdrucks) scheidet diese Möglichkeit aus.
Im Oktober 2014 wurde die Sicherheitslücke Poodle bekannt, die mittels Man-in-the-Middle-Angriff bei SSL 3.0 sowie bei TLS 1.0 und 1.1 besteht.

### Sicherung vor Manipulation

Neben Verschlüsselung gibt es weitere Techniken, die zwar nicht vor dem Mitlesen schützen, aber eine Veränderung der Daten durch MITM-Angriffe verhindern oder sichtbar machen. Dazu gehören:

Die sogenannte Integrity Protection, wie sie im UMTS Radio Access Network eingesetzt wird. Hierbei erhält jede übertragene Nachricht einen Identitätsstempel, den Message Authentication Code (MAC), der mit Hilfe eines vorher zwischen Netz und Nutzer ausgehandelten Codes erzeugt wird. Nur wenn der mit der Nachricht empfangene MAC dem vom Empfänger erwarteten MAC  entspricht, wird die Nachricht vom Empfängersystem als gültig anerkannt und weiterverarbeitet.
Gegen einen Angriff mittels ARP-Spoofing (s. o.) hilft das eigene Überwachen der physischen Adresse, da bei einem solchen Angriff die Ziel-Adresse verändert wird (sichtbar in der Konsole (arp -a)). Um einen MITM-Angriff zu verhindern, kann zudem die physische Adresse manuell in die Konsole eingegeben werden.

### Sicherung durch zweiten Kanal

Mit der Mobile TAN (mTAN) wird ähnliches erreicht. Bei diesem Verfahren wird dem Anwender über einen zweiten Kanal, das Mobiltelefon, per SMS eine TAN zugesendet, die nur für die gerade eingegebene Transaktion (z. B. Überweisung) verwendet werden kann. Üblicherweise werden dabei neben der TAN auch Empfängerdaten mitgeteilt, so dass der Nutzer am PC auch über den zweiten Kanal die Information erhält, welche Transaktion er gerade bestätigt. So können missbräuchliche Verfügungen verhindert werden. Nutzer des PIN/TAN-Systems sollten sich aber darüber im Klaren sein, dass die gängigen „Trojaner“ zunächst die Zugangskennung und PIN ausspähen und damit die vertraulichen Kontodaten für den man in the middle oder jeglichen anderweitig unberechtigten Kontenzugriff zugänglich werden, das Konto also kompromittiert wird. Dies hat unter Umständen – soweit über das Onlinebankingportal dem Kunden der Zugriff auf seine hinterlegte Telefonnummer gestattet ist – zur Folge, dass diese verfügbaren Informationen abgeschöpft werden, um auch das Mobiltelefon zu manipulieren. Betroffen sind insbesondere Smartphones oder andere Telefone mit Internetzugang. Unter dem scheinbar harmlosen Angebot, die Telefonsoftware zu aktualisieren, verbirgt sich tatsächlich eine Komponente, welche die von der Bank empfangene mTAN ohne Kenntnis des Berechtigten an einen vorgegebenen Drittanschluss weiterleitet. Dadurch erhält der letztliche Empfänger wiederum die Möglichkeit, über das Konto wie ein Berechtigter zu verfügen.
Bei dem im Dezember 2006 vorgestellten eTAN, oder auch TAN Generator werden die Empfängerdaten (Empfänger-IBAN oder Empfängerkontonummer) eingegeben. Unter Berücksichtigung der Uhrzeit oder weiterer definierter Daten wird eine TAN erzeugt (generiert) und auf dem Gerät angezeigt. Diese TAN muss nun wiederum über die Tastatur eingegeben werden. Die TAN ist durch diesen Vorgang mit dem Empfängerkonto verknüpft und nur wenige Minuten gültig. Eine Veränderung oder Manipulation der Informationen bei der Übermittlung kann der Anwender selbst nicht feststellen. Die Bank hat jedoch die Möglichkeit, die Gültigkeit der TAN in Zusammenhang mit den am Gerät eingegebenen Empfängerinformationen und dem Zeitpunkt der Übermittlung zu prüfen.
Eine weitere Möglichkeit zur Verhinderung von MITM-Angriffen besteht in der Zwei-Faktor-Authentifizierung beispielsweise nach dem U2F-Standard der FIDO-Allianz. Dabei ist bei der Authentifizierung ein Security-Token erforderlich, der von einem entsprechenden Angreifer nicht simuliert werden kann, sondern physisch vorhanden sein muss.
