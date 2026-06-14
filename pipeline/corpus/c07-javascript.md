---
url: https://de.wikipedia.org/wiki/JavaScript
---

# JavaScript

## Überblick

JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML zu erweitern. Heute wird JavaScript auch außerhalb von Browsern angewendet, etwa auf Servern und in Microcontrollern.
Der heutige Name der ursprünglich LiveScript genannten Sprache entstand 1996 aus einer Kooperation von Netscape mit Sun Microsystems. Deren Java-Applets, erstellt mit der gleichfalls 1995 veröffentlichten Programmiersprache Java, wurden mithilfe von LiveScript in den Netscape Navigator integriert. Um die Popularität von Java zu nutzen, wurde LiveScript in JavaScript umbenannt, obwohl die beiden Sprachen voneinander unabhängig entwickelt wurden und völlig unterschiedliche Grundkonzepte aufweisen.
Der als ECMAScript (ECMA 262) standardisierte Sprachkern von JavaScript beschreibt eine dynamisch typisierte, objektorientierte, aber klassenlose Skriptsprache. Sie wird allen objektorientierten Programmierparadigmen unter anderem auf der Basis von Prototypen gerecht, deren Deklaration ab ECMAScript 6 mit einer Syntax ermöglicht wird, wie sie ähnlich auch bei klassenbasierten Programmiersprachen üblich ist. In JavaScript lässt sich je nach Bedarf objektorientiert, prozedural oder funktional programmieren.

## Entwicklung

Die Syntax von JavaScript ähnelt C-Abkömmlingen. Trotz der Namens- und syntaktischen Ähnlichkeit hat JavaScript nur geringe Gemeinsamkeiten mit Java. So wird in JavaScript Vererbung nicht durch Klassen, sondern durch Prototypen unterstützt.
JavaScript wurde früher hauptsächlich clientseitig eingesetzt. JavaScript bzw. die ECMAScript-Implementierungen ermöglichen aber beispielsweise mit dem Framework Node.js und als JScript bzw. JScript .NET in einer ASP- bzw. ASP.NET-Umgebung auf Microsoft Internet Information Services auch serverseitige Anwendungen. Weitere Beispiele für serverseitige JavaScript-Programmierung sind POW und Jaxer, die auf der Mozilla-JavaScript-Engine SpiderMonkey aufsetzen, V8CGI, welches auf der JavaScript-Implementierung V8 aufbaut und in den Apache HTTP Server integriert wird, sowie QML, eine erweiterte Form von JavaScript zum Zeichnen von Oberflächen und Animationen.
Die Sprache wird auch als Skriptsprache für Spiele und Anwendungsprogramme eingesetzt, da der Sprachkern nur wenige Objekte enthält und dadurch der zur Ausführung von in JavaScript formulierten Skripten erforderliche Interpreter relativ klein gehalten werden kann.
Außerdem wird JavaScript als Verkehrssprache in der Datenbank MongoDB sowie in Microcontrollern eingesetzt.

## Verwendung

### Typische Anwendungsgebiete

Typische Anwendungsgebiete von JavaScript im Webbrowser sind:

dynamische Manipulation von Webseiten über das Document Object Model
Plausibilitätsprüfung (Datenvalidierung) von Formulareingaben noch vor der Übertragung zum Server
Anzeige von Dialogfenstern
Senden und Empfangen von Daten, ohne dass der Browser die Seite neu laden muss (Ajax)
Vorschlagen von Suchbegriffen während der Eingabe
Werbebanner oder Laufschriften
Verschleierung von E-Mail-Adressen zur Bekämpfung von Spam
mehrere Frames auf einmal wechseln oder die Seite aus dem Frameset lösen
Schreib- und Lesezugriff auf Cookies und den Web Storage innerhalb des Browsers

### Missbrauch

Einige Anwendungen, die mit JavaScript möglich sind, agieren teilweise gegen den Wunsch des Benutzers oder widersprechen dem Prinzip der geringsten Überraschung. Einige Browser bieten daher Funktionen an, die derartige JavaScript-Funktionen unterdrücken.
Beispiele:

Verschleiern der Internetadresse, auf die ein gegebener Link verweist
Deaktivieren des Kontextmenüs, um zu erschweren, dass Bilder oder die gesamte Seite abgespeichert werden können
Deaktivieren der Kopierfunktion, um zu erschweren, dass Texte oder Bilder kopiert werden können
Unaufgeforderte (Werbe-)Pop-ups oder Pop-unders oder aufeinanderfolgende Dialogfenster, die den Benutzer behindern
Ungewolltes Schließen des Browserfensters
Ungewollte Größenänderung des Browserfensters
Barrierearme Webseiten zeichnen sich dadurch aus, dass sie auch bei abgeschaltetem JavaScript möglichst uneingeschränkt nutzbar bleiben. Teilweise schränkt das deaktivierte JavaScript die Benutzbarkeit einer Webseite ein.
Maßnahmen, die an den Sicherheitseinstellungen des Browsers vorbei ein Wiedererkennen eines Benutzers bei einem späteren Besuch einer Website erlauben (siehe Anonymität im Internet)
Bei anfälligen Webanwendungen kann JavaScript auch von Dritten missbraucht werden, etwa per XSS (Codeeinschleusung).

## Geschichte

Am 18. September 1995 veröffentlichte Netscape mit der Vorversion des Navigators 2.0 einen Browser mit einer eingebetteten Skriptsprache, die zu diesem Zeitpunkt LiveScript hieß und von Brendan Eich entwickelt worden war. Die Sprache konnte u. a. Formulareingaben des Benutzers vor dem Absenden überprüfen. Am 4. Dezember 1995 verkündeten Netscape und Sun Microsystems eine Kooperation, die die Interaktion von LiveScript direkt mit Java-Applets zum Ziel hatte. Sun entwickelte die nötigen Java-Klassen, Netscape die Schnittstelle LiveConnect und benannte die Sprache in JavaScript um (JavaScript 1.0). JavaScript ist seit der Übernahme von Sun Microsystems eine Marke des Unternehmens Oracle.
Mit der ersten Beta-Version des Navigators 3.0 führte Netscape am 29. April 1996 JavaScript 1.1 ein. In selbiger Version gab es die Neuerungen, auf Bilder zugreifen und sogenannte Rollover-Grafiken erstellen zu können. LiveConnect war jetzt fester Bestandteil des Browsers. Mit der Beta-Version des Internet Explorers 3 stellte Microsoft im Mai 1996 seinen ersten JScript-fähigen Browser vor. Dies war der Beginn des Browserkriegs.
Mit der Ankündigung des Netscape Communicators wurde JavaScript 1.2 am 15. Oktober 1996 veröffentlicht; der Netscape Communicator 4.0 mit JavaScript 1.2 erschien jedoch erst am 4. Juni 1997. Ebenfalls im Juni 1997 veröffentlichte die European Computer Manufacturers Association ihren Standard ECMA-262 (ECMAScript), der zusammen mit Netscape entwickelt worden war und die Grundelemente einer Skriptsprache standardisieren sollte. Diese wurde im April 1998 zur ISO-Norm ISO/IEC 16262:1998 Information technology – ECMAScript language specification. Am 1. Oktober 1997 kam der Internet Explorer 4 heraus, der den Sprachumfang von JavaScript 1.1 abdeckte. Darüber hinaus wurden eigene Erweiterungen veröffentlicht, die zu Kompatibilitätsunterschieden zwischen Navigator und Internet Explorer führten und eine DOM-ähnliche Syntax zur Verfügung stellten, die es ermöglichte, auf alle Elemente der Webseite zuzugreifen und diese beliebig verändern zu können.
Der in Java implementierte JavaScript-Interpreter Rhino wurde ab Version 6.0 als Teil der Java-Laufzeitumgebung standardmäßig mitgeliefert. Im Juli 1998 wurde mit der Beta-Version des Netscape Communicators 4.5 JavaScript 1.3, welche schon in der Version 4.06 des Netscape Communicators vorhanden war, veröffentlicht. Im Oktober 1998 stellte Netscape JavaScript 1.4 vor. Diese Version war vollständig kompatibel mit ECMA-262. Ein Browser mit der Unterstützung dieser Version erschien jedoch nicht. Im April 2000 kam mit der Preview Release 1 des Navigators 6 JavaScript 1.5 und DOM Level 1. Am 5. Juni 2002 erschien Mozilla 1.0 mit JavaScript 1.5 (JavaScript in der Version 1.5 entspricht ECMA-262 Version 3), am 29. November 2005 Mozilla Firefox 1.5 mit JavaScript 1.6, am 12. Juli 2006 Mozilla Firefox 2.0b1 mit JavaScript 1.7 und am 18. Dezember 2007 Mozilla Firefox 3.0b2 mit JavaScript 1.8.

### Versionsgeschichte von JavaScript

### Versionsgeschichte von ECMAScript (ECMA-262)

Die aktuelle Version ist die Version 2025, die im Juni 2025 als „ECMAScript 2025“ veröffentlicht wurde. Dieser sollen jährliche Updates folgen. Die Entwicklung der Standards erfolgt auf GitHub.

## Sicherheit

### Sandbox-Prinzip

JavaScript wird im Browser in einer sogenannten Sandbox ausgeführt. Dies soll bewirken, dass man in JavaScript nur Zugriff auf die Objekte des Browsers hat und nicht auf das Dateisystem zugreifen kann. Eine Ausnahme stellt der Lesezugriff auf eine Datei dar, die per Dateiauswahl-Dialog, gestartet mit dem HTML-Element <input type="file">, vom Benutzer ausgewählt wurde.
Um Sicherheitsprobleme wie das sogenannte Cross-Site-Scripting zu verhindern, wird jede Website oder Webanwendung innerhalb des Browsers isoliert ausgeführt und ein Datenaustausch unterbunden. Ohne diesen Schutz wäre es möglich, über eine Seite Schadcode auszuführen, der beispielsweise Bank- oder Logindaten in anderen parallel geöffneten Browserfenstern ausliest oder manipuliert.
Auch bestimmte sicherheitsrelevante Browserfunktionen wie das Schließen des Browserfensters, das Aus- und Einblenden von Symbolleisten, das Ändern der Browserstartseite, der Zugriff auf die Zwischenablage oder das Auslesen der zuletzt besuchten Webseiten des Anwenders werden durch obligatorische Nutzereingaben geschützt.
Standardmäßig wird ein Skript innerhalb eines Browsers in Form eines einzigen Threads ausgeführt. Warteschleifen oder lange Berechnungen sind daher in JavaScript-Programmen zu vermeiden. Mit Worker-Objekten ist es möglich, weitere Threads zu erzeugen.

### Deaktivieren von JavaScript

In vielen JavaScript-fähigen Browsern lässt sich JavaScript abschalten oder lassen sich einzelne Aktionen wie die Änderung des Textes in der Statusleiste oder die Manipulation von Browserfenstern deaktivieren. Dies kann bei einigen Browsern mittels Erweiterungen, die JavaScript anhand von White- und Blacklists gezielt auf Seiten ein- und ausschalten, auch automatisiert werden. Daher können sich Entwickler nicht darauf verlassen, dass JavaScript-Programme sich in jeder Umgebung gleich verhalten bzw. überhaupt funktionieren.

## Sprachelemente

### Datentypen

JavaScript ist dynamisch typisiert. Das bedeutet, dass die Zuweisung von Werten an Variablen keinen typbasierten Einschränkungen unterliegt. Allerdings gibt es diverse Erweiterungen von JavaScript, die eine statische Typisierung optional beziehungsweise zwingend erfordern, zum Beispiel TypeScript von Microsoft.
Aufgrund der dynamischen Typisierung ist der Datentyp keine Eigenschaft einer Variablen, sondern Laufzeit-bezogen die Eigenschaft ihres aktuellen Wertes (oder auch die Eigenschaft eines Literals). Der Datentyp eines Wertes lässt sich mit dem unären Operator typeof ermitteln.

#### Primitive Datentypen

Zu den primitiven Datentypen in JavaScript gehören Zahlen, Zeichenketten, boolesche Werte, Symbole, null und undefined.

Numerische Werte können entweder den Typ Number (angezeigt durch typeof als "number") oder BigInt haben (angezeigt durch typeof als "bigint"). Während der Datentyp Number für Gleitkommazahlen verwendet wird, ermöglicht der Datentyp BigInt die Darstellung ganzer Zahlen beliebiger Größe, die den Bereich überschreiten, den Number abdecken kann.
Zeichenketten haben den Typ String (angezeigt durch typeof als "string").
Boolesche Werte haben den Typ Boolean (angezeigt durch typeof als "boolean")
Symbole haben den Typ Symbol (angezeigt durch typeof als "symbol") und fungieren als eindeutige Identifikatoren, werden jedoch seltener verwendet.
Der Typ Null hat nur den Wert null (typeof liefert "object", was historisch bedingt ist).
Der Typ Undefined hat nur den Wert undefined (typeof liefert "undefined").

#### Nicht primitive Datentypen

Funktionen sind kein primitiver Typ (typeof liefert "function"). Für alle anderen Werte – reguläre Ausdrücke, Arrays und den Wert null inbegriffen – liefert typeof den Zeichenketten-Wert "object" zurück. Es ist zu beachten, dass null ein primitiver Datentyp ist, auch wenn typeof für null aus historischen Gründen den Wert "object" liefert. Im Gegensatz zu anderen Programmiersprachen gibt es in JavaScript keine echten assoziativen Arrays.
Objekte, die durch die vordefinierten Konstruktorfunktionen String(), Number() und Boolean() erzeugt werden, verhalten sich ähnlich wie Werte der entsprechenden primitiven Datentypen. Allerdings gibt der typeof-Operator für solche Objekte den Wert "object" zurück. Diese Art von Objekten wird als Wrapper-Objekte bezeichnet. Für den Datentyp Symbol existiert keine gleichnamige Konstruktorfunktion. Im Folgenden finden wir ein Beispiel einer Variablen und dem entsprechenden Wrapper-Objekt:

Umgekehrt werden Werte der primitiven Typen Number, Boolean und String bei Bedarf automatisch in Objekte der entsprechenden Konstruktorfunktion umgewandelt:

In diesem Beispiel wird die Eigenschaft length aufgerufen, obwohl simpleString ein primitiver String ist. JavaScript wandelt automatisch den primitiven String in ein temporäres String-Objekt um, um die Eigenschaft length abzurufen.

### Kontrollstrukturen

JavaScript kennt die üblichen Kontrollstrukturen. Sollen diese mehr als eine Anweisung enthalten, so muss ein in geschweifte Klammern eingeschlossener Block eingesetzt werden. Anweisungen werden mit einem Semikolon abgeschlossen. Dies ist aber in den meisten Fällen optional; durch die automatic semicolon insertion wird es meist automatisch ergänzt.

#### if-else (Bedingte Anweisung)

Kurzschreibweise für bedingte Wertzuweisungen:

#### switch-Kontrollstruktur

while-Schleife

do-while-Schleife

for-Schleife

for … in-Schleife
Mit dieser Anweisung werden alle eigenen und ererbten Eigenschaften eines Objektes durchlaufen, die das interne Attribut Enumerable aufweisen. Dieses Attribut wurde in ECMA Script 5 eingeführt und ist für bestimmte eingebaute Eigenschaften (wie z. B. die Funktion toString des Prototyps Object) nicht gesetzt, es kann allerdings im Regelfall vom Benutzer gesetzt (und entfernt) werden. Bei jedem Schleifendurchgang wird einer angegebenen Variable der Eigenschaftsname zugewiesen.

for … of-Schleife
Diese Kontrollstruktur funktioniert wie eine for … in-Schleife, mit dem Unterschied, dass hier der angegebenen Variable nicht der Eigenschaftsname, sondern der Eigenschaftswert zugewiesen wird.

### Variablen

Variablen sollten in JavaScript mit let oder var deklariert werden und sind dann innerhalb des Scopes gültig, in dem sie deklariert wurden, wobei let den Scope weiter eingrenzt als var. Verwendet man Variablen ohne sie vorher explizit zu deklarieren, werden diese implizit als Eigenschaften des globalen Objekts (im Browser window) deklariert; dieses Verhalten kann man durch die Anweisung "use strict"; unterbinden. Eine Besonderheit von JavaScript ist das Hoisting von Variablen, das dafür sorgt, dass sämtliche in einem Codeabschnitt deklarierten Variablen und Funktionen bei der Abarbeitung automatisch direkt an den Anfang vorgezogen werden (nur die Deklaration, nicht aber deren Wertzuweisung).

#### Geltungsbereich von Variablen

In JavaScript gibt es globale und lokale Variablen abhängig davon, wo sie deklariert werden und wie sie verwendet werden.

Globale Variablen:
Variablen, die außerhalb von Funktionen deklariert werden, sind global gültig. Im Browser bedeutet global, dass solche Variablen auf der gesamten Webseite und in allen aktiven JavaScript-Dateien zugänglich sind. Dies kann zu unerwünschten Nebeneffekten führen, insbesondere wenn andere Skripte wie Drittanbieter-Plugins, Web Analytics oder Werbebannern eingebunden sind. Daher sollten globale Variablen nach Möglichkeit vermieden werden.

Implizit deklarierte Variablen sind immer global. Auch wenn eine Variable innerhalb einer Funktion implizit ohne let oder var deklariert wurde, wird sie automatisch zu einer globalen Variable.

Eine implizit deklarierte Variable wird automatisch zu einer Eigenschaft des globalThis-Objekts. Das trifft bei explizit deklarierten globalen Variablen nicht zu.

Lokaler Geltungsbereich:
Variablen, die innerhalb von Funktionen deklariert oder als Funktionsparameter verwendet werden, haben einen lokalen Geltungsbereich. Das bedeutet, dass sie nur innerhalb der Funktion sichtbar und zugänglich sind.

### Konstanten

Konstanten sollen mit const deklariert werden, bei der Initialisierung muss ihnen ein Wert zugewiesen werden. Für den Gültigkeitsbereich gelten dieselben Bedingungen wie bei Variablendeklarationen mit let. Konstanten können nicht durch erneute Zuweisung verändert werden, allerdings können – wenn es sich bei der Konstanten um Objekte handelt – einzelne Eigenschaften der Konstanten geändert werden.

### Funktionen

In JavaScript sind Funktionen vollwertige Objekte mit eigenen Methoden und Eigenschaften. Sie können erstellt, überschrieben, als Argumente an andere Funktionen übergeben und von diesen erzeugt und zurückgegeben werden.
Im letzteren Fall entsteht eine Closure, auch Funktionsabschluss genannt, die beispielsweise Datenkapselung ermöglicht:

Nicht jedes Argument einer Funktion muss beim Aufruf angegeben werden. Fehlende Argumente erhalten den Wert undefined. Seit ECMAScript 2015 können Parameter auch mit Standardwerten definiert werden. Außerdem ermöglicht das  arguments-Objekt den Zugriff auf die Argumente innerhalb der Funktion.

#### Erzeugung

Es gibt mehrere Möglichkeiten, in JavaScript Funktionen zu erzeugen:

Funktionsdeklarationen („Function Declarations“):

Funktionsausdrücke („Function Expressions“):

Sofort ausgeführte Funktionsausdrücke („Immediately-Invoked Function Expressions“):
Anonyme Funktionen können auch direkt ausgeführt werden, ohne sie vorher einer Variable zuzuweisen. Das kann zur Kapselung des Gültigkeitsbereichs von Variablen verwendet werden.

Benannte Funktionsausdrücke („Named Function Expressions“):
Der Variablen f wird eine Funktion mit Bezeichner g zugewiesen. Außerhalb der Funktion ist sie mit f ansprechbar, innerhalb mit f und g.

Funktionskonstruktor („Function Constructors“):

Pfeilfunktionen („Arrow Functions“):
Die runden Klammern sind optional, falls die Funktion genau ein Argument hat. Werden die geschweiften Klammern weggelassen, muss man genau einen Ausdruck ohne return als Rückgabewert angeben. Mit geschweiften Klammern kann man beliebigen Code angeben, muss aber für Rückgabewerte return verwenden.

#### Beispiel

Eine funktionale und rekursive Implementierung des Euklidischen Algorithmus mit zwei Argumenten sieht folgendermaßen aus:

Implementierung des Euklidischen Algorithmus mit beliebig vielen Argumenten durch Reduzierung von numbers auf einen einzigen Wert, indem jeweils zwei Elemente von links nach rechts mit euklid ausgewertet werden:

Implementierung des Euklidischen Algorithmus mit partieller Anwendung:

### Objekte

Objekte in JavaScript bestehen aus Eigenschaften, die als Name/Wert-Paar realisiert werden. Dabei wird nicht zwischen Attributen und Methoden des Objektes unterschieden (eine Eigenschaft, deren Wert den Typ Function besitzt, fungiert als Methode). Jedes Objekt – auch durch Literale erzeugte Objekte – erbt vom Prototyp des globalen Objekt-Konstruktors.

#### Vordefinierte Objekte

JavaScript kennt mehrere eingebaute Objekte und Objekttypen, die im Standard ECMAScript definiert sind. Dabei wird ein Objekttyp durch eine namensgleiche Konstruktorfunktionen repräsentiert, die zur Erzeugung von Objekten des entsprechenden Typs verwendet werden kann und zugleich einen Verweis auf den Prototyp des Objekttyps beinhaltet.

Das namenlose globale Objekt, das alle Variablen und Objekte enthält.
Der Objekttyp Object, von dem alle Objekte abgeleitet sind.
Der Objekttyp Function von Funktionen.
Der Objekttyp Array von Arrays.
Der Objekttyp String von Zeichenketten.
Der Objekttyp Boolean von boolesche Variablen.
Der Objekttyp Number von Zahlen (64-Bit-Gleitkommazahlen gemäß IEEE 754).
Der Objekttyp Date für Datumsformate (Daten bzw. Zeitpunkte).
Der Objekttyp RegExp für reguläre Ausdrücke.
Der Objekttyp Error zur Charakterisierung (und ggf. nachfolgenden Auslösung mittels throw) von Laufzeitfehlern.
Das Objekt Math stellt Konstanten und Methoden für mathematische Operationen bereit.
Das Objekt JSON stellt zwei Methoden für die Serialisierung von Objekten ins JSON-Format und umgekehrt bereit.
Das Objekt Reflect stellt Methoden für die Ermittlung und Änderung der Metadaten eines Objekts bereit.
Weitere Objekte, die beim clientseitigen JavaScript verwendet werden, entstanden historisch vor allem durch die Netscape-Spezifikationen (window, document usw.). Das window-Objekt selbst ist dabei de facto das globale Objekt, indem einfach einer Variablen window das globale Objekt zugewiesen wurde. Zahlreiche Unterobjekte von document wurden mittlerweile durch DOM HTML standardisiert (title, images, links, forms usw.). Aktuelle Browser unterstützen zudem DOM Core und andere W3C-DOM-Standards sowie Erweiterungen von Microsoft JScript.

#### Zugriff auf Objekteigenschaften und -methoden

Eigenschaften von Objekten (auch Methoden sind Eigenschaften) können wie folgt angesprochen werden:

Punkt-Notation (mit statischen Bezeichnern)

Klammer-Notation (mit dynamischen Bezeichnern)

Zu allen Objekten können zur Laufzeit neue Eigenschaften hinzugefügt oder mit delete bestehende entfernt werden:

#### Objektliterale

Objekte können in JavaScript direkt anhand ihrer Eigenschaften definiert werden:

Eine spezielle Notation gibt es für reguläre Ausdrücke:

#### Konstruktor-Funktionen

Eine Funktion kann dazu genutzt werden, um ein mit new erstelltes Objekt zu initialisieren. In diesem Fall spricht man von einem Konstruktor oder einer Konstruktor-Funktion. Innerhalb dieser Funktion kann das neue Objekt über die Variable this angesprochen werden.

#### „Private“ Eigenschaften

Private Eigenschaften und Methoden sind nicht explizit Teil der Sprache.
Mit Hilfe von Closures (siehe Funktionen) lassen sich dennoch private Eigenschaften von Objekten realisieren:

Lediglich die toeten-Methode von otto kennt die Variable lebensZahl.
Der Effekt gleicht dem einer privaten Eigenschaft, wenn alle Methoden der Katze in der erzeugenden Funktion erschaffeKatze definiert werden. lebensZahl ist dann für alle Methoden (privilegierte Methoden, im Beispiel toeten) und inneren Funktionen der erzeugenden Funktion (private Methoden, im Beispiel maunz) sichtbar, nicht jedoch von außen oder von nachträglich an das Objekt gehängten Methoden.

#### Vererbung über Prototypen

Vererbung kann in JavaScript durch Prototypen realisiert werden.
Dies erfordert, dass der prototype-Eigenschaft einer Konstruktor-Funktion ein als Prototyp dienendes Objekt zugewiesen wird.
Wenn mit der Konstruktor-Funktion nun ein Objekt erzeugt wird, wird beim Zugriff auf eine nicht-existierende Eigenschaft des neuen Objekts die entsprechende Eigenschaft des Prototyps (wenn vorhanden) zurückgegeben.
Beispiel:

Um festzustellen, ob ein Objekt eine Eigenschaft selbst besitzt oder vom Prototyp geerbt hat, hat jedes Objekt (automatisch durch Vererbung von Object) die hasOwnProperty-Methode:

#### Fixierung von Objektstruktur und -inhalten

Die in JavaScript im Regelfall völlig dynamische Struktur eines Objekts obj kann in verschiedener Hinsicht fixiert werden: Nach dem Methodenaufruf Object.preventExtensions(obj) können keine weiteren Attribute und Methoden mehr ergänzt werden. Object.seal(obj) verhindert sowohl die Erweiterung wie die Streichung von Attributen und Methoden. Der Aufruf Object.freeze(obj) fixiert sowohl die Objektstruktur wie auch die Attributwerte inklusive der Methoden gegen nachfolgende Veränderungen. Die betreffenden Status eines Objekts obj können mit Object.isExtensible(obj), Object.isSealed(obj) und Object.isFrozen(obj) ermittelt werden.
Es ist auch möglich, nur ein einzelnes Attribut eines Objekts obj zu fixieren. Beispielsweise wird mit dem Aufruf
Object.defineProperty(obj, "vorname", {writable:false});
das Attribut obj.vorname schreibgeschützt.

### Delegationsprinzipien

JavaScript ist eine Delegationssprache mit sowohl selbstausführendem als auch direktem Delegationsmechanismus.

Funktionsobjekte als Rollen (Traits und Mixins)
JavaScript unterstützt schon auf der Ebene des Sprachkerns verschiedene auf Funktionsobjekten aufbauende Implementierungen des Rollen-Musters wie z. B. Traits und Mixins. Zusätzliches Verhalten wird bereitgestellt, indem mindestens eine Methode über das Schlüsselwort this im Rumpf eines function-Objekts gebunden wird. Benötigt ein Objekt zusätzliches Verhalten, welches ihm nicht über die Prototypenkette zur Verfügung gestellt werden kann, lässt sich eine Rolle direkt über call bzw. apply an dieses Objekt delegieren.
Objektkomposition und Vererbung durch Delegation
Während Komposition in JavaScript über diese direkte Delegation abgedeckt werden kann, kommt automatische Delegation immer dann zur Anwendung, wenn der Interpreter die Prototypenkette eines Objekts nach oben hin abwandern muss, um z. B. eine mit diesem Objekt assoziierte Methode zu finden, die diesem nicht unmittelbar gehört. Sobald die Methode gefunden ist, wird sie im Kontext dieses Objekts aufgerufen. Demzufolge wird Vererbung in JavaScript über einen selbstausführenden Delegationsmechanismus abgebildet, der an die prototype-Eigenschaft von Konstruktorfunktionen gebunden ist.

### Fehlerbehandlung

Ab Version 3 verfügt ECMAScript über eine von Java übernommene Fehlerbehandlung. Die Anweisung try … catch … finally fängt Ausnahmen (exceptions) ab, die aufgrund eines Fehlers oder einer throw-Anweisung auftreten. Die Syntax lautet:

Zu Beginn werden die Anweisungen im try-Block ausgeführt. Falls eine Ausnahme auftritt, wird der Kontrollfluss sofort zum catch-Block mit dem Ausnahmeobjekt als Parameter umgeleitet.
Im Normalfall wird der Ausnahmeblock übersprungen. Nach der Ausführung des try-Blocks (auch teilweise) und gegebenenfalls des catch-Blocks werden in jedem Fall die Anweisungen im finally-Block ausgeführt. Der finally-Teil kann weggelassen werden, alternativ der catch-Teil.
Einige Laufzeitumgebungen wie V8 (und somit Node.js) und auch viele Webbrowser stellen gesonderte Error-Objekte zur Verfügung, die neben der Fehlermeldung auch einen Stacktrace und weitere Zusatzinformationen transportieren können.
Um diese Vorteile zu nutzen, ändert man im einfachsten Anwendungsfall den throw-Befehl von throw "Meldungstext"; zu throw new Error("Meldungstext");.
Klammern um den Parameter des throw-Befehls sind im Allgemeinen nicht notwendig. Sollten sie in Ausnahmefällen benötigt werden, um beispielsweise einen auf mehrere Zeilen verteilten Parameter zusammenzufassen, kann die mögliche Verwechslung mit einem Funktionsaufruf dennoch vermieden werden, indem man ein Leerzeichen zwischen throw und die öffnende Klammer einfügt.

## JavaScript-Bibliotheken

Um die Erstellung von Webanwendungen mit Hilfe von JavaScript zu erleichtern, gibt es diverse Bibliotheken und Frameworks. Eine Bibliothek ist eine Sammlung von Funktionen, die der Programmierer nutzen kann. Ein Framework fordert darüber hinaus durch ein besonderes Maß an Abstraktion eine bestimmte Struktur der Programmierung.
Ausgelöst von neuen Konzepten wie Ajax entstand seit 2004 ein neues Interesse für JavaScript. JavaScript wird zunehmend für Rich-Client-Anwendungen benutzt, die das Aussehen und die Bedienung von herkömmlichen Desktop-Programmen auf Web-gestützte Anwendungen übertragen. JavaScript spielt dabei eine Schlüsselrolle, wenn es darum geht, Statusinformationen ohne Laden einer vollständigen Seite zwischen Browser und HTTP-Server zu übertragen. Im Zuge dieser neuen Anforderungen entstanden verschiedene Bibliotheken, die die Entwicklung solcher Anwendungen vereinfachen wollen. Neben Ajax-Funktionalitäten bieten die meisten dieser Bibliotheken eine eigene Basis für objektorientierte Programmierung, eine Abstraktionsschicht für das komfortable Arbeiten mit dem DOM sowie grafische Effekte wie Animationen. Aber auch schon vor dem breiten Einsatz von Ajax existierten Funktionssammlungen zur Unterstützung der browserübergreifenden Programmierung.
Zu den bekannten JavaScript-Bibliotheken und Frameworks zählen AngularJS, Dojo Toolkit, Ext JS, jQuery, MooTools, Prototype, Qooxdoo, React, Vue.js und die Yahoo User Interface Library. Speziell mit grafischen Effekten beschäftigen sich Moo.fx und Script.aculo.us. Für die serverseitige Programmierung mittels Node.js stehen eigene Bibliotheken und Frameworks bereit.
Einige Bibliotheken und insbesondere Frameworks erweitern die Sprache um zusätzliche Funktionen, die häufig in spätere Versionen der Spezifikation einfließen oder rüsten bei Bedarf ältere Implementierung per Polyfill nach.

## JavaScript & Suchmaschinenoptimierung (SEO)

Suchmaschinen gehen unterschiedlich mit der Verarbeitung von Javascript-Inhalten um, wodurch es in den letzten Jahren immer wieder zu Fällen gekommen ist, dass Websites teilweise oder gänzlich nicht in Suchmaschinen auffindbar waren. Der Suchmaschinenbetreiber Google kann laut eigenen Aussagen JavaScript-Inhalte crawlen, rendern und indexieren. Neben allgemeinen Empfehlungen wie z. B. die Verwendung von aussagekräftigen Titeln, eindeutigen Statuscodes und den sorgsamen Umgang mit Noindex-Direktiven gibt es im Hinblick auf JavaScript noch spezifischere Empfehlungen, welche helfen können, dass JavaScript-Webanwendungen optimal via Suchmaschinenoptimierung aufgefunden werden können. Dazu zählen serverseitiges Pre-Rendering oder der Verzicht von Fragmenten bei Links. Für das Debugging von JavaScript & SEO gibt es eine Reihe von offiziellen Empfehlungen seitens Google, um nachprüfen zu können, wie der Googlebot Webinhalte erfasst.
