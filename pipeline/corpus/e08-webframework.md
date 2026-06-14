---
url: https://de.wikipedia.org/wiki/Webframework
---

# Webframework

## Überblick

Ein Webframework (auch Web Application Framework, kurz: WAF oder WF) ist ein Framework, das für die Entwicklung von dynamischen Webseiten, Webanwendungen oder Webservices ausgelegt ist.
Sich wiederholende Tätigkeiten werden vereinfacht und die Wiederverwendung von Code und die Selbstdokumentation der Software-Entwicklung gefördert. Durch Konzepte wie Don’t repeat yourself, KISS oder Konvention vor Konfiguration werden einfache, klare und mit wenig Aufwand wartbare Strukturen angeboten.
Durch vordefinierte und vorgefertigte Klassen werden häufig gebrauchte Funktionen wie Mailversand, sichere Authentifizierung und Authentisierung, Sicherheitsfunktionen, Lokalisierung, Performance (z. B. HTTP Caching) oder grundlegende Funktionen für Webformulare vom Framework mitgebracht.
Webframeworks sind darauf ausgelegt, sehr schnell lauffähige Webanwendungen zu erstellen.
Dazu bieten heutige Webframeworks einen Datenbankzugriff, Templating-Mechanismen, eine saubere Trennung von Präsentation und Code durch Verwendung des Model View Controllers oder Model View Presenters als Architekturmuster, sowie oft auch Möglichkeiten zum Rapid Prototyping durch Scaffolding.

## Datenbankzugriff

Die meisten Webframeworks bieten einen Datenbankzugriff, meist über eine objektrelationale Abbildung, an. Für die einfache Handhabung gibt es häufig einen objektrelationalen Mapper, der sich um die Persistierung kümmert und fertige Klassen zur Verwendung anbietet. Dies kann explizit, wie z. B. in Django, geschehen oder aber auch implizit über Introspektion, wie z. B. in Ruby on Rails.
Einige Webframeworks enthalten eine Datenbankabstraktionsschicht als eigenständiges Framework, wie z. B. Doctrine in Symfony.
Eine bestehende und bereits mit Daten beschriebene Datenbank kann nicht, wie die Software selbst, einfach ersetzt werden.
Viele Webframeworks bieten migrations, Unterprogramme, welche die Datenbankstruktur anpasst, mit an, um nötige Datenbankänderungen automatisch auszuführen.
Der Datenbankzugriff aus dem GUI heraus wird in der Informatik generell kontrovers betrachtet. Die oft anzutreffende strikte Schichtenarchitektur mit drei Schichten verbietet beispielsweise generell den Zugriff von der Präsentationsschicht auf die Persistenzschicht. Auch das oft bei Webframeworks eingesetzte MVC Pattern erlaubt keinen Datenbankzugriff aus dem GUI heraus (sondern nur über das Model).

## Templatesysteme

Ein Webframework bietet auch meist die Möglichkeit, die Anzeige über eine Template-Engine zu steuern. Dazu werden auf Abruf HTML-Seiten generiert, die mit den dynamischen Inhalten gefüllt werden. An dieser Stelle kann auch meist zwischen statischen und dynamischen Inhalten getrennt werden, so dass etwa ein Designer das Aussehen festlegt, indem er eine Vorlage entwirft, die der Anwendungs-Entwickler dann mit Daten befüllt. Die Syntax der Template-Sprachen ist meist an HTML angelehnt oder erweitert dieses nur geringfügig.

## Scaffolding

Scaffolding (auf Deutsch Gerüstbau) unterstützt den Entwickler durch die Generierung von CRUD-Pages (Create-Read-Update-Delete) bei der Entwicklung und im Prototyping. Dadurch ist es möglich, direkt aus dem Entwurf eines Modells etwa ein Web-Interface anzubieten, über das Daten sofort in die Datenbank eingegeben und verwaltet werden können. Auf diese Weise kann bereits mit Beispieldaten entwickelt und getestet werden. Auch die Verwaltungs-Sichten (Admin interface) einer Webanwendung können teils mit Scaffolding generiert werden, da diese häufig nur grundlegende Bedienelemente benötigen.

## Routing

Die Definition der URLs der Webanwendung kann meist, ähnlich der .htaccess, im Webframework konfiguriert werden. Es können Clean URLs, Weiterleitungen und Fehlermeldungen festgelegt werden.
