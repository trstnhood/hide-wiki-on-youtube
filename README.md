# Hide Wiki

**Removes Wikipedia and Britannica info panels from YouTube videos.**

YouTube automatically displays context panels below certain videos linking to Wikipedia or Britannica. This browser extension removes them.

- No data collection
- No account required
- Works immediately after installation
- Runs locally in your browser

---

## Download & Install

### Firefox (signed & verified by Mozilla)

Download the latest signed extension from [**Releases**](../../releases):

**`hide-wiki-firefox-extension-1.0.0.xpi`**

1. Open the `.xpi` file with Firefox (double-click or drag into Firefox)
2. Click **"Add"**
3. Done!

### Chrome / Arc / Brave / Vivaldi / Opera

1. Download the source code or clone this repo
2. Go to `chrome://extensions` → Enable **"Developer mode"** (top right)
3. Click **"Load unpacked"** → Select the `chrome/` folder
4. Done!

### Microsoft Edge

1. Download the source code or clone this repo
2. Go to `edge://extensions` → Enable **"Developer mode"** (bottom left)
3. Click **"Load unpacked"** → Select the `edge/` folder
4. Done!

### Safari (macOS)

Requires Xcode. See [safari/INSTALLIEREN.md](safari/INSTALLIEREN.md) for details.

---

## What does it remove?

```
┌──────────────────────────────────────────┐
│  i  COVID-19                             │
│  COVID-19 (Coronavirus) is a ...         │
│  Source: Wikipedia                       │
└──────────────────────────────────────────┘
```

---

## Project Structure

```
hide-youtube-wiki-panels/
├── firefox/          # Firefox extension (Manifest V2)
├── chrome/           # Chrome extension (Manifest V3)
├── edge/             # Edge extension (Manifest V3)
├── safari/           # Safari extension (Manifest V3, requires Xcode)
├── Firefox-Verified/ # Ready-to-share folder with signed .xpi + instructions
└── hide-wiki-logo.png
```

---

## Browser Support Status

| Browser | Status | Install Method |
|---------|--------|----------------|
| **Firefox** | Signed & verified by Mozilla | One-click install via .xpi |
| **Chrome** | Works via Developer Mode | Load unpacked extension |
| **Edge** | Works via Developer Mode | Load unpacked extension |
| **Arc / Brave / Vivaldi / Opera** | Works via Developer Mode | Same as Chrome |
| **Safari** | Requires Xcode build | See instructions |

---

## Contributing

Found a bug or YouTube changed something? Open an issue or submit a pull request.

---

## License

Free to use. Do whatever you want with it.

---
---

# Hide Wiki (Deutsch)

**Entfernt Wikipedia- und Britannica-Infoboxen von YouTube-Videos.**

YouTube zeigt bei bestimmten Themen automatisch Kontext-Infoboxen unter Videos an, die auf Wikipedia oder Britannica verweisen. Diese Browser-Extension entfernt sie.

- Keine Datensammlung
- Kein Konto nötig
- Funktioniert sofort nach der Installation
- Läuft lokal im Browser

---

## Download & Installation

### Firefox (signiert & verifiziert von Mozilla)

Lade die signierte Extension unter [**Releases**](../../releases) herunter:

**`hide-wiki-firefox-extension-1.0.0.xpi`**

1. Öffne die `.xpi`-Datei mit Firefox (Doppelklick oder in Firefox ziehen)
2. Klicke auf **"Hinzufügen"**
3. Fertig!

### Chrome / Arc / Brave / Vivaldi / Opera

1. Lade den Quellcode herunter oder klone dieses Repo
2. Gehe zu `chrome://extensions` → **"Entwicklermodus"** aktivieren (oben rechts)
3. **"Entpackte Erweiterung laden"** → `chrome/`-Ordner auswählen
4. Fertig!

### Microsoft Edge

1. Lade den Quellcode herunter oder klone dieses Repo
2. Gehe zu `edge://extensions` → **"Entwicklermodus"** aktivieren (unten links)
3. **"Entpackt laden"** → `edge/`-Ordner auswählen
4. Fertig!

### Safari (macOS)

Benötigt Xcode. Details: [safari/INSTALLIEREN.md](safari/INSTALLIEREN.md)

---

## Was wird entfernt?

```
┌──────────────────────────────────────────┐
│  i  COVID-19                             │
│  COVID-19 (Coronavirus) ist eine ...     │
│  Quelle: Wikipedia                       │
└──────────────────────────────────────────┘
```

---

## Projektstruktur

```
hide-youtube-wiki-panels/
├── firefox/          # Firefox-Extension (Manifest V2)
├── chrome/           # Chrome-Extension (Manifest V3)
├── edge/             # Edge-Extension (Manifest V3)
├── safari/           # Safari-Extension (Manifest V3, benötigt Xcode)
├── Firefox-Verified/ # Fertiger Ordner mit signierter .xpi + Anleitung
└── hide-wiki-logo.png
```

---

## Browser-Support Status

| Browser | Status | Installationsweg |
|---------|--------|------------------|
| **Firefox** | Signiert & verifiziert von Mozilla | Ein-Klick-Installation via .xpi |
| **Chrome** | Funktioniert im Entwicklermodus | Entpackte Erweiterung laden |
| **Edge** | Funktioniert im Entwicklermodus | Entpackte Erweiterung laden |
| **Arc / Brave / Vivaldi / Opera** | Funktioniert im Entwicklermodus | Wie Chrome |
| **Safari** | Benötigt Xcode-Build | Siehe Anleitung |

---

## Mithelfen

Bug gefunden oder YouTube hat etwas geändert? Erstelle ein Issue oder einen Pull Request.

---

## Lizenz

Frei nutzbar. Mach damit, was du willst.

---

Programmiert von Tristan Ladwein | Free at tristanladwein.com
