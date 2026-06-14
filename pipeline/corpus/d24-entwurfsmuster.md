---
url: https://de.wikipedia.org/wiki/Entwurfsmuster
---

# Entwurfsmuster (Softwareentwicklung)

## Überblick

Entwurfsmuster (englisch design patterns) sind bewährte Lösungsschablonen für wiederkehrende Entwurfsprobleme sowohl in der Architektur als auch in der Softwarearchitektur und -entwicklung. Sie stellen damit eine wiederverwendbare Vorlage zur Problemlösung dar, die in einem bestimmten Zusammenhang einsetzbar ist. In den letzten Jahrzehnten hat der Ansatz der Entwurfsmuster auch zunehmendes Interesse in weiteren Bereichen gefunden, beispielsweise in der Mensch-Computer-Interaktion, dem Webdesign und dem Game-Design sowie der Pädagogik und Didaktik, insbesondere dem E-Learning. Ursprünglich wurde der Begriff in der Architektur von Christopher Alexander verwendet.

## Arten von Entwurfsmustern

Es gibt verschiedene Typen von Entwurfsmustern. Ursprünglich wurden folgende Typen vom Autorenquartett Gang of Four (GoF) unterschieden:

Erzeugungsmuster (Creational Patterns)
Dienen der Erzeugung von Objekten. Sie entkoppeln die Konstruktion eines Objekts von seiner Repräsentation. Die Objekterzeugung wird gekapselt und ausgelagert, um den Kontext der Objekterzeugung unabhängig von der konkreten Implementierung zu halten, gemäß der Regel: „Programmiere auf die Schnittstelle, nicht auf die Implementierung!“
Strukturmuster (Structural Patterns)
Erleichtern den Entwurf von Software durch vorgefertigte Schablonen für Beziehungen zwischen Klassen.
Verhaltensmuster (Behavioral Patterns)
Modellieren komplexes Verhalten der Software und erhöhen damit die Flexibilität der Software hinsichtlich ihres Verhaltens.
Später kamen noch weitere Typen für diejenigen Entwurfsmuster, die in keine der drei genannten Typen passten, hinzu. Darunter beispielsweise:

Muster für objektrelationale Abbildung
Dienen der Ablage und dem Zugriff von Objekten und deren Beziehungen in einer relationalen Datenbank.
Nachrichtenübermittlungsmuster (Messaging Patterns)
Für die Erstellung, die Weiterleitung und die Umwandlung von Daten in Form von Nachrichten, inklusive der dazu benötigten Nachrichtenkanäle und Nachrichtenendpunkte, sowie Komponenten für die Systemverwaltung.

## Geschichte

Ein Ansatz für Entwurfsmuster wurde vom Architekten Christopher Alexander 1964 in Notes on the synthesis of form dargestellt. Zwischen 1977 und 1979 stellte er dann (in einer auf Vitruv zurückgehenden Tradition) eine Sammlung von Entwurfsmustern zusammen. Die Hauptaufgabe dieser Muster war es, die Bewohner der zu bauenden Strukturen in den Entwurfsprozess mit einzubinden. In der Architektur hat sich diese Idee jedoch bei weitem nicht so verbreitet wie später in der Softwareentwicklung.
Kent Beck und Ward Cunningham griffen 1987 die Ideen Alexanders aus der Architektur auf und entwickelten Entwurfsmuster für die Erstellung von grafischen Benutzeroberflächen in Smalltalk. Ein Jahr später begann Erich Gamma mit seiner Promotion an der Universität Zürich über die generelle Übertragung dieser Methode auf die Softwareentwicklung. Parallel dazu arbeitete James Coplien in den Jahren 1989 bis 1991 an musterähnlichen Idiomen für C++ und veröffentlichte 1991 sein Buch Advanced C++ Idioms.
Erich Gamma beendete im selben Jahr seine Promotion und ging im Anschluss in die Vereinigten Staaten. Dort brachte er 1994 zusammen mit Richard Helm, Ralph Johnson und John Vlissides das Buch Design Patterns – Elements of Reusable Object-Oriented Software heraus, in dem 23 Entwurfsmuster beschrieben sind. Die vier Autoren sind unter Entwicklern weltweit auch unter ihrem Spitznamen Gang of Four (Viererbande), kurz GoF, bekannt und verhalfen mit ihrem Buch den Entwurfsmustern zu einem Durchbruch. Gelegentlich wird GoF auch als Verweis auf das besagte Buch verwendet. Anders als Alexander, der seine Muster vor allem für Laien geschrieben hatte, richten sich die GoF-Muster an Softwareentwickler und nicht an Benutzer.

## Anforderungen und Nutzen

Ein gutes Muster sollte:

ein oder mehrere Probleme lösen,
ein erprobtes Konzept bieten,
auf realen Designs basieren,
mehr Vorteile als Nachteile aufweisen
über das rein Offensichtliche hinausgehen,
den Benutzer in den Entwurfsprozess einbinden,
Beziehungen aufzeigen, die tiefergehende Strukturen und Mechanismen eines Systems umfassen.
Entwurfsmuster beinhalten in der Regel Referenzen auf andere Muster. Mithilfe dieser ist es möglich, Mustersprachen zu entwickeln.
Der primäre Nutzen eines Entwurfsmusters liegt in der Beschreibung einer Lösung für eine bestimmte Klasse von Entwurfsproblemen. Weiterer Nutzen ergibt sich aus der Tatsache, dass jedes Muster einen Namen hat. Dies vereinfacht die Diskussion unter Entwicklern, da man abstrakt über eine Struktur sprechen kann. So sind etwa Software-Entwurfsmuster – im Gegensatz zu Idiomen – zunächst einmal unabhängig von der konkreten Programmiersprache.
Wenn der Einsatz von Entwurfsmustern dokumentiert wird, ergibt sich ein weiterer Nutzen dadurch, dass durch die Beschreibung des Musters ein Bezug zur dort vorhandenen Diskussion des Problemkontextes und der Vor- und Nachteile der Lösung hergestellt wird.

## Nachteile

Der erfolgreiche Einsatz von Entwurfsmustern in der Vergangenheit kann dazu verleiten, die Entwurfsmuster als Wunderwaffe und Garant für gutes Design anzusehen. Unerfahrene Entwickler können geneigt sein, möglichst viele bekannte Muster zu verwenden, und dabei übersehen, dass in ihrem Fall vielleicht eine elegantere Lösung ohne den Einsatz von Mustern möglich wäre. Entwurfsmuster garantieren nicht, dass der Entwurf gut ist. Insofern ist die Anwendung zu vieler oder ungeeigneter Entwurfsmuster ein Antimuster.

## Musterkataloge

Entwurfsmuster werden üblicherweise nach dem Vorbild der Bücher von Christopher Alexander und der Gang of Four in sogenannten Musterkatalogen (englisch „Design Pattern Catalogs“) gesammelt. Diese beschreiben die einzelnen Muster katalogartig anhand ihrer Eigenschaften. Diese Eigenschaften sind beispielsweise beim Buch Design Patterns – Elements of Reusable Object-Oriented Software folgende: Aufgabe, Andere Namen, Motivation, Anwendbarkeit, Struktur, Teilnehmer, Kollaborationen, Konsequenzen, Implementierung, Beispielcode, bekannte Verwendungen, verwandte Muster.
Neben dem Entwurfsmusterkatalog der Gang of Four mit den oben genannten Erzeugungsmustern, Strukturmustern und Verhaltensmustern, gibt es eine Reihe weiterer Kataloge. Zu diesen zählen die Bücher Enterprise Integration Patterns, Patterns of Enterprise Application Architecture, Pattern-Oriented Software Architecture, Volume 1, A System of Patterns, Refactoring To Patterns sowie die Core J2EE Patterns. (Siehe dazu auch Abschnitt Literatur unten.)

### Liste von Mustern

Die folgende Liste enthält Entwurfsmuster der Gang of Four, funktionale Verhaltensmuster von Stuart Sierra sowie andere Entwurfsmuster aus anderen Katalogen. Die ersten drei Abschnitte stellen die Teilmengen dar, in die die Entwurfsmuster im Buch Design Patterns kategorisiert wurden. Der vierte Abschnitt enthält Muster für die objektrelationale Abbildung die insbesondere von Martin Fowler geprägt wurden. Der fünfte Abschnitt enthält Entwurfsmuster für die Kommunikation zwischen Anwendungen, die von Gregor Hope und Bobby Woolf im Buch Enterprise Integration Patterns beschrieben wurden. Der sechste Abschnitt enthält Entwurfsmuster, die sich in keine der ersten fünf Abschnitte einordnen lassen. Die Liste ist nicht vollständig und überschneidet sich teilweise mit Architekturmustern.

## Andere Arten von Mustern

Die Arbeiten der Gang of Four haben viele Autoren zu weiteren Veröffentlichungen angeregt. Daraus entstand auch die Problematik, dass ein Muster sich nicht mehr ohne weiteres als Entwurfsmuster klassifizieren lässt. Vielmehr gibt es graduelle Unterschiede in der Granularität von Mustern. So wird etwa das Model-View-Controller-Muster (MVC) manchmal als Architekturmuster, manchmal als Entwurfsmuster eingesetzt.
Beispiele für Muster, die keine Entwurfsmuster sind:

Analysemuster charakterisieren typische Fälle der Anforderungsanalyse.
Architekturmuster beschreiben typische Softwarearchitekturen.
Idiome sind unterhalb der Ebene des Entwurfs bei der Programmierung auftretende Muster.
Kommunikationsmuster beziehen sich auf die Kommunikationswege zwischen Personen einer Organisation.
Organisationsmuster beschreiben Elemente der Strukturen von Organisationen.
Antimuster beschreiben, „wie man es nicht machen sollte.“
Integrationsmuster beschreiben die Kommunikation zwischen unterschiedlichen Systemen, bzw. zwischen Komponenten innerhalb eines Systems.
SOA-Muster beschreiben den Aufbau serviceorientierter Architekturen.
Didaktische Muster für Dokumentation und Klassifikation von Lösungen wiederkehrender Probleme in Lehr-/Lernsituationen.

## Antimuster

Wo Entwurfsmuster in der Software-Entwicklung allgemein übliche und bekannte Lösungsansätze sind, um Probleme zu lösen, so sind Antimuster Negativ-Beispiele von bereits durchgeführten Lösungen, die Hinweise darauf geben, welche Fehler vermieden werden sollten.
Nachdem bei der Softwareentwicklung immer mehr von positiven Erfahrungen von erfolgreich abgeschlossenen Aufgabenstellungen profitiert wurde, konzentrierte man sich auch darauf, die Negativbeispiele, also wiederkehrende Fehler bei der Software-Entwicklung, zu identifizieren und zu dokumentieren.
