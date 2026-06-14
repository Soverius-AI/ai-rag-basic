---
url: https://de.wikipedia.org/wiki/Datenstruktur
---

# Datenstruktur

## Überblick

In der Informatik und Softwaretechnik ist eine Datenstruktur ein Objekt, welches zur Speicherung und Organisation von Daten dient. Es handelt sich um eine Struktur, weil die Daten in einer bestimmten Art und Weise angeordnet und verknüpft werden, um den Zugriff auf sie und ihre Verwaltung effizient zu ermöglichen.
Datenstrukturen sind nicht nur durch die enthaltenen Daten charakterisiert, sondern vor allem durch die Operationen auf diesen Daten, die Zugriff und Verwaltung ermöglichen und realisieren.

## Erklärung

Die Festlegung (Definition) von Datenstrukturen erfolgt im Allgemeinen durch eine exakte Beschreibung (Spezifikation) zur Datenhaltung und der dazu nötigen Operationen. Diese konkrete Spezifikation legt das allgemeine Verhalten der Operationen fest und abstrahiert damit von der konkreten Implementierung der Datenstruktur.
Wird der Schwerpunkt der Betrachtung nicht auf die konkrete Implementierung der Operationen verschoben, so wird anstelle des Begriffs Datenstruktur auch häufig von einem abstrakten Datentyp gesprochen. Der Übergang von der Datenstruktur zu einem abstrakten Datentyp ist dabei nicht klar definiert, sondern hängt einzig von der Betrachtungsweise ab. Mit Blick auf den oft veränderlichen Speicherbedarf vieler Datenstrukturen wird dann auch von dynamischen Datentypen gesprochen, denen technisch eine dynamische Speicherverwaltung zugrunde liegt.
Von den meisten Datenstrukturen gibt es neben ihrer Grundform viele Spezialisierungen, die eigens für die Erfüllung einer bestimmten Aufgabe spezifiziert wurden. So sind beispielsweise B-Bäume als Spezialisierung der Datenstruktur Baum besonders gut für Implementierungen von Datenbanken geeignet.
Bei vielen Algorithmen hängt der Ressourcenbedarf, also sowohl die benötigte Laufzeit als auch der Speicherplatzbedarf, von der Verwendung geeigneter Datenstrukturen ab.

## Grundlegende Datenstrukturen

Die folgenden Datenstrukturen sind in der Regel für die klassische imperative Programmierung entwickelt und optimiert worden. Andere Programmierparadigmen wie die funktionale Programmierung können durchaus andere Datenstrukturen erfordern.

### Datensatz

Datensätze (auch 'Tupel') sind die einfachsten Datenstrukturen. Sie verkörpern üblicherweise in einer fest definierten Anzahl und Folge Werte, die andere Werte enthalten. Datensätze identifizieren sich meist durch eines oder mehrere der in ihnen enthaltenen Elemente, oft Datenfeld genannt.

### Array

Das Array (auch Feld) ist die einfachste verwendete Datenstruktur. Es werden hierbei mehrere Variablen vom selben Basisdatentyp gespeichert. Ein Zugriff auf die einzelnen Elemente wird über einen Index möglich. Technisch gesehen entspricht dieser dem Wert, der zu der Startadresse des Arrays im Speicher addiert wird, um die Adresse des Objektes zu erhalten. Die einzigen notwendigen Operationen sind das indizierte Speichern und das indizierte Lesen, die auf jedes Element des Arrays direkt zugreifen können. Im eindimensionalen Fall wird das Array häufig als Vektor und im zweidimensionalen Fall als Tabelle oder Matrix bezeichnet. Arrays sind aber keinesfalls nur auf zwei Dimensionen beschränkt, sondern werden beliebig mehrdimensional verwendet. Wegen ihrer Einfachheit und grundlegenden Bedeutung bieten die allermeisten Programmiersprachen eine konkrete Umsetzung dieser Datenstruktur als zusammengesetzten Datentyp Array im Grundsprachumfang an.
Ein Beispiel für die Verwendung von Arrays ist die Speicherung von Noten in einem Notenheft. Angenommen, wir haben ein Notenbuch mit Platz für 10 Noten. Wir können Arrays verwenden, um diese Noten effizient zu speichern. Jede Note wird anhand ihres Index im Array gespeichert.

#### Zuordnungstabelle

Einen Sonderfall bildet die Zuordnungstabelle (auch assoziatives Array oder Schlüssel-Wert-Paar), bei dem nicht über einen numerischen Index, sondern über einen Schlüssel auf die gespeicherten Daten zugegriffen wird. Eine mögliche Art, ein assoziatives Array zu implementieren, ist die Hashtabelle.

#### Menge

Einen weiteren Sonderfall bildet die Menge. Sie ist ungeordnet. Es kann nicht mittels Index oder Schlüssel auf konkrete Werte zugegriffen werden. Die Menge entspricht einer Zuordnungstabelle mit Schlüsseln, die nur einmalig vorkommen können, aber ohne Werte.

### Verbund

Ein Verbund (oder englisch Record) ist ein Datentyp, der aus einem oder mehreren Datentypen zusammengesetzt wurde.

### (Verkettete) Liste

Die (verkettete) Liste ist eine Datenstruktur zur dynamischen Speicherung von beliebig vielen Objekten. Dabei beinhaltet jedes Listenelement einer verketteten Liste als Besonderheit einen Verweis auf das nächste Element, wodurch die Gesamtheit der Objekte zu einer Verkettung von Objekten wird. Die zu einer Liste gehörenden Operationen sind relativ unspezifiziert. Sie werden oft in komplizierteren Datenstrukturen verwendet und statt über Operationen wird dort aus Effizienzgründen meist direkt auf ihre Elemente zugegriffen. Die in Programmbibliotheken angebotenen Listen sind in ihrer zugrunde liegenden Datenstruktur meist viel komplexer und stellen nicht selten gar keine echten Listen dar, geben sich nach außen aber als solche aus. Listen sind stets lineare Strukturen. Werden Vorgänger und Nachfolger bidirektional verkettet, so spricht man von einer doppelt-verketteten Liste.

### Warteschlange

In einer Warteschlange (englisch queue) kann eine beliebige Anzahl von Objekten gespeichert werden, jedoch können die gespeicherten Objekte nur in der gleichen Reihenfolge wieder gelesen werden, wie sie gespeichert wurden. Dies entspricht dem FIFO-Prinzip.
Für die Definition und damit die Spezifikation der Queue ist es unerheblich, welche Objekte in ihr gespeichert werden. Zu einer Queue gehören zumindest die Operationen

enqueue, um ein Objekt in der Warteschlange zu speichern und
dequeue, um das zuerst gespeicherte Objekt wieder zu lesen und aus der Warteschlange zu entfernen.
Eine Warteschlange wird gewöhnlich als verkettete Liste implementiert, kann intern aber auch ein Array verwenden; in diesem Fall ist die Anzahl der Elemente begrenzt.

#### Stapelspeicher

In einem Stapelspeicher (englisch stack) kann eine beliebige Anzahl von Objekten gespeichert werden, jedoch können die gespeicherten Objekte nur in umgekehrter Reihenfolge wieder gelesen werden. Dies entspricht dem LIFO-Prinzip. Für die Definition und damit die Spezifikation des Stapelspeichers ist es unerheblich, welche Objekte in ihm gespeichert werden. Zu einem Stapelspeicher gehören zumindest die Operationen

push, um ein Objekt im Stapelspeicher abzulegen und
pop, um das zuletzt gespeicherte Objekt wieder zu lesen und vom Stapel zu entfernen.
(top oder peek, um das oberste Element zu lesen, ohne es zu löschen)
Die top-Operation ist nicht zwingend vorgeschrieben, wird aber oft implementiert, um pop/push zu ersetzen, da es oft interessant ist, das oberste Element zu „testen“. Ein Stapelspeicher wird gewöhnlich als Liste implementiert, kann aber auch ein Vektor sein.
Ein  Beispiel für die Verwendung von Stapeln ist die Verlaufsfunktion des Browsers. Wenn wir im Internet surfen und verschiedene Websites besuchen, werden die besuchten Seiten normalerweise in der Verlaufsliste gespeichert.

#### Deque

Bei der Deque (Double-ended queue) handelt es sich um eine Datenstruktur ähnlich der Warteschlange oder des Stapelspeichers. Es kombiniert die Eigenschaften beider Datenstrukturen. Der Unterschied besteht darin, dass die Daten an beiden Enden gelesen, eingefügt oder entfernt werden können.

#### Vorrangwarteschlange

Eine Spezialisierung der Warteschlange ist die Vorrangwarteschlange, die auch Prioritätswarteschlange bzw. engl. Priority Queue genannt wird. Dabei wird vom FIFO-Prinzip abgewichen. Die Durchführung der enqueue-Operation, die in diesem Fall auch insert-Operation genannt wird, sortiert das Objekt gemäß einer gegebenen Priorität, die jedes Objekt mit sich führt, in die Vorrangwarteschlange ein. Die dequeue-Operation liefert immer das Objekt mit der höchsten Priorität. Vorrangwarteschlangen werden meist mit Heaps implementiert.

### Graph

Ein Graph ermöglicht es als Datenstruktur die Unidirektionalität der Verknüpfung zu überwinden. Die Operationen sind auch hier das Einfügen, Löschen und Finden eines Objekts. Die bekannteste Repräsentation von Graphen im Computer sind die Adjazenzmatrix, die Inzidenzmatrix und Adjazenzliste. Planare Graphen lassen sich mittels Half-Edge-Datenstruktur abbilden.

### Baum

Bäume sind spezielle Formen von Graphen in der Graphentheorie. Als Datenstruktur werden meist nur Out-Trees verwendet. Dabei können ausgehend von der Wurzel mehrere gleichartige Objekte miteinander verkettet werden, sodass die lineare Struktur der Liste aufgebrochen wird und eine Verzweigung stattfindet. Da Bäume zu den meist verwendeten Datenstrukturen in der Informatik gehören, gibt es viele Spezialisierungen.
So beträgt bei Binärbäumen die Anzahl der Kinder höchstens zwei und in höhen-balancierten Bäumen gilt zusätzlich, dass sich die Höhen des linken und rechten Teilbaums an jedem Knoten nicht zu sehr unterscheiden.
Bei geordneten Bäumen, insbesondere Suchbäumen, sind die Elemente in der Baumstruktur geordnet abgelegt, sodass man schnell Elemente im Baum finden kann. Man unterscheidet hier weiter in binäre Suchbäume mit AVL-Bäumen (darunter Fibonacci-Bäume) als balancierte Version und B-Bäumen sowie einer Variante, den B*-Bäumen. Spezialisierungen von B-Bäumen sind wiederum 2-3-4-Bäume, welche oft als Rot-Schwarz-Bäume implementiert werden.
Nicht sortiert, aber „verschachtelt“ sind geometrische Baumstrukturen wie der R-Baum und seine Varianten. Hier werden nur diejenigen Teilbäume durchsucht, die sich mit dem angefragten Bereich überlappen.
Bäume sind in ihrem Aufbau zwar mehrdimensional jedoch in der Verkettung der Objekte oft unidirektional. Die Verkettung der gespeicherten Objekte beginnt bei der Wurzel des Baums und von dort in Richtung der Knoten des Baums.

### Heap

Der Heap (auch Halde oder Haufen) vereint die Datenstruktur eines Baums mit den Operationen einer Vorrangwarteschlange. Häufig hat der Heap neben den minimal nötigen Operationen wie insert, remove und extractMin auch noch weitere Operationen wie merge oder changeKey. Je nach Reihenfolge der Priorität in der Vorrangwarteschlange wird ein Min-Heap oder ein Max-Heap verwendet. Weitere Spezialisierungen des Heap sind der Binäre Heap, der Binomial-Heap und der Fibonacci-Heap. Heaps werden meistens über Bäume aufgebaut.

#### Treap

Der Treap vereinigt Eigenschaften von Bäumen („Trees“) und Heaps in sich.

### Hashtabelle

Die Hashtabelle bzw. Streuwerttabelle ist eine spezielle Indexstruktur, bei der die Speicherposition direkt berechnet werden kann. Hashtabellen stehen dabei in Konkurrenz zu Baumstrukturen, die im Gegensatz zu Hashtabellen alle Indexwerte in einer Ordnung wiedergeben können, aber einen größeren Verwaltungsaufwand benötigen, um den Index bereitzustellen. Beim Einsatz einer Hashtabelle zur Suche in Datenmengen spricht man auch vom Hashverfahren. Bei sehr großen Datenmengen kann eine verteilte Hashtabelle zum Einsatz kommen.

## Speicher- und Rechenaufwand von Datenstrukturen
