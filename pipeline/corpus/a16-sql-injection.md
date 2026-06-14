---
url: https://de.wikipedia.org/wiki/SQL-Injection
---

# SQL-Injection

## Überblick

SQL-Injection (dt. SQL-Einschleusung) ist das Ausnutzen einer Sicherheitslücke in Zusammenhang mit SQL-Datenbanken. Die Sicherheitslücke entsteht durch einen Programmierfehler in einem Programm, das auf die Datenbank zugreift. Durch diesen Programmierfehler kann ein Angreifer Datenbankbefehle einschleusen und abhängig vom Einzelfall weitere Daten aus der Datenbank auslesen, Daten unberechtigt ändern oder löschen oder sogar die Kontrolle über den kompletten Datenbankserver übernehmen.

## Voraussetzungen

Ein erfolgreiches Ausnutzen einer SQL-Injection erfordert:

eine SQL-Datenbank, die angegriffen wird, zum Beispiel MySQL, Microsoft SQL Server, Db2
ein Anwendungsprogramm, in das Angreifer Daten eingeben können, zum Beispiel eine Loginmaske, eine Produktsuche in einem Onlineshop oder ein Kontaktformular im Web
dass das Anwendungsprogramm diese Daten an die Datenbank weiterreicht
einen Programmierfehler in dem Anwendungsprogramm, beim Weiterreichen der Daten
Der Programmierfehler besteht darin, dass das Anwendungsprogramm die Eingabedaten nicht als reine Daten an die Datenbank weiterreicht, sondern aus diesen Daten die Datenbankabfrage erzeugt. Dadurch kann ein Angreifer versuchen, Teile der Datenbankabfrage gezielt zu steuern.
In der Datenbankabfragesprache SQL haben einige Zeichen eine besondere Bedeutung, insbesondere:

der Apostroph, um Textdaten zu umschließen
das Anführungszeichen, um Textdaten zu umschließen (nur einige Datenbanken)
der umgekehrte Schrägstrich (Backslash), um das nachfolgende Zeichen nicht als besonderes Zeichen zu interpretieren
das Semikolon, um einen Datenbankbefehl von dem nächsten Datenbankbefehl zu trennen
ein doppelter Bindestrich, um den Rest der Zeile zu ignorieren (Kommentar)
Dokumentenorientierte NoSQL Datenbanken können ebenfalls von diesem Sicherheitsproblem betroffen sein:

die geschweiften und eckigen Klammern, welche ein JSON Objekt bzw. Array umschließen
Diese Zeichen verwendet ein Angreifer gezielt, um den Angriff durchzuführen.

## Beispiel

Ein Beispiel für eine SQL-Abfrage, die in einem Redaktionssystem nach Artikeln aus einer bestimmten Kategorie sucht, ist:

Diese Abfrage hat folgende Bestandteile:

Die großgeschriebenen Wörter sind Schlüsselwörter in SQL und haben eine feste Bedeutung.
Die kleingeschriebenen Wörter sind die Namen von Tabellen, Zeilen oder Spalten in der Datenbank.
Text innerhalb von einfachen Anführungszeichen ist feststehender Text.
Der Text „gesuchte Kategorie“ stellt hier nur einen Platzhalter dar, an dieser Stelle der Datenbankabfrage muss die jeweils gesuchte Kategorie eingetragen werden. Solange die gesuchte Kategorie keins der oben erwähnten Sonderzeichen enthält, könnte sie direkt in die Beispielabfrage eingesetzt werden.
Wenn die gewünschte Kategorie jedoch zum Beispiel Rock ’n’ Roll ist und damit einen Apostroph enthält, führt ein naives Ersetzen des Platzhalters zu dieser SQL-Abfrage:

Auffällig ist hier die Doppelbedeutung des Apostroph: einerseits als Begrenzer, andererseits als wörtlich gemeintes Zeichen. Diese Doppelbedeutung ist für Menschen ersichtlich, aus Sicht der Datenbank ist diese Anfrage jedoch nicht sinnvoll interpretierbar, da die Abfrage als kategorie = 'Rock ' interpretiert wird, gefolgt von einem Wort n und dem weiteren Text ' Roll' in Apostrophen. Mit dem Wort n kann die Datenbank nichts anfangen und wird für diese Abfrage daher eine Fehlermeldung zurückgeben.
Eine SQL-Injection besteht nun darin, dass der Angreifer durch gezielte Wahl der Eingabedaten die Datenbankabfrage so verändert, dass sie zwar noch eine gültige Struktur hat, aber eine andere Bedeutung. So führt zum Beispiel der scheinbar unsinnige Suchbegriff asdfasdf' OR id < 100 OR kategorie = 'sdfgsdfg zu dieser Datenbankabfrage:

Diese Abfrage ist aus Sicht der Datenbank völlig korrekt, sie enthält 3 einzelne Bedingungen, von denen mindestens eine wahr sein muss. Die erste und dritte Bedingung haben in diesem Beispiel nur die Aufgabe, dass die SQL-Abfrage weiterhin wohlgeformt ist, und es ist unwahrscheinlich, dass es in der Datenbank tatsächlich Kategorien dieses Namens gibt. Daher bleibt als einzig relevante Bedingung id < 100 übrig. Aus der ursprünglichen SQL-Abfrage, die nur Artikel aus einer bestimmten Kategorie liefert, ist durch geschickte Wahl des Suchbegriffs eine strukturell andere SQL-Abfrage geworden, die nun die Artikel anhand ihrer ID sucht, unabhängig von der Kategorie.
Durch diese geänderte SQL-Abfrage kann ein Angreifer möglicherweise Daten aus der Datenbank sehen, die nicht für ihn bestimmt sind. Durch andere gezielte Suchbegriffe kann der Angreifer möglicherweise Daten in der Datenbank ändern oder löschen, je nach Einzelfall.
Der Programmierfehler besteht bei einer SQL-Injection darin, den Suchbegriff 1:1 in die Datenbankabfrage zu übernehmen, ohne die besondere Bedeutung des Apostroph und ähnlicher Zeichen zu berücksichtigen.

## Vorgang

### Veränderung von Daten

Auf einem Webserver befindet sich das Script find.cgi zum Anzeigen von Artikeln. Das Script akzeptiert den Parameter „ID“, welcher später Bestandteil der SQL-Abfrage wird. Folgende Tabelle soll dies illustrieren:

Dem Programm wird also ein zweiter SQL-Befehl untergeschoben, der die Benutzertabelle modifiziert.

### Datenbank-Server verändern

Auf einem Webserver findet sich das Script search.aspx zum Suchen nach Webseiten. Das Script akzeptiert den Parameter „keyword“, dessen Wert später Bestandteil der SQL-Abfrage wird. Folgende Tabelle soll dies illustrieren:

Hier wird der eigentlichen Abfrage ein weiterer Befehl angehängt. Die zwei Bindestriche -- kommentieren das Hochkomma als Überbleibsel der eigentlichen Anfrage aus, womit es ignoriert wird. Die nun generierte Abfrage ermöglicht das Ausführen eines Windows-Prozesses, hier illustriert durch das erzwungene Herunterfahren des Servers (sofern der Prozess Administratorrechte hat). Aber auch Daten oder Ähnliches lassen sich dadurch erzeugen (am Beispiel Microsoft SQL Server).

### Ausspähen von Daten

Auf manchen SQL-Implementationen ist die UNION-Klausel verfügbar. Diese erlaubt es, mehrere SELECTs gleichzeitig abzusetzen, die dann eine gemeinsame Ergebnismenge zurückliefern. Durch eine geschickt untergeschobene UNION-Klausel können beliebige Tabellen und Systemvariablen ausgespäht werden.

Das x beim UNION SELECT ist nötig, weil alle mit UNION verknüpften SELECTs die gleiche Anzahl von Spalten haben müssen. Der Angreifer kann die Anzahl der Spalten herausfinden, indem er ID=42 order by x-- anhängt. Wenn die Seite beispielsweise bei x = 8 normal lädt, aber bei x = 9 eine Fehlermeldung oder andere Seite zeigt, dann ist die Spaltenanzahl 8.
Ist der Datenbankserver fehlerhaft konfiguriert und hat beispielsweise ein aktuell mit der Datenbank verbundener Benutzer, über den die SQL-Injection abgesetzt werden soll, Zugriff auf Systemdatenbanken, so kann der Angreifer über eine einfache SQL-Syntax wie Systemdatenbank.SystemtabelleMitTabellenAuflistung auf die Systemtabellen zugreifen und sämtliche Tabellen einer bestimmten Datenbank auslesen. Dadurch kann er wichtige Informationen erhalten, um weitere Angriffe durchzuführen und tiefer in das System einzudringen.
Bei MySQL-Datenbanksystemen werden diese Systeminformationen in der Datenbank information_schema verwaltet. Das nachfolgende Beispiel zeigt, wie bei einer Abfrage mit 3 Ergebnisspalten die Struktur sämtlicher zugreifbarer Datenbanken in Erfahrung gebracht werden kann.

Einige Datenbanksysteme bieten weiterhin die Möglichkeit, Dateien über eine Anfrage zurückzugeben. Hierüber können in Kombination mit oben genannten Techniken und soweit der Pfad bekannt ist, beliebige Dateien, auf die der Datenbankprozess Zugriff hat, ausgelesen werden.
Ein ähnlicher Aufruf in einer MongoDB NoSQL Datenbank könnte so aussehen.

$ne ist der Operator für „ungleich“, die Abfrage gibt die Benutzer zurück, deren Benutzername nicht leer ist, d. h. alle Benutzer.

### Einschleusen von beliebigem Code

Eine weniger bekannte Variante stellt gleichzeitig die potenziell gefährlichste dar. Wenn der Datenbankserver die Kommandos SELECT … INTO OUTFILE beziehungsweise SELECT … INTO DUMPFILE unterstützt, können diese Kommandos dazu benutzt werden, Dateien auf dem Dateisystem des Datenbankserver abzulegen. Theoretisch ist es dadurch möglich, falls das Bibliotheksverzeichnis des Betriebssystems oder des Datenbankservers für denselben beschreibbar ist (wenn dieser zum Beispiel als root läuft), einen beliebigen Code auf dem System auszuführen.

### Zeitbasierte Angriffe

Wenn der Datenbankserver Benchmark-Funktionen unterstützt, kann der Angreifer diese dazu nutzen, um Informationen über die Datenbankstruktur in Erfahrung zu bringen. In Verbindung mit dem if-Konstrukt sind der Kreativität des Angreifers kaum Grenzen gesetzt. Das Kopieren von Datenbankinhalten dauert allerdings wesentlich länger.
Das folgende Beispiel benötigt auf einem MySQL-Datenbankserver mehrere Sekunden, falls der gegenwärtige User root ist:

Verwandt dazu sind Boolesche Angriffe, die durch Boolesche Abfragen versuchen, Datenbankinhalte zu extrahieren.

### Erlangen von Administratorrechten

Bei bestimmten Datenbankservern, wie dem Microsoft SQL Server bis zur Version 2000, wurden Stored Procedures wie Xp_cmdshell automatisch angeboten, die unter anderem dazu missbraucht werden können, Kommandos mit den Rechten des SQL-Serverprogramms auszuführen. Neuere Versionen des Microsoft SQL Server haben diese Funktion standardmäßig deaktiviert. Diese Möglichkeit konnte dazu benutzt werden, um zum Beispiel eine Shell auf dem angegriffenen Rechner zu starten.

### Verwundbarkeiten innerhalb des Datenbankservers

Manchmal existieren Verwundbarkeiten auch innerhalb der Datenbanksoftware selbst. So erlaubte zum Beispiel die PHP-Funktion mysql_real_escape_string() im MySQL Server einem Angreifer, SQL Injection-basierende Angriffe basierend auf Unicode-Zeichen selbst dann auszuführen, wenn die Benutzereingaben korrekt maskiert wurden. Dieser Fehler wurde in der Version 5.0.22 am 24. Mai 2006 behoben.

### Blinde SQL-Injection

Von einer blinden SQL-Injection wird gesprochen, wenn ein Server keine deskriptive Fehlermeldung zurückliefert, aus der hervorgeht, ob der übergebene Query erfolgreich ausgeführt wurde oder nicht. Anhand verschiedenster Kleinigkeiten wie etwa leicht unterschiedlicher Fehlermeldungen oder charakteristisch unterschiedlicher Antwortzeiten des Servers kann ein versierter Angreifer häufig dennoch feststellen, ob ein Query erfolgreich war oder einen Fehler zurückmeldet.

## Gegenmaßnahmen

Um SQL-Injections zu verhindern, dürfen vom Benutzer eingegebene Daten nicht ohne Weiteres in eine SQL-Anweisung eingebaut werden. Eingabedaten können auf die Eigenschaften erwarteter Werte geprüft werden. So bestehen deutsche Postleitzahlen beispielsweise nur aus Ziffern.

### Grundidee von Prepared Statements

Der sicherste Weg ist jedoch, die Daten überhaupt vom SQL-Interpreter fernzuhalten. Dabei kann man auf das Kappen der Eingabe verzichten. Die Technik dazu sind gebundene Parameter in Prepared Statements. Dabei werden die Daten als Parameter an einen bereits kompilierten Befehl übergeben. Die Daten werden somit nicht interpretiert und eine SQL-Injection verhindert. Ein positiver Nebeneffekt ist, dass Prepared Statements meistens auch eine bessere Performance bieten. Stored Procedures bieten dagegen keinen generellen Schutz vor SQL-Injection, insbesondere dann nicht, wenn der SQL-Code der Funktion nicht bekannt ist.
Doch auch auf Seiten des Datenbankservers lassen sich Sicherheitsvorkehrungen treffen. So sollten die Benutzer, mit denen sich eine Webanwendung beim Datenbankserver authentifiziert, nur die Privilegien besitzen, die er tatsächlich benötigt. So können zumindest einige der möglichen Angriffe unwirksam werden.
Hat ein Betreiber eines Webservers keine Kontrolle über die Anwendungen, kann durch Einsatz von Web Application Firewalls (WAF) zumindest teilweise verhindert werden, dass SQL-Injection-Schwachstellen ausgenutzt werden können. Unabhängig von der Kontrolle über die Anwendungen kann ein Betreiber eines Webservers durch den gezielten Einsatz einer WAF die Sicherheit zusätzlich erhöhen, da viele WAFs neben abwehrenden auch prophylaktische Maßnahmen anbieten.
Es ist nicht schwer, bestehende Programme so umzubauen, dass SQL-Injections nicht mehr möglich sind. Das hauptsächliche Problem der meisten Programmierer ist fehlendes Wissen über diese Art von Angriffen. Nachfolgend einige Beispiele, um die Angriffe abzuwehren.
Die naive, aber falsche Idee, eine SQL-Abfrage mit beliebigen Eingabedaten anzureichern, sieht in den meisten Programmiersprachen so aus:

Die doppelten Anführungszeichen gehören hier zur Programmiersprache, die einfachen Anführungszeichen gehören zu SQL. Wenn die Eingabedaten selbst auch einfache Anführungszeichen enthalten können, ist eine SQL-Injection möglich. Um das zu verhindern, ist die Idee, die SQL-Anfrage und die Daten zu trennen. Das :eingabedaten im folgenden Code ist ein Platzhalter für die eigentlichen Eingabedaten. Diese werden in einem zweiten Schritt bei der Abfrage mittels db.query an die Datenbank übergeben. Die Trennung von SQL und Eingabedaten verhindert eine SQL-Injection.

### Python

In Python gibt es mehrere Möglichkeiten, mit einer Datenbank zu kommunizieren. Eine davon ist SQLAlchemy. Um hierbei SQL-Injection zu entgehen, sollte man rohe SQL-Befehle vermeiden, sofern diese durch Form- oder URL Anfragen manipuliert werden könnten. Nachfolgend ist ein solches Beispiel zu sehen:

Stattdessen wird dazu geraten die internen Funktionen und Methoden von SQLAlchemy zu nutzen, wie z. B. die Folgenden:

### Visual Basic (ADOdb)

In Visual Basic gibt es einfache Command-Objekte, mit denen diese Probleme vermieden werden können.
Anstatt

sollte Folgendes verwendet werden:

### Delphi

Seit der BDE kennen die Querys Parameter. Die Syntax ist bei verschiedenen Komponentensammlungen nicht immer identisch aber ähnlich.
Anstatt …

… sollte definitiv mit Parametern gearbeitet werden:

### Microsoft .NET Framework – C# (ADO.NET)

Im .Net-Framework gibt es einfache Objekte, mit denen solche Probleme umgangen werden können.
Anstatt

sollte Folgendes verwendet werden:

### Java (JDBC)

Eine SQL-Injection kann leicht durch eine bereits vorhandene Funktion verhindert werden. In Java wird zu diesem Zweck die PreparedStatement-Klasse verwendet (JDBC-Technologie) und die Daten unsicherer Herkunft werden als getrennte Parameter übergeben. Um die Daten von der SQL-Anweisung zu trennen, wird der Platzhalter „?“ verwendet.
Anstatt

sollte Folgendes verwendet werden:

Der Mehraufwand an Schreibarbeit durch die Verwendung der PreparedStatement-Klasse kann sich außerdem durch einen Performancegewinn auszahlen, wenn das Programm das PreparedStatement-Objekt mehrfach verwendet.

### PHP

In PHP steht für Datenbankzugriffe die Bibliothek PHP Data Objects zur Verfügung.
Beispiel ohne Prepared Statement:

Beispiel mit Prepared Statement:

Bis zur PHP-Version 5.3 gab es die Konfigurationsoption „magic_quotes_gpc“. War diese auf „on“ gestellt, wurden von außen kommende Benutzereingaben automatisch maskiert. Manche Skripte nutzen Funktionen wie etwa addslashes() oder mysql_real_escape_string(). Das heißt, dass bereits allen relevanten Zeichen in den Benutzereingaben durch so genannte Magic Quotes ein Backslash vorangestellt wurde und nun durch die Escape-Funktion erneut ein Backslash vorangestellt wird. Somit werden die Benutzereingaben verfälscht und man erhält beispielsweise anstatt eines einfachen Anführungszeichens ein Anführungszeichen mit vorangestelltem Backslash (\"). Auch aus Gründen der Portabilität sollte bei der Entwicklung von Anwendungen auf diese Einstellung verzichtet und stattdessen alle Eingaben manuell validiert und maskiert werden, da nicht davon ausgegangen werden kann, dass auf allen Systemen dieselben Einstellungen vorherrschen oder möglich sind. Darüber hinaus sollte addSlashes() nicht zum Maskieren von Datenbank-Eingaben benutzt werden, da es keine ausreichende Sicherheit gegenüber mysql_real_escape_string() gewährleistet.
Nach der PHP-Version 5.3 wurde mysql_real_escape_string() durch MySQLi ersetzt. Ab der Version 7.0 ist mysql_real_escape_string() nicht mehr verfügbar. Ab PHP 7.x heißt die Funktion mysqli_real_escape_string().
Grundsätzlich sind auch in puncto Sicherheit immer Prepared Statements vorzuziehen.

### Perl

Mit dem datenbankunabhängigen Datenbankmodul DBI, welches normalerweise in Perl verwendet wird:
Anstatt

sollte Folgendes verwendet werden:

Perls DBI-Modul unterstützt außerdem eine „prepare“-Syntax ähnlich der aus dem Java-Beispiel.

Alternativ können über das Datenbankhandle auch Eingabe-Werte sicher maskiert werden. Dabei achtet der DB-Treiber auf die für diese Datenbank typischen Sonderzeichen. Der Programmierer muss keine tiefergehenden Kenntnisse darüber haben.

Im sogenannten „taint mode“, der skriptweit mit dem Parameter -T aktiviert werden kann, verwendet Perl starke Heuristiken, um nur sichere Zugriffe zu erlauben. Zeichenketten, die vom Benutzer übergebene Parameter enthalten, werden zunächst als „unsicher“ behandelt, bis die Daten explizit validiert wurden, und dürfen vorher nicht in unsicheren Befehlen verwendet werden.

### ColdFusion Markup Language

Unter ColdFusion kann das <cfqueryparam>-Tag verwendet werden, welches sämtliche notwendigen
Validierungen übernimmt:

### MS-SQL

Über parametrisierte Kommandos kann die Datenbank vor SQL-Injections geschützt werden:

## Einzelnachweise und Ressourcen
