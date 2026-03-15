// Selektoren für die YouTube-Kontext-/Wikipedia-Infoboxen
const PANEL_SELECTORS = [
  'ytd-info-panel-content-renderer',
  '#clarify-box'
];

/**
 * Durchsucht das DOM nach Info-Panel-Elementen und blendet sie aus.
 * Versucht zunächst den nächstgelegenen Container zu finden,
 * damit keine leeren Platzhalter übrig bleiben.
 */
function hidePanels() {
  PANEL_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      const container =
        el.closest('#middle-row') ||
        el.closest('ytd-watch-metadata') ||
        el;

      if (container && container.style.display !== 'none') {
        container.style.display = 'none';
      }
    });
  });
}

/**
 * Initialisiert das Plugin:
 * 1. Einmaliges Ausblenden beim Laden
 * 2. MutationObserver für YouTube-SPA-Navigationen
 */
function init() {
  hidePanels();

  const observer = new MutationObserver(() => {
    hidePanels();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

init();
