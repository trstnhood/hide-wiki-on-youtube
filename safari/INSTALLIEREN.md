# Hide Wiki – Safari (macOS)

## Was macht dieses Plugin?

Dieses Plugin entfernt die Wikipedia- und Britannica-Infoboxen, die YouTube automatisch unter bestimmten Videos einblendet. Keine Tracking-Daten, keine Werbung, kein Quatsch – es blendet einfach nur diese Boxen aus.

---

## Wichtig vorab

Safari-Erweiterungen funktionieren anders als bei Chrome oder Firefox. Apple verlangt, dass jede Safari-Erweiterung in eine kleine macOS-App verpackt wird. Das klingt kompliziert, aber Apple liefert ein Werkzeug mit, das die Umwandlung automatisch erledigt.

**Du brauchst:**
- Einen Mac
- **Xcode** (kostenlos aus dem App Store)
  → App Store öffnen → nach „Xcode" suchen → installieren
  (Achtung: Xcode ist ca. 7 GB groß, der Download dauert eine Weile)

---

## Installation (Schritt für Schritt)

### Schritt 1: Xcode installieren

1. **App Store** auf deinem Mac öffnen
2. Nach **„Xcode"** suchen
3. Auf **„Laden"** klicken und warten, bis die Installation fertig ist
4. **Xcode einmal öffnen** und die Lizenzbedingungen akzeptieren

### Schritt 2: Xcode Command Line Tools installieren

1. **Terminal** öffnen (Spotlight: Cmd+Leertaste → „Terminal" eingeben)
2. Folgenden Befehl eingeben und Enter drücken:
   ```
   xcode-select --install
   ```
3. Im erscheinenden Dialog auf **„Installieren"** klicken

### Schritt 3: Safari-Extension erzeugen

1. **Terminal** öffnen (falls nicht schon offen)
2. In den `safari/`-Ordner navigieren. Wenn du den Ordner z. B. im Downloads-Ordner hast:
   ```
   cd ~/Downloads/hide-youtube-wiki-panels/safari
   ```
   (Passe den Pfad an, je nachdem wo du den Ordner abgelegt hast)

3. Folgenden Befehl eingeben:
   ```
   xcrun safari-web-extension-converter . --app-name "Hide Wiki" --bundle-identifier com.example.hide-wiki --no-open
   ```
4. Es wird ein neuer Ordner mit einem Xcode-Projekt erstellt

### Schritt 4: App in Xcode bauen

1. Öffne die erzeugte `.xcodeproj`-Datei (Doppelklick)
2. Oben links in Xcode: wähle als Ziel **„My Mac"**
3. Drücke **Cmd+R** (oder klicke auf den Play-Button ▶)
4. Xcode baut die App – das dauert einen Moment
5. Die App startet sich automatisch. Du kannst sie danach wieder schließen.

### Schritt 5: Erweiterung in Safari aktivieren

1. **Safari** öffnen
2. Menü: **Safari → Einstellungen** (oder Cmd+Komma)
3. Tab **„Erweiterungen"** klicken
4. **„Hide Wiki"** in der Liste finden und das **Häkchen setzen**
5. Safari fragt nach Berechtigungen → **erlauben** für youtube.com

### Fertig!

Öffne YouTube und schau dir ein Video an – die Wikipedia-Infoboxen sollten verschwunden sein.

---

## Falls die Erweiterung nicht in Safari erscheint

1. **Safari** öffnen
2. Menü: **Safari → Einstellungen → Erweitert**
3. Ganz unten: **„Funktionen für Web-Entwickler anzeigen"** aktivieren
4. Menü: **Entwickler → Nicht signierte Erweiterungen erlauben** aktivieren
5. Jetzt nochmal unter **Einstellungen → Erweiterungen** nachschauen

---

## Probleme?

- **„Xcode nicht gefunden":** Stelle sicher, dass Xcode aus dem App Store installiert ist und du es einmal geöffnet hast.
- **Befehl `xcrun` schlägt fehl:** Führe `xcode-select --install` aus (Schritt 2).
- **Extension taucht nicht auf:** Siehe Abschnitt oben „Falls die Erweiterung nicht in Safari erscheint".
- **Boxen sind noch da:** Lade die YouTube-Seite neu (Cmd+R).

## Deinstallation

1. Safari → Einstellungen → Erweiterungen
2. „Hide Wiki" auswählen
3. Auf „Deinstallieren" klicken
4. Safari verweist dich auf den Finder – lösche die App dort
