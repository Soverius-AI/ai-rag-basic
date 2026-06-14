---
url: https://de.wikipedia.org/wiki/Scala_(Programmiersprache)
---

# Scala (Programmiersprache)

## Überblick

Scala ist eine funktionale und objektorientierte Programmiersprache.

## Konzepte

### Integration mit Java

Scala-Programme können Java Archive (umgangssprachlich JAR-Datei) ansprechen und Java-Programme können Scala-Dateien ansprechen. Es können also alle bestehenden Java-Bibliotheken und -Frameworks in Scala-Projekte eingebunden und dort genutzt werden. Umgekehrt ist das zwar prinzipiell möglich, in der Praxis aber nicht immer problemlos. Ähnliches gilt für die meisten Werkzeuge: Entwicklungsumgebungen wie Eclipse, NetBeans oder IntelliJ unterstützen Scala ebenfalls.

### Objektorientierung

Scala ist, anders als Java, eine rein objektorientierte Programmiersprache. Jeder Wert ist ein Objekt. Das gilt auch für primitive Datentypen, ohne dass es zu Performance-Einbußen kommt, denn der vom Compiler erzeugte Bytecode verwendet primitive Datentypen.
Interfaces werden über den Mechanismus der Traits implementiert. Traits bestehen nicht nur aus Definitionen, sie können bereits konkrete Implementierungen von Methoden enthalten. Klassen können einen oder mehrere Traits erweitern (Schlüsselwort extends). Dabei handelt es sich nicht um Mehrfachvererbung, sondern um einen Mixin-Mechanismus.
Über das Schlüsselwort object (anstelle von class) wird eine Implementierung des Entwurfsmusters Singleton bereitgestellt. Statische Felder oder Methoden fehlen in Scala, sie werden stattdessen in einem object definiert.

### Funktionale Sprache

Funktionen sind First-Class-Objekte. Sie können an allen Stellen verwendet werden, an denen Werte erlaubt sind, z. B. Zuweisung an eine Variable (hier ist nicht das Ergebnis der Funktionsauswertung gemeint, sondern die Funktionen selbst) oder bei der Parameterübergabe. Methoden sind selbst aber keine First-Class-Objekte, können aber jederzeit in Funktionen umgewandelt werden. Auch Funktionen höherer Ordnung sind in Scala realisiert, wodurch beispielsweise Currying ermöglicht wird.

#### Pattern Matching

Ein wichtiger Aspekt zur Unterstützung der funktionalen Programmierung mit Scala ist Pattern Matching. Im Gegensatz zu der switch-Anweisung, wie sie zum Beispiel in Java implementiert ist, arbeitet Pattern Matching nicht nur auf der Basis von Werten, sondern auch bezogen auf die Struktur bzw. den Typ eines Objektes. Um auf eine Instanz Pattern Matching anwenden zu können, muss es für sie ein Singleton-Objekt geben, das die unapply-Methode implementiert. So kann man Werte aus der Klasse extrahieren, die entsprechend der unapply-Methode von den Feldern der Klasse abgeleitet werden. Da man oft nur die Felder selbst extrahieren muss, gibt es sogenannte Case Classes in Scala. Bei ihnen generiert der Scala-Compiler automatisch und vom Programmierer unbemerkt ein gleichnamiges Singleton-Objekt mit apply- und unapply-Methode.
Der folgende Code implementiert die Suche in einem binären Suchbaum mithilfe von Pattern Matching und Case Classes:

Beispielaufruf:

#### Closures

Funktionen greifen nicht nur auf ihre Parameter und lokalen Variablen zu, sondern auch auf Variablen ihres Kontextes (Scope), welche zum Auswertungszeitpunkt gültig sind. Dadurch werden aus open terms die namensgebenden closed terms. Falls sich bei mehrfacher Verwendung der Funktion der Wert einer Variablen des Kontextes gegenüber einem früheren Auswertungszeitpunkt ändert, kann sich auch der Rückgabewert und das Verhalten der Funktion ändern.

### Typsystem

Scala ist statisch typisiert.
Generische Klassen verwenden Typen, die zum Entwicklungszeitpunkt noch nicht festgelegt sind, z. B. List[T]
Oberklassen können abstrakte Typen vorgeben, die von deren Unterklassen in Form konkreter Typen spezifiziert werden müssen. Gleiches gilt für Variablen (var und val) sowie Methoden.

#### Kovarianz und Kontravarianz

Typparameter einer generischen Klasse können mit einer Annotation versehen werden, die bestimmt, wie sich Untertyprelationen von Typargumenten auf die Untertyprelation von generischen Instanziierungen der Klasse auswirken. Invarianz, Syntax: K[T], bedeutet, dass überhaupt kein Zusammenhang besteht. Kovarianz, Syntax: K[+T], bedeutet, dass sich die Relation in gleicher Richtung fortsetzt: Wenn T Untertyp von U ist, dann ist K[T] Untertyp von K[U]. Kontravarianz, Syntax: K[-T], bedeutet, dass die Fortsetzung in der Gegenrichtung erfolgt: Wenn T Untertyp von U ist, dann ist K[U] Untertyp von K[T]. Varianzannotationen beeinflussen, an welcher Stelle innerhalb der generischen Klasse der Typparameter benutzt werden darf: Kovariante Typparameter dürfen beispielsweise nicht als Typ von Methodenargumenten verwendet werden, kontravariante nicht als Rückgabetyp.

#### Typinferenz

Typinferenz ist die Fähigkeit des Compilers, den Typ eines Ausdrucks aus dem Kontext herzuleiten, welche unter Syntax beispielhaft dargestellt ist.

### Auswertungsstrategie

Funktionale Ausdrücke werden in Scala strikt ausgewertet. Allerdings kann durch das Schlüsselwort lazy die verzögerte Auswertung (Lazy-Evaluation) von einzelnen Ausdrücken spezifiziert werden. Auch die Collection-Klassen unterstützen mit den Methoden view und force die Möglichkeit der verzögerten Auswertung. Im Gegensatz hierzu werden in Haskell die Programme standardmäßig lazy ausgewertet und es existieren Strictness-Annotationen.

### XML

Scala 2 unterstützt XML mittels Syntax (XML-Literale) und Standardbibliothek. Mit Version 2.13 wurde die XML-Unterstützung aus der Standardbibliothek entfernt und in das eigenständige Projekt scala-xml ausgelagert. Mit Scala 3 wurde auch die Unterstützung für XML-Literale deprecated und wird somit künftig entfernt.
In der scala-xml-Bibliothek sind grundlegende XML-Operationen und -Datentypen verfügbar: XML-Konstruktoren, -Serialisierung und -Deserialisierung, XPath-ähnliche Extraktion von Elementen und Attributen:

### Implicits

Methoden können mittels des Modifiers implicit zu sogenannten implicit methods werden. Wenn der Compiler ein Objekt eines bestimmten Typs A erwartet, aber ein Objekt des inkompatiblen Typs B vorfindet, sucht er im lexikalischen Scope und im companion object von A nach einer implicit method, mit der er das B-Objekt in ein A-Objekt konvertieren kann. Mit dieser Technik lassen sich die aus C# bekannten extension methods nachbilden (das sogenannte pimp my library-Pattern) und in Grenzen sogar Vererbung.
Die letzte Parameterliste einer Methode kann ebenfalls als implicit markiert werden. Wenn die Parameterliste beim Aufruf einer Methode fehlt, aber ein als implicit markierter Wert im lexikalischen Scope zu finden ist, wird er automatisch an die Methode übergeben. Hiermit ist es möglich, die aus Haskell bekannten type classes als Entwurfsmuster nachzubilden. Scalaz, eine Library zur pur funktionalen Programmierung in Scala, setzt Typklassen weiträumig ein.
Mit impliziten Konversionen wird in Scala auch Verhalten in Bibliotheken implementiert, das viele Sprachen als Spezialfall im Compiler abdecken. So zum Beispiel besondere Regeln beim Zusammenfügen von Zeichenketten wie 42 + "etwas Text" oder die Konvertierung von Zahltypen mit kleinerem Wertebereich zu Zahltypen mit größerem Wertebereich, in Java String concatenation operator + bzw. widening primitive conversions genannt.

### Nebenläufigkeit

Während Scala Threads durch die Java-Klassenbibliothek unterstützt, gibt es in Scalas eigener Bibliothek eine Implementierung von Aktoren. Diese wurde von der Aktoren-Implementierung, wie sie in Erlang umgesetzt wurde, inspiriert. Seit der Scala-Version 2.11 ist die ursprüngliche Aktoren-Implementierung nicht mehr Bestandteil der Standardbibliothek. Ersetzt wird sie durch die Akka-Implementierung (ab der Version 2.10 verfügbar).
Zusätzlich implementiert die Standard-Library von Scala Futures und parallele Collections.

## Syntax

Die Syntax der Sprache ist an Java und ML angelehnt. Von Java wurde vor allem eine Reihe von Schlüsselworten sowie die Blocksyntax übernommen, von ML die Syntax für Typannotationen und Deklarationen.
Im Vergleich zur Java-Syntax kann in den meisten Fällen das Semikolon am Ende einer Zeile entfallen. Die Syntax zur Typdefinition von Variablen und Rückgabewerten lehnt sich an der von ML statt von Java an: Man formuliert nicht Typ variable, sondern variable: Typ.
Die Deklaration und Definition von Werten, Variablen und Methoden erfolgt mittels der Schlüsselwörter val, var und def, gefolgt von Typangaben.

Der Compiler leitet den Typ einer Variable aus dem Kontext ab (Typinferenz). Die beiden Zeilen

und

sind somit gleichwertig.
Klassen- und Methodennamen können einen großen Umfang von Zeichen und Symbolen nutzen. Es sind z. B. Bezeichner wie +, *, ::, \\ oder isEmpty_? erlaubt.
Methodenaufrufe mit keinem oder einem Parameter können unter Auslassung des Punktes und der öffnenden und schließenden runden Klammern notiert werden (ähnlich wie in Smalltalk oder Objective-C):

entspricht

Mit Scala ist es außerdem möglich, den Quelltext im Vergleich zu Java in vielen Fällen kompakter zu schreiben, zum Beispiel auf Grund von Typinferenz, for comprehensions oder anonymen Funktionen.

### Operatoren

Für Präfix-Operatoren gibt es eine fest vorgegebene Menge, nämlich +,-,~ und !. Der Ausdruck -x bedeutet das gleiche wie x.unary_-
Postfix-Operator-Ausdrücke sind ebenfalls möglich. Hier gibt es keine Einschränkungen an den Operator, und das Übersetzungsergebnis ist ein Aufruf der (parameterlosen) Methode auf dem Operanden.
Bei Infix-Operatoren entscheidet das erste Zeichen des Operatornamens über Präzedenz und Assoziativität, das den aus der Mathematik üblichen Konventionen folgt. Das Codefragment

wird übersetzt zu

Auf dem Objekt 1 wird die Methode + aufgerufen und dabei der Parameter z.*(x), also das Ergebnis eines weiteren Methodenaufrufes, übergeben.
Endet der Methodenname eines Infixoperators mit einem Doppelpunkt, so vertauscht sich die Reihenfolge von Empfänger und Parameter und der Operator ist rechtsassoziativ:

wird übersetzt zu

### Schleifen

For-Schleifen wurden zu sogenannten for comprehensions soweit generalisiert, dass sie nicht nur mehrere verschachtelte Schleifen zusammenfassen, sondern analog zu Haskells Do-Notation beliebige Monaden nutzen können.
Dieser Code gibt beispielsweise 27 Zeilen für jeden Wert von a, b und c aus.

Eine for comprehension kann auch genutzt werden, um neue Werte zu berechnen, ähnlich wie mit den von Haskell bekannten List Comprehensions. Dieser Code weist combinations eine Liste von vier Paaren zu, nämlich (1,3), (1,4), (2,3) und (2,4):

## Versionen

### Scala 2.8

Wesentliche Neuerungen im Release 2.8 sind:

Überarbeitung der Collection-Library (scala.collection)
Überarbeitung der Array-Implementierung
benannte Argumente und Defaultwerte für Argumente
Delimited Continuations
Erweiterungen für Aktoren-Nebenläufigkeit
Package-Objekte, die Methoden und Werte für ein Package zur Verfügung stellen

### Scala 2.9

Wesentliche Neuerung der Version 2.9 ist die Erweiterung der Collection-Bibliothek um Methoden und Klassen, die Operationen parallel ausführen können (scala.collection.parallel).
Daneben gibt es zahlreiche weitere Verbesserungen:

Verbesserungen an der interaktiven Konsole (REPL genannt), die nun u. a. schneller startet, mehr Tastenkürzel und bessere Tastaturnavigation beherrscht und Klassen dekompilieren sowie Typen, Ausnahmebedingungen (Exceptions) und verfügbare implizite Konversionen anzeigen kann.
Erweiterung von scala.sys um Möglichkeiten, Anweisungen auf der Shell des Betriebssystems auszuführen.
Entfernung einiger als veraltet (deprecated) markierter Klassen und Methoden, wie z. B. in scala.Enumeration und deutlichere Markierung bereits veralteter aber noch nicht entfernter Funktionalität, wie z. B. case-Klassen, die von anderen case-Klassen erben oder der Datenbank-Schnittstelle scala.dbc.

### Scala 2.10

Wesentliche Neuerungen der Version 2.10.0:

neue Implementierung für Pattern Matching
Akka-Aktoren als Standardimplementierung
Value- und Implicit-Klassen
String Interpolation
Reflection (experimentell)
Makros (experimentell)

### Scala 2.11

Die Version 2.11.0 wurde am 17. April 2014 veröffentlicht und ist gegenüber den Vorgängern stärker modularisiert, wodurch die Kern-Standardbibliothek kleiner wird. Zudem wurden Detailverbesserungen im Bereich der Geschwindigkeit gemacht und die nach wie vor experimentellen Bereiche von Makros und Reflection verbessert.

### Scala 2.12

Die Version 2.12.0 wurde am 3. November 2016 veröffentlicht.

### Scala 3.0

Die Version 3.0.0 wurde am 14. Mai 2021 veröffentlicht. Nennenswerte Änderungen umfassen:

ein neues System zur Metaprogrammierung auf Basis von Quotes, Splices und dem Schlüsselwort inline. Dies funktioniert sowohl zur Compilezeit (Macros) wie auch zur Laufzeit
eine neue einrückungsbasierte Syntax als Alternative zu geschweiften Klammern
das Schlüsselwort enum zur Deklaration algebraischer Datentypen
Konstruktorparameter für Trait-Typen
extension methods
Opake Typaliase
Das Schlüsselwort implicit wurde als veraltet markiert und durch die Schlüsselwörter given, using, extension und die Typklasse Conversion ersetzt
Scala-2-Macros werden nicht mehr unterstützt (diese waren in Scala 2 stets als experimentell markiert)

## Bibliotheken und Frameworks

Beliebte Frameworks zur Entwicklung von Web-Applikationen sind Play und Lift. Daneben gibt es viele weitere, meist eher minimalistische Lösungen wie Finatra oder Scalatra.
Frameworks aus der Java-Welt, wie Wicket oder Spring können ebenfalls genutzt werden.
Die Interaktion mit Datenbanken wird durch eine Vielzahl von Bibliotheken ermöglicht, darunter Slick, Squeryl und ScalikeJDBC.
In Java populäre Ansätze, wie die Nutzung von JPA oder JOOQ, sowie die direkte Verwendung von JDBC, sind ebenfalls möglich.
Zur nebenläufigen Programmierung bietet Scalas Standardbibliothek eine Futures & Promises API. Implementierungen des Aktormodells werden u. a. von Akka und Scalaz bereitgestellt.
Darüber hinaus können auch alle Möglichkeiten der Java-Standardbibliothek genutzt werden, z. B. Threads oder java.util.concurrent.*.
Scalaz enthält außerdem viele weitere Konstrukte, welche die funktionale Programmierung in Scala erleichtern.
Scala.js ist ein Projekt, das Scala-Code zu JavaScript-Code kompilieren und Scala somit im Browser ausführbar machen kann.

## IDE- und Werkzeugunterstützung

Neben dem Compiler scalac steht eine Read-Evaluate-Print-Loop (REPL) namens scala zur Verfügung. Für die IDEs Eclipse, NetBeans und IntelliJ existieren Plugins.
Für den Erstellungsprozess unterstützt Scala u. a. Ant und Maven, stellt aber auch ein eigenes Werkzeug, SBT zur Verfügung.

## Verwendung

Scala hat mittlerweile Anwendung in der Industrie gefunden. Die sozialen Netzwerke Twitter und LinkedIn haben ihre Nachrichten-Warteschlangen in Scala implementiert.
Weitere Verwendung findet die Sprache etwa in Unternehmen wie Novell, Siemens, Sony oder Électricité de France Trading.

## Namensherkunft

Der Name leitet sich von „scalable language“ ab und bringt zum Ausdruck, dass der sehr kompakt gehaltene Sprachkern die Möglichkeit bietet, häufig verwendete Sprachelemente wie z. B. Operatoren oder zusätzliche Kontrollstrukturen in Benutzerklassen zu implementieren und dadurch den Sprachumfang zu erweitern und eigene domänenspezifische Sprachen (englisch domain-specific language, DSL) zu erstellen.

## Beispiele

Ein Hello, World!-Programm in Scala:

Eine generische Implementierung des Quicksort-Algorithmus mit Context Bounds:

## Geschichte

Scala wird im Labor für Programmiermethoden an der École polytechnique fédérale de Lausanne in der Schweiz unter der Leitung von Martin Odersky entwickelt.
Martin Odersky arbeitete unter Niklaus Wirth an Modula-2 und Oberon. Von 1995 an entwickelte er zusammen mit Philip Wadler die inzwischen aufgegebene Programmiersprache Pizza, die Java um Generics, Funktionszeiger und Pattern Matching erweiterte. Später konzentrierten sich Wadler und Odersky mit Generic Java (GJ) auf Generics für Java, dieses Projekt führte 2004 zur Einführung von Generics in Java. Ab 1999 arbeitete Martin Odersky an der École polytechnique fédérale de Lausanne, wo er an der Verbindung funktionaler und objektorientierter Programmierung forschte und die minimalistische Hybridsprache Funnel entwickelte. Hier begann er 2001 mit der Entwicklung von Scala, die im Gegensatz zu Funnel nicht rein akademischem Interesse dienen sollte, sondern als vollwertige Sprache für reale Anwendungen ausgelegt war. Im Frühjahr 2004 wurde Scala für die Java-Plattform veröffentlicht, im Juni 2004 für das .Net-Framework.
Seit Anfang 2011 wird die Weiterentwicklung der Sprache vom European Research Council finanziell gefördert. Damit sollen insbesondere die Möglichkeiten der parallelen Programmierung ausgebaut werden.
Am 12. Mai 2011 gab Martin Odersky den Start von Typesafe bekannt; ein Unternehmen, das sich dem kommerziellen Support von Scala im Allgemeinen sowie dem Middleware Framework Akka widmet. Zu den Beratern gehören James Gosling und Doug Lea.
