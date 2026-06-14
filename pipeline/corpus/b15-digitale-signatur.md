---
url: https://de.wikipedia.org/wiki/Digitale_Signatur
---

# Digitale Signatur

## Überblick

Eine digitale Signatur, auch digitales Signaturverfahren, ist ein asymmetrisches Kryptosystem, bei dem ein Sender mit Hilfe eines geheimen Signaturschlüssels (dem Private Key) zu einer digitalen Nachricht (d. h. zu beliebigen Daten) einen Wert berechnet, der ebenfalls digitale Signatur genannt wird. Dieser Wert ermöglicht es jedem, mit Hilfe des öffentlichen Verifikationsschlüssels (dem Public Key) die nichtabstreitbare Urheberschaft und Integrität der Nachricht zu prüfen. Um eine mit einem Signaturschlüssel erstellte Signatur einer Person zuordnen zu können, muss der zugehörige Verifikationsschlüssel dieser Person zweifelsfrei zugeordnet sein.
Mit digitalen Signaturen lassen sich sichere elektronische Signaturen (Artikel 3 Nr. 10 bis 12 eIDAS-Verordnung, bis Juli 2017 in § 2 des Signaturgesetzes) erzeugen. Die Begriffe digitale Signatur und elektronische Signatur sind jedoch nicht inhaltsgleich: Erstens müssen (zumindest einfache und fortgeschrittene) elektronische Signaturen nicht zwangsläufig auf digitalen Signaturen basieren; zweitens ist digitale Signatur ein mathematischer bzw. technischer Begriff, während elektronische Signatur ein juristischer Begriff ist.

## Das Grundprinzip

Aus den zu signierenden Daten und dem privaten Signaturschlüssel wird durch eine eindeutige Rechenvorschrift die Signatur berechnet. Unterschiedliche Daten müssen mit an Sicherheit grenzender Wahrscheinlichkeit zu einer anderen Signatur führen, und die Signatur muss für jeden Schlüssel einen anderen Wert ergeben. Bei deterministischen digitalen Signaturverfahren ist die digitale Signatur durch die Nachricht und den Schlüssel eindeutig festgelegt, bei probabilistischen digitalen Signaturverfahren gehen Zufallswerte in die Signaturberechnung ein, so dass die digitale Signatur zu einer Nachricht und einem Schlüssel viele verschiedene Werte annehmen kann.
Bei einer digitalen Signatur wird der private Schlüssel in der Regel nicht direkt auf die Nachricht angewendet, sondern auf deren Hash-Wert, der mittels einer Hashfunktion (wie z. B. SHA-1) aus der Nachricht berechnet wird. Um Angriffe zu verhindern, muss diese Hashfunktion kollisionsresistent sein, d. h., es muss praktisch unmöglich sein, zwei unterschiedliche Nachrichten zu finden, deren Hash-Wert identisch ist.
Soweit der öffentliche Schlüssel mittels eines digitalen Zertifikats einer Person zugeordnet wurde, kann auf Grund dessen, dass es nur einen zum öffentlichen Schlüssel korrespondierenden privaten Schlüssel gibt, über das öffentliche Verzeichnis des Zertifizierungsdiensteanbieters (ZDA) die Identität des Signaturerstellers ermittelt bzw. überprüft werden. Die Gesamtheit der technischen Infrastruktur, mit der die Zertifikate und Informationen zu ihrer Gültigkeit erzeugt und öffentlich bereitgestellt werden, wird als PKI (public key infrastructure) bezeichnet.
Ein weit verbreiteter Irrtum ist, dass es sich bei der Signierung um eine Verschlüsselung mit dem privaten Schlüssel eines asymmetrischen Verschlüsselungsverfahren handelt. Diese Annahme resultiert daher, dass dies bei einer naiven und unsicheren Variante von RSA, namentlich „Textbook-RSA“, tatsächlich der Fall ist. Bei sicheren Varianten von RSA (z. B. RSA-FDH, RSA-PSS, RSA-OAEP) ist dies jedoch trotz gewisser Ähnlichkeiten in Details nie der Fall. Bei anderen Verschlüsselungs- und Signaturverfahren existieren in der Regel höchstens sehr oberflächliche Ähnlichkeiten.

## Sicherheit

Bei digitalen Signaturen soll es praktisch unmöglich sein, eine Signatur zu fälschen oder zu verfälschen, oder eine zweite Nachricht zu erzeugen, für die diese Signatur ebenfalls gültig ist. Dies setzt voraus, dass sich der private Schlüssel nicht aus den damit erzeugten digitalen Signaturen und dem öffentlichen Schlüssel berechnen lässt. Es ist jedoch möglich, dass ein digitales Signaturverfahren unsicher ist (d. h., dass sich Signaturen fälschen oder verfälschen lassen), ohne dass der private Schlüssel berechnet werden kann. Ein Beispiel dafür ist RSA ohne Verwendung einer Hashfunktion oder eines Paddings: Aus den Signaturen

        S
        (
        x
        )
        ≡

          x

            d

          mod

            n

    {\displaystyle S(x)\equiv x^{d}{\bmod {n}}}

 und

        S
        (
        y
        )
        ≡

          y

            d

          mod

            n

    {\displaystyle S(y)\equiv y^{d}{\bmod {n}}}

 der Nachrichten

        x

    {\displaystyle x}

 und

        y

    {\displaystyle y}

 lässt sich die Signatur von

        x
        y

    {\displaystyle xy}

 durch die Formel

        S
        (
        x
        ⋅
        y
        )
        ≡
        (
        x
        ⋅
        y

          )

            d

        ≡

          x

            d

        ⋅

          y

            d

        ≡
        S
        (
        x
        )
        ⋅
        S
        (
        y
        )

          mod

            n

    {\displaystyle S(x\cdot y)\equiv (x\cdot y)^{d}\equiv x^{d}\cdot y^{d}\equiv S(x)\cdot S(y){\bmod {n}}}

berechnen, ohne dass dabei der private Schlüssel ermittelt wird bzw. werden kann.
Eine weitere wichtige Eigenschaft eines Signaturverfahrens ist die Nichtabstreitbarkeit der Signatur (engl. Non-repudiation). Wenn eine Signatur mit einem öffentlichen Schlüssel verifiziert wurde, sollte damit auch bewiesen sein, dass die Signatur mit dem zugehörigen privaten Schlüssel erzeugt wurde. Viele Signaturverfahren erfüllen diese Eigenschaft nicht, wenn nicht vor dem Signieren der öffentliche Verifikationsschlüssel an die Nachricht angehängt wird. Andernfalls kann ein Angreifer zu einer gegebenen Signatur mit einem passenden Verifikationsschlüssel ein weiteres Schlüsselpaar erzeugen, mit dessen Verifikationsschlüssel diese Signatur als gültig verifiziert wird (Key-Substitution-Angriff).
Die Sicherheit eines digitalen Signaturverfahrens hängt in erster Linie von den gewählten Parametern ab; insbesondere müssen die Schlüssel eine Mindestlänge aufweisen, um Angriffe abzuwehren. Außerdem hängt die Sicherheit eines Signaturverfahrens auch von der verwendeten Hashfunktion ab. Diese muss in der Regel kollisionsresistent sein, um eine sichere digitale Signatur zu gewährleisten. Außerdem gibt es oft effektive Angriffe auf bestimmte Implementierungen (theoretisch sicherer) digitaler Signaturverfahren, z. B. Seitenkanal-Angriffe oder das Ermitteln des privaten Schlüssels aus einer unzureichend geschützten persönlichen Sicherheitsumgebung (PSE).
Die theoretische Untersuchung der Sicherheit von digitalen Signaturen ist Gegenstand der Kryptoanalyse. Dabei werden unterschiedliche Angriffsziele und -szenarien betrachtet.
Sicherheitsbeweise fußen meist auf einer Reduktion der Sicherheit eines digitalen Signaturverfahrens auf die Schwierigkeit eines bekannten Berechnungsproblems.

## Bekannte Verfahren

Das mit Abstand bekannteste und am meisten eingesetzte digitale Signaturverfahren ist RSA, für das verschiedene Verfahren zum Auffüllen des Hash-Wertes (Padding), wie das in PKCS#1 standardisierte PSS, verwendet werden können. Die Sicherheit von RSA basiert auf der Schwierigkeit, große Zahlen in ihre Primfaktoren zu zerlegen (Faktorisierung). Dies ist auch Grundlage für die Sicherheit des Signaturverfahrens von Rabin.
Viele digitale Signaturverfahren basieren auf dem diskreten Logarithmus in endlichen Körpern, wie z. B. DSA, das El-Gamal, die Schnorr-Signatur, die Pointcheval-Stern-Signatur, XTR oder die Cramer-Shoup-Signatur. Auf dem diskreten Logarithmus in elliptischen Kurven beruht die Sicherheit von ECDSA, ECGDSA oder Nyberg-Rueppel-Signaturen – diese Verfahren gehören zu den Elliptische-Kurven-Kryptosystemen. Alle Verfahren, die auf dem diskreten Logarithmus (in endlichen Körpern oder auf elliptischen Kurven) beruhen, sind probabilistisch und verwenden neben der Schlüssellänge weitere öffentliche Parameter.
Andere digitale Signaturverfahren basieren auf linearen Codes, wie die McEliece-Niederreiter-Signatur, oder auf Gittern, wie die Goldreich-Goldwasser-Halevi-Signatur oder NTRU. Die Merkle-Signatur verwendet Hash-Bäume und basiert allein auf der Sicherheit der verwendeten Hashfunktion.
Manche digitale Signaturverfahren besitzen bestimmte Eigenschaften, wie z. B. nicht-abstreitbare digitale Signaturen (undeniable signatures) oder blinde Signaturen (blind signatures), bei denen der Signierende nicht weiß, was er signiert; andere ermöglichen es, die signierte Nachricht aus der Signatur wiederherzustellen (message recovery), wie z. B. die Nyberg-Rueppel-Signatur oder RSA mit dem Padding-Verfahren nach ISO 9796.
Prinzipiell kann jedes digitale Signaturverfahren mit beliebigen Hashfunktionen kombiniert werden, solange die Länge der Hashwerte für die gewählten Parameter des Signaturverfahrens geeignet ist. Internationale und nationale Standards legen jedoch oftmals mit dem Signaturverfahren auch die Hashfunktion fest (z. B. FIPS-PUB 186-2) oder geben zumindest Empfehlungen (z. B. ANSI X9.62).

## Gesetzliche Normen

### Deutschland

Die Bundesnetzagentur veröffentlicht jedes Jahr eine Liste mit Mindestanforderungen für kryptographische Algorithmen und die Erzeugung qualifizierter elektronischer Signaturen. In der „Bekanntmachung zur elektronischen Signatur nach dem Signaturgesetz und der Signaturverordnung“ vom 18. Januar 2012 werden als geeignete digitale Signaturverfahren RSA, DSA und DSA-Varianten, die auf elliptischen Kurven basieren (z. B. EC-DSA, EC-KDSA, EC-GDSA), empfohlen. Zu jedem dieser Verfahren werden die Mindestlängen für die Schlüssel sowie weitere Anforderungen an die Parameter und die Hashfunktion angegeben.

### USA

In den USA veröffentlicht die NSA die Suite B – eine Sammlung zulässiger kryptographischer Algorithmen. Diese wurde zuletzt 2005 aktualisiert.

## Einsatz in der Praxis

### PGP-Systeme

PGP steht für Pretty good Privacy und wurde von 1986 bis 1991 von Phil Zimmermann entwickelt. PGP ist selbst kein Verschlüsselungsalgorithmus, sondern ein Softwareprodukt, das viele, zum Teil recht komplexe, Verfahren zur symmetrischen und asymmetrischen Verschlüsselung sowie zur elektronischen Signatur zusammenfasst.
PGP-Systeme ermöglichen es, dass sich jeder Kommunikationspartner jederzeit ein Schlüsselpaar erzeugen kann. Das Vertrauen in die Zuordnung der Schlüssel zu einer Person soll durch eine Art gegenseitiger elektronischer Beglaubigungen gewährleistet werden. Dadurch entsteht ein Web of Trust, das auf transitiven Vertrauensbeziehungen beruht. Falls eine Person A einer Person B vertraut und diese Person B einer dritten Person C vertraut, so bedeutet dies, dass Person A auch der Person C vertraut, ohne dass eine explizite Vertrauensbeziehung besteht. Der Vorteil dieses Verfahrens besteht in den geringen Voraussetzungen an den einzelnen Benutzer.
Das ist auch gleichzeitig die große Schwäche von PGP. Es müssen mit jedem Teilnehmer bi-lateral Schlüssel und Echtheitsinformationen für den Schlüssel auf vertrauenswürdigem Weg ausgetauscht werden. Es gibt keine Möglichkeit, „verlorene“ oder bekannt gewordene Schlüssel generell aus dem Verkehr zu ziehen.
Verbreitete Varianten der ursprünglich von Phil Zimmermann entwickelten Software sind PGP (kommerziell) und GnuPG (GNU-GPL). Das GNU Privacy Projekt kümmerte sich um ein auf GnuPG basierendes graphisches Frontend für alle gängigen Betriebssysteme. Seit 2003 scheint das Projekt nicht besonders viel Aktivität zu zeigen. Das Programm WinPT (Windows Privacy Tools), das auch auf GnuPG aufsetzt, bietet unter Windows ebenfalls eine grafische Oberfläche zur komfortableren Bedienung digitaler Signierungen.
Für die Mailclients Mozilla Thunderbird, Mozilla Mail und Netscape Mail gibt es das komfortable Plug-in Enigmail, das es dem Benutzer erlaubt, die von GnuPG bereitgestellten Funktionen der Verschlüsselung und Signatur direkt im Mailprogramm zu nutzen. Das Plug-in ist Open Source und unter die GNU-GPL sowie unter die Mozilla Public License gestellt. Das Programm The Bat kann von Haus aus mittels OpenPGP ebenfalls entsprechende Verschlüsselungs- und Signierfunktionen anbieten.
Auch mit dem v. a. unter Linux verbreiteten Mail- und Groupwareclient Novell Evolution können die Funktionen zur Verschlüsselung und Signatur von GnuPG direkt und ohne Plug-in genutzt werden. Auch Evolution ist Open Source und steht unter der GNU-GPL.
Die Desktop-Suite KDE erlaubt ebenfalls die Nutzung von GnuPG in vielen der mitgelieferten Programme (z. B. Kopete und KMail).
Für die Desktopumgebung Gnome, die unter anderem bei Ubuntu verwendet wird, gibt es mit Seahorse ein Frontend für GnuPG.

## Zertifikatbasierte Systeme

In zertifikatbasierten Systemen erhält jeder Benutzer ein digitales Zertifikat, welches Angaben zu seiner Identität und den öffentlichen Schlüssel enthält. Jedes Zertifikat ist von einer ausgebenden Stelle beglaubigt, die ihrerseits wieder von höheren Stellen beglaubigt sein kann. Das Vertrauenssystem dieser PKI ist streng hierarchisch. Den gemeinsamen Vertrauensanker bildet ein sog. Stammzertifikat (Root Certificate).
Zertifikatbasierte Systeme passen sich gut in Unternehmenshierarchien ein. Nachteilig sind die hohen Kosten für Aufbau und Betrieb sowie die technische Komplexität einer Public-Key-Infrastruktur (PKI).
Der Standard S/MIME baut auf digitalen Zertifikaten auf.
Ein Zertifikat verknüpft Daten eines kryptographischen Schlüssels (oder Schlüsselpaars, bestehend aus öffentlichem und geheimem Schlüssel) mit Daten des Inhabers und einer Zertifizierungsstelle sowie weitere Spezifikationen wie Version, Gültigkeitsdauer, Verwendungszweck und Fingerprint. Die Definitionen nach PKCS legen das Inhaltsformat fest, der Standard X.509 (genauer: ITU x.509 v3 nach RFC 3280, basierend auf ASN.1-Format) beschreibt das Binärdatenformat, oftmals als DER bzw. als DER-Base64 kodiert.
Beim Web-Datenaustausch überträgt der Server sein Zertifikat mit dem öffentlichen Schlüssel an den Client. Der Client, in dem Fall der Webbrowser des Nutzers, prüft, ob er dem empfangenen Zertifikat trauen kann. Dazu schaut er in die Liste seiner Zertifikate, die ihm bei der Installation mitgegeben wurden bzw. der Benutzer selbst installiert hat und versucht die Signatur des Server-Zertifikats mit einem der im Browser integrierten Zertifikate zu verifizieren. Konnte das Zertifikat verifiziert werden, startet er eine verschlüsselte Datenübertragung. Ansonsten wird der Benutzer über einen Dialog gefragt, ob er das Zertifikat überprüfen und akzeptieren will.
Fatal ist es, wenn einem eigentlich nicht vertrauenswürdigen Zertifikat aus Leichtsinn Vertrauenswürdigkeit ausgesprochen wurde.
Beispiel: Ein betrügerischer Server gibt vor, die Hausbank zu sein. Der Webbrowser stellt beim ersten Besuch fest, dass er das Zertifikat des Betrügers nicht kennt. Der Benutzer des Webbrowsers, weil er es nicht besser weiß, klickt auf Zertifikat annehmen. Daraufhin kommunizieren der Server des Betrügers und der Client des Benutzers über eine abhörsichere Web-Verbindung. Die Gewissheit, mit dem richtigen Partner zu kommunizieren, ist durch die Leichtfertigkeit des Nutzers, das unbekannte Zertifikat anzunehmen, nicht mehr gegeben. Schlimmer noch: Dadurch, dass der Browser das Zertifikat speichert, werden nicht nur spätere Besuche des Betrüger-Servers als sicher eingestuft, sondern auch Zertifikate, die der Betrüger-Server signiert hat. In diesem Fall spricht man von einem persistenten Man-in-the-Middle-Angriff.
