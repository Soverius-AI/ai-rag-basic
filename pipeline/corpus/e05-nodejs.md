---
url: https://de.wikipedia.org/wiki/Node.js
---

# Node.js

## Überblick

Node.js ist eine plattformübergreifende Open-Source-JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführen kann. Damit kann zum Beispiel ein Webserver betrieben werden. Node.js wird in der JavaScript-Laufzeitumgebung V8 ausgeführt, die ursprünglich für Google Chrome entwickelt wurde, und bietet eine ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig bestehender Netzwerkverbindungen ermöglicht. Node.js wurde ursprünglich von Ryan Dahl 2009 entwickelt, einem Software-Entwickler aus San Diego, Kalifornien. 2018 stellte Ryan Dahl mit Deno einen Nachfolger für Node.js vor, der einige als grundlegende Probleme identifizierte Eigenschaften von Node.js beheben soll.

## Architektur

Die Skriptsprache JavaScript gibt eine ereignisgesteuerte Architektur vor. Diese hat im Server-Betrieb den Vorteil, pro bestehender Verbindung weniger Arbeitsspeicher zu benötigen als bei vergleichbaren Anwendungen, die für jede geöffnete Verbindung einen eigenen Thread starten.

## Performance

Node.js wird mit besonderem Fokus auf die Performance entwickelt. So kommt nonblocking I/O statt standardmäßigem blockierendem I/O zum Einsatz.
Zugriffe auf das Netzwerk und Dateisystem werden über die von Libuv bereitgestellte Ereignisschleife (event loop) und den darunterliegenden Thread Pool abgearbeitet. Dadurch werden weniger eigene Threads erstellt und der Overhead minimal gehalten.

## Module

Node.js enthält einige Module, die direkt in das Binärpaket kompiliert wurden. Dazu gehören neben dem Modul für asynchronen Netzwerkzugriff auch Adapter für das Dateisystem, Puffer, Zeitgeber und eine allgemein gehaltene Datenstrom-Klasse.
Darüber hinaus können zusätzliche Module eingebunden werden, zum Beispiel über vorkompilierte Dateien mit der Dateiendung .node oder in Form einfacher JavaScript-Dateien. Die JavaScript-Module folgen der CommonJS-Konvention, einem Standard für JavaScript-Systeme, die außerhalb von Browsern betrieben werden, und stellen somit über eine Variable namens exports Zugriff auf Funktionen und Variablen des entsprechenden Moduls her.
Zur Verwaltung der Module gibt es den Paketmanager npm, in dessen Depot sich über 751.000 Pakete (Stand: Juli 2018) befinden. Dieser sorgt unter Berücksichtigung von Abhängigkeiten für die Installation, Aktualisierung und das Kompilieren von Binärmodulen.

## Kritik

Der ursprüngliche Entwickler von Node.js, Ryan Dahl, kritisierte das Node.js-Projekt stark. Das Build-System von Node.js (node-gyp) bezeichnete er als den größten Fehler des Projekts. Im Rahmen der JSConf EU 2018 benannte er zehn große Designfehler der Laufzeitumgebung. Das Build-System von Node.js sei immens kompliziert und von gewöhnlichen Programmierern schwer zu handhaben. Damit meinte er Module, die nicht in JavaScript, sondern in anderen Sprachen wie C++ geschrieben wurden und im Build-Prozess kompiliert werden müssen. Auch kritisierte er die Komplexität des Modulsystems. Seine Vorstellung einer neuen Laufzeitumgebung Deno klang wie eine Entschuldigung an all die Programmierer, die unter der von ihm entwickelten Technologie gelitten hatten. Dabei wurden die meisten Design-Entscheidungen nicht von ihm, sondern anderen Entwicklern gefällt. Ryan Dahl war nur bis 2012 Projektleiter von Node.js.

## Beispiele

HTTP-Server-Version eines Hallo-Welt-Programmes in Node.js, das text/html als Content-Type-Header und den Port 3000 verwendet:

Als weiteres Beispiel ein einfacher TCP-Server, der auf Port 7000 Daten empfängt, mit „Hallo“ antwortet und dann alle empfangenen Daten unverändert zum Client zurücksendet:

## Ehemaliger Fork „io.js“

Aufgrund von Unzufriedenheit mit dem Tempo der Weiterentwicklung spaltete sich das Projekt io.js von Node.js ab, in dem einige der wichtigsten Node.js-Entwickler weiterarbeiteten, die mit dem Mutterprojekt unzufrieden waren. Das erste Release wurde am 13. Januar 2015 freigegeben. Der Fork ist kompatibel zu Node.js und dem Node Package Manager. Am 15. Mai 2015 verkündeten beide Projekte die Zusammenführung zur Node.js-Foundation, die eine gemeinsame Weiterentwicklung unter einem Open-Government-Modell ermöglichen soll. Die Zusammenführung wurde mit dem Erscheinen von Node.js 4.0 abgeschlossen.

## Versionen

Neue Hauptversionen werden alle sechs Monate veröffentlicht. Mit geraden Nummern versehene Versionen werden im April veröffentlicht, mit ungeraden Nummern versehene im Oktober. Wenn eine neue ungerade Versionsnummer veröffentlicht wird, wechselt die vorige gerade in den LTS-Zustand (Long Term Support), wird zunächst weitere 12 Monate aktiv gepflegt und anschließend weitere 18 Monate nur noch gewartet.

## Projekte

Eine Liste von ausgewählten Projekten, die auf Node.js basieren:

Etherpad Lite, ein kollaborativer Text-Editor
PDFKit
WebOS von vormals HP
StackVM, darauf aufbauend browserling (Cross-Browser-Testen im Browser)
NodeBB, eine Echtzeit-Internetforen-Software
Ghost, das von der Blog-Software WordPress inspiriert wurde
Trello, eine webbasierte Projektmanagement-Software
Darüber hinaus enthält das offizielle Node.js-Wiki eine Liste von Projekten, Anwendungen und Unternehmen, die Node.js einsetzen.

## Auszeichnungen

Im Juli 2011 wurde dem Node.js-Entwickler Ryan Dahl auf der Konferenz Oscon einer der O’Reilly Open Source Awards verliehen.
InfoWorld zeichnete Node.js im August 2011 mit dem Bossie Award für die beste Open-Source-Software in der Kategorie „Entwicklertools“ aus.
