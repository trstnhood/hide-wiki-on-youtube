# Hide Wiki — Remove YouTube's Topical Context Panels

**Removes YouTube's topical context panels (Wikipedia boxes, Britannica information panels) – as if you can't research a topic yourself.**

I can think for myself, thank you very much.

- No data collection — runs 100% locally
- No account required
- Works immediately after installation
- Dedicated extension — no uBlock filters that break on every YouTube update

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

Coming soon – requires Apple Developer Account for code signing. Source code is already available in the `safari/` folder.

---

## Why this extension?

YouTube automatically displays topical context panels (also called information panels or Wikipedia boxes) below videos on certain topics – without you asking for it. Whether you find them useful or not should be your choice, not YouTube's.

**Hide Wiki gives you back that choice.** You decide what context you need and where you get it from. A cleaner YouTube, on your terms.

## What does it remove?

```
┌──────────────────────────────────────────┐
│  i  Topic XY                             │
│  Topic XY is a ...                       │
│  Source: Wikipedia / Britannica          │
└──────────────────────────────────────────┘
```

This extension removes **all** topical context panels (Wikipedia boxes, Britannica information panels) – regardless of the topic. It does not block or modify any video content.

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
| **Safari** | Coming soon | Requires Apple Developer Account for signing |

---

## Contributing

Found a bug or YouTube changed something? Open an issue or submit a pull request.

---

## License

Free to use. Do whatever you want with it.

---
---

# Hide Wiki — YouTube Topical-Context-Panels ausblenden (Deutsch)

**Entfernt YouTubes Topical-Context-Panels (Wikipedia-Boxen, Britannica-Informationstafeln) – als könnte man sich nicht selbst über ein Thema informieren.**

Ich kann selbst denken, danke.

- Keine Datensammlung — läuft 100% lokal
- Kein Konto nötig
- Funktioniert sofort nach der Installation
- Dedizierte Extension — keine uBlock-Filter die bei jedem YouTube-Update brechen

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

Coming soon – benötigt Apple Developer Account für Code-Signierung. Der Quellcode liegt bereits im `safari/`-Ordner.

---

## Warum dieses Plugin?

YouTube blendet bei bestimmten Themen automatisch Topical-Context-Panels (auch Informationstafeln oder Wikipedia-Boxen genannt) unter Videos ein – ohne dass man danach gefragt hat. Ob du diese hilfreich findest oder nicht, sollte deine Entscheidung sein, nicht YouTubes.

**Hide Wiki gibt dir diese Wahl zurück.** Du entscheidest, welchen Kontext du brauchst und woher du ihn bekommst. Ein saubereres YouTube, nach deinen Regeln.

## Was wird entfernt?

```
┌──────────────────────────────────────────┐
│  i  Thema XY                             │
│  Thema XY ist eine ...                   │
│  Quelle: Wikipedia / Britannica          │
└──────────────────────────────────────────┘
```

Diese Extension entfernt **alle** Topical-Context-Panels (Wikipedia-Boxen, Britannica-Informationstafeln) – unabhängig vom Thema. Videoinhalte werden nicht blockiert oder verändert.

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
| **Safari** | Coming soon | Benötigt Apple Developer Account für Signierung |

---

## Mithelfen

Bug gefunden oder YouTube hat etwas geändert? Erstelle ein Issue oder einen Pull Request.

---

## Lizenz

Frei nutzbar. Mach damit, was du willst.

---

Programmiert von Tristan Ladwein | Free at tristanladwein.com
