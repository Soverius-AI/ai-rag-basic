---
url: https://de.wikipedia.org/wiki/RSA-Kryptosystem
---

# RSA-Kryptosystem

## Überblick

RSA (Rivest–Shamir–Adleman) ist ein asymmetrisches kryptographisches Verfahren, das sowohl zum Verschlüsseln als auch zum digitalen Signieren verwendet werden kann. Es verwendet ein Schlüsselpaar, bestehend aus einem privaten Schlüssel, der zum Entschlüsseln oder Signieren von Daten verwendet wird, und einem öffentlichen Schlüssel, mit dem man verschlüsselt oder Signaturen prüft. Der private Schlüssel wird geheim gehalten und kann nicht mit realistischem Aufwand aus dem öffentlichen Schlüssel berechnet werden.

## Geschichte

Nachdem Whitfield Diffie und Martin Hellman im Jahr 1976 eine Theorie zur Public-Key-Kryptografie veröffentlicht hatten, versuchten die drei Mathematiker Ronald L. Rivest, Adi Shamir und Leonard Adleman am MIT, die Annahmen von Diffie und Hellman zu widerlegen. Nachdem sie den Beweis bei verschiedenen Verfahren durchführen konnten, stießen sie schließlich auf eines, bei dem sie keinerlei Angriffspunkte fanden. Hieraus entstand 1977 RSA, das erste veröffentlichte asymmetrische Verschlüsselungsverfahren. Der Name RSA steht für die Anfangsbuchstaben ihrer Familiennamen. Da Adleman seinen Anteil als gering einschätzte und anfangs gar nicht als Autor genannt werden wollte, kam es zur nicht-alphabetischen Reihenfolge der Autoren und damit zur Abkürzung RSA.
Bereits Anfang der 1970er Jahre war im britischen GCHQ von Ellis, Cocks und Williamson ein ähnliches asymmetrisches Verfahren entwickelt worden, welches aber keine große praktische Bedeutung erlangte und aus Geheimhaltungsgründen nicht wissenschaftlich publiziert wurde.
RSA konnte daher 1983 zum Patent angemeldet werden, obgleich es nicht das erste Verfahren dieser Art war. Das Patent erlosch am 21. September 2000.

## Verfahren

Das Verfahren ist mit dem Rabin-Verschlüsselungsverfahren verwandt. Da es deterministisch arbeitet, ist es unter Umständen für bestimmte Angriffe anfällig. In der Praxis wird RSA daher mit dem Optimal Asymmetric Encryption Padding kombiniert.

### Einwegfunktionen

Funktionen, bei denen eine Richtung leicht, die andere (Umkehrfunktion) schwierig zu berechnen ist, bezeichnet man als Einwegfunktionen (engl. one-way function). Beispielsweise ist nach aktuellem Wissensstand die Faktorisierung einer großen Zahl, also ihre Zerlegung in ihre Primfaktoren, sehr aufwändig, während das Erzeugen einer Zahl durch Multiplikation von Primzahlen relativ einfach und schnell möglich ist. Spezielle Einwegfunktionen sind Falltürfunktionen (engl. trapdoor one-way function), die mit Hilfe einer Zusatzinformation auch rückwärts leicht zu berechnen sind.
Die Verschlüsselung und die Signatur mit RSA basieren auf einer Einwegpermutation mit Falltür (engl. trapdoor one-way permutation, kurz TOWP), einer Falltürfunktion, die gleichzeitig bijektiv, also eine Permutation, ist. Die Einwegeigenschaft begründet, warum die Entschlüsselung (bzw. das Signieren) ohne den geheimen Schlüssel (die Falltür) schwierig ist.

### Erzeugung des öffentlichen und privaten Schlüssels

Die Schlüssel bestehen aus den drei Zahlen

        e
        ,
        d

    {\displaystyle e,d}

 und

        N

    {\displaystyle N}

. Man nennt

        N

    {\displaystyle N}

 den RSA-Modul,

        e

    {\displaystyle e}

 den Verschlüsselungsexponenten und

        d

    {\displaystyle d}

 den Entschlüsselungsexponenten. Das Zahlenpaar

        (
        e
        ,
        N
        )

    {\displaystyle (e,N)}

 bildet den öffentlichen Schlüssel (public key) und das Paar

        (
        d
        ,
        N
        )

    {\displaystyle (d,N)}

 den privaten Schlüssel (private key). Diese Zahlen werden durch das folgende Verfahren erzeugt:

Wähle zufällig und stochastisch unabhängig zwei Primzahlen

        p
        ≠
        q

    {\displaystyle p\neq q}

. Diese sollen die gleiche Größenordnung haben, aber nicht zu dicht beieinander liegen, sodass der folgende Rahmen ungefähr eingehalten wird:

        0

          ,

        1
        <

          |

          log

            2

        ⁡
        p
        −

          log

            2

        ⁡
        q

          |

        <
        30

    {\displaystyle 0{,}1<|\log _{2}p-\log _{2}q|<30}

. (In der Praxis erzeugt man dazu solange Zahlen der gewünschten Länge und führt mit diesen anschließend einen Primzahltest durch, bis man zwei Primzahlen gefunden hat.)
Berechne den RSA-Modul

        N
        =
        p
        ⋅
        q

    {\displaystyle N=p\cdot q}

Berechne die Eulersche φ-Funktion von

        N

    {\displaystyle N}

        φ
        (
        N
        )
        =
        (
        p
        −
        1
        )
        ⋅
        (
        q
        −
        1
        )

    {\displaystyle \varphi (N)=(p-1)\cdot (q-1)}

Wähle eine zu

        φ
        (
        N
        )

    {\displaystyle \varphi (N)}

 teilerfremde Zahl

        e

    {\displaystyle e}

, für die gilt

        1
        <
        e
        <
        φ
        (
        N
        )

    {\displaystyle 1<e<\varphi (N)}

.
Berechne den Entschlüsselungsexponenten

        d

    {\displaystyle d}

 als multiplikativ Inverses von

        e

    {\displaystyle e}

 bezüglich des Moduls

        φ
        (
        N
        )

    {\displaystyle \varphi (N)}

, was mit dem erweiterten euklidischen Algorithmus erfolgen kann. Es soll also die Kongruenz gelten:

        e
        ⋅
        d
        ≡
        1

          (
          mod

          φ
          (
          N
          )
          )

    {\displaystyle e\cdot d\equiv 1{\pmod {\varphi (N)}}}

Die Zahlen

        p

    {\displaystyle p}

,

        q

    {\displaystyle q}

 und

        φ
        (
        N
        )

    {\displaystyle \varphi (N)}

 werden nicht mehr benötigt und können nach der Schlüsselerstellung gelöscht werden. Es ist jedoch relativ einfach, diese Werte aus

        e

    {\displaystyle e}

,

        d

    {\displaystyle d}

 und

        N

    {\displaystyle N}

 zu rekonstruieren.

        p
        ,
        q
        ,
        φ
        (
        N
        )

    {\displaystyle p,q,\varphi (N)}

 und

        d

    {\displaystyle d}

 müssen geheim gehalten werden.
Da die Primzahltests inzwischen ausreichend schnell sind, wählt man heutzutage zuerst einen kleinen Exponenten

        e

    {\displaystyle e}

 mit

          2

            16

        <
        e
        <

          2

            64

    {\displaystyle 2^{16}<e<2^{64}}

 und verwirft bei der Erzeugung die Primzahlen

        p
        ,
        q

    {\displaystyle p,q}

, für die

        p
        −
        1
        ,
        q
        −
        1

    {\displaystyle p-1,q-1}

 nicht teilerfremd zu

        e

    {\displaystyle e}

 sind. Die Wahl eines

        e

    {\displaystyle e}

 kleiner als die Fermat-Zahl

          F

            4

        =

          2

            16

        +
        1
        =
        65537

    {\displaystyle F_{4}=2^{16}+1=65537}

 kann zu Angriffsmöglichkeiten führen, etwa in Form des von Johan Håstad publizierten „Broadcast“-Angriffs, bei dem der Versand einer Nachricht an mehrere Empfänger zu einer Dechiffrierung über den chinesischen Restsatz führen kann.
Wenn

        d

    {\displaystyle d}

 weniger als ein Viertel der Bits des RSA-Moduls hat, kann

        d

    {\displaystyle d}

 – sofern nicht bestimmte Zusatzbedingungen erfüllt sind – mit einem auf Kettenbrüchen aufbauenden Verfahren effizient ermittelt werden. Bei der Wahl eines Exponenten

        e

    {\displaystyle e}

 kleiner als

          2

            64

    {\displaystyle 2^{64}}

 ist diese Möglichkeit jedoch ausgeschlossen.

#### Beispiel

Man wählt den Exponenten

        e
        =
        23

    {\displaystyle e=23}

.
Man wählt

        p
        =
        11

    {\displaystyle p=11}

 und

        q
        =
        13

    {\displaystyle q=13}

 für die beiden Primzahlen. Die Zahlen

        p
        −
        1
        =
        10

    {\displaystyle p-1=10}

 und

        q
        −
        1
        =
        12

    {\displaystyle q-1=12}

 sind teilerfremd zum Exponenten

        e
        =
        23

    {\displaystyle e=23}

.
Der RSA-Modul ist

        N
        =
        p
        ⋅
        q
        =
        143

    {\displaystyle N=p\cdot q=143}

. Damit bilden

        e
        =
        23

    {\displaystyle e=23}

 und

        N
        =
        143

    {\displaystyle N=143}

 den öffentlichen Schlüssel.
Die eulersche φ-Funktion hat den Wert

        φ
        (
        N
        )
        =
        φ
        (
        143
        )
        =
        (
        p
        −
        1
        )
        (
        q
        −
        1
        )
        =
        120

    {\displaystyle \varphi (N)=\varphi (143)=(p-1)(q-1)=120}

.
Berechnung der Inversen zu

        e

    {\displaystyle e}

 modulo

        φ
        (
        N
        )

    {\displaystyle \varphi (N)}

:Es gilt:

        e
        ⋅
        d
        +
        k
        ⋅
        φ
        (
        N
        )
        =
        1
        =
        ggT
        ⁡
        (
        e
        ,
        φ
        (
        N
        )
        )

    {\displaystyle e\cdot d+k\cdot \varphi (N)=1=\operatorname {ggT} (e,\varphi (N))}

,im konkreten Beispiel:

        23
        ⋅
        d
        +
        k
        ⋅
        120
        =
        1
        =
        ggT
        ⁡
        (
        23
        ,
        120
        )

    {\displaystyle 23\cdot d+k\cdot 120=1=\operatorname {ggT} (23,120)}

.Mit dem erweiterten euklidischen Algorithmus berechnet man nun die Faktoren

        d
        =
        47

    {\displaystyle d=47}

 und

        k
        =
        −
        9

    {\displaystyle k=-9}

, und somit ist

        d
        =
        47

    {\displaystyle d=47}

 der private Schlüssel, während

        k

    {\displaystyle k}

 nicht weiter benötigt wird.

### Verschlüsseln von Nachrichten

Um eine Nachricht

        m

    {\displaystyle m}

 zu verschlüsseln, verwendet der Absender die Formel

        c
        ≡

          m

            e

          (
          mod

          N
          )

    {\displaystyle c\equiv m^{e}{\pmod {N}}}

und erhält so aus der Nachricht

        m

    {\displaystyle m}

 den Geheimtext

        c

    {\displaystyle c}

. Die Zahl

        m

    {\displaystyle m}

 muss dabei kleiner sein als der RSA-Modul

        N

    {\displaystyle N}

.

#### Beispiel

Es soll die Zahl 7 verschlüsselt werden. Der Sender benutzt den veröffentlichten Schlüssel des Empfängers

        N
        =
        143

    {\displaystyle N=143}

,

        e
        =
        23

    {\displaystyle e=23}

 und rechnet

        2
        ≡

          7

            23

          (
          mod

          143
          )

    {\displaystyle 2\equiv 7^{23}{\pmod {143}}}

Das Chiffrat ist also

        c
        =
        2

    {\displaystyle c=2}

.

### Entschlüsseln von Nachrichten

Der Geheimtext

        c

    {\displaystyle c}

 kann durch modulare Exponentiation wieder zum Klartext

        m

    {\displaystyle m}

 entschlüsselt werden. Der Empfänger benutzt die Formel

        m
        ≡

          c

            d

          (
          mod

          N
          )

    {\displaystyle m\equiv c^{d}{\pmod {N}}}

mit dem nur ihm bekannten Wert

        d

    {\displaystyle d}

 sowie

        N

    {\displaystyle N}

.

#### Beispiel

Für gegebenes

        c
        =
        2

    {\displaystyle c=2}

 wird berechnet

        7
        ≡

          2

            47

          (
          mod

          143
          )

    {\displaystyle 7\equiv 2^{47}{\pmod {143}}}

Der Klartext ist also

        m
        =
        7

    {\displaystyle m=7}

.

### Signieren von Nachrichten

Um eine Nachricht

        m

    {\displaystyle m}

 zu signieren, wird vom Sender auf die Nachricht die RSA-Funktion mit dem eigenen privaten Schlüssel

        d

    {\displaystyle d}

 angewendet. Zum Prüfen wendet der Empfänger auf die Signatur

          m

            d

          mod

        N

    {\displaystyle m^{d}{\bmod {\ }}N}

 mit Hilfe des öffentlichen Schlüssels des Senders

        e

    {\displaystyle e}

 die Umkehrfunktion an und vergleicht diese mit der zusätzlich übermittelten unverschlüsselten Nachricht

        m

    {\displaystyle m}

. Wenn beide übereinstimmen, ist die Signatur gültig und der Empfänger kann sicher sein, dass derjenige, der das Dokument signiert hat, auch den privaten Schlüssel besitzt und dass niemand seit der Signierung das Dokument geändert hat. Es wird also die Integrität und Authentizität garantiert, vorausgesetzt, der private Schlüssel ist wirklich geheim geblieben.
Aufgrund der Homomorphieeigenschaft von RSA ist dieses Signaturverfahren jedoch ungeeignet. Liegen zwei Signaturen

          m

            1

            d

    {\displaystyle m_{1}^{d}}

,

          m

            2

            d

    {\displaystyle m_{2}^{d}}

 vor, so kann ein Angreifer daraus durch Multiplizieren die Signatur der Nachricht

          m

            1

          m

            2

    {\displaystyle m_{1}m_{2}}

 berechnen. Sogar aus nur einer Signatur

          m

            d

    {\displaystyle m^{d}}

 kann ein Angreifer beliebig viele Nachrichten-Signatur-Paare erzeugen:

        (
        m
        ⋅

          c

            e

        ,

          m

            d

        ⋅
        c
        )

    {\displaystyle (m\cdot c^{e},m^{d}\cdot c)}

 ist ein solches Paar für beliebige

        c

    {\displaystyle c}

.
Dieses Problem kann umgangen werden, indem nicht die Nachricht selbst signiert wird. Stattdessen wird mit einer zusätzlich zum Signaturverfahren spezifizierten kollisionsresistenten Hashfunktion

        H

    {\displaystyle H}

 der Hash-Wert

        H
        (
        m
        )

    {\displaystyle H(m)}

 der Nachricht

        m

    {\displaystyle m}

 berechnet. Dieser wird mit dem privaten Schlüssel signiert, um die eigentliche Signatur zu erhalten. Der Empfänger kann die so erhaltene Signatur mit dem öffentlichen Schlüssel verifizieren und erhält dabei einen Wert

          h
          ′

    {\displaystyle h'}

. Diesen vergleicht er mit dem von ihm selbst gebildeten Hashwert

        H
        (
        m
        )

    {\displaystyle H(m)}

 der ihm vorliegenden Nachricht

        m

    {\displaystyle m}

. Wenn beide Werte

        H
        (
        m
        )
        =

          h
          ′

    {\displaystyle H(m)=h'}

 übereinstimmen, kann mit hoher Wahrscheinlichkeit davon ausgegangen werden, dass die Nachricht fehlerfrei übertragen wurde und nicht gefälscht ist. Auch diese Modifikation erfüllt allerdings nicht die modernen Sicherheitsanforderungen, daher werden Verfahren wie RSA-PSS verwendet, um mit RSA zu signieren.

### RSA mit dem Chinesischen Restsatz

Mit Hilfe des Chinesischen Restsatzes können Nachrichten effizienter entschlüsselt oder signiert werden.
Weil der Modul

        N

    {\displaystyle N}

 sehr groß ist, sind auch die im Rechner verwendeten Bitdarstellungen der Zahlen sehr lang.
Der Chinesische Restsatz erlaubt es, die Berechnungen statt in einer Gruppe der Größe

        N

    {\displaystyle N}

 gleichzeitig in den zwei kleineren Gruppen der Größe

        p

    {\displaystyle p}

 und

        q

    {\displaystyle q}

 auszuführen und das Ergebnis danach wieder zusammenzusetzen.
Da hier die Zahlen wesentlich kleiner sind, ist diese Berechnung insgesamt schneller.
Diese Variante wird nach der englischen Bezeichnung des Chinesischen Restsatzes CRT (Chinese remainder theorem) auch CRT-RSA genannt.
Der private Schlüssel besteht dann im Gegensatz zu dem, was im Rest dieses Artikels angenommen wird, aus folgenden Komponenten:

        N

    {\displaystyle N}

, der RSA-Modul,

        d

    {\displaystyle d}

, der Entschlüsselungsexponent,

        p

    {\displaystyle p}

, die erste Primzahl,

        q

    {\displaystyle q}

, die zweite Primzahl (ungleich p),

          d

            p

        =
        d

          mod

            (

        p
        −
        1
        )

    {\displaystyle d_{p}=d{\bmod {(}}p-1)}

, häufig dmp1 genannt,

          d

            q

        =
        d

          mod

            (

        q
        −
        1
        )

    {\displaystyle d_{q}=d{\bmod {(}}q-1)}

, häufig dmq1 genannt und

          q

            I
            n
            v

        =

          q

            −
            1

          mod

            p

    {\displaystyle q_{Inv}=q^{-1}{\bmod {p}}}

, häufig iqmp genannt.
Eine Nachricht

        m

    {\displaystyle m}

 wird dann wie folgt signiert:

          m

            1

        =

          m

              d

                p

          mod

            p

    {\displaystyle m_{1}=m^{d_{p}}{\bmod {p}}}

          m

            2

        =

          m

              d

                q

          mod

            q

    {\displaystyle m_{2}=m^{d_{q}}{\bmod {q}}}

        s
        =
        (

          q

            I
            n
            v

        (

          m

            1

        −

          m

            2

        )

          mod

            p

        )
        q
        +

          m

            2

    {\displaystyle s=(q_{Inv}(m_{1}-m_{2}){\bmod {p}})q+m_{2}}

Aus der letzten Gleichung sieht man sofort, dass

        s

          mod

            q

        =

          m

            2

    {\displaystyle s{\bmod {q}}=m_{2}}

 und

        s

          mod

            p

        =

          q

            I
            n
            v

        q
        (

          m

            1

        −

          m

            2

        )
        +

          m

            2

          mod

            p

        =

          m

            1

    {\displaystyle s{\bmod {p}}=q_{Inv}q(m_{1}-m_{2})+m_{2}{\bmod {p}}=m_{1}}

.
Die Signatur

        s

    {\displaystyle s}

 stimmt also sowohl

          mod

            p

    {\displaystyle {\bmod {p}}}

 als auch

          mod

            q

    {\displaystyle {\bmod {q}}}

 mit

          m

            d

    {\displaystyle m^{d}}

 überein, daher ist nach dem Chinesischen Restsatz

        s
        =

          m

            d

          mod

            N

    {\displaystyle s=m^{d}{\bmod {N}}}

. (Bemerkung: Die Identität

        s
        =

          m

            d

          mod

            p

    {\displaystyle s=m^{d}{\bmod {p}}}

 sieht man so: Modulo p gilt

        s
        =

          m

              d

                p

        =

          m

            d
            +
            k
            (
            p
            −
            1
            )

        =

          m

            d

        (

          m

            p
            −
            1

          )

            k

        =

          m

            d

    {\displaystyle s=m^{d_{p}}=m^{d+k(p-1)}=m^{d}(m^{p-1})^{k}=m^{d}}

. Die letzte Identität folgt aus dem kleinen fermatschen Satz. Analog erhält man

        s
        =

          m

            d

          mod

            q

    {\displaystyle s=m^{d}{\bmod {q}}}

.)

### RSA ist kein Primzahltest

Wenn

        p
        ≠
        q

    {\displaystyle p\neq q}

 Primzahlen sind, funktioniert das RSA-Verfahren. Umgekehrt kann aber aus dem funktionierenden RSA-Verfahren nicht geschlossen werden, dass der Modul

        N

    {\displaystyle N}

 das Produkt zweier Primzahlen

        p

    {\displaystyle p}

 und

        q

    {\displaystyle q}

 ist, denn mit Carmichael-Zahlen funktioniert das Verfahren auch.

## Sicherheit

Public-Key-Verschlüsselungs-Verfahren wie RSA werden in der Praxis immer als hybride Verfahren in Verbindung mit symmetrischen Verfahren verwendet. Bei der Analyse der Sicherheit im praktischen Einsatz müssen die Sicherheit des Public-Key-Verfahrens und die praktische Sicherheit des Gesamtsystems betrachtet werden. Angriffe auf das RSA-Verfahren erfolgen oft über Seitenkanäle. Das Gesamtsystem kann unsicher sein, wenn nur eine Komponente, beispielsweise ein Computer, kompromittiert wurde.

### Beziehung zwischen RSA und dem Faktorisierungsproblem

Bei der Kryptoanalyse des RSA-Verfahrens unterscheidet man zwischen zwei Problemen:

RSA-Problem (

          R
          S
          A
          P

    {\displaystyle \mathrm {RSAP} }

): Gegeben sind der öffentliche Schlüssel

        (
        N
        ,
        e
        )

    {\displaystyle (N,e)}

 sowie der Geheimtext

        c

    {\displaystyle c}

. Gesucht wird der Klartext

        m

    {\displaystyle m}

, wobei gilt:

          m

            e

        ≡
        c

          (
          mod

          N
          )

    {\displaystyle m^{e}\equiv c{\pmod {N}}}

Das Problem liegt hier in der Schwierigkeit,

        e

    {\displaystyle e}

-te Wurzeln modulo

        N

    {\displaystyle N}

 zu ziehen, was zur Bestimmung der Nachricht

        m

    {\displaystyle m}

 notwendig ist.
RSA-Schlüsselproblem (

          R
          S
          A

            P

              ∗

    {\displaystyle \mathrm {RSAP^{*}} }

): Gegeben ist der öffentliche Schlüssel

        (
        N
        ,
        e
        )

    {\displaystyle (N,e)}

. Gesucht wird der geheime Schlüssel

        d

    {\displaystyle d}

, wobei gilt:

        e
        d
        ≡
        1

          (
          mod

          φ
          (
          N
          )
          )

    {\displaystyle ed\equiv 1{\pmod {\varphi (N)}}}

Das Problem liegt hier in der Schwierigkeit, die Eulersche φ-Funktion von

        N

    {\displaystyle N}

 ohne Kenntnis der Faktoren p und q zu berechnen.
Folgende Beziehungen zwischen den RSA-Problemen und

          F
          A
          C
          T
          O
          R
          I
          N
          G

    {\displaystyle \mathrm {FACTORING} }

, dem Faktorisierungsproblem, sind bekannt:

          R
          S
          A
          P

          ≤

            p

          R
          S
          A

            P

              ∗

          =

            p

          F
          A
          C
          T
          O
          R
          I
          N
          G

    {\displaystyle \mathrm {RSAP} \leq _{p}\mathrm {RSAP^{*}} =_{p}\mathrm {FACTORING} }

Die Beziehung

          R
          S
          A
          P

          ≤

            p

          R
          S
          A

            P

              ∗

    {\displaystyle \mathrm {RSAP} \leq _{p}\mathrm {RSAP^{*}} }

 ist trivial, denn wenn man den privaten Schlüssel hat, kann man damit wie oben jeden beliebigen Geheimtext entschlüsseln. Ob die Umkehrung gilt, ist zurzeit unbekannt.
Auch die Beziehung

          R
          S
          A

            P

              ∗

          ≤

            p

          F
          A
          C
          T
          O
          R
          I
          N
          G

    {\displaystyle \mathrm {RSAP^{*}} \leq _{p}\mathrm {FACTORING} }

 ist trivial, denn wenn man

        N
        =
        p
        q

    {\displaystyle N=pq}

 faktorisiert hat, kann man damit leicht

        φ
        (
        N
        )
        =
        (
        p
        −
        1
        )
        (
        q
        −
        1
        )

    {\displaystyle \varphi (N)=(p-1)(q-1)}

 berechnen, und dann mit dem euklidischen Algorithmus zu gegebenem öffentlichen Schlüssel den zugehörigen privaten Schlüssel effizient berechnen, wie in der Schlüsselerzeugung.
Für die Beziehung

          F
          A
          C
          T
          O
          R
          I
          N
          G

          ≤

            p

          R
          S
          A

            P

              ∗

    {\displaystyle \mathrm {FACTORING} \leq _{p}\mathrm {RSAP^{*}} }

 ist schon lange ein probabilistischer Polynomialzeitalgorithmus bekannt. Vor kurzem wurde gezeigt, dass sich diese Reduktion im balancierten RSA (d. h.

        p

    {\displaystyle p}

 und

        q

    {\displaystyle q}

 haben gleiche Bitlänge) auch deterministisch durchführen lässt. Der Beweis verwendet das Coppersmith-Verfahren zur Bestimmung von Nullstellen eines irreduziblen bivariaten Polynoms mit ganzzahligen Koeffizienten, welches sich auf eine Gitterbasenreduktion zurückführen lässt.
Da alle gängigen Implementierungen balanciertes RSA verwenden, ist in der Praxis das Brechen des geheimen Schlüssels nur mit der Kenntnis des öffentlichen Schlüssels genau so schwer wie das Faktorisieren von

        N

    {\displaystyle N}

. Wegen

          R
          S
          A
          P

          ≤

            p

          F
          A
          C
          T
          O
          R
          I
          N
          G

    {\displaystyle \mathrm {RSAP} \leq _{p}\mathrm {FACTORING} }

 ist im Fall der zusätzlichen Kenntnis eines Geheimtexts die Schwierigkeit des Faktorisierungsproblems von zentralem Interesse.

### Schwierigkeit des Faktorisierungsproblems

Man möchte

        N
        =
        p
        q

    {\displaystyle N=pq}

 für sehr große Primzahlen

        p

    {\displaystyle p}

 und

        q

    {\displaystyle q}

 faktorisieren. Diese Primfaktorzerlegung ist für große Zahlen mit den heute bekannten Verfahren praktisch nicht durchführbar. Es ist aber nicht bewiesen, dass es sich bei der Primfaktorzerlegung um ein prinzipiell schwieriges Problem handelt.
Mit dem Quadratischen Sieb wurde 1994 die Zahl RSA-129 mit 129 Dezimalstellen in 8 Monaten von ca. 600 Freiwilligen faktorisiert. Mit der Methode des Zahlkörpersiebs wurde im Jahr 2005 von Wissenschaftlern der Friedrich-Wilhelms-Universität Bonn die im Rahmen der RSA Factoring Challenge von RSA Laboratories vorgegebene 200-stellige Dezimalzahl RSA-200 in ihre zwei großen Primfaktoren zerlegt. Die ersten RSA-Zahlen bis RSA-500 wurden entsprechend der Anzahl der Dezimalstellen benannt, weitere RSA-Zahlen nach der Anzahl der Binärstellen. Die Faktorisierung begann Ende 2003 und dauerte bis Mai 2005. Unter anderem kam ein Rechnerverbund von 80 handelsüblichen Rechnern an der Universität Bonn zum Einsatz. Im November 2005 zahlten RSA Laboratories für die Faktorisierung von RSA-640, einer Zahl mit 640 Bits bzw. 193 Dezimalstellen, eine Prämie von 20.000 US-Dollar. Obwohl mittlerweile für das Faktorisieren der RSA-Challenge-Zahlen keine Prämien mehr gezahlt werden, wurde im Dezember 2009 die Zahl RSA-768 faktorisiert.
Für die Faktorisierung von RSA-1024 (309 Dezimalstellen) oder gar RSA-2048 (617 Dezimalstellen) waren 100.000 $ bzw. 200.000 $ ausgelobt; die RSA Laboratories haben im Mai 2007 die RSA Factoring Challenge beendet, nachdem die o. g. Wissenschaftler der Universität Bonn im selben Monat eine 1039-Bit Mersennezahl (312 Dezimalstellen) faktorisiert hatten. Aufgrund der ungleichen Stellenzahl der Faktoren war das aber wesentlich leichter, als eine RSA-Zahl gleicher Länge zu faktorisieren. Die wachsende Rechenleistung moderner Computer stellt für die kurzfristige Sicherheit von RSA im Wesentlichen kein Problem dar, zumal diese Entwicklung vorhersehbar ist: Der Nutzer kann bei der Erzeugung seines Schlüssels darauf achten, dass der während der Dauer der beabsichtigten Verwendung nicht faktorisiert werden kann. Nicht vorhersehbare Entwicklungen wie die Entdeckung deutlich schnellerer Algorithmen oder gar Schaffung eines leistungsfähigen Quantencomputers, der die Faktorisierung von Zahlen durch Verwendung des Shor-Algorithmus effizient durchführen könnte, bergen zumindest für die mittel- und langfristige Sicherheit der verschlüsselten Daten gewisse Risiken.
Zum konkreten Sicherheitsniveau bestimmter Schlüssellängen gibt es unterschiedliche Aussagen. Laut Bundesnetzagentur sind für RSA-basierte Signaturen bis Ende 2020 Schlüssel mit einer Mindestlänge von 1976 Bit geeignet (Empfehlung 2048 Bit). Für Signaturverfahren nach den Anforderungen aus § 17 Abs. 1 bis 3 SigG, „für die die besten bekannten Angriffe auf dem Problem der Faktorisierung großer Zahlen oder auf dem Problem der Berechnung diskreter Logarithmen in endlichen Körpern beruhen (RSA und DSA), werden Schlüssellängen von mindestens 3 000 Bit verpflichtend werden“, um perspektivisch mindestens ein Sicherheitsniveau von 120 Bit zu etablieren.

### Schwierigkeit des RSA-Problems

In einigen Spezialfällen kann man das RSA-Verfahren brechen, ohne das Faktorisierungsproblem gelöst zu haben. Der Angriff von Wiener bei balanciertem RSA löst das RSA-Schlüsselproblem effizient unter der Annahme, dass der private Schlüssel nur eine geringe Bitlänge aufweist, genauer

        d
        <

              1
              3

            N

              4

    {\displaystyle d<{\tfrac {1}{3}}{\sqrt[{4}]{N}}}

. Wiener verwendete dabei die Tatsache, dass unter der Abschätzung für

        d

    {\displaystyle d}

 der Bruch

              k
              d

    {\displaystyle {\tfrac {k}{d}}}

 (für eine ganze Zahl

        k

    {\displaystyle k}

) in der Kettenbruchentwicklung von

              e
              N

    {\displaystyle {\tfrac {e}{N}}}

 auftaucht. Die Schranke wurde mit Mitteln der Gitterbasenreduktion auf

        d
        <

          N

            0,292

    {\displaystyle d<N^{0{,}292}}

 verbessert.
Auch das RSA-Problem kann unter einigen Annahmen effizient ohne Faktorisieren gelöst werden. Der Angriff von Håstad ermittelt einen Klartext, der mit kleinem Verschlüsselungsexponenten (etwa

        e
        =
        3

    {\displaystyle e=3}

) für mehrere Empfänger vor dem Verschlüsseln speziell aufbereitet wurde, etwa wenn die Nummer des Empfängers in den Klartext codiert wurde. Dieser Angriff verwendet die Coppersmith-Methode, um kleine Nullstellen eines Polynoms in einer Unbestimmten zu berechnen, welche wiederum auf Gitterbasenreduktion beruht.

### Angriffe gegen das unmodifizierte RSA-Verfahren („Textbook-RSA“)

RSA ist in der oben beschriebenen Version, die auch als „Textbook-RSA“ bekannt ist, weder als Verschlüsselungs- noch als Signaturverfahren geeignet, da es in beiden Fällen auf gravierende Weise unsicher ist und als Signaturverfahren auch keine langen Nachrichten signieren kann.
Die RSA-Verschlüsselung ist deterministisch. Das erlaubt es einem Angreifer, einen Klartext zu raten, ihn mit dem öffentlichen Schlüssel zu verschlüsseln und dann mit einem Chiffrat zu vergleichen. Dies kann insbesondere bei sehr kurzen Nachrichten wie “Ja” und „Nein“ sehr praktikabel und verheerend sein. Hieraus folgt, dass unmodifiziertes RSA nicht IND-CPA-sicher ist, heute eine absolute Minimalanforderung an Verschlüsselungsverfahren.
Wenn der Klartext

        m

    {\displaystyle m}

 und der Verschlüsselungsexponent

        e

    {\displaystyle e}

 so klein sind, dass sogar

        c
        =

          m

            e

        <
        N

    {\displaystyle c=m^{e}<N}

 ist, dann kann ein Angreifer die

        e

    {\displaystyle e}

-te Wurzel aus

        c

    {\displaystyle c}

 ziehen und das Chiffrat auf diese Weise entschlüsseln. Wurzelziehen ist nur modulo einer großen Zahl schwierig, aber in diesem Fall kann

        c

    {\displaystyle c}

 als ganze Zahl betrachtet werden.
Wenn dieselbe Nachricht

        m

    {\displaystyle m}

 zu mehreren Empfängern geschickt wird, die zwar alle unterschiedliche (und teilerfremde) Moduli

          N

            i

    {\displaystyle N_{i}}

 benutzen, aber als öffentlichen Schlüssel den gleichen Exponenten

        e

    {\displaystyle e}

, dann kann aus

        e

    {\displaystyle e}

 Nachrichten

          m

            e

            mod

              N

            1

        ,
        …
        ,

          m

            e

            mod

              N

            l

    {\displaystyle m^{e}{\bmod {N}}_{1},\ldots ,m^{e}{\bmod {N}}_{l}}

 mit dem Chinesischen Restsatz

          m

            e

          mod

            ∏

          N

            i

    {\displaystyle m^{e}{\bmod {\prod }}N_{i}}

 berechnet werden. Weil

          m

            e

        <
        ∏

          N

            i

    {\displaystyle m^{e}<\prod N_{i}}

 (nach Voraussetzung ist

        m
        <

          N

            i

    {\displaystyle m<N_{i}}

 für alle

        i

    {\displaystyle i}

), kann diese Zahl wieder als in den ganzen Zahlen liegend aufgefasst werden und Wurzelziehen ist dort einfach. Dieser Angriff wird nach seinem Entdecker Johan Håstad als „Håstads Angriff“ bezeichnet.
Da die RSA-Funktion

        x
        ↦

          x

            d

          mod

            N

    {\displaystyle x\mapsto x^{d}{\bmod {N}}}

 multiplikativ ist (d. h.

        (
        x
        y

          )

            d

        =

          x

            d

          y

            d

          mod

            N

    {\displaystyle (xy)^{d}=x^{d}y^{d}{\bmod {N}}}

 gilt), kann man aus jedem Chiffrat

          m

            e

    {\displaystyle m^{e}}

 ein weiteres gültiges Chiffrat

          m

            e

          r

            e

        =
        (
        m
        r

          )

            e

    {\displaystyle m^{e}r^{e}=(mr)^{e}}

 erzeugen. Wenn man den Besitzer des zugehörigen geheimen Schlüssels davon überzeugen kann, diese Zahl zu entschlüsseln oder zu signieren, kann man aus dem Ergebnis

        m
        r

    {\displaystyle mr}

 leicht

        m

    {\displaystyle m}

 gewinnen.
Dieselbe Eigenschaft erlaubt auch einen Angriff auf das Signaturverfahren. Aus bekannten Klartext-Signaturpaaren

          s

            1

        =

          m

            1

            d

        ,
        …
        ,

          s

            k

        =

          m

            k

            d

    {\displaystyle s_{1}=m_{1}^{d},\ldots ,s_{k}=m_{k}^{d}}

 lassen sich weitere gültige Signaturen

        s
        =
        ∏

          s

            i

          mod

            N

    {\displaystyle s=\prod s_{i}{\bmod {N}}}

 zu Nachrichten

        m
        =
        ∏

          m

            i

          mod

            N

    {\displaystyle m=\prod m_{i}{\bmod {N}}}

berechnen.

### Padding

Um solche Angriffe zu verhindern, werden bei RSA-Verschlüsselung und RSA-Signatur sogenannte Padding-Verfahren eingesetzt. Standards für Padding-Verfahren für RSA werden z. B. in PKCS#1 oder ISO 9796 definiert. Diese nutzen aus, dass die Länge des Klartextes bzw. Hash-Wertes deutlich kleiner als die Länge von

        N

    {\displaystyle N}

 ist, und fügen dem Klartext bzw. dem Hash-Wert vor der Verschlüsselung oder Signatur eine Zeichenfolge R mit vorgegebener Struktur an, die unter mehreren möglichen zufällig gewählt wird und dadurch das Chiffrat randomisiert. Es wird also die RSA-Funktion nicht auf die Nachricht

        M

    {\displaystyle M}

 oder auf den Hash-Wert

        h
        (
        M
        )

    {\displaystyle h(M)}

 angewendet, sondern auf den Klartext (bzw. seinem Hashwert) mit angehängtem

        R

    {\displaystyle R}

. In der Regel enthält

        R

    {\displaystyle R}

 eine Angabe über die Länge der Nachricht oder des Hash-Wertes oder eine eindeutige Zeichenfolge, die den Beginn von

        R

    {\displaystyle R}

 kennzeichnet. Dies erleichtert nicht nur die Dekodierung, sondern erschwert auch Angriffe. Padding-Verfahren können für die Berechnung von

        R

    {\displaystyle R}

 auch Zufallszahlen und Hashfunktionen verwenden.
Einige moderne Paddingverfahren – beispielsweise das Optimal Asymmetric Encryption Padding (OAEP) oder das Probabilistic Signature Scheme (PSS) – verwenden kryptographische Hashfunktionen, um den Klartext vor der Verschlüsselung weiter zu randomisieren, und sind unter idealisierenden Annahmen an die verwendete Hashfunktion beweisbar sicher unter der RSA-Annahme.

### Chosen-Ciphertext-Angriff

Daniel Bleichenbacher stellte 1998 einen Angriff auf die in PKCS#1 v1 spezifizierte RSA-Verschlüsselung vor. Dabei nutzte er aus, dass PKCS#1 v1 ein Nachrichtenformat vorgibt und einige Implementierungen nach dem Entschlüsseln Fehlermeldungen ausgeben, falls dieses Format nicht eingehalten wurde. Um den Angriff gegen ein Chiffrat

        c

    {\displaystyle c}

 durchzuführen, wählt man eine Zahl

        s

    {\displaystyle s}

 und berechnet daraus ein neues Chiffrat

          s

            e

        c

    {\displaystyle s^{e}c}

. Bei dem Nachrichtenformat sind die ersten zwei Bytes 00 und 02, wenn also keine Fehlermeldung kommt, weiß man, dass sowohl bei der ursprünglichen Nachricht

        m

    {\displaystyle m}

 als auch bei der neuen Nachricht

        s
        m

    {\displaystyle sm}

 die ersten beiden Bytes 00 02 sind. Mehrfache Wiederholung mit geschickt gewählten

        s

    {\displaystyle s}

 erlauben es, nach und nach den gesamten Klartext aufzudecken.
RSA nach PKCS#1 ab Version 2 ist immun gegen diesen Angriff.

### Sicherheit hybrider Verfahren

RSA wird aus Effizienzgründen in der Regel in Hybridverfahren mit symmetrischen Verfahren kombiniert. Zur hybriden Verschlüsselung wird zufällig ein Sitzungsschlüssel für ein symmetrisches Verschlüsselungsverfahren generiert, der dann per RSA verschlüsselt und zusammen mit der Nachricht übertragen wird. Zum Signieren wird nicht die gesamte Nachricht, sondern nur ein Hash-Wert signiert.
Für die Sicherheit von RSA sind Primzahlen mit mehreren hundert Dezimalstellen (mindestens 2048 Bit) erforderlich. Damit können symmetrische Schlüssel jeder üblichen Länge verschlüsselt werden. Gängige Verfahren zur symmetrischen Verschlüsselung basieren beispielsweise auf der Blockchiffre AES mit einer Schlüssellänge von 128, 192 oder maximal 256 Bit.
Eine sichere Hashfunktion wie SHA-2 erzeugt Hashwerte mit einer Länge von 224 bis 512 Bit. Damit lassen sich Signaturverfahren mittels RSA realisieren, die nur einen Signaturschritt benötigen.
Die Sicherheit des Gesamtsystems hängt sowohl im Fall der Verschlüsselung als auch der Signatur von der Sicherheit beider verwendeter Verfahren ab. Da bei RSA für ein ähnliches Sicherheitsniveau wie beim symmetrischen Verfahren deutlich längere Schlüssel nötig sind, wird die Sicherheit des Hybridverfahrens meistens von der Sicherheit des Public-Key-Verfahrens bestimmt.

## Vollständiges Beispiel

### Anmerkung

RSA direkt auf Texte anzuwenden, birgt erhebliche Risiken. RSA wird deshalb, anders als im Beispiel, in der Praxis praktisch nur in Kombination mit anderen Verfahren verwendet. (Siehe: Hybride Verschlüsselung und Abschnitt Angriffe gegen das unmodifizierte RSA-Verfahren.)
Um das Beispiel übersichtlich zu halten, wurden relativ kleine Primzahlen verwendet. Zur sicheren Verschlüsselung werden typischerweise mindestens 600-stellige

        N

    {\displaystyle N}

 empfohlen.

### Vorarbeiten

Die oben genannten Schritte sollen nun an einem vollständigen Beispiel erläutert werden. Um einen Text zu verschlüsseln, müssen zunächst Buchstaben in Zahlen umgewandelt werden. Dazu verwendet man in der Praxis zum Beispiel den ASCII-Code. Hier sei willkürlich die folgende Zuordnung gewählt:

Leerzeichen=00 A=01 B=02 C=03 usw.

Darüber hinaus sei angenommen, dass jeweils drei Zeichen zu einer Zahl zusammengefasst werden. Die Buchstabenfolge AXT wird also zu 012420. Die kleinste zu verschlüsselnde Zahl ist dann 000000 (drei Leerzeichen), die größte 262626 (ZZZ). Der Modul

        N
        =
        p
        ⋅
        q

    {\displaystyle N=p\cdot q}

 muss also größer als 262626 sein.

Klartext:   W  I  K   I  P  E   D  I  A
Kodierung: 23 09 11  09 16 05  04 09 01

### Schlüsselerzeugung

Zunächst werden geheim zwei Primzahlen gewählt, beispielsweise

        p
        =
        307

    {\displaystyle p=307}

 und

        q
        =
        859

    {\displaystyle q=859}

. Damit ergibt sich:

        N
        =
        p
        ⋅
        q
        =
        263713

    {\displaystyle N=p\cdot q=263713}

        φ
        (
        N
        )
        =
        (
        p
        −
        1
        )
        ⋅
        (
        q
        −
        1
        )
        =
        262548

    {\displaystyle \varphi (N)=(p-1)\cdot (q-1)=262548}

        e
        =
        1721

    {\displaystyle e=1721}

    (zufällig, teilerfremd zu

        φ
        (
        N
        )

    {\displaystyle \varphi (N)}

)

        d
        =
        1373

    {\displaystyle d=1373}

    (das multiplikative Inverse zu

        e

          (
          mod

          φ
          (
          N
          )
          )

    {\displaystyle e{\pmod {\varphi (N)}}}

 mit Hilfe des erweiterten euklidischen Algorithmus)
Öffentlicher Schlüssel:

        e
        =
        1721

    {\displaystyle e=1721}

  und

        N
        =
        263713

    {\displaystyle N=263713}

Privater Schlüssel:

        d
        =
        1373

    {\displaystyle d=1373}

  und

        N
        =
        263713

    {\displaystyle N=263713}

### Verschlüsselung

Cn = Kne mod N  für n=1,2,3(,...)
C1 = 2309111721 mod 263713 = 001715
C2 = 0916051721 mod 263713 = 184304
C3 = 0409011721 mod 263713 = 219983

### Entschlüsselung

Kn = Cnd mod N  für n=1,2,3(,...)
K1 = 0017151373 mod 263713 = 230911
K2 = 1843041373 mod 263713 = 091605
K3 = 2199831373 mod 263713 = 040901

### Signatur

Cn = Knd mod N
C1 = 2309111373 mod 263713 = 219611
C2 = 0916051373 mod 263713 = 121243
C3 = 0409011373 mod 263713 = 138570

### Verifikation

Kn = Cne mod N
K1 = 2196111721 mod 263713 = 230911
K2 = 1212431721 mod 263713 = 091605
K3 = 1385701721 mod 263713 = 040901

Die Berechnung der modularen Exponentiation kann durch binäre Exponentiation (Square-and-multiply) beschleunigt werden.

          7

            23

          mod

        143

        =

            (

                  (

                        (

                          7

                            2

                        )

                        2

                    ⋅
                    7

                  )

                  2

              ⋅
              7

            )

            2

        ⋅
        7

          mod

        143
        =
        2

    {\displaystyle 7^{23}\ {\bmod {\ }}143\ =\ \left(\left(\left(7^{2}\right)^{2}\cdot 7\right)^{2}\cdot 7\right)^{2}\cdot 7\ {\bmod {\ }}143=2}

Dabei wendet man nach jedem Rechenschritt auf die zu handhabenden Zahlen die Modulo-Operation „mod“ an, um die Zwischenergebnisse möglichst klein zu halten. Aus dem Klartext „7“ erhalten wir somit den Geheimtext „2“.

### Programmierung

Das folgende Programm in der Programmiersprache C++ zeigt die Implementierung des RSA-Verfahrens mit

        p
        =
        223

    {\displaystyle p=223}

,

        q
        =
        127

    {\displaystyle q=127}

 und

        e
        =
        121

    {\displaystyle e=121}

, was den privaten Schlüssel

        d
        =
        5317

    {\displaystyle d=5317}

 ergibt. Das Programm gibt den verschlüsselten und den entschlüsselten Text (in diesem Beispiel Werde Mitglied bei Wikipedia!) auf der Konsole aus.

## Anwendung

### Hybride Verfahren

RSA ist im Vergleich zu Verfahren wie 3DES und AES mindestens um den Faktor 100 langsamer. In der Praxis wird RSA daher meist nur zum Austausch eines Schlüssels für die symmetrische Verschlüsselung benutzt. Für die Verschlüsselung der Daten werden dann symmetrische Verfahren eingesetzt. Damit sind die Vorteile beider Systeme vereint: einfacher Schlüsselaustausch und effiziente Verschlüsselung.

### Anwendungsgebiete

Internet- und Telefonie-Infrastruktur: X.509-Zertifikate
Übertragungs-Protokolle: IPsec, TLS, SSH, WASTE
E-Mail-Verschlüsselung: OpenPGP, S/MIME
Authentifizierung französischer Telefonkarten
Kartenzahlung: EMV
RFID-Chip auf dem deutschen Reisepass
Electronic Banking: HBCI
