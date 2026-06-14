---
url: https://de.wikipedia.org/wiki/Hashfunktion
---

# Hashfunktion

## Überblick

Eine Hashfunktion oder Streuwertfunktion ist eine Abbildung, die eine große Eingabemenge, die Schlüssel, auf eine kleinere Zielmenge, die Hashwerte, abbildet. Eine Hashfunktion ist daher im Allgemeinen nicht injektiv. Die Eingabemenge kann Elemente unterschiedlicher Längen enthalten, die Elemente der Zielmenge haben dagegen meist eine feste Länge.
Der Name Hashfunktion stammt vom englischen Verb to hash, das sich mit „zerhacken“ übersetzen lässt. Der deutsche Name lautet Streuwertfunktion. Beide Namen deuten darauf hin, dass diese Funktionen normalerweise darauf angelegt sind, die Daten zu „verstreuen“ und zu „zerhacken“ (siehe auch Zerhacker in der Funktechnik). Speziell in der Informatik verwendet man auch den Begriff Hash-Algorithmus (englisch hash algorithm), da Hashfunktionen oftmals in Form eines Algorithmus spezifiziert werden, der die Berechnung der mathematischen Funktion beschreibt.
Die Hash- oder Streuwerte sind meist skalare Werte aus einer begrenzten Teilmenge der natürlichen Zahlen. Eine gute Hashfunktion liefert dabei für die Eingabedaten Werte derart, dass zwei unterschiedliche Eingaben auch zu unterschiedlichen Ausgabewerten führen.
Eine Kollision tritt dann auf, wenn unterschiedlichen Eingabedaten derselbe Hashwert zugeordnet wird. Da die Menge der möglichen Hashwerte meist kleiner ist als die der möglichen Eingaben, sind solche Kollisionen dann prinzipiell unvermeidlich (siehe Schubfachprinzip). Deshalb muss es Verfahren zur Kollisionserkennung geben. Eine gute Hashfunktion zeichnet sich dadurch aus, dass sie für die Eingaben, für die sie entworfen wurde, möglichst wenige Kollisionen erzeugt. Für bekannte und beschränkte Eingabemengen können auch perfekte (kollisionsfreie) Hashfunktionen gefunden werden.
In der Datenspeicherung kann ein Hashwert verwendet werden, um die Speicherstelle der angefragten Daten zu berechnen, z. B. in einer Hashtabelle. Bei Prüfsummen verwendet man Hashwerte, um Übertragungsfehler zu erkennen. Ein Hashwert wird deshalb auch als englisch Fingerprint bezeichnet, da er eine nahezu eindeutige Kennzeichnung einer größeren Datenmenge darstellt, so wie ein Fingerabdruck einen Menschen nahezu eindeutig identifiziert. In der Kryptologie werden spezielle kryptographische Hashfunktionen verwendet, bei denen zusätzlich gefordert wird, dass es praktisch unmöglich ist, Kollisionen absichtlich zu finden.

## Definition

Eine Abbildung

        h
        :
        K
        →
        S

    {\displaystyle h\colon K\rightarrow S}

 heißt Hashfunktion, wenn

          |

        K

          |

        ≥

          |

        S

          |

    {\displaystyle |K|\geq \ |S|}

 gilt. Insbesondere liefert

        h

    {\displaystyle h}

 eine Hashtabelle der Größe

          |

        S

          |

    {\displaystyle |S|}

. Die Menge

        K

    {\displaystyle K}

 repräsentiert die Daten, die gehasht werden sollen, und wird auch die Menge der Schlüssel genannt; die Menge

        S

    {\displaystyle S}

 ist die Menge der möglichen Hashwerte. Typischerweise wird die Menge der Hashwerte als Anfangsstück der natürlichen Zahlen gewählt:

        S
        ⊆

          {

            0
            ,
            …
            ,
            m
            −
            1

          }

    {\displaystyle S\subseteq \left\{0,\dotsc ,m-1\right\}}

. Diese Menge heißt dann auch Adressraum.
Typischerweise wird in der Praxis immer nur eine kleine Teilmenge der Schlüssel

          K
          ′

        ⊆

        K

    {\displaystyle K'{}\subseteq {}K}

 mit

        h

    {\displaystyle h}

 abgebildet. Die Menge

          S
          ′

        :=
        {
        h
        (
        k
        )

          |

        k
        ∈

          K
          ′

        }

    {\displaystyle S':=\{h(k)|k\in K'\}}

 sind dann die tatsächlich genutzten Hashwerte.
Das Verhältnis

        β
        =

              |

                S
                ′

              |

              |
              S
              |

    {\displaystyle \beta ={\frac {\left|S'\right|}{\left|S\right|}}}

 liefert den Belegungsfaktor.
Der Fall

        k
        ≠

          k
          ′

        ∧
        h
        (
        k
        )
        =
        h
        (

          k
          ′

        )

    {\displaystyle k\not =k'\land h(k)=h(k')}

 wird als Kollision bezeichnet. Eine injektive Hashfunktion heißt perfekt, u. a. weil sie keine Kollisionen erzeugt.

## Kriterien

Geringe Wahrscheinlichkeit von Kollisionen der Hashwerte für den Eingabewertebereich, also möglichst eine Gleichverteilung der Hashwerte auf die erwarteten Eingabewerte.
Surjektivität – Kein Ergebniswert (Hashwert) soll unmöglich sein, jedes Ergebnis (jeder Hashwert im definierten Wertebereich) soll tatsächlich vorkommen können.
Effizienz – Die Funktion muss schnell berechenbar sein, ohne großen Speicherverbrauch auskommen (der Speicherbedarf des Hashwertes soll deutlich kleiner sein als jener des Schlüssels / Eingabewertes) und sollte die Quelldaten (Eingabewerte) möglichst nur einmal lesen müssen.
Folgende Kriterien spielen je nach Anwendung eine unterschiedliche Rolle:

falls die Hashfunktion einen sortierten Zugriff in der Hashtabelle einer Datenbank erlauben soll: ordnungserhaltend
bei kryptologischen Hashfunktionen: Chaos oder Lawineneffekt – Die Hashfunktion soll eine gute Diffusion besitzen; ähnliche Quellelemente (Eingabewerte) sollen zu völlig verschiedenen Hashwerten führen. Im Idealfall verändert das Umkippen eines Bits in der Eingabe durchschnittlich die Hälfte aller Bits im resultierenden Hashwert.
bei kryptologischen Hashfunktionen: Konfusion – Vom Hashwert sollen keine Rückschlüsse auf den Eingabewert gemacht werden können.
bei kryptologischen Hashfunktionen: Unumkehrbarkeit – Es soll kein praktisches Verfahren möglich sein, das aus einem Hashwert den Eingabewert bestimmt.

## Anwendungen

Hashfunktionen werden typischerweise angewendet, um

einem komplexen Objekt eine Speicheradresse zuzuweisen. Zum Beispiel könnte „Max Mustermann“ im Ordner M abgelegt werden, dem ersten Buchstaben des Nachnamens.
eine kurze Prüfsumme zu dem Objekt zu berechnen. Beispiel sind die Prüfsumme einer ISBN und die zyklische Redundanzprüfung zur Erkennung von Übertragungsfehlern von Dateien.
einen Inhalt nahezu eindeutig, aber mit wenig Speicherplatz zu identifizieren, ohne etwas über den Inhalt zu verraten, zum Beispiel in der Kryptographie.
Je nach Anwendung hat man unterschiedliche Anforderungen an die Funktion. Gruppiert man beispielsweise eine Adresskartei nach dem ersten Buchstaben des Nachnamens, so spart man sich offensichtlich bei der Suche viel Zeit, denn man braucht nur einen von 26 Teilen zu durchsuchen. Diese Hashfunktion ist für den Menschen sehr praktisch, da sie sehr einfach zu berechnen ist, jedoch würde ein Computerprogramm andere Verfahren verwenden, um ein Adressbuch zu organisieren. Für das Programm ist es nämlich wichtig, möglichst wenige Kollisionen zu haben. Es gibt aber offenbar viele Namen, die mit demselben Anfangsbuchstaben beginnen, und sie kommen ungleichmäßig oft vor. Legt man also beispielsweise Personalakten nach diesem Prinzip ab, so hat man oftmals viele Akten im Ordner mit dem Buchstaben S, während der Ordner Q leer bleibt.
Die einstellige Quersumme ist eine sehr einfache Hashfunktion. Sie ordnet einer beliebigen Zahl eine einstellige Zahl zu, so wird beispielsweise 25 auf 2 + 5 = 7 abgebildet. Als Prüfsumme ist diese Quersumme aber nicht gut geeignet, da die Vertauschung von Ziffern – ein typischer Fall beim Abtippen von langen Zahlen – nicht erkannt wird. So hat auch die Zahl 52 dieselbe Quersumme 5 + 2 = 7. Prüfsummen wie bei der ISBN eines Buches oder die CRC-32-Prüfsumme einer Datei, z. B. beim Prüfen einer aus dem Internet heruntergeladenen Datei auf Übertragungsfehler, eignen sich besser, derartige Fehler zu erkennen.
Bei der Identifikation von Inhalten mit kryptographischen Hashfunktionen ist es nicht nur wichtig, dass sich der gesamte Hashwert mit allen Bits bei jeder kleinen Modifikation scheinbar zufällig ändert und dass es fast unmöglich ist, einen zweiten Inhalt mit demselben Hashwert zu erzeugen, um einen Komplettaustausch des Inhaltes zu vermeiden. Ebenso wichtig ist es, dass der Inhalt nicht aus dem Hashwert rekonstruiert werden kann. Hat man zwei Dokumente ausgetauscht und möchte beispielsweise am Telefon die erfolgreiche Übertragung überprüfen, so reicht es, am Telefon die Korrektheit des Hashwertes zu überprüfen. Wird das Gespräch abgehört, so wird dabei nichts über den Inhalt der Nachricht verraten, selbst falls Teile des Inhalts bereits bekannt sein sollten.

### Datenbanken

Datenbankmanagementsysteme verwenden Hashfunktionen, um Daten in großen Datenbeständen mittels Hashtabellen zu suchen. Darüber wird ein Datenbankindex realisiert.
Mittels Hashfunktionen kann zudem die Fragmentierung von Datensätzen realisiert werden. Dabei wird die Hashfunktion auf den Primärschlüssel des betreffenden Objektes angewandt. Das Ergebnis referenziert dann seinen Speicherort.
Auch für vergleichsweise kleine Datenmengen werden Hashfunktionen benutzt, beispielsweise in Kompressionsalgorithmen wie LZW.

### Blockchain

Darüber hinaus spielen Hashfunktionen eine zentrale Rolle in der Blockchain-Technologie. In Blockchains wie Bitcoin oder Ethereum werden kryptographische Hashfunktionen genutzt, um Transaktionen und Blöcke miteinander zu verknüpfen. Jeder Block enthält den Hash des vorherigen Blocks, was die Integrität der gesamten Kette sicherstellt. Bereits eine minimale Änderung an einem Block würde den Hashwert verändern und damit die Verknüpfung zwischen zwei Blöcken ungültig machen. So wird sichergestellt, dass einmal gespeicherte Daten nicht nachträglich manipuliert werden können, ohne dass dies auffällt.

### Prüfsummen

Prüfsummen sind ein einfaches Mittel, um die Plausibilität zur Erkennung von Veränderungen an übertragenen Daten zu erhöhen. Nur die Teilmenge der Datenvarianten, die bei Berechnung der Prüfsumme das gleiche Ergebnis wie das der Original-Daten erzeugen, kann noch als Verfälschung unerkannt bleiben. Mit mehreren verschiedenen passend erzeugten Prüfsummen kann die Wahrscheinlichkeit einer Kollision stark reduziert werden.
Ein Fehler ist immer feststellbar, wenn die berechnete Prüfsumme der empfangenen Daten sich von der übertragenen Prüfsumme, also der der Originaldaten, unterscheidet. Falls ein Fehler festgestellt wird, kann die Verfälschung auch ausschließlich in der Prüfsumme enthalten sein. Die Eignung verschiedener Hashfunktionen zur Prüfsummenberechnung hängt von deren Kollisionswahrscheinlichkeit ab.
Wenn die Prüfsumme vor gezielten Manipulationen der Daten schützen soll, wird eine kryptographische Hashfunktion verwendet, da hier nur mit sehr hohem Rechenaufwand eine Kollision gefunden werden kann.

#### Beispiele

Hashwerte haben unter anderem bei P2P-Anwendungen aus verschiedenen Gründen eine wichtige Aufgabe. Die Hashwerte werden hier sowohl zum Suchen und Identifizieren von Dateien als auch zum Erkennen und Prüfen von übertragenen Dateifragmenten verwendet. So lassen sich große Dateien zuverlässig in kleinen Segmenten austauschen.
Zur Anwendung in P2P-Netzen kommen vor allem gestufte Hashfunktionen, bei denen für kleinere Teile einer Datei der Hashwert und dann aus diesen Werten ein Gesamtwert berechnet wird. Bei den Netzwerken G2 und Direct Connect sind dies zum Beispiel Tiger-Tree-Hash-Funktionen.
Das Auffinden von Dateien anhand des Hashwertes ihres Inhaltes ist zumindest in den USA als Softwarepatent geschützt. Der Inhaber verfolgt Programme und Firmen, die auf Basis dieses Systems die Suche von Dateien ermöglichen. Sogar Firmen, die im Auftrag der Recording Industry Association of America oder der Motion Picture Association Anbieter von unlizenzierten Inhalten ermitteln wollen, sind betroffen.
Bei der Programmierung von Internet-Anwendungen werden Hashfunktionen zum Erzeugen von Session-IDs genutzt, indem unter Verwendung von wechselnden Zustandswerten (wie Zeit, IP-Adresse) ein Hashwert berechnet wird.

### Kryptologie

Kryptographische Hashfunktionen sind kollisionsresistente Einwegfunktionen. Diese Eigenschaften sind notwendig für kryptographische Anwendungszwecke wie beispielsweise die Sicherstellung der Integrität von Daten. Weitere Anwendungsbeispiele sind digitale Signaturverfahren oder Schlüsselableitung. Bei letzterem wird aus einem Passwort ein Hashwert erzeugt, der entweder der sicheren, unumkehrbaren Speicherung von Passwörtern dient oder als Schlüssel für ein Verschlüsselungsverfahren verwendet wird.

## Hash-Algorithmen

In der Praxis können oft heuristische Techniken angewendet werden, um eine gute Hashfunktion zu erstellen. Qualitative Informationen über die Verteilung der Schlüssel können in diesem Entwurfsprozess nützlich sein. Generell sollte eine Hashfunktion von jedem einzelnen Bit des Schlüssels abhängen, so dass sich zwei Schlüssel, die sich nur in einem Bit oder einer Bitfolge unterscheiden, unabhängig davon, ob die Folge am Anfang, am Ende oder in der Mitte des Schlüssels oder vorhanden ist, den gesamten Schlüssel-Hash auf verschiedene Werte abbildet. Daher ist eine Hashfunktion, die einfach einen Teil eines Schlüssels extrahiert, nicht geeignet. Wenn zwei Schlüssel einfach Permutationen voneinander sind, z. B. 256 und 625, sollten sie ebenfalls in unterschiedliche Werte gehasht werden.
Heuristische Methoden sind Hashing durch Division und Hashing durch Multiplikation.

### Hashing durch Division

Bei dieser Methode wird ein Schlüssel einem Hashwert zugeordnet, indem der Rest des Schlüssels bei Division durch die Größe der Hashtabelle berechnet wird. Das heißt, die Hashfunktion

        h

    {\displaystyle h}

 ist definiert als

        h
        (

          k
          e
          y

        )
        =

          k
          e
          y

          m
          o
          d

          t
          a
          b
          l
          e
          s
          i
          z
          e

    {\displaystyle h(\mathrm {key} )=\mathrm {key} \ \mathrm {mod} \ \mathrm {tablesize} }

Weil nur eine einzige Divisionsoperation erforderlich ist, ist das Hashing durch Division ziemlich schnell. Wenn die Divisionsmethode verwendet wird, sollten bestimmte Werte für die Größe der Hashtabelle vermieden werden. Sie sollte keine Potenz einer Zahl sein. Wenn

          t
          a
          b
          l
          e
          s
          i
          z
          e

        =

          r

            p

    {\displaystyle \mathrm {tablesize} =r^{p}}

 ist, dann ist der Hashwert

        h
        (

          k
          e
          y

        )

    {\displaystyle h(\mathrm {key} )}

 immer gleich den letzten Bits von

          k
          e
          y

    {\displaystyle \mathrm {key} }

. Wenn wir nicht wissen, dass alle

        p

    {\displaystyle p}

-Bit-Muster niedriger Ordnung gleich wahrscheinlich sind, ist es besser, die Hashfunktion so zu gestalten, dass sie von allen Bits des Schlüssels abhängt. Es hat sich gezeigt, dass die besten Ergebnisse mit der Divisionsmethode erzielt werden, wenn die Größe der Hashtabelle eine Primzahl ist. Eine Primzahl, die nicht zu nah bei einer Zweierpotenz liegt, ist oft eine gute Wahl für die Größe der Hashtabelle.

### Hashing durch Multiplikation

Bei dieser Methode wird der Schlüssel

        k

    {\displaystyle k}

 mit einer konstanten reellen Zahl

        c

    {\displaystyle c}

 im Bereich

        0
        <
        c
        <
        1

    {\displaystyle 0<c<1}

 multipliziert und die Nachkommastellen von

        k
        ⋅
        c

    {\displaystyle k\cdot c}

 genommen. Dann wird dieser Wert mit der Größe der Hashtabelle multipliziert und mithilfe der Abrundungsfunktion der ganzzahlige Teil davon berechnet. Die Hashfunktion

        h

    {\displaystyle h}

 kann dargestellt werden als

        h
        (

          k
          e
          y

        )
        =

          f
          l
          o
          o
          r

        (

          t
          a
          b
          l
          e
          s
          i
          z
          e

        ⋅
        (

          k
          e
          y

        ⋅
        c

          m
          o
          d

        1
        )
        )

    {\displaystyle h(\mathrm {key} )=\mathrm {floor} (\mathrm {tablesize} \cdot (\mathrm {key} \cdot c\ \mathrm {mod} \ 1))}

Ein Vorteil besteht darin, dass die Größe der Hashtabelle nicht kritisch ist. Sie ist typischerweise eine Zweierpotenz, weil die Hashfunktion dann schneller implementiert werden kann. Obwohl diese Methode mit jeder reellen Zahl

        c

    {\displaystyle c}

 funktioniert, funktioniert sie mit einigen Werten besser als mit anderen.

### Bekannte Hashfunktionen

Weitere bekannte Hashfunktionen sind zum Beispiel

Brent-Hashing
Doppel-Hashing
Mittquadratmethode
Zerlegungsmethode
Ziffernanalyse

#### Gitterbasierte Hashfunktionen

Ajtai
Micciancio
Peikert-Rosen
Schnelle Fourier-Transformation (FFT-Hashfunktion)
LASH

#### Prüfsummen

Fletcher’s Checksum
Adler-32
CRC (Zyklische Redundanzprüfung)
Parität
Quersumme

#### Weitere nicht-kryptographische Hashfunktionen

#### Kryptographische Hashfunktionen

MD2, MD4, MD5
Secure Hash Algorithm (SHA)
RIPEMD-160
Tiger
HAVAL
Whirlpool

##### Passwort-Hashfunktionen

LM-Hash
PBKDF2
Bcrypt
Scrypt
Argon2
