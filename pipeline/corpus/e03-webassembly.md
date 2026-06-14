---
url: https://de.wikipedia.org/wiki/WebAssembly
---

# WebAssembly

## Überblick

WebAssembly (Wasm) ist ein offener Standard, der vom W3C festgelegt wurde. Er definiert einen Bytecode zur Ausführung von Programmen innerhalb von Webbrowsern, kann aber auch außerhalb von diesen genutzt werden. Ziel der Entwicklung war es, leistungsstärkere Webanwendungen als bisher zu ermöglichen, sowohl was die Ladezeiten als auch die Ausführung betrifft. Das Projekt wird von allen großen Entwicklern von Browser-Engines, also Mozilla, Microsoft, Google und Apple, unterstützt.
Seit März 2017 wird die Version 1 standardmäßig mit Chrome, Firefox, Edge und Webkit ausgeliefert. Der Standard wurde am 5. Dezember 2019 offiziell festgelegt. Weitere Funktionen wurden einzeln standardisiert und sind in Entwicklung oder in einigen Implementierungen bereits enthalten. Version 2 der Spezifikation lag seit April 2022 als Entwurf vor. Eine Version 3 wurde im September 2025 vorgestellt.

## Bytecode Alliance

Zur Unterstützung der Entwicklung gründeten im November 2019 Mozilla, Fastly, Intel und Red Hat die Bytecode-Allianz. Im April 2021 wurde diese offiziell als Non-Profit-Organisation registriert und nahm neue Mitglieder auf. Im Oktober 2022 hatte sie 32 Mitglieder, im September 2025 waren es noch 26.

## Entwicklung von WebAssembly-Code

Die Entwicklung von Webassembly-Code ist in einer Reihe von Programmiersprachen möglich, für weitere Sprachen gibt es Laufzeitsysteme als WebAssembly.
Neben dem Bytecode (wasm) gibt es eine Textform (wat), aus der der Bytecode mit Hilfe des Kommandos wat2wasm unmittelbar erzeugt werden kann.
Außerdem werden die Programmiersprachen C und C++ unterstützt. Das Tool Emscripten ist hierbei in der Lage, nahezu jeden C- und C++-Quellcode in ein WebAssembly-Modul zu kompilieren. Zusätzlich wird der notwendige JavaScript-Code zum Laden und Ausführen dieses Moduls sowie ein HTML-Dokument zur Anzeige generiert. Auch die Entwicklungsumgebung Unity verwendet Emscripten, um WebAssembly-Code (z. B. für Browserspiele) zu erzeugen.
Auch kompilieren Rust, Go und Zig nativ nach WebAssembly. Umfragen zufolge ist Rust die beliebteste Sprache für Wasm-Anwendungen.
Beim JWebAssembly-Projekt wird Java-Bytecode nach WebAssembly übersetzt (experimentell). Es gibt für Java jedoch auch einen proprietären Compiler namens CheerpJ.
AssemblyScript ist eine Variante des JavaScript basierten TypeScript, die speziell für WebAssembly entwickelt wurde. Sie ermöglicht auch die Integration von Low-Level-Funktionen.
Beim Blazor-Framework (für WebAssembly) wird ein Laufzeitsystem (IL-Interpreter) als WebAssembly geladen, sodass im Endeffekt die Programmiersprachen C# und F# im Browser genutzt werden können. Ab .NET 6 kann die Übersetzung in WebAssembly-Bytecode zum Entwicklungszeitpunkt (AOT) erfolgen, die App ist dann größer.
Über das pyodide-Projekt kann Python im Browser genutzt werden (experimentell).
Jetbrains hat einen Compiler für Kotlin nach WebAssembly implementiert (experimentell).

## Nutzung außerhalb des Browsers

Über eine Schnittstelle namens WASI kann WebAssembly auch außerhalb von Browsern benutzt werden. Hierbei startet das Kommando wasmtime eine Stand-Alone Laufzeitumgebung für WebAssembly. Die Laufzeitumgebung für WebAssembly kann außerdem in verschiedene Sprachen eingebettet werden. Daneben gibt es auch eine Micro Runtime mit reduzierter Speichernutzung. Beide stehen unter der Apache-Lizenz 2.0.

### Wasmer

Mit Wasmer gibt es zudem eine weitere Implementierung einer Laufzeitumgebung für WebAssembly für verschiedene Nutzungsarten, die im Januar 2021 erstmalig mit einer stabilen Version erschien. Die Implementierung steht unter der MIT-Lizenz. Wasmer Inc. ist dabei auch der Firmenname der Herausgeber. Weitere Komponenten wie ein Paketmanager (WAPM) wurden später ergänzt. Mit WASIX wurde WASI erweitert, dies ist jedoch kein Standard.

### Compiler

WebAssembly-Implementierungen verwenden in der Regel entweder die AOT- oder die JIT-Kompilierung, können aber auch einen Interpreter verwenden. Während die ersten Implementierungen in Webbrowsern gelandet sind, gibt es auch Nicht-Browser-Implementierungen für allgemeine Zwecke, darunter Wasmer, Wasmtime oder WAMR, wasm3, WAVM und viele andere.
Da die ausführbaren Dateien von WebAssembly vorkompiliert sind, können sie mit einer Vielzahl von Programmiersprachen erstellt werden, entweder durch direkte Kompilierung nach Wasm oder durch Implementierung der entsprechenden virtuellen Maschinen in Wasm. Es gibt etwa 40 Programmiersprachen, die Wasm als Kompilationsziel unterstützen.
Emscripten kompiliert C und C++ nach Wasm unter Verwendung von Binaryen und LLVM als Backend. Das Emscripten SDK kann den Quellcode jeder LLVM-unterstützten Sprache (wie C, C++ oder Rust u. a.) in eine Binärdatei kompilieren, die in der gleichen Sandbox wie JavaScript-Code läuft.[Anmerkung 1] Emscripten bietet Bindungen für mehrere häufig verwendete Umgebungsschnittstellen wie WebGL.
Ab Version 8 kann ein eigenständiges Clang C und C++ zu Wasm kompilieren. Ursprünglich war es das Ziel, die Kompilierung von C und C++ zu unterstützen, aber die Unterstützung für andere Quellsprachen wie Rust, .NET-Sprachen und AssemblyScript (TypeScript-ähnlich) ist ebenfalls im Kommen.
Nach der MVP-Veröffentlichung fügte WebAssembly Unterstützung für Multithreading und Garbage Collection hinzu, was die Kompilierung für Programmiersprachen mit Garbage Collection wie C# (unterstützt über Blazor), F# (unterstützt über Bolero mit Hilfe von Blazor), Python und sogar JavaScript ermöglichte, wo die Just-in-Time-Kompilierungsgeschwindigkeit des Browsers als zu langsam angesehen wird.
Eine Reihe anderer Programmiersprachen wird in gewissem Umfang unterstützt, darunter Python, Julia und Ruby.
Eine Reihe von Systemen kann Java und andere Bytecode-Sprachen in JavaScript und WebAssembly kompilieren. Dazu gehören CheerpJ, JWebAssembly und TeaVM. Sie alle nehmen Java-Bytecode-.class-Dateien als Eingabe, sodass auch andere JVM-Sprachen wie Groovy und Scala verwendet werden können. Kotlin unterstützt WebAssembly direkt.

## Beschränkungen

Im Allgemeinen erlaubt WebAssembly keine direkte Interaktion mit dem Document Object Model (DOM). Alle Interaktionen müssen über JavaScript Interop laufen. (Sicherheitsüberlegungen siehe unten)
WebAssembly wird auf Desktops und Mobiltelefonen unterstützt, aber in der Praxis (für speicherintensive Zuweisungen, wie z. B. bei der Unity-Spielengine) gibt es „schwerwiegende Einschränkungen, die es unmöglich machen, viele Anwendungen zuverlässig auf mobilen Browsern bereitzustellen [...] Derzeit ist die Zuweisung von mehr als ~300 MB Speicher in Chrome auf Android nicht zuverlässig, ohne auf Chrome-spezifische Workarounds zurückzugreifen, und auch nicht in Safari auf iOS.“
Alle großen Webbrowser erlauben WebAssembly, wenn keine Content Security Policy angegeben ist oder wenn „unsafe-eval“ verwendet wird, aber ansonsten verhalten sich die großen Webbrowser unterschiedlich. In der Praxis kann WebAssembly in Chrome ohne „unsafe-eval“ nicht verwendet werden, während ein Worker-Thread-Workaround verfügbar ist.

## Sicherheitsüberlegungen

Im Juni 2018 stellte ein Sicherheitsforscher die Möglichkeit vor, dass WebAssembly verwendet werden kann, um Browser-Abschwächungen für Spectre- und Meltdown-Sicherheitslücken zu umgehen, sobald Unterstützung für Threads mit gemeinsamem Speicher hinzugefügt wird. Aufgrund dieser Bedenken legten die WebAssembly-Entwickler die Funktion auf Eis. Um jedoch diese zukünftigen Spracherweiterungen zu erforschen, fügte Google Chrome im Oktober 2018 experimentelle Unterstützung für den WebAssembly-Thread-Vorschlag hinzu.
WebAssembly wurde dafür kritisiert, dass es Schadsoftware-Autoren, Betrügern und Phishing-Angreifern leichter fällt, Beweise zu verstecken; WebAssembly ist auf dem Rechner des Nutzers nur in kompilierter Form vorhanden, was „[die] Erkennung von Schadsoftware erschwert.“ Die Geschwindigkeit und Unauffälligkeit von WebAssembly haben dazu geführt, dass es für verstecktes Krypto-Mining auf dem Gerät des Website-Besuchers verwendet wird. Coinhive, ein inzwischen eingestellter Dienst, der das Mining von Kryptowährungen in den Browsern von Website-Besuchern ermöglicht, behauptet, sein „Miner verwendet WebAssembly und läuft mit etwa 65 % der Leistung eines nativen Miners.“ Eine Studie der Technischen Universität Braunschweig vom Juni 2019 analysierte die Verwendung von WebAssembly in den Alexa-Top-1-Millionen-Websites und stellte fest, dass die vorherrschende Verwendung für böswilliges Krypto-Mining war und dass Malware mehr als die Hälfte der untersuchten WebAssembly-verwendenden Websites ausmachte.
Eine Studie der Universität Stuttgart vom April 2021 ergab, dass das Krypto-Mining seither an den Rand gedrängt wurde und auf unter 1 % aller WebAssembly-Module gefallen ist, die aus einer Vielzahl von Quellen zusammengetragen wurden, darunter auch die Alexa-Top-1-Million-Websites.
Die Fähigkeit, große Mengen an Code effektiv zu verschleiern, kann auch dazu genutzt werden, um Werbeblocker und Datenschutz-Tools zu umgehen, die das Tracking im Web verhindern, wie Privacy Badger (Zitat).
Da WebAssembly nur einen strukturierten Kontrollfluss unterstützt, eignet es sich für Sicherheitsüberprüfungsmethoden, einschließlich der symbolischen Ausführung. Zu den aktuellen Bemühungen in dieser Richtung gehört die symbolische Ausführungsmaschine Manticore.
