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

Coming soon – requires Apple Developer Account for code signing. Source code is already available in the `safari/` folder.

---

## Why this extension?

YouTube automatically displays info panels from Wikipedia and Britannica below videos on certain topics – without you asking for it. This is a form of patronizing: a platform decides you need "context" before you can form your own opinion.

Wikipedia is not a neutral, infallible source – it is written by anonymous editors and is controversial on many topics. Yet YouTube presents these panels as if they were objective truth.

**Hide Wiki gives you back control.** You decide which sources you read.

## What does it remove?

YouTube adds these panels on a wide range of subjects, including:

- **COVID-19** – Coronavirus pandemic
- **Climate change** – Global warming, greenhouse effect
- **WHO** – World Health Organization
- **Conspiracy theories** – Moon landing, flat earth, 9/11, QAnon
- **Evolution** – Theory of evolution, natural selection
- **UFOs / UAPs** – Unidentified aerial phenomena
- **Vaccines** – Vaccination, immunization
- **Nuclear energy** – Nuclear power, radioactivity
- **Genetic engineering** – GMOs, gene editing
- **Historical events** – Holocaust, Armenian genocide, wars

This extension removes **all** of these info panels – regardless of the topic.

```
┌──────────────────────────────────────────┐
│  i  Topic XY                             │
│  Topic XY is a ...                       │
│  Source: Wikipedia / Britannica          │
└──────────────────────────────────────────┘
```

> **Note:** This extension does not block or modify any video content. It only removes the info panels that YouTube adds below videos.

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

Coming soon – benötigt Apple Developer Account für Code-Signierung. Der Quellcode liegt bereits im `safari/`-Ordner.

---

## Warum dieses Plugin?

YouTube blendet bei bestimmten Themen automatisch Infoboxen von Wikipedia und Britannica ein – ohne dass man danach gefragt hat. Das ist eine Form der Bevormundung: Eine Plattform entscheidet, dass du eine "Einordnung" brauchst, bevor du dir eine eigene Meinung bilden kannst.

Wikipedia ist keine neutrale, unfehlbare Quelle – sie wird von anonymen Editoren geschrieben und ist bei vielen Themen umstritten. Trotzdem präsentiert YouTube diese Panels so, als wären sie die objektive Wahrheit.

**Hide Wiki gibt dir die Kontrolle zurück.** Du entscheidest selbst, welche Quellen du liest.

## Was wird entfernt?

YouTube fügt diese Panels bei einer Vielzahl von Themen hinzu, zum Beispiel:

- **COVID-19** – Coronavirus-Pandemie
- **Klimawandel** – Erderwärmung, Treibhauseffekt
- **WHO** – Weltgesundheitsorganisation
- **Verschwörungstheorien** – Mondlandung, Flache Erde, 9/11, QAnon
- **Evolution** – Evolutionstheorie, natürliche Selektion
- **UFOs / UAPs** – Unidentifizierte Flugobjekte
- **Impfungen** – Impfstoffe, Immunisierung
- **Kernenergie** – Atomkraft, Radioaktivität
- **Gentechnik** – GMOs, Genbearbeitung
- **Historische Ereignisse** – Holocaust, Völkermorde, Kriege

Diese Extension entfernt **alle** diese Infoboxen – unabhängig vom Thema.

```
┌──────────────────────────────────────────┐
│  i  Thema XY                             │
│  Thema XY ist eine ...                   │
│  Quelle: Wikipedia / Britannica          │
└──────────────────────────────────────────┘
```

> **Hinweis:** Diese Extension blockiert oder verändert keine Videoinhalte. Sie entfernt nur die Infoboxen, die YouTube unter Videos hinzufügt.

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
