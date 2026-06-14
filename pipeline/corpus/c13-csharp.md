---
url: https://de.wikipedia.org/wiki/C-Sharp
---

# C-Sharp (C#)

## Überblick

C# (englisch c sharp [siːˈʃɑːp]) ist eine typsichere objektorientierte Allzweck-Programmiersprache. Architekt der Sprache war Anders Hejlsberg im Auftrag von Microsoft, zurzeit ist Mads Torgersen der Chef-Entwickler. Die Sprache ist an sich plattformunabhängig, wurde aber im Rahmen der .NET-Strategie entwickelt, ist auf diese optimiert und meist in deren Kontext zu finden.
Historisch wurde in C# fast exklusiv für Windows entwickelt. Durch Xamarin ist es inzwischen aber auch möglich, für macOS, iOS und Android zu entwickeln. Zudem gibt es mit .NET Core auch offizielle Unterstützung für GNU/Linux und macOS.
Bis Version 2 war die Sprache bei der ECMA und der ISO als Standard registriert.
In der Folge erschienen regelmäßig umfangreiche Erweiterungen der Sprache durch Microsoft. Durch die Entwicklung des Referenz-Compilers als Open Source (seit 2014) sind auch Community-Beiträge möglich.

## Namensgebung

C# wurde unter dem Codenamen Cool entwickelt, der jedoch aus Gründen des Marketings zur Veröffentlichung geändert wurde. Der Name C Sharp geht auf musikalische Notenschrift zurück, wo das Kreuz (♯, englisch sharp) die Erhöhung von Stammtönen (in diesem Fall C) um einen Halbton kennzeichnet. C sharp ist also der englische Begriff für den Ton cis. Dies ist eine Anspielung darauf, dass der Name der Programmiersprache C++ der Notation für die Erhöhung des Werts einer Variable um eins entstammt. Des Weiteren kann man das Kreuz-Zeichen als Kombination von vier Plus-Zeichen betrachten, was eine Erhöhung von C++ darstellen soll. Allerdings enthält der Name nicht das Kreuz-Zeichen der Musiknotation, sondern ein Rautezeichen, das häufig als Ersatzzeichen für das auf üblichen Tastaturen fehlende musikalische Symbol genutzt wird.

## Konzept

C# greift Konzepte der Programmiersprachen Java, C++, Haskell, C sowie von Delphi auf. C# zählt zu den objektorientierten Programmiersprachen und unterstützt sowohl die Entwicklung von sprachunabhängigen .NET-Komponenten als auch COM-Komponenten für den Gebrauch mit Win32-Anwendungsprogrammen.
Einige der Elemente von C++, die im Allgemeinen als unsicher gelten, wie beispielsweise Zeiger, werden in C# nur für sogenannten „unsicheren Code“ erlaubt, der in Zonen mit eingeschränkten Rechten (z. B. bei Programmen, die aus Webseiten heraus ausgeführt werden) ohne die Zuteilung erweiterter Rechte nicht ausgeführt wird.
Als .NET-Sprache verfügt auch C# über Sprachunterstützung für Attribute und Delegaten. Attribute erlauben es, Informationen über eine Klasse, ein Objekt, oder eine Methode zu speichern, die zur Laufzeit ausgewertet werden können. Man spricht hierbei auch von Metadaten. Ein Delegat kann auf Methoden einer Klasse verweisen. Das Konzept stellt eine Weiterentwicklung von Funktionszeigern dar, wie sie beispielsweise in der Programmiersprache C vorkommen. Der Delegat hat jedoch einen festen Typ (genannt Delegat-Typ), der eine konkrete Signatur festlegt, die vom Compiler überprüft wird. Für den Aufruf beinhaltet der Delegat auch den Verweis auf das zu den Methoden gehörende Objekt. Ein Aufruf eines Delegaten ruft also gezielt eine Methode auf, der implizit ein Objektzeiger als Parameter übergeben wird. Außerdem müssen Delegaten typensicher deklariert werden, was zur Folge hat, dass Inkompatibilitäten der Methodensignaturen zwischen aufrufendem Delegat und der aufzurufenden Methode schon während der Kompilierung bemerkt werden.
Ab der Version 2.0 von C#, die mit .Net-Framework 2.0 freigegeben wurde, unterstützt C# neben generischen Typen (englisch generics) auch anonyme Methoden, Generatoren und partielle Klassen. Generische Typen, Iteratoren und partielle Klassen sind Bestandteil des .NET-Frameworks 2.0 und stehen somit auch anderen .NET-Programmiersprachen wie beispielsweise Visual Basic .NET zur Verfügung.

## Standardisierung

Microsoft reichte C# im August 2000 zusammen mit Hewlett-Packard und Intel bei der Normungsorganisation Ecma International zur Normung ein. Im Dezember 2001 veröffentlichte die ECMA die Norm ECMA-334 C# Language Specification. 2003 wurde C# von der ISO genormt (ISO/IEC 23270).
Im Juni 2005 genehmigte die ECMA die dritte Version (C# 2.0) der C#-Spezifikationen und aktualisierte die bisherige Norm ECMA-334. Hinzu kamen die partiellen Klassen, anonyme Methoden, nullable types und Generics, die Ähnlichkeiten zu den C++-Templates aufweisen. Im Juli 2005 übergab die ECMA die Standards und zugehörigen TRs an die ISO/IEC JTC 1.
Die ECMA-Spezifikation 334 deckt nur die Sprache C# ab. Programme, die in C# geschrieben werden, nutzen gewöhnlich das .NET-Framework, das teilweise durch andere Spezifikationen beschrieben wird und teilweise proprietär ist. Dennoch ist die Sprache C# prinzipiell plattformunabhängig. Das von Ximian (jetzt Xamarin) initiierte Projekt Mono ermöglicht beispielsweise auch Nutzern von macOS oder Unix, C# für Entwicklungen auf ihrem Betriebssystem einzusetzen.
Microsoft veröffentlichte die dritte Version von C# mit dem .NET-SDK 2.0 und Visual Studio 2005 im November 2005.
Microsoft stellte klar, dass C#, genauso wie andere .NET-Sprachen, einen wichtigen Bestandteil seiner Softwarestrategie sowohl für den internen als auch für den externen Gebrauch darstelle. Das Unternehmen übernimmt eine aktive Rolle in der Vermarktung der Sprache als Teil seiner gesamten Geschäftsstrategie.

## Versionen

## Integrierte Entwicklungsumgebungen (IDEs)

Die dominierende Entwicklungsplattform ist Microsoft Visual Studio (Windows und macOS, proprietäre Software). Es  gibt auch eine Reihe anderer Entwicklungsumgebungen (IDEs) für C#, es werden jedoch nicht immer die neusten Sprachstandards und Laufzeitumgebungen (.NET Core) unterstützt:

Visual Studio Code (Windows, macOS und Linux)
JetBrains bietet mit ReSharper (Windows, proprietär) eine Reihe von Plug-ins für Visual Studio an, welche dieses verbessern sollen
Rider (Windows, Linux und Mac OS)
Baltie (Windows, proprietär) speziell für Kinder
MonoDevelop (GNU/Linux; FLOSS)
Notepad++ (Windows; FLOSS) mit dem Plugin CS-Script (FLOSS) ermöglicht Autovervollständigung, Codeausführung und Debugging
das OmniSharp-Projekt ermöglicht, erleichtert und erweitert die Möglichkeiten verschiedener verbreiteter Editoren (Atom, Adobe Brackets, Emacs, Sublime Text, Vim und Visual Studio Code) bezüglich C# (als Teil von .NET)
SharpDevelop (Windows; FLOSS)

## Compiler

In der Regel übersetzen die C# Compiler nicht unmittelbar in die Maschinensprache, sondern in eine Zwischensprache.

Bei der Ausführung wird dann eine virtuelle Maschine gestartet, die den zweiten Teil des Übersetzungsprozesses in einem Just-In-Time Compiler erledigt.
Es existieren vier Compiler für C#:

der von Microsoft für die neuesten Versionen von C# und Visual Basic .NET entwickelte Roslyn-Compiler (Windows; FLOSS) als neuste Iteration der .NET Compiler Platform (deren ältere Versionen proprietäre Software waren)
mcs von Xamarin für Mono (Windows, macOS, GNU/Linux; FLOSS) unterstützte bis C# Version 6 alle Features, die Version 7 wurde nur noch partiell unterstützt
DotGNU (FLOSS), Weiterentwicklung wurde 2012 eingestellt.
CoreRT/.Net Native

## Sprachelemente

C#-Syntaxbeispiel für ein einfaches Kommandozeilen-Programm:

Einfache MessageBox in C#

FileStream-Beispiel in C#

Networking-Beispiel in C#

## Sprachderivate

Cω
Sing#
Spec#
Vala für Programme des Gnome-Projektes
