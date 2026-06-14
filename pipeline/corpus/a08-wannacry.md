---
url: https://de.wikipedia.org/wiki/WannaCry
---

# WannaCry

## Überblick

WannaCry, auch bekannt als Wcrypt, WCRY, WannaCrypt oder Wana Decrypt0r 2.0, ist ein Schadprogramm für Windows, das im Mai 2017 für einen schwerwiegenden Cyberangriff genutzt wurde. WannaCry befällt Windows-Betriebssysteme, die nicht mit einem bestimmten, seit März 2017 von Microsoft angebotenen Patch nachgebessert wurden.
Nach Befall eines Computers verschlüsselt das Schadprogramm bestimmte Benutzerdateien des Rechners und fordert als Ransomware den Nutzer auf, Bitcoins mit einem damaligen Gegenwert von etwa 300 US-Dollar zu zahlen, nach ungenutztem Ablauf einer Frist droht das Programm mit Datenverlust. Außerdem versucht der Netzwerkwurm weitere Windows-Rechner zu infizieren, und installiert die schon länger bekannte Backdoor DoublePulsar.

## Cyberangriff im Mai 2017

Am 12. Mai 2017 startete ein großer Cyberangriff mit WannaCry, bei dem über 230.000 Computer in 150 Ländern infiziert und jeweils Lösegeldzahlungen verlangt wurden. Der Angriff wurde von Europol hinsichtlich seines Ausmaßes als noch nie da gewesenes Ereignis beschrieben.

### Vorgeschichte

WannaCry basiert auf EternalBlue, einem Exploit der Sicherheitslücke MS17-010 im SMB-Protokoll (auch NetBIOS) von Microsoft. Der US-amerikanische Auslandsgeheimdienst NSA nutzte diese Lücke über mehr als fünf Jahre, ohne Microsoft über sie zu informieren, für eigene Zwecke mit einem Exploit, der den Namen EternalBlue erhielt und von Hackern der vermutlich NSA-nahen Equation Group entwickelt worden war. Erst nachdem die NSA erfahren hatte, dass das Wissen über EternalBlue gestohlen worden war, informierte sie Microsoft über die Sicherheitslücke. Das Unternehmen stellte daraufhin am 14. März 2017 einen Sicherheits-Patch für den SMBv1-Server zur Verfügung, damals allerdings nur für die noch von Microsoft unterstützten Betriebssysteme Windows Vista, Windows 7, Windows 8.1 und Windows 10 sowie für Windows Server 2008 und jünger. Einen Monat nach den Updates durch Microsoft wurde EternalBlue von der Hacker-Gruppierung The Shadow Brokers öffentlich gemacht. Wer hinter dieser Gruppe steckt, ist bis heute (Stand 2020) ungeklärt.

### Betroffene Unternehmen und Einrichtungen

Der Cyberangriff betraf mehrere global tätige Unternehmen. Darunter sind der spanische Telekommunikationskonzern Telefónica und einige andere große Unternehmen in Spanien, Teile des britischen National Health Service (NHS) mit mehreren Krankenhäusern, das US-Logistikunternehmen FedEx, der französische Automobilkonzern Renault, der japanische Automobilhersteller Nissan in Großbritannien, die Deutsche Bahn mit der Logistiktochter Schenker, die spanische Banco Bilbao Vizcaya Argentaria, das brasilianische Telekommunikationsunternehmen Vivo, das schwedische Unternehmen Sandvik, der chinesische Ölkonzern PetroChina. Über andere Ziele in mindestens 99 Ländern wurde ebenfalls berichtet. In Rumänien war das Außenministerium betroffen. In Russland waren mehr als 1000 Computer des Innenministeriums (MWD), das Katastrophenschutzministerium sowie das Telekommunikationsunternehmen MegaFon betroffen.
Bei der Deutschen Bahn wurden rund 450 Rechner infiziert und führten unter anderem zum Ausfall von Anzeigetafeln an vielen Bahnhöfen, von Videoüberwachungssystemen und einer regionalen Leitstelle in Hannover.
In China konnten Kunden an mehr als 20.000 Tankstellen nur noch in bar bezahlen.

### Hemmung der Ausbreitung

Bereits am 12. Mai entdeckten Sicherheitsforscher bei ihren Analysen durch Zufall eine Art „Notausschalter“ (kill switch), der eine weitere Infektion eindämmte. Die Forscher fanden im Code der Schadsoftware einen Hinweis auf eine zu dem Zeitpunkt nicht registrierte Domain. Einer der Forscher, Marcus Hutchins (MalwareTech), registrierte die Domain, weil er sich davon weitere Erkenntnisse über den Kryptotrojaner versprach. Auf einem unter dieser Adresse betriebenen Server verzeichnete er sofort tausende Verbindungsversuche. Als das Schadprogramm auf diese Domain zugreifen konnte, stoppte es seine Weiterverbreitung.
Spätere Varianten von WannaCry, die nicht mehr auf diesen Notausschalter reagierten, verbreiteten sich deutlich schwächer. Dies wurde darauf zurückgeführt, dass viele potentiell betroffene Computer zwischenzeitlich mit den bereitgestellten Sicherheitsupdates versorgt wurden.

### Staatliche Ermittlungen und Reaktionen

In Deutschland hielt das Bundesinnenministerium den Fall für besonders schwerwiegend. Das BKA übernahm die Ermittlungen. Regierungsnetze sollten nicht betroffen sein. Der Präsident des Bundesamts für Sicherheit in der Informationstechnik Arne Schönbohm äußerte sich in einer Pressemitteilung:

Microsofts Präsident und Rechtsvorstand Brad Smith verwies auf wiederholtes Bekanntwerden von Exploits aus Beständen der CIA und der NSA, das mit dem Abhandenkommen von Marschflugkörpern aus militärischen Einrichtungen zu vergleichen sei, und wirft „den Regierungen der Welt“ vor, nicht ausreichend vor Software-Schwachstellen (Exploits) zu warnen, welche ihre Geheimdienste entdecken:

 Die älteren Windows-Versionen XP, nicht auf Windows 8.1 aktualisiertes Windows 8 sowie Windows Server 2003 erhielten bis zum Zeitpunkt des Angriffs zunächst kein Update mehr, da diese außerhalb des Supportzeitraums lagen. Microsoft reagierte erst am 12. Mai 2017 mit der Veröffentlichung von Patches auch für diese bisher nicht mehr unterstützten Betriebssysteme. Diese Beschränkung der Sicherheitsupdates durch Microsoft wurde kritisiert, da laut einer Umfrage damals noch 52 % der Unternehmen mindestens einen Rechner mit Windows XP nutzten. Analysen zeigten später jedoch, dass das Ausnutzen der Sicherheitslücke auf Windows XP nicht zum Erfolg führte und Computer mit Windows XP somit kaum eine Rolle gespielt hätten. Die große Ausbreitung sei vielmehr damit zu erklären, dass vorhandene Sicherheitsupdates für noch unterstützte Betriebssysteme nicht eingespielt wurden. 98 % der Infektionen betrafen das Betriebssystem Windows 7, weniger als 0,1 % der Infektionen betrafen Windows XP.
Die Sicherheitsfirmen Kaspersky Lab und Symantec gaben am 15. Mai 2017 bekannt, dass sie Teile des Codes, mit dem frühe Versionen der Schadsoftware programmiert wurden, der Lazarus-Gruppe zuordnen, einer Gruppierung, von der angenommen wird, dass sie im staatlichen Auftrag von Nordkorea operiert. Beide Unternehmen betonen, dass es sich bei ihren Erkenntnissen bloß um Indizien handelt, die weit davon entfernt sind, beweiskräftig zu sein.
Ein Vertreter der US-Regierung schrieb die Verantwortung für „WannaCry“ in einem Artikel im Dezember 2017 Nordkorea zu. Der Angriff wurde dabei von einem der Sicherheitsberater des Präsidenten als „feige“, „teuer“ und „rücksichtslos“ beschrieben.
Im Juli 2020 verhängte die Europäische Union (EU) diesbezüglich Sanktionen in Form von Einreiseverboten und Kontensperrungen gegen zwei Unternehmen aus China und Nordkorea, Mitglieder des russischen Geheimdienstes GRU, sowie gegen zwei mutmaßliche Mitglieder der chinesischen Hackergruppe APT10.

## Übertragungswege

Die Infektion eines Computers erfolgt durch andere bereits befallene Rechner: Ohne weiteres Zutun des Nutzers sucht WannaCry aufgrund seiner Wurm-Eigenschaft im lokalen Netzwerk nach weiteren ungeschützten Rechnern, infiziert diese und sendet zahlreiche IP-Anfragen ins Internet, um auch darüber nicht geschützte Rechner zu infizieren. Anders als zunächst angenommen verbreitet sich WannaCry nicht über E-Mails.
Verantwortlich für die Infektion per Netzwerk ist eine Schwachstelle in der Implementierung der SMB-Schnittstelle, welche unter vielen Windows-Versionen zur Datei- und Druckerfreigabe benötigt wird. Die Sicherheitslücke ermöglicht es, dass der jeweilige Windows-Rechner von außerhalb dazu gebracht werden kann, einen beliebigen anderen Code auszuführen – in diesem Fall WannaCry mit seinen diversen Modulen. Betroffen war die Implementierung der Version 1 des SMB-Protokolls, welche aus Kompatibilitätsgründen auch bei neueren Windows-Versionen noch standardmäßig aktiv ist.

## Schadwirkung

Während der initialen Ausbreitung verschafft WannaCry dem gerade aktiven Windows-Konto Administratorrechte, blendet auch als versteckt markierte Dateien ein und verschlüsselt etwa 100 verschiedene Dateitypen von Dokument-, Bild-, Video- oder Audioformaten, welche auf der internen Festplatte, einem Netzlaufwerk oder einem anderen angeschlossenen Speichermedium mit Laufwerksbuchstaben gefunden werden, mit einem 2048-Bit-RSA-Schlüssel. Die verschlüsselten Dateien erhalten die Dateiendung .WNCRY. Um eine Wiederherstellung mit automatischen Backups, sogenannten Schattenkopien, zu verhindern, löscht WannaCry diese zusätzlich mit dem Windows-Systemwerkzeug vssadmin. Danach fordert die Ransomware einen bestimmten fallweise unterschiedlichen Betrag in der Kryptowährung Bitcoin, der binnen einer Frist von wenigen Tagen gezahlt werden soll, um die Dateien zu entschlüsseln. Nach ungenutztem Ablauf der Frist droht das Programm außerdem mit Datenlöschung. Außerdem können RDP-Verbindungen (für die Fernsteuerung des PCs) missbraucht werden.

## Zahlung von Lösegeld

Der Programmcode von WannaCry sieht vor, für jeden befallenen Computer eine individuelle Bitcoin-Adresse zu generieren. Damit können eingegangene Lösegelder dem Rechner zugeordnet und die Entschlüsselungscodes an die Opfer übermittelt werden. Aufgrund eines sogenannten „kritischen Wettlauffehlers“ versagt jedoch die Erzeugung individueller Bitcoin-Adressen, stattdessen findet ein Rückgriff auf eine von drei festen Bitcoin-Adressen statt. Es ist dann davon auszugehen, dass die Täter nicht erkennen können, ob für einen bestimmten gekaperten Computer das Lösegeld entrichtet wurde. Die Sicherheitsfirma Symantec geht deshalb davon aus, dass Lösegeldzahlungen nicht zum Erfolg führen. Nach anderen Angaben hingegen führten einige Zahlungen zur Entschlüsselung, nachdem sie manuell ausgehandelt wurden. Bei späteren Varianten der Malware, die aber geringe Ausbreitung erreichten, wurde der Programmfehler behoben.

## Schutzmaßnahmen

 Neben dem Einspielen der aktuellen Sicherheitsupdates wird der Einsatz aktueller Antivirenprogramme empfohlen.
Außerdem können mithilfe der Firewall die eingehenden Signale für TCP-Ports 445/139/137 und die UDP-Ports 137 und 138 (alle fünf werden durch SMB benutzt) gesperrt werden, sowie ein- und ausgehende Verbindungen des TCP-Port 3389 (RDP) geschlossen werden. Ein Eindringen der derzeit häufigsten Variante des Schädlings wird damit verhindert. Dies schützt die darauf aufbauenden Dienste dauerhaft vor Angriffen von außen.
Neu freigesetzte Varianten des Schadprogramms wie auch ganz andere Angreifer können allerdings andere Lücken und Ports zum Eindringen und zur Verbreitung nutzen. Daher ist laut Einschätzung der Fachpresse eine Reihe weiterer Maßnahmen sinnvoll: SMB und die Dateifreigabe können ganz deaktiviert werden. Dateien mit unpassender oder mehrfacher Dateiendung oder sonst wie verdächtige Dateianhänge in Mails – selbst von bekannten Absendern – sollten nicht geöffnet werden, weil deren Rechner ohne Wissen der Absender bereits kompromittiert sein könnte. Microsoft Office und ähnliche Programme sollten keine Makros ausführen dürfen und Programme, die nicht vertrauenswürdig erscheinen, sollten nicht gestartet werden. Um den Schaden im Falle einer Infektion so gering wie möglich zu halten, empfehlen die Autoren darüber hinaus, regelmäßige Datensicherungen durchzuführen und die Backup-Medien nach dem Backup vom System abzutrennen, damit sie nicht ihrerseits infiziert werden.

## Trivia

Kurz nach dem Erscheinen von WannaCry entdeckten Sicherheitsforscher eine neue Schadsoftware namens EternalRocks, welche sich als WannaCry auszugeben versuchte. Hinter der versuchten Täuschung steckte vermutlich die Absicht, vor Sicherheitsforschern unentdeckt zu bleiben.
Im Mai 2017 wurde bekannt, dass auch die Software Samba, welche Windows-Funktionen wie die Datei- und Druckdienste auf verschiedenen Betriebssystem wie Linux zur Verfügung stellt, von einer ähnlichen Schwachstelle wie Windows-Systeme betroffen ist. In Anlehnung wird diese als SambaCry bezeichnet. Die injizierten Schadprogramme führen auf befallenen Systemen wie beispielsweise NAS-Systemen ein Mining für die Kryptowährung Monero aus.
