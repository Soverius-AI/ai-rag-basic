---
url: https://de.wikipedia.org/wiki/Rootkit
---

# Rootkit

## Überblick

Ein Rootkit (englisch etwa: „Administratorenbausatz“; root ist bei unixähnlichen Betriebssystemen der Benutzer mit Administratorrechten) ist eine Sammlung von Softwarewerkzeugen, die nach dem Einbruch in ein Softwaresystem auf dem kompromittierten System installiert wird, um zukünftige Anmeldevorgänge (Logins) des Eindringlings zu verbergen und Prozesse und Dateien zu verstecken.
Der Begriff ist heute nicht mehr allein auf unixbasierte Betriebssysteme beschränkt, da es längst auch Rootkits für andere Systeme gibt. Antivirenprogramme versuchen, die Ursache der Kompromittierung zu entdecken. Zweck eines Rootkits ist es, Schadprogramme („malware“) vor den Antivirenprogrammen und dem Benutzer durch Tarnung zu verbergen.
Eine weitere Sammlung von Softwarewerkzeugen oder Bootloadern ist das „Bootkit“.

## Geschichte

Die ersten Sammlungen von Unix-Tools zu den oben genannten Zwecken bestanden aus modifizierten Versionen der Programme ps, passwd usw., die dann jede Spur des Angreifers, die sie normalerweise hinterlassen würden, verbergen und es dem Angreifer so ermöglichten, mit den Rechten des Systemadministrators root zu agieren, ohne dass der rechtmäßige Administrator dies bemerken konnte.

## Backdoor-Funktionalitäten

Ein Rootkit versteckt normalerweise Anmeldevorgänge, Prozesse und Logdateien und enthält oft Software, um Daten von Terminals, Netzwerkverbindungen und Tastaturanschläge und Mausklicks sowie Passwörter vom kompromittierten System abzugreifen. Hinzu können Backdoors (Hintertüren) kommen, die es dem Angreifer zukünftig vereinfachen, auf das kompromittierte System zuzugreifen, indem beispielsweise eine Shell gestartet wird, wenn an einen bestimmten Netzwerkport eine Verbindungsanfrage gestellt wurde. Die Grenze zwischen Rootkits und Trojanischen Pferden ist fließend, wobei ein Trojaner eine andere Vorgehensweise beim Infizieren eines Computersystems besitzt.

## Technische Umsetzung

Das Merkmal eines Rootkits ist es, dass es sich ohne Wissen des Administrators installiert und dem Angreifer so ermöglicht, die
Computeranlage unerkannt für seine Zwecke zu nutzen. Dies sind u. a.:

Das Belauschen oder allgemein der Diebstahl von Daten (z. B. Zugangskennungen, technische Unterlagen, Betriebsgeheimnisse).
Das Installieren von z. B. Viren, um weitere Anlagen anzugreifen.
Die Möglichkeit zum Distributed-Denial-of-Service (engl. für verteilte Diensteblockade).
Rootkits können neue Hintertüren („backdoors“) öffnen. Zudem versuchen Rootkits, den Weg ihres Einschleusens zu verschleiern, damit sie nicht von anderen entfernt werden.

### Application-Rootkits

Application-Rootkits bestehen lediglich aus modifizierten Systemprogrammen. Wegen der trivialen Möglichkeiten zur Erkennung dieser Art von Rootkits finden sie heute kaum noch Verwendung.
Heutzutage finden sich fast ausschließlich Rootkits der folgenden drei Typen:

### Kernel-Rootkits

Kernel-Rootkits ersetzen Teile des Kernels durch eigenen Code, um sich selbst zu tarnen („stealth“) und dem Angreifer zusätzliche Funktionen zur Verfügung zu stellen („remote access“), die nur im Kontext des Kernels („ring-0“) ausgeführt werden können. Dies geschieht am häufigsten durch Nachladen von Kernel-Modulen. Man nennt diese Klasse von Rootkits daher auch LKM-Rootkits (LKM steht für engl. „loadable kernel module“). Einige Kernel-Rootkits kommen auch ohne LKM aus, da sie den Kernelspeicher direkt manipulieren. Unter Windows werden Kernel-Rootkits häufig durch die Einbindung neuer .sys-Treiber realisiert.
Ein solcher Treiber kann Funktionsaufrufe von Programmen abfangen, die beispielsweise Dateien auflisten oder laufende Prozesse anzeigen. Auf diese Weise versteckt das Rootkit seine eigene Anwesenheit auf einem Computer.

### Userland-Rootkits

„Userland-Rootkits“ sind vor allem unter Windows populär, da sie keinen Zugriff auf der Kernel-Ebene benötigen. Sie stellen jeweils eine DLL bereit, die sich anhand verschiedener API-Methoden (SetWindowsHookEx, CreateRemoteThread) direkt in alle Prozesse einklinkt. Ist diese DLL einmal im System geladen, modifiziert sie ausgewählte API-Funktionen und leitet deren Ausführung auf sich selbst um („redirect“). Dadurch gelangt das Rootkit gezielt an Informationen, welche dann gefiltert oder manipuliert werden können.

### Speicher-Rootkits

Speicher-Rootkits existieren nur im Arbeitsspeicher des laufenden Systems. Nach dem Neustart („reboot“) des Systems sind diese Rootkits nicht mehr vorhanden.

### Virtualisierungs-Rootkits

Fast alle gängigen Server-, PC- und Laptop-Prozessoren besitzen heute Hardware-Funktionen, um Programmen einen virtuellen Prozessor vorzugaukeln. Dies wird häufig genutzt, um auf einer physikalischen Computeranlage mehrere auch unter Umständen verschiedene Betriebssysteme parallel betreiben zu können.
Virtual Machine Based Rootkit (VMBR)s sind Rootkits, die ein vorhandenes Betriebssystem in eine virtuelle Umgebung verschieben. Dadurch ist das Betriebssystem in der virtuellen Umgebung gefangen. Die virtuelle Umgebung ist somit eine Software-Ebene unter dem Betriebssystem, was ein Erkennen des VMBR stark erschwert.
Machbarkeitsnachweise für diese Technik lieferten Joanna Rutkowska mit dem Programm Bluepill sowie Microsoft Research mit dem Programm SubVirt. Bluepill kann, im Gegensatz zu SubVirt, ohne Neustart des zu infizierenden Computers installiert werden. Der Name Bluepill (englisch für „blaue Pille“) ist eine Analogie zum Film Matrix.

## Prominente Rootkits der letzten Jahre

Die Firma Sony BMG kam in die Schlagzeilen und musste diverse Musik-CDs zurückrufen, nachdem bekannt geworden war, dass sich der von Sony eingesetzte Kopierschutz XCP („Extended Copy Protection“) für Musik-CDs mit Methoden eines Rootkits in Windows-Systemen einnistete. Obwohl selbst kein Virus bzw. Trojanisches Pferd, eröffnet allein dessen Existenz weiteren Schadprogrammen Tür und Tor.
Zwischenzeitlich gab es auch einen USB-Stick mit Fingerabdruckscanner von Sony, dessen Software zur vollen Funktionsfähigkeit ein Rootkit im Windows-Verzeichnis versteckte. Allerdings wurde einer Pressemitteilung von Sony zufolge die Produktion und der Vertrieb dieses USB-Sticks Ende August 2007 wieder eingestellt.
Die Firma Kinowelt verkaufte und verlieh 2006 in deutschsprachigen Ländern DVDs mit einem von Settec entwickelten Kopierschutz, der unter Windows ebenfalls ein Userland-Rootkit zum Verstecken von Prozessen installiert.
Forscher der University of Michigan haben eine Variante entwickelt, virtuelle Maschinen als Rootkits („Virtual Machine Based Rootkits“) zu verwenden. Die Arbeit an diesem Projekt mit Namen SubVirt wurde unter anderem von Microsoft und Intel unterstützt. Das Rootkit, das mittlerweile von Wissenschaftlern und Microsoft-Mitarbeitern entwickelt wurde, sollte auf dem „IEEE Symposium on Security and Privacy“ im Mai 2006 präsentiert werden.
Auf der Konferenz Black Hat im Januar 2006 wurde ein möglicher Rootkit-Typ vorgestellt, der selbst eine Neuinstallation des Betriebssystems oder ein Neuformatieren der Festplatte überlebt, indem er das ACPI („Advanced Configuration and Power Interface“) manipuliert oder sich im PC-BIOS festsetzt.
Die Firma EA setzte in ihrem im September 2008 veröffentlichten Spieletitel Spore als Kopierschutz die Software SecuROM ein, die von Sony entwickelt wurde. Die Aktivierung der Lizenz wurde damit auf drei Geräte beschränkt. Dass zudem eine Online-Authentifizierung erforderlich war, der Kopierschutz zu Inkompatibilitäten mit dem Betriebssystem und anderer Software führte und nicht einfach wieder mit dem Spiel deinstallierbar war, verärgerte zahlreiche Benutzer des Spiels, so dass sie SecuROM als Rootkit bezeichneten. Es handelte sich aber nicht um ein Rootkit im Sinne dieses Artikels, da es keine Malware war.
Die im PC-BIOS von vielen Laptops und Desktop-PC fix integrierte Fernwartungssoftware Computrace, welche der Diebstahlsicherung von Endgeräten dienen soll und ein Rootkit darstellt.
Drovorub ist ein hochentwickeltes Linux-Rootkit, welches erstmals 2019 in Erscheinung trat und von der russischen Gruppe APT28 (auch bekannt als Fancy Bear) entwickelt wurde. Es wurde für Cyber-Spionage und persistente Angriffe verwendet. Drovorub kombiniert mehrere Komponenten, darunter ein Kernel-Modul, um Angriffe zu verschleiern, und Backdoor-Mechanismen, um persistente Kontrolle über kompromittierte Systeme zu ermöglichen.
FiveSys ist ein Kernel-Level-Rootkit, das im Jahr 2021 entdeckt wurde. Dieses ist durch die Verwendung einer gültigen digitalen Signatur von Microsoft besonders gefährlich. Es wurde von Cyberkriminellen genutzt, um Netzwerkverkehr zu manipulieren und die Kontrolle über kompromittierte Systeme zu erlangen.

## Entfernung von Rootkits

Da eine hundertprozentige Erkennung von Rootkits unmöglich ist, ist die beste Methode zur Entfernung die vollständige Neuinstallation des Betriebssystems. Da sich bestimmte Rootkits im BIOS verstecken, bietet selbst diese Methode keine hundertprozentige Sicherheit über die Entfernung des Rootkits. Um eine Infizierung des BIOS im Voraus zu verhindern, sollte das BIOS hardwareseitig mit einem Schreibschutz versehen werden, z. B. durch einen Jumper auf der Hauptplatine.
Jedoch gibt es für viele Rootkits von offiziellen Herstellern (z. B. das Sony Rootkit) Programme zur Erkennung und Entfernung.
