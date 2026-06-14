---
url: https://de.wikipedia.org/wiki/Ruby_(Programmiersprache)
---

# Ruby (Programmiersprache)

## Überblick

Ruby (englisch für Rubin) ist eine höhere Programmiersprache, die Mitte der 1990er Jahre vom Japaner Yukihiro Matsumoto entworfen wurde.
Ruby ist objektorientiert, unterstützt aber mehrere weitere Programmierparadigmen (unter anderem prozedurale und funktionale Programmierung sowie Nebenläufigkeit), bietet dynamische Typisierung, Reflexion und automatische Speicherbereinigung. Ein Programm in Ruby wird zur Laufzeit interpretiert. 2012 wurde die Ruby-Spezifikation als internationale Norm ISO/IEC 30170 standardisiert.

## Entstehung und Geschichte

Yukihiro „Matz“ Matsumoto begann 1993 an einer eigenen Sprache zu arbeiten und gab am 21. Dezember 1995 die erste Version von Ruby, 0.95, frei. Den Namen, hergeleitet vom Edelstein Rubin, wählte er als Anspielung auf die Programmiersprache Perl. Matsumotos Ziel bei der Erschaffung der neuen Sprache war, eine Synthese aus Elementen der von ihm geschätzten Programmiersprachen Perl, Smalltalk, Eiffel, Ada und Lisp zu bilden und funktionale und imperative Programmierparadigmen in Einklang zu bringen. Darüber hinaus sollte die Sprache objektorientierter als Python und zugleich mächtiger als Perl sein. Auch Flexibilität, Ausdrucksstärke und Einfachheit spielten bereits eine gewichtige Rolle.
Besonders wichtig, neben den technischen Eigenschaften, war Matsumoto an Ruby auch die emotionale Wirkung auf Anwender, Mitentwickler und sich selbst. Matsumotos Auffassung dazu ist folgende:

In Japan erlangte Ruby nach Erscheinen rasch an Bekanntheit. Im Westen verhalfen der Programmiersprache das Buch Programming Ruby (2000) (bekannt als Pickaxe book als Anspielung auf die Illustration auf dem Buchdeckel) und das Webframework Ruby on Rails (2004) zum Durchbruch. In den folgenden Jahren mehrte sich auch die englisch- und deutschsprachige Dokumentation sowie Literatur. Die Verkehrssprache der Kern-Entwickler wechselte von Japanisch zu Englisch. Heute wird die Sprache als Open-Source-Projekt weitergepflegt und ist Gegenstand diverser Publikationen und Kurse. Veröffentlichungen mit neuen Funktionen geschehen üblicherweise im Jahresrhythmus zur Weihnachtszeit.
Ein Meilenstein in der Entwicklung von Ruby war die Version 1.9 im Jahr 2007, welche mit vielen Änderungen ziemlich inkompatibel zu den Vorgängerversionen wurde. Die Semantik einiger Konstrukte hat sich in dieser Version geändert. Der Interpreter wurde komplett neu geschrieben, womit Rubyprogramme wesentlich schneller wurden. Zeichenketten bekamen separate Zeichenkodierungen, Variablen in Blöcken wurden block-lokal, IPv6-Unterstützung und einige syntaktische Erleichterungen fanden Einzug.
Mit Ruby 2.0 wurden Schlüsselwortparameter eingeführt (bspw.: 0.step(by: 5, to: 20)), das Vorhängen (prepend) von Modulen und Bedarfsauswertung (lazy-evaluation) von Iteratoren eingeführt. Außerdem wurde die Standardzeichenkodierung auf UTF-8 festgelegt. Ruby 2.1 führte Refinements (eine Methode um Überschreibungen von Klassen lokal zu beschränken) ein. In Ruby 2.2 wurde der vorhandene Garbage-Collector durch einen inkrementellen ersetzt. Mit Ruby 2.3 ist es möglich, alle Zeichenketten automatisch schreibgeschützt zu erstellen und ein neuer Operator &. (Safe-Navigation-Operator) zum Umgehen von Nil-Überprüfungen wurde eingeführt. In Ruby 2.4 wurden die Klassen Fixnum und Bignum vereinheitlicht. Seit Ruby 2.5 können Exceptions in do-end-Blöcken ohne separate Unterblöcke gefangen werden. Ruby 2.6 lieferte den ersten Code eines optionalen JIT-Compilers und fügte Bundler (s. u.) zur Standarddistribution hinzu. Ruby 2.7 führte ausführliches Patternmatching und einige syntaktische Erleichterungen dem Sprachkern hinzu. Jede neue Ruby-Version ab 1.9 brachte zudem Geschwindigkeitsoptimierungen verschiedenen Ausmaßes mit sich. Zusätzlich erweiterte jede Version die Standardbibliothek um nützliche Methoden. Es wurde stets auf Abwärtskompatibilität geachtet, allerdings nicht immer zu hundert Prozent erreicht.
Ruby 3.0, erschienen am 25. Dezember 2020, ist die erste Version, welche die „Ruby 3x3“ genannten Forderungen erfüllt: Dreimal höhere Ausführungsgeschwindigkeit zu Ruby 2.0 (durch JIT-Compiler), Nebenläufigkeit ohne GIL (allerdings noch experimentell) und statische Typanalyse (optional). Das eigentliche Update 3.0 stellt allerdings keinen größeren Sprung als die vorherigen jährlichen Veröffentlichungen dar und ist abwärtskompatibel zu Ruby 2.x.

## Merkmale

### Alles ist ein Objekt

Ruby ist eine Programmiersprache, die, obwohl sie auch viele andere Programmierparadigmen unterstützt, von Grund auf objektorientiert ist. Das bedeutet konkret, dass in Ruby ausnahmslos jeder Wert ein Objekt und jede Funktion eine Methode ist (d. h. einer Klasse zugeordnet ist). Ausnahmen für primitive Datentypen wie in vielen anderen objektorientierten Programmiersprachen gibt es nicht. Auch Klassen sind Objekte. Objekte speichern Instanzvariablen und haben eine Klasse. Klassen sind Objekte, die Methoden speichern und eine Vererbungshierarchie besitzen. Auf Instanzvariablen kann ausschließlich über Methoden zugegriffen werden.

Werden in Ruby „Funktionen“ definiert, so sind das in Wirklichkeit Methoden, die dem Objekt Object hinzugefügt werden. In Ruby erben alle Objekte implizit von Object, weswegen so definierte „Funktionen“ in jedem Objekt und damit allgegenwärtig verfügbar sind. Allerdings werden diese Funktionen als private markiert, das heißt, sie können nicht von außen auf einem Objekt aufgerufen werden.

Da in Ruby Objekte dynamisch sind, kann man mit Ruby auch prototypbasiert programmieren. Das bedeutet grob, dass Objekte eigene Methoden haben können (außerhalb der von der Klasse vorgegebenen) und kopiert und verändert werden können (da nur Klassen Methoden beinhalten können, wird im Hintergrund eine versteckte neue Klasse nur für das eine Objekt angelegt).

### Blöcke

In den meisten höheren Programmiersprachen ist es möglich, Funktionen in irgendeiner Form zusätzlich als Parameter Logik zu übergeben, sei es durch First-Class-Funktionen oder First-Class-Objekte (deren Methoden dann die Logik bereitstellen). Das ist in Ruby nicht anders, allerdings hat Ruby den Spezialfall, dass genau eine Funktion übergeben wird, syntaktisch (und auch von der Rechenleistung) stark optimiert. Dieser Spezialfall wird Block genannt, gemeint als ein Block Programmierlogik, den die Funktion zu benutzen hat.
Blöcke werden Funktionen als separate Parameter übergeben und folgen als letztes Argument, eingegrenzt durch geschwungene Klammern oder die Schlüsselworte do und end. Im Folgenden wird die Methode times des Objekts 10 aufgerufen und ein Block übergeben. Beide Aufrufe sind identisch.

Zusätzlich können Blöcken Parameter übergeben werden und sie haben auch einen Rückgabewert. Zum Aufrufen des übergebenen Blocks wird innerhalb der aufgerufenen Methode das Schlüsselwort yield verwendet. Werden nach yield Parameter angegeben, so werden diese dem Block übergeben, der sie zu Beginn als lokale Variablen deklarieren oder ignorieren kann. Blöcke (ebenso wie Methoden) geben automatisch den letzten Ausdruck des Blockes als Rückgabewert zurück (mittels break und next kann aber auch an anderen Stellen zurückgesprungen werden).

Blöcke können auch in Funktionsobjekte umgewandelt werden. Wird innerhalb der Parameterliste einer Methode vor den letzten Parameter ein & geschrieben, wandelt Ruby den übergebenen Block in ein Proc (ein Funktions-Objekt) um. Alternativ können Procs auch manuell durch die Schlüsselworte proc, lambda und -> angelegt werden. Aufgerufen werde diese Objekte durch die Methoden call, [] oder .(). Da Ruby runde Klammern lediglich zum Gruppieren nutzt, können Procs nicht (wie in anderen Programmiersprachen üblich) mit proc_name() aufgerufen werden.

Alle Blöcke sind Closures, sie speichern also z. B. den Zustand lokaler Variablen, wenn sie innerhalb des Blocks dauerhaft benötigt werden.

### Mixins

Ruby beherrscht bewusst keine Mehrfachvererbung, bietet stattdessen aber ein Konzept namens Mixin (deutsch: Beimischung). Mixins sind Sammlungen von Methoden, die beliebigen Klassen beigemischt werden können. Eine Klasse kann beliebig viele Mixins beinhalten. Mixins werden in der Vererbungshierarchie zwischen Klasse und Superklasse in der Reihenfolge eingehängt, in der sie geschrieben wurden. Alternativ ist es auch möglich, Mixins vor die eigentliche Klasse zu hängen (u. a. hilfreich für Aspektorientierte Programmierung). Um Mixins zu definieren, werden in Ruby Module benutzt, das sind quasi Klassen (d. h. Sammlungen von Methoden), die nicht instanziiert werden können, und Namensräume in einem.

#### Offene Klassen

In Ruby sind alle Klassen offen, das heißt sämtliche Methoden können im späteren Programmverlauf ausgetauscht werden. Das gilt auch für alle ruby-internen Klassen. Um Methoden zu überschreiben, muss lediglich eine neue Klasse mit demselben Namen wie die zu überschreibende Klasse angelegt werden. Ruby tauscht dann die neu definierten Methoden aus oder fügt sie hinzu. Diese Technik ist sehr mächtig, ermöglicht aber auch schwer auffindbare Fehler, besonders in größeren Projekten. Aus diesem Grund wird sie auch leicht abwertend Monkey-Patching genannt. Etwas Abhilfe zu den auftretenden Problemen schaffen Refinements, eine Möglichkeit die Überschreibungen lokal einzuschränken. Die zuvor vorgestellte Methode, Module den gewünschten Klassen vorzuhängen (prepend), ist meist die sichere Variante (und bietet außerdem die Möglichkeit die überdeckte Methode direkt aufzurufen).

### Domänenspezifische Sprache

Ruby wird gerne benutzt zum Erzeugen von domänenspezifischen Sprachen. Das sind Textbausteine, die weniger wie Programmcode aussehen, sondern mehr wie eine Auszeichnungssprache, in Wirklichkeit aber normaler Ruby-Code sind. Möglich macht das zum einen die flexible Schreibweise von Ruby, bspw. sind Klammern hinter Methodenaufrufen oder Semikola am Ende der Zeile optional. Zum anderen bietet Ruby viele Möglichkeiten zur Metaprogrammierung, die es möglich machen, redundante Ausdrücke verschwinden zu lassen und hinter den Kulissen das Programm zu verändern. Hier als Beispiel die Konfiguration einer Testfabrik für FactoryBot:

### Mächtige Standardbibliothek

Die Kern-Klassen (String, Integer, Float, Array, Hash, Range, Regexp) bringen eine Fülle an Methoden mit, die in jedem Rubyprogramm sofort verwendet werden können. Insbesondere durch die häufige Nutzung von Blöcken können mit diesen Methoden lange Programme auf wenige Zeilen reduziert werden, weshalb sich Ruby gut zum Zeigen von Proof of Concepts eignet. Bemerkenswert ist das Modul Enumerable, welches viele Konzepte der funktionalen Programmierung direkt in den Ruby-Kern bringt. Enumerable kann in jedes Objekt eingebunden werden, welches einen iterierbaren Container darstellt und die Methode each implementiert, bspw. die Klassen Array, Hash und Range. For-Schleifen sind in Ruby deshalb meist unnötig. Die im Folgenden gezeigten Methoden reduce, count, sort_by, each_slice und map sind alles Methoden aus Enumerable und können somit selbst erstellten Klassen leicht hinzugefügt werden.

Zusätzlich zu den integrierten Modulen wird Ruby standardmäßig mit vielen Modulen ausgeliefert. Bspw. sind Unterstützung für JSON, YAML, HTTP, Benchmarks, Primzahlen, sichere Zufallszahlen, OpenSSL und Logging sofort vorhanden.

### Metaprogrammierung

Ruby bietet weitreichende Möglichkeiten zu Metaprogrammierung an. Damit ist es z. B. möglich, Methoden zu generieren, Instanzvariablen auszutauschen, die Vererbungshierarchie zu verändern oder Konstanten zu bearbeiten. Die Syntax zu verändern oder weitere Operatoren hinzuzufügen geht allerdings nicht. Hier sei als Beispiel eine Methode aufgeführt, Setter und Getter automatisch zu erzeugen (unter den Namen attr_reader, attr_writer, attr_accessor bereits im Standard enthalten).

Diese Techniken eignen sich auch gut zum Debuggen von Anwendungen oder zum Analysieren schlecht dokumentierter Anwendungen oder Bibliotheken. Bspw. antwortet jedes Objekt beim Aufruf der Methode methods mit einer Liste aller seiner Methoden, instance_variables gibt eine Liste aller Instanzvariablen zurück.

### Integration in Unix

Ruby bietet sich, ähnlich wie Perl, an, direkt in die Pipeline der Unix-Shell integriert zu werden. Möglich machen das Kommandozeilenparameter des Rubyinterpreters, mit denen man Programmlogik und übliches Programmverhalten definieren kann (üblicherweise die gleiche Operation auf jede Zeile anzuwenden). Ruby erweitert die Standard-Unixwerkzeuge mit fortgeschrittenen Methoden zur Textanalyse und Textverarbeitung.
Weiterhin bietet Ruby auch die Möglichkeit, innerhalb eines Programms bequem Prozesse zu starten, deren Eingabe zu steuern und Ausgabe und Rückgabewerte auszulesen. Code innerhalb `` wird direkt an die Unix-Shell übergeben. Bspw. speichert der Befehl os_string = `uname -a` den Betriebssystemnamen direkt in eine Rubyvariablen. Der Rückgabewert des letzten Programmaufrufs wird analog zur Shell automatisch in der globalen Variablen $? gespeichert. Auch Signalbehandlung, Sockets und Threads werden ohne zusätzliche Bibliotheken direkt vom Sprachkern unterstützt. Zum Beschleunigen der Verarbeitung gibt es in Ruby ein Modul namens FileUtils, das viel der Funktionalität vieler Unix-Dateiverwaltungsprogramme (rm, cp, chmod) direkt in Ruby abbildet.

### Syntax und Grundlagen

#### Namenskonvention

Ruby folgt der üblichen Konvention für Methoden- und Variablennamen, ein Name muss mit einem Kleinbuchstaben oder Unterstrich beginnen, dann dürfen beliebige Buchstaben (nach Unicode), Ziffern und Unterstriche folgen. Methoden dürfen zusätzlich mit einem Ausrufe- oder Fragezeichen enden. Nach der üblichen Konvention dient Ersteres als Hinweis, dass diese Methode eine schärfere Version der gleichen Methode ohne Ausrufezeichen ist (verändert den Zustand des Objekts, wirft Fehler, …), Letzteres bedeutet, dass die Funktion ein Boolean zurückgibt (true oder false). Fängt ein Variablenname mit einem Großbuchstaben an, so ist es eine Konstante. Variablen können zusätzlich mit einem Sonderzeichen anfangen, welches den Gültigkeitsbereich beschreibt.

#### Variablenbezeichner

Ruby unterscheidet fünf Gültigkeitsbereiche:

Normalerweise ist eine Variable lokal innerhalb des umgebenden Blocks oder der umgebenden Methode gültig.
Ein @ vor Variablen deklariert Instanzvariable, sie werden dann dauerhaft der Instanz zugeordnet und sind nur in dieser sichtbar. Auf Instanzvariablen kann von außen nur über Methoden zugegriffen werden. Zugriff auf nicht vorhandene Instanzvariablen werfen keinen Fehler, sondern geben nil zurück
Ein vorangestelltes @@ macht Variablen zu Klassenvariablen, die zur umgebenden Klasse gehören.
Mit $ werden Variablen global und sind damit im gesamten Programm sichtbar.
Der Gültigkeitsbereich für Konstanten richtet sich nach der lokalen Verschachtelungstiefe und kann mit :: spezifiziert werden

#### Methodenaufrufe und Ausdrücke

In Ruby werden Methodenaufrufe nicht zwingend mit nachfolgenden Klammern gekennzeichnet. gets.chomp ist also äquivalent zu gets().chomp(). Wenn Methoden Parameter benötigen, müssen diese in Klammern gesetzt werden, wenn auf dem Ergebnis eine weitere Operation ausgeführt werden soll. "a,b,c".split ","ist ok, "a,b,c".split(",").join(" ") benötigt aber zwingend das erste Klammernpaar. Da Klammern auch zur Gruppierung eingesetzt werden, sollte bei erwünschtem Methodenaufruf niemals ein Leerzeichen zwischen Methodenname und Klammer gesetzt werden. So wird [1,2].join␣("|") * 2 als [1,2].join(("|") * 2) interpretiert, mit dem Ergebnis "1||2". [1,2].join("|") * 2 hingegen wird als ([1,2].join("|")) * 2interpretiert, und hat damit das Ergebnis "1|21|2".
Jede Anweisung bildet einen Ausdruck, der einer Variablen zugewiesen werden kann. Einzelne Anweisungen werden durch Zeilenumbrüche oder Semikolons getrennt. Der letzte Ausdruck innerhalb einer Methode bildet automatisch deren Rückgabewert. Es kann aber auch schon vorher mit Schlüsselwort return frühzeitig zurückgesprungen werden.

#### Datentypen

Die elementaren Datentypen besitzen bequemere Konstruktoren als das übliche Klasse.new

String: "Text", 'Text' oder %{Text} Text
Integer: 3 (Zehnersystem), 0775 oder 0o775 (Oktalsystem), 0xFF (Hexadezimalsystem) 0b1001 (Binärsystem) Ganzzahl (unbeschränkte Größe)
Float: 3.0 Fließkommazahl (beschränkte Genauigkeit)
Rational: 1/2r Rationale Zahl
Complex: 1 + 1i Komplexe Zahl
Array: [1,2,3] Auflistung, kann beliebige verschiedene Datentypen enthalten
Hash: { 1 => "eins", 2 => "zwei" } Zuordnung, ordnet jedem Wert vor den Pfeilen (Schlüssel) genau einen Wert zu
Regexp: /\A(eins|zwei)\z/ oder %r{\A(eins|zwei)\z} Regulärer Ausdruck
Range: 1..3 oder 1...4 (rechtes Element ausschließend) Intervall
Symbol: :zeichen Symbol, siehe unten

#### Dynamische Strings

Zeichenketten sind in Ruby standardmäßig veränderbar, d. h., ein String-Objekt kann seinen Wert zur Laufzeit verändern. text = "Felar"; text[2..3] = "hle"; puts text verändert den Wert von text direkt (und gibt Fehler aus). Viele String-Methoden gibt es sowohl in einer verändernden Variante und in einer Variante, die ein neues String-Objekt erzeugt.

Strings können wie jedes Ruby-Objekt durch Aufruf der Methode freeze eingefroren werden (bspw. "ABC".freeze) und sind danach unveränderbar.

#### Symbole

Dieser etwas ungewöhnliche und auch umstrittene Datentyp ist in eine Art Mischung aus Integer und String. Er dient primär als Merkhilfe für Schlüssel von Hashes, da hier dynamische Strings unpraktisch sind und Integer wenig Speicher benötigen. Symbole besitzen die Textmanipulationsmethoden von String nicht, können aber jederzeit in Strings umgewandelt werden. Werden Symbole in Hashes als Schlüssel verwendet, kann eine vereinfachte Schreibweise verwendet werden. Statt { :a => 1, :b => 2 } kann auch { a: 1, b: 2 } geschrieben werden. Ruby-intern werden Symbole auch häufig verwendet, so können Methoden auch mit ihrem Symbolnamen aufgerufen werden: 1 < 4 kann auch als 1.send(:<, 4) geschrieben werden. Einfache Blöcke, die nur eine Methode des übergebenen Objekts aufrufen, können mit Symbolen vereinfacht geschrieben werden, wobei das Symbol die aufzurufende Methode bezeichnet. [1,2,3].map{|i| i.to_s} kann auch als [1,2,3].map(&:to_s) geschrieben werden (& wandelt das Symbol in einen Block um).

#### Wahrheitswerte

In Ruby gibt es drei verschiedene Wahrheitswerte, true, false und nil. Nil steht hierbei für ein fehlendes Ergebnis und wird wie false als Falsch ausgewertet. True und alle anderen Objekte werden als Wahr ausgewertet. puts "Ja!" if 0 evaluiert also zu Wahr, „Ja!“ wird ausgegeben.

#### Fehlerbehandlung

In den meisten Programmiersprachen muss der auf Fehler zu überprüfende Programmteil explizit markiert werden (meist durch die Schlüsselwörter try und catch), in Ruby muss für die üblichsten Fälle (der Programmteil umfasst die gesamte Methode oder den gesamten Block) kein eigener Bereich markiert werden. Wenn eine Abgrenzung erforderlich sein sollte, kann der Bereich mit begin und end markiert werden.

#### Alternative Bedingungen / Schleifen

Bedingungen und Schleifen bieten sowohl eine Postfixnotation als auch ein eigenes Schlüsselwort für das Inverse (inspiriert von Perl).

#### Reguläre Ausdrücke

Reguläre Ausdrücke sind in Ruby direkt im Sprachkern enthalten. Ruby benutzt eine eigene Regex-Engine namens Onigmo, deren Syntax und Funktionsumfang zum größten Teil kompatibel mit PCRE ist. Zusätzlich ist es möglich, Rubyvariablen direkt in reguläre Ausdrücke zu interpolieren und beliebige Programmlogik durch Blöcke beim Suchen und Ersetzen zu verwenden. Bspw. addiert folgender Befehl alle Zahlen in einem Text um eins: puts "test, 1, 2, 3".gsub(/(\d+)/){|zahl| zahl.to_i + 1} # => test, 2, 3, 4

#### Konstanten

Konstanten sind in Ruby alle Variablen, die mit einem Großbuchstaben anfangen. Alle Klassen und Module sind somit Konstanten. Das Besondere an Konstanten in Ruby ist ihre Verschachtelung. Konstanten innerhalb von Konstanten können mittels :: aufgerufen werden und unterliegen keinen Zugriffsrechten (wie etwa Methoden oder Instanzvariablen). Deswegen können Module als Namensräume benutzt werden, alle Variablen bleiben darin versteckt, auf alle Konstanten (wie bspw. Klassen) kann über den Modulnamen qualifiziert zugegriffen werden (bspw. MeinModul::MeineKlasse.new).

## Bestandteile

### Interaktive Ruby-Shell

Interactive Ruby (irb) ist eine Read-Eval-Print Loop (REPL), mit welcher der Anwender interaktiv Ruby programmieren kann. Irb wird mit dem Ruby-Interpreter ausgeliefert und kann zum Analysieren und Testen eingesetzt werden:

Als Alternative zu Irb gibt es Pry, eine REPL, welche weitaus tiefgreifendere Möglichkeiten zur Introspektion und zum Debuggen mitbringt.

### RDoc und ri

RDoc ist ein Software-Dokumentationswerkzeug, welches aus Ruby- und C-Quelltexten automatisch HTML-Dokumentationsdateien erstellt. Weiterhin wird eine Datenbank aufgebaut, die mit dem Tool ri durchsucht werden kann. RDoc und ri sind Bestandteil der Standarddistribution und werden zusammen mit dem Interpreter ausgeliefert.

### Rake

Rake steht für Ruby-Make und ist eine Alternative zu Make aus C. Da es in Ruby keine Kompilationsphase gibt, dienen Rakefiles zum Automatisieren repetitiver Aufgaben, bspw. dem Generieren von Dokumentation, dem Upload von Dateien oder dem Packen von Projekten. Rake kann wie Make Abhängigkeiten auflösen, wenn für Aufgabe B erst Aufgabe A erfüllt sein muss, so führt Rake automatisch Aufgabe A aus. Rake ist eine domänenspezifische Sprache, d. h., es lässt sich bequem wie eine Auszeichnungssprache lesen, bietet aber die vollen Möglichkeiten die Ruby bietet.

### Paketverwaltung

Ruby-Bibliotheken werden üblicherweise als Gems (RubyGems) gepackt und auf rubygems.org, dem zentralen Gem-Register, veröffentlicht. RubyGems löst bei der Installation oder bei Updates die im Paket angegebenen Abhängigkeiten eigenständig rekursiv auf und bietet dabei sogar die Möglichkeit Pakete gleichzeitig in unterschiedlichen Versionen bereitzustellen. Seit Ruby 1.9 ist Rubygems Bestandteil der Standardbibliothek von Ruby. Heute wird es meist zusammen mit Bundler benutzt (ebenfalls Teil der Standardbibliothek, seit Ruby 2.6), einem Programm welches Schnappschüsse aus einer Kollektion von Gems erstellt und diese Anordnung auf anderen Maschinen (oder andern Projektordnern) wiederherstellen kann.

## Implementierungen

### Referenzimplementierung

Die Referenzimplementierung von Ruby wurde von Yukihiro „Matz“ Matsumoto als Interpreter in C entworfen. Dieser wird meist als MRI (Matz’s Ruby Interpreter) oder auch als CRuby bezeichnet und ist derzeit am weitesten verbreitet. Den Kern bildet YARV (Yet Another Ruby VM), eine virtuelle Maschine. Statt ein Rubyprogramm direkt auszuführen, wird es zunächst in Bytecode übersetzt und dann von YARV interpretiert, wodurch sich ein Geschwindigkeitsvorteil ergibt. Weiterhin enthält diese Version eine leistungsstarke Regexp-Maschine namens Oniguruma und unterstützt Multibyte-Zeichensätze wie UTF-8.
Der offizielle Interpreter läuft auf den folgenden Betriebssystemen:

POSIX-kompatible Systeme (u. a. Linux, BSD und macOS)
Windows (aktuelle Versionen benötigen MSYS2 und laufen demnach ab Vista)

### Alternative Implementierungen

Es gibt zahlreiche alternative Ruby-Implementierungen mit unterschiedlichem Umfang und Zielen:

JRuby ist eine Implementierung des Ruby-Interpreters in Java mit dem Ziel, Ruby nahtlos in die Java-Plattform zu integrieren. JRuby ist fast vollständig kompatibel zu Ruby 3.1. JRuby ist zudem kompatibel zu einigen Ruby-Erweiterungen von Rubinius (Foreign Function Interface, Multi-VM-API), allerdings nicht mit C-Erweiterungen von CRuby.
Mruby ist eine weitere Ruby-Implementierung erschaffen vom Ruby-Schöpfer Yukihiro Matsumoto. Mruby ist eine auf eingebettete Systeme zugeschnittene Version von Ruby, welche sich durch geringen Speicherbedarf und hohe Modularisierung auszeichnet. Mruby stellt nicht die vollständige Funktionalität von CRuby bereit. Mruby kann den Quellcode in Bytecode übersetzen, welcher dann ohne Kompilationsschritt interpretiert oder in C-Programme eingebettet werden kann.
Opal ist ein Compiler von Ruby nach JavaScript. Es handelt sich um eine Implementierung der Ruby-Corelib und Stdlib sowie den zugehörigen Gems. Mit Opal lassen sich clientseitige Webanwendungen in Ruby realisieren. Es gibt einige Einschränkungen, die der Umsetzung nach JavaScript geschuldet sind.
TruffleRuby ist eine Ruby-Implementierung, die auf der GraalVM läuft. Ziel der Implementierung ist es, die Vorteile der GraalVM mittels Ruby nutzbar zu machen. Diese sind Geschwindigkeit (Start- und Laufzeit), Parallelisierung und das kontrollierte Ausführen von C-Erweiterungen. TruffleRuby ist open-source und wird maßgeblich von Oracle entwickelt.
Fullstaqruby ist keine eigene Implementierung, sondern eine spezielle Distribution von MRI, die für den Einsatz auf Webservern optimiert wurde. Im Vergleich zur Referenzimplementierung verspricht Fullstaqruby eine bessere Performance bei geringerem Speicherverbrauch.
Historische Ruby-Implementierungen:

Rubinius ist eine von Smalltalk-80 inspirierte Implementierung. Abgesehen von der virtuellen Maschine ist Rubinius vollständig in Ruby geschrieben. Rubinius ist nahezu vollständig kompatibel zu Ruby 2.3. Rubinius nutzt die Low Level Virtual Machine (LLVM) und ist kompatibel mit C-Erweiterungen der Referenzimplementierung. Seit 2020 gibt es keine Bewegung mehr im Projekt und die Projektwebseite ist mittlerweile leer.
IronRuby ist eine Implementierung, die Ruby ins .NET Framework integriert und in C# implementiert ist.Das Projekt ist seit 13. März 2011 inaktiv und wird nicht mehr weiterentwickelt.
Cardinal, ein Interpreter für die virtuelle Maschine Parrot. Das Projekt ist seit Juni 2013 inaktiv.
MagLev ist eine Implementierung des Unternehmens Gemstone für deren proprietäre Smalltalk VM. Das Projekt ist seit 2015 inaktiv.
MacRuby ist eine Implementierung in Objective-C von Apple, die bis Version 0.4, wie Ruby 1.9, YARV nutzt, ab Version 0.5 allerdings, wie Rubinius, auf die LLVM setzt. Die Weiterentwicklung wurde mit dem 5. Januar 2015 eingestellt.
Ruby Enterprise Edition ist eine modifizierte Version der Referenzimplementierung, bei der im Wesentlichen der Garbage Collector neu implementiert wurde. REE ist lediglich mit Ruby 1.8 kompatibel, die aktuellste Version stammt aus dem Jahr 2012.
Die Kompatibilität zur Referenzimplementierung wird durch das RubySpec-Projekt überprüft. Es stellt dabei sowohl eine Testsuite als auch eine Spezifikation für Ruby dar. RubySpec war ursprünglich ein Teil von Rubinius, wurde aber ausgelagert und danach auch von einer Vielzahl anderer Entwickler vorangetrieben. Es wird in vielen Ruby-Implementierungen verwendet.
Mit Hilfe eines Versionsmanagers, wie beispielsweise RVM (Ruby Version Manager) oder Rbenv, besteht die Möglichkeit, mehrere Ruby-Versionen parallel zu betreiben.
Ein wichtiges Merkmal der Implementierungen ist, ob sie in der Lage sind, Ruby on Rails auszuführen. Derzeit können dies neben der Referenzimplementierung nur JRuby, Rubinius und TruffleRuby.

## Verbreitung und Einsatz

Ruby ist für alle gängigen Desktop-Betriebssysteme frei erhältlich, in den meisten Linux-Distributionen ist es in den mitgelieferten Paketquellen enthalten, unter macOS sogar vorinstalliert.
Größte Verbreitung findet Ruby im Einsatz als Webserver-Skriptsprache. Das verbreitetste Framework hierbei ist Ruby on Rails, wobei es aber zahlreiche Alternativen verschiedener Größen gibt (bspw. Sinatra und Hanami). Die Liste großer Railsprojekte ist lang, am bekanntesten sind möglicherweise kommerzielle Webseiten wie GitHub, Airbnb oder Shopify oder Gemeinschaftsprojekte wie Diaspora, Redmine und Discourse. In Ruby geschriebene Webtechnologien wie Sass und Haml finden auch außerhalb des Ruby-Ökosystems Verwendung.
Weiter große Verbreitung findet Ruby als Skriptsprache zum Verwalten und Automatisieren von Serveraufgaben, angefangen als Ersatz für komplexere Bash-Skripte, als auch für größere Anwendungen, bspw. Puppet (Serverkonfiguration über das Netzwerk), Metasploit (Penetrationstests), YaST (OpenSUSE-Serveradministration) und Vagrant (Verwaltung virtueller Maschinen).
Ruby wird wegen der flexiblen Syntax ebenfalls gerne als domänenspezifische Sprache benutzt.
Mit mruby gibt es auch eine Ruby-Variante, die sich auf Eingebettete Systeme spezialisiert.
Vereinzelt wird Ruby auch als Skript-Sprache in Spielen verwendet, bspw. im RPG Maker.

## Kritik

Kritik an der Sprache wurde aus verschiedenen Gründen geübt:

Da Variablen vor Gebrauch nicht deklariert werden müssen, können bei Tippfehlern unerwartete Laufzeitfehler auftreten. Statische Codeanalyse, welche mit Ruby 3.0 hinzugefügt wurde, kann einige dieser Probleme verhindern.
Metaprogrammierung und Monkeypatching erlauben es einem Codestück, alle Klassen und Objekte des Prozesses, in dem es ausgeführt wird, zu ändern.
Auch an der Referenzimplementierung bemängeln Kritiker mehrere Aspekte:

YARVs Global Interpreter Lock führt dazu, dass mehrere Threads eines Prozesses nicht gleichzeitig auf verschiedenen Prozessorkernen ausgeführt werden können. Seit Ruby 3.0 gibt es ein alternatives System für Nebenläufigkeit, genannt Ractor, welches ohne GIL auskommt. Allerdings muss vorhandener Code dafür umgeschrieben werden.

## Sonstiges

### Nutzungsbedingungen

Ruby ist eine freie Software. Deshalb ist es kostenlos nutzbar und im Quelltext verfügbar. Dadurch ergibt sich die Möglichkeit, die Sprache an seine eigenen Bedürfnisse anzupassen oder sie in eigene Programme einzubinden.
Der Interpreter und die Standardbibliothek von Ruby sind grundsätzlich unter den Bedingungen der 2-clause BSD-Lizenz nutzbar. Des Weiteren besteht die Möglichkeit, Ruby unter einer eigenen freien Lizenz zu verwenden. Die Ruby-Lizenz ist GPL-kompatibel und wird von der Free Software Foundation als „frei“ akzeptiert.
Ältere Versionen von Ruby (1.9.2 und früher) verwendeten anstatt der BSD-Lizenz die GPL V2. Als Begründung für den Wechsel wurden Inkompatibilitäten der alten Lizenzierung mit der GPL V3 angeführt.

### RubyForge

RubyForge war eine öffentliche Softwareentwicklungsplattform für in Ruby geschriebene Softwareprojekte. Sie wurde im Jahr 2003 von Ruby Central gestartet, um der Ruby-Community eine Heimat für ihre Open-Source-Projekte zur Verfügung zu stellen.
Am 29. November 2009 wurden dort über 9.300 Projekte und mehr als 94.683 Benutzer geführt, am 15. Mai 2014 wurde der Dienst schließlich eingestellt.

## Normen und Standards

ISO/IEC 30170 (englisch; standardisiert Ruby auf über 317 Seiten). Erste Version April 2012.
