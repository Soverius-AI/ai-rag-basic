---
url: https://de.wikipedia.org/wiki/Zwei-Faktor-Authentisierung
---

# Zwei-Faktor-Authentisierung

## Überblick

Die Zwei-Faktor-Authentisierung (2FA), häufig auch Zwei-Faktor-Authentifizierung genannt, bezeichnet die Zugangsberechtigung eines Nutzers mittels einer Kombination zweier unterschiedlicher und insbesondere voneinander unabhängiger Komponenten („Faktoren“). Typische Beispiele sind Bankkarte und PIN beim Geldautomaten, Fingerabdruck und Zugangscode in Gebäuden, oder Passphrase und Transaktionsnummer (TAN) beim Online-Banking. Die Zwei-Faktor-Authentisierung ist ein Spezialfall der Multi-Faktor-Authentisierung.

## Anwendung und Zweck

Im geschäftlichen Umfeld empfiehlt das Bundesamt für Sicherheit in der Informationstechnik in den entsprechenden Bausteinen des IT-Grundschutz-Kompendiums für den normalen Schutzbedarf die Nutzung einer Zwei-Faktor-Authentisierung für das Apple-ID-Konto, für die Verwendung der iCloud-Infrastruktur sowie bei der Absicherung von Administrationszugängen. Bei erhöhtem Schutzbedarf sollte eine Multi-Faktor-Authentisierung verwendet werden.
Die Stiftung Warentest empfiehlt Verbrauchern, Zwei-Faktor-Authentisierung für möglichst viele webbasierte Dienste bzw. Online-Portale zu nutzen. Grund ist, dass Benutzer häufig ungeeignete oder zu schwache Passwörter wählen und ein und dasselbe Kennwort für mehrere Benutzungskonten bzw. Web-Dienste nutzen. Einmalpasswörter werden nach wenigen Sekunden oder Minuten ungültig – das wehrt Angreifer ab, die Passwörter erspähen wollen, z. B. durch Mitlesen von Passwörtern bei der Eingabe oder durch einen Keylogger.
Im Bankwesen wurde 2018 mit der EU-Zahlungsdiensterichtlinie die Zwei-Faktor-Authentisierung für den Europäischen Wirtschaftsraum verpflichtend eingeführt. Auch Webplattformen wie Amazon oder Google und E-Mail-Provider wie mail.de (seit 2012), posteo (seit 2014) oder mailbox bieten den Anwendern an, ihr Benutzerkonto durch Zwei-Faktor-Authentisierung zu schützen.

## Komponenten

Die Authentifizierung mit zwei Faktoren ist nur dann erfolgreich, wenn zwei festgelegte Authentisierungsmittel unterschiedlicher Kategorie (Besitz, Wissen, Eigenschaft) zusammen bei der Prüfung eingesetzt werden. Jedes Authentisierungsmittel muss dabei das Protokoll der Authentifizierung erfolgreich bestehen. Fehlt ein Faktor oder ein Faktor wird falsch verwendet, lässt sich die Authentizität nicht zweifelsfrei feststellen und der Zugang zum System wird verweigert.
Die Faktoren können sein:

Geheimnishütender Gegenstand (Besitz), wie zum Beispiel ein Sicherheits-Token, eine Bankkarte, eine App, die Einmalkennwörter generiert (siehe unten), oder ein physischer Schlüssel,
Geheimes Wissen, wie zum Beispiel ein Passwort, ein Einmalkennwort, eine PIN oder eine Transaktionsnummer (TAN),
biometrische Charakteristika (Inhärenz), wie zum Beispiel ein Fingerabdruck, das Muster einer Regenbogenhaut (Iris-Erkennung), die menschliche Stimme oder das Gangmuster.

## Mittelbare Zwei-Faktor-Authentisierung

Authentisierung über ein Sicherheits-Token als geheimnishütenden Gegenstand hat den Nachteil, dass dieser immer präsent sein muss, wenn der Nutzer sich anmelden möchte. Wird der Gegenstand gestohlen, verloren oder hat der Nutzer ihn schlicht nicht dabei, sind Zugriffe unmöglich bzw. es entsteht ein hoher Aufwand. Zudem entstehen Kosten für die Erstanschaffung, ebenso wie ggf. bei Ersatzbeschaffungen. Um diesen Risiken aus dem Weg zu gehen, ist die sogenannte mittelbare Zwei-Faktor-Authentisierung als Alternative entwickelt worden. Sie nutzt Mobilgeräte, wie Mobiltelefone und Smartphones, als geheimnishütenden Gegenstand, also „etwas, was der Nutzer besitzt“ (aber auch verlieren kann). Da das Mobilgerät bei vielen Menschen heute ein ständiger Begleiter ist, muss kein zusätzlicher Token angeschafft und beschützt werden.
Möchte der Anwender sich authentisieren, muss er meist eine Passphrase und ein einmalig gültiges, dynamisch erzeugtes Einmalkennwort eingeben. Dieses Einmalkennwort, welches je nach Verfahren auch nur einen kurzen Zeitraum gültig ist, erhält er entweder über einen alternativen Übertragungsweg wie beispielsweise per SMS oder E-Mail, oder es wird ein einmaliges Einmalkennwort, basierend auf einem gemeinsamen Geheimnis, erzeugt, wie beispielsweise TOTP.
Wenn der sich authentisierende Benutzer keine manuelle Dateneingabe mehr zu erledigen braucht, gilt der Prozess als halbautomatisiert. Das ist mit der NFC-Methode erreicht. Verwendet wird dazu ein zuvor personalisiertes Mobilgerät. Erst dann, wenn der sich authentisierende Benutzer keinerlei manuelle Eingabe mehr leisten muss, gilt der Prozess als vollautomatisiert. Das ist mit dem Verwenden von Piconetzen (Bluetooth) als internationalem Industriestandard erreicht. Verwendet wird dazu ein zuvor personalisiertes Mobilgerät.

## Apps zur Zwei-Faktor-Authentisierung mittels zeitbasierten Einmalkennwörtern (TOTP)

Anwender installieren auf dem mobilen Endgerät, das zur Zwei-Faktor-Authentisierung gegenüber einem oder mehreren webbasierten Diensten dient, eine App. Sodann kann ein webbasierter Dienst durch Zwei-Faktor-Authentisierung geschützt werden, indem man die App beim Dienst als zweiten Faktor registriert. Dazu tauschen der Sicherheits-Server des Dienstes und das Endgerät eine Zeichenfolge als Geheimnis oder Token aus – z. B. indem man mit dem Mobilgerät einen QR-Code scannt oder eine entsprechende, vom Sicherheits-Server angezeigte Zeichenfolge händisch eintippt. Nach diesem ersten Schritt ist das Geheimnis im Idealfall nur dem Sicherheits-Server und dem persönlichen Gerät des Nutzers bekannt und sollte diesen Speicher nie verlassen. Nach einem Funktionstest schaltet der Webdienst die Zwei-Faktor-Authentisierung für das Benutzerkonto aktiv.
Will der Benutzer den webbasierten Dienst nun nutzen, wird er – nach Eingabe seines Benutzernamens und Passworts – aufgefordert, ein von der App generiertes Einmalpasswort als zweiten Faktor zur Authentisierung einzugeben. Die App berechnet das Einmalpasswort aus der aktuellen Uhrzeit und dem Geheimnis. Daher müssen die Uhren von Client und Server ungefähr synchron sein. In der Regel funktioniert der Vorgang auch im Flugmodus. In der Praxis kann der Server so programmiert werden, auch den Vorgänger- und Nachfolger-Code zu akzeptieren, um Zeitabweichungen von bis zu einer Minute abzudecken.
Das zum Erzeugen des Einmalpassworts notwendige Geheimnis wird nicht übertragen und kann deswegen nicht abgehört werden.
Es gibt mehrere Apps zur Zwei-Faktor-Authentikation via TOTP. Einige unterstützten viele Plattformen, da sie die offenen Standards HOTP (RFC 4226) und TOTP (RFC 6238) umsetzen. Damit sind sie gegenüber jedem Webdienst einsetzbar, dessen Sicherheits-Server jene Standards implementiert.

Auch Passwort-Manager wie LastPass, Bitwarden, 1Password, iCloud Schlüsselbund, Proton Pass oder KeePass unterstützen Zwei-Faktor-Authentisierung gegenüber Dritten.

## Universelle Zwei-Faktor-Authentisierung

Die FIDO-Allianz veröffentlichte am 9. Dezember 2014 die erste Version des universellen und lizenzfreien Standards U2F für die Zwei-Faktor-Authentisierung, die verschiedene Verfahren und Geräte unterstützt. Im Februar 2015 kündigte Microsoft an, dass der Standard 2.0 der FIDO-Allianz für die Authentifikation im Internet vom Betriebssystem Windows 10 unterstützt wird.

## Sicherheitsaspekte

Sicherheitsexperten warnen, dass Betrüger SMS-Spoofing und Man-in-the-Middle-Angriffe, bei denen Angreifer eine gefälschte Login-Seite präsentieren, missbrauchen können, um die Zwei-Faktor-Authentisierung, die auf Einmalkennwörtern beruht, zu umgehen. FIDO U2F bietet hier zusätzlichen Schutz.
Beide Faktoren sollten zwei getrennte Übertragungskanäle nutzen. Der Forderung, sie nicht am gleichen Ort zu speichern, wird oft nicht nachgekommen. So nutzen viele Banken die E-Banking-App und die App zur Zwei-Faktor-Authentisierung per Einmalkennwort im selben Endgerät, sodass bei dessen Verlust nur noch ein etwaiger PIN-Code auf der 2FA-App die Anwendung schützt. Selbst wenn man die App zur Zwei-Faktor-Authentifizierung mittels TOTP auf demselben Gerät installierte, auf dem man den 2FA-gesicherten IT-Dienst nutzt, erhöht das die Sicherheit gegenüber der Authentisierung lediglich mittels Anmeldename und Passwort – der sich aus der Einmaligkeit des Einmalpassworts ergibt. Die Nutzung der Authentisierungs-App über ein zweites Gerät bietet jedoch zusätzlich die Sicherheit des zweiten Faktors.
Außerdem erlauben die meisten Anbieter, bestimmte Rechner als vertrauenswürdige Clients zu definieren, von denen aus die Anmeldung ohne Einmalpasswort erfolgen darf. Kann ein Angreifer sich Zugang zu einem solchen Rechner verschaffen, besteht kein zusätzlicher Schutz.

## Missbrauch durch betrügerische Telekommunikationsunternehmen

Bei Zwei-Faktor-Autorisierung mittels SMS, bei denen der Anbieter eines Dienstes eine Einmal-TAN an den Nutzer sendet, die dieser dann eingeben muss, fallen Kosten für den Dienstanbieter für den Versand dieser SMS an. Twitter musste einige Jahre lang jeweils mehr als 60 Millionen US-Dollar pro Jahr an insgesamt rund 390 Telekommunikationsunternehmen bezahlen, bei denen mehr als 10 % der Twitter in Rechnung gestellten SMS durch betrügerische Anmeldeprozesse generiert wurden. Diese Telekommunikationsunternehmen hatten zahlreiche Konten bei Twitter eingerichtet, mit denen sie sich laufend immer wieder anmeldeten, um Twitter den Versand der SMS mit den Anmelde-TANs in Rechnung stellen zu können. Darin waren Unternehmen aus Nordamerika noch nicht inbegriffen. Diese 60 Millionen US-Dollar bildeten den größten Einzelposten der 221 Millionen US-Dollar Verlust der Twitter Inc. im Jahre 2021.
Dieser Missbrauch ist nur bei der – immer weniger genutzten – Verwendung von SMS als zweitem Faktor möglich und bedeutet keine Kompromittierung der Sicherheit dieser Authentifizierungsmethode.
