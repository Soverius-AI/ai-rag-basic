---
url: https://de.wikipedia.org/wiki/Plankalk%C3%BCl
---

# Plankalkül

## Überblick

Der Plankalkül ist eine von Konrad Zuse in den Jahren 1942 bis 1945 entwickelte Programmiersprache und war die erste höhere Programmiersprache der Welt.

## Beschreibung

Der Plankalkül umfasst unter anderem Zuweisungen, Funktionsaufrufe, bedingte Anweisungen, Schleifen, Gleitkommaarithmetik, Felder, zusammengesetzte Datentypen und andere besondere Merkmale wie zielgerichtete Ausführung.
Die Notation der Programme erfolgte ursprünglich zweidimensional: Für Indizes und Typangaben waren gesonderte Zeilen vorgesehen. Für eine spätere Implementierung in den 1990er Jahren wurde eine lineare Umschrift entwickelt.
Das folgende Beispiel zeigt ein Programm (in linearer Umschrift), welches die Berechnung des Maximums dreier Variablen in der Funktion max3 implementiert:

P1 max3 (V0[:8.0],V1[:8.0],V2[:8.0]) → R0[:8.0]
max(V0[:8.0],V1[:8.0]) → Z1[:8.0]
max(Z1[:8.0],V2[:8.0]) → R0[:8.0]
END
P2 max (V0[:8.0],V1[:8.0]) → R0[:8.0]
V0[:8.0] → Z1[:8.0]
(Z1[:8.0] < V1[:8.0]) → V1[:8.0] → Z1[:8.0]
Z1[:8.0] → R0[:8.0]
END

## Geschichte

Konrad Zuse nutzte bei der Entwicklung des Plankalküls die Arbeiten zum Lambda-Kalkül von Alonzo Church und Stephen Kleene aus den 1930er Jahren. Er wollte die Sprache auf einem Nachfolgemodell seiner Z3-Rechenanlage einsetzen, aber durch die Ereignisse des Zweiten Weltkriegs kam es nicht mehr dazu.
Literaturhinweise finden sich zwar schon Ende der 1940er Jahre, aber erst 1972 wurde die Sprache erstmals komplett veröffentlicht. Im Rahmen einer Dissertation wurde der Plankalkül 1975 von J. Hohmann beschrieben und implementiert. Ende der 1990er Jahre folgten unabhängige alternative Implementierungen (1998 und zwei Jahre später eine weitere an der Freien Universität Berlin), inklusive eines Syntax-Editors.
Dem Plankalkül kommt im Bereich der Programmiersprachen vor allem historische Bedeutung zu. Praktisch verwendet wurde die Sprache nicht.
