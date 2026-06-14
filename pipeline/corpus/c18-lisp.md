---
url: https://de.wikipedia.org/wiki/Lisp
---

# Lisp

## Überblick

Lisp ist eine Familie von Programmiersprachen, die 1958 erstmals spezifiziert wurde und am Massachusetts Institute of Technology (MIT) in Anlehnung an den ungetypten Lambda-Kalkül entstand. Es ist nach Fortran die zweitälteste Programmiersprache, die noch verbreitet ist.
Auf Basis von Lisp entstanden zahlreiche Dialekte. Zu den bekanntesten zählen Common Lisp und Scheme. Daher bezieht sich der Begriff Lisp oft auf die Sprachfamilie und nicht auf einen konkreten Dialekt oder eine konkrete Implementierung.

## Geschichte

Lisp steht für List Processor (Listenprozessor). Damit waren ursprünglich Fortran-Unterprogramme gemeint, mit denen symbolische Berechnungen durchgeführt werden sollten, wie sie der Lambda-Kalkül definiert. Steve Russell, einer der Studenten von John McCarthy, kam dann auf die fundamentale Idee, auf Grundlage dessen Formulierung eines „Lisp-Interpreters in Lisp“ einen Interpreter für diese Ausdrücke für die IBM 704 zu schreiben. Damit war die Programmiersprache Lisp geboren.
Die Grunddatenstrukturen von Lisp sind Einzelwerte (z. B. Symbole, Zahlen, Zeichenketten), die Atome genannt werden, und Cons-Zellen, aus denen Listen gebildet werden. Die Listen können beliebig verschachtelt werden (Listen von Listen). Damit lassen sich auch leicht Datenstrukturen wie ein assoziatives Array implementieren. Listen werden zur Darstellung in Lisp in runde Klammern gefasst:

Auch Programmanweisungen sind (verschachtelte) Listen, bei denen das jeweils erste Listenelement die auszuführende Funktion identifiziert. Es gibt somit keinen grundsätzlichen Unterschied zwischen Daten und Programmen; diese Eigenschaft wird Homoikonizität genannt. Der Programmierer kann so beispielsweise neue Kontrollstrukturen oder Objektsysteme (OOP) entwickeln (Metaprogrammierung, Makros). Es ermöglicht aber auch Programmteile zur Laufzeit beliebig zu manipulieren.
Lisp bietet dem Programmierer große Flexibilität und weitreichende Einflussmöglichkeiten, weshalb es manchmal auch als programmierbare Programmiersprache bezeichnet wird. Datenstrukturen werden dynamisch aufgebaut, ohne dass der Programmierer explizit Speicherplatz reservieren oder freigeben muss (siehe auch Garbage Collection). Deklarationen für Datentypen sind optional  und ein Lisp-Symbol kann als Variable für beliebige Arten von Objekten stehen. Viele dieser Eigenschaften sind im Laufe der Zeit in weitere Programmiersprachen übernommen worden. Anfang der 1960er waren sie jedoch ihrer Zeit weit voraus.
In den 1970er und 1980er Jahren wurden spezielle Lisp-Maschinen entwickelt und vertrieben. Diese ermöglichten das schnelle Ausführen von Lisp-Programmen, was auf damaligen allgemeinen Computern nur unter dem Verzicht auf Typüberprüfung und automatische Speicherbereinigung möglich war. Dies hat sich durch schnellere Computer jedoch geändert.
Programme in Lisp können interpretiert oder von einem Compiler in effizienten Code übersetzt werden. Typische Compiler sind Batch-Compiler oder inkrementelle Compiler. Inkrementelle Compiler können einzelne Ausdrücke übersetzen. Batch-Compiler übersetzen einzelne Lisp-Dateien oder ganze Lisp-Programme. Compiler übersetzen entweder in einen Bytecode für eine virtuelle Maschine, in andere Programmiersprachen (oft in C) für die weitere Übersetzung oder in Maschinencode für einen Prozessor.
Das Akronym LISP wird manchmal scherzhaft als „Lots of Irritating Superfluous Parentheses“ (eine Menge lästiger, überflüssiger Klammern) interpretiert.

## Bedeutung

Historisch gesehen gehört Lisp zusammen mit Prolog zu den wichtigsten Programmiersprachen der künstlichen Intelligenz. Durch Lisp ist erstmals der Lambda-Kalkül zum Kern einer Programmiersprache gemacht worden. Dieser ist ein wesentliches Element der Semantik vieler moderner Programmiersprachen.
Im Unterschied zu Europa, wo Programmiersprachen wie Assembler, Fortran oder Pascal als klassische Vertreter der Familie der prozeduralen Programmiersprachen gelehrt wurden, war und ist zum Teil bis heute in den Vereinigten Staaten Lisp, bzw. einer seiner moderneren Dialekte wie Scheme, die erste gelehrte Programmiersprache. Das hatte einen großen Einfluss, da es sich bei den klassischen Vertretern der prozeduralen Sprachfamilien um Vertreter einer statischen Verarbeitungsweise von Daten handelt, während unter anderem Lisp ein strikt dynamisches Konzept vertritt.

## Syntax

Lisp benutzt S-Expressions als externes Format, um sowohl Quelltext als auch Daten darzustellen. Funktions- und Makroaufrufe werden als Listen geschrieben, die als erstes Element den Namen der Funktion bzw. des Makros enthalten. Kommentare werden mit einem oder mehreren ; eingeleitet.
Beispiele in Common Lisp:

LISP-Hallo-Welt-Programm:

Mit (terpri) erfolgt ein Zeilenumbruch.

## Minimaler Funktionsumfang für Lisp

Um ein minimales Lisp-System zu implementieren, sind nur sehr wenige Operatoren und ein allgemeiner Mechanismus zur Funktionsdefinition nötig.
Die folgenden Funktionen sind im ursprünglichen Bericht von McCarthy enthalten:

first (gibt das erste Element einer Liste zurück; hieß ursprünglich car (von Contents of Address Part of Register))
rest (gibt die Restliste (ohne das erste Element) zurück; hieß ursprünglich cdr (von Contents of Decrement Part of Register))
cons (Erzeugt aus zwei Zeigern ein CONS-Paar und gibt einen Zeiger auf dieses zurück. Kann zum Beispiel verwendet werden, um ein Element an den Anfang einer Liste anzufügen) (von CONStruct)
quote (verhindert die Auswertung des nachfolgenden Objekts)
eq (Test auf Identität zweier oder mehrerer Objekte)
cond (bedingte Ausführung: Übernimmt eine beliebig lange Liste von Paaren, die jeweils aus einer Bedingung und einer Berechnungsvorschrift bestehen. Gibt das Auswertungsergebnis der ersten Berechnungsvorschrift zurück, deren zugehörige Bedingung wahr ist)
Mechanismus zur Funktionsdefinition lambda
Bereits mit diesen Sprachmitteln kann ein bemerkenswerter Teil der Funktionen, die übliche Lisp-Systeme mitbringen, definiert werden.

## Datentypen

In der Originalversion von Lisp gab es zwei grundsätzliche Arten Datentypen: Atomare Symbole und Listen. Atomare Symbole hießen so, weil sie nicht zerlegt werden konnten.
Listen waren Sequenzen von Elementen, wobei diese Elemente Atome oder Unterlisten sein konnten. Die Listen selbst wurden aus Cons-Zellen, einem Paar von Zeigern, gebildet, dessen erste Komponente auf das Element verweist, die zweite aber auf den Rest der Liste. Die leere Liste bzw. das Ende der Liste wird durch das Atom 'NIL' präsentiert. Die Zellen wurden in der Literatur wie rechts gezeigt visualisiert und dienten zusammengenommen als S-Ausdrücke auch zur Darstellung des LISP-Quelltexts selbst.
Ein Atom war entweder eine Zahl oder ein Symbol. Ein Symbol war eine alphanumerische Zeichenkette, die als Variablenname oder Datenelement beim symbolischen Rechnen verwendet wurde.
Intern wurde ein Symbol-Atom nur einmal in der Symboltabelle abgespeichert. Zwei Symbolatome, die gleich geschrieben wurden und an verschiedenen Stellen im Quelltext vorkamen, repräsentierten dasselbe Objekt.
Später wurden in den Lisp-Dialekten weitere Datentypen eingeführt, und das Konzept der Lisp-Atome verlor an Bedeutung.

### Symbolische Ausdrücke

Die Denotation der Lisp-Daten entsprechend der rechts gezeigten Grammatik eröffnet die Möglichkeit, diese Syntax selbst zu verwenden, um Lisp-Programme als Lisp-Daten (S-Ausdrücke, S-Expressions) niederzuschreiben.
Umgekehrt kann diese sehr einfache Grammatik verwendet werden, um sowohl Daten als auch Programme einzulesen und zu bearbeiten oder zu interpretieren.
John McCarthy beschreibt die Weise der Niederschrift von Programmen im Abschnitt 1.6 (A Universal LISP Function) des Lisp-Handbuchs, womit zugleich auch ein Lisp-Interpreter in Lisp selbst angegeben wird.

Diese enge Verzahnung der Repräsentation von Programmen und Daten stellt eine besondere Charakteristik der Lisp-Programmierung dar.

## Zitate

## Lisp-Dialekte

### Historisch relevante Dialekte

LISP 1.5 war die erste Lisp-Version, die über das MIT hinaus verbreitet wurde und enthält die erste funktionsfähige Quelle einer Lisp-Implementierung.
Maclisp war ein weit verbreiteter und einflussreicher Vorläufer von Common Lisp und die ursprüngliche Implementationssprache des Computeralgebrasystems Macsyma.
InterLisp entwickelte sich ab 1967 aus BBN-Lisp und wurde zu Interlisp-D weiterentwickelt, das ein komplettes Entwicklungssystem für die Lisp-Maschine Xerox Dolphin bildete. 1992 verlieh die ACM den Software System Award an Daniel G. Bobrow, Richard R. Burton, L Peter Deutsch, Ronald Kaplan, Larry Masinter und Warren Teitelman für ihre Pionierarbeit an InterLisp.
ZetaLisp (auch Lisp Machine Lisp genannt) ist eine Weiterentwicklung von Maclisp und lief auf verschiedenen Lisp-Maschinen. Auf Basis dieses Dialekts wurde Flavors, die erste objektorientierte Erweiterung, entwickelt.
Franz Lisp wurde 1978 aus MacLisp entwickelt, um auf einer VAX das Computeralgebrasystem Macsyma laufen zu lassen. Es fand weite Verbreitung, weil es mit BSD Unix ausgeliefert wurde. Später wurde die Firma Franz Inc. gegründet, um dieses Lisp zu pflegen. Seit Mitte der 80er Jahre verkauft Franz Inc. aber eine Common-Lisp-Implementierung (Allegro CL).
XLISP ist ein LISP mit objektorientierten Erweiterungen, das auch auf schwächeren Computern lief. Eine bekannte Anwendung ist das Statistikpaket XLispStat.
EuLisp war ein europäischer Versuch, ein aufgeräumtes und einheitliches Lisp zu definieren.
ISLisp ist ein ISO-standardisierter, kompakter Lisp-Dialekt, der sich für die Programmierung eingebetteter Systeme eignet.
Portable Standard Lisp und das sogenannte Standard Lisp wurden ab 1980 an der University of Utah entwickelt und vor allem für das Computeralgebrasystem Reduce genutzt. Darin war es in einer ALGOL-artigen Syntax als Skriptsprache RLISP nutzbar.
S-1 Lisp war ein Lisp für den Supercomputer S-1 Mark IIA.

### Später verbreitete Dialekte

Common Lisp ist der umfangreichste und in der Praxis am häufigsten eingesetzte Lisp-Dialekt. Er ist ANSI-standardisiert und bietet Unterstützung für prozedurale Makros, lexikalische wie dynamische Variablenbindung und vieles mehr. Der Name erinnert an die Absicht, mehrere inkompatible Bestrebungen zu vereinigen, einen Nachfolger für Maclisp zu finden (ZetaLisp, Spice Lisp, NIL und S-1 Lisp). Weitere Einflüsse waren InterLisp und Scheme.
Scheme ist eine minimale und elegante Variante, die u. a. Continuations unterstützt. Im Gegensatz zu Common Lisp kennt sie nur lexikalische Variablenbindung und hygienische Makros. Sie findet aufgrund ihrer Einfachheit häufig in der Lehre Gebrauch, obgleich auch produktive Programmierung mit ihr möglich ist und praktiziert wird.
Clojure ist ein Lisp-Dialekt, der auf der Java Virtual Machine läuft und Interoperabilität zu Java bietet.
Emacs Lisp ist die Skriptsprache des Texteditors GNU Emacs.

### Dialekte für besondere Zwecke

AutoLISP ist die auf einer frühen Version von XLISP basierende Skriptsprache für das CAD-System AutoCAD.
librep oder kurz rep ist eine Skriptsprache für unixartige Systeme und orientierte sich anfangs an Emacs Lisp, hat aber lexikalische statt dynamischer Variablenbindung. Der Fenstermanager Sawfish wurde in rep geschrieben.
muLISP läuft unter CP/M und MS-DOS sowie auf einigen programmierbaren Taschenrechnern. Es wurde benutzt, um das Computeralgebrasystem Derive zu implementieren.
Nyquist ist eine Sprache für Klangsynthese und -analyse und basiert auf XLISP.
Racket ist ein vorrangig für die Entwicklung von Programmiersprachen konzipierter Scheme-Dialekt.
RPL läuft auf programmierbaren Taschenrechnern, insbesondere auf solchen von Hewlett-Packard. Es handelt sich dabei um eine Lisp-Version, die mit der umgekehrten polnischen Notation vermischt wurde.
System Management Language ist erweitert um Sprachstrukturen zur objekt- und ereignisorientierten Programmierung. Sie enthält APIs für X/Motif, CMIS und weitere.

### Neuere Entwicklungen

Arc ist ein von Paul Graham und Robert Morris entwickelter Dialekt.
NewLISP ist eine Skriptsprache
Hy ist ein Lisp-Dialekt, der eng mit Python verzahnt ist.
lfe ist ein Lisp-Dialekt für die Erlang VM
