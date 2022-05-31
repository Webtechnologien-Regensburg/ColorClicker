# Color Clicker

Dieses Beispiel demonstriert auf Basis eine einfachen Spiels den grundlegenden Umgang mit HTML, CSS und JavaScript zur Entwicklung interaktiver Webanwendungen. Spieler\*innen sehen in jeder Spielrunde 9 gleichgroße  Quadrate. Eines der Quadrate weicht farblich leicht von den anderen ab. Ziel der Spieler\*innen ist das korrekte Identifizieren dieses Quadrats. Für jede korrekte Schätzung erhalten die Spieler\*innen einen Punkt. Bei der Auswahl eines falschen Quadrats werden die Punkte zurückgesetzt und ein neues Spiel beginnt. Jede Zufallsfarbe wird durch einen numerischen Wert zwischen `0` und `255` für die Rot-, Grün-, und Blau-Kanäle definiert. Die Farbabweichung wird als numerischer Wert angegeben, um den sich die eine Farbe in allen drei Kanälen von der ursprünglichen Farbe unterscheidet. Eine Farbabweichung von _20_ macht aus der RGB-Farbe `255,255,255` (weiß) die neue Farbe `245,245,245`. Farbabweichungen werden daher grundsätzlich dunkler wahrgenommen, als die ursprünglichen Farben.

## HTML & CSS

Die Anwendung besteht aus einer einzelne HTML-Datei. Der wichtigste Bereich der Anwendung wird durch das `div`-Element mit der Klasse `elements` markiert. Hier werden in jeder Runde die neun zufällig eingefärbten Quadrate angezeigt. Am unteren Bildschirmrand werden die erreichten Punkte der aktuellen Runde sowie der _Highscore_ für die laufende Sitzung angezeigt. Die Gestaltung der Seite erfolgt über die verknüpfte CSS-Datei. Dort werden neben dem Import einer spezifischen Schriftart auch eine Reihe von Farb-Variablen zur Verwendung innerhalb der notierten CSS-Regeln definiert. Die zufälligen Quadrate werden später als `span`-Elemente mit der Klasse `element` erstellt. Die Darstellung erfolgt auf Basis der entsprechenden CSS-Regel. Zur Laufzeit wird im JavaScript-Code dabei die in der Regel angegebene Hintergrundfarbe dynamisch überschrieben.

## JavaScript

Der Quellcode der Anwendung ist auf mehrere Dateien verteilt. Inhaltich zusammenhängende Bereiche werden in einzelnen Dateien gebündelt. Alle Dateien werden im HTML-Dokument eingebunden. Die Reihenfolge ist dabei (noch) entscheiden, da in der zuletzt verlinkten Datei `app.js` die eigentliche Spiellogik implementiert und dabei auf die Inhalte aus den übrigen Quellcode-Dateien zurückgegriffen wird. Variablen (und Klassen), die in den übrigen Dateien auf oberster Ebene definiert wurden, stehen grundsätzlich in allen im Anschluss interpretierten Dateien zur Verfügung.

### Config.js

An verschiedenen Stellen der Anwendungen werden bestimmte, fixe, Werte zur Steuerung des Spielablaufs verwerndet. Dazu gehören z.B. die initiale bzw. minimale Farbabweichung innerhalb des RGB-Raums oder die Anzahl der darzustellenden Farben. Diese Werte werden in einem Objekt gespeichert, das über eine globale Variable den anderen Anwendungsbestandteilen zugänglich gemacht wird. Über den Aufruf der `freeze`-Methode wird verhindert, dass die im Objekt gespeicherten Werte nachträglich verändert werden.

### Colors.js

In dieser Datei befindet sich eine Klasse `Color` mit der innerhalb des Spiels Farben im RGB-Raum repräsentiert und zufällig bestimmt werden können. Entsprechende Objekte verfügen über drei Eigenschaften, mit denen die Farbwerte der drei RGB-Kanäle abgebildet werden. Über eine Methode `asCSSString` wird auf Basis der im jeweiligen Objekt gespeicherten Werte ein CSS-kompatibler _String_ zur Beschreibung der Farbe generiert. Über die statische, d.h. an die Klasse bzw. den Prototypen gebundene, Methode `createRandomColor` kann eine zufällige Pastellfarbe erzeugt werden. Die ebenfalls statische Methode `createColorWithDeviation` ermöglicht das Erstellen einer Farbabweichung auf Basis einer bestehenden Farbe.


### Targets.js

Die hier implementierte Klasse `TargetContainer` repräsentiert den Bereich des _User Interface_, in dem die zufällig eingefärbten Quadrate angezeigt werden. Beim Erstellen des Objekts wird dem Konstruktor das bereits als JavaScript-Objekt selektiert HTML-Element übergeben, in dem die Quadrate später erscheinen sollen. Dabei handelt es sich um das `div`-Element mit der Klasse `elements`. Über die `update`-Methode lassen sich die vorhandenen Quadrate im Element durch eine als Parameter angegebene Anzahl neuer Zufallsquarate ersetzen. Dabei wird in einem weitern Parameter die gewünschte Abweichung des zufällig ausgewählten Zielquadrats angegeben. Über die Methode `setOnTargetClickedListener` kann eine Callback-Methode fesggelegt werden, die jedes Mal aufgerufen wird, wenn eines der Quadrate angeklickt wurde. Der Methode wird dabei ein Parameter vom Typ `boolean` übergeben, über den bestimmt werden kann, ob das korrekte Ziel für diese Runde angeklickt wurde.
