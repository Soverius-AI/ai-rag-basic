---
url: https://de.wikipedia.org/wiki/Domain_Name_System
---

# Domain Name System (DNS)

## Überblick

Das Domain Name System, deutsch Domain-Namen-System, (DNS) ist ein hierarchisch unterteiltes Bezeichnungssystem in einem meist IP-basierten Netz zur Beantwortung von Anfragen zu Domain-Namen (Namensauflösung).
Das DNS funktioniert ähnlich wie eine Telefonvermittlung: Der Benutzer kennt die Domain (den für Menschen merkbaren Namen eines Rechners im Internet) – zum Beispiel example.org. Diese sendet er als Anfrage in das Internet. Die Domain wird dann dort vom DNS in die zugehörige IP-Adresse (die „Anschlussnummer“ im Internet) umgewandelt – zum Beispiel eine IPv4-Adresse der Form 192.0.2.42 und/oder eine IPv6-Adresse wie 2001:db8:85a3:8d3:1319:8a2e:370:7347 – und führt so zum richtigen Rechner.

## Überblick

Das DNS ist ein weltweit auf Tausenden von Servern verteilter hierarchischer Verzeichnisdienst, der den Namensraum des Internets verwaltet. Dieser Namensraum ist in sogenannte Zonen unterteilt, für die jeweils unabhängige Administratoren zuständig sind. Für lokale Anforderungen – etwa innerhalb eines Firmennetzes – ist es auch möglich, ein vom Internet unabhängiges DNS zu betreiben.
Hauptsächlich wird das DNS zur Umsetzung von Domainnamen in IP-Adressen (forward lookup) benutzt. Dies ist vergleichbar mit einem Telefonbuch, das die Namen der Teilnehmer in ihre Telefonnummer auflöst. Das DNS bietet somit eine Vereinfachung, weil Menschen sich Namen weitaus besser merken können als Zahlenketten. So kann man sich einen Domainnamen wie example.org in der Regel leichter merken als die dazugehörende IP-Adresse 192.0.32.10. Dieser Punkt gewinnt im Zuge der Einführung von IPv6 noch mehr an Bedeutung, denn dann werden einem Namen jeweils IPv4- und IPv6-Adressen zugeordnet. So löst sich beispielsweise der Name www.kame.net in die IPv4-Adresse 203.178.141.194 und die IPv6-Adresse 2001:200:dff:fff1:216:3eff:feb1:44d7 auf.
Ein weiterer Vorteil ist, dass IP-Adressen – etwa von Web-Servern – relativ risikolos geändert werden können. Da Internetteilnehmer nur den (unveränderten) DNS-Namen ansprechen, bleiben ihnen Änderungen der untergeordneten IP-Ebene weitestgehend verborgen. Da einem Namen auch mehrere IP-Adressen zugeordnet werden können, kann sogar eine einfache Lastverteilung per DNS (Load Balancing) realisiert werden.
Mit dem DNS ist auch eine umgekehrte Auflösung von IP-Adressen in Namen (reverse lookup) möglich. In Analogie zum Telefonbuch entspricht dies einer Suche nach dem Namen eines Teilnehmers zu einer bekannten Rufnummer, was innerhalb der Telekommunikationsbranche unter dem Namen Inverssuche bekannt ist.
Das DNS wurde 1983 von Paul Mockapetris entworfen und in RFC 882 und RFC 883 beschrieben. Beide wurden inzwischen von RFC 1034 und RFC 1035 abgelöst und durch zahlreiche weitere Standards ergänzt. Ursprüngliche Aufgabe war es, die lokalen hosts-Dateien abzulösen, die bis dahin für die Namensauflösung zuständig waren und der enorm zunehmenden Zahl von Neueinträgen nicht mehr gewachsen waren. Aufgrund der erwiesenermaßen hohen Zuverlässigkeit und Flexibilität wurden nach und nach weitere Datenbestände in das DNS integriert und so den Internetnutzern zur Verfügung gestellt (siehe unten: Erweiterung des DNS).
DNS zeichnet sich aus durch:

dezentrale Verwaltung,
hierarchische Strukturierung des Namensraums in Baumform,
Eindeutigkeit der Namen,
Erweiterbarkeit.

## Domain-Namensraum

Der Domain-Namensraum hat eine baumförmige Struktur. Die Blätter und Knoten des Baumes werden als Labels (englisch für Aufschrift) bezeichnet. Ein kompletter Domainname eines Objektes besteht aus der Verkettung aller Labels eines Pfades.
Labels sind Zeichenketten, die jeweils mindestens ein Byte und maximal 63 Bytes lang sind. Einzelne Labels werden durch Punkte voneinander getrennt. Ein Domainname wird mit einem Punkt abgeschlossen (der letzte Punkt wird meist weggelassen, gehört rein formal aber zu einem vollständigen Domainnamen dazu). Somit lautet ein korrekter, vollständiger Domainname (auch Fully Qualified Domain Name genannt) zum Beispiel www.example.com.  und darf inklusive aller Punkte maximal 255 Bytes lang sein.
Ein Domainname wird immer von rechts nach links delegiert und aufgelöst, das heißt je weiter rechts ein Label steht, umso höher steht es im Baum. Der Punkt am rechten Ende eines Domainnamens trennt das Label für die erste Hierarchieebene von der Wurzel (englisch root). Die erste Ebene (beispielsweise com.) wird als Top-Level-Domain (TLD) bezeichnet, die zweite (beispielsweise example.com.) als Second-Level-Domains usw.

### Zone

Die Daten des Domain Name Systems sind über eine Vielzahl von Nameservern weltweit verteilt, die durch Verweise untereinander lose gekoppelt sind. Die Verweise werden Delegierungen (englisch delegations) genannt und folgen der hierarchischen Struktur des Domain-Baums. Durch die Delegierungen wird der Domain-Namensraum in überschneidungsfreie Bereiche unterteilt, die Zonen genannt werden. Ein oder mehrere autoritative Nameserver sind für die Auslieferung der Daten einer Zone zuständig. So sind beispielsweise die Root-Nameserver für die Beantwortung von Anfragen an die Wurzel-Zone zuständig und die Nameserver von Verisign für die Zone der Top-Level-Domain .com.
Eine Zone besteht aus einer Liste von Resource Records. Der BIND-Nameserver sowie dazu kompatible Nameserver-Software speichert die Resource Records in einer Zonendatei.

### Resource Record

Ein Resource Record ist ein Datensatz im Domain Name System. Er besteht aus fünf Datenfeldern. Beispiel:

www.example.com. 86400 IN A 93.184.216.34

Name
Der Domainname, unter dem der Resource Record abgelegt ist (beispielsweise www.example.com.).
Time to Live
Maximale Zeit in Sekunden, für die dieser Record in einem DNS-Cache zwischengespeichert werden kann (beispielsweise 86400 Sekunden = 1 Tag).
Klasse
Fast ausschließlich „IN“ für Internet.
Typ
Datentyp der Nutzdaten (beispielsweise A Resource Record: eine IPv4-Adresse).
Daten
Die eigentlichen Nutzdaten (beispielsweise 93.184.216.34).
Der Abruf eines Resource Records erfolgt unter Angabe von Domainname, Klasse und Typ. Da als Klasse nahezu ausschließlich „IN“ verwendet wird, sind in der Praxis lediglich der Domainname und Record-Typ relevant. Es sind mehrere Dutzend Record-Typen spezifiziert, die unterschiedlichen Anwendungszwecken dienen. Im Laufe der Zeit wurden neue Typen definiert, mit denen Erweiterungen des DNS realisiert wurden. Zu den am häufigsten verwendeten gehören die folgenden Record-Typen:

## Komponenten

### Nameserver

Ein Nameserver ist ein Server, der Namensauflösung anbietet. Namensauflösung ist das Verfahren, das es ermöglicht, Namen von Rechnern bzw. Diensten in eine vom Computer bearbeitbare Adresse aufzulösen (z. B. www.wikipedia.org in 91.198.174.192).
Die meisten Nameserver sind Teil des Domain Systems, das auch im Internet benutzt wird.
Nameserver sind zum einen Programme, die auf Basis einer DNS-Datenbank Anfragen zum Domain-Namensraum beantworten. Im Sprachgebrauch werden allerdings auch die Rechner, auf denen diese Programme zum Einsatz kommen, als Nameserver bezeichnet. Man unterscheidet zwischen autoritativen und nicht-autoritativen Nameservern.
Ein autoritativer Nameserver ist verantwortlich für eine Zone. Seine Informationen über diese Zone werden deshalb als gesichert angesehen. Für jede Zone existiert mindestens ein autoritativer Server, der Primary Nameserver. Dieser wird im SOA Resource Record einer Zonendatei aufgeführt. Aus Redundanz- und Lastverteilungsgründen werden autoritative Nameserver fast immer als Server-Cluster realisiert, wobei die Zonendaten identisch auf einem oder mehreren Secondary Nameservern liegen. Die Synchronisation zwischen Primary und Secondary Nameservern erfolgt per Zonentransfer.
Ein nicht-autoritativer Nameserver bezieht seine Informationen über eine Zone von anderen Nameservern sozusagen aus zweiter oder dritter Hand. Seine Informationen werden als nicht gesichert angesehen. Da sich DNS-Daten normalerweise nur sehr selten ändern, speichern nicht-autoritative Nameserver die einmal von einem Resolver angefragten Informationen im lokalen RAM ab, damit diese bei einer erneuten Anfrage schneller vorliegen. Diese Technik wird als Caching bezeichnet. Jeder dieser Einträge besitzt ein eigenes Verfallsdatum (TTL time to live), nach dessen Ablauf der Eintrag aus dem Cache gelöscht wird. Die TTL wird dabei durch einen autoritativen Nameserver für diesen Eintrag festgelegt und wird nach der Änderungswahrscheinlichkeit des Eintrages bestimmt (sich häufig ändernde DNS-Daten erhalten eine niedrige TTL). Das kann unter Umständen bedeuten, dass der Nameserver in dieser Zeit falsche Informationen liefert, wenn sich die Daten zwischenzeitlich geändert haben.
Ein Spezialfall ist der Caching-Only-Nameserver. In diesem Fall ist der Nameserver für keine Zone verantwortlich und muss alle eintreffenden Anfragen über weitere Nameserver (Forwarder) auflösen. Dafür stehen verschiedene Strategien zur Verfügung:
Zusammenarbeit der einzelnen Nameserver
Damit ein nicht-autoritativer Nameserver Informationen über andere Teile des Namensraumes finden kann, bedient er sich folgender Strategien:

Delegierung
Teile des Namensraumes einer Domain werden oft an Subdomains mit dann eigens zuständigen Nameservern ausgelagert. Ein Nameserver einer Domäne kennt die zuständigen Nameserver für diese Subdomains aus seiner Zonendatei und delegiert Anfragen zu diesem untergeordneten Namensraum an einen dieser Nameserver.
Weiterleitung (forwarding)
Falls der angefragte Namensraum außerhalb der eigenen Domäne liegt, wird die Anfrage an einen fest konfigurierten Nameserver weitergeleitet.
Auflösung über die Root-Nameserver
Falls kein Weiterleitungsserver konfiguriert wurde oder dieser nicht antwortet, werden die Root-Nameserver befragt. Dazu werden in Form einer statischen Datei die Namen und IP-Adressen der Root-Server hinterlegt. Es gibt 13 Root-Server (Server A bis M). Die Root-Server beantworten ausschließlich iterative Anfragen. Sie wären sonst mit der Anzahl der Anfragen schlicht überlastet.
Anders konzipierte Namensauflösungen durch Server, wie der NetWare Name Service oder der Windows Internet Naming Service, sind meistens auf Local Area Networks beschränkt und werden zunehmend von der Internetprotokollfamilie verdrängt.

### Resolver

Ein Resolver ist eine Software-Komponente, die per DNS-Protokoll Informationen von einem Nameserver abruft. Die Anwendung, zum Beispiel ein Webbrowser, fordert per Programmierschnittstelle vom Resolver die Auflösung eines Domainnamens an. Der Resolver führt entweder eine rekursive oder iterative Namensauflösung durch und gibt die Antwort an die Anwendung zurück.
Im rekursiven Modus schickt der Resolver eine rekursive Anfrage an den ihm zugeordneten Nameserver. Hat dieser die gewünschte Information nicht im eigenen Datenbestand, so kontaktiert der Nameserver weitere Server – und zwar solange, bis er eine positive oder negative Antwort erhält. Der Nameserver, der die rekursive Anfrage bearbeitet, verwendet selbst einen eigenen Resolver zur Abfrage anderer Nameserver. Ein Nameserver, der rekursive Namensauflösung anbietet, wird als rekursiver Nameserver oder teilweise auch als rekursiver Resolver bezeichnet.
Im iterativen Modus bekommt der Resolver entweder den gewünschten Resource Record oder einen Verweis auf weitere Nameserver, die er selbst als Nächstes fragt. Der Resolver hangelt sich so von Nameserver zu Nameserver, bis er von dem autoritativen Nameserver eine verbindliche Antwort erhält. Während beim rekursiven Modus dem angefragten Nameserver die vollständige Auflösung überlassen wird, muss beim iterativen Modus der Resolver selbst durch wiederholte (iterative) Anfragen die Auflösung übernehmen.
Jedes Betriebssystem mit TCP/IP-Netzwerkfunktionalität enthält einen Resolver. Üblicherweise handelt es sich dabei um einen simplen Resolver, der ausschließlich rekursive Anfragen an einen konfigurierbaren Nameserver stellen kann. Ein solcher Resolver wird als Stub-Resolver (von englisch stub: Stumpf oder Stummel) bezeichnet.
Bekannte Kommandozeilen-Programme zur Namensauflösung sind nslookup, host und dig.

### Protokoll

DNS-Anfragen werden normalerweise per UDP Port 53 zum Namensserver gesendet. Der DNS-Standard fordert aber auch die Unterstützung von TCP für Fragen, deren Antworten zu groß für UDP-Übertragungen sind. Ursprünglich betrug die maximal zulässige Länge einer DNS-Nachricht über UDP 512 Bytes. Mit Extended DNS (EDNS) wurde diese Größenbeschränkung aufgehoben und kann variabel zwischen Client und Server gewählt werden. Beim DNS Flag Day 2020, einer Informationsinitiative von DNS-Software- und DNS-Service-Anbietern, wurde eine standardmäßige Maximallänge von 1232 Bytes empfohlen. Die maximal mögliche Nachrichtenlänge wird durch die Maximum Transmission Unit begrenzt. Der Einsatz von IP-Fragmentierung ist zwar möglich, wird aber nicht empfohlen.
Überlange Antworten werden abgeschnitten übertragen, sodass sie die maximal mögliche Nachrichtenlänge des Antwortenden nicht übersteigen, und mit dem Header-Flag Truncated (TC) als solches markiert. Der Anfragende kann daraufhin die Anfrage über TCP wiederholen. Bei TCP beträgt die maximale Nachrichtenlänge 65.535 Bytes. Die Verwendung von persistenten Verbindungen und Pipelining ist möglich. Zonentransfers werden stets über TCP durchgeführt, wobei die Nachrichtenlängenbeschränkung dafür nicht relevant ist.

## DNS-Namensauflösung

Angenommen, ein Client will eine Verbindung zu einem Webserver unter dem Domainnamen de.wikipedia.org. aufbauen. Dazu braucht er dessen IP-Adresse. In den folgenden Schritten wird ein exemplarischer Ablauf beschrieben. Bei Verwendung von IPv4 ruft der Client den A Resource Record und bei IPv6 den AAAA Resource Record ab. Bei Dual-Stack fragt der Client beide Adresstypen gleichzeitig ab und wählt die zu verwendende Zieladresse über einen Algorithmus aus, wobei standardmäßig IPv6 bevorzugt wird.

Das Betriebssystem des Clients verwendet zunächst lokale Mechanismen zur Namensauflösung, wie beispielsweise eine Hosts-Datei. Diese Mechanismen sind kein Bestandteil des Domain Name Systems und sind hier nur der Vollständigkeit halber erwähnt. Falls sie kein Ergebnis liefern, beginnt die eigentliche DNS-Namensauflösung.
Der (Stub-)Resolver des Betriebssystems fragt den Domainnamen de.wikipedia.org. beim zugeordneten Nameserver ab. Die IP-Adresse des Nameservers wurde entweder manuell eingetragen oder automatisch per DHCP, DHCPv6 oder NDP zugewiesen.
Hat der angefragte Nameserver den Namen im DNS-Cache zwischengespeichert, antwortet er damit, was die Namensauflösung abschließt (siehe letzter Punkt). Andernfalls erbringt er die Funktionalität eines rekursiven Resolvers.
Der rekursive Resolver fragt einen der 13 Root-Nameserver nach de.wikipedia.org. Der Root-Nameserver antwortet mit einem Verweis auf die Nameserver der Top-Level-Domain .org. Der Verweis besteht aus mehreren NS Resource Records sowie aus Glue Records (A und AAAA Resource Records), die die IP-Adressen der Nameserver von org. enthalten.
Der rekursive Resolver fragt einen der Nameserver von org. nach de.wikipedia.org. Der Nameserver antwortet mit einem Verweis auf die Nameserver von wikipedia.org., bestehend aus NS Resource Records und Glue Records.
Der rekursive Resolver fragt einen der Nameserver von wikipedia.org. nach de.wikipedia.org. Dieser ist autoritativ für die Zone wikipedia.org. und antwortet mit den angefragten A oder AAAA Resource Records.
Der rekursive Resolver schickt die Antwort an den Client zurück, welcher nun zum Beispiel eine HTTPS-Verbindung zu der IP-Adresse von de.wikipedia.org. aufbauen kann.

## Erweiterungen

Da sich das DNS als zuverlässig und flexibel erwiesen hat, wurden im Laufe der Jahre mehrere größere Erweiterungen eingeführt. Ein Ende dieses Trends ist nicht absehbar.

### Dynamisches DNS

Die manuelle Änderung von DNS-Einträgen ist mit Aufwand verbunden. Durch DNS-Caching kann es zudem mehrere Stunden oder sogar Tage dauern, bis sich eine Änderung im Netz verbreitet hat. Dynamisches DNS ermöglicht die automatisierte Aktualisierung von DNS-Einträgen. In Kombination mit der Verwendung eines niedrigen Time-to-Live-Werts können Resource Records mit geringem Aufwand und geringer Zeitverzögerung aktualisiert werden. Ein typischer Einsatzzweck ist die automatische Aktualisierung von A oder AAAA Resource Records bei der Verwendung von dynamischen IP-Adressen.
Dynamisches DNS kann ein Sicherheitsrisiko darstellen, falls die Schnittstelle zur Aktualisierung von DNS-Einträgen nicht gegen unautorisierte Zugriffe abgesichert ist. Bei einer REST-API kann die Absicherung durch den Einsatz von HTTPS und einer Authentifizierung des Clients erfolgen. Bei DNS-Update kann die Absicherung per TSIG erfolgen.

### Internationalisierung

Bisher waren die Labels auf alphanumerische Zeichen und das Zeichen ‚-‘ eingeschränkt. Möglich, aber nicht standardkonform, ist bei Subdomains zudem ‚_‘. Dieser begrenzte Zeichenvorrat hängt vor allem damit zusammen, dass das DNS (wie auch das Internet ursprünglich) in den USA entwickelt wurde.
Damit waren in vielen Ländern gebräuchliche Schriftzeichen (im deutschen Sprachraum zum Beispiel die Umlaute ä, ö und ü sowie ß) oder Zeichen aus komplett anderen Schriftsystemen (zum Beispiel Chinesisch) ursprünglich nicht in Domainnamen möglich.
Ein mittlerweile etablierter Ansatz zur Vergrößerung des Zeichenvorrats ist die 2003 in RFC 3490 eingeführte und 2010 mit RFC 5890 aktualisierte Internationalisierung von Domainnamen (IDNA). Um das neue System mit dem bisherigen kompatibel zu halten, werden die erweiterten Zeichensätze mit den bislang zulässigen Zeichen kodiert. Die erweiterten Zeichensätze werden dabei zunächst normalisiert, um unter anderem Großbuchstaben auf Kleinbuchstaben abzubilden, und anschließend per Punycode auf einen ASCII-kompatiblen String abgebildet. IDNA erfordert eine Anpassung der Netzwerkanwendungen (zum Beispiel Webbrowser), die Nameserver-Infrastruktur (Server, Resolver) braucht jedoch nicht verändert zu werden. Im deutschsprachigen Raum können seit März 2004 deutsche, liechtensteinische, österreichische und schweizerische Domains (.de, .li, .at und .ch) mit Umlauten registriert und verwendet werden. Auch bei anderen Top-Level-Domains, insbesondere im asiatischen Raum, ist die Verwendung von internationalisierten Domainnamen möglich.

### Extended DNS

1999 beschrieb Paul Vixie im RFC 2671 einige kleinere, abwärtskompatible Erweiterungen am Domain Name System, die als Extended DNS Version 0 bezeichnet werden. Durch Einsatz eines Pseudo-Records als Header-Erweiterung kann der Anfragende zusätzliche Optionen setzen. Insbesondere kann er übermitteln, dass er UDP-Antworten größer als 512 Bytes entgegennehmen kann. DNSSEC-fähige Server und Resolver müssen EDNS beherrschen.

### Verwaltung von Telefonnummern

Eine weitere aktuelle Erweiterung des DNS stellt ENUM (RFC 2916) dar. Diese Anwendung ermöglicht die Adressierung von Internet-Diensten über Telefonnummern, also das „Anwählen“ von per Internet erreichbaren Geräten mit dem aus dem Telefonnetz bekannten Nummerierungsschema.
Aus dem breiten Spektrum der Einsatzmöglichkeiten bietet sich insbesondere die Verwendung für Voice-over-IP-Diensten an.

### RFID-Unterstützung

Mit der RFID können auf speziellen RFID-Etiketten abgelegte IDs – sogenannte elektronische Produktcodes oder EPCs – berührungslos gelesen werden. Das DNS kann dazu verwendet werden, zu einer ID den Server zu ermitteln, der Daten über das zugehörige Objekt enthält. Der Object Name Service (ONS) wandelt dazu den EPC in einen DNS-Namen um und erfragt per Standard-DNS einen oder mehrere Naming Authority Pointer (NAPTR).

### Spam-Abwehr

Zur Filterung von Spam-Mails überprüfen viele Mailserver den DNS-Eintrag des sendenden Mailservers routinemäßig mit Hilfe des Reverse-DNS-Lookups. Dieser muss nicht nur auch vorwärts wieder korrekt auflösen und auf die IP-Adresse des sendenden Systems zeigen (Forward-confirmed reverse DNS), sondern muss auch dem im SMTP-Protokoll genannten HELO-Hostnamen des sendenden Systems entsprechen.
Mittels Sender Policy Framework wird versucht, den Versand von gefälschten Absendern durch Dritte möglichst zu unterbinden. Zu jeder Mail-Domain wird dabei über einen speziellen SPF Resource Record explizit aufgelistet, von welchen Servern und IP-Netzen mit E-Mails dieser Domain zu rechnen ist. SPF steht jedoch wegen zahlreicher technischer Schwierigkeiten, beispielsweise bei Weiterleitungen, in der Kritik.
Auch der Anti-Spam-Mechanismus DKIM greift auf Einträge im DNS zurück, indem sendende Mailserver in DNS-TXT-Records ihren Public-Key veröffentlichen, mit dem die Signatur ihrer ausgehenden E-Mails verifiziert werden kann.

### Sonstiges

Neben den IP-Adressen können DNS-Namen auch ISDN-Nummern, X.25-Adressen, ATM-Adressen, öffentliche Schlüssel, Text-Zeilen usw. zugeordnet werden. In der Praxis sind derartige Anwendungsfälle aber die Ausnahme.

## DNS im lokalen Netz

DNS ist nicht auf das Internet beschränkt. Es ist ohne weiteres möglich und mit der Definition verträglich, für die Auflösung lokaler Namen eigene Zonen im Nameserver einzurichten und dort die entsprechenden Adressen einzutragen. Der einmalige Aufwand zur Installation lohnt sich auch bei relativ kleinen Netzen, da dann alle Adressen im Netz zentral verwaltet werden können.
Bei größeren Firmen oder Organisationen ist häufig ein aus lokalem und Internet-DNS bestehendes Mischsystem (Split-DNS) anzutreffen. Die internen Nutzer greifen auf das lokale und die externen auf das Internet-DNS zu. In der Praxis können dadurch sehr komplizierte Konstellationen entstehen.
Der DNS-Server BIND kann auch mit DHCP zusammenarbeiten und damit für jeden Client im Netz eine Namensauflösung ermöglichen.
Unter Windows gibt es noch einen anderen Dienst zur Namensauflösung – WINS, der eine ähnliche Funktion zur Verfügung stellt, allerdings ein anderes Protokoll verwendet.

## DNS-Serververbund

Es ist möglich, mehrere DNS-Server zu verbinden. Die primären Server sind für eine oder mehrere Domains verantwortlich. Die sekundären Server aktualisieren nach einer Änderung selbst die Daten, der Primäre verteilt diese Daten nicht automatisiert. Die Abholung der Daten wird über einen Zonentransfer realisiert.
Beispielsweise kann eine Firma mit mehreren Standorten an einem Platz einen primären Server für ihr internes DNS betreiben, der die Server in den Außenstellen versorgt. Der Zonentransfer geht bei BIND über TCP (per Default Port 53) und erfordert empfohlenerweise Authentifizierung. Die sekundären Server aktualisieren sich, wenn sich die Seriennummer für eine Zonendatei ändert oder sie eine entsprechende Nachricht vom primären Server erhalten. Die Freigabe für den Transferport sollte man per Firewall an die IP-Adresse des primären Servers binden. Bei anderen Softwarepaketen werden die Daten unter Umständen auf anderen Wegen abgeglichen, beispielsweise durch LDAP-Replikation, rsync, oder noch andere Mechanismen.

## Sicherheit

Das DNS ist ein zentraler Bestandteil einer vernetzten IT-Infrastruktur. Eine Störung kann erhebliche Kosten nach sich ziehen und eine Verfälschung von DNS-Daten Ausgangspunkt von Angriffen sein.

### Angriffsformen

Hauptziel von DNS-Angriffen ist es, durch Manipulation DNS-Teilnehmer auf falsche Webseiten zu lenken, um anschließend Passwörter, PINs, Kreditkartennummern usw. zu erhalten. In seltenen Fällen wird versucht, den Internet-DNS durch Denial-of-Service-Attacken komplett auszuschalten und so das Internet lahmzulegen. Außerdem kann das DNS dazu verwendet werden, gezielte Angriffe auf Einzelpersonen oder Unternehmen zu intensivieren.

#### DDoS-Angriff auf Nameserver

Bei einem Distributed-Denial-of-Service-Angriff werden Nameserver durch einen hohen Datenstrom von DNS-Anfragen überlastet, so dass legitime Anfragen nicht mehr beantwortet werden können. Gegen DDoS-Angriffe auf Nameserver gibt es zurzeit keine Abwehrmöglichkeit. Als vorbeugende Maßnahme kann lediglich versucht werden, die Nameserver entsprechend zu dimensionieren bzw. ein verteiltes Netz mit möglichst vielen Servern zu installieren. Um eine große Anzahl DNS-Anfragen zu erzeugen, werden bei solchen Angriffen Botnetze eingesetzt.
Ein DDoS-Angriff kann unbeabsichtigt einen DNS-Server betreffen und zum Ausfall bringen, wenn der Domainname des Angriffsziels wiederholt aufgelöst wird ohne zwischengespeichert zu werden. Der Effekt auf DNS-Server wird verhindert, wenn das DDoS-Schadprogramm DNS-Caching verwendet.

#### DNS-Amplification-Angriff

Die DNS Amplification Attack ist ein Denial-of-Service-Angriff, bei der nicht der DNS-Server selbst das eigentliche Angriffsziel ist, sondern ein Dritter. Ausgenutzt wird, dass ein DNS-Server in manchen Fällen auf kurze Anfragen sehr lange Antworten zurücksendet. Durch eine gefälschte Absenderadresse werden diese an die IP-Adresse des Opfers gesendet. Ein Angreifer kann damit den von ihm ausgehenden Datenstrom substanziell verstärken und so den Internet-Zugang seines Angriffsziels stören.

### DNS-Spoofing

Beim DNS-Spoofing handelt es sich um eine Angriffsklasse von Maskierungsangriffen, die das Ziel haben eine falsche Identität vorzugeben. Dafür wird die DNS-Antwort an einen Client verändert um ihn auf einen anderen, meist vom Angreifer kontrollierten Dienst fehlzuleiten.

#### DNS-Cache-Poisoning

DNS-Cache-Poisoning bezeichnet ein Angriffsszenario, welches in die Angriffsklasse des DNS-Spoofing fällt. Dabei werden einem anfragenden Client zusätzlich zu der korrekten Antwort, manipulierte Daten übermittelt, die dieser in seinen Cache übernimmt und später, möglicherweise ungeprüft, verwendet.

#### Offener DNS-Server

Wer einen autoritativen DNS-Server für seine eigenen Domains betreibt, muss natürlich für Anfragen von beliebigen IP-Adressen offen sein. Um zu verhindern, dass Internetteilnehmer diesen Server als allgemeinen Nameserver verwenden (z. B. für Angriffe auf Root-Server), erlaubt BIND es, die Antworten auf die eigenen Domains einzuschränken. Beispielsweise bewirkt die Option allow-recursion {127.0.0.1; 172.16.1.4;};, dass rekursive Anfragen, d. h. Anfragen auf andere Domains, ausschließlich für den lokalen Host (localhost) sowie 172.16.1.4 beantwortet werden. Alle anderen IP-Adressen bekommen nur auf Anfragen auf eigene Domains eine Antwort.
Ein offener DNS-Server kann auch eine Falle sein, wenn er gefälschte IP-Adressen zurückgibt, siehe Pharming.

### Sicherheitserweiterungen

Mehr als zehn Jahre nach der ursprünglichen Spezifikation wurde DNS um Security-Funktionen ergänzt. Folgende Verfahren sind verfügbar:

#### DNSSEC

Bei DNSSEC (Domain Name System Security Extensions) wird von einem asymmetrischen Kryptosystem Gebrauch gemacht. Neben der Server-Server-Kommunikation kann auch die Client-Server-Kommunikation gesichert werden. Dies soll die Manipulation der Antworten erschweren.

#### DNS over TLS (DoT)

Bei DNS over TLS sollen sowohl DDoS-Angriffe, die Manipulation der Antworten als auch das Ausspähen der gesendeten Daten verhindert werden. Dazu werden die DNS-Abfragen per Transport Layer Security (TLS) abgesichert.

#### DNS over QUIC (DoQ)

DNS over QUIC soll die Vorteile von DoT und DoH kombinieren. DoQ soll gute Privatsphäre und Sicherheit bieten, eine geringe Latenz aufweisen und nicht blockierbar sein. RFC 9250 der Internet Engineering Task Force beschreibt DoQ.

#### DNS over HTTPS (DoH)

DNS over HTTPS ändert das DNS-System grundlegend. Anfragen finden hier auf Anwendungsebene statt. Anwendungen wie beispielsweise der Webbrowser fragen direkt beim DNS-Server an, anstatt die Anfrage an das Betriebssystem weiterzuleiten. Dadurch sehen DNS-Anfragen aus wie normaler Internetverkehr und können somit nicht gezielt abgefangen bzw. blockiert werden.
Cloudflare und Google bieten öffentliche DoH-Webserver an. Mozilla Firefox unterstützt DoH ab Version 60 als experimentelle Funktion. Mozilla stellt in Zusammenarbeit mit Cloudflare einen DoH-Server bereit, der strenge Privatsphäre-Anforderungen erfüllen muss.

#### DNS over Tor

DNS kann über virtuelle private Netzwerke (VPNs) und Tunneling-Protokolle betrieben werden. Eine Anwendung, die seit 2019 so weit verbreitet ist, dass sie ein eigenes, häufig verwendetes Akronym rechtfertigt, ist DNS over Tor.

#### TSIG

Bei TSIG (Transaction Signatures) handelt es sich um ein einfaches, auf symmetrischen Schlüsseln beruhendes Verfahren, mit dem der Datenverkehr zwischen DNS-Servern und Updates von Clients gesichert werden kann.

## Domain-Registrierung

Um DNS-Namen im Internet bekannt machen zu können, muss der Besitzer die Domain, die diesen Namen enthält, registrieren. Durch eine Registrierung wird sichergestellt, dass bestimmte formale Regeln eingehalten werden und dass Domain-Namen weltweit eindeutig sind. Domain-Registrierungen werden von Organisationen (Registries, z. B. Verisign oder Afilias) vorgenommen, die dazu von der IANA bzw. ICANN autorisiert wurden. Registrierungen sind (von wenigen Ausnahmen abgesehen) gebührenpflichtig. Für Domains unter .de ist die DENIC zuständig. In den allermeisten Fällen können Domains bei den Registries nur über Zwischenhändler, sogenannte Registrare wie Godaddy oder 1&1 Internet SE registriert werden, die mit den Registries entsprechende Verträge abgeschlossen haben.

## Bonjour bzw. Zeroconf

Apple hat bei der Entwicklung von macOS mehrere Erweiterungen am DNS vorgenommen, welche die umfassende Selbstkonfiguration von Diensten in LANs ermöglichen soll. Zum einen wurde Multicast DNS („mDNS“) eingeführt, das die Namensauflösungen in einem LAN ohne einen dedizierten Namensserver erlaubt. Zusätzlich wurde noch DNS-SD (für „DNS Service Discovery“) eingeführt, die die Suche („Browsing“) nach Netzwerkdiensten in das DNS beziehungsweise mDNS ermöglicht. mDNS und DNS-SD sind bisher keine offiziellen RFCs des IETF, sind aber trotzdem bereits in verschiedenen (auch freien) Implementierungen verfügbar. Zusammen mit einer Reihe von anderen Techniken fasst Apple DNS-SD und mDNS unter dem Namen „Zeroconf“ zusammen, als Bestandteil von OS X auch als „Rendezvous“ bzw. „Bonjour“. Die meisten Linux-Distributionen unterstützen diese Erweiterung z. B. mit der avahi-Implementierung von Zeroconf.

## Zensur und alternative DNS

Standardmäßig wird der DNS-Servern durch den Mobilfunkanbieter ausgewählt, oder durch die Anwendung die gerade genutzt wird. Mozilla Firefox verwendet bspw. Cloudflare um DNS-Anfragen aufzulösen. Innerhalb eines Netzwerkes, oder lokal auf einem Gerät, kann jedoch nach eigener Präferenz ein DNS-Server eingestellt werden.

### Unzensierte DNS-Server

Seit der Debatte um das Zugangserschwerungsgesetz (2008) und Zensur im Internet im Allgemeinen gibt es eine Reihe von alternativen DNS-Anbietern, die Domains nach eigener Aussage nicht zensieren.
Beispiele sind Organisationen wie Digitalcourage, Freifunk München oder Digitale Gesellschaft. Auch von Privatpersonen werden alternative DNS-Server bereitgestellt.

### Dienste mit Filterlisten

Es kann unterschiedliche Gründe geben einen DNS-Server zu nutzen, der mit Schwarzen Listen arbeitet, also bestimmte Anfragen an Webseiten nicht auflöst. So können gezielt Werbetreibende blockiert werden (siehe auch: Werbeblocker), auch gibt es Anbieter, die versprechen, die Cybersicherheit oder die Privatsphäre zu verbessern. Das Blockieren von nicht jugendfreien Inhalten ist ein weiterer Einsatzzweck. Technisch betrachtet handelt es sich bei der Verwendung von Filterlisten um eine Zensur von Inhalten. Die Grenzen zur Meinungszensur sind jedoch unscharf und werden subjektiv empfunden. Einige Anbieter führen Blocklisten über Fake-News-Websiten; die Kriterien, nach denen die Einordnung erfolgt, sind hierbei teilweise nicht offengelegt. Große Anbieter, die blockierende DNS-Server betreiben, sind unter anderen: Quad9, Mullvad und Adguard. Die EU kündigte 2022 an, einen eigenen DNS-Server etablieren zu wollen (DNS4EU), dieser soll ebenfalls mit Filterlisten arbeiten und Netzsperren umsetzen.

### Namecoin

Namecoin ist der erste Fork von Bitcoin aus dem Jahr 2011 und findet Anwendung als Kryptowährung sowie als Key-Value Store für Domainnamen und Identitäten. Als alternatives verteiltes Domain Name System (DNS) außerhalb des ICANN-Namensraumes werden Transaktionen zum Registrieren, Aktualisieren und Übertragen von Domains auf der Blockchain aufgezeichnet. Zur Auflösung der .bit-Adressen werden ein Browserplugin oder ein lokaler Namecoin DNS-Server benötigt. Ebenso wie Bitcoin ist Namecoin ein dezentrales Peer-to-Peer-System, das keiner Zensur unterliegt. Die Software ist Open Source und wird auf GitHub gehostet.
Einem Bericht von Trend Micro zufolge wurden .bit-Domains seit 2013 vermehrt auch von Cyberkriminellen genutzt. Vornehmlich aus diesem Grund hat das OpenNIC-Projekt im Sommer 2019 seine DNS-Auflösung von .bit-Domains eingestellt.

## Nameserversoftware

Auswahl bekannter Software für Namensauflösung.

BIND (Berkeley Internet Name Domain) ist die meistgebrauchte Nameserversoftware und gilt als Referenzimplementierung der meisten RFCs zu DNS. Die erste Version von BIND war die erste öffentlich verfügbare Nameserver-Implementierung.
CoreDNS ist ein in Go geschriebener DNS-Server der Cloud Native Computing Foundation.
Bei djbdns hat der Autor Daniel J. Bernstein eine Prämie für das Finden von Sicherheitsproblemen ausgeschrieben. Djbdns wird von Bernstein nicht mehr weiterentwickelt, weil er es als fertig ansieht.
Dnsmasq ist ein Nameserver und DHCP-Server mit eingeschränkter Funktionalität. Es werden die Namen aus dem lokalen Netz entsprechend /etc/hosts aufgelöst. Dnsmasq verfügt über keinen vollständigen Resolver: unbekannte Namensanfragen werden weitergeleitet und im Cache gespeichert.
Knot DNS ist ein autoritativer Nameserver, der von CZ.NIC entwickelt wird, dem Betreiber von .cz.
Microsoft Windows DNS ist eine der wenigen kommerziellen Nameserver-Implementierungen als Teil der Produktreihe Microsoft Windows Server. Der Nameserver unterstützt dynamische Updates, Zonentransfers und Notification. Zonendaten können in den aktuellen Versionen im Active Directory oder in Zonendateien gespeichert und repliziert werden.
Name Server Daemon ist ein autoritativer Nameserver, der zum Einsatz als Top-Level-Domain- und Root-Nameserver entwickelt wurde. NSD kompiliert Antworten statisch vor, um die Server-Performance zu optimieren. Dynamische Zoneninhalte oder Round Robin werden nicht unterstützt.
PowerDNS ist ein Nameserver, der Zonen aus SQL-Datenbanken, LDAP-Verzeichnissen und anderen Backends lesen kann. PowerDNS begann als kommerzielle Implementierung und ist seit 2002 unter der GPL lizenziert.
Unbound ist ein DNS-Resolver, der DNSSEC-Validierung und Caching unterstützt. Unbound kann als Softwarebibliothek in Anwendungen eingebunden werden.
