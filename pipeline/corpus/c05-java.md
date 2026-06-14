---
url: https://de.wikipedia.org/wiki/Java_(Programmiersprache)
---

# Java (Programmiersprache)

## Überblick

Java ist eine objektorientierte Programmiersprache und eine eingetragene Marke des Unternehmens Sun Microsystems, welches 2010 von Oracle übernommen wurde. Die Programmiersprache ist ein Bestandteil der Java-Technologie – diese besteht grundsätzlich aus dem Java-Entwicklungswerkzeug (JDK) zum Erstellen von Java-Programmen und der Java-Laufzeitumgebung (JRE) zu deren Ausführung. Die Laufzeitumgebung selbst umfasst die virtuelle Maschine (JVM) und die mitgelieferten Bibliotheken. Java als Programmiersprache sollte nicht mit der Java-Technologie gleichgesetzt werden; Java-Laufzeitumgebungen führen Bytecode aus, der sowohl aus der Programmiersprache Java als auch aus anderen Programmiersprachen wie Groovy, Kotlin und Scala kompiliert werden kann. Im Prinzip könnte jede Programmiersprache als Grundlage für Java-Bytecode genutzt werden, für die meisten existieren aber keine passenden Bytecode-Compiler.
Die Programmiersprache Java dient innerhalb der Java-Technologie vor allem zum Formulieren von Programmen. Diese liegen zunächst als reiner, menschenverständlicher Text vor, dem sogenannten Quellcode. Dieser Quellcode ist nicht direkt ausführbar; erst der Java-Compiler, der Teil des Entwicklungswerkzeugs ist, übersetzt ihn in den maschinenverständlichen Java-Bytecode. Die Maschine, die diesen Bytecode ausführt, ist jedoch typischerweise virtuell – das heißt, der Code wird meist nicht direkt durch Hardware, wie z. B. einen Mikroprozessor, ausgeführt, sondern durch entsprechende Software auf der Zielplattform.
Zweck dieser Virtualisierung ist Plattformunabhängigkeit: Das Programm soll ohne weitere Änderung auf jeder Rechnerarchitektur laufen können, sofern dort eine passende Laufzeitumgebung installiert ist. Oracle selbst bietet Laufzeitumgebungen für die Betriebssysteme Linux, macOS und Windows an. Andere Hersteller lassen eigene Java-Laufzeitumgebungen für ihre Plattform zertifizieren. Auch in Autos, HiFi-Anlagen und anderen elektronischen Geräten wird Java verwendet.
Um die Ausführungsgeschwindigkeit zu erhöhen, werden Konzepte wie die Just-in-time-Kompilierung und die Hotspot-Optimierung verwendet. In Bezug auf den eigentlichen Ausführungsvorgang kann die JVM den Bytecode also interpretieren, ihn bei Bedarf jedoch auch kompilieren und optimieren.
Java ist eine der populärsten Programmiersprachen. In dem seit 2001 veröffentlichten TIOBE-Index lag Java bis 2020, konkurrierend mit C, stets auf den ersten beiden Plätzen. Seit 2021 belegt jedoch Python den ersten Platz dieses Rankings – gefolgt von C, C++ und Java. Der Anteil von Java sank von ca. 25 % im Jahr 2001 auf etwa 10 % (2021–2025). Nach dem RedMonk-Programmiersprachenindex liegt Java seit 2020 bzw. 2021 hinter JavaScript und Python.

## Grundkonzepte

Der Entwurf der Programmiersprache Java strebte hauptsächlich fünf Ziele an:

Sie soll eine einfache, objektorientierte, verteilte und vertraute Programmiersprache sein.
Sie soll robust und sicher sein.
Sie soll architekturneutral und portabel sein.
Sie soll sehr leistungsfähig sein.
Sie soll interpretierbar, parallelisierbar und dynamisch sein.
Einfachheit
Java ist im Vergleich zu anderen objektorientierten Programmiersprachen wie C++ oder C# einfach, da es einen reduzierten Sprachumfang besitzt und beispielsweise Operatorüberladung und Mehrfachvererbung nicht unterstützt.
Objektorientierung
Java gehört zu den objektorientierten Programmiersprachen.
Verteilt
Eine Reihe einfacher Möglichkeiten für Netzwerkkommunikation, von TCP/IP-Protokollen über Remote Method Invocation bis zu Webservices werden vor allem über Javas Klassenbibliothek angeboten; die Sprache Java selbst beinhaltet keine direkte Unterstützung für verteilte Ausführung.
Vertrautheit
Wegen der syntaktischen Nähe zu C++, der ursprünglichen Ähnlichkeit der Klassenbibliothek zu Smalltalk-Klassenbibliotheken und der Verwendung von Entwurfsmustern in der Klassenbibliothek ist der Umstieg auf Java für erfahrene Programmierer vergleichsweise einfach.
Robustheit
Viele der Designentscheidungen bei der Definition von Java reduzieren die Wahrscheinlichkeit ungewollter Systemfehler; Beispiele dafür sind die starke Typisierung, Garbage Collection, Ausnahmebehandlung sowie Verzicht auf Zeigerarithmetik.
Sicherheit
Zur Verbesserung der Sicherheit stehen Konzepte wie der Class-Loader, der die sichere Zuführung von Klasseninformationen zur Java Virtual Machine steuert, und Security-Manager, die sicherstellen, dass nur Zugriff auf Programmobjekte erlaubt wird, für die entsprechende Rechte vorhanden sind.
Architekturneutralität
Java wurde so entwickelt, dass dieselbe Version eines Programms prinzipiell auf einer beliebigen Computerhardware läuft, unabhängig von ihrem Prozessor oder anderen Hardwarebestandteilen.
Portabilität
Zusätzlich zur Architekturneutralität ist Java portabel. Das heißt, dass elementare Datentypen sowohl in ihrer Größe und internen Darstellung als auch in ihrem arithmetischen Verhalten standardisiert sind. Beispielsweise ist ein float immer ein IEEE 754 Float von 32 Bit Länge. Dasselbe gilt beispielsweise auch für die Klassenbibliothek, mit deren Hilfe man eine vom Betriebssystem unabhängige GUI erzeugen kann.
Leistungsfähigkeit
Java hat aufgrund der Optimierungsmöglichkeit zur Laufzeit das Potenzial, eine bessere Performance als auf Compilezeit-Optimierungen begrenzte Sprachen (C++ etc.) zu erreichen. Dem entgegen steht der Overhead durch die Java-Laufzeitumgebung, sodass die Leistungsfähigkeit von beispielsweise C++-Programmen in einigen Kontexten übertroffen, in anderen aber nicht erreicht wird. Um Leistungsfähigkeit zu gewährleisten, kann in der Java Virtual Machine (JVM) die Performance gemessen werden.
Interpretierbarkeit
Java wird in maschinenunabhängigen Bytecode kompiliert, dieser wiederum kann auf der Zielplattform interpretiert werden. Die Java Virtual Machine interpretiert Java-Bytecode, bevor sie ihn aus Performancegründen kompiliert und optimiert.
Parallelisierbarkeit
Java unterstützt Multithreading, also den parallelen Ablauf von eigenständigen Programmabschnitten. Dazu bietet die Sprache selbst die Schlüsselwörter synchronized und volatile – Konstrukte, die das „Monitor & Condition Variable Paradigma“ von C. A. R. Hoare unterstützen. Die Klassenbibliothek enthält weitere Unterstützungen für parallele Programmierung mit Threads. Moderne JVMs bilden einen Java-Thread auf Betriebssystem-Threads ab und profitieren somit von Prozessoren mit mehreren Rechenkernen.
Dynamisch
Java ist so aufgebaut, dass es sich an dynamisch ändernde Rahmenbedingungen anpassen lässt. Da die Module erst zur Laufzeit gelinkt werden, können beispielsweise Teile der Software (etwa Bibliotheken) neu ausgeliefert werden, ohne die restlichen Programmteile anpassen zu müssen. Interfaces können als Basis für die Kommunikation zwischen zwei Modulen eingesetzt werden; die eigentliche Implementierung kann aber dynamisch und beispielsweise auch während der Laufzeit geändert werden.

### Objektorientierung

Die Grundidee der objektorientierten Programmierung ist, Daten und zugehörige Funktionen möglichst eng in einem sogenannten Objekt zusammenzufassen und nach außen hin zu kapseln (Abstraktion). Die Absicht dahinter ist, große Softwareprojekte einfacher zu verwalten und die Qualität der Software zu erhöhen. Ein weiteres Ziel der Objektorientierung ist ein hoher Grad der Wiederverwendbarkeit von Softwaremodulen.
Ein neuer Aspekt von Java gegenüber den objektorientierten Programmiersprachen C++ und Smalltalk ist die explizite Unterscheidung zwischen Schnittstellen und Klassen, die durch entsprechende Schlüsselwörter interface und class ausgedrückt wird. Java unterstützt kein Erben von mehreren unabhängigen Basisklassen (sogenannte „Mehrfachvererbung“ wie in C++ oder Eiffel), wohl aber das Implementieren einer beliebigen Zahl von Schnittstellen, womit sich viele der entsprechenden Probleme ebenfalls lösen lassen. Dabei werden Methodensignaturen und Standardimplementierungen von Methoden an die abgeleiteten Klassen weitergegeben, jedoch keine Attribute.
Java ist nicht vollständig objektorientiert, da die Grunddatentypen (int, boolean usw.) keine Objekte sind (siehe auch unter Java-Syntax). Sie werden allerdings ab Java 5 bei Bedarf automatisch und für den Programmierer transparent mittels Autoboxing in die entsprechenden Objekttypen und umgekehrt umgewandelt.

#### Beispiel

##### Source-Code

##### Konsolenausgabe

### Reflexion

Java bietet eine Reflexion-API als Bestandteil der Laufzeitumgebung. Damit ist es möglich, zur Laufzeit auf Klassen und Methoden zuzugreifen, deren Existenz oder genaue Ausprägung zur Zeit der Programmerstellung nicht bekannt war. Häufig wird diese Technik im Zusammenhang mit dem Entwurfsmuster Fabrikmethode (Factory Method) angewandt.

### Annotationen

Mit Java 5 hat Sun die Programmiersprache um Annotationen erweitert. Annotationen erlauben die Notation von Metadaten und ermöglichen bis zu einem gewissen Grad benutzerdefinierte Spracherweiterungen. Sinn der Annotationen ist unter anderem die automatische Erzeugung von Code und anderen in der Software-Entwicklung wichtigen Dokumenten für wiederkehrende Muster anhand möglichst kurzer Hinweise im Quelltext. Bislang wurden in Java dafür ausschließlich Javadoc-Kommentare mit speziellen JavaDoc-Tags verwendet, die von Doclets wie zum Beispiel dem XDoclet ausgewertet wurden.
Annotationen können auch in den kompilierten Class-Dateien enthalten sein. Der Quelltext wird also für ihre Verwendung nicht benötigt. Insbesondere sind die Annotationen auch über die Reflection-API zugänglich. So können sie zum Beispiel zur Erweiterung des Bean-Konzeptes verwendet werden.

### Modulare Ausführung auf fernen Computern

Java bietet die Möglichkeit, Klassen zu schreiben, die in unterschiedlichen Ausführungsumgebungen ablaufen. Beispielsweise lassen sich Applets in Webbrowsern, die Java unterstützen, ausführen. Das Sicherheitskonzept von Java kann dazu eingesetzt werden, dass unbekannte Klassen dabei keinen Schaden anrichten können, was vor allem bei Applets wichtig ist (siehe auch Sandbox). Beispiele für in entsprechenden Ausführungsumgebungen ausführbare Java-Module sind Applets, Servlets, Portlets, MIDlets, Xlets, Translets, und Enterprise JavaBeans.

## Merkmale

Der Objektzugriff in Java ist VM-intern über Referenzen implementiert, die den aus C oder C++ bekannten Zeigern ähneln. Die Sprachdefinition (Java Language Specification) bezeichnet sie als „Reference Values“ um deutlich zu machen, dass sie im Quelltext des jeweiligen Programms als Call by value übergeben werden. Aus Sicherheitsgründen erlauben diese nicht, die tatsächliche Speicheradresse zu erkennen oder zu modifizieren. Sogenannte Zeigerarithmetik ist in Java somit ausgeschlossen. Per Design kann so ein häufiger Typ von Fehlern, die in anderen Programmiersprachen auftreten, von vornherein ausgeschlossen werden.
Zusammengehörige Klassen werden in Paketen (englisch packages) zusammengefasst. Diese Pakete ermöglichen die Einschränkung der Sichtbarkeit von Klassen, eine Strukturierung von größeren Projekten sowie eine Trennung des Namensraums für verschiedene Entwickler. Die Paketnamen sind hierarchisch aufgebaut und beginnen meist mit dem (umgekehrten) Internet-Domainnamen des Entwicklers, also beispielsweise com.google bei Klassenbibliotheken, die Google zur Verfügung stellt. Klassennamen müssen nur innerhalb eines Paketes eindeutig sein. Hierdurch ist es möglich, Klassen von verschiedenen Entwicklern zu kombinieren, ohne dass es zu Namenskonflikten kommt. Die Hierarchie der Paketnamen hat allerdings keine semantische Bedeutung. Bei der Sichtbarkeit zwischen den Klassen zweier Pakete spielt es keine Rolle, wo sich die Pakete in der Namenshierarchie befinden. Klassen sind entweder nur für Klassen des eigenen Paketes sichtbar oder für alle Pakete.
Weiter unterstützt die Sprache Threads (nebenläufig ablaufende Programmteile) und Ausnahmen (englisch exception). Java beinhaltet auch eine automatische Speicherbereinigung (englisch garbage collector), die nicht (mehr) referenzierte Objekte aus dem Speicher entfernt.
Java unterscheidet explizit zwischen Schnittstellen und Klassen. Eine Klasse kann beliebig viele Schnittstellen implementieren, hat aber stets genau eine Basisklasse. Java unterstützt kein direktes Erben von mehreren Klassen („Mehrfachvererbung“), jedoch die Vererbung über mehrere Hierarchie-Ebenen (Klasse Kind erbt von Klasse Vater, die ihrerseits von Klasse Großvater erbt usw.). Je nach Sichtbarkeit (public, protected, default/package-private, private) erbt die Klasse Methoden und Attribute (auch Felder genannt) von ihren Klassenvorfahren. Alle Klassen sind – direkt oder indirekt – von der Wurzelklasse Object abgeleitet.
Zu Java gehört eine umfangreiche Klassenbibliothek. Dem Programmierer wird damit eine einheitliche, vom zugrundeliegenden Betriebssystem unabhängige Schnittstelle (Application programming interface, API) angeboten.
Mit Java 2 wurden die Java Foundation Classes (JFC) eingeführt, die unter anderem Swing bereitstellen, das zur Erzeugung plattformunabhängiger grafischer Benutzerschnittstellen (GUI) dient und auf dem Abstract Window Toolkit basiert.

## Syntax

Syntax/Grammatik und Semantik von Java sind in der Java Language Specification (Java-Sprachspezifikation) von Sun Microsystems dokumentiert. Das folgende Beispielprogramm gibt die unter Programmierern klassische Meldung „Hallo Welt!“, gefolgt von einem Zeilenumbruch, auf dem Ausgabemedium aus.

## Entstehung und Weiterentwicklung

### Entstehung

Herkunft und Entwicklung der Programmiersprache Java sowie mit ihr verwandter Technik sind im Artikel Java-Technologie beschrieben sowie wann welche Version veröffentlicht wurde.

### Oracle und JCP

Neben Oracle kümmert sich eine Vielzahl von Einzelpersonen, kleiner und großer Unternehmen, wie Apple, IBM, Hewlett-Packard und Siemens beim Java Community Process (JCP) unter anderem um die Weiterentwicklung der Java-Sprachspezifikation. Der JCP wurde 1998 von Sun Microsystems ins Leben gerufen.

### Java als freie Software

Sun hatte zugesichert, sein JDK unter der GNU General Public License zu veröffentlichen; mit der Übernahme durch Oracle wurde auch die offene Lizenzierung übernommen. Am 13. November 2006 wurden bereits mit dem Compiler javac und der Hotspot Virtual Machine erste Teile als Open Source veröffentlicht. Zudem wurde mit OpenJDK eine Community-Seite eröffnet, mit deren Hilfe die Entwicklung koordiniert werden soll. Am 8. Mai 2007 folgten dann große Teile des „Java-SE“-Quellcodes zum Erstellen eines JDK. Eine Ausnahme stellte solcher Code dar, für den Sun nicht die nötigen Rechte besaß, um ihn freizugeben. Dieser liegt somit nur in kompilierter Form vor. Ebenfalls kündigte Sun an, dass Entwicklungen auf Grundlage des OpenJDK das „Java Compatible“-Logo führen dürfen, wenn sie nach dem „Java Compatibility Kit“ (JCK) zertifiziert sind.
Zuvor wurde der Quelltext von Java unter anderem bei jedem JDK mitgeliefert und ermöglichte so zwar Einsicht, er durfte aber nicht beliebig modifiziert werden. Deswegen gibt es neben den offiziellen JCP auch diverse unabhängige Vereinigungen, die es sich zum Ziel gesetzt haben, ein unter eine freie Open-Source-Lizenz gestelltes Java bereitzustellen. Die bekanntesten dieser Projekte waren Apache Harmony, Kaffe und das GNU-Classpath-Projekt. Gegenwärtig gibt es neben OpenJDK noch eine weitere große Implementierung, die aktuelle Java Releases veröffentlicht, Eclipse OpenJ9. Diese JVM-Implementierung wurde von IBM an die Eclipse Foundation übergeben. OpenJ9 steht mehrfachlizenziert unter EPL 2.0, Apache 2.0 und GNU 2.0 with Classpath Exception.

## Unterschiede zu ähnlichen Sprachen

Darüber hinaus bietet Java die Möglichkeit, aus Java-Code heraus verschiedene Skriptsprachen auszuführen. Ebenfalls gibt es eine Reihe an Programmiersprachen, die nach Java-Bytecode kompiliert werden. Damit lassen sich Programmteile auch in anderen Programmiersprachen umsetzen.
Mit JDK Version 7, das am 28. Juli 2011 erschienen ist, wurde auch die Unterstützung für dynamische „Fremdsprachen“ durch die Virtual Machine verbessert.

### JavaScript

Java darf nicht mit der Skriptsprache JavaScript verwechselt werden. JavaScript wurde von Netscape Communications entwickelt, hieß früher LiveScript und wurde im Zuge einer Kooperation zwischen Netscape und Sun Microsystems in JavaScript umbenannt.
JavaScript ist eine dynamisch typisierte, objektbasierte, aber, bis ECMAScript 2015, klassenlose Skriptsprache mit einer ähnlichen Syntax wie C, Perl oder Java, unterscheidet sich jedoch in vielerlei Hinsicht von Java. Trotz der Ähnlichkeit der Namen der beiden Programmiersprachen unterscheidet sich Java stärker von JavaScript als zum Beispiel von C++ oder C#. JavaScript wurde ursprünglich vornehmlich in HTML-Seiten zur eingebetteten Programmierung verwendet, um interaktive Webapplikationen zu ermöglichen. Mittlerweile wird JavaScript auf der Laufzeitumgebung Node.js zunehmend auch für Server-Applikationen genutzt.

### Smalltalk

Smalltalk ist eine der ältesten objektorientierten Programmiersprachen überhaupt. Java erbt von Smalltalk die grundsätzliche Konzeption eines Klassenbaumes, in den alle Klassen eingehängt werden. Dabei stammen alle Klassen entweder direkt oder indirekt von der Klasse java.lang.Object ab. Außerdem wurden die Konzepte der automatischen Speicherbereinigung (garbage collector) und der virtuellen Maschine übernommen sowie eine Vielzahl weiterer Merkmale der Sprache Smalltalk.
Smalltalk kennt jedoch keine primitiven Datentypen wie zum Beispiel int – selbst eine einfache Zahl ist ein Objekt. Dieses Konzept wurde nicht nach Java übernommen, primitive Datentypen werden aber ab Java 5 mittels Autoboxing bei Bedarf in die entsprechenden Objekttypen und umgekehrt umgewandelt.

### C++

Java lehnt seine Syntax an die der Programmiersprache C++ an. Im Gegensatz zu C++ fanden jedoch Mehrfachvererbung oder Zeigerarithmetik keinen Einzug. Klassen können nur eine Superklasse haben (Einfachvererbung), aber eine beliebige Anzahl von Interfaces implementieren. Interfaces entsprechen abstrakten Klassen in C++, die keine Attribute oder konkrete Methoden besitzen, werden allerdings konzeptionell anders als die auch in Java möglichen abstrakten Klassen verwendet. Die interne Speicherverwaltung wird dem Java-Entwickler weitgehend abgenommen; dies erledigt die automatische Speicherbereinigung. Allerdings garantiert auch dieser Mechanismus nicht den vollständigen Ausschluss von Speicherlecks. Letztlich muss der Programmierer dafür sorgen, dass nicht mehr verwendete Objekte von keinem laufenden Thread mehr referenziert werden. Einander referenzierende Objekte, die von keinem Thread aus mehr über Referenzen erreichbar sind, werden ebenfalls freigegeben, wobei es dem Garbage Collector (GC) obliegt, wann und ob überhaupt diese Objekte freigegeben werden. Jede Objektklasse besitzt zusätzlich eine Methode namens finalize(), die vom Garbage Collector aufgerufen werden kann, um zusätzliche „Aufräumarbeiten“ durchzuführen. Es gibt jedoch keine Garantie, wann und ob dies geschieht. Sie ist daher nicht mit einem Destruktor aus C++ vergleichbar.
Neben Mehrfachvererbung und Speicherarithmetik wurden bei der Entwicklung von Java noch weitere Konstrukte der Sprache C++ bewusst weggelassen:
Im Gegensatz zu C++ ist es in Java nicht möglich, Operatoren (zum Beispiel arithmetische Operatoren wie + und -, logische Operatoren wie && und ||, oder den Index-Operator []) zu überladen, das heißt in einem bestimmten Kontext mit neuer Bedeutung zu versehen. Dies sorgt einerseits für eine Vereinfachung der Sprache an sich und verhindert, dass Quellcodes mit Operatoren, die mit schwer nachvollziehbarer Semantik überladen werden, unleserlich gemacht werden. Andererseits würden benutzerdefinierte Typen mit überladenen Operatoren in C++ eher wie eingebaute Typen erscheinen können – vor allem numerischer Code wäre so mitunter einfacher nachzuvollziehen. Die Sprachdefinition von Java definiert jedoch typabhängiges Verhalten der Operatoren + (Addition bei arithmetischen Operanden, andernfalls zur Verkettung von Zeichenketten „string concatenation“) sowie &, | und ^ (logisch für boolean und bitweise für arithmetische Operanden). Das lässt diese Operatoren zumindest wie teilweise überladene Operatoren erscheinen.
Das C++-Konstrukt der Templates, die es erlauben, Algorithmen oder sogar ganze Klassen unabhängig von den darin verwendeten Datentypen zu definieren, wurde in Java nicht übernommen. Ab Version 5 unterstützt Java aber sogenannte Generics, die zwar keinerlei Metaprogrammierung erlauben, aber ähnlich wie C++-Templates typsichere Container und ähnliches ermöglichen.
In Java wurde das Schlüsselwort const reserviert, hat aber keine Funktion. Die Alternative zu const (und Präprozessor-Direktiven) ist final. Im Gegensatz zu const wird final in einer Methodensignatur nicht vererbt und hat somit nur im aktuellen Scope Gültigkeit. Den final-Modifikator kann eine Klasse (die dadurch nicht mehr abgeleitet werden kann), ein Attribut (dessen Wert so nur einmal gesetzt werden kann) oder eine Methode (die dadurch unüberschreibbar wird) besitzen.

### C# (.NET)

Die .NET-Plattform von Microsoft kann als Konkurrenzprodukt zu Java gesehen werden. Mit der Spezifikation von C# hat Microsoft im Rahmen seiner .NET-Strategie versucht, den Spagat zwischen der Schaffung einer neuen Sprache und der leichten Integration bestehender Komponenten zu schaffen.
Konzeptionelle Unterschiede zu Java bestehen insbesondere in der Umsetzung von Callback-Mechanismen. In .NET ist hierzu die Unterstützung von Delegaten (englisch delegates) implementiert, einem Konzept, das mit Funktionszeigern vergleichbar ist. In Java kann dies über Methodenreferenzen oder Lambdaausdrücke erreicht werden.
Des Weiteren unterstützen .NET-Sprachen sogenannte Attribute (attributes), die es erlauben, die Funktionalität der Sprache über Metadaten im Code zu erweitern (eine ähnliche Funktionalität wurde in Form der oben beschriebenen Annotations in Java 5.0 übernommen).
C# enthält auch Bestandteile der Sprache Visual Basic, zum Beispiel Eigenschaften (properties), sowie Konzepte aus C++.
In .NET ist es ebenso wie in Java möglich, Ausnahmen (exceptions) zu einer Methode zu deklarieren. In Java können Ausnahmen so deklariert werden, dass sie auch verarbeitet werden müssen (Checked Exception).
Windows Systembefehle (Win-ABI-Aufrufe) können in .NET über platform invoke oder mittels C++/CLI aufgerufen werden. Das ist in Java nicht möglich, es besteht mit dem Java Native Interface aber die Möglichkeit, C- und C++-Code per DLL direkt zu referenzieren und außerhalb der Java Virtual Machine ausführen zu lassen.

### Scala

Scala ist eine Programmiersprache, die objektorientierte und funktionale Paradigmen vereint und wie Java auf der Java Virtual Machine ausgeführt werden kann.
Im Gegensatz zu Java, und ähnlich wie C#, ist das Typsystem vereinheitlicht und umfasst Referenz- und Werttypen. Benutzer können weitere Typen definieren – in Java sind die verfügbaren Werttypen auf die fest vordefinierten primitiven Typen (int, long, …) beschränkt.
Scala verwendet statt Schnittstellen (interface) sogenannte Traits (traits), die wiederverwendbare Methodenimplementierungen enthalten können.
Weitere Funktionalität, die nicht in Java enthalten ist, umfasst unter anderem Typen und Funktionen höherer Ordnung, Pattern Matching und frei wählbare Methoden- und Klassennamen.
Wie in C# gibt es keine checked exceptions. Allerdings können Methoden mit einer @throws-Annotation versehen werden. Scala entfernt unter anderem das Konzept statischer Methoden und Klassen (ersetzt durch companion objects), Raw Types, die Notwendigkeit von Getter- und Settermethoden und die unsichere Varianz von Arrays.
Die Varianz generischer Typen muss nicht wie in Java bei der Nutzung erfolgen (use-site variance), sondern kann direkt bei der Deklaration angegeben werden (declaration-site variance).

### Kotlin

Kotlin ist eine plattformübergreifende, statisch typisierte Programmiersprache, die in Bytecode für die Java Virtual Machine (JVM) übersetzt wird, aber auch in JavaScript-Quellcode oder (mittels LLVM) in Maschinencode umgewandelt werden kann.
Anders als in Java wird bei Kotlin der Datentyp einer Variable nicht vor dem Variablennamen, sondern danach, abgetrennt durch einen Doppelpunkt, notiert. Allerdings unterstützt Kotlin auch Typinferenz, sodass der Typ oft auch weggelassen werden kann, wenn er aus dem Zusammenhang klar ist. Als Anweisungsende genügt der Zeilenumbruch, optional kann jedoch auch ein Semikolon verwendet werden. Zusätzlich zu Klassen und Methoden (in Kotlin: member functions) aus der objektorientierten Programmierung unterstützt Kotlin prozedurale Programmierung unter Verwendung von Funktionen sowie bestimmte Aspekte der funktionalen Programmierung. Als Einstiegspunkt dient wie bei C u. ä. eine main-Funktion.
Kotlin lässt sich außerdem zur Entwicklung von Android-Apps verwenden und wird dafür seit 2017 offiziell von Google unterstützt. Seit Mai 2019 ist Kotlin die von Google bevorzugte Sprache für Android-Appentwicklung.

## Anwendungsarten

Mit Java können zahlreiche verschiedene Arten von Anwendungen erstellt werden.

### Java-Webanwendungen

Java-Webanwendungen sind Java-Programme, die auf einem Webserver geladen und gestartet werden und beim Benutzer in einem Webbrowser ablaufen bzw. dargestellt werden. Üblicherweise läuft ein Teil der Webanwendung auf dem Server (die Geschäftslogik und Persistenz) und ein anderer Teil am Webbrowser (die Logik der grafischen Benutzeroberfläche). Der Serverteil wird üblicherweise vollständig in Java geschrieben, der Browserteil üblicherweise in HTML und JavaScript. Es ist jedoch auch möglich, Java-Webanwendungen inklusive GUI-Logik vollständig in Java zu schreiben (siehe z. B. Google Web Toolkit oder die Remote Application Platform). Bekannte Beispiele für Java-Webanwendungen sind Twitter, Jira, Jenkins oder Gmail (das nicht vollständig, aber zu großen Teilen in Java geschrieben ist).

### Java-Desktop-Anwendungen

Unter Desktop-Anwendungen oder Applikationen werden normale Desktop-Programme zusammengefasst. Sowohl Internet-Kommunikationsprogramme als auch Spiele oder Office-Anwendungen, die auf einem normalen PC laufen, werden so genannt. Bekannte Beispiele für Java-Desktop-Anwendungen sind die integrierte Entwicklungsumgebung Eclipse, das Filesharing-Programm Vuze oder das Computerspiel Minecraft.

### Java-Applets

Java-Applets sind Java-Anwendungen, die normalerweise in einem Webbrowser ausgeführt werden. Sie sind üblicherweise auf einen durch ein spezielles HTML-Tag definierten Bereich einer Webseite beschränkt. Voraussetzung für die Ausführung von Java-Applets ist ein Java-fähiger Browser. Diese Anwendungsform wird seit Java 11 nicht mehr unterstützt, nachdem sie bereits in Java 9 als „veraltet“ gekennzeichnet wurde.

### Apps

Apps sind kleinere Applikationen für mobile Geräte wie Handys, Smartphones, PDAs oder Tablets. Sie laufen üblicherweise auf speziellen, für die Ausführung von Java-Anwendungen auf mobilen Geräten optimierten Java-Plattformen wie Java ME.
Apps für das Android-Betriebssystem von Google werden in der hier beschriebenen Sprache Java programmiert, basieren aber auf einer abweichenden Klassenbibliotheks-API.

## Entwicklungsumgebungen

Es gibt eine große Vielfalt von Entwicklungsumgebungen für Java, sowohl proprietäre als auch freie (Open Source). Die meisten Entwicklungsumgebungen für Java sind selbst ebenfalls in Java geschrieben.
Die bekanntesten Open-Source-Umgebungen sind das von der Eclipse Foundation bereitgestellte Eclipse und das von Sun entwickelte NetBeans.
Unter den kommerziellen Entwicklungsumgebungen sind IntelliJ IDEA von JetBrains (welches in der Community Edition jedoch Freie Software ist), JBuilder von Borland sowie JCreator und das auf NetBeans basierende Sun ONE Studio von Sun, am verbreitetsten. Außerdem gibt es noch eine um einige hundert Plugins erweiterte Version von Eclipse, die von IBM unter dem Namen WebSphere Studio Application Developer („WSAD“) vertrieben wurde und ab Version 6.0 Rational Application Developer („RAD“) heißt.
Apple liefert mit macOS ab Version 10.3 die Entwicklungsumgebung Xcode aus, die verschiedene Programmiersprachen unterstützt, allerdings einen Schwerpunkt auf C, C++, Objective-C und Swift setzt.
Für das Programmieren von Android-Apps mit Java empfiehlt sich Android Studio.
Für Einsteiger und Ausbildungszwecke konzipiert ist die IDE BlueJ, wo unter anderem die Beziehungen zwischen den verschiedenen Klassen grafisch in Form von Klassendiagrammen dargestellt werden.
Sehr viele Texteditoren bieten Unterstützung für Java, darunter Emacs, jEdit, Atom, Visual Studio Code, Vim, Geany, Jed, Notepad++ und TextPad.

## Compiler

Ein Java-Compiler übersetzt Java-Quellcode (Dateiendung „.java“) in einen ausführbaren Code. Grundsätzlich unterscheidet man zwischen Bytecode- und Nativecode-Compilern. Einige Java-Laufzeitumgebungen verwenden einen JIT-Compiler, um zur Laufzeit den Bytecode häufig genutzter Programmteile in nativen Maschinencode zu übersetzen.

### Bytecode-Compiler

Im Normalfall übersetzt der Java-Compiler die Programme in einen nicht direkt ausführbaren Bytecode (Dateiendung „.class“), den die Java Runtime Environment (JRE) später ausführt. Die aktuelle HotSpot-Technologie kompiliert den Bytecode zur Laufzeit in nativen Prozessorcode und optimiert diesen abhängig von der verwendeten Plattform. Diese Optimierung findet dabei nach und nach statt, sodass der Effekt auftritt, dass Programmteile nach mehrmaliger Abarbeitung schneller werden. Andererseits führt diese Technik, die ein Nachfolger der Just-in-time-Kompilierung ist, dazu, dass Java-Bytecode theoretisch genauso schnell wie native, kompilierte Programme ausgeführt werden könnte.
Die HotSpot-Technik ist seit der JRE Version 1.3 verfügbar und wurde seitdem stetig weiter verbessert.
Beispiele für Bytecode-Compiler sind javac (Teil des JDK) und war Jikes (eingestellt, Funktionsumfang bis Java SE 5) von IBM.

### Native Compiler

Es existieren auch Compiler für Java, die Java-Quelltexte oder Java-Bytecode in „normalen“ Maschinencode übersetzen können, sogenannte Ahead-of-time-Compiler. Nativ kompilierte Programme haben den Vorteil, keine JavaVM mehr zu benötigen, aber auch den Nachteil, nicht mehr plattformunabhängig zu sein.
Beispiele für native Java-Compiler waren Excelsior JET (eingestellt, bis Java SE 7), sowie GNU Compiler for Java (GCJ, eingestellt, bis J2SE 5.0) wie MinGW, Cygwin oder JavaNativeCompiler (JNC).

### Wrapper

Als weitere Möglichkeit kann das Java-Programm in ein anderes Programm „eingepackt“ (englisch to wrap) werden; diese äußere Hülle dient dann als Ersatz für ein Java-Archiv. Sie sucht selbständig nach einer installierten Java-Laufzeitumgebung, um das eigentliche Programm zu starten, und informiert den Benutzer darüber, wo er eine Laufzeitumgebung herunterladen kann, sofern noch keine installiert ist. Es ist also immer noch eine Laufzeitumgebung nötig, um das Programm starten zu können, aber der Anwender erhält eine verständliche Fehlermeldung, die ihm weiterhilft.
Java Web Start ist ein etwas eleganterer und standardisierter Ansatz für diese Lösung – er ermöglicht die einfache Aktivierung von Anwendungen mit einem einzigen Mausklick und garantiert, dass immer die neueste Version der Anwendung ausgeführt wird. Dadurch werden komplizierte Installations- oder Aktualisierungsprozeduren automatisiert.
Beispiele für Java-Wrapper sind JSmooth oder Launch4J. JBuilder von Borland und NSIS sind ebenfalls in der Lage, einen Wrapper für Windows zu erstellen.

## Java User Groups

Sowohl international als auch in Deutschland gibt es Java User Groups (JUG). Der Zweck dieser Vereinigungen an Java-Anwendern ist freier Informationsaustausch.

## Konferenzen

Wichtige deutschsprachige Konferenzen rund um Java sind:

JAX
Java-Tage
JavaLand
Internationale Konferenzen mit dem Schwerpunkt Java:

JavaOne

## Trivia

Mit Helloworld.java veröffentlichte die Band Nanowar of Steel 2024 einen Song in der Programmiersprache Java.
