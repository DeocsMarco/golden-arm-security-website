/* Route-owned mail draft only. No inquiry is transmitted by this page.
 * Deliberately not .contact-form: the immutable shared bundle enables that
 * selector before installing its old, fuller payload handler. Keep it unbound.
 */
(() => {
  const form = document.querySelector('body[data-page="contact"] form[data-cc-draft]');
  if (!form || form.dataset.draftHandlerReady === 'true') return;
  const button = form.querySelector('[data-js-handoff]');
  const status = form.querySelector('#form-status');
  if (!button || !status) return;

  const clearDraftState = () => {
    status.textContent = '';
    delete form.dataset.draftAttempted;
  };
  form.addEventListener('input', clearDraftState);
  form.addEventListener('submit', event => {
    // Cancel before validation, DOM reads, or any operation that might fail.
    event.preventDefault();
    event.stopImmediatePropagation();
    clearDraftState();
    if (!form.reportValidity()) return;
    const consent = form.elements.namedItem('privacyConsent');
    if (!consent?.checked) return;

    // Explicit allowlist: no obsolete/hidden sales-qualification values.
    const value = name => form.elements.namedItem(name)?.value.trim() || '';
    const subject = 'Golden Arm Site Assessment Request';
    const lines = [
      subject,
      '--------------------------------',
      `Name: ${value('fullName')}`,
      `Company: ${value('company')}`,
      `Email: ${value('email')}`,
      `Mobile: ${value('mobile')}`,
    ];
    const location = value('location');
    if (location) lines.push(`Site location: ${location}`);
    lines.push('Privacy consent: Agreed', '', 'Message:', value('message'));
    const draftUrl = `mailto:admin@goldenarmsecurity.ph?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    try {
      // This attempts an email-app handoff; it cannot observe delivery.
      window.location.assign(draftUrl);
      form.dataset.draftAttempted = 'true';
      status.textContent = 'Your email draft is ready. Review it and send it from your email app.';
    } catch {
      status.textContent = 'Your email app could not be opened. Use the direct email or phone links above.';
    }
  }, { capture: true });

  // Synchronous listener installation must complete before enabling the button.
  form.dataset.draftHandlerReady = 'true';
  button.disabled = false;
  button.removeAttribute('aria-disabled');

  // Preserve existing city-level prefill, but never import other query fields.
  const params = new URLSearchParams(window.location.search);
  const supplied = (params.get('location') || params.get('market'))?.trim();
  const location = form.elements.namedItem('location');
  if (location && !location.value && supplied && supplied.length <= 80) location.value = supplied;
})();
