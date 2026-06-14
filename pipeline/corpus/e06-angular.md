---
url: https://de.wikipedia.org/wiki/Angular
---

# Angular (Framework)

## Überblick

Angular (zur Abgrenzung vom Vorgänger AngularJS (Version 1.x) auch „Angular 2+“) ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.

## Unterschiede zwischen Angular und AngularJS

Angular wurde als Nachfolger von AngularJS von Grund auf neu geschrieben und unterscheidet sich von diesem in vielerlei Hinsicht:

Angular kennt keine „scopes“ oder Controller, sondern verwendet eine Hierarchie von Komponenten als zentrales Architekturkonzept.
Angular hat eine einfachere Syntax für Ausdrücke: Mit „[ ]“ werden Bindings für Eigenschaften und mit „( )“ werden Bindings für Events erzeugt.
Mobile-First-Ansatz: Die Anforderungen von mobilen Plattformen haben besondere Priorität.
Modularität: Module können Funktionalitäten auslagern, sodass Code leichtgewichtiger und schneller wird.
Nur moderne Browser werden unterstützt, wodurch weniger Workarounds wegen Browser-Kompatibilitätsproblemen benötigt werden.
Angular empfiehlt die Verwendung von TypeScript, welches folgende Möglichkeiten bietet:
Klassenbasierte objektorientierte Programmierung
Statische Typisierung
Generics
TypeScript ist eine Obermenge von ECMAScript 6 (ES6) und ist rückwärts kompatibel mit ECMAScript 5, d. h. JavaScript. Angular bietet somit auch die Vorzüge von ES6:
Lambdas
Iteratoren
for…of-Schleifen
Generatoren im Stil von Python
Reflexion
Verbesserte Dependency Injection: Bindings ermöglichen es, dass Abhängigkeiten benannt werden können.
Direktives dienen dem Zweck, das Aussehen und Verhalten eines Tags dynamisch zu verändern.
Dynamisches Laden
Asynchrone Kompilierung von Templates
Einfacheres Routing
Kontroller und $scope werden durch Komponenten und Direktiven ersetzt. Eine Komponente ist eine Direktive mit einem Template.
Reaktive Programmierung mit RxJS

## Geschichte

### Name

Ursprünglich wurde die Neuimplementierung von AngularJS „Angular 2“ genannt, doch das führte bei Entwicklern zur Verwirrung. Um Klarheit zu schaffen, wurde empfohlen, für die beiden Frameworks unterschiedliche Bezeichnungen zu verwenden, d. h. „Angular“ von „AngularJS“ abzugrenzen und zur Unterscheidung nicht bloß Versionsnummern zu verwenden.

### Versionen

Version 2
Angular 2 wurde auf der ng-Europe-Konferenz im September 2014 angekündigt. Die drastischen Änderungen in der Version 2.0 sorgten für Kontroversen unter den Entwicklern. Im Dezember 2015 erschien die erste Beta-Version und im Mai 2016 der erste Release Candidate. Die endgültige Version wurde am 14. September 2016 veröffentlicht.

Version 4
Am 13. Dezember 2016 wurde Angular 4 angekündigt. Die Versionsnummer 3 wurde übersprungen, da eines der NPM-Pakete von Angular 2 bereits die Version v3.3.0 trug. Die endgültige Version wurde am 23. März 2017 veröffentlicht.

Version 5
Am 1. November 2017 erschien Angular 5. Zu den wichtigsten Verbesserungen von Angular 5 gehören die Unterstützung für progressive Web-Apps, ein Build Optimizer und Verbesserungen im Zusammenhang mit Material Design.

Version 6
Am 3. Mai 2018 erschien Angular 6. Angular Elements ist jetzt im Framework integriert. Alle Framework-Pakete liegen synchronisiert in Version 6.0.0 vor.
Es erfolgte die Einführung zweier neuer Command-Line-Befehle: ng update und ng add.

Version 7
Am 18. Oktober 2018 erschien Angular 7, welches den Fokus auf Performance-Verbesserungen, Neuerungen bei Angular Material und CDS, Virtual Scrolling und weitere Verbesserungen legt. Außerdem wird TypeScript 3.1 und RxJS 6.3 verwendet.

Version 8
Am 28. Mai 2019 erschien Angular 8, welches den Fokus auf Differential-Loading (kleinere browserspezifische Skriptpakete), inkrementelles Kompilieren und Optimieren durch Ivy (Beta), Unterstützung von Multithreading durch Web Workers, Anpassungen beim Lazy Loading von Skripten und diverse Erweiterungen zur Angular Befehlszeile (CLI), legt. Außerdem wird TypeScript 3.4, Node.js 12 und RxJS 6.5.1 verwendet. Daneben gibt es noch zahlreiche kleinere Änderungen im Angular-Ökosystem.

Version 9
Am 6. Februar 2020 erschien, etwas später als erwartet, Angular 9. Ivy (inkrementelles kompilieren und optimieren) ist nun geeignet für produktive Anwendungen. Dadurch sollen Bundles bis zu 40 % kleiner werden und außerdem wesentlich schneller. Durch Ivy wird auch effizienteres Lazy-Loading unterstützt, so dass beim Start der Anwendungen nicht alle Pakete geladen werden müssen, sondern nur wenn sie verwendet werden. Auch wurde die Integration von Lokalisierung der Anwendungen verbessert und diese werden ebenfalls nur bei Verwendung geladen. Dazu muss die Anwendung an eine neue Lokalisierungs-Schnittstelle angepasst werden. Es wird mindestens TypeScript 3.6/3.7 vorausgesetzt.

Version 10
Angular 10 ist am 25. Juni 2020 erschienen. Durch die kurze Zeit im Vergleich zum vorherigen Release, welches signifikante Änderungen brachte, sind nur kleinere Änderungen/Ergänzungen eingepflegt worden. Der klare Fokus lag in diesem Release auf Qualitätserhöhung. Es wurden über 2000 verschiedene Verbesserungen eingepflegt und dies wird in den nächsten Monaten weitergehen. Angular Material 10 enthält nun einen Datumsbereichauswahldialog. Der Strict Mode wurde signifikant erweitert. Dieser Modus ermöglicht es besser wartbare Anwendungen zu erzeugen und fängt auch einige typische Anwendungsdefekte im Vorhinein ab. Es wird nun TypeScript 3.9, tslib 2.0 und tslint v6 unterstützt. ES5 builds (für ältere Browser) werden bei neuen Projekten deaktiviert. Auch werden in den Standardeinstellungen ältere Browser und selten genutzte Browser nicht unterstützt. Die Unterstützung kann jedoch aktiviert werden. Die Aktualisierung einer vorhandenen Angular 9 Anwendung kann einfach über das „Update“-Werkzeug von Angular bewerkstelligt werden.

Version 11
Angular 11 wurde am 11. November 2020 veröffentlicht.

Version 12
Angular 12 wurde am 13. Mai 2021 veröffentlicht.

Version 13
Angular 13 wurde am 3. November 2021 veröffentlicht.

Version 14
Angular 14 wurde am 2. Juni 2022 veröffentlicht.

Version 15
Angular 15 wurde am 16. November 2022 veröffentlicht.
Standalone Komponenten sind in dieser Version stabil. Die Stapelverfolgungsinformationen eines Fehlers sind nun entwicklerfreundlicher gestaltet. Es wird mindestens TypeScript Version 4.8 vorausgesetzt.

Version 16
Angular 16 wurde am 3. Mai 2023 veröffentlicht.
Änderungen zur Vorversion sind: Einführung von Angular Signals, bessere Performance bei der Änderungsverfolgung und verbessertes serverseitiges Rendern. Es wird mindestens TypeScript Version 4.9 vorausgesetzt.

Version 17
Angular 17 wurde am 8. November 2023 veröffentlicht.
Änderungen zur Vorversion sind: Stabiler Status von Angular Signals, neue Control-Flow-Syntax für die Templates und eigenständige Komponenten ohne Module. Es wird mindestens TypeScript Version 5.2 und Node.js mit Version 18.13 vorausgesetzt.
Version 18
Angular 18 wurde am 22. Mai 2024 veröffentlicht.
Version 19
Angular 19 wurde am 19. November 2024 veröffentlicht.
Änderungen zur Vorversion sind: Standalone Komponenten sind jetzt Standard. Hybrid-Rendering ist stabil. Es wird TypeScript 5.6 unterstützt. Die „Ressource API“ wurde eingeführt.
Version 20
Angular 20 wurde am 28. Mai 2025 veröffentlicht.
Änderungen zur Vorversion sind: Angular Performance Monitoring, Reaktive API's sind jetzt stabil. Alte Control Flow-Blöcke gelten nun als veraltet.
Version 21
Angular 21 wurde am 19. November 2025 veröffentlicht. Änderungen zur Vorversion sind: Zoneless Change Detection ist jetzt Standard für neue Projekte. Signal Forms wurden als neue experimentelle Form‑API eingeführt. Die Angular‑CLI verwendet Vitest als Standard‑Test‑Runner. Die Entwickler‑Preview der Angular‑Aria‑Bibliothek für zugängliche, headless UI-Komponenten ist verfügbar. Verbesserungen an SSR und der Build‑Pipeline sorgen für schnellere Anwendungen.

### Releasefrequenz, Support und Abwärtskompatibilität

Angular Releases folgen dem Konzept des Semantic Versionings. Es wird zwischen Major-, Minor- und Bugfix-Releases unterschieden.
Geplanterweise gibt es alle 6 Monate eine neue Major Release. Major Releases enthalten signifikante neue Features, sind aber nicht abwärtskompatibel. Der Umstieg auf eine neuere Major Release benötigt daher oft Update-Scripts, Refactorings des bestehenden Codes, weitere Tests und das Erlernen neuer APIs. Zu jeder Major Release gibt es ein bis drei Minor Releases. Patch Releases und Pre-Releases gibt es beinahe jede Woche.
Major Releases werden typischerweise 18 Monate lang gewartet. Davon 6 Monate aktiv – d. h. mit regelmäßigen Minor Releases und Patch Releases. Weitere 12 Monate gibt es Long Term Support (LTS) in Form von Patch-Releases ausschließlich zur Behebung kritischer und sicherheitsrelevanter Fehler.

## Angular Universal

Angular Universal ist eine Pre-Rendering-Lösung für Angular. Angular Universal ermöglicht serverseitiges Rendering für Angular-basierte Websites. Standardweise rendert Angular Anwendungen im Browser. Mit Angular Universal kann Angular eine Anwendung auf dem Server rendern, indem es statisches HTML generiert, das den Status der Anwendung darstellt. Wenn das HTML im Browser gerendert wird, lädt Angular die Anwendung und verwendet die im auf dem Server generierten HTML verfügbaren Informationen wieder.
