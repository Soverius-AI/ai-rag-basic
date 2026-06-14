---
url: https://de.wikipedia.org/wiki/Internet_Protocol
---

# Internet Protocol (IP)

## Überblick

Das Internet Protocol (IP; deutsch Internetprotokoll) ist ein in Rechnernetzen weit verbreitetes Netzwerkprotokoll und stellt durch seine Funktion die Grundlage des Internets dar. Das IP ist die Implementierung der Internetschicht des TCP/IP-Modells bzw. der Vermittlungsschicht (englisch Network Layer) des OSI-Modells. IP ist ein verbindungsloses Protokoll, das heißt bei den Kommunikationspartnern wird kein Zustand etabliert.
Mit IPv4 und IPv6 sind zwei verschiedene Versionen des Internet Protocols verbreitet. Beide stellen ein eigenes Netzwerkprotokoll dar, das unabhängig von oder auch parallel zu dem anderen betrieben werden kann. Der Hauptunterschied ist die Größe des Adressraums.

## Eigenschaften und Funktionen

Das Internet Protocol bildet die erste vom Übertragungsmedium unabhängige Schicht der Internetprotokollfamilie. Das bedeutet, dass mittels IP-Adresse und Subnetzmaske (subnet mask) für IPv4, bzw. Präfixlänge bei IPv6, Computer innerhalb eines Netzwerkes in logische Einheiten, sogenannte Subnetze, gruppiert werden können. Auf dieser Basis ist es möglich, Computer in größeren Netzwerken zu adressieren und ihnen IP-Pakete zu senden, da logische Adressierung die Grundlage für Routing (Wegewahl und Weiterleitung von Netzwerkpaketen) ist.
Im Kontext des Internet Protocols sind die folgenden Begriffe üblich:

Ein Knoten (englisch node) ist ein IP-fähiges Netzwerkgerät.
Ein Router ist ein Knoten, der IP-Pakete weiterleitet. IPv4 verwendete den Begriff Gateway für ein Gerät, das Pakete zwischen Netzen weiterleitet.
Ein Host ist ein Knoten, der kein Router oder Gateway ist. Im Regelfall sind damit Endgeräte gemeint.

## Adressvergabe

Öffentliche IP-Adressen müssen in der Regel weltweit eindeutig zugeordnet werden können, daher ist deren Vergabe durch die Internet Assigned Numbers Authority (IANA) geregelt. Diese delegiert große Adressblöcke an die Regional Internet Registries (RIRs), welche dann Subnetze davon an Local Internet Registries (LIRs) vergeben. Zu den LIRs gehören beispielsweise Internetdienstanbieter, die aus ihrem Adressbereich kleinere Subnetze oder einzelne Adressen an Kunden vergeben.

Bei IPv4 ist der zu vergebende Adressraum weitgehend aufgebraucht. Die IANA hat im Februar 2011 die letzten Adressblöcke an die RIRs vergeben.

## Versionsgeschichte

Im Mai 1974 veröffentlichten Vint Cerf und Bob Kahn in einer Forschungsarbeit ein Netzwerkprotokoll zur übergreifenden Kommunikation zwischen unterschiedlichen paketvermittelten Netzen. In dem Modell führen Hosts ein „Übertragungskontrollprogramm“ (englisch transmission control program – TCP) aus, das die Übermittlung eines kontinuierlichen Datenstroms zwischen Prozessen sicherstellt. Gateways übernehmen die Umformung von Paketen an Netzwerkgrenzen.
Die erste vollständige Protokollspezifikation erschien mit RFC 675 im Dezember 1974. Das monolithische Übertragungskontrollprogramm wurde später in eine Modularchitektur geteilt, die aus dem Internetprotokoll zur Host-zu-Host-Kommunikation und dem Übertragungskontrollprotokoll (englisch transmission control protocol – TCP) zur Prozess-zu-Prozess-Kommunikation bestand. Das Modell wurde bekannt als TCP/IP-Referenzmodell.
Beide Protokolle wurden mehrfach überarbeitet, ehe sie zum praktischen Einsatz kamen. Neben der finalen Bezeichnung als „Internet Protocol“ wurde in Entwürfen auch „Internetwork Protocol“, „Internet Datagram Protocol“ oder „DoD Standard Internet Protocol“ verwendet. Bei größeren Änderungen des IP-Headers wurde eine im Header enthaltene Versionsnummer hochgezählt. Bei der Einführung von TCP/IP im Arpanet am 1. Januar 1983 trugen IP-Pakete daher die Versionsnummer 4. Vorherige Versionen waren nicht verbreitet.
Im ersten Protokollentwurf war ein Adressierungsschema variabler Länge vorgesehen, bestehend aus einer mindestens 4 Bit langen Netzadresse, einer 16 Bit langen Hostadresse und einer 24 Bit langen Portnummer. Später wurden IP-Adressen auf 32 Bit festgelegt, bestehend aus 8 Bit Netzadresse und 24 Bit Hostadresse. Die Portnummer wurde zu TCP verschoben und auf 16 Bit gekürzt. Mit RFC 791 wurden Netzklassen eingeführt, um mehr Flexibilität bei der Aufteilung einer IP-Adresse in Netz- und Hostteil zu haben. Subnetz-Segmentierung war zu dem Zeitpunkt noch nicht vorgesehen. Jon Postel kümmerte sich um die Vergabe von Netzadressen – eine Rolle, die später als Internet Assigned Numbers Authority bezeichnet wurde.
Mit der sich abzeichnenden Knappheit von IP-Adressen begann Anfang der 1990er Jahre die Entwicklung eines Nachfolgeprotokolls. Zur Unterscheidung wurde das etablierte Internetprotokoll entsprechend der Versionsnummer im IP-Header als IPv4 und das neue Internetprotokoll als IPv6 bezeichnet. Die wichtigste Neuerung ist der erheblich größere Adressraum: gegenüber den 32-Bit-Adressen bei IPv4 (ergibt ca. 4 Milliarden, oder 4,3·109 Adressen) verwendet IPv6 128-Bit-Adressen (ergibt ca. 340 Sextillionen, oder 3,4·1038 Adressen).
 Die Versionsnummer 5 war durch das experimentelle Internet Stream Protocol belegt, das nicht als Nachfolger, sondern als Ergänzung parallel zum Internetprotokoll gedacht war. Das Internet Stream Protocol wurde später aufgegeben ohne eine nennenswerte Verbreitung erlangt zu haben. Die Versionsnummern 7 bis 9 wurden für verschiedene Vorschläge eines IPv4-Nachfolgers verwendet, die jedoch zugunsten von IPv6 aufgegeben wurden.
Die Verbreitung von IPv6 nimmt langsam zu, liegt jedoch hinter der Verbreitung von IPv4. Gängige Betriebssysteme und Standardsoftware unterstützen beide Protokolle. Übergangsmechanismen ermöglichen den gleichzeitigen Betrieb von IPv4 und IPv6 auf derselben Infrastruktur. Seit dem World IPv6 Day und World IPv6 Launch Day 2011 und 2012 bieten namhafte Websites und Internetdienstanbieter IPv6 an.

## Zuverlässigkeit

Die Designgrundsätze der Internetprotokolle nehmen an, dass die Netzinfrastruktur an jedem einzelnen Netzelement oder Übertragungsmedium von Natur aus unzuverlässig ist. Auch setzen diese voraus, dass sich die Infrastruktur im Bezug auf Verfügbarkeit von Verbindungen und Knoten dynamisch verhält. Um jedoch die Netzinfrastruktur aufrechtzuerhalten, wird das Hauptaugenmerk der Datenübertragung vorsätzlich größtenteils auf den Endknoten jeder einzelnen Datenübermittlung gelegt. Router im Übertragungspfad schicken Datenpakete nur zu direkt erreichbaren und bekannten Übergängen, die die für den Bestimmungsort festgelegten Adressen vom Routenplanungspräfix vergleichen.
Demzufolge stellen diese Internetprotokolle nur beste Übergänge zur Verfügung, wodurch diese Dienste als unzuverlässig charakterisiert werden. Das IP ist verbindungslos, jedes einzelne Datenpaket wird unabhängig behandelt. Da jeder einzelne Übermittlungsweg eines Datenpaketes neu definiert wird (dynamisch), ist es möglich, dass die Pakete auf verschiedenen Pfaden zu ihrem Bestimmungsort gesendet werden.
Die Internetprotokoll-Version 4 (IPv4) stellt den benötigten Schutz zur Verfügung, um sicherzustellen, dass der Protokollkopf jedes Datenpaketes fehlerfrei ist. Ein Routenplanungsknoten berechnet eine Prüfsumme für den Paketkopf. Wenn die Prüfsumme ungültig ist, verwirft der Routenplanungsknoten das Paket. Der Routenplanungsknoten muss keinen Endknoten bekannt geben, obwohl das Internetkontrollnachrichtenprotokoll (ICMP) solche Ankündigungen erlaubt. Im Gegensatz dazu verfügt die Internetprotokoll-Version 6 (IPv6) über keine Prüfsumme, was zu einer schnelleren Verarbeitung während der Routenplanung führt.
Alle Fehlerquellen im Übertragungsnetz müssen entdeckt und mit Hilfe der Übertragung auf Endknoten ersetzt werden. Die oberen Schicht-Protokolle der Internetprotokoll-Familie sind dafür verantwortlich, Zuverlässigkeitsprobleme aufzulösen. Zum Beispiel kann ein Host Daten zurückhalten und eine Richtigstellung durchführen, bevor die Daten an den jeweiligen Empfänger geliefert werden.

## Linkkapazität und Leistungsfähigkeit

Selbst wenn der Übermittlungspfad verfügbar und zuverlässig ist, besteht wegen der dynamischen Natur und der Heterogenität des Internets und seiner Bestandteile keine Garantie, dass auch tatsächlich jeder dieser einzelnen Pfade fähig ist, eine Datenübermittlung wie gefordert durchzuführen. Zum Beispiel kann die für einen Übertragungsabschnitt maximal erlaubte Übermittlungsgröße für Datenpakete eine technische Einschränkung darstellen. Daher muss idealerweise jede Anwendung Sorge dafür tragen, korrekte Übertragungseigenschaften zu verwenden.
Ein Teil dieser Verantwortung kann auch durch Protokolle der oberen Schichten wahrgenommen werden. IPv6 verwendet die Fähigkeit, die maximale Übertragungseinheitsgröße einer lokalen Verbindung sowie den dafür komplett geplanten Pfad zum Bestimmungsort zu ermitteln und zu nutzen. Die IPv4-Internetschicht besitzt die Fähigkeit, große Datenpakete in kleinere Einheiten für die Übertragung wie im Folgenden beschrieben zu zerlegen.
Das Transmission Control Protocol (TCP) ist ein Beispiel eines Protokolls, das seine Segmentgröße so regulieren kann, dass die resultierenden Frames (s. Internetprotokollfamilie) nicht größer als der maximal erlaubte Durchfluss (Maximum Transmission Unit, MTU) sind. Für User Datagram Protocol (UDP) und Internet Control Message Protocol (ICMP) spielt jedoch die MTU-Größe keine Rolle. Daher wird ggf. auf IP-Ebene erzwungen, dass übergroße Datenpakete in kleinere Einheiten (entsprechend MTU) zerlegt werden. Dieser Vorgang wird als IP-Fragmentierung bezeichnet.
