---
url: https://de.wikipedia.org/wiki/Cascading_Style_Sheets
---

# Cascading Style Sheets (CSS)

## Überblick

Cascading Style Sheets (englische Aussprache [kæsˌkeɪdɪŋˈstaɪlʃiːts]; für ‚gestufte Gestaltungsbögen‘; kurz CSS) ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Web. Sie ist ein sogenannter living standard („lebendiger Standard“) und wird vom World Wide Web Consortium (W3C) beständig weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungssprachen HTML und XML (zum Beispiel bei SVG) eingesetzt werden.

## Grundlagen

CSS wurde entworfen, um Darstellungsvorgaben weitgehend von den Inhalten zu trennen. Wenn diese Trennung konsequent vollzogen wird, werden nur noch die inhaltliche Gliederung eines Dokumentes und die Bedeutung seiner Teile in HTML oder XML beschrieben, während mit CSS gesondert davon, vorzugsweise in separaten CSS-Dateien, die Darstellung der Inhalte festgelegt wird (z. B. Layout, Farben und Typografie). Gab es anfangs nur einfache Darstellungsanweisungen, so wurden im Verlauf komplexere Module hinzugefügt, mit denen z. B. Animationen und für verschiedene Ausgabemedien verschiedene Darstellungen definiert werden können.
Elemente eines Dokumentes können aufgrund verschiedener Eigenschaften identifiziert werden. Dazu zählen neben dem Elementnamen (z. B. a für alle Hyperlinks), ihrer ID und ihrer Position innerhalb des Dokumentes (z. B. alle Bildelemente innerhalb von Linkelementen) auch Details wie Attribute (z. B. alle Linkelemente, deren href-Attribut mit www.example.com beginnen) oder die Position in einer Menge von Elementen (z. B. jedes ungerade Element einer Liste). Mit CSS-Anweisungen können für jede solcher Elementgruppen Vorgaben für die Darstellung festgelegt werden. Diese Festlegungen können zentral erfolgen, auch in separaten Dateien, sodass sie leichter für andere Dokumente wiederverwendet werden können. Außerdem enthält CSS ein Vererbungsmodell für Auszeichnungsattribute, das die Anzahl erforderlicher Definitionen vermindert.
Mit CSS können für verschiedene Ausgabemedien (Bildschirm, Papier, Projektion, Sprache) unterschiedliche Darstellungen vorgegeben werden. Das ist nützlich, um z. B. die Verweisadressen von Hyperlinks beim Drucken aufzuführen, und um für Geräte wie PDAs und Mobiltelefone, die kleine Displays oder eine geringe Bildauflösung haben, Darstellungen anzubieten, die schmal genug und nicht zu hoch sind, um auf solchen Geräten lesbar zu bleiben.
CSS ist die Standard-Stylesheet-Sprache im World Wide Web. Früher übliche, darstellungsorientierte HTML-Elemente wie font oder center gelten als „veraltet“ (englisch obsolete), das heißt, sie sollen in Zukunft aus dem HTML-Standard entfernt werden. So gelten diese unter anderem seit HTML 4 (1997) als „unerwünscht“ und mit HTML5 als missbilligt (englisch deprecated).

## Geschichte und Versionen

### Anfänge

Einen ersten Vorschlag für Web-Stylesheets gab es 1993, mehrere weitere folgten bis 1995. Am 10. Oktober 1994 veröffentlichte Håkon Wium Lie, ein Mitarbeiter von Tim Berners-Lee am CERN, den ersten Vorschlag für „Cascading HTML style sheets“, die er später abgekürzt als „CHSS“ bezeichnete. Bert Bos arbeitete zu dieser Zeit an der Implementierung eines Browsers namens Argo, der seine eigene Stylesheet-Sprache benutzte. Die beiden entschieden sich, CSS gemeinsam zu entwickeln. Es gab zu dieser Zeit auch andere Sprachen mit dem gleichen Ziel, die Erfinder von CSS brachten aber als erste die Idee auf, Regeln zu definieren, die über mehrere Stylesheets hinweg und innerhalb eines einzigen Stylesheets darüber entscheiden, welche CSS-Formatierung auf das betreffende Element angewendet werden soll.
Nach der Präsentation von CSS durch Lie auf der Konferenz „Mosaic and the Web“ in Chicago 1994 und später mit Bos 1995 wurde das World Wide Web Consortium (W3C) auf CSS aufmerksam. Lie und Bos arbeiteten mit anderen Mitgliedern in diesem Rahmen an CSS weiter. Im Dezember 1996 wurde die CSS Level 1 Recommendation publiziert.

### CSS2

CSS Level 2 (CSS2) wurde im Mai 1998 veröffentlicht. Bis Anfang 2010 wurde diese Empfehlung allerdings von keinem verbreiteten Webbrowser vollständig umgesetzt. Bereits ab 2002 hat das W3C an der überarbeiteten Version CSS Level 2 Revision 1 (CSS 2.1) gearbeitet. Die Erfahrungen mit CSS2 wurden hier aufgenommen, Unstimmigkeiten korrigiert und manche Teiltechniken gestrichen, die in verschiedenen Browsern nicht korrekt umgesetzt worden waren. Grundlegend neue Fähigkeiten wurden nicht eingebaut. Am 7. Juni 2011 wurde CSS 2.1 als fertige Empfehlung (Recommendation) veröffentlicht. 2014 verarbeiteten die meisten Webbrowser CSS 2.1 weitgehend korrekt, nur wenige Teiltechniken wurden nicht vollständig unterstützt. Im April 2016 wurde der erste öffentliche Arbeitsentwurf von CSS 2.2 veröffentlicht.

### CSS3

Seit 2000 ist CSS Level 3 in der Entwicklung. Hier werden die Entwicklungen weiter vorangetrieben, die bereits mit CSS2 begonnen wurden. CSS3 wird im Gegensatz zu den Vorgängern modular aufgebaut sein, womit einzelne Teiltechniken (beispielsweise Steuerung der Sprachausgabe oder Selektoren) in eigenen Versionsschritten entwickelt werden können. So nähert sich CSS bei seinen Fähigkeiten mehr dem etablierten DSSSL (für SGML) an und wird wohl auch in Zukunft noch eine Alternative zu XML-basierten Stylesheet-Sprachen wie XSL-FO sein. Derzeit veröffentlichte und breit unterstützte Standards sind unter anderem CSS Color Level 3, CSS Namespaces, Selectors Level 3 und Media Queries. Neben diesen Modulen stehen weitere Elemente zur Diskussion, etwa ein Layout-Modul und verschiedene Grafikfilter. Moderne Browser unterstützten im Jahr 2014 bereits viele CSS3-Module, obwohl nur für wenige Teile bereits eine Empfehlung (Recommendation) durch das W3C vorgelegen hatte. Im Laufe der Zeit gab es immer mehr Funktionen für CSS, sowie Empfehlungen vom W3C.
Im Frühjahr 2012 wurde berichtet, das W3C arbeite bereits an einem Nachfolger von CSS3, der mit der Versionsnummer 4 veröffentlicht werden solle. Im September 2012 haben Vertreter der CSS-Arbeitsgruppe des W3C jedoch klargestellt, dass es keine Versionsnummer 4 geben soll: “There will never be a CSS4”. Vielmehr soll die künftige Entwicklung des Standards darin bestehen, dass die einzelnen CSS-Module unter eigenen Versionsnummern weiterentwickelt werden können, während der Gesamtstandard den Namen CSS3 oder einfach CSS behalten soll.

## Syntax

### Der Aufbau von CSS-Anweisungen

Eine CSS-Anweisung (englisch rule) gibt an, dass für festgelegte Teile eines Dokuments eine Kombination von bestimmten Eigenschaften gelten soll. Geschrieben wird sie als eine durch Kommata getrennte Aufzählung von Selektoren („Für diese Typen von Teilen …“), gefolgt in geschweiften Klammern von einer semikolongetrennten Liste von Eigenschafts-Deklarationen („… nimm die folgenden Eigenschaften!“). Jede Eigenschaftsdeklaration besteht aus der Bezeichnung der Eigenschaft, einem Doppelpunkt und dem Wert, den sie annehmen soll. Nach der letzten Eigenschaftsdeklaration ist vor der schließenden geschweiften Klammer ein abschließendes Semikolon erlaubt, aber nicht notwendig.
Um diese Teile einer Anweisung herum ist Leerraum frei verwendbar. Häufig schreibt man den Doppelpunkt ohne Zwischenraum hinter den Eigenschaftsnamen, jede Eigenschaftsdeklaration in eine eigene Zeile und schließt auch die letzte Eigenschaft mit einem Semikolon. So kommt es bei späteren Änderungen weniger leicht zu Syntaxfehlern. Sollte es dennoch zu Syntaxfehlern kommen, eignet sich ein CSS-Validator, um Fehler zu beheben.
Ein Stylesheet darf beliebig viele solcher Anweisungen enthalten. Die folgende Tabelle enthält eine vollständige Übersicht aller Selektoren, mit denen Elemente (meist HTML-Elemente) ausgewählt werden können.

### Selektoren

Ein Selektor nennt die Bedingungen, die auf ein Element zutreffen müssen, damit der nachfolgende Satz an CSS-Deklarationen mit seinen Darstellungsvorgaben auf das Element angewendet wird. Solche Bedingungen beschreiben eindeutig, welche Eigenschaften (Typ, Klasse, ID, Attribut oder Attributwert) Elemente haben müssen oder in welchem Kontext sie im Dokument stehen müssen (Existenz eines bestimmten übergeordneten Elementes oder eines Vorgängerelementes bestimmten Typs), damit die Darstellungsvorgaben für sie gelten sollen. In einem Selektor können mehrere Auswahlkriterien verknüpft sein.

#### Beispiel

CSS-Code:

HTML-Code:

Die HTML-Tags <p> und </p> definieren den dazwischen stehenden Text als einen Absatz. Diesem wird die Klasse „info“ mit ihren CSS-Darstellungsvorgaben zu Schrifttyp, Rahmen etc. zugewiesen. Von einem CSS-kompatiblen Browser wird der Absatz daher folgendermaßen dargestellt:

Hier werden die Deklarationen allen p-Elementen zugewiesen, die das class-Attribut mit dem Wert info besitzen. Ohne das p im Selektor wären alle Elemente der Klasse info betroffen, ohne das .info wären alle p-Elemente betroffen. span-Elemente innerhalb solcher Absätze werden in Fettschrift dargestellt; dahinter wird mit dem Pseudoelement ::after ein Doppelpunkt erzeugt.
Ein wichtiges Prinzip von CSS ist die Vererbung der Eigenschaftswerte an untergeordnete Elemente und das Kombinieren verschiedener Stylesheets, wobei die letzte Eigenschaftsdeklaration für ein Element vorher getroffene Deklarationen der gleichen Eigenschaft mit anderem Wert für dieses Element überschreibt. Diese können aus verschiedenen Quellen stammen: vom Autor des Stylesheets, vom Browser (User Agent) oder vom Benutzer. Dabei werden zuerst die Angaben vom Browser, dann die vom Benutzer und schließlich die vom Autor umgesetzt.

### Layouts mit CSS erstellen

In den Anfängen der Web-Entwicklung wurden komplexe Layouts häufig mithilfe des <table>-Elements umgesetzt. Dabei wird die ganze Website als Tabelle strukturiert, deren Spalten, Zeilen und Zellen den eigentlichen Inhalt enthalten. Auch können Tabellen verschachtelt werden. Nachteile dieser Methode sind vor allem eine geringe Gestaltungsfreiheit und ungünstige Darstellung auf Geräten mit kleinem Display (siehe Responsive Webdesign).
Mittlerweile unterstützen alle gängigen Webbrowser ausgefeiltere Möglichkeiten und CSS-Anweisungen, um weitaus kreativere Layouts umzusetzen. Im Kontext von HTML-E-Mails findet diese Methode jedoch immer noch Anwendung, da unter anderem Microsoft Outlook viele gängige CSS-Eigenschaften nicht unterstützt.
Auf modernen Webseiten werden mittlerweile vor allem zwei Eigenschaften verwendet:

Flexbox (display: flex) erlaubt es, HTML-Elemente innerhalb eines Elements beliebig zu positionieren und nebeneinander liegende Elemente auf z. B. mobilen Geräten umzubrechen.
Grid (display: grid) erlaubt es, HTML-Elemente in Bereiche zu unterteilen; diese Bereiche in ihrer Größe und Position zu definieren und innenliegende Elemente in diesen beliebig zu platzieren.

### Längeneinheiten

Für die Gestaltung eines Layouts müssen Komponenten zueinander geometrisch ausgerichtet werden. Als Hilfsmittel stehen in CSS Längeneinheiten zur Verfügung. Im Laufe der Entwicklung von CSS haben sich deren Interpretationen allerdings geändert, da manche an technische Realisierungen (etwa von Monitoren) oder Annahmen darüber geknüpft waren. In der aktuellen Interpretation wird wie folgt zwischen absoluten und relativen Längeneinheiten unterschieden:

Absolute Längeneinheiten haben Bezug zu physikalischen Längeneinheiten (wie Zentimeter und Zoll), sind aber keineswegs mit ihnen identisch, entgegen einer häufigen Irrmeinung. Man kann beispielsweise nicht mehr davon ausgehen, dass eine CSS-Längenangabe von 1cm einer tatsächlichen Länge von 1 cm auf dem Bildschirm entspricht. Analog motivierte Längeneinheiten sind „in“ („inch“) und „pt“ („point“). Zu den absoluten Längeneinheiten gehört aber auch „px“ („pixel“), welche wiederum nicht einem echten Bildschirmpixel entspricht, sondern nur aus historischen Gründen so heißt. Die Einheit „px“ wurde mehrfach uminterpretiert, teilweise sind heute noch veraltete Definitionen zu finden, selbst in W3C-Dokumenten. Was heute zumindest festgelegt ist, sind die Beziehungen der absoluten Längeneinheiten untereinander, inklusive „px“, wobei die wichtigsten sind:1in = 2.54cm = 25.4mm = 96px = 72pt und 4px = 3pt.Eine exakte Zuordnung dieser Längeneinheiten zu physikalischen Längen ist nicht mehr möglich, aber als Anhaltspunkt kann man sagen, dass ein durchschnittlicher Laptop-Bildschirm eine Breite von 1200 bis 1500 CSS „px“ hat, unabhängig von der echten Auflösung.
Relative Längeneinheiten können Bezug nehmen auf

die Größen übergeordneter Elemente (in Prozent, „%“),
die Größe des Bildschirms, und
die Größen der Schrift und des Schriftsatzes.
Die Einheiten „em“, „rem“, „lh“, „rlh“, „ch“, „rch“ nehmen Bezug zu Größen des Schriftsatzes:

1lh entspricht der (berechneten) Zeilenhöhe des aktuellen Elements.
1rlh entspricht der (berechneten) Zeilenhöhe des Wurzel-Elements.
1em entspricht der Schrift-Blockhöhe („Schriftgröße“ = der minimal sinnvolle Zeilenabstand) des aktuellen Elements. (Zu beachten ist, dass es sich bei der „Schriftgröße“ trotz der Bezeichnung nicht um die Höhe bestimmter Glyphen handelt.)
1rem entspricht der Schrift-Blockhöhe des Wurzel-Elements.
1ch entspricht der Breite des Zeichens der Null („0“) im aktuellen Font.
1rch entspricht der Breite des Zeichens der Null („0“) im Wurzel-Font.

## Browserkompatibilität

Die verschiedenen Browser unterscheiden sich stark im Umfang der unterstützten Eigenschaften und den Standarddarstellungen verschiedener HTML-Elemente. Dadurch entstehen Probleme für den Entwickler, da er nicht alle Funktionen im vollen Ausmaß nutzen kann und darauf achten muss, dass sich die Website in den einzelnen Browsern nicht zu stark unterscheidet. Es gibt verschiedene Möglichkeiten, dieses Problem zu lösen:

Ein Reset-Stylesheet kann genutzt werden, um die verschiedenen CSS-Standardeinstellungen zurückzusetzen und danach eigene Regeln für die Elemente zu deklarieren.
Conditional Comments sind HTML-Kommentare, die nur vom Internet Explorer verstanden werden. Das erleichtert die Optimierung für diesen Browser enorm, da er viele Funktionen und Eigenschaften nicht unterstützt.
Browserpräfixe werden genutzt, um Funktionen bei älteren Versionen der Browser zu verwenden. Diese wurden in den entsprechenden Versionen nur getestet und erst später als Standard implementiert. Zudem gibt es Funktionen, die nur in bestimmten Browsern verfügbar sind.
Eine weitere Methode sind CSS-Hacks. Diese verwenden CSS-Syntax, um Schwächen der Browser bei der Gestaltung von Weblayouts auszunutzen.

### CSS-Hacks

CSS-Hacks werden benutzt, um Unterschiede bei der Darstellung von Weblayouts in verschiedenen Browsern auszugleichen oder CSS-Anweisungen für bestimmte Webbrowser gesondert zuzuweisen bzw. auszuschließen. Der Begriff Hack bezeichnet dabei nichtstandardisierte CSS-Befehle, mit denen die Interpretationsschwäche eines Webbrowsers ausgenutzt wird, der diese Anweisungen entweder interpretiert oder ignoriert. Damit können Schwachstellen von Webbrowsern ausgeglichen werden, um möglichst in jedem Webbrowser das gleiche Ergebnis angezeigt zu bekommen.
Ein CSS-Hack kombiniert z. B. fehlerhaft angegebene Selektoren mit zusätzlichen Zeichen oder enthält Anweisungen, die bestimmte Webbrowser nicht kennen. Ein bekanntes Beispiel für einen CSS-Hack ist der sogenannte Star-HTML-Hack. Das *-Zeichen dient als Universal-Selektor und ist vor dem Selektor html sinnlos.
CSS-Code-Beispiel:

In diesem Fall würden zunächst alle Browser die p-Elemente mit einem blauen Hintergrund darstellen. Lediglich der Internet Explorer vor Version 7 interpretiert auch die zweite Zeile und färbt die Absätze rot, obwohl <html> kein Eltern-Element besitzt, auf das * zutreffen könnte.

## Kombination mit HTML oder XHTML

Am häufigsten wird CSS mit HTML oder XHTML kombiniert. Das kann an mehreren Orten geschehen, hier einige Beispiele:

Als externes Stylesheet für eine (X)HTML-Datei (link-Element)

Als externes Stylesheet für eine XHTML-Datei (xml-stylesheet-Verarbeitungsanweisung)

Als internes Stylesheet in einer (X)HTML-Datei (style-Element)

Innerhalb von (X)HTML-Tags (style-Attribut)

Die Einbindung als externes Stylesheet ist dabei die am häufigsten verwendete Methode. Sie bietet den Vorteil, dass für mehrere Dokumente, die denselben Regelsatz benutzen, das Stylesheet nur einmal heruntergeladen werden muss. Auch vermeidet man so sich wiederholenden Code. CSS selbst ermöglicht durch den @import-Befehl das Einbinden von weiteren externen Stylesheets.

Es gibt drei Varianten, Stylesheets mit einem link-Element einzubinden. Sie unterscheiden sich darin, wie zwingend die Stylesheets berücksichtigt werden:

Dauerhafte Stylesheets (persistent)
Wenn man ein Stylesheet so einbindet, wird es auf jeden Fall verwendet.
Bevorzugte Stylesheets (preferred)
Sollte man diese Einbindung verwenden, wird das Stylesheet verwendet, bis der Benutzer ein anderes auswählt.
Alternative Stylesheets (alternate)

Wird das Stylesheet so mit dem HTML-Dokument verknüpft, muss der Benutzer ausdrücklich wählen, es zu verwenden. Das wirkt sich in den meisten Browsern aus (z. B. Internet Explorer, Firefox, Opera und Konqueror). Somit wird diese Funktion von den meist benutzten Browsern implementiert. Außerdem sollte ein „alternate stylesheet“ nur in Verbindung mit einem anderen, fest eingebundenen verwendet werden, damit es auch nur eine echte Alternative ist.
Alternativ ist es auch möglich, das Stylesheet dynamisch mittels JavaScript einzubinden, dabei kann es jedoch passieren, dass der Inhalt während des Ladevorgangs für kurze Zeit noch ohne den Stil dargestellt wird, was als Flash of Unstyled Content störend auffallen kann.

## Spezifische Stylesheets

Um spezifische Geräte oder Eigenschaften anzusprechen, gibt es in CSS besondere Attribute. Seit CSS2 können ausgewählte Geräte angesprochen werden mit medienspezifischen Stylesheets und seit CSS3 nur Geräte mit bestimmten Eigenschaften, beispielsweise der Bildschirmbreite, mit eigenschaftsspezifischen Stylesheets (Media Queries). Media Queries sind vor allem für responsives Webdesign wichtig.

### Medienspezifische Stylesheets

Es ist möglich, verschiedene Stylesheets für verschiedene Medien einzubinden, um zum Beispiel die Gestaltung beim Drucken oder auf Handy-Displays zu regulieren. Diesen Zweck erfüllt das Attribut media. In diesem Attribut werden die Parameter notiert, die für dieses Stylesheet gelten sollen.

Beispiel für einen @media-Befehl innerhalb einer CSS-Datei

Durch mehrere @media-Befehle lassen sich innerhalb einer CSS-Datei oder eines <style>-Blocks verschiedene Ausgabegeräte ansprechen.

Beispiel für ein media-Attribut beim Einbinden einer CSS-Datei

Beispiel für ein media-Attribut eines <style>-Blocks

Da viele moderne Smartphones den Typ handheld nicht unterstützen und stattdessen die Stilvorgaben von screen nutzen, ist man hier auf „Eigenschaftsspezifische Stylesheets“ (Media Queries) angewiesen.

### Eigenschaftsspezifische Stylesheets (Media Queries)

Bei Media Queries handelt es sich um ein Konzept, welches mit CSS3 eingeführt wurde und das Prinzip des Medientyps in CSS2 erweitert. Anstatt starr zu definieren, welches Medium das Zielmedium ist, können mit Media Queries die Eigenschaften des aktuellen Gerätes direkt abgefragt werden. Verfügbare Geräteeigenschaften sind zum Beispiel:

Breite und Höhe des Browserfensters
Breite und Höhe des Gerätes
Orientierung (Quer- oder Hochformat)
Bildschirmauflösung
Vor allem im Bereich der mobilen Webprogrammierung werden Media Queries bereits jetzt häufig eingesetzt, um die Webseite ideal an das aktuell verwendete Gerät anzupassen.
Im folgenden Beispiel werden Elemente mit CSS-Anweisungen versehen. Diese Anweisungen gelten für das gesamte Dokument. Anschließend wird eine Media Query eingesetzt, die greift, sobald die Breite des Browserfensters kleiner als 1025 Pixel ist. In diesem Fall ändern sich die Eigenschaften, die vorher allgemein definiert wurden, bzw. es gelten zusätzliche Eigenschaften.

## Sicherheitsrisiken durch CSS

Es ist möglich, CSS auch ohne zusätzliche Verwendung von JavaScript oder anderen Skriptsprachen zum Tracken von Nutzern oder zum Abfangen von Daten, die in Webformulare eingetragen werden (beispielsweise Passwörter), zu verwenden. Software-Keylogger, die nur aus CSS-Anweisungen bestehen, sind mit wenigen Zeilen Code realisierbar.
