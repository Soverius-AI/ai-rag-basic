---
url: https://de.wikipedia.org/wiki/Therac-25
---

# Therac-25

## Überblick

Therac-25 war ein Linearbeschleuniger zur Anwendung in der Strahlentherapie. Er wurde von 1982 bis 1985 in elf Exemplaren vom kanadischen Staatsunternehmen Atomic Energy of Canada Limited (AECL) gebaut und in Kliniken in den USA und in Kanada installiert. Durch Softwarefehler, falsche Priorisierung und mangelnde Qualitätssicherung war ein schwerer Funktionsfehler möglich, der von Juni 1985 bis 1987 drei Patienten das Leben kostete und drei weitere schwer verletzte, bevor geeignete Gegenmaßnahmen ergriffen wurden.
Dies war einer der bis dahin folgenschwersten Fehler in der Geschichte der Softwareentwicklung und ein oft studiertes Lehrbeispiel für Anforderungen an Software in sicherheitsrelevanten Bereichen.

## Gerät

Therac-25 war ein Elektronen-Linearbeschleuniger. Als therapeutische Strahlung, vor allem für die Krebstherapie, konnte entweder der Elektronenstrahl direkt oder die durch ein zwischengeschaltetes Target aus Wolfram erzeugte Röntgenstrahlung mit 25 MeV Energie verwendet werden. Im direkten Modus wurde eine wesentlich geringere Brillanz (Stärke des Elektronenstrahls) eingestellt als im Röntgenmodus.
Die Vorgänger, Therac-6 und Therac-20 mit 6 bzw. 20 MeV Photonenenergie, waren nicht-computerisierte Geräte, bei denen die Sicherheitsmaßnahmen durch mechanische Verriegelung und die Überwachung der Systemfunktion durch analoge Messgeräte realisiert waren. Ein Computer des Typs PDP-11 und ein VT-100-Terminal wurden später allein zur Erleichterung der Bedienung hinzugefügt.
Die Neukonstruktion Therac-25 ersetzte diese durch Sensoren, deren Messwerte vom Computer ausgewertet wurden, und Aktoren, die softwaregesteuert die verschiedenen Einstellungen vornahmen. Ein Prototyp, noch ohne Computersteuerung, wurde 1976 fertiggestellt, die erste Serienmaschine 1982. 1983 wurde eine Sicherheitsanalyse des Geräts durchgeführt, die das Vertrauen in die Überlegenheit der Softwarelösung ausdrückte, da Software keinem Verschleiß unterworfen sei.

## Fallgeschichte

### 3. Juni 1985, Kennestone Regional Oncology Center

Das Bestrahlungsgerät war hier seit sechs Monaten im Einsatz. Bei einer Bestrahlung mit 10 MeV Elektronen beklagte die Patientin, sie sei verbrannt worden, aber an der Bestrahlungsstelle waren zu diesem Zeitpunkt keine Spuren zu sehen. Dieser Vorgang wurde nie offiziell untersucht. Die Patientin klagte später gegen den Hersteller, nachdem Arm und Schulter unbeweglich wurden und chronische Schmerzen verursachten. Die Klage wurde durch einen außergerichtlichen Vergleich beigelegt.

### 26. Juli 1985, Ontario Cancer Foundation

Auch hier war das Gerät bereits über sechs Monate im Einsatz. Oft meldete es eine Störung mit der zusätzlichen Anzeige, dass keine Strahlungsdosis appliziert wurde. In diesen Fällen wurde routinemäßig eine Taste zur Wiederholung gedrückt. Bei einer Bestrahlung der Hüfte einer Krebspatientin passierte dies am 26. Juli 1985 viermal, danach schaltete sich das Gerät mit einer anderen Fehlermeldung ab. Die Patientin gab an, ein unangenehmes Gefühl wie bei einem Stromfluss gespürt zu haben. In der Folge entwickelte sich eine massive Schwellung an der bestrahlten Stelle sowie ein brennender Schmerz. Nachdem die Patientin an ihrer Grunderkrankung gestorben war, ergab eine Autopsie eine Zerstörung des Hüftgelenks.
Der Hersteller und die Food and Drug Administration wurden benachrichtigt, und AECL äußerte die Vermutung, ein ausgefallener Mikroschalter habe zu einer falschen Positionsbestimmung des Wolfram-Targets geführt. Die Positionsbestimmung wurde überarbeitet, so dass ein einzelner Schalterausfall durch die Redundanz des Gesamtsystems keine Folgen mehr haben sollte. Im Abschlussbericht zu diesem Vorfall erklärte die AECL, dadurch die Fehlerrate um den Faktor 10.000 gesenkt zu haben.
Das FDA stufte den Vorfall als „class 2 recall“ ein, was bedeutet, dass es möglich, aber sehr selten sei, dass es zu einem ernsten Schaden für den Patienten kommt.

### 21. März 1986, East Texas Cancer Center

Der Patient Ray Cox empfand ein schmerzhaftes, elektroschockartiges Gefühl bei einer Bestrahlung des Rückens. Er stand auf, was unbemerkt blieb, da die Audio- und Videoüberwachung des Bestrahlungsraums nicht aktiv war. Das Gerät zeigte Unterdosis an, die Bestrahlung wurde wiederholt, während der Patient schon aufgestanden war, und traf ihn an der Hand. Der Patient litt nach der Bestrahlung an Symptomen der Strahlenkrankheit, Lähmung beider Beine und eines Arms und starb nach fünf Monaten an den Folgen der Überdosis an Strahlung.

### 11. April 1986, East Texas Cancer Center

Bei einer Gesichtsbestrahlung wegen Hautkrebs schrie der Patient auf und gab später an, einen hellen Blitz gesehen zu haben. Die Verbrennung durch die Strahleneinwirkung war so stark, dass sie geruchlich wahrnehmbar war. Der Patient starb nach nur drei Wochen und eine Autopsie ergab Läsionen des Stammhirns als Todesursache.

### 17. Januar 1987, Yakima Valley Memorial Hospital

Ein Patient verstarb nach drei Monaten an den Folgen einer Überdosis.

## Ursachen

### Strahlenquelle

Alle Vorfälle beruhten darauf, dass der Linearbeschleuniger mit der hohen Brillanz für den Röntgenmodus arbeitete, aber das Wolfram-Target nicht im Strahlengang war. Dies ist der gefährlichste mögliche Betriebszustand, der bei den Vorgängermodellen durch eine mechanische Verriegelung ausgeschlossen war. Die Strahlenbelastung in den sechs Fällen wurde nachträglich zu 40 bis 200 Gray abgeschätzt, eine normale Behandlung entspricht einer Dosis unter 2 Gray. Eine Strahlenbelastung des gesamten Körpers mit 10 Gray gilt als sicher tödlich, für lokalisierte Strahlenbelastungen liegen wenig Erfahrungswerte vor.

### Programmfehler

Der Computer des Therac-25 war sowohl für die Messwerterfassung und Steuerung des Geräts als auch für die Benutzerinteraktion zuständig, durch Multitasking wurden beide Aufgaben quasi-gleichzeitig erledigt. Das Kernproblem dabei war die korrekte Synchronisation der beiden Prozesse. Unter gewissen Umständen konnte es passieren, dass nach einer Korrektur der Eingabedaten durch den Bediener bei der Ansteuerung des Gerätes nur bei einem Teil der Werte die korrigierten Daten, bei dem anderen aber die alten Daten vor der Korrektur verwendet wurden. Bei der Ansteuerung des Gerätes werden nacheinander verschiedene Magnete in Position gebracht, was jeweils 8 Sekunden dauert. Fälschlicherweise wurde bereits nach dem Einstellen des ersten Magneten, nicht des letzten, ein bestimmtes Flag gelöscht, was dazu führte, dass während der Einstellung weiterer Magnete Korrekturen der Eingabedaten durch den Bediener von einem Teil des Systems ignoriert wurden, der einen Teil der Daten zur Einstellung des Geräts verwendet. Weiterhin wurde von diesem Teil des Systems nach dem Einstellen der Magnete bei der Überprüfung, ob der Bediener die Dateneingabe abgeschlossen hat, fälschlicherweise nur überprüft, ob der Cursor bereits einmal am Ende der Eingabe gewesen war, nicht aber, ob inzwischen Daten geändert wurden. Offenbar haben diese Fehler dazu geführt, dass bei Eingabekorrekturen innerhalb von 8 Sekunden in einem ungünstigen Zeitfenster inkonsistente Daten zur Ansteuerung des Gerätes bei den Überdosierungen im East Texas Cancer Center in Tyler verwendet wurden.
Ein weiterer Softwarefehler war, dass ein Flag, das die Notwendigkeit einer Positionsprüfung der Drehscheibe, auf der auch das Wolframtarget angebracht ist, anzeigte, während einer Einstellungsphase nicht auf einen festen Wert ungleich 0 gesetzt, sondern ständig erhöht wurde. Dieses Flag war in einer 8-Bit-Variable abgelegt, hatte also nach jeder 256. Erhöhung wegen Überlauf den Wert 0. Wenn der Bediener genau dann die Datenübernahme initiierte, überprüfte das System nicht, ob bei vorgesehener Röntgenstrahlung das Wolframtarget wirklich im Strahlengang war, oder z. B. noch ein Spiegel für die optische Ausrichtung von Patienten und bestrahlter Fläche. Dies führte offenbar zu der Überdosierung am 17. Januar 1987 im Yakima Valley Memorial Hospital.

### Softwareentwicklung

Die Software wurde von einem einzelnen Softwareentwickler geschrieben – unter Verwendung vorhandener Teile, deren Programmierer nicht mehr für die Firma arbeiteten. Der Entwickler war zugleich für Tests zuständig.

### Qualitätssicherung

AECL hatte reiche Erfahrung mit Sicherheitsabschätzungen und die notwendigen Analysen wurden mit gegebener Sorgfalt durchgeführt. Sie ignorierten aber völlig, dass Software fehlerhaft sein kann. Als mögliche Fehlerbedingungen, die das Computersystem berührten, wurden lediglich Hardwareausfälle und die Verfälschung des Hauptspeichers durch Alphastrahlen berücksichtigt (Soft Error).

### Korrekturmaßnahmen

AECL, und teilweise die FDA, unterschätzten anfangs die Bedeutung der Vorfälle, und die Anwender wurden mangelhaft informiert. Die Verantwortlichen für die Untersuchung und Bewertung der Vorfälle hatten zu lange die Software als Fehlerquelle von vornherein ausgeschlossen. Die Korrekturmaßnahmen nach den ersten beiden Vorfällen wurden für wirksam gehalten, ohne einen kausalen Zusammenhang nachweisen zu können.
