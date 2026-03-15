# Hide Wiki – Firefox

## Was macht dieses Plugin?

Dieses Plugin entfernt die Wikipedia- und Britannica-Infoboxen, die YouTube automatisch unter bestimmten Videos einblendet. Keine Tracking-Daten, keine Werbung, kein Quatsch – es blendet einfach nur diese Boxen aus.

---

## Installation

### Variante A: Schnell ausprobieren (temporär)

Diese Variante funktioniert sofort, muss aber nach jedem Firefox-Neustart wiederholt werden.

1. **Firefox öffnen**
2. In die Adressleiste eingeben:
   ```
   about:debugging#/runtime/this-firefox
   ```
   und Enter drücken
3. Auf **„Temporäres Add-on laden…"** klicken
4. Den Ordner `firefox/` öffnen und die Datei **`manifest.json`** auswählen
5. **Fertig!** – Geh auf YouTube und teste es

---

### Variante B: Dauerhaft installieren (empfohlen zum Verschenken)

Firefox erlaubt nur signierte Extensions. Die Signierung ist **kostenlos** über Mozilla.

---

#### Schritt 1: Mozilla-Konto erstellen (falls noch nicht vorhanden)

1. Gehe zu: **https://addons.mozilla.org**
2. Klicke oben rechts auf **„Anmelden"** (oder „Log in")
3. Erstelle ein kostenloses Mozilla-Konto oder melde dich an

---

#### Schritt 2: Zum Entwickler-Hub navigieren

1. Nach dem Anmelden, gehe direkt zu:
   ```
   https://addons.mozilla.org/developers/addon/submit/distribution
   ```
   *(Oder: Klicke auf dein Profil-Icon oben rechts → „Meine Add-ons verwalten" → „Neues Add-on einreichen")*

---

#### Schritt 3: Verteilungsart wählen

Auf der Seite **„Wie möchten Sie Ihr Add-on verteilen?"** siehst du zwei Optionen:

- **„Auf dieser Seite"** = Im öffentlichen Mozilla Add-on Store listen
- **„Auf eigener Webseite"** = Nur signieren, selbst verteilen (nicht öffentlich)

**Wähle „Auf eigener Webseite"** und klicke auf **„Weiter"**.

> Damit wird das Plugin NICHT öffentlich im Store gelistet – du bekommst nur die signierte Datei zurück, die du selbst verteilen kannst.

---

#### Schritt 4: XPI-Datei hochladen

1. Klicke auf **„Datei auswählen"** (oder „Select a file")
2. Wähle die Datei **`hide-wiki-firefox.xpi`** aus dem Projektordner
3. Warte kurz – Mozilla validiert die Datei automatisch (dauert wenige Sekunden)
4. Wenn alles grün ist: **„Weiter"** klicken

> Falls Warnungen erscheinen (gelb): Das sind meist nur Hinweise, keine Fehler. Du kannst trotzdem fortfahren.
> Falls Fehler erscheinen (rot): Melde dich bei mir – ich helfe dir.

---

#### Schritt 5: Zusätzliche Informationen ausfüllen

Mozilla fragt nach einigen Details. So füllst du sie aus:

| Feld | Was eintragen |
|------|---------------|
| **Name** | `Hide Wiki` |
| **Zusammenfassung** | `Blendet Wikipedia- und Britannica-Infoboxen auf YouTube aus` |
| **Beschreibung** (optional) | `Entfernt die Kontext-Infoboxen (Wikipedia, Britannica), die YouTube automatisch unter bestimmten Videos einblendet. Keine Datensammlung, kein Tracking – läuft komplett lokal.` |
| **Kategorie** | `Sonstiges` oder `Darstellung` |
| **Quellcode** (optional) | Kann leer bleiben – unser Code ist nicht minifiziert |

Klicke auf **„Absenden"** (oder „Submit").

---

#### Schritt 6: Signierte Datei herunterladen

1. Nach dem Absenden prüft Mozilla die Extension automatisch
2. Das dauert meist **nur wenige Sekunden**
3. Du landest auf einer Bestätigungsseite
4. Dort findest du einen **Download-Link** für die signierte `.xpi`-Datei
5. **Lade diese Datei herunter** – DAS ist deine fertige, installierbare Extension!

> Die heruntergeladene Datei heißt etwa `hide_wiki-1.0.0-fx.xpi`

---

#### Schritt 7: Signierte Extension installieren

1. Öffne Firefox
2. **Ziehe die signierte `.xpi`-Datei** direkt in das Firefox-Fenster (Drag & Drop)
3. Firefox fragt: **„Möchten Sie Hide Wiki hinzufügen?"**
4. Klicke auf **„Hinzufügen"**
5. **Fertig!** Das Plugin ist dauerhaft installiert

---

### Zum Verschenken

Die signierte `.xpi`-Datei kannst du an jeden weitergeben:

- Per E-Mail verschicken
- Auf einen USB-Stick kopieren
- Auf eine Webseite hochladen
- Per Messenger teilen

**Jeder kann sie einfach in Firefox ziehen und installieren – ohne Fehlermeldung, ohne Entwicklermodus, ohne technisches Wissen.**

---

## Funktioniert es?

1. Geh auf YouTube
2. Suche nach einem Thema mit Wikipedia-Box (z. B. „COVID-19" oder „Klimawandel")
3. Die Infobox unter dem Video sollte nicht mehr sichtbar sein

## Deinstallation

1. In Firefox: `about:addons` aufrufen
2. „Hide Wiki" finden
3. Auf **„Entfernen"** klicken
