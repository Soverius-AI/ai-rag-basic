---
url: https://de.wikipedia.org/wiki/OAuth
---

# OAuth

## Überblick

OAuth (Open Authorization) ist der Name zweier verschiedener offener Protokolle, die eine standardisierte, sichere API-Autorisierung für Desktop-, Web- und Mobile-Anwendungen erlauben. OAuth 1.0 wurde ab 2006 entwickelt und 2007 veröffentlicht. OAuth 2.0, das sich grundlegend von OAuth 1.0 unterscheidet, wurde 2012 von der IETF als RFC 6749 und RFC 6750 veröffentlicht.
Ein Endbenutzer (User oder Resource Owner) kann mit Hilfe dieses Protokolls einer Anwendung (Client oder Relying Party) den Zugriff auf seine Daten erlauben (Autorisierung), die von einem anderen Dienst (Resource Server) bereitgestellt werden, ohne geheime Details seiner Zugangsberechtigung (Authentifizierung) der Anwendung preiszugeben. Der Endbenutzer kann so Dritten gestatten, in seinem Namen einen Dienst zu benutzen. Typischerweise wird dabei die Übermittlung von Passwörtern an Dritte vermieden.
Auf Basis von OAuth 2.0 wird OpenID Connect heute in vielen Internetdiensten auch zur Authentifizierung von Benutzern eingesetzt.

## Geschichte

### OAuth 1.0

OAuth 1.0 wurde im November 2006 gestartet, als Blaine Cook die OpenID-Implementierung für Twitter entwickelte. Zur selben Zeit brauchte Ma.gnolia eine Lösung, die seinen Benutzern mit OpenIDs erlaubte, Dashboard Widgets zu autorisieren, ihre Dienste zu benutzen. Deshalb trafen sich Blaine Cook, Chris Messina und Larry Halff von Ma.gnolia mit David Recordon, um die Verwendung von OpenID mit den APIs von Twitter und Ma.gnolia für die Delegation der Authentifizierung zu diskutieren. Sie stimmten überein, dass es zu dieser Zeit keinen offenen Standard für eine API-Zugriffsdelegation gab.
Das OAuth-Internetforum wurde im April 2007 für eine kleine Gruppe Implementierer angelegt, um einen Entwurfsvorschlag für ein offenes Protokoll zu schreiben. DeWitt Clinton von Google hörte von dem OAuth-Projekt und drückte sein Interesse an der Unterstützung dieses Vorhabens aus. Im Juli 2007 gab das Team einen ersten Spezifikationsentwurf heraus. Am 3. Oktober 2007 wurde der OAuth Core 1.0-Entwurf veröffentlicht.

### OAuth 2.0

Auf dem 73. IETF-Treffen in Minneapolis im November 2008 wurde eine Sitzung abgehalten, um das Einbringen des Protokolls in die IETF für weitere Standardisierungsarbeiten zu diskutieren. Das Treffen sorgte mit breiter Unterstützung für die Einrichtung einer OAuth-Arbeitsgruppe in der IETF. Diese Arbeitsgruppe entwickelte OAuth 2.0 und publizierte es in RFC 6749 und RFC 6750. Die IETF-OAuth-Arbeitsgruppe leitet auch heute noch die weitere Entwicklung von OAuth 2.0 durch zahlreiche Erweiterungen und Ergänzungen zum Standard.

## Rollen

In OAuth 2.0 existieren vier Rollen:

Resource Owner
Eine Entität (User), die einem Dritten den Zugriff auf ihre geschützten Ressourcen gewähren kann. Diese Ressourcen werden durch den Resource Server bereitgestellt. Ist der Resource Owner eine Person, wird dieser als User bezeichnet.
Resource Server
Der Server (Dienst), auf dem die geschützten Ressourcen (Protected Resources) liegen. Er ist in der Lage, auf Basis von Access Tokens darauf Zugriff zu gewähren. Ein solcher Token repräsentiert die delegierte Autorisierung des Resource Owners.
Client
Eine Anwendung (Relying Party), die auf geschützte Ressourcen des Resource Owners zugreifen möchte, die vom Resource Server bereitgestellt werden. Der Client kann auf einem Server (Webanwendung), Desktop-PC, mobilen Gerät etc. ausgeführt werden.
Authorization Server
Der Server authentifiziert den Resource Owner und stellt Access-Tokens für den vom Resource Owner erlaubten Anwendungsbereich (Scope) aus. Authorization Server und Resource Server werden häufig zusammengelegt und gemeinsam betrieben.

## Token

OAuth 2.0 verwendet Tokens zur Autorisierung eines Zugriffs auf geschützte Ressourcen. Dadurch kann einem Client Zugriff auf geschützte Ressourcen gewährt werden, ohne die Zugangsdaten des Dienstes an den Client weitergeben zu müssen.

Access Token
Um auf geschützte Daten auf dem Resource Server zuzugreifen, muss ein Access Token vom Client als Repräsentation der Autorisierung übermittelt werden. Mittels des Parameters scope können die mit dem Access Token verbundenen Berechtigungen festgelegt werden. Zum einen kann der Client gewünschte Berechtigungen beim Authorization Server anfragen, zum anderen teilt dieser die gewährten Berechtigungen mit. Das Access Token hat eine zeitlich begrenzte Gültigkeit.
Refresh Token
Ein Refresh Token kann dazu verwendet werden, beim Authorization Server ein neues Access Token anzufragen, falls das Access Token abgelaufen oder ungültig geworden ist. Das Refresh Token hat ebenfalls eine zeitlich begrenzte Gültigkeit. Diese wird in der Regel höher gewählt als die des Access Tokens. Das Refresh Token wird wie das Access Token nach der Autorisierung durch den Resource Owner vom Authorization Server an den Client gesendet. Da das Refresh Token selbst schon die Autorisierung des Resource Owners repräsentiert, muss für diese Neuanfrage eines Access Tokens keine weitere Autorisierung des Resource Owners mehr eingeholt werden (RFC 6749 Kapitel 1.5).Der Einsatz von Access Token und Refresh Token besitzt den Vorteil, dass die Lebensdauer des Access Tokens gering (wenige Minuten) gehalten werden kann und somit die Sicherheit des Protokolls erhöht wird, da der Resource Server keinen Zugriff auf das langlebige Refresh Token hat, weil jenes im Gegensatz zum Access Token nur zwischen Client und Authorization Server ausgetauscht wird. Würde der Resource Server die Autorisierung nur bei der ersten Anfrage überprüfen, würde ein Rechteentzug keine Folgen haben. Ein Zugriff auf Daten und Dienste beim Resource Server wäre dann für den Client weiterhin möglich. Da jedoch die Lebenszeit des Access-Tokens nur wenige Minuten beträgt, würde ein späteres Erlangen des Access Tokens durch einen Angreifer keine weitreichenden Folgen haben, da der Authorization Server die Zugriffsberechtigungen bei Neuausstellung eines Access Tokens auf Basis des Refresh Tokens überprüfen kann.

## Abstrakter OAuth-2.0-Protokollfluss

Der Client fordert eine Autorisierung vom Resource Owner an. Diese Autorisierungsanforderung kann direkt erfolgen, wird aber bevorzugt indirekt über den Authorization Server durchgeführt.
Der Client erhält eine Autorisierungsgenehmigung vom Resource Owner. Die Autorisierung kann über einen der vier Autorisierungsgenehmigungsprozesse (authorisation grant types) erfolgen oder es wird ein erweiterter Genehmigungsprozess verwendet.
Der Client fordert ein Access Token vom Authorization Server an. Hierfür nutzt er die Autorisierungsgenehmigung vom Resource Owner.
Der Authorization Server authentisiert den Client (permission to ask) und prüft die Autorisierungsgenehmigung des Resource Owners. Ist diese erfolgreich, stellt er ein Access Token aus.
Der Client fragt die geschützten Daten beim Resource Server an. Zur Authentisierung benutzt er das Access Token.
Der Resource Server prüft das Access Token und stellt, wenn gültig, die gewünschten Daten zur Verfügung.

## Authorization Grant Types

Um unterschiedliche Anwendungsfälle optimal abdecken zu können, wurden vier Genehmigungsprozesse definiert (authorization code, implicit, resource owner password credentials, client credentials). Ferner wurde die Möglichkeit offengehalten, weitere Grant Types zu definieren. So wurde z. B. im RFC 7523 die Nutzung von JSON Web Tokens (JWT) und im RFC 7522 die von SAML 2.0 definiert.

## Anwendungsfall

Ein Benutzer (Resource Owner) hat bei einem Online-Server F für Fotos (Resource Server) ein Benutzerkonto und einige Bilder (Protected Resources) hinterlegt. Er möchte die Bilder auf einem Dienst D für Farbdrucke (Client) ausdrucken lassen. Hierzu soll der Dienst D Zugriff auf die Bilder des Benutzers auf dem Server F erhalten.
Da es sich hierbei um einen anderen Dienst handelt, als solche, die der Server F eventuell zur Verfügung stellt, muss sich Dienst D beim Server F autorisieren, damit der Zugriff gewährt wird. Aus Sicherheitsgründen wäre es nicht sinnvoll, dass der Benutzer seine Zugangsdaten (Benutzername und Passwort) für den Server F an den Dienst D übermittelt, damit dieser sich mit den vertraulichen Zugangsdaten authentifiziert. Denn dadurch hätte Dienst D uneingeschränkten Zugang auf die Daten und Funktionen im Benutzerkonto beim Server F. Der weitere Zugriff für Dienst D könnte dann nur noch durch das Ändern des Passworts verhindert werden.
In einem solchen Fall ermöglicht OAuth dem Dienst D den Zugriff auf bestimmte vom Benutzer freigegebene Daten, meist auch nur temporär, und dies ganz ohne Preisgabe der Zugangsdaten an Dienst D.
Hierzu ist auf der Seite des Dienstes D ein Link platziert, welcher die Beschreibung „Fotos von Server F laden“ hat und den Vorgang initiiert. Bereits in diesem Link sind die Informationen über das Vorhaben von Dienst D kodiert.
Der Protokollablauf nach OAuth 2.0 sieht in diesem Fall wie folgt aus:

Der Benutzer (Resource Owner) wird durch einen Link auf den Server F weiter geleitet, wo er sich anmelden muss (Autorisierungs-Anfrage, Authorization Request). Zusätzlich wird ihm angezeigt, welcher Dienst auf welche Daten zugreifen möchte (Schritte 1–6).
Der Benutzer stimmt durch Anklicken eines entsprechenden Links zu (Autorisierungsgewährung, Authorization Grant), dass Dienst D auf seine Fotos zugreifen darf. Server F erstellt daraufhin einen Autorisierungs-Code und teilt diesen dem Dienst D mit. Parallel wird der Benutzer wieder auf die Seite des Dienstes D umgeleitet (Schritte 7–10).
Dienst D fragt nun Server F mit dem Autorisierungs-Code nach einem Access Token (Schritt 11).
Server F erstellt ein Access Token und übermittelt dieses an Dienst D (Schritt 12).
Dienst D kann nun auf die Fotos von Server F zugreifen, wobei er jedes Mal das Access Token mit übermittelt (Schritt 13).
Daraufhin liefert Server F die geschützten Fotos des Benutzers an Dienst D aus (Schritt 14).
Die obigen Punkte 1–6 entsprechen den Punkten A–F in Abschnitt 1.2 „Protocol Flow“ des RFC 6749 bzw. dem oben dargestellten abstrakten OAuth-2.0-Protokollfluss.

## OAuth 2.0 und OpenID Connect

OpenID Connect 1.0 ist eine Identitätsschicht basierend auf OAuth 2.0. Es ermöglicht Clients, die Identität des Nutzers anhand der Authentifizierung durch einen Autorisierungsserver zu überprüfen. Ferner können weitere grundlegende Informationen über den Nutzer in einer interoperablen Form (REST) erlangt werden.
OpenID Connect ermöglicht es Clients aller Art, einschließlich Web-basierter, mobiler und JavaScript-Clients, überhaupt Informationen über authentifizierte Sitzungen und Nutzer zu erhalten. Die Spezifikation ist erweiterbar um optionale Funktionen wie Verschlüsselung von Identitätsdaten, Finden von OpenID-Providern und Session-Management. OpenID Connect erweitert somit OAuth 2.0 um alle notwendigen Funktionen für ein personalisiertes Login und Single Sign-On.

## Sicherheit

Am 23. April 2009 wurde eine Sicherheitslücke im Protokoll von OAuth 1.0 aufgedeckt. Sie betraf den OAuth-Authentifizierungsablauf (auch bekannt als „Dreibeiniges OAuth“, englisch 3-legged OAuth) im OAuth Core 1.0 Abschnitt 6.
Eran Hammer, ein bis dahin zentraler Redakteur der Spezifikation OAuth 2.0, verließ Ende Juli 2012 das Projekt, weil dessen Komplexität seiner Einschätzung nach von den meisten Softwareentwicklern kaum noch sicher implementierbar sei.
