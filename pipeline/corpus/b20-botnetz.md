---
url: https://de.wikipedia.org/wiki/Botnetz
---

# Botnetz

## Überblick

Ein Botnet oder Botnetz ist eine Gruppe automatisierter Schadprogramme, sogenannter Bots. Die Bots (von englisch: robot „Roboter“) laufen auf vernetzten Rechnern, deren Netzwerkanbindung sowie lokale Ressourcen und Daten ihnen, ohne Einverständnis des Eigentümers, zur Verfügung stehen. In Deutschland gab es 2010 über 470.000 solcher Bots, von denen im Durchschnitt etwa 2.000 pro Tag aktiv waren. Die Initiative botfrei.de des Verbandes der Internetwirtschaft ECO stellte 2014 bei 220.000 stichprobenartig untersuchten Computern 92.000 verseuchte Systeme mit rund 725.000 infizierten Dateien fest, woraus sich eine Infektion von ca. 40 Prozent aller Computer in Deutschland errechnet. Laut Bericht zur Lage der IT-Sicherheit in Deutschland 2015 des Bundesamtes für Sicherheit in der Informationstechnik (BSI) wurden im ersten Halbjahr 2015 in Deutschland täglich bis zu 60.000 Systeme neu infiziert.
Betreiber illegaler Botnetze installieren die Bots ohne Wissen der Inhaber auf Computern und nutzen sie für ihre Zwecke. Die meisten Bots können von einem Botnetz-Operator (auch Bot-Master oder Bot-Herder genannt) über einen Kommunikationskanal überwacht werden und Befehle empfangen. Dieser wird in der Fachsprache als Command-and-Control-Server bezeichnet; Kurzform: C&C-Server.

## Anwendungen

Ein Bot stellt dem Betreiber eines Botnetzes je nach Funktionsumfang verschiedene Dienste zur Verfügung. Derweil mehren sich multifunktional einsetzbare Botnets. Der Botmaster kann so flexibel auf andere Einsatzmöglichkeiten umschwenken. Grundsätzlich lassen sich die Verwendungsmöglichkeiten eines Bot-Netzwerks wie folgt unterscheiden:

Nachladen und Ausführen weiterer Programme beziehungsweise Aktualisierung des Bots
Angriffe zum Nachteil eines externen Opfersystems
Proxy
Proxys bieten die Möglichkeit, eine Verbindung zu einem dritten Computer über den Zombie herzustellen, und können damit die eigentliche Ursprungs-Adresse verbergen. Der so geschaffene Zwischen-Host kann dann für weitere Angriffe auf andere Rechner genutzt werden. Aus Sicht des Ziel-Computers kommt der Angriff vom Proxy-Host.
Versand von Spam-Mails, insbesondere Phishing-Mails
Einige Bots sind auf das Versenden von großen Mengen an E-Mail programmiert. Sie bieten Funktionen zum Laden von Mail-Templates, Senden von E-Mails an generierte oder von einem Server abgefragte Adressen und Abfragen von Listings der Zombie-IP in DNSBLs.
Ausführen von DDoS-Attacken und DRDoS-Attacken
Viele Bots können DoS-Attacken ausführen. Meistens stehen dabei verschiedene Methoden wie SYN-Flood oder HTTP-Request-Flood zur Verfügung. Werden diese Attacken von allen Bots im Netz mit der gesamten ihnen zur Verfügung stehenden Netzwerk-Bandbreite gleichzeitig ausgeführt, so werden auf dem Ziel-Rechner der Attacke Netzwerk-Dienste außer Betrieb gesetzt oder die gesamte Bandbreite seiner Anbindung für Daten von den Zombies benötigt.
Ausführen von Klickbetrug
Eine weitere Möglichkeit, ein betriebsbereites Botnetz zum finanziellen Vorteil zu nutzen, wird Klickbetrug genannt. Hierzu nutzt der Betrüger ein Konto bei einem Onlinedienstleister, der seine Werbepartner für Klicks auf Werbebanner oder die Vermittlung von Besuchern vergütet. Der Betrüger nutzt die Bots dazu, die Banner anzuklicken oder die vergütete Website zu besuchen. Dies geschieht mit den rechnerspezifischen Informationen wie Betriebssystem, Browser und IP-Adresse der gekaperten Rechner und ist somit für den Werbeportalbetreiber nicht als Betrug zu erkennen.
Botnetz-interne Angriffe
Zugriff auf lokal gespeicherte Daten durch Einsatz von Sniffern und Password-Grabbern
Die privaten Daten der mit Bots infizierten Rechner (Zombies) sind lukrativ. Die meisten Bots bieten Möglichkeiten, auf lokal gespeicherte Zugangsdaten verschiedener Anwendungen (beispielsweise IE oder ICQ) zuzugreifen. Auf den Diebstahl von Daten spezialisierte Bots bieten auch Funktionen, um Daten aus Webformularen zu lesen, und können dadurch Informationen ausspionieren, die in SSL-gesicherten Webseiten eingegeben wurden, darunter beispielsweise auch Passwörter oder Kreditkartennummern. Viele IRC-Bots können den Netzwerkverkehr des Rechners protokollieren.
Einsatz als Ransomware
Speichermedium für die Verbreitung illegaler Inhalte (z. B. Filesharing von geschütztem Material)
Nutzung der Rechenleistung (z. B. für Bitcoin-Mining)
Automatisierung von „Online-Tasks“
Preisabfragen in Online-Shops
Erreichbarkeitsprüfung von Websites
Warenbestandspflege
Bot-Nets liefern eine hervorragende Infrastruktur für die herkömmliche Internetkriminalität. Dies begründet auch ihr rasantes Wachstum.

## Command-and-Control-Technik

Die weitaus meisten Bots bieten eine Kommunikationsmöglichkeit mit dem Betreiber des Botnetzes, wobei auch sogenannte Command-and-Control-Server (aus englisch command and control server; kurz C&C-Server oder C2) eingesetzt werden. Dies umfasst den Abruf von Daten von einem Bot sowie das Verteilen von neuen Anweisungen.

### IRC C&C

IRC wurde in den 1990ern zu einer populären Internet-Chat-Lösung. Legitime und nützliche Bots, wie zum Beispiel Eggdrop, wurden entwickelt, um den Anwender bei der IRC- und Kommunikationsverwaltung zu helfen. Diese einfache Technik ist dann zur ersten C&C-Strategie geworden. Bei der Kommunikation über einen IRC-Channel stellen die Bots eine Client-Verbindung zu einem IRC-Server her. Befehle werden ohne Verzögerung von den Bots ausgeführt, und der Betreiber erhält sofort eine Rückmeldung der Bots. Ein IRC-C&C-Server ist für einen Bot-Operator sehr einfach zu erstellen und zu verwalten. Ist ein Computer infiziert, versucht der Zombie, sich zu dem IRC-Server und Channel zu verbinden. Wenn die Verbindung erfolgreich war, so kann der Bot-Operator den Bot steuern. Dies kann individuell über private Nachrichten oder global an alle Zombies innerhalb des Channels erfolgen. Um dies effizienter zu gestalten, erstellen einige Bot-Operator ein „Thema“ für den Channel, das ein Kommando für die Bots darstellt, wie zum Beispiel Aktualisierungen oder eine DDoS-Attacke durchzuführen.
Vorteile der IRC-Technik:

Es ist interaktiv: Obwohl es ein relativ einfaches Protokoll ist, ist IRC interaktiv und erlaubt eine Vollduplex-Kommunikation zwischen Client und Server.
Einen IRC-Server zu erstellen ist einfach. Außerdem gibt es sehr viele bestehende Server, die man, wenn notwendig, benutzen kann.
Es ist möglich, mehrere Botnetze unter Verwendung von einem Server zu erstellen und zu steuern. Funktionalitäten wie Nicknames, Chat Channels, Passwort-geschützte Channels etc. ermöglichen dies.
Es ist einfach, Redundanz aufzubauen, indem man mehrere Server miteinander verbindet.

### DNS und C&C

Gefolgt von dem Einsatz von privaten Servern und Passwörtern wurden C&C-Techniken immer weiter verbessert. Die erste Technik benutzt mehrere miteinander verbundene IRC-Server, die die gewöhnliche IRC-Technik verwenden. IRC ist in einer Art und Weise konzipiert, dass mehrere Server miteinander verbunden werden können, um ein Netzwerk von Servern zu bilden. Bei der Verwendung dieser Technik werden die Adressen aller Server in den Bot fest eingetragen. Dieser versucht sich dann mit jeder dieser eingetragenen Adressen zu verbinden. Ist eine Verbindung zwischen Server und Client hergestellt, dann meldet sich der Bot an dem Channel an, in dem der Bot-Operator Anweisungen gibt. Für Botnetzjäger wird es schwierig das gesamte Netzwerk lahmzulegen, besonders wenn immer wieder neue Server hinzugefügt werden. Sind die Adressen des C&C-Servers fest in den Bot implementiert, so kann dieser den Server nicht mehr erreichen, wenn die Adressen gesperrt werden. Wie man sieht, hat diese Technik ihre Grenzen, weshalb DNS-Einträge eingeführt wurden.
DNS wird unterteilt in Domain Names und Multihoming. Der Unterschied zwischen den beiden ist, dass bei Domain Names verschiedene Domänen auf die gleiche IP-Adresse zeigen, während bei Multihoming eine Domäne auf mehrere unterschiedliche IP-Adressen verweist.
Die Einführung von Domain Names und Multihoming haben die Bot-Herder dabei unterstützt, die Ausfallsicherheit der C&C-Server zu erhöhen.

### Webbasiertes C&C

Heutzutage können Tools für einige hundert Dollar oder weniger gekauft werden. Diese Tools beinhalten meistens an webbasierte Sicherheitslücken individuell angepassten Schadcode, der nicht von den Antiviren-Programmen erkannt wird, und eine webbasierte Command-and-Control-Engine, die eine Backend-Datenbank zum Speichern von gestohlenen Informationen enthält. Da die Benutzeroberfläche von webbasiertem C&C sehr einfach zu bedienen ist, ist sie bei vielen Bot-Herdern sehr beliebt.
Bots können so konfiguriert werden, dass sie wiederholt SYN-Pakete zum C&C-Server schicken, damit der Server die IP-Adressen der Zombies erhält. Mithilfe dieser IP-Adresse kann der Angreifer dem Client verschlüsselte Bot-Kommandos und Daten schicken.
Die Kommunikation über HTTP mit einer Webanwendung funktioniert ohne persistente Verbindung, die Bots übertragen Daten und fragen nach neuen Befehlen in Intervallen. HTTP-Botnetze erfreuen sich zunehmender Beliebtheit, da das Aufsetzen der Administrations-Infrastruktur im Vergleich zu einem IRC-Server einfacher ist und die Kommunikation der Bots weniger auffällt.
Manche Botnetze installieren automatisch Reverse Proxys auf den infizierten Systemen, um so den wahren Standort des C&C-Servers zu verschleiern. Dabei reichen die infizierten Systeme die Anfragen mehrfach weiter ähnlich dem Prinzip von TOR.
Webbasiertes C&C hat gegenüber der traditionellen IRC-Lösung folgende Vorteile:

Im Datenverkehr für Port 80 verstecken: Fast alle Unternehmen erlauben den TCP-Port 80 für normale Webaktivitäten über das Netzwerk. Die Anfragen von Bots zu einer Webseite bleiben unentdeckt. Das ist gegenüber IRC- und P2P-C&C-Lösungen ein großer Vorteil.
„Pushes“ anstatt „Pulls“: Bei IRC verbinden sich die Bots mit dem Server und warten auf Instruktionen. Bei Web-C&C verbindet sich der Server mit den Bots. Dies verringert den Datenverkehr zwischen dem C&C-Server und dem Bot und somit die Chance, einen Bot in einem Netzwerk zu erkennen.
Skalierbarkeit und Benutzbarkeit: Ein einzelner Webserver kann mehrere hunderttausende bis Millionen Bots verwalten. Traditionelle IRC-Channel können in den meisten Fällen nur mehrere tausende Bots verwalten, bevor diese überlastet sind. Darüber hinaus sind webbasierte C&Cs für den durchschnittlichen Bot-Operator leichter zu benutzen als die kompliziertere IRC-C&C-Technik, die Selbstprogrammierung erfordert. Heutzutage kann man Lösungen kaufen, die nicht nur eine Verwaltungsfunktion für die Bots, sondern auch ein Verwaltungsprogramm für die gestohlenen Daten enthält.
Es gibt zwei Typen von webbasierten Botnets:

Echo-Based: Echo-Based bedeutet, dass der Bot dem C&C-Server seine Existenz meldet.
Command-Based: Command-Based ist ein Webservice bzw. Webapplikation, die helfen soll, ein Botnetz effizienter zu betreiben.

### P2P-Botnetze

Peer-to-Peer-Netzwerke wurden durch Dienste wie Musik- und File-Sharing immer populärer. Innerhalb weniger Jahre, nachdem die ersten Bots entstanden waren, begannen Bot-Herder, ihre eigenen P2P-Netzwerke zu erstellen, um Bots zu verwalten. Diese Technik ist eine sehr effiziente Möglichkeit für den Bot-Operator, seine Botnetze ohne eine zentrale Kontrollstruktur zu verwalten. Die Zombies können als Client und Server fungieren, das heißt, jeder Knoten kann Befehle erteilen und erhalten. Jeder einzelne Knoten des P2P-Netzwerkes ist für den Bot-Operator erreichbar, über den er dann das gesamte Netzwerk kontrollieren kann. Zum Beispiel kann sich der Bot-Operator zu einem Zombie verbinden und diesen zu einer Aktualisierung veranlassen. Dies startet eine Kettenreaktion: Alle anderen Bots in dem P2P-Netzwerk laden die Aktualisierung ebenfalls herunter und synchronisieren sich gegenseitig entsprechend der Konfigurationsdatei, die der Hacker in die Zombies eingespielt hat. Einen Angreifer in so einer verteilten P2P-Netzwerklösung zu identifizieren, ist praktisch unmöglich. Andererseits kann ein einfacher Peer andere Bots finden. P2P-Netzwerke sind generell leichter anhand des Netzwerkdatenverkehrs zu erkennen, den die Zombies generieren.

### FTP-Based C&C

Wie mit vielen anderen Protokollen wurde auch mit FTP als Control Channel experimentiert. Heutzutage ist diese Art nicht oft vorzufinden. Jedoch gibt es einen Bottyp, der regelmäßig einen FTP-C&C-Bericht erstattet, und zwar der Phishing- oder Banking-Trojaner. Diese Bots, wie zum Beispiel Dumador oder Haxdoor, sind grundsätzlich Keylogger, mit dem Unterschied, dass sie sehr viel umfangreicher sind. Sie überwachen („sniffing“) den Datenverkehr, wenn der Anwender auf dem kompromittierten System im Internet surft. Betritt der Anwender eine verschlüsselte Webseite (HTTPS), dann führen sie einen Man-in-the-Middle-Angriff am Computer selbst aus. Da dieser Angriff in der Opfermaschine selbst stattfindet, wird sie auch oft Man-on-the-Inside-Angriff genannt. Der Bot präsentiert dem User eine gefälschte Webseite. Mit dieser Technik ist es möglich, Authentifizierungsdaten etc. aufzuzeichnen. Die gestohlenen Daten werden dann auf einen FTP-Server hochgeladen, wo sie der Bot-Operator warten kann. Bot-Operator erstellen meist ausführliche Statistiken über die Daten sowie ihre Herkunft.
Die Top-10-Länder, in denen 2008 Botnet Command-and-Control-Server identifiziert werden konnten, waren:

Vereinigte Staaten: 16.774
Deutschland: 3.909
China: 2.998
Russland: 2.960
Kanada: 2.388
Großbritannien: 1.703
Südkorea: 1.151
Frankreich: 985
Malaysia: 857
Japan: 788

## Verbreitung der Bots (Spreading)

Das Erweitern eines Botnetzes erfolgt durch Installieren der Bots auf einem noch nicht angebundenen Computer. Um möglichst viele Ressourcen zur Verfügung zu haben, versuchen die Betreiber, eine hohe Anzahl von Rechnern unter ihre Kontrolle zu bekommen. Die Installation erfolgt meistens für den Anwender unsichtbar. Während des Betriebs eines Botnetzes kommen immer wieder neue Rechner hinzu, andererseits scheiden solche aus, bei denen der Bot entfernt wurde.
Die Verbreitung findet auf folgenden Wegen statt:

Firmware
Die Schadsoftware kann bereits auf Neugeräten vorinstalliert sein, beispielsweise BADBOX auf billigen HDMI-Sticks mit Android-Firmware. Sie lässt sich in diesem Fall auch kaum entfernen.
Malware
Das Installations-Programm des Bots wird per E-Mail an viele Adressen geschickt, und der Empfänger wird dazu aufgefordert, das Programm auf seinem Computer auszuführen. Mitunter wird auch nur ein Link auf eine infizierte Webseite versandt.
Downloads
Der Bot wird als sogenannter Trojaner (eigentlich: Trojanisches Pferd) gebündelt mit einer Applikation, die der Anwender freiwillig herunterlädt und auf seinem Computer ausführt. Häufig handelt es sich dabei um illegale Programme wie Cracks, Warez oder andere fragwürdige Software. Immer häufiger werden jedoch auch legale Angebote gehackt und mit einem Trojaner infiziert.
Exploits
Die Installation des Bots erfolgt unter Ausnutzung einer Sicherheitslücke im Betriebssystem, im Browser oder in einer Anwendung auf dem Computer. Bots, die über Exploits installiert werden, haben häufig eine Funktion zur automatischen Weiterverbreitung (Computerwurm). Manche Exploits benötigen die Interaktion eines Anwenders, wie z. B. das Klicken auf einen präparierten Link, um den Schadcode auszuführen. Andere Exploits werden beim Aufruf der Seite automatisch ausgelöst (Drive-By-Infection). Es kommt vor, dass populäre Websites gehackt und mit Schadcode versehen werden oder dass der Exploit über ein eingeblendetes Werbebanner von einem anderen Server geladen wird.
Manuelle Installation
Der Bot wird nach einem Einbruch in einen Computer manuell auf diesem installiert. Dies kommt vor allem bei Servern zum Einsatz. Durch deren hohe Verfügbarkeit und die meist gute Netzanbindung lohnt es sich hier besonders, gezielt nach Schwächen zu suchen.
Laut einer Studie von 2008 des Antivirus-Herstellers Kaspersky Lab war jeder zehnte PC Teil eines Botnets. Damit würden sie eine der größten illegalen Einnahmequellen im Internet darstellen.
Die Jahresstatistik von botfrei.de weist aus, dass 2014 40 % von 220.000 gescannten Rechnern mit Bots infiziert waren. Im Jahresverlauf seien auf mehr als 92.000 verseuchten Systemen knapp 725.000 infizierte Dateien entdeckt worden. Dies sei ein alarmierender Wert und stelle eine Zunahme zum Vorjahr dar.

## Bekämpfung der Botnetze

Allgemein werden vorbeugende Maßnahmen empfohlen. Eine generelle Schutzmaßnahme ist zum Beispiel die Wahl von sicheren Kennwörtern für Router, Netzwerke und vernetzte Geräte im Internet der Dinge. Das Bundesamt für Sicherheit in der Informationstechnik empfiehlt zum Beispiel auch, die UPnP-Funktion bei Routern zu deaktivieren, um zu verhindern, dass Geräte im Rahmen von Botnets für Denial-of-Service-Attacken missbraucht werden können.

Wie das BKA am 30. Dezember 2014 mitteilte, war es nach vorangehenden Ermittlungen gelungen, ein Botnetz zu zerschlagen. Es habe aus 11.000 Computersystemen aus über 90 Staaten bestanden, wovon sich mehr als die Hälfte der infizierten Systeme in Deutschland befunden habe. Durch Zusammenarbeit mit dem BSI, dem Fraunhofer-Institut (FKIE) sowie zwei deutschen Antivirenherstellern sei es gelungen, die Computerinhaber, deren Computer Teil des Botnetzes waren, über ihre Telekommunikationsdiensteanbieter zu benachrichtigen, ihnen Hilfestellung bei der Bereinigung der infizierten Rechner zu geben sowie Hinweise zur Anzeigenerstattung zu erteilen.
Europäische Polizeibehörden und Softwarefirmen haben im Februar 2015 ein weltweites Botnetz namens „Ramnit“ mit mehr als drei Millionen befallenen Computern zerschlagen, die hauptsächlich in Großbritannien standen. „Ramnit“ war dazu verwendet worden, Millionen Passwörter und Bankdaten zu erbeuten. Auch Softwarefirmen wie Microsoft, Symantec und AnubisNetworks waren an der Zerschlagungsaktion beteiligt, die von der europäischen Polizeibehörde Europol in Den Haag geleitet wurde. An der Aktion hatten sich Polizisten aus Deutschland, Italien, den Niederlanden und Großbritannien beteiligt. Es sei laut Einsatzleiter Paul Gillen gelungen, die Kontrollserver der Hacker in mehreren europäischen Staaten auszuschalten. Die Täter hätten die Kontrolle über ihre Infrastruktur verloren, sagte er. Seit 2012 habe das Botnetz existiert und die Schadsoftware, um die Computer ins Botnetz einzugliedern, sei über Links in Spam E-Mails oder durch infizierte Webseiten auf die Computer gelangt.
Wissenschaftlern der Ben-Gurion-Universität im Negev, die in den „Deutsche Telekom Innovation Laboratories“ forschen, ist es im Februar 2016 gelungen, ein Programm zu entwickeln, das Botnetze mittels Honeypots aufspüren kann. Dudu Mimran, Technischer Leiter der „InnovationLabs@BGU“, erklärte, dass ein Durchbruch in der automatischen Erkennung von Botnetzen gelungen sei. Es sei mit dem Programm feststellbar, ob ein Angriff von einer realen Person oder einem Bot ausgeht. So konnte man schließlich (durch maschinelles Lernen) Algorithmen entwickeln, die zum Aufspüren von sechs verschiedenen Botnetzen führten, so dass die Strafverfolgungsbehörden informiert werden konnten.
Ende 2016 wurde unter Sachleitung der Staatsanwaltschaft Verden in Zusammenarbeit mit dem Bundesamt für Sicherheit in der Informationstechnik, Eurojust, Europol, dem FBI, Fraunhofer FKIE und weiteren Partnern die Botnetzinfrastruktur Avalanche zerschlagen. Im Rahmen des Takedowns erfolgte die Beschlagnahme von mehr als 800.000 Domains.
Seit August 2020 gibt es eine öffentlich zugängliche Enzyklopädie der israelischen IT-Sicherheitsfirma Guardicore. Die Basisdaten für die Botnet-Enzyklopädie stammen aus dem Guardicore Global Sensors Network – ein Netzwerk der Firma von Erkennungssensoren, die weltweit in Rechenzentren und Cloudumgebungen eingesetzt werden. Guardicore möchte so potentielle Bedrohungen Unternehmen an einen zentralen und gratis zugänglichen Ort zur Verfügung stellen.

## Größte Botnetze

## Käufliche Nutzung von Botnetzen

In vielen Foren wird offen für die Umsetzung von Bot-Angriffen geworben. Die Preise für 24-Stunden-Angriffe schwanken zwischen 50 und einigen tausend Dollar.
