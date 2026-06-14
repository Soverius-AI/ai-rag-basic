---
url: https://de.wikipedia.org/wiki/Cross-Site-Scripting
---

# Cross-Site-Scripting

## Überblick

Cross-Site-Scripting (XSS; deutsch Webseitenübergreifendes Skripting) bezeichnet das Ausnutzen einer Sicherheitslücke in Webanwendungen, indem nicht vertrauenswürdige Skripte in einen vertrauenswürdigen Kontext, wie den Browser des Benutzers, eingeschleust werden. Aus diesem vertrauenswürdigen Kontext kann dann ein Angriff gestartet werden, der innerhalb der betroffenen Webanwendung und der aktuellen Benutzersitzung des Opfers ausgeführt wird.
Ziel ist es meist, an sensible Daten des Benutzers zu gelangen, Benutzersitzungen zu entführen oder Schadcode im Browser des Opfers auszuführen, um beispielsweise Benutzerkonten zu übernehmen (Identitätsdiebstahl).

## Terminologie

Der Begriff „Cross-Site“ bezieht sich auf das Überschreiten von Grenzen zwischen verschiedenen Websites oder Domänen, etwa um sensible Daten wie Sitzungstoken an Server auszuleiten, die unter Kontrolle des Angreifers stehen. XSS-Angriffe können jedoch auch ohne Beteiligung externer Websites ablaufen, beispielsweise um Aktionen in der Sitzung des Opfer-Benutzers durchzuführen.
Meist werden für diese Angriffsart aufgrund ihrer weiten Verbreitung Skriptsprachen – insbesondere JavaScript – genutzt: daher „Scripting“.
Das X wird in diesem Zusammenhang im Englischen bildlich als Abkürzung für cross (= „Kreuz“) verstanden.
Trotz der Namensähnlichkeit sind das Cross-Site-Cooking und die Cross-Site-Request-Forgery sowie deren Anwendungen wie etwa die Cross-Site-Authentication-Attacke keine Formen von Cross-Site-Scripting.

## Funktionsweise

Cross-Site-Scripting ist eine Art der Code-Injection. Cross-Site-Scripting tritt dann auf, wenn eine Webanwendung Daten annimmt, die von einem Nutzer stammen, und diese Daten dann an einen Browser weitersendet, ohne den Inhalt zu überprüfen. Damit ist es einem Angreifer möglich, auch Skripte indirekt an den Browser des Opfers zu senden und damit Schadcode auf der Seite des Clients auszuführen.
Ein klassisches Beispiel für Cross-Site-Scripting ist die Übergabe von Parametern an ein serverseitiges Skript, das eine dynamische Webseite erzeugt. Dies kann etwa das Eingabeformular einer Webseite sein, wie in Webshops, Foren, Blogs und Wikis üblich. Die eingegebenen Daten werden auf der Webseite wieder als Seiteninhalt ausgegeben, wenn die Seite von Benutzern aufgerufen wird. So ist es möglich, manipulierte Daten an alle Benutzer zu senden, sofern das Serverskript dies nicht verhindert. Diese Daten sind oft Code einer clientseitigen Skriptsprache (meist JavaScript).
Häufige Angriffsarten sind das Entführen von Benutzer-Sessions, Website-Defacements, das Einstellen negativer Inhalte, Phishing-Angriffe und das Ausführen unerwünschter Aktionen im Kontext der Benutzer-Session.
Besonders gefährlich wird dies, wenn die Webseite, auf der der Schadcode untergebracht wurde, im lokalen Browser mit besonderen Sicherheitsrechten (Privilegien) ausgestattet ist. Der Schadcode kann dann in Abhängigkeit von der Mächtigkeit der Skriptsprache verschiedene Dinge tun, die mit den Rechten des lokalen Benutzers möglich sind. Da aus Bequemlichkeit auf Microsoft-Windows-Systemen (vor Windows Vista) der lokale Benutzer häufig mit Administrator-Rechten ausgestattet ist, ist dies bereits eine sehr gefährliche Konstellation. Aber auch ohne Administrator-Rechte kann der Angreifer versuchen, durch Ausnutzung von Sicherheitslücken bei der Ausführung der betreffenden Skriptsprache diese Rechte zu erlangen.
In der Regel wird XSS etwa in Foren breit gestreut und nicht zielgerichtet an ausgewählte Personen gerichtet. Dies ist jedoch ebenfalls möglich. Neben dem klassischen XSS im Webbrowser interpretieren häufig auch E-Mail-Programme Scriptcode, was einen Angriff per E-Mail ermöglicht. Dazu schiebt der Angreifer dem Opfer ein von ihm präpariertes HTML-Dokument unter, das per E-Mail verschickt wird. Oder der Angreifer lässt dem Opfer einen Hyperlink zukommen, der auf eine vom Angreifer präparierte Webseite weist oder selbst den Schadcode enthält. Häufig werden dazu auch Kurz-URLs, URL-Spoofing-Techniken und andere Kodierungsverfahren eingesetzt, um den Link zu verschleiern oder vertrauenswürdig erscheinen zu lassen.
Neuerdings werden auch Webspider missbraucht, um XSS- und SQL-Injection-Attacken auszuführen. Hierzu wird ein präparierter Link auf einer Webseite veröffentlicht. Sobald ein Webspider diesem Link folgt, löst er die Attacke aus. Dadurch taucht die IP-Adresse des Spiders und nicht die des eigentlichen Angreifers in den Protokollen des angegriffenen Systems auf. Der Angreifer kann somit anonym agieren. In schwerwiegenden Fällen wäre es aber dennoch möglich, die IP-Adresse des Computers, der den manipulierten Link veröffentlicht hat, herauszufinden.
Eine spezielle Variante von XSS ist das Cross-Site-Tracing. Hierbei wird eine Diagnose-Funktion eines Webservers ausgenutzt.

## Angriffsarten

Es gibt drei grundlegende Arten von Cross-Site-Scripting-Angriffen: reflektierte, persistente und DOM-basierte. Diese werden im Folgenden erläutert.
In den Beispielen wird zur Veranschaulichung der einfache JavaScript-Code alert("XSS"); verwendet, der mithilfe des script-Elements in ein HTML-Dokument eingebunden wird:

Dieser JavaScript-Code beschreibt zwar nur einen harmlosen Warnhinweis-Dialog mit dem Text „XSS“. Doch auf gleiche Weise kann auch jeder andere JavaScript-Code eingeschleust werden.

### Reflektiert oder nicht-persistent

Das nicht-persistente (non-persistent) oder reflektierte (reflected) Cross-Site-Scripting (auch reflektiertes XSS oder self XSS) ist ein Angriff, bei dem eine Benutzereingabe direkt vom Server wieder zurückgesendet wird. Enthält diese Eingabe Skriptcode, der vom Browser des Benutzers anschließend interpretiert wird, kann dort Schadcode ausgeführt werden.
Hierbei wird ausgenutzt, dass dynamisch generierte Webseiten ihren Inhalt oft an über URL (HTTP-GET-Methode) oder Formulare (HTTP-POST-Methode) übergebene Eingabewerte anpassen. Nicht-persistent heißt dieser Typ, da der Schadcode nur temporär bei der jeweiligen Generierung der Webseite eingeschleust, nicht aber gespeichert wird. Ruft man die Seite danach ohne die manipulierte URL oder das manipulierte Formular auf, ist der Schadcode nicht mehr enthalten.
Beispiel:
Eine Suchfunktion soll das Durchsuchen sämtlicher Dokumente einer Website ermöglichen. Dabei wird auf der Ergebnisseite der Suchbegriff nochmals gesondert angezeigt („reflektiert“). Der Funktion kann der Suchbegriff entweder per URL-Argument oder über ein Formular übergeben werden. Eine solche Anfrage sieht damit etwa so aus: http://example.com/?suche=Suchbegriff
Die übergebenen Suchbegriffe werden nun von einer serverseitigen Webapplikation ungeprüft auf der Ergebnisseite wieder ausgegeben:

<p>Sie suchten nach: Suchbegriff</p>

Würde nun hier folgender Suchbegriff verwendet: <script type="text/javascript">alert("XSS")</script>, würde dann folgender HTML-Code erzeugt:

<p>Sie suchten nach: <script type="text/javascript">alert("XSS")</script></p>

Nach dem gleichen Prinzip kann auch über manipulierte Formulare oder Formulareingaben Schadcode eingeschleust werden. Hierbei muss das Opfer auf eine Webseite mit einem manipulierten Formular gelockt werden. Das Formular kann dabei in einem iframe unsichtbar im Hintergrund geladen und per JavaScript automatisch abgeschickt werden, so dass eine Interaktion des Benutzers nicht erforderlich ist.

### Persistent oder beständig

Persistentes (persistent) oder beständiges (stored) Cross-Site-Scripting unterscheidet sich vom reflektierten XSS prinzipiell nur dadurch, dass der Schadcode auf dem Webserver gespeichert wird, wodurch er bei jeder Anfrage ausgeliefert wird. Dies ist bei jeder Webanwendung möglich, die Benutzereingaben serverseitig speichert und diese später wieder ausliefert, solange keine Prüfung der Benutzereingaben bzw. eine geeignete Kodierung der Ausgabe stattfindet.
Beispiel:
Eine Webseite bietet ein Gästebuch, in dem Besucher Nachrichten oder Grüße hinterlassen können. Die eingetragenen Daten werden serverseitig in einer Datenbank gespeichert und bei jedem Aufruf wieder ausgegeben.
Wird nun hier als Nachricht Folgendes eingegeben:

Eine wirklich sehr informative Website!<script type="text/javascript">alert("XSS")</script>

würde diese bei jedem Aufruf ausgeliefert und das Skript vom Browser des Benutzers ausgeführt.

### DOM-basiert oder lokal

Diese Art des Angriffs wird DOM-basiertes (Dom Injection) oder lokales (local) Cross-Site-Scripting genannt.
Im Gegensatz zu den oben genannten gängigen XSS-Varianten ist hier die Webapplikation auf dem Server gar nicht beteiligt. Somit sind auch an sich statische HTML-Seiten mit JavaScript-Unterstützung anfällig für diesen Angriff. Der Schadcode wird zur Ausführung direkt an ein clientseitiges Skript übergeben. Dies kann beispielsweise ein JavaScript sein, das einen URL-Argumentwert zur Ausgabe von Daten verwendet, ohne diesen ausreichend zu prüfen. Ein solcher Angriff bedarf des gezielten Aufrufs einer kompromittierten URL.
Beispiel:
Eine clientseitige Skriptsprache wie etwa JavaScript liest einen Argumentwert aus der URL aus:
http://example.com/foobar.html?arg=Argumentwert
Und fügt diesen nach folgendem Schema ungeprüft in das HTML-Dokument ein:

<p>Sie haben an die URL diesen String angehängt: Argumentwert</p>

Wird nun die aufrufende URL folgendermaßen manipuliert: http://example.com/foobar.html?arg=<script type="text/javascript">alert("XSS")</script>
würde der durch das clientseitige Skript erzeugte HTML-Code wie folgt aussehen:

<p>Sie haben an die URL diesen String angehängt: <script type="text/javascript">alert("XSS")</script></p>

Somit würde obiges Skript im Kontext der aufrufenden Seite ausgeführt werden.
Dieses einfache Beispiel funktioniert in Firefox nicht ohne weiteres, da dieser die Zeichen einer URL in einem Link implizit kodiert. Es sind aber DOM-Injections bekannt, für die auch Firefox anfällig ist.

## Schutz

### Schutzmaßnahmen für Webseitenbetreiber

Zunächst einmal sollte sichergestellt werden, dass die (heutzutage selten verwendete) HTTP-TRACE-Methode ausgeschaltet ist, siehe Cross-Site-Tracing.
Um durch eine Webanwendung keine Basis für XSS-Angriffe zu bieten, müssen alle eingehenden Eingabewerte als unsicher betrachtet und vor der weiteren Verarbeitung auf der Serverseite geprüft werden. Dabei sollte man sich nicht darauf verlassen, „böse“ Eingaben zu definieren (Schwarze Liste), um diese herauszufiltern, da man nicht genau wissen kann, welche Angriffsmethoden es gibt. Besser ist es daher, die „guten“ Eingaben exakt zu definieren (Weiße Liste) und nur solche Eingaben zuzulassen. Dieses Verfahren zählt ganz allgemein zu den Best Practices der Programmierung und sollte wo immer möglich angewandt werden, um unerwartetes Programmverhalten zu verhindern. Allerdings ist es je nach Anwendung nicht immer ohne weiteres in der Praxis umzusetzen, besonders wenn die erlaubten Eingabewerte sehr zahlreich sind.
Eine DOM-Injection zu verhindern, ist weit weniger einfach, da Benutzereingaben nicht serverseitig geprüft werden können. Da dieser Angriff unter Umgehung des Servers stattfindet, muss die Gültigkeitsprüfung für Eingabedaten auf Clientseite im Browser erfolgen, was allerdings wiederum leicht manipulierbar ist.
Um eine Ausgabe abzusichern (insbesondere bei reflektiertem und persistentem XSS), ist es nötig, die HTML-Metazeichen durch entsprechende Zeichenreferenzen zu ersetzen, damit sie als normale Zeichen und nicht als Metazeichen behandelt werden.
Erfolgt die Ausgabe als Teil von URLs, dann muss die URL-Kodierung auf die Eingabewerte angewendet werden. Bei der Ausgabe in JavaScript-Code müssen die Zeichen mit einem umgekehrten Schrägstrich „\“ maskiert werden.
Dabei ist zu beachten, dass bei diesen drei Kontexten (HTML, URL, JavaScript) unterschiedliche Zeichen eine Metafunktion haben (zum Beispiel ist „\“ für HTML kein Metazeichen), es muss also immer eine an das Ausgabemedium angepasste Kodierung verwendet werden.
Die meisten Programmier- sowie Skriptsprachen verfügen über vordefinierte Funktionen zur Ersetzung der Metazeichen.
Die Lösungsmöglichkeiten sind in den einzelnen Programmiersprachen vielfältig, wobei sie dennoch immer einem ähnlichen Prinzip folgen. So können in Java die problematischen Zeichen ersetzt oder maskiert werden. In PHP (htmlspecialchars()) und Perl (HTML::Entities::encode_entities()) stehen entsprechende Funktionen zur Verfügung, die die problematischen HTML-Zeichen maskieren.
Zusätzlich können durch Einsatz von Web Application Firewalls (WAF) zumindest in der Theorie einfache (primitive) XSS-Attacken verhindert werden. Praktisch sind sichere Anwendungen jeder WAF vorzuziehen.
Durch Einsatz von Content Security Policy kann der Webseitenbesitzer durch das Definieren von erlaubten Quellen für Webseiten-Bestandteile wie Javascript Cross-Site-Scripting verhindern, allerdings ist die Konfiguration nicht trivial.

### Schutzmaßnahmen für Webseitennutzer

Durch Ausschalten der JavaScript-Unterstützung (Active Scripting) im Browser kann man sich gegen clientseitige XSS-Angriffe schützen. Allerdings bieten einige Browser weitere Angriffsvektoren.
Dies gilt allerdings nur für „echtes“ XSS, also solches, welches mit JavaScript arbeitet. Wenn nur HTML-Injection (z. B. mit <iframe …/>) verwendet wird, dann hilft das Abschalten von Active Scripting im Browser nicht.
Für einige Browser gibt es auch Erweiterungen, mit denen gezielt mögliche XSS-Angriffe erkannt und verhindert werden (Siehe NoScript).
