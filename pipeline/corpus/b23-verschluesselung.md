---
url: https://de.wikipedia.org/wiki/Verschl%C3%BCsselung
---

# Verschlüsselung

## Überblick

Verschlüsselung (auch: Chiffrierung oder Kryptierung) nennt man die Umwandlung von Informationen, genannt Klartext, in einen Geheimtext (auch Chiffrat oder Schlüsseltext genannt). Dies geschieht mithilfe von kryptografischen Verfahren unter Verwendung eines geheimzuhaltenden Schlüssels, der nur den befugten Personen bekannt sein darf.
Mit Kenntnis des Schlüssels kann der Geheimtext wieder in den Klartext zurückgewandelt werden, was Entschlüsselung genannt wird.

## Geschichte

Verschlüsselung dient zur Geheimhaltung von Information, beispielsweise um militärische Nachrichten geheim übermitteln zu können oder schriftliche Mitteilungen oder abgespeicherte Daten gegen unbefugtes „Mitlesen“ zu schützen. Die Wissenschaft des „geheimen Schreibens“ wird als Kryptographie (geschrieben auch: Kryptografie) bezeichnet, abgeleitet von altgriechisch κρυπτός kryptós, deutsch ‚verborgen‘, ‚geheim‘ und γράφειν gráphein, deutsch ‚schreiben‘. Ihre Ursprünge liegen in der Antike, möglicherweise noch weiter zurück, denn die Geheimhaltung war Menschen seit jeher ein wichtiges Anliegen.
Durch die Erfindung der Telegrafie, insbesondere der Funktelegrafie (siehe auch: Funktelegramm (FT)), und des Festplattenlaufwerks (HD) für Computer stieg der Bedarf an leicht handhabbaren und zugleich ausreichend sicheren Verschlüsselungsmethoden.
Bis Ende des 19. Jahrhunderts waren fast nur manuelle Methoden („Handschlüssel“) zur Verschlüsselung bekannt – abgesehen von simplen Geräten wie Verschlüsselungsscheiben. Mit Einführung der elektrischen Schreibmaschine und des Fernschreibers zu Beginn des 20. Jahrhunderts kamen mehr und mehr maschinelle Verfahren zur Verschlüsselung („Maschinenschlüssel“) in Gebrauch, beispielsweise Rotor-Chiffriermaschinen. Diese versprachen eine einfachere Handhabung und eine verbesserte kryptographische Sicherheit. Heute wird zumeist mithilfe von Verschlüsselungs-Software oder dezidierter Hardware („Krypto-Hardware“) verschlüsselt.

## Grundlagen

### Verschlüsseln

Durch Verschlüsseln wird der ursprüngliche „offene Wortlaut“ eines Textes, der „Klartext“, in eine unverständliche Zeichenfolge umgewandelt, den „Geheimtext“. Die Fachbegriffe Klartext und Geheimtext sind historisch gewachsen und heutzutage deutlich weiter zu interpretieren. Außer Textnachrichten lassen sich auch alle anderen Arten von Information verschlüsseln, beispielsweise Sprachnachrichten, Bilder, Videos oder der Quellcode von Computerprogrammen. Die kryptographischen Prinzipien bleiben dabei die gleichen.

### Schlüssel

Der entscheidende Parameter bei der Verschlüsselung ist der „Schlüssel“. Die gute Wahl eines Schlüssels und seine Geheimhaltung sind wichtige Voraussetzungen zur Wahrung des Geheimnisses. Im Fall der Codierung stellt das Codebuch den Schlüssel dar. Im Fall der meisten klassischen und auch einiger moderner Methoden zur Verschlüsselung ist es ein Passwort (auch: Kennwort, Schlüsselwort, Codewort oder Kodewort, Losung, Losungswort oder Parole von italienisch la parola „das Wort“; englisch password). Bei vielen modernen Verfahren, beispielsweise bei der E-Mail-Verschlüsselung, wird dem Benutzer inzwischen die Wahl eines Schlüssels abgenommen. Dieser wird automatisch generiert, ohne dass der Nutzer es bemerkt. Hierdurch wird auch der „menschliche Faktor“ eliminiert, nämlich die nicht selten zu sorglose Wahl eines unsicheren – weil zu kurzen und leicht zu erratenden – Passworts.

### Entschlüsseln

Der zur Verschlüsselung umgekehrte Schritt ist die Entschlüsselung. Der befugte Empfänger, der „Entschlüssler“, gewinnt den Klartext unter Verwendung des ihm bekannten geheimen Schlüssels wieder aus dem Geheimtext zurück. Dieser ist bei den lange Zeit allein bekannten symmetrischen Verschlüsselungs­verfahren identisch mit dem vom Verschlüssler benutzten. Der Entschlüsselungs­vorgang hingegen ist zumeist zwar ähnlich, jedoch nicht zwingend identisch zur Verschlüsselung. Falls doch, wie beispielsweise bei der deutschen Schlüsselmaschine „Enigma“ aus dem Zweiten Weltkrieg, dann nennt man es eine involutorische Verschlüsselung.
Der Schlüssel wird im Vorfeld zwischen den beiden Kommunikationspartnern vereinbart, beispielsweise anhand einer geheimen Schlüsseltafel, über die beide verfügen, oder auf eine andere geheime Weise, beispielsweise über Kurier ausgetauscht. Für die Übertragung per Computer gibt es kryptographische Schlüsselaustauschprotokolle. Bei den modernen asymmetrischen Verfahren gibt es zwei unterschiedliche Schlüssel, einen zum Verschlüsseln („öffentlicher Schlüssel“) und einen anderen, der zum Entschlüsseln benötigt wird („privater Schlüssel“). Geht der private Schlüssel verloren, dann lässt sich der Geheimtext nicht mehr entschlüsseln. Gerät der Schlüssel in fremde Hände, dann können auch Dritte den Geheimtext lesen, das Geheimnis ist also nicht länger gewahrt.
Ein zusammenfassender Begriff für Verschlüsseln und/oder Entschlüsseln ist das Schlüsseln.

### Entziffern

Sprachlich zu trennen von der Entschlüsselung ist der Begriff der „Entzifferung“. Als Entzifferung wird die Kunst bezeichnet, dem Geheimtext seine geheime Nachricht zu entringen, ohne im Besitz des Schlüssels zu sein. Dies ist die Tätigkeit eines Kryptoanalytikers, häufig auch als „Codeknacker“ (englisch codebreaker) bezeichnet. Im Idealfall gelingt keine Entzifferung, weil das Verschlüsselungsverfahren ausreichend „stark“ ist. Es wird dann als „unbrechbar“ oder zumindest als „kryptographisch stark“ bezeichnet. Im Gegensatz zu einer „starken Verschlüsselung“ lässt sich eine „schwache Verschlüsselung“ ohne vorherige Kenntnis des Schlüssels mit vertretbarem Aufwand mithilfe kryptanalytischer Methoden brechen. Durch Fortschritte in der Kryptologie kann sich eine vermeintlich starke Verschlüsselung im Laufe der Zeit als schwach erweisen. So galt beispielsweise die „Vigenère-Verschlüsselung“ über Jahrhunderte hinweg als „Le Chiffre indéchiffrable“ („Die unentzifferbare Verschlüsselung“). Inzwischen weiß man, dass sie das nicht ist.
Das Arbeitsgebiet, das sich mit der Entzifferung von Geheimtexten befasst, ist die Kryptanalyse (älterer Ausdruck: Kryptoanalyse). Sie ist neben der Kryptographie das zweite Teilgebiet der Kryptologie. Die Kryptanalyse dient nicht nur zur unbefugten Entzifferung von Geheimnachrichten, sondern sie befasst sich auch mit „(Un-)Brechbarkeit“ von Verschlüsselungen, also der Prüfung der Sicherheit von Verschlüsselungsverfahren gegen unbefugte Entzifferung.
Die meisten Verschlüsselungsverfahren sind allenfalls pragmatisch sicher, was bedeutet, dass bei ihrer Kryptanalyse keine praktikable Möglichkeit zur Entzifferung gefunden wurde. Dabei kann man auf die Sicherheit umso mehr vertrauen, je länger ein Verfahren bereits öffentlich bekannt ist und je verbreiteter es in der Anwendung ist, denn umso mehr kann man davon ausgehen, dass viele fähige Kryptologen es unabhängig voneinander untersucht haben und dass eine eventuell vorhandene Schwäche gefunden und veröffentlicht worden wäre (siehe auch Kerckhoffs’ Prinzip).
Es gibt Verfahren, deren Sicherheit unter Annahme der Gültigkeit bestimmter mathematischer Vermutungen beweisbar ist. So kann zum Beispiel für das RSA-Kryptosystem gezeigt werden: Der private Schlüssel eines Benutzers kann aus dessen öffentlichem Schlüssel genau dann effizient berechnet werden, wenn man eine große Zahl (in der Größenordnung von einigen hundert Dezimalstellen) effizient in ihre Primfaktoren zerlegen kann. Ein Verschlüsselungsverfahren, dessen perfekte Sicherheit durch den  amerikanischen Wissenschaftler Claude Shannon in den 1940er-Jahren bewiesen wurde, ist das One-Time-Pad (OTP), deutsch „Einmalblock“.

## Beispiel

In dem folgenden Beispiel wird der (hier in Kleinbuchstaben) stehende Klartext mithilfe eines sehr alten und äußerst simplen Verfahrens, der Caesar-Verschlüsselung, in einen Geheimtext (hier in Großbuchstaben) umgewandelt:

kommeumachtzehnuhrmitdenplaenenzurkapelle
NRPPHXPDFKWCHKQXKUPLWGHQSODHQHQCXUNDSHOOH

Als geheimer Schlüssel wird hier „C“ benutzt, also der dritte Buchstabe des lateinischen Alphabets. Das bedeutet die Ersetzung jedes einzelnen Klartextbuchstabens durch den jeweiligen im Alphabet um drei Stellen verschobenen Buchstaben. So wird aus einem „a“ des Klartextes der im Alphabet drei Stellen später stehende Buchstabe „D“ im Geheimtext, aus „b“ wird „E“ und so weiter. Wenn man über das Ende des Alphabets hinauskommt, beginnt man wieder am Anfang; aus „z“ etwa wird somit „C“.

Der so erzeugte mit „NRPPH“ beginnende Geheimtext ist auf den ersten Blick unverständlich. Das Verfahren verbirgt somit die im Klartext enthaltene Information vor Unbefugten. Es bietet aber nur eine sehr schwache Sicherheit, die im Wesentlichen davon abhängt, dass ein Unbefugter das zugrundeliegende Verschlüsselungsverfahren nicht kennt. Dies wird als Security through obscurity bezeichnet. Der Angreifer muss außerdem den Schlüssel kennen, aber hier ist der Schlüsselraum mit nur 25 möglichen Verschiebungen sehr klein. Der Schlüssel kann trivial per Brute-Force-Methode ermittelt werden, auch als Exhaustionsmethode bezeichnet („vollständige Ausschöpfung“), also sozusagen mit „roher Gewalt“. Da die Caesar-Verschlüsselung altbekannt ist und viel zu wenig Schlüsselmöglichkeiten bietet, gelingt es einem Codebrecher hier sehr leicht, den Geheimtext auch ohne vorherige Kenntnis des Schlüssels zu entziffern.
Der Kenntnisstand, welches Verfahren als sicher und welches als gebrochen gilt, verändert sich im Laufe der Geschichte der Kryptographie immer wieder. Daher wurden und werden immer stärkere Methoden zur Verschlüsselung entwickelt. Ein modernes Verschlüsselungsverfahren ist der Advanced Encryption Standard (AES), das zurzeit als praktisch unbrechbar gilt. AES ist Gegenstand zahlreicher kryptanalytischer Untersuchungen.

## Klassifizierung

Prinzipiell unterscheidet man unterschiedliche klassische und moderne symmetrische Verschlüsselungsverfahren und die erst seit den 1970er-Jahren bekannten asymmetrischen Verschlüsselungsverfahren. Klassische Verschlüsselungsverfahren können nach dem verwendeten Alphabet klassifiziert werden.

### Symmetrische Verschlüsselung

Symmetrische Verschlüsselungsverfahren verwenden zur Ver- und Entschlüsselung den gleichen Schlüssel.
Bei historischen Verfahren lassen sich zwei Verschlüsselungsklassen unterscheiden. Bei der ersten werden, wie bei der im Beispiel benutzten Caesar-Verschlüsselung, die Buchstaben des Klartextes einzeln durch andere Buchstaben ersetzt. Mit dem lateinischen Wort substituere (deutsch: „ersetzen“) werden sie als Substitutionsverfahren bezeichnet. Im Gegensatz dazu bleibt bei der zweiten Verschlüsselungsklasse, genannt Transposition (von lateinisch: transponere; deutsch: „versetzen“), jeder Buchstabe wie er ist, aber nicht wo er ist. Sein Platz im Text wird verändert, die einzelnen Buchstaben des Textes werden sozusagen durcheinandergewürfelt. Eine besonders einfache Form einer Transpositions-Verschlüsselung ist die bei Kindern beliebte „Revertierung“ (von lateinisch: reverse; deutsch: „umkehren“) eines Textes. So entsteht beispielsweise aus dem Klartext „GEHEIMNIS“ der Geheimtext „SINMIEHEG“.
Bei modernen symmetrischen Verfahren werden Stromverschlüsselung und auf einer Blockverschlüsselung basierende Verfahren unterschieden. Bei der Stromverschlüsselung werden die Zeichen des Klartextes jeweils einzeln und nacheinander verschlüsselt. Bei einer Blockverschlüsselung hingegen wird der Klartext vorab in Blöcke einer bestimmten Größe aufgeteilt. Wie dann die Blöcke verschlüsselt werden, bestimmt der Betriebsmodus der Verschlüsselungsmethode.
Interessanterweise beruhen selbst moderne Blockchiffren, wie beispielsweise das über mehrere Jahrzehnte gegen Ende des 20. Jahrhunderts zum Standard erhobene Verschlüsselungsverfahren DES (Data Encryption Standard) auf den beiden klassischen Methoden Substitution und Transposition. Sie verwenden diese beiden Grundprinzipien in Kombination und beziehen ihre Stärke ganz maßgeblich durch die mehrfache wiederholte Anwendung von solchen Kombinationen nicht selten in Dutzenden von „Runden“. So wird, vergleichbar zum wiederholten Kneten von Teig, der Klartext immer stärker verschlüsselt. Die Stärke der Verschlüsselung steigt zumeist mit der Anzahl der verwendeten Runden.

### Asymmetrische Verschlüsselung

Über Jahrhunderte hinweg war man der Meinung, dass es keine Alternative zur symmetrischen Verschlüsselung und dem damit verknüpften Schlüsselverteilungsproblem gäbe. Erst in den 1970er-Jahren wurde die asymmetrische Verschlüsselung (Public-key cryptography) entwickelt. Kennzeichen der asymmetrischen Verschlüsselung ist, dass zur Verschlüsselung ein völlig anderer Schlüssel als zur Entschlüsselung benutzt wird. Man unterscheidet hier zwischen dem „öffentlichen Schlüssel“, der zum Verschlüsseln benutzt wird, und dem „privaten Schlüssel“ zum Entschlüsseln des Geheimtextes. Der private Schlüssel wird niemals weitergegeben oder gar veröffentlicht, der öffentliche Schlüssel hingegen wird dem Kommunikationspartner übergeben oder veröffentlicht. Er kann dann von jedermann benutzt werden, um Nachrichten zu verschlüsseln. Um diese jedoch entschlüsseln zu können, benötigt man den dazu passenden privaten Schlüssel. Nur damit kann die verschlüsselte Nachricht wieder entschlüsselt werden. Das heißt, noch nicht einmal der Verschlüssler selbst ist in der Lage, seine eigene Nachricht, die er mit dem öffentlichen Schlüssel verschlüsselt hat, wieder zu entschlüsseln.
Das Verfahren kann übrigens auch „umgekehrt“ verwendet werden, indem eine Person ihren privaten Schlüssel nutzt, um damit eine Information zu verschlüsseln. Nun ist jedermann, der Zugriff auf den öffentlichen Schlüssel hat, in der Lage, damit die Nachricht zu entschlüsseln. Hier geht es meist nicht um die Geheimhaltung einer Nachricht, sondern beispielsweise um die Authentifizierung einer Person beziehungsweise die digitale Signatur einer Nachricht. Jedermann kann leicht überprüfen und erkennen, dass die verschlüsselte Information nur von dieser einen Person stammen kann, denn nur diese besitzt den nötigen privaten Schlüssel. Zum Signieren allein genügt es, den Nachrichtentext unverschlüsselt als Klartext zu belassen, und beispielsweise nur eine Prüfsumme davon verschlüsselt anzuhängen. Wenn der öffentliche Schlüssel des Autors beim Entschlüsseln eine korrekte Prüfsumme freilegt, ist sowohl der Autor als auch die Unverfälschtheit der Nachricht bestätigt.
Da asymmetrische Verfahren algorithmisch aufwändiger sind als symmetrische und daher in der Ausführung langsamer, werden in der Praxis zumeist Kombinationen aus beiden, sogenannte Hybrid-Verfahren genutzt. Dabei wird beispielsweise zuerst ein zufällig generierter individueller Sitzungsschlüssel mithilfe eines asymmetrischen Verfahrens ausgetauscht, und dieser anschließend gemeinsam als Schlüssel für ein symmetrisches Verschlüsselungsverfahren benutzt, wodurch die eigentlich zu kommunizierende Information verschlüsselt wird.

## Moderne Anwendungen

### Nachrichtenübertragung in Netzwerken

Eine verschlüsselte Nachricht (z. B. eine E-Mail oder eine Webseite) muss in der Regel über mehrere Stationen übertragen werden. Heute handelt es sich dabei meist um einzelne Computersysteme, das heißt die verschlüsselte Nachricht wird über ein Rechnernetzwerk übertragen. Man unterscheidet dabei zwei grundlegend unterschiedliche Übertragungsweisen.
Bei der Leitungsverschlüsselung wird die Nachricht nur jeweils für den Nachbarrechner verschlüsselt. Dieser entschlüsselt die Nachricht, verschlüsselt sie wiederum (mit einem möglicherweise anderen Verfahren) und schickt sie an seinen Nachbarn – und so weiter bis zum Zielrechner. Der Vorteil dieses Verfahrens besteht darin, dass sich jeweils nur Nachbarrechner auf ein Verschlüsselungsverfahren und verwendete Schlüssel einigen müssen. Darüber hinaus kann diese Übertragungsweise auf einer sehr niedrigen Protokollebene (etwa bereits in der Übertragungs-Hardware) angesiedelt werden. Der Nachteil besteht darin, dass jeder einzelne Rechner auf dem Übertragungsweg vertrauenswürdig und sicher sein muss, da sie die Nachricht im Klartext verarbeiten.
Bei der Ende-zu-Ende-Verschlüsselung hingegen wird die Nachricht vom Absender verschlüsselt und in dieser Form unverändert über mehrere Rechner hinweg zum Empfänger übertragen. Hier hat keiner der übertragenden Rechner Einsicht in den Klartext der Nachricht. Der Nachteil besteht allerdings darin, dass sich der Absender mit jedem möglichen Empfänger auf ein Verschlüsselungsverfahren und zugehörige(n) Schlüssel einigen muss.

### Verschlüsselung von Daten auf Datenträgern

Die Verschlüsselung ganzer Festplatten oder Partitionen wird als Festplattenverschlüsselung bezeichnet. Die Verschlüsselung kann entweder durch eine Software oder durch eine Hardware-Komponente erfolgen. Bei Einsatz einer Verschlüsselungssoftware kann auch ein Datencontainer beliebiger Größe verschlüsselt werden, der als einzelne Datei im Dateisystem gespeichert wird.
Eine Hardware-Verschlüsselung erfolgt automatisch durch ein integriertes Verschlüsselungsmodul und ist für das Betriebssystem transparent. Nach Eingabe eines Passworts durch den Benutzer wird der Schlüssel mittels Schlüsselableitungsfunktion berechnet und in der Regel im Controller des Datenträgers gespeichert, solange dieser in Betrieb ist. Externe Festplatten können zur Erhöhung der Sicherheit über eine physische Tastatur zur Eingabe eines PIN-Codes oder einen Fingerabdruckscanner verfügen.

## Glossar

In der Kryptologie dient eine klare Abgrenzung von Begriffen und eine saubere und konsequent verwendete Fachterminologie zur Erleichterung der Arbeit und zur Vermeidung von Missverständnissen. Im Gegensatz dazu werden umgangssprachlich nicht selten Ausdrücke falsch benutzt und miteinander verwechselt, was zu unnötigen und leicht vermeidbaren Irritationen führen kann. Ein Beispiel ist die unsaubere Verwendung des Begriffs Entschlüsselung, wenn eigentlich Entzifferung gemeint ist.

Alphabet – Eine in der Reihenfolge permutierte geordnete Anordnung von Symbolen, speziell der 26 lateinischen Großbuchstaben (Beispiel: E K M F L G D Q V Z N T O W Y H X U S P A I B R C J)
Brechen
eines Geheimtextes – Anderer Ausdruck für Entziffern
eines Verschlüsselungsverfahrens – Kompromittierung der Sicherheit des Verfahrens, etwa Entwicklung einer Methode zum Entziffern seiner Geheimtexte
Chiffrat – Anderer Ausdruck für Geheimtext
Chiffre – Anderer Ausdruck für Verschlüsselungsverfahren
Chiffrieren – Anderer Ausdruck für Verschlüsseln
Chiffrierung – Anderer Ausdruck für Verschlüsselung
Codebuch – Hilfsmittel bei der Codierung
Codeknacker – Ugs. Ausdruck für Kryptoanalytiker
Codierung – Zumeist feste Zuordnung von Klartextgruppen zu Geheimtextgruppen
Dechiffrat – Text nach Entschlüsselung
Entschlüsseln – Umwandlung des Geheimtextes in den Klartext mithilfe des Schlüssels
Entziffern – Ermitteln des Klartextes aus dem Geheimtext ohne vorherige Kenntnis des Schlüssels
Geheimtext – Durch Verschlüsselung aus dem Klartext erzeugter Text
Handschlüssel – Manuelle Methode zur Verschlüsselung
Involutorisch – Verschlüsselung und Entschlüsselung sind identisch
Klartext – Offener (unverschlüsselter) Wortlaut der Nachricht
Knacken – Ugs. Ausdruck für Entziffern
Kryptoanalytiker – Jemand, der Geheimtexte zu entziffern versucht oder kryptographische Verfahren auf ihre Sicherheit untersucht bzw. versucht, diese zu brechen
Kryptogramm – Anderer Ausdruck für Geheimtext
Maschinenschlüssel – Maschine zur Verschlüsselung
Schlüssel – Geheime Information, die bei der Verschlüsselung verwendet wird bzw. zur Entschlüsselung benötigt wird
Schlüssellänge – Maß für die Anzahl der verschiedenen möglichen Schlüssel
Schlüsseln – Zusammenfassender Begriff für Verschlüsseln und Entschlüsseln
Schlüssler – Person, die Nachrichten ver- oder entschlüsselt
Schlüsselraum – Menge aller möglichen Schlüssel
Schlüsseltafel – Tabellarische Liste von Schlüsseln
Schlüsseltext – Anderer Ausdruck für Geheimtext
Schwache Verschlüsselung – Verschlüsselung, die entziffert werden kann, also gebrochen ist oder gebrochen werden kann
Spruchschlüssel – Mit jeder Nachricht wechselnder Schlüssel
Starke Verschlüsselung – Verschlüsselung, die mit heutigen Kenntnissen und Methoden nicht entziffert werden kann
Tagesschlüssel – Täglich wechselnder Schlüssel
Verschlüsseln – Umwandlung von Klartext in Geheimtext
Verschlüsselungsmaschine – Gerät zur Verschlüsselung
Verschlüsselungsscheibe – Simples Hilfsmittel zur Verschlüsselung
