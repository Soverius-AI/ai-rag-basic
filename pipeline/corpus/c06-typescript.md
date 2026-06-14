---
url: https://de.wikipedia.org/wiki/TypeScript
---

# TypeScript

## Überblick

TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert und statische Typisierung zu JavaScript hinzufügt. Sprachkonstrukte von TypeScript, wie Klassen, Vererbung, Module und anonyme Funktionen, wurden auch in ECMAScript 6 übernommen.
TypeScript ist eine echte Obermenge (strict superset) von JavaScript bzw. ECMAScript 2015. Jeder JavaScript-Code ist daher auch gültiger TypeScript-Code, so dass gängige JavaScript-Bibliotheken (wie z. B. jQuery oder Angular) auch in TypeScript verwendet werden können.
TypeScript unterstützt mit Modulen das Kapseln von Klassen, Interfaces, Funktionen und Variablen in eigene Namensräume. Dabei wird zwischen internen und externen Modulen unterschieden. Interne Module lehnen sich an die Modul-Spezifikation aus ECMAScript 6 an, wohingegen externe Module eine JavaScript-Bibliothek (AMD oder CommonJS) nutzen.
Der von Microsoft entwickelte TypeScript-Compiler transkompiliert TypeScript-Code nach ECMAScript 5 (ES5), optional auch nach ECMAScript 3 (ES3).
TypeScript kann mit Hilfe von Plug-ins in verschiedene Build-Management-Tools integriert werden, darunter Grunt (grunt-ts), Apache Maven (TypeScript Maven Plugin) und Gradle (TypeScript Gradle Plugin).

## Geschichte

Die erste öffentlich verfügbare Version von TypeScript wurde 2012 nach zwei Jahren Entwicklung von Microsoft in der Version 0.8 veröffentlicht. Kurz nach Ankündigung der Sprache wurde diese von Miguel de Icaza gelobt. Jedoch bemängelte er, dass es keine weiteren Entwicklungsumgebungen abseits von Microsoft Visual Studio gab, das 2013 nicht für Linux und macOS zur Verfügung stand. Seit 2013 gab es Plugin-Support für Eclipse, der von Palantir Technologies bereitgestellt wurde. Mittlerweile unterstützen eine Vielzahl von Texteditoren und Entwicklungsumgebungen TypeScript. Darunter befinden sich Emacs, vim, Sublime Text, WebStorm, Atom und Microsofts eigener Editor Visual Studio Code.
TypeScript 0.9 wurde 2013 veröffentlicht und brachte Unterstützung für generische Typen.
TypeScript 1.0 wurde 2014 auf Microsofts hauseigener Entwicklerkonferenz Build vorgestellt. Auch erhielt Visual Studio Unterstützung für TypeScript.
Im Juli 2014 kündigten die Entwickler von TypeScript einen neuen Compiler an, der fünfmal schneller sein sollte als der alte. Gleichzeitig wurde der bisherige Quellcode von TypeScript von CodePlex zu GitHub migriert.
Am 22. September 2016 wurde die Version 2.0 veröffentlicht, die diverse neue Funktionen einführte. Unter anderem wurde eine optionale Funktion eingeführt, um zu verhindern, dass Variablen standardmäßig mit null initialisiert sind. Dies soll zu weniger Nullpointer Exceptions führen.
Am 30. Juli 2018 wurde die Version 3.0 veröffentlicht. Besonders hervorzuheben ist der neue primitive Typ unknown. Zusammen mit void (dem Einheitstyp) und never (dem leeren Typ) vervollständigt er die Ränder der Typenhierarchie: unknown ist ein Universaltyp; einer Variable davon kann jedes Objekt zugewiesen werden, und entsprechend kann man von einem unknown-Wert nichts erwarten. TypeScript verlangt dann eine Assertion oder Checks. Im Unterschied dazu ist any zwar auch ein Universaltyp, jedoch erlaubt TypeScript die Verwendung der Werte direkt, obwohl eigentlich keine Information darüber vorliegt. Damit ist unknown nichts anderes als das typsichere Äquivalent zu any.

## Features

TypeScript erweitert die Sprache ECMAScript 6 um folgende Merkmale:

Methodensignatur
Typinferenz
Type Erasure
Interfaces
Aufzählungstyp
Generische Programmierung
Namensräume
Tupel
Async/Await
Folgende Elemente wurden durch einen Backport von ECMAScript 2015 hinzugefügt:

Klassen
Module
Arrow-Syntax für anonyme Funktionen
Optionale Parameter und Standardparameter

### Kompatibilität mit JavaScript

TypeScript ist eine Obermenge von ECMAScript 2015, das selbst eine Obermenge von ECMAScript 5 ist, was oft in Referenz mit JavaScript gestellt wird. Ein JavaScript-Programm ist somit auch ein valides TypeScript-Programm. Somit kann TypeScript ohne Probleme JavaScript verwenden. Der Compiler benutzt normalerweise ECMAScript 5, aber es besteht auch die Möglichkeit, Konstrukte von ECMAScript 3 oder 2015 zu verwenden.
TypeScript bietet die Möglichkeit an, existierenden JavaScript-Code und bekannte JavaScript-Bibliotheken zu verwenden.

### Methodensignatur

TypeScript bietet Methodensignaturen an, die das Überprüfen von Methoden während der Kompilierung ermöglichen. Dies ist optional und kann ignoriert werden.Die Annotationen für die primitiven Typen sind number, boolean und string.

### Klassen

TypeScript unterstützt ECMAScript-2015-Klassen, die optionale Methodensignaturen verwenden können:

### Generische Programmierung

TypeScript unterstützt Generische Programmierung. Das ist ein Beispiel einer Identitätsfunktion:

### Union-Typen

Union-Typen werden in TypeScript unterstützt. Es können insbesondere auch komplexe Typen als sogenannte Tagged Union Types definiert werden.

### Module und Namespaces

TypeScript unterscheidet zwischen Modulen und Namespaces. Beide Features in TypeScript unterstützen die Kapselung von Klassen, Schnittstellen, Funktionen und Variablen in Containern. Namespaces (ehemals interne Module) verwenden sofort aufgerufene Funktionsausdrücke von JavaScript, um Code zu kapseln, während Module (ehemals externe Module) JavaScript-Bibliotheksmuster nutzen, um dies zu tun (AMD oder CommonJS).

## Design

TypeScript stammt von der Skriptsprache JavaScript ab und will dessen Mängel im Bereich der Entwicklung von großen Applikationen beheben, was von Microsoft selbst veranlasst wurde. Die Herausforderung, mit dem komplexen Code von JavaScript umzugehen, führte dazu, dass ein dafür angepasstes Werkzeug zur Vereinfachung der Entwicklung dieser Komponenten erstellt wurde.
Die Entwickler von TypeScript suchten eine Lösung, die nicht die Kompatibilität mit dem Standard oder die Plattformunabhängigkeit von JavaScript gefährdet. Mit dem Wissen, dass ECMAScript in Zukunft das klassenbasierte Programmieren unterstützen wollte, wurde TypeScript auf diesem Grundsatz entwickelt. Das führte zu einem JavaScript-Compiler mit einigen Erweiterungen, die den Code in JavaScript übersetzen.
TypeScript hat sich zu einem de-facto Standard für größere JavaScript-Projekte entwickelt. Insbesondere in modernen Frontend-Frameworks wie React.js, Angular und Vue.js wird TypeScript zunehmend als bevorzugte Entwicklungssprache eingesetzt. Die strikte Typisierung ermöglicht eine bessere Wartbarkeit von Code, reduziert Laufzeitfehler erheblich und verbessert die Entwicklererfahrung durch erweiterte IDE-Unterstützung mit intelligenter Autovervollständigung sowie Refactoring-Tools.
TypeScript fügte die Unterstützung des ECMAScript-2015-Standards hinzu.

## Versionsgeschichte
