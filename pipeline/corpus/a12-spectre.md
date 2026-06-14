---
url: https://de.wikipedia.org/wiki/Spectre_(Sicherheitsl%C3%BCcke)
---

# Spectre (Sicherheitslücke)

## Überblick

Spectre beschreibt Angriffsszenarien, bei denen Prozesse durch Sicherheitslücken in Mikroprozessoren mit out-of-order execution Informationen des virtuellen Speichers, auf die sie keinen Zugriff haben sollten, auslesen.
Die Angreifer umgehen Sicherheitsmechanismen wie Sandboxing oder die Trennung zwischen Programmcode und vom Benutzer bereitgestelltem Code (z. B. Interpreter vs. Skript). Während der out-of-order execution des Prozessors wird vorläufig der Inhalt einer Speicherzelle aus dem eigenen Adressraum ausgelesen, auf die der aufrufende Prozess normalerweise nicht zugreifen könnte. Das „vorläufige Auslesen“ hinterlässt im Cache eine von außen bemerkbare Spur, auch nachdem das Ergebnis der spekulativen Ausführung verworfen wurde.

## Geschichte

Spectre wurde unabhängig voneinander durch Forscher von Googles Project Zero so wie von Paul C. Kocher in Zusammenarbeit mit Daniel Genkin, Mike Hamburg, Moritz Lipp und Yuval Yarom entdeckt und am 3. Januar 2018 in Zusammenhang mit der verwandten Sicherheitslücke Meltdown veröffentlicht, nachdem die betroffenen Software- und Hardware-Hersteller bereits am 1. Juni 2017 informiert worden waren. Entdeckt wurde die Sicherheitslücke Spectre, gemeinsam mit Meltdown, auf der weit verbreiteten x86-Architektur von Intel und AMD, wobei auch andere Architekturen als verwundbar gelten.
Über acht Jahre nach der Entdeckung der Sicherheitslücke hat ein Team der ETH Zürich die Ausnützung der Variante Spectre V2 bei der Virtualisierung, wie sie unter Linux mit QEMU u. a. bei Cloud-Anbietern vorzufinden ist, festgestellt. Dass die ansonsten bereits gepatchte Lücke hier immer noch ausgenutzt werden kann, ist auf ungenügende Trennung zwischen Wirt und Gast zurückzuführen. Diese VMScape getaufte Variante wurde in den Linux-Kernel-Versionen 6.16.7, 6.12.47, 6.6.106, 6.1.152, 5.15.193 und 5.10.244 von September 2025 geschlossen.

## Betroffene Prozessoren

Theoretisch anfällig sind alle Prozessoren, die speculative execution branch prediction, im Besonderen mit indirect branching bieten.
Nicht von der Sicherheitslücke Spectre betroffen sind x86-Prozessoren vor 1995 und jene ohne speculative execution oder ohne out-of-order execution, etwa Atom-Prozessoren vor 2013, sowie die Itanium-Architektur von Intel und HP.
Am 4. Januar 2018 bestätigte AMD die Anfälligkeit bisheriger Prozessoren gegenüber Spectre V1, sprach bei Spectre V2 aber von einem „Risiko nahe Null“, da noch kein erfolgreicher Angriff über Variante 2 von Spectre belegt sei.
Apple, IBM und Motorola entwickelten ab 1991 PowerPC-Prozessoren auf Basis der IBM-POWER-Architektur. Da diese spekulative Ausführungen vorsieht, ist ein Großteil aller PowerPC- und POWER-Prozessoren anfällig. Tests ergaben, dass ältere Prozessoren der Modellreihe G3 (PPC750) und G4 (nur PPC7400 bzw. 7410) in der Praxis nicht anfällig sind, spätere Modelle ab PPC7450 – G4 744x und 745x sowie PowerPC G5 (PPC970) – und der POWER6 jedoch schon. IBM bestätigte die Anfälligkeit von POWER7+, POWER8 und POWER9.
Prozessoren von MIPS sind teilweise betroffen, etwa die Modelle P5600 und P6600 von 2013.
Auch Prozessoren von Oracle mit der von Sun entwickelten SPARC-Architektur sind von Spectre betroffen. Fujitsu veröffentlichte Updates für Server mit den Prozessoren SPARC64 XII und SPARC64 X+. Ältere Prozessormodelle wie SPARC64 VI enthalten ebenfalls Sprungvorhersage.
Prozessoren mit Arm-Architektur können anfällig sein, wie z. B. die SoCs Snapdragon 845 von Qualcomm oder einige Modelle der Tegra-Serie von Nvidia. Auch von Apple produzierte Arm-Prozessoren, z. B. der Apple A11, sind anfällig. Aufgezählt werden alle Geräte, auf denen iOS als Betriebssystem läuft, etwa das iPad oder das Apple TV, in denen besagte Arm-Prozessoren verbaut sind.Arm-Prozessoren mit in-order execution sind nicht betroffen, das sind etwa Arm Cortex-A7- und -A53-Designs wie sie z. B. im Raspberry Pi verwendet werden.
Apple bestätigte ebenfalls die Anfälligkeit aller 2018 aktuellen Mac-Modelle (früher Macintosh), die x86-Prozessoren von Intel nutzen und somit auch von Meltdown betroffen sind. In älteren Macs verwendete Apple von 1994 bis 2006 PowerPC-Prozessoren, die wie oben beschrieben ebenfalls teilweise anfällig sind.
Grafikprozessoren sind von Spectre nicht betroffen. Die wegen Spectre z. B. von Nvidia veröffentlichten aktualisierten Grafiktreiber sollten lediglich Angriffe durch spekulative Befehlsausführung auf x86-Prozessoren vermeiden, die Teile der Treibersoftware sind.

## Wirkungsweise und Auswirkungen

Angriffe mittels Spectre-Lücke erfordern wie bei der Meltdown-Lücke, dass der Prozessor out-of-order execution unterstützt. Hierbei führt der Prozessor manche Befehle spekulativ aus, um eine hohe Effizienz zu erzielen. Nach der Idee der out-of-order execution ist der Zustand des Prozessors selbst bei Fehlspekulation so, als wäre der Befehl nie ausgeführt worden. Die Spectre-Angriffe nutzen aus, dass sich der Zustand des Systems an bestimmten Punkten doch verändert, obwohl das Ergebnis der spekulativen Ausführung verworfen wird. Diese Veränderungen, z. B. das Laden einer Speicherseite in den Cache, dienen als verdeckter Kanal, um Information aus dem Adressraum des angegriffenen Prozesses auszuschleusen. Der empfangende Prozess dekodiert die übermittelte Information aus den Veränderungen im System und kann sie damit lesen.
Mit Varianten des ursprünglichen Spectre-Angriffs liest man nicht nur unbefugt den Speicher aus, sondern erhält auch andere geschützte Informationen. Mit der Lazy FP State Restore Variante aus dem Spectre-NG-Satz kann man Fließkommaregister auslesen. Dies ist brisant, da manche Verschlüsselungsprogramme in diesen Registern private Schlüssel speichern.
Bei einem Angriff lässt man bestimmte vom Angreifer eingebrachte Befehle spekulativ ausführen, z. B. durch Return Oriented Programming unter Ausnutzung eines Pufferüberlaufs oder mit einem vom Angreifer bereitgestellten und vom Benutzer ausgeführten Programm (z. B. in einer interpretierten Skriptsprachen wie JavaScript). Hierbei kann die Spectre-Lücke ausgenutzt werden, um Informationen aus dem Adressraum des ausführenden Interpreters, wie bspw. des Webbrowsers, zu extrahieren. Dabei kann ein Angreifer über ein von einem Webserver geladenes bösartiges JavaScript Passworte aus dem Passwortspeicher des Webbrowsers auslesen.
Die Autoren demonstrierten ein Szenario, in dem ein Programm den Inhalt einer Zeichenkette oder einer beliebigen Speicherstelle des eigenen Adressraums ausgibt, ohne direkt über den Zeiger auf die Zeichenkette zuzugreifen. Als Auslöser für die spekulative Ausführung diente eine bewusst falsch herbeigeführte Sprungvorhersage.
Auch indirekte Sprünge, bei denen Cache-Misses zu spekulativer Ausführung von sonst nicht ausgeführtem Code führen, ermöglichen den Angriff.
Der demonstrierte Angriff (Spectre V1) unter Ausnutzung einer fehlerhaften Sprungvorhersage funktioniert wie folgt:
Kommentierter Beispielcode:

Zunächst wählt der Angreifer eine Speicherstelle p und berechnet deren Offset x_m bezüglich des von ihm kontrollierten Arrays array1.
Dann trainiert er die Sprungvorhersage des Prozessors für den Sprung in Zeile 7 so, dass der Prozessor annimmt, dass die Bedingung vorzugsweise zutrifft, indem er victim_function sehr oft mit Werten aus dem Intervall 0...15 aufruft.
Anschließend beeinflusst der Angreifer den Cache des Systems so, dass der Wert von array1_size nicht im Cache vorhanden ist, während der Inhalt der auszulesenden Speicherstelle im Cache vorhanden ist.
Nun führt er den Code mit x=x_m aus. Die Bedingung in Zeile 7 wird also nicht zutreffen. Da array1_size nicht im Cache vorhanden ist, wird der Prozessor den nachfolgenden Code spekulativ ausführen, während array1_size aus dem Speicher geladen wird, denn die zuvor gelernte Sprungvorhersage geht von einer zutreffenden Bedingung aus.
array1[x_m] zeigt nun auf p. Dessen Inhalt wird spekulativ geladen, zu einer Seitenadresse umgerechnet und die entsprechende Seite aus array2 zum Laden in den Cache vorgemerkt.
array1_size wurde aus dem Speicher geladen und der Prozessor stellt fest, dass die spekulativ ausgeführten Anweisungen zu verwerfen sind. Dabei verbleibt eine einzelne Seite aus array2 abhängig vom Inhalt der Speicherstelle p im Cache.
Anschließend analysiert der Angreifer, welche Seiten aus array2 in den Cache geladen wurden, und schließt daraus auf den Inhalt der Speicherstelle p zurück.

## Varianten

## Schadensminderung

Da besonders über Webbrowser mittels schädlichem JavaScript-Programmcode (auch) die Lücke Bounds Check Bypass ausgenutzt werden könnte, reagierten Hersteller mit Programmaktualisierungen. Mozilla Firefox stellte in Version 57.0.4 am 4. Januar 2018 eine Aktualisierung bereit, die u. a. die Genauigkeit der Zeitauflösung reduziert, da der durch Spectre aufgezeigte Mechanismus eine genaue Zeitmessung benötigt. So wurde die Genauigkeit der betroffenen Funktion performance.now() von 5 auf 20 µs reduziert. Für die Webbrowser Internet Explorer 11 und Edge von Microsoft wurden am 3. Januar 2018 ähnliche Maßnahmen für Windows-Betriebssysteme veröffentlicht. Apple verringerte die Genauigkeit in WebKit mit einer Aktualisierung von iOS 11.2 und macOS High Sierra vom 8. Januar 2018 für Safari 11.0.2 auf 1 ms. Eine Aktualisierung für Google Chrome vom 24. Januar 2018 soll den Angriff erschweren. Angriffe über Chrome-Installationen konnten bis dahin durch Aktivierung der „Website-Isolierung“ erschwert werden, welche aber mehr Arbeitsspeicher benötigt und Probleme beim Drucken und beim Entwickeln webseitenübergreifender iFrames verursacht. Diese Einstellung kann auch in der aktualisierten Version des auf Chromium-basierenden Webbrowsers Opera vorgenommen werden.
Durch Browsererweiterungen (z. B. NoScript, Werbeblocker) können aktive Inhalte wie JavaScript, Flash und Java-Applets blockiert oder eingeschränkt werden, um die Schadcode-Ausführung im Webbrowser zu verhindern.
Gegen Branch Target Injection ist bei Intel-Prozessoren ohne überarbeitete Prozessorarchitektur neben einer Softwareaktualisierung eine Mikrocode-Aktualisierung notwendig, um die Anfälligkeit zu reduzieren. Intel veröffentlichte aktualisierte Mikrocodes für Prozessor-Generationen ab 2013, welche jedoch von den Computer- und Hardwareherstellern zur Verfügung gestellt werden müssen.
Auch AMD kündigte Mikrocode-Updates an. Wegen der von AMD behaupteten schwierigen Ausnutzbarkeit der Lücke werden diese als optional eingestuft. Für Systeme mit Windows 10 bietet Microsoft seit März 2018 auch Betriebssystem-Updates an, welche Intels Mikrocode-Nachbesserungen für deren neuere Prozessoren enthalten.
Intel gab an, in der zweiten Jahreshälfte 2018 Prozessoren auszuliefern, die eine weitere Abschirmung zwischen laufenden Anwendungen sowie zwischen Prozessen mit unterschiedlichen Zugriffsrechten bieten, um Branch-Target-Injection-Angriffe abzuwehren.

### Leistungseinbußen

Bereits die Maßnahmen gegen die Branch Target Injection auf Betriebssystem-Ebene mindern die Rechenleistung. Microsoft kündigte „spürbare Leistungsverluste“ an.

## Neue CPU-Designlücken

Anfang Mai 2018 wurden als Spectre Next Generation (Spectre-NG) acht weitere Sicherheitslücken in Intel-Prozessoren bekannt, wovon zwei veröffentlicht wurden. Während eine Sicherheitslücke Meltdown abwandelt, basiert die andere auf einer mit Spectre vergleichbaren Seitenkanalattacke (beschrieben 1996) und wird unter der CVE-Nummer CVE-2018-3639 (Speculative Store Bypass) geführt. Diese Sicherheitslücke wurde von Intel als mittelriskant bewertet. Neben Intel sind auch Prozessoren von AMD, Arm und IBM betroffen.
Wie schon bei dem Bounds Check Bypass können Maßnahmen im Betriebssystem oder in der Anwendung eine Umgehung mittels Speculative Store Bypass erschweren. Einer Stellungnahme von Intel am 22. Mai 2018 zufolge erhielten Hersteller von PC-Systemen Mikrocode-Updates, um die Sicherheitslücken zu schließen. Da Leistungseinbußen von 2 bis 8 Prozent auftreten, überlässt Intel den Herstellern, ob sie die Gegenmaßnahme in ihren Updates aktivieren. IBM veröffentlichte am 22. Mai 2018 Updates für POWER-Systeme. Microsoft stellte für Windows-Betriebssysteme am 12. Juni 2018 zwar Updates bereit, die Maßnahmen gegen den Speculative Store Bypass sind jedoch nur vom Benutzer selbst einzuschalten.
Im Juli 2018 wurden die CPU-Lücken ret2spec, SpectreRSB und NetSpectre bekannt gegeben. Im Gegensatz zu allen vorherigen Sicherheitslücken ist NetSpectre über Netzwerke ohne lokalen Zugriff ausnutzbar, basiert auf Spectre (V1) und nutzt die AVX2-SIMD-Extension von x86-Prozessoren. Betriebssysteme, die bereits Schutzmaßnahmen gegen die Ausnutzung der Spectre-V1-Lücke besitzen, erschweren NetSpectre-Angriffe. In der Praxis ist ein Angriffszenario sehr umständlich, da es sich um eine Seitenkanalattacke handelt und auch bei schneller Netzwerkverbindung nur wenige Bytes pro Stunde ausgelesen werden können. Auch werden genaue Zeitmessungen benötigt, die bei langsamen Netzverbindungen und bei langsamen Systemen schwieriger sind, und die genauen Details der Hardware und Software (Betriebssystem, Treiber, Programme) des Zielsystems müssen bekannt sein, was den Angriff erheblich einschränkt. Derartige Angriffe sind allerdings nur schwer nachweisbar.

## Microarchitectural Data Sampling

Im Mai 2019 wurden Details zu den CPU-Lücken ZombieLoad und Store-to-Leak Forwarding veröffentlicht. Eine Fehlerbehebung der ZombieLoad-Angriffe erfordert tendenziell eine Leistungshalbierung. Betroffen sind alle ab 2012 hergestellten Intel-Prozessoren, die über Hyper-Threading verfügen.
Gegen Intels seit dem Jahre 2019 hergestellten Cascade-Lake-Prozessoren richtet sich die TAA-Variante der ZombieLoad-Attacken.
Weitere MDS-Attacken sind unter RIDL (Rogue In-Flight Data Load) und Fallout bekannt.
