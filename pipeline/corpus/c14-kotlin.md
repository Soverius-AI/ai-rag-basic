---
url: https://de.wikipedia.org/wiki/Kotlin_(Programmiersprache)
---

# Kotlin (Programmiersprache)

## Überblick

Kotlin ist eine plattformübergreifende, statisch typisierte Programmiersprache, die in Bytecode für die Java Virtual Machine (JVM) übersetzt wird, aber auch in JavaScript-Quellcode, in WebAssembly oder (mittels LLVM) in Maschinencode  umgewandelt werden kann. Kotlin lässt sich außerdem zur Entwicklung von Android- und iOS-Apps verwenden. Google unterstützt seit 2017 offiziell die Entwicklung von Android-Apps in Kotlin, und diese ist seit Mai 2019 die dafür bevorzugte Sprache.

## Entwicklung

Hauptsächlich wurde die Sprache von den damals in Sankt Petersburg ansässigen JetBrains-Programmierern entwickelt. Daher stammt auch der Name: Kotlin ist eine Insel vor St. Petersburg.
Nach einem Jahr Entwicklung stellte JetBrains im Juli 2011 das Projekt „Kotlin“ der Öffentlichkeit als neue Sprache für die JVM vor. Im Februar 2012 veröffentlichte JetBrains den Quellcode unter einer Apache-2-Lizenz. Am 15. Februar 2016 wurde die Version 1.0 von Kotlin veröffentlicht. Diese Version wird als erstes offizielles Stable-Release betrachtet.
Der leitende Entwickler Dmitry Jemerow erklärte, dass die meisten Sprachen nicht die Merkmale zeigten, nach denen sie gesucht hätten, mit Ausnahme von Scala. Diese jedoch habe einen langsamen Compiler. Daher war eines der erklärten Ziele für Kotlin die hohe Kompiliergeschwindigkeit, wie man sie von Java her kenne.

## Tools

Auch die von JetBrains entwickelte IDE IntelliJ IDEA unterstützt seit der Version 15 Kotlin nativ via eines Plug-ins. Für Eclipse und Visual Studio Code stehen ebenfalls Plugins zur Verfügung. Es existieren zudem Plugins für Apache Maven und Gradle und ein Task für Apache Ant. Die offizielle Android-Entwicklungsumgebung Android Studio unterstützt von Version 3.0 an Kotlin als native Sprache zum Entwickeln von Android-Apps.
Im Java-Umfeld gibt es zahlreiche Frameworks und Bibliotheken, die bei der Test-Erstellung helfen. Da Kotlin vollständig interoperabel mit Java ist, können alle diese Tools ohne Weiteres für Tests von Kotlin-Code verwendet werden. Daneben existieren auch native Test-Frameworks für Kotlin wie z. B. kotlin-test.

## Syntax

Die Sprache ist syntaktisch nicht zu Java kompatibel, aber so gestaltet, dass sie mit Java-Code interoperieren kann. Außerdem nutzt sie bestehenden Code der Java Class Library (JCL), z. B. das Java Collections Framework (JCF).
Anders als in Java wird bei Kotlin der Datentyp einer Variable bei ihrer Deklaration nicht vor dem Variablennamen, sondern danach, abgetrennt durch einen Doppelpunkt, notiert. Allerdings unterstützt Kotlin auch Typinferenz, sodass der Typ oft auch weggelassen werden kann, wenn er aus dem Zusammenhang klar ist. Als Anweisungsende genügt der Zeilenumbruch, ein Semikolon ist hierbei nur notwendig, wenn eine Zeile aus mehreren Anweisungen besteht. Zusätzlich zu Klassen und Methoden (in Kotlin: member functions) aus der objektorientierten Programmierung unterstützt Kotlin prozedurale Programmierung unter Verwendung von Funktionen, sowie bestimmte Aspekte der funktionalen Programmierung. Als Einstiegspunkt dient wie bei C u. ä. eine Main-Funktion.

### Hallo Welt

Ein Programm, das die Zeichenkette „Hallo Welt“ ausgibt.

### Funktionen

### Klassen und Objekte

### Kontrollstrukturen

Kotlin unterstützt die gängigen Kontrollstrukturen.

#### If-Anweisung

#### When-Anweisung

Die when-Anweisung dient dem Pattern Matching. Nicht spezifizierte Fälle können mit „else“ abgefangen werden (vergleichbar mit „default“ bei switch-case-Anweisungen in Java).

#### Repeat-Anweisung

#### For-Schleife

### Funktionen höherer Ordnung

Kotlin unterstützt die Verwendung von Funktionen höherer Ordnung sowie von Closures mithilfe von Funktionszeigern, anonymen Funktionen und Lambda-Ausdrücken.

Funktionen höherer Ordnung werden auch in der Standardbibliothek verwendet, insbesondere bei Collections-Datentypen wie Listen, Maps oder Sets.

### Null Safety

Die falsche Verwendung von Null-Pointern, die zu sogenannten „Null Pointer Exceptions“ führen können, ist in vielen Programmiersprachen eine häufige Fehlerursache. Daher stellt Kotlin eine Reihe von Features zur Verfügung, die das Auftreten solcher Null Pointer Exceptions bereits zur Kompilierzeit verhindern sollen. So muss der Entwickler zum Beispiel beim Deklarieren einer Variable explizit angeben, ob diese den Wert null annehmen darf oder nicht. Variablen, die null sein können, werden „nullable“ (etwa: nullierbar) genannt.
Wenn eine Variable, die null werden kann, verwendet wird, ohne sie vorher auf null geprüft zu haben, führt dies beim Kompilieren ebenfalls zu einem Fehler.

Kotlin bietet außerdem für einige typische Fälle besondere Syntax, um den benötigten Code zu verkürzen.

## Versionen

Seit Kotlin 2.0.0 werden folgende Arten von Releases veröffentlicht:

Language Releases (2.x.0): Große Änderungen in der Programmiersprache, Tooling-Aktualisierungen. Werden alle 6 Monate veröffentlicht.
Tooling Releases (2.x.20): Performance Verbesserungen, Fehlerbehebungen. Werden 3 Monate nach dem entsprechenden Language Release veröffentlicht.
Bug Fix Releases (2.x.yz): Fehlerbehebungen für Tooling Releases. Kein Zeitplan für die Veröffentlichung.

## Rezeption

Google hat Kotlin auf der Entwicklerkonferenz I/O 2019 zur bevorzugten Programmiersprache für Android erklärt.
Meta Platforms nutzt nach eigenen Angaben in seiner Android-Codebase im Oktober 2022 mehr als 10 Millionen Zeilen Code, der in Kotlin geschrieben ist.
In der Ausgabe Januar 2012 des Dr. Dobb’s Journal wurde die Programmiersprache zur Sprache des Monats (language of the month) erklärt.
Der Kotlin-Website zufolge setzen kleine wie große Projekte die Sprache ein:

Pinterest nutzen monatlich 150 Millionen Anwender.
Gradle setzt Kotlin für Installationsskripte ein.
Evernote verwendet Kotlin für seinen Android-Client.
Uber nutzt Kotlin für interne Werkzeuge.
Corda, eine vollständig in Kotlin entwickelte Open-Source-Software für Blockchains, wird von mehreren Großbanken verwendet.
Coursera entwickelt Android-Apps zum Teil mit Kotlin.
Atlassian verwendet Kotlin für das Werkzeug Trello unter Android.
