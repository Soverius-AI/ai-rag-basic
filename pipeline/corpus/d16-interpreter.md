---
url: https://de.wikipedia.org/wiki/Interpreter
---

# Interpreter (Computerprogramm)

## Überblick

Als Interpreter wird ein Computerprogramm bezeichnet, das eine Abfolge von Anweisungen anscheinend direkt ausführt, wobei das Format der Anweisungen vorgegeben ist. Der Interpreter liest dazu eine oder mehrere Quelldateien ein, analysiert diese und führt sie anschließend Anweisung für Anweisung aus, indem er den dafür vorgesehenen Programmcode (eventuell über Zwischenschritte schließlich als Maschinencode für das jeweilige Computersystem) direkt ausführt. Interpreter sind deutlich langsamer als Compiler, bieten im Allgemeinen jedoch eine bessere Fehleranalyse.
Interpreter werden sowohl bei Programmiersprachen als auch Kommandozeileninterpretern verwendet.

## Verwendung

### Programmierung

Bei der Programmierung ist ein Interpreter fast immer ein Bestandteil der Softwareentwicklung.
In ihrer Reinform übersetzen Compiler – im Unterschied zu Interpretern – die Anweisungen aus den Quelldateien in einem oder mehreren Durchläufen in Maschinencode für ein vorher festgelegtes Zielsystem und erstellen so ein ausführbares Computerprogramm. Jedoch gibt es bereits hier die Unterscheidung zwischen Compiler-Compiler und Interpreter-Compiler, genauso wie es auch Interpreter-Interpreter und Compiler-Interpreter gibt.

Ist die letzte Stufe ein Interpreter, so erfolgt die Übersetzung der Quelldatei zur Laufzeit des Programms.
Programmiersprachen, die Quelltext nicht kompilieren, sondern eine Eingabe oder eine Quelldatei stets interpretieren, werden auch als „Interpretersprache“ oder Skriptsprache bezeichnet. Klassische Interpretersprachen sind z. B. Tcl, JavaScript oder einige BASIC-Varianten.
Bei einigen Programmiersprachen kann zwischen Interpreter und Compiler gewählt werden. So befand sich im ROM der meisten 8-Bit-Computer wie dem C64 für eine flüssige Programmentwicklung ohne Kompilierphasen ein BASIC-Interpreter; zur Beschleunigung fertig entwickelter Programme konnte ein kompatibler Compiler (z. B. BASIC BOSS) extern geladen werden. Auch die meisten Versionen von MS-DOS enthielten einen BASIC-Interpreter (z. B. GW-BASIC), zu dem ein kompatibler Compiler (hier BASCOM) erworben werden konnte.
Bei einigen Programmiersprachen wird auch ein Bytecode als Zwischencode erzeugt, der bereits optimiert ist, jedoch zur Ausführung abermals einen Interpreter auf dem Zielsystem benötigt.

### Computerprogramme

Skripte für Kommandozeileninterpreter, etwa Stapelverarbeitungsdateien oder Unix-Shell-Skripte, werden ebenfalls von einem Interpreter ausgeführt. Damit das Skript nicht als Kommandozeilen-Parameter angegeben werden muss, gibt es auf Unix-artigen Systemen und Shells das sogenannte Shebang – das Skript ruft sich damit den passenden Interpreter – mithilfe der Shell – sozusagen selbst auf.
Bei Computerprogrammen spricht man ebenfalls von Interpretern, sobald der Code nicht direkt vom Computersystem ausgeführt werden kann oder soll. Dies ist u. a. bei Emulatoren ebenfalls der Fall, die Maschinencode für andere Computersysteme analysieren, umschreiben und für das Computersystem, auf dem sie gerade laufen, interpretiert ausführen. Virtuelle Maschinen zählen jedoch nicht dazu, da diese große Teile des Maschinencodes des Gastsystems auf dem Hostsystem uninterpretiert direkt ausführen. Auch Game-Engines können Interpreter sein, wenn sie die eigentlichen Spieledaten, meist als Bytecode, auf der jeweiligen Plattform interpretiert ausführen.

## Eigenschaften

Interpreter liegen zumeist in Maschinensprache des Zielprozessors vor, können aber auch selbst wieder in einer Interpretersprache vorliegen. Der größte Nachteil ist dabei die gegenüber einem Compiler geringere Ausführungsgeschwindigkeit. Diese ist der Tatsache geschuldet, dass der Compiler sich während des Kompilierungsprozesses die Zeit nehmen kann, den Code zu optimieren, der somit auf dem jeweiligen Zielsystem schneller ausgeführt wird. Derlei Optimierungen sind jedoch zeitaufwendig, sodass ein Interpreter meist eine direkte Umsetzung auf Maschinencode durchführt, was jedoch in Summe wieder langsamer ist als der optimierte Code durch den Compiler.
Interpretierter Code ist in etwa fünf bis 20 Mal langsamer als kompilierter Code.
Zu den Vorteilen von interpretiertem Code zählt, neben der besseren Fehleranalyse, die Unabhängigkeit von einer vorher festgelegten Rechnerarchitektur – denn interpretierter Code läuft auf jedem System, auf dem es einen Interpreter dafür gibt.

### Geschwindigkeitssteigerungen

Eine Kompromisslösung ist ein Just-in-time-Compiler (JIT-Compiler), bei dem das Programm erst zur Laufzeit, jedoch direkt in Maschinencode übersetzt wird. Danach wird der übersetzte Code direkt vom Prozessor ausgeführt. Durch Zwischenspeicherung des Maschinencodes müssen mehrfach durchlaufene Programmteile nur einmal übersetzt werden. Auch ermöglicht der JIT-Compiler eine stärkere Optimierung des Binärcodes. JIT-Compiler sind allerdings nur auf einer bestimmten Rechnerarchitektur lauffähig, weil sie Maschinencode für diese Architektur erzeugen, und benötigen weit mehr Arbeitsspeicher als reine Interpreter.

### Zwischencode

Eine weitere Zwischenstufe sind Bytecode-Interpreter. Dabei wird der Quelltext (vorab oder zur Laufzeit) in einen einfachen Zwischencode übersetzt, der dann von einem Interpreter – auch häufig als virtuelle Maschine bezeichnet – ausgeführt wird. Dies ist z. B. bei Java durch die Java Virtual Machine (JVM) der Fall. Es entspricht dem Konzept Compiler-Interpreter, da der Zwischencode bereits in Teilen optimiert kompiliert wurde (Quelltext → Compiler → Zwischencode als Bytecode → Interpreter → Ausführung auf dem Zielsystem).
Besonders in den 1980er Jahren benutzte man die Zwischenstufe, Befehle zum Eingabezeitpunkt in leichter dekodierbare Tokens umzuwandeln, die bei der (List-)Ausgabe wieder in Klartext umgewandelt wurden. Neben der Geschwindigkeitssteigerung war die Kompression des Quelltextes ein gewichtiges Argument. Prinzipiell war es damit auch möglich, jeweils muttersprachliche Schlüsselwörter zu verwenden, wenn man den Datenaustausch auf Basis des tokenisierten Quellprogramms durchführte.

### Mischformen

Da JIT-Code nicht automatisch schneller ist als interpretierter Code, verwenden manche Laufzeitumgebungen eine Mischform. Ein Beispiel dafür ist die JVM. Dabei wird der JIT-Compiler parallel mit dem Interpreter verwendet, wobei der jeweils schnellere Ausführungspfad „gewinnt“.

## Interpretersprachen

Als Interpretersprachen werden häufig Programmiersprachen bezeichnet, deren Haupt- oder Erstimplementierung ein Interpreter ist, als Gegenteil zu einer Programmiersprache, die einen Compiler verwendet (Compilersprache). Grundsätzlich ist eine Programmiersprache nicht an eine Art der Implementierung gebunden und es existieren Mischformen aus den beiden Ansätzen.
Es gibt jedoch auch Programmiersprachen, die unter Gesichtspunkten der späteren Implementierung gestaltet wurden; dies ist bei manchen älteren Sprachen noch gut zu erkennen. So mussten Interpreter aufgrund der geringen Leistungsfähigkeit der frühen Computer möglichst einfach und klein gehalten werden, um nicht zu viel Rechenzeit und Arbeitsspeicher zu verbrauchen. Compiler hingegen konnten viel Rechenzeit und auch viel Arbeitsspeicher verbrauchen, denn wenn das Programm lief, waren sie nicht mehr aktiv.
Deshalb wurden Sprachen, die interpretiert werden sollten, so gestaltet, dass sie einfach analysiert und ausgeführt werden können, wohingegen Sprachen, die kompiliert werden sollten, auch aufwändig zu analysierende und bearbeitende Konstrukte enthalten konnten. Heute spielt dies beim Entwurf einer Programmiersprache nur noch in den allerseltensten Fällen eine Rolle.
Für einige Sprachen existieren verschiedenartige Implementierungen. Hierbei sticht die Sprache Scheme hervor, für die eine unüberschaubare Vielzahl an Implementierungen existiert, die auf vielen verschiedenen Konzepten basieren. Hierzu noch ein Beispiel: Die Programmiersprache C ist sehr stark darauf ausgelegt, kompiliert zu werden. Doch es existieren trotzdem Interpreter wie der CINT und der Ch für diese Sprache und das, obwohl C oft als ein Paradebeispiel für eine Sprache genannt wird, die keine „Interpretersprache“, sondern eine „Compilersprache“ ist.
Als Interpretersprachen bekannt sind APL, BASIC, Forth, Perl, Python, Ruby, PHP und viele andere. Als eine Unter- oder verwandte Kategorie der Interpretersprachen werden manchmal die Skriptsprachen genannt.
Bekannte Programmiersprachen, die üblicherweise in Bytecode übersetzt werden, sind Java, C#, Perl und Python.
Für manche Sprachen (etwa Smalltalk) gibt es je nach Anbieter Interpreter, Bytecode-Interpreter, JIT-Compiler oder Compiler in andere Sprachen (beispielsweise nach C oder für .NET-Plattformen).
Der Übergang zwischen reinen Interpretern und reinen Compilern ist fließend.
