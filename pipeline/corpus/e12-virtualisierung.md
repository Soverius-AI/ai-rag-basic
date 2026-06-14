---
url: https://de.wikipedia.org/wiki/Virtualisierung_(Informatik)
---

# Virtualisierung (Informatik)

## Überblick

Virtualisierung bezeichnet in der Informatik die Nachbildung eines Hard- oder Software-Objekts durch ein ähnliches Objekt vom selben Typ mit Hilfe einer Abstraktionsschicht. Dadurch lassen sich virtuelle (d. h. nicht-physische) Geräte oder Dienste wie emulierte Hardware, Betriebssysteme, Datenspeicher oder Netzwerkressourcen erzeugen. Dies erlaubt es etwa, Computer-Ressourcen (insbesondere im Server-Bereich) transparent zusammenzufassen oder aufzuteilen, oder ein Betriebssystem innerhalb eines anderen auszuführen. Dadurch können u. a. mehrere Betriebssysteme auf einem physischen Server oder „Host“ ausgeführt werden.
Zur sprachlichen Herkunft des Begriffs siehe Virtualität.

## Anwendungsbereiche und weitere Einzelheiten

Das Hauptziel ist, eine Abstraktionsschicht (siehe auch Hardwareabstraktionsschicht) zwischen Anwender (etwa einem Betriebssystem) und Ressource (etwa der Hardware des Computers, über die ein Betriebssystem üblicherweise exklusive Kontrolle hat) bereitzustellen. Dadurch können andere physische Gegebenheiten vorgetäuscht werden, als tatsächlich vorhanden sind: So kann einem Betriebssystem die Alleinnutzung eines Computers vorgegaukelt werden, wobei es tatsächlich innerhalb eines anderen Betriebssystems als gewöhnliche Anwendung läuft durch die Abstraktionsschicht emulierter Hardware. Dies ermöglicht auch die Zusammenfügung mehrerer unterschiedlicher Hardwareressourcen zu einer einheitlichen Umgebung – etwa die Bündelung mehrerer verschiedener Netzwerkadapter zu einem virtuellen, vereinigten Adapter.
Da Virtualisierung zu erheblicher Hardware-Einsparung führen kann, ist sie eine wichtige Green-IT-Maßnahme. Virtualisierung hat, bei richtiger Nutzung, einen deutlich positiven Umwelteffekt.

### Wirt und Gast

Zur Unterscheidung echter und virtueller Umgebungen werden diese – ähnlich wie im sogenannten Client-Server-Modell – Gast und Gastgeber oder Wirt (host) genannt. Dabei ist der Wirt (im Allgemeinen das Wirtssystem bzw. Wirtsystem oder im Besonderen bspw. das Wirtsbetriebssystem) immer die Ebene (oder Schicht), welche den echten Geräten (oder der sogenannten Hardware) am nächsten ist, und die auf dem Wirt ausgeführte Umgebung der Gast (oder das Gastsystem).

### Softwarevirtualisierung

Softwarevirtualisierung bezeichnet die Technik, mit der mehrere virtuelle Umgebungen auf einer physischen Hardware geschaffen werden. Dabei wird die Abstraktionsschicht zwischen der Hardware und den Betriebssystemen oder Anwendungen eingerichtet, sodass mehrere Betriebssysteme oder Programme unabhängig voneinander ausgeführt werden können.
Diese Art der Virtualisierung kann für mehrere Zwecke eingesetzt werden, z. B. um ein Betriebssystem oder nur eine Anwendung zu simulieren. Dadurch lassen sich unterschiedliche Softwareumgebungen parallel betreiben, ohne dass sie sich gegenseitig beeinflussen. Softwarevirtualisierung trägt zur Reduzierung von Energieverbrauch und Hardwarekosten bei.

#### Erzeugung virtueller Betriebsumgebungen

##### Betriebssystemvirtualisierung mittels OS-Container

Bei Virtualisierung auf Betriebssystemebene wird anderen Computerprogrammen eine komplette Laufzeitumgebung virtuell innerhalb eines geschlossenen Containers (unter BSD: Jail, unter Solaris: Zone) zur Verfügung gestellt. Es wird kein weiteres Betriebssystem gestartet; deshalb ist es unmöglich, verschiedene Betriebssysteme (oder auch nur verschiedene Versionen desselben Betriebssystems) gleichzeitig als Gastbetriebssysteme zu betreiben – der Hauptnachteil dieses Konzepts. In Containern können auch keine Treiber geladen werden. Der Vorteil dieses Konzepts besteht wegen des Verzichts auf einen Hypervisor darin, besonders effizient mit den Ressourcen umzugehen (insbesondere der Prozessor-Last und des Haupt- und Massenspeicherbedarfs), weshalb man auch von leichtgewichtiger Virtualisierung spricht.
Bei der Betriebssystemvirtualisierung läuft eben immer nur ein Host-Kernel, wobei UML eine gewisse Sonderrolle zukommt, da dort ein spezieller User-Mode-Kernel unter der Kontrolle des Host-Kernels läuft.

##### Systemvirtualisierung mittels Hypervisor

#### Anwendungsvirtualisierung

Durch das Windows-10-Update 1903 bietet Microsoft den Nutzern von Windows Professional eine Sandbox zum Testen von Programmen ohne Auswirkungen auf das Haupt-Betriebssystem. Dazu muss jedoch die Virtualisierung eingeschaltet werden, die standardmäßig deaktiviert ist.

### Hardwarevirtualisierung

Hierfür können entweder das ganze System (Partitioning mit LPAR, Domaining) oder nur einzelne seiner Komponenten, wie z. B. CPU, virtualisiert werden.

#### Systemvirtualisierung auf Hardwareebene

Die Trennung eines Computersystems in eigenständige Betriebssysteminstanzen bezeichnet man als Serverpartitionierung.

Partitionierung
Partitionierung bezeichnet die Aufteilung einer einmalig vorhandenen, gewöhnlich großen Ressource (wie z. B. eines Festplattenspeichers oder einer Netzwerkverbindung) in eine Anzahl kleinerer und handlicherer Exemplare des gleichen Typs. Dies wird häufig auch als Zoning bezeichnet, so z. B. bei Storage Networks.
Domaining
Domaining wird z. B. in Form von Virtual Hosts für einen FTP-Server angewandt.
Prozessorvirtualisierung
Bei der System- oder Betriebssystemvirtualisierung werden vom Virtual-Machine-Monitor (kurz VMM) Befehle der Gastsysteme (virtueller Maschinen) entgegengenommen, die auf der nativen Hardware ausgeführt werden sollen. Vor Einführung der Prozessor-Virtualisierung mussten bestimmte (eventuell sicherheitskritische) Befehle, die ein Gastsystem über den VMM an die Hardware schickte, modifiziert werden.
Durch die Prozessorvirtualisierung von AMD und Intel können nun Befehle ohne Änderung des VMM unmittelbar an den Prozessor geschickt werden, der sich selbständig um die Abgrenzung zwischen Gastsystem- und VMM-Prozessen kümmert. Durch den Wegfall der Änderungen des VMMs kann eine höhere Rechenleistung des Gesamtsystems erzielt werden.
Bei virtuellen Maschinen auf Basis emulierter Hardware jedoch muss der Virtual Machine Monitor nach wie vor die Befehle vor Ausführung auf der nativen Hardware modifizieren.

#### Speichervirtualisierung

Abstraktion der physischen Speicherform eines Datenspeichers wird als Speichervirtualisierung bezeichnet.

### Netzwerkvirtualisierung

Durch Virtual Local Area Networks werden Geräte in einem entfernten Netzwerk in Gruppen aufgeteilt, zwischen denen Verbindungen grundsätzlich unterbunden sind, aber gezielt ermöglicht werden können.
Ein Virtual Private Network bildet ein nach außen abgeschirmtes Netzwerk über fremde oder nicht vertrauenswürdige Netze.
Software für den gleichzeitigen Betrieb mehrerer virtueller Betriebssysteme auf einem Computer kann ein virtuelles Netzwerk bereitstellen, über das diese kommunizieren. Es können auch mehrere Netze simuliert werden, über die beispielsweise zur Erprobung wiederum ein Virtual Private Network aufgebaut wird.
Sehr große Unternehmen virtualisieren ihre VLANs auch Standort-übergreifend über Virtual Extensible LANs. Dabei werden VLAN-Frames über UDP verkapselt über das Internet übertragen (siehe RFC 7348).
