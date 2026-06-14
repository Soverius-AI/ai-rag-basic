---
url: https://de.wikipedia.org/wiki/Symmetrisches_Kryptosystem
---

# Symmetrisches Kryptosystem

## Überblick

Ein symmetrisches Kryptosystem ist ein Kryptosystem, bei welchem im Gegensatz zu einem asymmetrischen Kryptosystem beide Teilnehmer denselben Schlüssel verwenden. Bei manchen symmetrischen Verfahren (z. B. IDEA) sind die beiden Schlüssel nicht identisch, aber können leicht auseinander berechnet werden.
Dieser Artikel beschränkt sich auf die Darstellung von Verschlüsselungsverfahren. Manchmal werden auch Message Authentication Codes als symmetrisches Kryptosystem bezeichnet.
Formal ist ein symmetrisches Verschlüsselungsverfahren ein Tupel

        (
        M
        ,
        C
        ,
        K
        ,
        E
        ,
        D
        )

    {\displaystyle (M,C,K,E,D)}

, wobei

        M

    {\displaystyle M}

 die Menge der möglichen Klartexte,

        C

    {\displaystyle C}

 die Menge der möglichen Chiffrate und

        K

    {\displaystyle K}

 die Menge der erlaubten Schlüssel ist.

        E
        :
        K
        ×
        M
        →
        C

    {\displaystyle E:K\times M\to C}

 ist die Verschlüsselungsfunktion und

        D
        :
        K
        ×
        C
        →
        M

    {\displaystyle D:K\times C\to M}

 die Entschlüsselungsfunktion. Das Verfahren muss korrekt sein, in dem Sinne, dass für alle

        k
        ∈
        K
        ,
        m
        ∈
        M

    {\displaystyle k\in K,m\in M}

 gilt

        D
        (
        k
        ,
        E
        (
        k
        ,
        m
        )
        )
        =
        m

    {\displaystyle D(k,E(k,m))=m}

.
Man teilt die symmetrischen Verfahren in Blockchiffren-basierte Verfahren und Stromchiffren auf. Mit Stromchiffren wird der Klartext Zeichen für Zeichen verschlüsselt, um den Geheimtext zu erhalten, bzw. entschlüsselt, um den Klartext zu erhalten. Eine Blockchiffre arbeitet mit einer festen Blockgröße und ver- bzw. entschlüsselt mehrere Zeichen in einem Schritt. Um damit Texte beliebiger Länge verschlüsseln zu können, sind Betriebsmodi festgelegt, die bestimmen, wie die Blockchiffre verwendet wird.
Der große Nachteil symmetrischer Verfahren liegt in der Nutzung ein und desselben Schlüssels zur Ver- und Entschlüsselung, d. h. neben der verschlüsselten Information muss auch der Schlüssel übermittelt werden. Das Problem beim Einsatz symmetrischer Verfahren ist, dass der Schlüssel über einen sicheren Kanal übertragen werden muss, denn die Sicherheit des Verfahrens hängt von der Geheimhaltung des Schlüssels ab. Früher wurde der Schlüssel typischerweise durch einen Boten persönlich überbracht. Seit den 1970er Jahren sind mit dem Diffie-Hellman-Schlüsselaustausch asymmetrische Schlüsselaustauschprotokolle bekannt, mit denen auch über einen abgehörten Kanal Schlüssel sicher übertragen werden können. Eine weitere Möglichkeit ist der Einsatz asymmetrischer Verschlüsselungsverfahren um den symmetrischen Schlüssel selbst zu verschlüsseln und ihn so geschützt auch über einen unsicheren Kanal übertragen zu können. Bei der Kommunikation können mit dieser hybriden Verschlüsselung also die Vorteile (beispielsweise die höhere Geschwindigkeit) der symmetrischen Verschlüsselung ausgenutzt werden, während der Schlüssel durch die asymmetrische Verschlüsselung vor dem Zugriff eines Angreifers geschützt wird.
Symmetrische Verfahren gibt es bereits seit dem Altertum. Bis in die 1970er Jahre waren überhaupt nur symmetrische Verfahren bekannt.

## Verfahren

AES (Advanced Encryption Standard) oder Rijndael: der US-amerikanische Verschlüsselungsstandard, Nachfolger des DES; von Joan Daemen und Vincent Rijmen entwickeltes Blockverschlüsselungsverfahren
ChaCha: aktuelles Stromverschlüsslungsverfahren, das neben AES in TLS 1.3 verwendet wird
DES (Data Encryption Standard) oder Lucifer: bis zum Oktober 2000 der Verschlüsselungsstandard der USA. Lucifer, das Verfahren, wurde 1974 von IBM entwickelt. Die Version für Privatanwender heißt Data Encryption Algorithm (DEA).
Triple-DES: eine Weiterentwicklung des DES-Verfahrens; dreimal langsamer, aber um Größenordnungen sicherer
IDEA (International Data Encryption Algorithm): ein 1990 an der ETH Zürich entwickeltes Blockverschlüsselungsverfahren; Software-patentiert von Ascom Systec; Anwendung in PGP
Blowfish: 1993 von Bruce Schneier entwickeltes Blockverschlüsselungsverfahren, unpatentiert
QUISCI (Quick Stream Cipher): sehr schnelles Stromverschlüsselungsverfahren von Stefan Müller 2001 entwickelt, unpatentiert
Twofish: Blockverschlüsselungsverfahren, vom Counterpane Team; wird u. a. in Microsoft Windows eingesetzt.
CAST-128, CAST-256: Blockverschlüsselungsverfahren von Carlisle M. Adams, unpatentiert
RC2, RC4, RC5, RC6 („Rivest Cipher“): mehrere Verschlüsselungsverfahren von Ronald L. Rivest
Serpent: Blockverschlüsselungsverfahren von Ross Anderson, Eli Biham und Lars Knudsen, unpatentiert
One-Time-Pad: unbrechbares Einmalschlüssel-Verfahren von Gilbert Vernam und Joseph Mauborgne
