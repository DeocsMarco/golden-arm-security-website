// Home-only presentation: relocate the existing live result, not a cloned UI.
// The map controller retains its node reference and its native event handlers.
function startHomeMapDetails() {
  const panel = document.querySelector('body[data-page="home"] #coverage.home-map-details');
  const map = panel?.querySelector('#service-access-map');
  const slot = panel?.querySelector('.home-map-selection-slot');
  if (!map || !slot) return;
  const placeResult = () => {
    const result = map.querySelector('[data-map-popout]');
    if (!result) return false;
    slot.append(result);
    panel.dataset.mapDetailsReady = 'true';
    return true;
  };
  if (placeResult()) return;
  const observer = new MutationObserver(() => {
    if (placeResult()) observer.disconnect();
  });
  observer.observe(map, { childList: true, subtree: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startHomeMapDetails, { once: true });
} else {
  startHomeMapDetails();
}
