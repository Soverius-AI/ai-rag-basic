---
url: https://de.wikipedia.org/wiki/Denial_of_Service
---

# Denial of Service

## Überblick

Ein Denial-of-Service-Angriff (DoS-Angriff; englisch denial of service: für „Verweigerung des Dienstes“) bezeichnet in der Informationssicherheit einen Angriff auf das Schutzziel der Verfügbarkeit. Meist geschieht das durch Überlastung eines Rechnernetzes oder Netzwerkdienstes. Wird der Angriff von einer Vielzahl von Rechnern aus durchgeführt, spricht man von einem Distributed-Denial-of-Service-Angriff (DDoS-Angriff, deutsch wörtlich „verteilter Dienstverweigerungsangriff“). Ein verteilter Angriff ist wirkungsvoller und schwieriger abzuwehren als ein DoS-Angriff von einer einzelnen Quelle aus.

## Zweck

Wenn eine Überlastung mutwillig herbeigeführt wird, dann geschieht dies in der Regel mit der Absicht, einen Internetdienst funktionsunfähig zu machen. War dies ursprünglich vor allem eine Form von Protest oder Vandalismus, werden Denial-of-Service-Attacken mittlerweile von Cyber-Kriminellen als Dienstleistung angeboten (DDoS-Booter), um Konkurrenten zu schädigen. Ebenso werden Serverbetreiber zu einer Geldzahlung erpresst, damit ihr Internetangebot wieder erreichbar wird.
Im Unterschied zu Angriffen auf andere IT-Schutzziele will der Angreifer beim DoS-Angriff normalerweise nicht in den Computer eindringen und benötigt deshalb keine Passwörter oder Ähnliches vom Zielrechner. Jedoch kann der Angriff Bestandteil eines anderen Angriffs auf ein System sein, zum Beispiel bei folgenden Szenarien:

Um vom eigentlichen Angriff auf ein System abzulenken, wird ein anderes System durch einen DoS lahmgelegt. Dies soll dafür sorgen, dass das mit der Administration betraute Personal vom eigentlichen Ort des Geschehens abgelenkt ist oder die Angriffsversuche im durch den DoS erhöhten Datenaufkommen untergehen.
Werden Antworten eines regulären Systems verzögert, können Anfragen an dieses durch eigene, gefälschte Antworten kompromittiert werden. Beispiel hierfür ist das Hijacking fremder Domains durch Liefern gefälschter DNS-Antworten.

## Funktionsweise

Ein DoS-Angriff überlastet eine knappe Ressource eines IT-Systems wie den Internetzugang, die CPU oder den Arbeitsspeicher, damit das überlastete System auf Anfragen nicht oder nur sehr langsam antwortet. Im einfachsten Fall geschieht dies durch das Senden vieler Anfragen an das angegriffene Ziel. So werden beispielsweise beim SYN-Flooding viele TCP-Verbindungsanfragen an einen Server gesendet, um dessen Zustandstabelle zu füllen, damit der Server keine neuen Verbindungen mehr entgegennehmen kann. Slowloris hält möglichst viele Verbindungen zu einem Webserver offen, um dessen Ressourcen zu belegen. Um die Effizienz des Angriffs zu steigern, werden, wenn möglich, Programmfehler oder Sicherheitsschwächen ausgenutzt. So wird beispielsweise bei WinNuke oder Ping of Death das Betriebssystem mit einem einzelnen Datenpaket, bei der Teardrop-Attacke mit mehreren Paketen, zum Absturz gebracht. Die Land-Attacke nutzt einen Programmfehler aus, um die CPU voll auszulasten, sodass das System nicht mehr reagiert.
Ohne Ausnutzung eines Programmfehlers muss der Angreifer in erheblichem Maße eigene Ressourcen einsetzen, um das Angriffsziel zu überlasten. Um das zu erreichen, werden Angriffe meist von vielen verteilten Quellsystemen durchgeführt (DDoS-Angriff). Der Angreifer kann hierbei auf Botnetze zurückgreifen, um sich fremde Ressourcen zu eigen zu machen (Abschnitt #DDoS und Botnetze). Um die Bandbreite von netzwerklastigen DDoS-Angriffen zu erhöhen, werden Verstärkungsangriffe durchgeführt. Hierbei werden Internetdienste von Dritten missbraucht, um die vom Angreifer eingesetzte Bandbreite zu multiplizieren (Abschnitt #Distributed-Reflected-Denial-of-Service-Angriff).

## Distributed-Reflected-Denial-of-Service-Angriff

Eine besondere Form stellt der Distributed-Reflected-Denial-of-Service-Angriff (DRDoS-Angriff) dar. Hierbei adressiert der Angreifer seine Datenpakete nicht direkt an das Opfer, sondern an regulär arbeitende Internetdienste, trägt jedoch als Absenderadresse die des Opfers ein (IP-Spoofing). Die Antworten auf diese Anfragen stellen dann für das Opfer den eigentlichen DoS-Angriff dar. Durch diese Vorgehensweise ist der Ursprung des Angriffs für den Angegriffenen nicht mehr direkt ermittelbar, da die Absenderadresse beim Opfer die Adresse vom regulären arbeitenden Internetdienst darstellt.
Ein Beispiel für einen solchen Angriff ist die auf dem User Datagram Protocol (UDP) basierende DNS Amplification Attack, bei der das Domain Name System als Reflektor missbraucht wird. Der dabei auftretende „Verstärkungsfaktor“ (englisch amplification factor) beschreibt das Verhältnis der Paketgröße vom Reflektor zu der Paketgröße, welcher der Angreifer zur Auslösung dieser Antwort an den regulären Internetdienst schicken muss.
Ist dieser Verstärkungsfaktor größer 1 muss der Angreifer weniger Datenvolumen erzeugen als beim eigentlichen angegriffenen System durch die Antworten des Reflektorsystems zustande kommt. Für den Angreifer ist daher ein möglichst großer Verstärkungsfaktor am Reflektor vorteilhaft. Der konkrete Verstärkerfaktor ergibt sich durch die Definition des ausgenutzten Protokolls und dessen Eigenschaften. In folgender Tabelle sind einige, auf UDP basierende Verstärkerfaktoren für DRDoS-Angriffe zusammengefasst:

Weitere bekannte Methoden sind der Smurf- und der Fraggle-Angriff, bei denen ein Paket mit der IP-Adresse des Opfers als Absender an die Broadcast-Adresse eines Netzwerks gesendet wird. Das bewirkt, dass das Paket um die Anzahl der Geräte im Netzwerk vervielfacht und an das Opfer zurückgeschickt wird.
E-Mail-Backscatter wird eingesetzt, um nach einem ähnlichen Verfahren das E-Mail-Postfach eines Opfers zu füllen.

## DDoS und Botnetze

Mutwillige DDoS-Angriffe werden oft (aber nicht ausschließlich, siehe DDoS als Protestaktion) mit Hilfe von Backdoor-Programmen oder Ähnlichem durchgeführt. Diese Backdoor-Programme werden in der Regel von Trojanern auf nicht ausreichend geschützten Rechnern installiert und versuchen selbstständig, weitere Rechner im Netzwerk zu infizieren, um so ein Botnetz aufzubauen. Je größer das Botnetz, desto wahrscheinlicher ist, dass der Angriff selbst gegen gut geschützte Systeme durchdringt. Die Steuerung des Angriffs erfolgt über IRC, HTTP oder mittels eines Peer-to-Peer-Netzes.

## DDoS und Internet der Dinge

Mit zunehmender Bedeutung des Internets der Dinge werden für DDoS-Angriffe auch Geräte missbraucht, die auf den ersten Blick harmlos wirken: Internet-fähige Fernsehrekorder, Set-Top-Boxen, Fernseher, Überwachungskameras oder Uhren. Die Geräte werden oft mit Standard-Passwörtern ausgeliefert und ihre Firmware selten aktualisiert, was sie zu attraktiven Zielen für automatisierte Angriffe aus dem Internet macht. Einmal infiziert, können sie ähnlich wie Rechner eines Botnetzes orchestriert werden.

## DDoS als Protestaktion

DDoS-Angriffe sind als Form des Protests populär geworden. Einfach zu bedienende Werkzeuge wie die Low Orbit Ion Cannon ermöglichen es auch nicht computerversierten Personen, den Betrieb fremder Computer, Websites und Dienste mit Denial-of-Service-Angriffen zu stören.
Befürworter dieser Form des Protestes argumentieren, dass bei Online-Demonstrationen die Protestierenden nur ihre eigenen Ressourcen verwenden und deren Aktionen somit weder das Tatbestandsmerkmal der Gewalt noch eine Drohung mit einem empfindlichen Übel aufweisen. Daher sei diese politische von der wirtschaftlich motivierten Form des DDoS zu unterscheiden.
In Deutschland ist bereits der Versuch der Störung als Computersabotage strafbar, siehe dazu Abschnitt Rechtliche Situation.

## DDoS von Staaten

Auch Staaten nutzten DDoS-Attacken, um unliebsame Websites, zumindest vorübergehend, lahmzulegen. Die Volksrepublik China hat dazu die sogenannte Great Cannon of China erstellt und greift Websites an, die Tools anbieten, um die Great Firewall zu umgehen.

## Bekannte Angriffe

DDoS-Angriffe finden regelmäßig im Internet statt. Im Folgenden werden einige bekannte Beispiele aufgeführt.

August 2008: Die Webseite des georgischen Präsidenten Micheil Saakaschwili war nicht mehr erreichbar.
Anfang Juli 2009: Südkoreanische und US-amerikanische Regierungsseiten, Shoppingportale und Nachrichtendienste waren nach Angriffen vorübergehend nicht mehr erreichbar. Die ferngesteuerten Zugriffe von bis zu 30.000 mit schädlicher Software infizierten PCs sollen an dem Angriff beteiligt gewesen sein.
6. bis 8. Dezember 2010: Als Reaktion auf Sperrungen von WikiLeaks-Konten bei der Postfinance wie bei den Zahlungsdiensten MasterCard, Visa, PayPal und Amazon wurden deren Websites angegriffen und – bis auf die Amazon-Site – zeitweise in die Knie gezwungen.
18. Mai 2012: Die Website der Stadt Frankfurt am Main wurde im Rahmen der Blockupy-Proteste durch Anonymous attackiert und war zeitweise nicht mehr erreichbar.
ab September 2012: Angriffe auf amerikanische Banken
19. März 2013: Ein Streit zwischen der Plattform Spamhaus und vermutlich dem anonymen Hoster Cyberbunker führte zum derzeit größten bekannten DDoS-Angriff via DNS-Amplification/-Reflection, dem auf Grund geschickter PR durch Cloudflare, dem Website-Proxy von Spamhaus, kurzfristig nachgesagt wurde, er hätte „das Internet spürbar verlangsamt“. Bei etwa 300 Gigabit pro Sekunde anfragenden DNS-Server ist dies, im Vergleich zu Spitzen von 2,5 Terabit/s alleine im DE-CIX, unwahrscheinlich und wird vom Fachdienst Renesys lediglich als „lokaler Angriff“ eingeordnet.
21. Oktober 2016: Der Internetdienstleister Dyn wurde ab 7 Uhr, beginnend an der Ostküste der USA, Ziel einer DDoS-Attacke, die die Angebote namhafter Dyn-Kunden wie Twitter, Netflix, Spotify, Airbnb, Reddit und anderer teilweise außer Funktion setzte. Neu an dem Angriff, der in mehreren Wellen über den Tag erfolgte, war, dass er sich offenbar auf eine Infrastruktur aus ferngesteuerten Geräten stützte, die zum Internet der Dinge gehören.
28. Februar 2018: Der Online-Dienst GitHub wird gegen Mittag von einer neuen Form einer DDoS-Attacke, der Memcached Amplification Attack, getroffen. Dabei wurden pro Sekunde 1,35 Terabit an Daten an den Server geschickt. Nach 8 Minuten konnte der Angriff durch Eingreifen des Dienstleisters Akamai beendet werden.
Im Rahmen des Russischen Überfalls auf die Ukraine 2022 kam es zunächst zu DDoS-Attacken auf die Ukraine, denen dann umgekehrt Angriffe auf russische Regierungseinrichtungen und Medien folgten, wobei private Hackergruppen aus aller Welt beteiligt sind.
Anfang Januar 2023 kam es zu DDoS-Angriffen auf die dänische Zentralbank sowie sieben weiterer privater Banken. Als Folge konnten Kunden auf die Online-Dienste nicht zugreifen.
Mitte Februar 2023 waren mehrere Webseiten von deutschen Flughäfen nicht erreichbar, dies soll keine Auswirkungen auf den Flugbetrieb gehabt haben.
Am 10. April 2025: wurde die Webseite der größten deutschen Glücksspiel-Community durch einen DDOS-Angriff angegriffen, der selbst durch Cloudflare nicht abgewehrt werden konnte. Dabei wurden mehr als 100.000 verschiedene IP-Adressen für den Angriff genutzt.
Das Content Delivery Network Akamai stellte eine Steigerung der Angriffe vom vierten Quartal 2013 zum ersten Quartal 2014 um 39 % fest, zum Vorjahresquartal sind es 47 %. Der Sicherheitsspezialist Imperva berichtet, dass ein Drittel aller Netzwerk-DDoS-Ereignisse ein Volumen von mehr als 10 Gbit/s haben. „Diese Angriffe werden von Jahr zu Jahr aggressiver und umgehen DDoS-Schutzmaßnahmen.“ Zweck solcher Angriffe sind meist Erpressung, Schädigung eines Konkurrenten oder Infiltration des Zielsystems. Es gibt über Stunden gehende Angriffe mit 180 Gbit/s, die selbst Providernetze überfordern. Manche Angreifer geben sich als Suchmaschinen-Bots aus. Mehr als ein Viertel der angreifenden Bot-Netze befinden sich in China, Indien und dem Irak.

## Unabsichtliche Überlastung

Führt der sprunghafte Anstieg von Seitenabrufen an eine bisher nur gering frequentierte Website aufgrund der Berichterstattung in einem publikumswirksamen Medium zu deren Überlastung und damit zur Einschränkung der Verfügbarkeit, wird das im Netzjargon auch „Slashdot-Effekt“ genannt und scherzhaft mit einem DDoS-Angriff verglichen. Ein weiteres bekanntes Beispiel dafür im deutschsprachigen Raum ist die IT-Nachrichtenseite heise online und der dort gelegentlich auftretende „Heise-Effekt“. Bei anderen populären Websites wie Twitter oder Reddit kann der Effekt ebenfalls beobachtet werden.
Führt das eigene Handeln eines Diensteanbieters zu einer Überlastung, spricht man von einem Attack of Self-Denial.

## Gegenmaßnahmen

Gegenmaßnahmen richten sich entweder an das potentielle Einzelopfer eines DDoS-Angriffs oder an die Allgemeinheit im Internet zur Prävention von bestimmten Formen von DDoS-Angriffen.

### Einzelschutz

Bei kleineren Angriffen, die nur von einem oder wenigen Rechnern verursacht werden, können die Absenderadressen durch einen Paketfilter verworfen werden, sodass der schädliche Verkehr nicht das Zielsystem erreicht. Dies setzt jedoch voraus, dass der Angriffsverkehr nicht schon bereits den Internetzugang überlastet.
Firewalls bieten auch Funktionen zur automatischen Drosselung von Datenverkehr, beispielsweise durch Rate Limiting von TCP-SYN- und ICMP-Paketen. Bei Rate Limiting wird jedoch nicht zwischen erwünschten und schädlichen Anfragen unterschieden, sodass eine Limitierung auch erwünschten Verkehr negativ beeinträchtigt.
Durch einen Wechsel der IP-Adresse, bei Heimanwendern mit dynamischer IP-Adresse beispielsweise durch den Neustart des Routers möglich, kann einem DDoS-Angriff kurzfristig ausgewichen werden. Wenn der Angreifer die neue IP-Adresse ermitteln kann, ist diese Maßnahme jedoch nur von begrenzter Dauer.
Der Einsatz von SYN-Cookies mindert die Auswirkungen eines SYN-Flooding-Angriffs.
Analyse- und Filtermaßnahmen können durch den Internetdiensteanbieter in seinem Netz erfolgen, um gar nicht erst das Zielnetz des Opfers zu erreichen. Größere Anbieter setzen schon zur Eigensicherung ihres Netzes DDoS-Filtersysteme ein, die jedoch für eine andere Größenordnung optimiert sind. Bei Geschäftskundenanschlüssen gibt es teilweise die Option, einen DDoS-Schutz als Dienstleistung mitzubestellen.
Beim Hosting von Websites und anderen Internetdiensten können spezialisierte Dienstleister zur DDoS-Mitigation eingesetzt werden, die den Verkehr als Mittelsmann empfangen, ggf. filtern und an den eigentlichen Zielserver weiterleiten. Die Dienstleister verfügen dabei selbst über Anbindungen mit hohen Bandbreiten, um Angriffe ohne Störungen bewältigen zu können. Da es sich bei der Dienstleistung um eine Auftragsdatenverarbeitung handelt, müssen die Vorgaben der Datenschutz-Grundverordnung berücksichtigt werden.
Eine weitere mögliche – in der Regel aber kostenaufwendige – Maßnahme gegen Überlastung ist die Überdimensionierung von Ressourcen wie der Bandbreite des Internetzugangs. Durch den Einsatz von Lastverteilung kann die Kapazität von Netzanbindungen und Servern horizontal skaliert werden.

### Allgemeine Prävention

Eine generelle Schutzmaßnahme, um nicht Teil eines Botnetzes zu werden, ist die Wahl von sicheren Kennwörtern für Router, Netzwerke und vernetzte Geräte im Internet der Dinge.
Es wird empfohlen, die UPnP-Funktion bei Routern zu deaktivieren und unbenutzte Dienste zu sperren, um zu verhindern, dass die Geräte in einem lokalen Netzwerk missbraucht werden können.
Router an Außengrenzen von Netzen sollten nach RFC 2267 ungültige Absenderadressen filtern, um IP-Spoofing einzudämmen, was eine notwendige Voraussetzung für DRDoS-Angriffe darstellt.

### Rechtliche Gegenmaßnahmen gegen DDoS-Anbieter

Auf dem Schwarzmarkt gibt es Dienstleister, die DDoS gegen Bezahlung anbieten. Da diese für einen Teil der Angriffe verantwortlich sind, versuchen Strafverfolger gegen diese vorzugehen, ähnlich wie auf anderen illegalen Märkten:

Ende 2022 gehen Behörden gegen die laut Europol „bei Weitem beliebtesten DDoS-Booter-Dienste auf dem Markt“ vor: Alleine einer der abgeschalteten Dienste soll für mehr als 30 Millionen Angriffe genutzt worden sein. Mehrere Personen wurden verhaftet, die Ermittlungen gegen Anbieter und Kunden laufen.
Im April 2023 beschlagnahmten BKA und LKA Hessen den Anbieter „FlyingHost“ und nahmen fünf Tatverdächtige fest.

## Rechtliche Situation

In Deutschland ist die Beteiligung an DoS-Attacken als Computersabotage nach § 303b Abs. 1 StGB mit bis zu drei Jahren Freiheitsstrafe oder mit Geldstrafe bedroht, wenn die Dateneingabe oder -übermittlung in der Absicht erfolgt, einem anderen Nachteile zuzufügen, und dadurch eine Datenverarbeitung, die für einen anderen von wesentlicher Bedeutung ist, erheblich gestört wird. Gemäß § 303b Abs. 3 StGB ist auch der Versuch strafbar. Daneben ist ferner auch die Vorbereitung einer Straftat nach § 303b Abs. 1 StGB selbst strafbar, § 303b Abs. 5 StGB i. V. m. § 202c StGB. Hierunter fällt insbesondere die Herstellung und Verbreitung von Computerprogrammen für DoS-Attacken. Außerdem kann der Geschädigte Schadenersatz fordern. Im Verhältnis zwischen Zugangsanbieter und Reseller liegt das Vertragsrisiko nach Ansicht des Amtsgerichts Gelnhausen regelmäßig bei dem Reseller, so dass er jenem gegenüber auch dann zahlungspflichtig ist, wenn die Leitung durch eine DDoS-Attacke gestört wird. Die Bundesregierung ließ die Frage der generellen Strafbarkeit im Rahmen einer Online-Demonstration in einer Antwort auf eine Kleine Anfrage offen: „Ob eine DDoS-Attacke eine Straftat im Sinne des § 303b StGB (Computersabotage) darstellt, obliegt der Prüfung im Einzelfall durch die zuständigen Strafverfolgungsbehörden und Gerichte. Allgemeine Vorschriften zur Einschätzung gibt es bei Bundesbehörden nicht.“
In Österreich können DoS- bzw. DDoS-Attacken die strafrechtlichen Delikte nach § 126a StGB (Datenbeschädigung) und § 126b StGB (Störung der Funktionsfähigkeit eines Computersystems) erfüllen. Der Missbrauch von Computerprogrammen nach § 126c StGB ist als Vorbereitungshandlung zu diesen Delikten zu sehen und selbst unter Strafe gestellt.
Im Vereinigten Königreich droht sogar für das bloße Herunterladen der für die Angriffe genutzten Software LOIC eine Freiheitsstrafe von zwei Jahren.
In der Schweiz ist DoS als das Unbrauchbarmachen von Daten und Datenbeschädigung nach Art. 144bis StGB strafbar und kann mit einer Geldstrafe oder einer Freiheitsstrafe bis zu drei Jahren, im Qualifikationsfall (großer Schaden) mit einer Freiheitsstrafe von einem Jahr bis zu fünf Jahren geahndet werden.

## Häufigkeit

Angriffe mit breiten Auswirkungen haben sich zwischen 2015 und 2016 nahezu verdoppelt. Vor allem unsichere IoT-Geräte stellen eine zunehmende Gefahr dar. Ein Mirai-Ableger sorgte 2016 für eine Großstörung im Netz der Deutschen Telekom. Im selben Jahr gab es breit angelegte Attacken auf die Webseiten der Kandidaten im US-Präsidentschaftswahlkampf sowie einen Angriff auf den DNS-Dienstleister Dyn, durch den ein Wochenende lang unter anderem Twitter, Netflix und Spotify nicht erreichbar waren.
Das World Wide Web Consortium erfuhr vom 28. Februar bis 2. März 2022 schwere Störungen durch wiederholte DDoS-Attacken, wobei die Zuordnung zum Angriff auf die Ukraine nicht eindeutig dokumentiert ist.
