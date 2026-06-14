---
url: https://de.wikipedia.org/wiki/Document_Object_Model
---

# Document Object Model (DOM)

## Überblick

Das Document Object Model (DOM, engl. für Dokumenten-Objekt-Modell) ist eine Spezifikation einer Programmierschnittstelle, welche HTML- oder XML-Dokumente als eine Baumstruktur darstellt, in der jeder Knoten ein Objekt ist, welches einen Teil des Dokumentes repräsentiert, z. B. einen Absatz, eine Überschrift, ein Video oder etwa eine Tabellenzelle. Die Schnittstelle ist plattform- und programmiersprachenunabhängig und erlaubt damit standardisiert, die Struktur und das Layout eines Dokumentes zu verändern. Im Webbrowser bildet dies einen wichtigen Baustein für dynamische Webseiten.
Das DOM wurde ursprünglich vom World Wide Web Consortium spezifiziert, heutzutage ist die autoritative Quelle die WHATWG. Den Veränderungen in der Standardisierung liegt zugrunde, dass Standards oftmals nachträglich definiert wurden, während Webbrowser bereits Implementierungen enthielten.
Seit dem Ende der sogenannten Browser-Wars hat sich der Ansatz etabliert, die Standardisierung in offiziellen Dokumenten und die Implementierung in verbreiteten Web-Browsern zu parallelisieren, in der Praxis also die endgültige Standardisierung der Implementierung nachzuordnen.
Eine Implementierung, die der DOM-Spezifikation genügt, besteht im Sinne der objektorientierten Programmierung aus einem Satz von Klassen zusammen mit deren Methoden und Attributen, wobei es eine Dualität zwischen Attributen in serialisierten Dokumenten und Eigenschaften im DOM gibt. Dies nennt sich auch "Attribute reflection".

## Geschichte

DOM ist ursprünglich unter dem Einfluss von mindestens zwei Entwicklungen entstanden, die seit der Jahrtausendwende die Entwicklung von Web-Dokumenten und Webbrowsern prägten. Beiden liegt die Notwendigkeit zugrunde, auf die strukturierten Daten in HTML- und XML-Dokumenten einfach und einheitlich zugreifen zu können.
Mitte der 1990er Jahre, als das World Wide Web an Popularität zunahm, wurde die Skriptsprache JavaScript erfunden und gängige Webbrowser enthielten seitdem Interpreter, die solche Scripte ausführen. JavaScript definierte rudimentäre Möglichkeiten zum Zugriff auf das HTML-Dokument und zur Ereignisbehandlung. Später erfanden verschiedene Browserhersteller unterschiedliche Modelle für dynamisches HTML (DHTML), die eine umfassendere Änderung der Struktur und des Aussehens des Dokuments ermöglichten, während das Dokument im Browser angezeigt wird. Diese Unterschiede machten allerdings die Arbeit für Webentwickler, welche dynamisches HTML nutzen wollten, zu einer äußerst mühsamen Angelegenheit, da sie oft praktisch gezwungen waren, für jeden zu unterstützenden Browser eine eigene Version zu schreiben. Die ersten DOM-Standards des W3C sind daher Versuche, die verschiedenen proprietären JavaScript- und DHTML-Techniken, die während der Zeit der Browserkriege entstanden, zusammenzuführen, zu standardisieren und letztlich abzulösen. Dies ist so weit gelungen, dass DOM heutzutage eine zentrale Bedeutung bei der JavaScript-Programmierung einnimmt.
Gleichzeitig entstand XML als allgemeines Austauschformat zur menschenlesbaren Darstellung von strukturierten Daten, das an den Erfolg von HTML anknüpfte. Zur Verarbeitung von XML-Dokumenten war eine verständliche, leistungsfähige und programmiersprachenübergreifende Schnittstelle nötig. DOM bietet eine solche und definiert darüber hinaus zusätzliche Schnittstellen für einen komfortablen Umgang mit XML-Dokumenten.

## Grundlagen anhand eines Beispiels

Folgender HTML-Code definiert eine Tabelle mit dem Element table und verschiedenen Unterelementen:

So sieht es im Browser aus:

Das DOM repräsentiert das table-Element und dessen Unterelemente in der folgenden Baumstruktur:

An diesem Beispiel lässt sich der prinzipielle Aufbau des Objektmodells diskutieren: Dokumente werden logisch wie ein Stammbaum dargestellt. Knoten (nodes) stehen über „Verwandtschaftsbeziehungen“ zueinander in Verbindung.

### Arten von Beziehungen

Die vorliegende Struktur wird im Objektmodell durch die folgenden Beziehungen charakterisiert:

Der Wurzelknoten (root) table hat als Kinder (children) die Elementknoten thead und tbody.
Der table-Elementknoten ist umgekehrt ein Elternteil (parent) von thead und tbody.
Knoten mit gemeinsamem Elternteil (zum Beispiel die beiden th-Elementknoten) werden Geschwister (siblings) genannt.
Ausgehend von einem beliebigen Knoten ist jeder andere Knoten über diese Verwandtschaftsbeziehungen erreichbar.

### Arten von Knoten

Die wichtigsten Knotentypen in DOM sind:

Ein Dokumentknoten stellt die gesamte Baumstruktur dar.
Ein Dokumentfragmentknoten stellt einen Teil der Baumstruktur dar.
Ein Elementknoten entspricht exakt einem Element in HTML oder XML.
Ein Attributknoten entspricht exakt einem Attribut in HTML oder XML.
Ein Textknoten stellt den Textinhalt eines Elements dar.
Attributknoten sind eine besondere Knotenart, denn sie kommen nicht als Knoten in der Baumstruktur vor, die vor allem durch Elementknoten gebildet wird. Attributknoten sind demnach keine „Kinder“ von Elementknoten, sondern Eigenschaften von ihnen.

### Verarbeitung eines Dokuments

Im ersten Schritt wird ein bestehendes Dokument durch das Programm eingelesen und ein Dokument-Objekt erzeugt. Anhand dieses Objekts kann mittels der Methoden des API auf die Inhalte, Struktur und Darstellung zugegriffen werden.
Insbesondere erlaubt DOM

die Navigation zwischen den einzelnen Knoten eines Dokuments,
das Erzeugen, Verschieben und Löschen von Knoten sowie
das Auslesen, Ändern und Löschen von Textinhalten.
Am Ende der Verarbeitung kann aus dem Dokument-Objekt durch so genannte Serialisierung ein neues XML- oder HTML-Dokument generiert werden.

## Standardisierung

DOM ist seit 1998 ein Standard des W3C und wurde seitdem mehrfach aktualisiert und erweitert. Es existieren mehrere Versionen (Levels) jeweils mit verschiedenen Modulen:

### DOM Level 0

Dieses Level wurde nie formal spezifiziert. Level 0 bezeichnet die mittels JavaScript nutzbaren Techniken zum Zugriff auf HTML-Dokumente. Diese wurden von Webbrowsern wie Internet Explorer und Netscape Navigator vor der Standardisierung von DOM eingeführt.

### DOM Level 1

Veröffentlicht Ende 1998.

DOM Core (DOM-Kern) definiert das Bewegen im DOM-Baum, die Manipulation der Knoten, inklusive des Einfügens neuer Elemente und des Setzens von Attributen.
DOM HTML ist die Erweiterung zum Zugriff auf HTML-Dokumente. Es standardisiert und vervollständigt die bereits verbreitete Praxis, die auf den JavaScript-Spezifikationen von Netscape bzw. Microsoft JScript basiert.

### DOM Level 2

Veröffentlicht Ende 2000.

DOM Core: u. a. Erweiterung um XML-Namensraum-Unterstützung
DOM HTML: u. a. Ausweitung auf XHTML-Dokumente, Anpassung an DOM 2 Core
DOM Style und DOM CSS ermöglichen das dynamische Auslesen, Hinzufügen und Ändern der Formatierung bzw. des Layouts des Dokuments über Stylesheets, insbesondere Cascading Style Sheets (CSS).
DOM Views erlaubt den Zugriff auf Informationen konkreter Wiedergabearten des Dokuments (zum Beispiel der grafischen Darstellung im Webbrowser). Das wird vor allem zusammen mit DOM CSS benutzt, um die tatsächlichen CSS-Eigenschaftswerte von gewissen Elementen in Erfahrung zu bringen (z. B. „Welche Hintergrundfarbe hat diese Überschrift?“).
DOM Events standardisiert die Verarbeitung von Ereignissen im Dokument, zum Beispiel Benutzeraktionen. Wird vor allem im Zusammenhang mit JavaScript bei der Darstellung von HTML-Dokumenten in Webbrowsern verwendet. Angelehnt an die Modelle der Ereignis-Behandlung des Netscape Navigators und des Internet Explorers für HTML-Dokumente.
DOM Traversal und DOM Range: Durchlaufen des Knotenbaums anhand von bestimmten Auswahlkriterien, Arbeiten mit Bereichen im Dokument, die bestimmte Elemente und Textknoten umfassen

### DOM Level 3

Veröffentlicht April 2004.

DOM 3 Core: umfassende Erweiterung, u. a. verbesserte Ausnahmebehandlung und Umgang mit Zeichenkodierungen
DOM 3 Load and Save ermöglicht die Serialisierung von Dokumenten oder Dokumentteilen sowie das Parsen von XML-Dokumenten in Zeichenketten in Dokument-Objekte. Zudem können XML-Dokumente über HTTP versendet und abgerufen werden, wie es mit der bekannteren XMLHttpRequest-Technik möglich ist.
DOM 3 XPath erlaubt das Auswählen von Knoten anhand von XPath-Ausdrücken.
DOM 3 Events erweitert DOM 2 Events u. a. um Tastatur-Ereignisse.
DOM 3 Validation erlaubt das Prüfen, ob nach einer dynamischen Änderung (Hinzufügen oder Entfernen von Knoten) das DOM-Dokument valide bleibt.
DOM 3 Views and Formatting erlaubt es, dynamisch auf den Inhalt, Struktur und Style zuzugreifen und diese zu ändern.
DOM 3 Abstract Schemas
