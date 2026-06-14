---
url: https://de.wikipedia.org/wiki/Jahr-2000-Problem
---

# Jahr-2000-Problem

## Überblick

Das Jahr-2000-Problem, auch als Millennium-Bug (zu deutsch „Millennium-Fehler“) oder Y2K-Bug (von englisch Year 2 Kilo = ‚Jahr 2000‘) bezeichnet, ist ein Computer­problem, das im Wesentlichen durch die Behandlung von Jahreszahlen als zweistellige Angabe innerhalb von Computersystemen entstanden ist.

## Ursachen

In den 1960er und 1970er Jahren war Speicherplatz knapp und teuer. Zum Beispiel konnten Lochkarten nur 80 Stellen speichern, Computer hatten Arbeitsspeicher mit z. B. 64 KiB (= 64*1024 Byte) Größe. Programmierer sparten daher so viel wie möglich an Speicherbedarf ein. Häufig wurden deshalb zur Speicherung und Verarbeitung von Jahreszahlen (in Dezimaldarstellung) nur die letzten beiden Ziffern (Jahr und Jahrzehnt, etwa im Format „TTMMJJ“ o. Ä.) benutzt, so unter anderem von der Computerpionierin Grace Hopper bei der Entwicklung von COBOL. Das Problem betraf Betriebssysteme, Anwenderprogramme und Datenbestände. Die ersten beiden Ziffern (die das Jahrhundert nennen) wurden nicht berücksichtigt, man rechnete nicht damit, dass die Programme über das laufende Jahrhundert hinaus in dieser Weise benutzt werden würden. Viele Programme (und auch die dazugehörenden Datenbestände) wurden jedoch im Laufe der Jahre immer wieder auf vorangegangenen Versionen aufbauend erweitert, ohne dass dieser „bekannte Mangel“ korrigiert worden wäre. Je näher die Jahrhundertwende kam, desto deutlicher wurde, dass diese Programme die Jahreszahl 00 und die folgenden in vielen Fällen nicht korrekt verarbeiten können; zum Beispiel würden bei einem Vergleich zweier Jahreszahlen (z. B. mit Werten ≥ 00 gegen Werte ≤ 99) erstere als kleiner (also früher) behandelt werden.
Nicht direkt damit zusammenhängend, aber oft gleichzeitig kontrolliert oder behoben wurden evtl. nicht vollständig der Schaltjahr-Regelung nach dem Gregorianischen Kalender entsprechende Berechnungsformeln: Nach dieser Regel ist eine durch 100 ohne Rest teilbare Jahreszahl (obwohl sie gemäß dem Normalfall für Schaltjahre durch 4 teilbar ist) kein Schaltjahr – außer sie ist durch 400 ganzzahlig teilbar, was nach 1600 im Jahr 2000 wieder der Fall war und erst wieder im Jahr 2400 auftreten wird.

## Folgen/Probleme

Die Folgen dieser Fehler wären ohne Korrekturen zum Beispiel falsche Sortierungen gewesen: Daten für (20)00 ganz vorne, ..., (19)98, (19)99 ganz hinten. Vor allem die falsche Berechnung der Zeitdauer (als Differenz zwischen zwei Zeitangaben) hätte zu gravierenden Fehlern in zahlreichen Funktionen geführt. Beispiele: Altersberechnung mit '−40 Jahre' (= Jahr_heute (00 ...) minus Geburtsjahr (40)); Zahlungsrückstand wird nicht erkannt (Datum heute minus Datum der Zahlungsfälligkeit ergibt negative Tage-Anzahl, Mahnungen erst ab Rückstand 30 Tage und mehr, somit „keine Mahnung“); Sollzinsen für Sparguthaben oder Zinsgutschrift für Kreditzinsen (wegen negativer Tageanzahl in der Zinsformel) und viele andere.
Weiterhin war es weit verbreitete Praxis, nicht vorhandene oder ungültige Dateninhalte mit der Zahl bzw. Ziffernkombination 00 („Nichts“) darzustellen und zu identifizieren – was mit dem Eintreten des Jahres 2000 dann zu Fehlinterpretationen geführt hätte, ggf. sogar zur Nichtverarbeitung ganzer, vermeintlich ungültiger Datensätze. Im Weiteren gäbe es fehlerhafte Erzeugung von Texten (typisches Beispiel hierfür wäre eine Datierung mit der Jahreszahl „1901“ oder „19101“ für das Jahr 2001).
Bei damals älteren PCs kam hinzu, dass die interne Echtzeituhr nicht automatisch das Jahrhundert umschalten konnte, was weder vom BIOS noch von MS-DOS oder Windows 98 automatisch korrigiert wurde. Speziell EDV-gesteuerte Hardwarekomponenten (sog. eingebettete Systeme, englisch embedded systems, z. B. in Alarmanlagen, Videorecordern, Werkzeugmaschinen …) konnten Probleme darstellen, da hier der Anwender nicht einfach die Software umprogrammieren konnte, sondern dies vom Hersteller (wenn noch vorhanden) erledigen lassen oder sogar die Hardware austauschen musste.
Da es zur Umgehung des Jahr-2000-Problems verschiedene Strategien gab (Beispiel: Ein Jahr größer als 50 gilt als 19xx, sonst als 20xx bei weniger langfristigen Zeitdauern; Datenfelder auf vierstellige Jahresangaben oder andere Datumsformate umstellen), mussten die Anwender jeweils exakt planen, in welchen Zusammenhängen welche dieser Strategien anzuwenden war. Da es viele Programme gab, die viele Datenbestände verarbeiteten, musste sichergestellt werden, dass geänderte Programme immer auch entsprechend geänderte Datenbestände voraussetzten. Schwierigkeiten ergaben sich in diesem Zusammenhang für
historische Datenbestände: Hier musste entschieden werden, ob diese ebenfalls anzupassen sind oder ob sie noch durch alte (ungeänderte) Programmversionen verarbeitbar sein mussten.
Neben anderen Herausforderungen standen Unternehmen zum Teil vor der Situation, nicht zu wissen, welche Programme und welche Geräte überhaupt Datumsangaben verarbeiten bzw. dann auch Jahr-2000-fähig sind. Dies konnte zu umfangreichen Erhebungs- und Testmaßnahmen führen, die in der Regel deutlich mehr Aufwand verursachten als das Korrigieren fehlerbehafteter Software. Trotzdem mussten die festgelegten Termine absolut sicher eingehalten werden, denn der „1. Januar 2000“ war nicht verschiebbar und viele Anwendungen (die in die Zukunft rechnenden) mussten schon zu früheren Terminen „Y2K-ready“ sein.

### Verlauf des Wechsels zum Jahr 2000

Aufgrund dieser Probleme wurden im Vorfeld des Jahreswechsels 1999/2000 Katastrophenszenarien vorhergesagt, dass durch diesen Fehler Computerabstürze in großem Maß erfolgen würden. Inwiefern die Jahr-2000-Problematik von wirklicher Relevanz sein würde, war Ende der 1990er Jahre kaum realistisch zu beurteilen.
Es gab Stimmen in den Medien, die Szenarien apokalyptischen Ausmaßes mit weltweiten Computerzusammenbrüchen prognostizierten. Betroffen sein sollten demnach besonders sicherheitsrelevante Bereiche, die auf Computer angewiesen sind (Flugverkehr, Banken, Industrie oder auch Kraftwerke, im Extremfall der Vorhersagen sogar Atomwaffen) und durch das Problem fehlgeschaltet oder gar lahmgelegt würden. Als Folgen wurden vom Verkehrschaos über einen Börsencrash und eine Weltwirtschaftskrise bis zur Fehlauslösung nuklearer Waffensysteme viele Szenarien angeführt – selbst Flugzeugabstürze, obwohl Zeitfehler zu diesem Zeitpunkt längst Teil der Zertifizierungsprozeduren für sicherheitskritische Software waren. Die NASA verkürzte die im Dezember 1999 stattfindende Space-Shuttle-Mission STS-103, um sicherzustellen, dass die Raumfähre vor dem 1. Januar 2000 zurück sein würde.
Sorgfältige Analysen vieler Fachleute wiesen durchaus auf reale Gefahren hin, vor allem für Wirtschaftsunternehmen.
In praktisch allen großen Unternehmen wurde eine genaue Untersuchung der Computersysteme mithilfe von Diagnoseverfahren angeordnet, um die befürchteten Folgen so gering wie möglich zu halten. Auch wurden Warnaufkleber für jene Geräte verteilt, die bis Ende 1999 systematisch aus dem Betrieb genommen wurden.
Die Softwareindustrie reagierte mit einer Überprüfung ihrer Produkte und Herausgabe von Warnlisten, bei welchen Programmen Fehlfunktionen zu befürchten seien. Diese wurden mit Testroutinen für die Hardware (vor allem die Systemuhren) kombiniert.
Privatanwender fanden im Internet Listen mit gefährdeter Hard- und Software.
Während einige Medien noch bis zum kritischen Jahreswechsel 1999/2000 besorgte Berichte verbreitet hatten, stellte sich Anfang 2000 heraus, dass die vorsorglichen Maßnahmen im Großen und Ganzen ausreichend gewesen waren: Weltweit wurden in vielen Projekten Programme und Datenbestände (vor allem auf Großrechnern) „saniert“, um den „Y2K-Fehler“ zu beheben. Dennoch hatten viele Banken in der Neujahrsnacht einfach ihre Geldautomaten abgestellt, um Fehler zu vermeiden.
Dass es zum Jahreswechsel zu Störungen beim Versand von Kurznachrichten kam, lag nicht an einem Jahr-2000-Fehler. Dabei handelte es sich um Netzüberlastungen aufgrund der hohen Anzahl an Neujahrswünschen, was jedoch an Silvester nicht ungewöhnlich ist bzw. war.

### Aufgetretene gemeldete Probleme

Keines der bekanntgewordenen Jahr-2000-Probleme hatte eine große Auswirkung. Sie traten auch in Ländern, die nur wenig in die Behebung des Problems investiert hatten, spärlich auf. Hier einige Beispiele:

Im Kernkraftwerk Fukushima fiel um 8:58 Uhr die Anzeige für die Steuerstäbe aus; es wurde das Datum „6. Februar 2036“ angezeigt. Der Vorfall blieb folgenlos.
Das United States Naval Observatory, der offizielle Zeitmesser der USA, gab auf seiner Website das Jahr 19100 an.
In Australien fielen in zwei Bundesstaaten Fahrkartenentwerter aus.
In den USA fielen über 150 Spielautomaten an Rennbahnen in Delaware aus.
Ein Autofahrer erhielt eine Kfz-Steuerforderung für die letzten 100 Jahre über 760.000 Dollar.
In Italien versandte die Telecom Italia Rechnungen für die ersten zwei Monate des Jahres 1900.
In Japan fiel am 1. Januar 2000 das System zum Aufzeichnen von Fluginformationen für kleine Flugzeuge aus.
Im Vereinigten Königreich fielen manche Kreditkartentransaktionen aus.

### Wirtschaftliche Auswirkungen

Die Kosten im Zusammenhang mit dem Jahr-2000-Problem waren erheblich: So wurde beispielsweise vom Massachusetts Institute of Technology geschätzt, dass allein das US-amerikanische Medicare-Programm 500 Millionen US-Dollar zur Fehlerprävention ausgeben musste.
Die Gesamtkosten für die Vorbereitungen auf das Jahr 2000 überstiegen wahrscheinlich 300 Milliarden US-Dollar ($547 Milliarden aktuell, wenn die Inflation berücksichtigt wird). IDC berechnete, dass die USA geschätzte 134 Milliarden Dollar ($244 Milliarden) für die Vorbereitung auf das Jahr 2000 ausgaben und weitere 13 Milliarden Dollar ($24 Milliarden) für die Behebung von Problemen in den Jahren 2000 und 2001. Weltweit wurden schätzungsweise $308 Milliarden ($561 Milliarden) für die Jahr-2000-Umstellung ausgegeben.
Durch die Hardware- und Softwareaktualisierungen, die zur Verhinderung des Y2K-Problems getätigt wurden, waren im Jahr 2000 viele Anwender mit aktuellen Plattformen ausgerüstet. Das löste in der folgenden Vierjahresperiode (Lebensdauer eines gängigen Bürogerätes) einen Einbruch beim Verkauf neuer Systeme und eine spürbare Rezession im Informatikbereich aus.

## Ähnliche Probleme

Jahr-2010-Problem
Zum Jahreswechsel 2009/2010 traten einige der hier prophezeiten Szenarien unerwartet ein. Kreditkarten und Debitkarten wurden nicht mehr als gültig erkannt und SMS-Nachrichten vordatiert. Massenhaft wurden einwandfreie E-Mails fälschlicherweise als Spam behandelt.
Jahr-2022-Problem
Programmierfehler, bei dem eine vorzeichenbehaftete 32-Bit-Zahl nicht mehr zur Zeitdarstellung ausreicht (ähnlich dem Jahr-2038-Problem).
Jahr-2027-Problem
Am 1. Januar 2027 werden die Bits im Datenformat des Kalenders auf den Rechnern der 3000er-Serie von Hewlett-Packard aufgebraucht sein. Dabei handelt es sich um ein altes System der Mittleren Datentechnik, für das seit Dezember 2015 keine Unterstützung des Herstellers mehr besteht.
Jahr-2038-Problem
Zum 19. Januar 2038 könnten wiederum ähnliche Probleme auftreten und bei EDV-Systemen zu Softwareausfällen führen. Dieses Problem dürfte jedoch auf EDV-Systeme beschränkt sein, die die Unixzeit als Zeitstandard benutzen. Ursache dafür ist, dass im Jahr 2038 die verwendete vorzeichenbehaftete 32-Bit-Ganzzahl nicht mehr zur Zeitdarstellung ausreicht und es somit zu einem arithmetischen Überlauf kommt.
Jahr-2100-Problem
Da in praktisch allen gängigen Echtzeituhren die Jahreszahl weiterhin nur durch die niederwertigen zwei Jahresziffern repräsentiert wird, kann es zum 1. Januar 2100 zu einer Wiederholung des Jahr-2000-Problems kommen, dann speziell für eingebettete Systeme, in denen diese Echtzeituhren verbaut wurden.
GPS-Woche
Die Wochenzählung des GPS-Zeitsignals begann 1980 bei Null und benutzt 10 Bit, was 1023 Wochen bzw. ca. 20 Jahren entspricht. Danach springt der Zähler wieder auf Null. Beim ersten Überlauf 1999 bestanden ebenfalls Befürchtungen, dass dies nicht bei allen GPS-Empfängern problemlos verlaufen könnte. Der zweite Überlauf fand am 7. April 2019 um 01:59:42 MESZ statt.
