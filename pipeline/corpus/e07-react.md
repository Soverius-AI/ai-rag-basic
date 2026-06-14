---
url: https://de.wikipedia.org/wiki/React
---

# React (JavaScript-Bibliothek)

## Überblick

React ist eine JavaScript-Programmbibliothek zur Erstellung von webbasierten Benutzeroberflächen. Komponenten werden in React hierarchisch aufgebaut und können in dessen Syntax als selbst definierte JSX-Tags repräsentiert werden. Das Modell von React verspricht durch die Konzepte des unidirektionalen Datenflusses und des Virtual DOM den einfachen, aber trotzdem performanten Aufbau auch komplexer Anwendungen. React bildet typischerweise die Basis für Single-Page-Webanwendungen, kann jedoch auch mit Node.js serverseitig (vor-)gerendert werden.

## Geschichte

React wurde ursprünglich von Jordan Walke, einem Softwareentwickler bei Facebook, entwickelt und 2011 erstmals für Facebooks Newsfeed und später 2012 für Instagram eingesetzt. Im Mai 2013 wurde von Facebook angekündigt, React zukünftig als Open-Source-Projekt weiterführen zu wollen.
Im Februar 2015 wurde React Native, mit welchem unter anderem die Entwicklung nativer Android-, iOS-, und UWP-Applikationen mit React ermöglicht wurde, auf der React Conf von Facebook vorgestellt und im folgenden Monat ebenfalls als Open-Source-Projekt veröffentlicht.
Im April 2017 kündigte Facebook React Fiber an, ein neuer Satz interner Algorithmen für das Rendering, welcher den alten Rendering-Algorithmus „Stack“ ersetzen sollte. React Fiber sollte die Grundlage für zukünftige Verbesserungen und Weiterentwicklungen der React-Bibliothek schaffen.
Im Oktober 2025 kündigte Meta an, React, React Native und unterstützende Projekte wie JSX der React Foundation übertragen zu wollen, die als unabhängige Stiftung unter dem Dach der Linux Foundation gegründet werden solle. Am 24. Februar 2026 erfolgte der offizielle Start der React Foundation, zu deren Gründungsmitgliedern die Unternehmen Amazon, Callstack, Expo, Huawei, Meta, Microsoft, Software Mansion und Vercel zählten. Die technische Ausrichtung der Projekte soll nach wie vor vom bisherigen Entwicklungsteam und den aktiven Unterstützenden bestimmt werden.

### Releasefrequenz, Support und Abwärtskompatibilität

React Releases folgen dem Konzept des Semantic Versionings. Es wird zwischen Major-, Minor- und Bugfix-Releases unterschieden.
Es wird versucht nicht abwärtskompatible Major Release zu vermeiden und neue Features primär in Minor Releases zu veröffentlichen. Bislang gab es Major Releases alle ein bis drei Jahre.
Long Term Support (LTS) gibt es offiziell keinen. Sobald eine Major Release ausgeliefert wird, werden für frühere Releases keine Bugfixes mehr geliefert. Eine Ausnahme dazu dürften kritische Sicherheitsfehler darstellen. In diesem Fall werden Bugfix-Releases für die letzten Minor-Releases ausgeliefert.

### Lizenzierung

Die initiale Veröffentlichung von React im Mai 2013 nutzte die Apache-Lizenz Version 2.0. Im Oktober 2014 wurde dies auf die BSD-Lizenz mit zusätzlicher Patentlizenz geändert, welche den Widerruf der Lizenz bei Klagen gegen oder bei Patentstreitigkeiten mit Facebook vorbehält. Diese unkonventionelle Klausel führte zu einer kontroversen Diskussion innerhalb der Nutzergemeinschaft von React. Eine Umformulierung dieser Patentklausel im April 2015, durch welche diese freizügiger und weniger zweideutig werden sollte, beendete die Auseinandersetzung nicht. Im Juli 2017 kündigte die Apache Software Foundation an, keine Apache-Projekte mehr mit dieser Zusatzlizenz zu erlauben. Sie erachtete diese Lizenzbedingungen als unvereinbar mit ihren eigenen Lizenzierungsrichtlinien, da ein unverhältnismäßiges Risiko auf den Lizenznehmer übertragen werde. Entgegen anfänglichen Angaben, nicht von der Klausel abrücken zu wollen, veröffentlichte Facebook im September 2017 React in der Version 16.0.0 unter der MIT-Lizenz. Mit der Veröffentlichung von React 15.6.2 wurde die Umstellung auf die MIT-Lizenz auch auf React 15 zurückportiert.

## Kernkonzepte

### Unidirektionaler Datenfluss

In Kombination mit der deklarativen Natur der Komponentendefinition in React sollen mittels eines unidirektionalen Datenflussmodells der Aufbau und die Wechselwirkungen zwischen Komponenten vereinfacht werden. Anders als beispielsweise mittels komplexem Event Handling erhält eine Komponente Daten nur über statische Eigenschaften, die dieser übergeben wurden. Eine Komponente kann ihr übergebene Eigenschaften in diesem Modell nicht ändern. Eigenschaften können jedoch übergebene Callback-Funktionen sein und somit die übergeordneten Komponenten beeinflussen.

### Virtual DOM und DOM-Diffing

Die Kernidee von React besteht in der Annahme, dass der komplette, der betroffenen Komponente untergeordnete Anwendungsbaum bei jeder Änderung einer Eigenschaft der Komponente neu aufgebaut wird. Da es in der Praxis performanceintensiv sein kann, dies z. B. im Webbrowser innerhalb des DOM durchzuführen, wurde das Konzept des „Virtual DOM“ geschaffen. Die damit verbundene Technik des „DOM-Diffing“ beschreibt das selektive Aktualisieren des DOM auf Basis eines Vergleichs zwischen ursprünglichem und geändertem Virtual DOM.
Als Beispiel kann ein Entwickler bei einer Messaging-Anwendung in einer Inbox davon ausgehen, dass die Auflistung aller Nachrichten und der untenstehende Zähler der Nachrichtenanzahl bei jeder neuen Nachricht komplett neu aufgebaut werden. Das DOM-Diffing sorgt in diesem Fall dafür, dass lediglich die veränderten Teile (in diesem Fall die ergänzte neue Nachricht und der aktualisierte Zähler) im DOM aktualisiert werden.

### JavaScript syntax extension (JSX)

Mit Hilfe der eingebauten, an XML angelehnten Template-Sprache JSX (Javascript XML) steht optional eine Syntax für die Deklaration von React-Komponenten zur Verfügung, die es erlaubt, Javascript-Logik, HTML und CSS in eine React-Komponente einzukapseln und modular in Web-Applikationen einzusetzen.

### Einführung von Hooks

Am 16. Februar 2019 wurde React 16.8 veröffentlicht und damit React Hooks eingeführt. Hooks sind Funktionen, die es Entwicklern ermöglichen, direkt aus Functional Components heraus auf den React State und Lifecycle-Features zuzugreifen. Dabei ist zu beachten, dass Hooks ausschließlich in Functional Components funktionieren und nicht in Class Components verwendet werden können.
React stellt mehrere Built-in Hooks bereit, darunter „useState“, „useContext“, „useReducer“, „useMemo“ und „useEffect“. Weitere Hooks sind in der Hooks API Reference dokumentiert. Die beiden wohl am häufigsten genutzten Hooks sind „useState“ und „useEffect“.

## Kritik

Anders als bei strikten MVC-Modellen realisiert React ein komponentenzentriertes Modell, welches Logik für Interaktion und Darstellung in einer Funktion bündelt. Dies wird aufgrund der weitverbreiteten strikten Trennung zwischen Markup und Logik in Form von Templating-Systemen oft kritisch gesehen.
