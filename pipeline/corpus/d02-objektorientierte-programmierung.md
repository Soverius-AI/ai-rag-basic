---
url: https://de.wikipedia.org/wiki/Objektorientierte_Programmierung
---

# Objektorientierte Programmierung

## Überblick

Die objektorientierte Programmierung (kurz OOP) ist ein auf dem Konzept der Objektorientierung basierendes Programmierparadigma. Die Grundidee besteht darin, die Architektur einer Software an den Grundstrukturen desjenigen Bereichs der Wirklichkeit auszurichten, der die gegebene Anwendung betrifft. Ein Modell dieser Strukturen wird in der Entwurfsphase aufgestellt. Es enthält Informationen über die auftretenden Objekte und deren Abstraktionen, ihre Typen. Die Umsetzung dieser Denkweise erfordert die Einführung verschiedener Konzepte, insbesondere Klassen, Vererbung, Polymorphie und spätes Binden (dynamisches Binden).

## Definition

Die Definition, was objektorientierte Programmierung ist und im Kern ausmacht, variiert und ist auch Veränderungen unterworfen.
Alan Kay, der Erfinder der Programmiersprache Smalltalk und des Begriffs „object oriented“, definierte ihn im Kontext von Smalltalk folgendermaßen:

Alan Kay drückte später seine Unzufriedenheit über den von ihm gewählten Begriff „Objektorientierung“ aus, weil dieser aus seiner Sicht den Kernaspekt des Messaging zu kurz kommen ließe.
2003 gab Alan Kay folgende Definition von objektorientierter Programmierung:

Der ISO/IEC-2382-15-Standard von 1999 definiert den Begriff object-oriented dagegen wie folgt:

Die ISO-Definition gilt inzwischen im Allgemeinen als zu vereinfachend, da auch klassenlose objektorientierte Sprachen existieren und auch der Vererbung inzwischen weniger Bedeutung beigemessen wird als noch in den 1990ern.

## Konzepte

Im Vergleich mit anderen Programmiermethoden verwendet die objektorientierte Programmierung neue, andere Begriffe.
Die einzelnen Bausteine, aus denen ein objektorientiertes Programm während seiner Abarbeitung besteht, werden als Objekte bezeichnet. Die Objekte werden dabei in der Regel auf Basis der folgenden Konzepte entwickelt:

Abstraktion
Jedes Objekt im System kann als ein abstraktes Modell eines Akteurs betrachtet werden, der Aufträge erledigen, seinen Zustand berichten und ändern und mit den anderen Objekten im System kommunizieren kann, ohne offenlegen zu müssen, wie diese Fähigkeiten implementiert sind (vgl. abstrakter Datentyp). Solche Abstraktionen sind entweder Klassen (in der klassenbasierten Objektorientierung) oder Prototypen (in der prototypbasierten Programmierung).
Klasse
Die Datenstruktur eines Objekts wird durch die Attribute (auch Eigenschaften) seiner Klassendefinition festgelegt. Das Verhalten des Objekts wird von den Methoden der Klasse bestimmt. Klassen können von anderen Klassen abgeleitet werden (Vererbung). Dabei erbt die Klasse die Datenstruktur (Attribute) und die Methoden von der vererbenden Klasse (Basisklasse).
Prototyp
Objekte werden durch das Klonen bereits existierender Objekte erzeugt und können anderen Objekten als Prototypen dienen und damit ihre eigenen Methoden zur Wiederverwendung zur Verfügung stellen, wobei die neuen Objekte nur die Unterschiede zu ihrem Prototyp definieren müssen. Änderungen am Prototyp werden dynamisch auch an den von ihm abgeleiteten Objekten wirksam.
Datenkapselung
Als Datenkapselung bezeichnet man in der Programmierung das Verbergen von Implementierungsdetails. Auf die interne Datenstruktur kann nicht direkt zugegriffen werden, sondern nur über definierte Schnittstellen. Objekte können den internen Zustand anderer Objekte nicht in unerwarteter Weise lesen oder ändern. Ein Objekt hat eine Schnittstelle, die darüber bestimmt, auf welche Weise mit dem Objekt interagiert werden kann. Dies verhindert das Umgehen von Invarianten des Programms.
Feedback
Verschiedene Objekte kommunizieren über einen Nachricht-Antwort-Mechanismus, der zu Veränderungen in den Objekten führt und neue Nachrichtenaufrufe erzeugt. Dafür steht die Kopplung als Index für den Grad des Feedbacks.
Persistenz
Objektvariablen existieren, solange die Objekte vorhanden sind, und „verfallen“ nicht nach Abarbeitung einer Methode.
Polymorphie (dt. Mehrgestalt)
Fähigkeit eines Bezeichners, abhängig von seiner Verwendung unterschiedliche Datentypen anzunehmen. Verschiedene Objekte können auf die gleiche Nachricht unterschiedlich reagieren. Wird die Art der Reaktion auf die Nachricht erst zur Laufzeit aufgelöst, wird dies auch späte Bindung genannt.
Vererbung
Vererbung heißt vereinfacht, dass eine abgeleitete Klasse die Methoden und Attribute der Basisklasse ebenfalls besitzt, also „erbt“. Somit kann die abgeleitete Klasse auch darauf zugreifen. Neue Arten von Objekten können auf der Basis bereits vorhandener Objektdefinitionen festgelegt werden. Es können neue Bestandteile hinzugenommen werden oder vorhandene überlagert werden.

### Objekte

Objekt (von dt. Ding / Sache)
Ein Element, welches Funktionen, Methoden, Prozeduren, einen inneren Zustand, oder mehrere dieser Dinge besitzt.
Entität
Ein Objekt mit einer eindeutigen Identität zur Speicherung von Daten. Beispiel: Eine Person mit den Daten Adresse, Telefonnummer oder Name. Die Daten können geändert werden, ohne dass die Person ihre Identität verliert. Eine Person ist also eine Entität.
Wertobjekt
Ein Objekt, welches über seinen Wert definiert wird. Eine Telefonnummer, welche sich ändert, ist also eine andere Telefonnummer. Gleichartig ist eine Adresse, bei der sich lediglich die Hausnummer ändert, eine andere Adresse, selbst wenn alle anderen Daten gleich bleiben. Somit stellt eine Telefonnummer und eine Adresse keine Entität dar, sondern ein Wertobjekt.
Eigenschaft
Ein Bestandteil des Zustands eines Objekts. Hierbei kann es sich um eine Entität oder ein Wertobjekt handeln.
Dienst
Ein Objekt, welches ein Verhalten (z. B. eine Geschäftslogik) in Form von Prozeduren, Funktionen oder Methoden implementiert. Der Dienst verwendet hierbei Entitäten oder Wertobjekte.
Prozedur
Verändert den Zustand eines Objektes, ohne einen Rückgabewert zu liefern. Eine Prozedur kann andere Objekte als Parameter entgegennehmen.
Funktion
Ordnet einer gegebenen Eingabe einen bestimmten Rückgabewert zu. Eine Funktion zeichnet sich insbesondere dadurch aus, dass sie nicht den Zustand eines Objekts verändert.
Methode
Verändert den Zustand eines Objekts und liefert zudem einen Rückgabewert. Eine Methode kann andere Objekte als Parameter entgegennehmen.
Modul
Eine zusammengefasste Gruppe von Objekten.

### Klassen

Zur besseren Verwaltung gleichartiger Objekte bedienen sich die meisten Programmiersprachen des Konzeptes der Klasse. Klassen sind Vorlagen, aus denen Instanzen genannte Objekte zur Laufzeit erzeugt werden. Im Programm werden nicht einzelne Objekte, sondern eine Klasse gleichartiger Objekte definiert. Existieren in der gewählten Programmiersprache keine Klassen oder werden diese explizit unterdrückt, so spricht man zur Unterscheidung oft auch von objektbasierter Programmierung.
Man kann sich die Erzeugung von Objekten aus einer Klasse vorstellen wie das Fertigen von Autos aus dem Konstruktionsplan eines bestimmten Fahrzeugtyps. Klassen sind die Konstruktionspläne für Objekte.
Die Klasse entspricht in etwa einem komplexen Datentyp wie in der prozeduralen Programmierung, geht aber darüber hinaus: Sie legt nicht nur die Datentypen fest, aus denen die mit Hilfe der Klassen erzeugten Objekte bestehen, sie definiert zudem die Algorithmen, die auf diesen Daten operieren. Während also zur Laufzeit eines Programms einzelne Objekte miteinander interagieren, wird das Grundmuster dieser Interaktion durch die Definition der einzelnen Klassen festgelegt.
Beispiel
Die Klasse „Auto“ legt fest, dass das Auto vier Reifen einer bestimmten Größe, fünf farbige Türen, einen Motor mit einer bestimmten Leistung und fünf Sitze mit wählbaren Bezügen hat.

Das Objekt „Auto1“ hat vier Reifen mit dem Durchmesser 19 Zoll und der Breite 255 mm, fünf rote Türen, einen Motor mit 150 kW und fünf Ledersitze.
Das Objekt „Auto2“ hat vier Reifen mit dem Durchmesser 19 Zoll und der Breite 255 mm, fünf rote Türen, einen Motor mit 150 kW und fünf Ledersitze.
Ein weiteres Objekt „Auto3“ hat vier Reifen mit dem Durchmesser 16 Zoll und der Breite 205 mm, fünf blaue Türen, einen Motor mit 90 kW und fünf Sitze mit Textilbezug.
Es handelt sich um drei Objekte; zwei davon haben gleiche Attribute. Alle drei sind aber Ausprägungen (Instanzen) der Klasse „Auto“.

#### Methoden bei Klassen

Die einer Klasse von Objekten zugeordneten Algorithmen bezeichnet man auch als Methoden.
Häufig wird der Begriff Methode synonym zu den Begriffen Funktion oder Prozedur aus anderen Programmiersprachen gebraucht. Die Funktion oder Prozedur ist jedoch eher als Implementierung einer Methode zu betrachten. Im täglichen Sprachgebrauch sagt man auch „Objekt A ruft Methode m von Objekt B auf.“
Eine besondere Rolle spielen Methoden für die Kapselung, insbesondere die Zugriffsfunktionen. Spezielle Methoden zur Erzeugung und Zerstörung von Objekten heißen Konstruktoren beziehungsweise Destruktoren.
Methoden können Parameter erhalten, die beim Aufruf übergeben werden müssen, und einen Rückgabewert besitzen, den sie am Ende dem Aufrufer zurückgeben. Beispielsweise hat die Methode addiere die Parameter Zahl 1 und Zahl 2 und gibt als Rückgabewert die Summe der Zahlen zurück.
In vielen objektorientierten Programmiersprachen lässt sich festlegen, welche Objekte eine bestimmte Methode aufrufen dürfen. So wird meist zwischen folgenden vier Zugriffsebenen unterschieden, die bereits zur Übersetzungszeit geprüft werden.

Öffentliche (public) Methoden dürfen von allen Klassen aufgerufen werden.
Geschützte (protected) Methoden dürfen von Klassen im selben Paket und abgeleiteten Klassen aufgerufen werden.
Methoden auf Paket-Ebene können nur von Klassen aufgerufen werden, die sich im selben Paket befinden – diese Zugriffsebene ist nur bei Programmiersprachen vorhanden, die Pakete bzw. Namespaces kennen.
Private Methoden können nur von anderen Methoden derselben Klasse aufgerufen werden.
Analog zu diesen vier Zugriffsebenen sind in der Unified Modeling Language (UML) vier Sichtbarkeiten für Operationen definiert.

#### Attribute

Objekte (Fenster, Schaltflächen, Laufleisten, Menüs, …) besitzen verschiedene Eigenschaften (Farbe, Größe, Ausrichtung, …). Diese Eigenschaften eines Objekts heißen Attribute.

### Polymorphie

Unter bestimmten Voraussetzungen können Algorithmen, die auf den Schnittstellen eines bestimmten Objekttyps operieren, auch mit Objekten davon abgeleiteter Klassen zusammenarbeiten.
Geschieht dies so, dass durch Vererbung überschriebene Methoden an Stelle der Methoden der vererbenden Klasse ausgeführt werden, dann spricht man von Polymorphie. Polymorphie stellt damit eine Möglichkeit dar, einer durch ähnliche Objekte ausgeführten Aktion einen Namen zu geben, wobei jede Klasse die Aktion in einer für das Objekt geeigneten Weise implementiert.
Diese Technik, das sogenannte Overriding, implementiert aber keine universelle Polymorphie, sondern nur die sogenannte Ad-hoc-Polymorphie.

### Terminologie

Die Begriffe der objektorientierten Programmierung haben teilweise unterschiedliche Namen. Folgende Bezeichnungen werden synonym verwendet:

## Objektorientierte Programmiersprachen

Objektorientierte Programmiersprachen unterstützen die Programmstrukturierung mit einem speziellen Datentyp – dem Objekt, der die Objektorientierung ermöglicht. Die rein objektorientierten Sprachen, wie Smalltalk, folgen dem Prinzip: „Alles ist ein Objekt.“ Auch elementare Typen wie Ganzzahlen werden dabei durch Objekte repräsentiert – selbst Klassen sind hier Objekte, die wiederum Exemplare von Metaklassen sind. Die verbreiteten objektorientierten Programmiersprachen, unter anderem C#, C++ und Java, handhaben das Objektprinzip nicht alle so streng. Bei ihnen sind elementare Datentypen keine vollwertigen Objekte, da sie auf Methoden und Struktur verzichten müssen. Sie stellen dem Entwickler auch frei, wie stark er die Kapselung objektinterner Daten einhält.
Die erste bekannte objektorientierte Programmiersprache war Simula-67. Später wurden die Prinzipien der Kapselung in einer Klassenhierarchie dann in Smalltalk weiter ausgebaut. Mit dem ANSI/X3.226-1994-Standard wurde Common Lisp/CLOS zur ersten standardisierten objektorientierten Programmiersprache und mit ISO 8652:1995 wurde Ada 95 als erste nach dem internationalen ISO-Standard normierte objektorientierte Programmiersprache festgelegt.
Gängige moderne Programmiersprachen (z. B. Python) unterstützen sowohl die OOP als auch den prozeduralen Ansatz, der in den klassischen Programmiersprachen der 1970er- und 1980er-Jahre wie Pascal, Fortran oder C vorherrschte. Im Gegensatz dazu setzt Smalltalk, die älteste heute noch bedeutsame OOP-Sprache, auf kompromisslose Objektorientierung und hatte damit starken Einfluss auf die Entwicklung populärer OOP-Sprachen, ohne selber deren Verbreitung zu erreichen, weil keine kostengünstig allgemein verfügbare Implementierung angeboten wurde. Auch wenn der Durchbruch der OOP erst in den 1990er-Jahren stattfand, wurde die objektorientierte Programmierung bereits Ende der 1960er Jahre mit Simula-67 als Lösungsansatz für die Modularisierung und die Wiederverwendbarkeit von Code entwickelt.

## Techniken

### Objekt-Konzepte in Programmiersprachen

In einigen objektorientierten Programmiersprachen wie Go, NewtonScript und Self wird auf die Deklaration von Klassen gänzlich verzichtet. Stattdessen werden neue Objekte von bestehenden Objekten, den sogenannten Prototypen, abgeleitet. Die Attribute und Methoden des Prototyps kommen immer dann zum Einsatz, wenn sie im abgeleiteten Objekt nicht explizit überschrieben wurden. Dies ist vor allem für die Entwicklung kleinerer Programme von Vorteil, da es einfacher und zeitsparend ist.
In manchen Programmiersprachen, beispielsweise in Objective-C, gibt es zu jeder Klasse ein bestimmtes Objekt (Klassenobjekt), das die Klasse zur Laufzeit repräsentiert; dieses Klassenobjekt ist dann auch für die Erzeugung von Objekten der Klasse und den Aufruf der korrekten Methode zuständig.
Klassen werden in der Regel in Form von Klassenbibliotheken zusammengefasst, die häufig thematisch organisiert sind. So können Anwender einer objektorientierten Programmiersprache Klassenbibliotheken erwerben, die zum Beispiel den Zugriff auf Datenbanken ermöglichen.

### Entwurf von Objekt-Konzepten

Die Wortarten einer sprachlichen Problembeschreibung können hilfreiche Hinweise dafür geben, eine Objekt-basierte Modellierung zu konzipieren (sogenannte Verb-Substantiv-Methode). Dabei werden Objekte und Klassen in der Regel sprachlich durch Substantive beschrieben, wobei Eigennamen auf Objekte und Appellative wie Haus und Tier auf Klassen hindeuten. Verben stehen in der Regel für Methoden, wobei Adverbien und Substantive ergänzende Charakterisierungen der Methoden geben können. Die Werte von Objektattributen entsprechen häufig Numeralien oder Adjektiven.
Es gibt inzwischen auch Verfeinerungen der objektorientierten Programmierung durch Methoden wie Entwurfsmuster, Design by contract und grafische Modellierungssprachen wie die Unified Modeling Language.
Einen immer höheren Stellenwert nimmt die aspektorientierte Programmierung ein, bei der Aspekte von Eigenschaften und Abhängigkeiten beschrieben werden. Erste Ansätze sind beispielsweise in Java mit Jakarta EE oder der abstrakten Datenhaltung über Persistenzschichten sichtbar.

## Grenzen der OOP

Das objektorientierte Paradigma hat Vor- und Nachteile je nach Anwendungsfeld in der Softwaretechnik oder konkreter Problemstellung.

### Abbildung von Problemstellungen auf OOP-Techniken

Die OOP kann, wie auch andere Programmierparadigmen, verwendet werden, Probleme aus der realen Welt abzubilden. Als ein typisches Beispiel für Problemstellungen, die sich einer geschickten Modellierung mit OOP-Techniken entziehen, gilt das Kreis-Ellipse-Problem.

### Objektorientierte Programmiersprachen und natürliche Sprachen

Objektorientierte Programmiersprachen können auch unter sprachwissenschaftlichen Aspekten mit natürlichen Sprachen verglichen werden. OO-Programmiersprachen haben ihren Fokus auf den Objekten, welche sprachlich Substantive sind. Die Verben (Aktionen) sind sekundär, fest an Substantive gebunden (gekapselt) und können im Allgemeinen nicht für sich allein stehen. Bei natürlichen Sprachen und z. B. prozeduralen Sprachen existieren Verben eigenständig und unabhängig von den Substantiven (Daten), z. B. als Imperativ und Funktion. Es kann argumentiert werden, dass diese sprachliche Einschränkung in einigen Anwendungsfällen zu unnötig komplizierten Beschreibungen von Problemen aus der realen Welt mit objektorientierten Sprachen führt.

### OOP und Kontrollfluss

Häufig genannte Vorzüge des OOP-Paradigmas sind eine verbesserte Wartbarkeit und Wiederverwendbarkeit des statischen Quellcodes. Hierzu werden jedoch die Kontrollflüsse und das dynamische Laufzeitverhalten den Daten/Objekten im Allgemeinen untergeordnet, abstrahiert und weggekapselt. Die Kontrollflüsse bilden sich nicht mehr für den Entwickler transparent direkt in den Codestrukturen ab (wie z. B. bei prozeduralen Sprachen), eine Umsetzung in dieser Hinsicht wird dem Compiler überlassen. Hardware-nähere Sprachen wie das prozedurale C oder Assembler bilden den echten Kontrollfluss und das Laufzeitverhalten transparenter ab. Mit der wachsenden Bedeutung von paralleler Hardware und nebenläufigem Code wird jedoch eine bessere Kontrolle und Entwickler-Transparenz der komplexer werdenden Kontrollflüsse immer wichtiger – etwas, das schwierig mit OOP zu erreichen ist.

### OOP und relationale Datenbanken

Ein häufig genannter Bereich, in dem OOP-Techniken als unzureichend gelten, ist die Anbindung von relationalen Datenbanken. OOP-Objekte lassen sich nicht direkt in allen Aspekten mit relationalen Datenbanken abbilden. Umgekehrt können über OOP die Stärken und Fähigkeiten von relationalen Datenbanken ebenfalls nicht vollständig ausgeschöpft werden. Die Notwendigkeit, eine Brücke zwischen diesen beiden Konzeptwelten zu schlagen, ist als object-relational impedance mismatch bekannt. Hierzu existieren viele Ansätze, beispielsweise die häufig verwendete objektrelationale Abbildung, jedoch keine allgemeingültige Lösung ohne den einen oder anderen Nachteil.

### Laufzeitverhalten und Energieeffizienz

Die Effektivität des Laufzeitverhaltens von Anwendungen, die auf OOP-Techniken basieren, wird seit jeher kontrovers diskutiert. Alexander Chatzigeorgiou von der Universität Makedonien verglich die Laufzeiteffektivität und die Energieeffizienz von typischen Algorithmen (Gauß-Jordan-Algorithmus, Trapez-Integration und QuickSort) von prozeduralen Ansätzen und OOP-Techniken, implementiert als C- und C++-Software. Auf dem verwendeten ARM-Prozessor ergab sich für drei Algorithmen im Mittel eine um 48,41 % bessere Laufzeiteffektivität mit den prozeduralen C-Algorithmusvarianten. Es ergab sich außerdem eine im Mittel um 95,34 % höhere Leistungsaufnahme der C++-Varianten zu den C-Varianten. Für Anwendungen auf mobilen Geräten, wie Handys oder MP3-Spielern mit begrenzten Leistungs- und Energiespeichervermögen, sind derartige Unterschiede signifikant, allerdings machen derartige Algorithmen in der Regel nur einen Bruchteil der Applikationen aus.
Als Grund für den Unterschied in Effektivität und Energieeffizienz werden in dem Artikel generelle Abstraktions-Leistungseinbußen und die deutlich größere Anzahl von Zugriffen auf den Arbeitsspeicher durch OOP-Techniken genannt.

## Kritik

### Modularisierung und andere Prinzipien nicht ausgereift

Luca Cardelli untersuchte 1996 für das DEC Systems Research Center die Effizienz von OOP-Ansätzen in dem Artikel Bad Engineering Properties of Object-Oriented Languages mit den Metriken Programmablaufgeschwindigkeit (economy of execution), Kompilationsgeschwindigkeit (economy of compilation), Entwicklungseffizienz für große und kleine Teams (economy of small-scale development und economy of large-scale development) und die Eleganz des Sprachumfangs selbst (economy of language features). Er kam zu dem Schluss, dass das objektorientierte Sprachdesign noch viel aus dem prozeduralen Sprachendesign lernen müsste, insbesondere im Bereich der guten Modularisierung, der Datenabstraktion und des Polymorphismus, um die hochgesteckten Erwartungen zu erfüllen.

### Keine Erhöhung der Produktivität gegenüber prozeduralen Ansätzen

Eine Studie von Potok et al. aus dem Jahre 1999 zeigte keine signifikanten Produktivitätsunterschiede zwischen OOP und prozeduralen Ansätzen.
Die Autoren definieren „Produktivität“ in der Einheit „entwickelte/geänderte Programmzeilen pro Zeiteinheit“ und untersuchen insbesondere den Einfluss von Code Reuse auf diese Metrik. Sie weisen darauf hin, dass eine Konzentration auf Code Reuse unter Umständen der objektorientierten Programmierung nicht gerecht wird, da sie sich noch auf andere Weisen positiv auf die Produktivität auswirken könnte (beispielsweise durch ein einfacheres Design).
Die Autoren führen mehrere Gründe an, weshalb die Ergebnisse ihrer Studie verzerrt sein könnten:

Es könnte sein, dass als „objektorientiert“ deklarierte Software in Wirklichkeit prozedural entwickelt wurde.
Sie analysierten nur zwei Generationen objektorientierter Software, was ihrer Aussage nach zu wenig sein könnte.
Es könnte sein, dass die Qualifikation der verschiedenen Entwicklungsteams unterschiedlich war. Insbesondere wäre es möglich, dass die objektorientierte Software von geringer qualifizierten Teams entwickelt wurde.
Die Autoren vertreten die Meinung, diese Punkte träfen nicht zu.
