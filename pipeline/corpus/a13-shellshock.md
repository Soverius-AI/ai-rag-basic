---
url: https://de.wikipedia.org/wiki/Shellshock_(Sicherheitsl%C3%BCcke)
---

# Shellshock (Sicherheitslücke)

## Überblick

Shellshock ist eine Sicherheitslücke – oder eine Familie von Sicherheitslücken, CVE-Nummern CVE-2014-6271, …-7169, -7186, -7187, -6277,
-6278
– in der Unix-Shell Bash. In der Bash kann der Wert einer Zeichenkettenvariablen eine Funktionsdefinition enthalten. Durch die Sicherheitslücke kann nach der Auswertung einer solchen Variablen ungeprüft Programmcode ausgeführt werden.
Die erste Entdeckung (CVE-2014-6271) wurde am 24. September 2014 öffentlich gemacht.
In der vom NIST verwendeten Bewertung des Schadenpotentials erhält sie eine Bewertung von 10, dem Maximum.
Am selben Tag wurde ein erster Patch veröffentlicht, jedoch fanden Sicherheitsexperten von Google Inc. und Red Hat (Tavis Ormandy, Michał Zalewski, Florian Weimer) bald ähnliche Lücken, die eigene CVE-Nummern erhielten und den ersten Patch „überlebten“.
Inzwischen (Stand 3. November 2014) gibt es offenbar keine Beanstandung der vorliegenden Patches mehr,
die letzte Fehlervariante wurde von NIST am 30. September 2014 veröffentlicht.

## Problematik

Von der Sicherheitslücke sind Bash-Versionen zwischen 1.03 und 4.3 betroffen, die häufig unter GNU/Linux, macOS oder anderen Unix-basierten Betriebssystemen verwendet werden. Shellshock soll auch deswegen besonders problematisch sein, weil zahlreiche Webserver Bash verwenden, um CGI-Skripte auszuführen.
Die Sicherheitslücke kann ausgenutzt werden, wenn Variablen gesetzt werden können, die dann von einer Bash mit höheren Rechten ausgewertet werden. Beispiele sind:

Webserver: CGI-Skripte, die als Webserver Bash aufrufen, könnten beliebigen Code ausführen.
Secure Shell: Nutzer, deren Rechte auf die Ausführung bestimmter Kommandos beschränkt sind, können diese Beschränkung umgehen.
DHCP: Bei Verbindung zu einem bösartigen DHCP-Server kann ein Angreifer einen beliebigen Code auf dem DHCP-Client ausführen.
Der Druckdienst CUPS könnte von rechtmäßigen Benutzern zur Ausführung von beliebigem Code genutzt werden.
Mit SIP (Session Initiation Protocol) arbeitende Proxys können für Shellshock anfällig sein.
Die IBM Hardware Management Console, eine rudimentäre Linuxvariante für Administratoren von IBM-Systemen, erlaubt das „Ausbrechen“ aus der „restricted shell“, um die Bash aufzurufen, danach hat man volle Kontrolle über das System.
Weltweit sollen hunderte Millionen von Computern betroffen sein. Die Sicherheitslücke wird von Forschern für gravierender als der Heartbleed-Bug gehalten. Shellshock wurde von Stéphane Chazelas entdeckt und existiert seit 1989 in Bash.
Am 6. Oktober wurde verbreitet, Server von Yahoo, WinZip und Lycos seien von Shellshock betroffen gewesen. Jonathan Hall verschaffte sich Zugriff auf die Server von Winzip, auf denen er Schadsoftware fand, die eine Verbindung zu Servern von Yahoo und Lycos aufbaute. Tags darauf wurde dies relativiert, insbesondere hinsichtlich der Aussage, für die behauptete Angreifbarkeit sei Shellshock ursächlich gewesen.

## Prüfung auf Verwundbarkeit

### Bash-Version

Die Verwundbarkeit der Shell (durch die erste Fehlervariante CVE-2014-6271) lässt sich durch die folgende Eingabe auf der Kommandozeile testen. Bei einer verwundbaren Shell führt die Sequenz

zur Ausgabe von shellshockverwundbar, während ein geschütztes System nichts oder Fehlermeldungen ausgibt.
Ob das System auch einen Patch für (die zweite Fehlervariante) CVE-2014-7169 hat, testet die Folge

Bei einer verwundbaren Shell sieht man einen Zeitstempel als Ausgabe:

Ist die Shell dagegen geschützt, erhält man diese Ausgabe:

### Server

Um zu prüfen, ob ein Server z. B. über CGI-Skripte bereits angegriffen wurde, sucht man Mustereinträge – etwa in Form der Zeichenkette „};“ – wie in folgendem Beispiel („0.0.0.0“ steht für eine IP-Adresse):

## Technischer Hintergrund

Bash ermöglicht es, Variablen und Funktionen zu definieren, die in der jeweiligen Bash-Instanz bzw. innerhalb des aktuellen Bash-Skripts verwendet werden können. Außerdem kann eine Bash-Instanz, wenn sie eine andere Bash-Instanz „kreiert“ (als Kindprozess aufruft), letzterer sowohl Variablen als auch Funktionen „vererben“. Dazu muss dem Namen der Variablen oder Funktion etwa das Schlüsselwort export vorangestellt werden (oder env für environment beim Aufruf).
Das Exportieren von Variablen und Funktionen erfolgt über Umgebungsvariablen. Da Umgebungsvariablen nur einfache Schlüssel-Wert-Paare erfassen können (Schlüssel: Variablenname, Wert: Variablenwert), müssen Funktionen beim Exportieren als String (Zeichenkette) kodiert werden. Bash verwendet für Funktions-Definitionen spezielle Umgebungsvariablen. Deren Inhalt beginnt mit der Zeichenfolge „()“. Bash prüft nach dem Start jede vorhandene Umgebungsvariable nach Funktions-Definitionen. Für jede gefundene Funktions-Definition wird automatisch eine entsprechende Funktion in der aktuellen Bash-Instanz angelegt.
Der Bug betrifft das Parsen der Funktions-Definitionen. Dadurch lässt sich der eigentlichen Funktions-Definition zusätzlicher Code anfügen, den Bash beim Parsen der entsprechenden Umgebungsvariable sofort und ungeprüft ausführt – selbst dann, wenn die entsprechende Funktion nie aufgerufen wird. Ein Angreifer muss nur Umgebungsvariablen setzen können, um ausführbaren Code in die jeweilige Bash-Instanz einzuschleusen. Dies ist unter anderem bei CGI-Anwendungen gegeben, da hier die Aufrufparameter, welche vom Client kontrolliert werden, ebenfalls in Form von Umgebungsvariablen übergeben werden.

### Beispiel: Exportieren einer Funktion in Bash

Folgende Befehls-Sequenz exportiert die Funktion „myfunc“, was zum Anlegen einer entsprechenden Umgebungsvariable führt:

Ausgabe:

### Beispiel: Ausnutzen der „Shellshock“-Lücke

Die erste Befehlszeile unter Prüfung auf Verwundbarkeit oben startet eine neue Bash-Instanz, wobei mittels env-Befehl die Umgebungsvariable x auf den Wert () { :;}; echo shellshockverwundbar gesetzt wird. Auf die eigentliche Funktionsdefinition () { :;} folgt also zusätzlich der (harmlose) Befehl echo shellshockverwundbar.Eine verwundbare Bash-Version startet den angefügten Befehl ungeprüft und gibt den Text shellshockverwundbar auf der Konsole aus.Ein potentieller Angreifer kann auf gleiche Weise beliebige Befehle von Bash ausführen lassen.

## Zeitliche Abfolge der Fehlervarianten

Die Fehlervarianten beziehen sich auf unterschiedliche Patch-Versionen von Bash 4.3:

CVE-2014-6271 (12. bis 24. September) ist eine Anfälligkeit von Bash 4.3 in der Patch-Version bash43-024.
CVE-2014-7169 (24. September) ist eine Anfälligkeit von Bash 4.3 in der Patch-Version bash43-025 (und bash43-024).
Die übrigen Varianten mit NIST-Veröffentlichung ab dem 27. September sind Anfälligkeiten von Bash 4.3 in der Patch-Version bash43-026 (und älter).
Die in der Tabelle angegebenen Patches des Maintainers Chet Ramey waren direkt und explizit als Patches der in der jeweiligen Zeile genannten Fehler gedacht.
Anhand der Entdeckernamen können die Anfälligkeiten in E-Mails/Postings/Artikeln identifiziert werden, die dem Eintrag in die National Vulnerability Database des NIST mit Zuteilung eines Kennzeichens vorhergingen.

## Patches

### Quellcode

Der Maintainer von Bash, Chet Ramey, verschickte zunächst eine Patchversion bash43-025 zu Bash-Version 4.3 CVE-2014-6271,
um Distributionen bis zum Zeitpunkt der Veröffentlichung der Lücke am 24. September zu versorgen. Zu CVE-2014-7169 folgte am selben Tag bash43-026.
Zu CVE-2014-7186 vom folgenden Tag postete Florian Weimer von Red Hat zunächst „privat“ einen Patch,
den Ramey als bash43-027 übernahm.
Damit war denen geholfen, die mit den übrigen Quellcodedateien eine neue ausführbare Binärdatei von Bash zu kompilieren in der Lage waren.

### Linux

Von Freitag bis Sonntag nach der Veröffentlichung von bash43-027 erschienen Updates – neue Pakete, Anleitungen, Hinweise – für Linuxdistributionen wie Red Hat Enterprise Linux (kommerziell), Fedora 21 (freies Red-Hat-Linux), die Long-Term-Support-Versionen von Ubuntu und für SUSE Linux Enterprise.
Nutzer der regelmäßigen automatischen Aktualisierungsbenachrichtigung ihrer Distribution haben eine reparierte Bash mehr oder weniger automatisch erhalten. Andernfalls kann spezifisch das Bash-Paket aktualisiert werden.

### Mac

#### OS X 10.7–10.10

Für Mac OS X hat Apple am 29. September 2014 einen Patch für OS X 10.9 Mavericks, OS X 10.8 Mountain Lion und OS X 10.7 Lion veröffentlicht, der die Sicherheitslücke schließt, OS X 10.10 Yosemite ist seit der öffentlichen Beta-Version 4 einen Tag später ebenfalls abgesichert und verhindert die unbefugte Ausführung von Schadcode.

#### Ältere Versionen

Ältere macOS-Versionen werden von Apple nicht mehr gepatcht, die Bash-Datei kann auf älteren Systemen aber durch eine aktualisierte Version ausgetauscht werden.

### IBM

IBM bietet einen Patch für seine Hardware Management Console an, der alle sechs im September 2014 entdeckten Lücken schließt.

### „Nachhaltigkeit“

Noch nach Veröffentlichung der auf bash43-027 beruhenden Updates wurden weitere Shellshock-Varianten entdeckt bzw. veröffentlicht, zuletzt CVE-2014-6278 am 29. bzw. 30. September durch Michał Zalewski von Google Inc.
Am 1. Oktober 2014 erklärte Zalewski jedoch (neben seinen Funden), dass Florian Weimers Patch vom 25. September, der in bash43-027 einging, auch die später gefundenen Lücken schließe.
