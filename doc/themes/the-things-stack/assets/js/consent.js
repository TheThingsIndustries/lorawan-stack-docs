// Cookie consent banner for the documentation.
//
// The docs are served from the same origin as www.thethingsindustries.com
// (Framer), so this uses the same localStorage keys and Consent Mode mapping
// as Framer's cookie banner: a choice made on either site applies to both.
//
//   framerCookiesConsentMode  {"necessary":true,"analytics":…,"marketing":…,"preferences":…}
//   framerCookiesDismissed    "true" once the visitor has made a choice
//
// On a choice it sends a Consent Mode update and pushes the
// `cookie_consent_update` event, like Framer does. Defaults are set in
// partials/consent/default.html, before Google Tag Manager loads.

const MODE_KEY = 'framerCookiesConsentMode';
const DISMISSED_KEY = 'framerCookiesDismissed';
const AUTO_KEY = 'framerCookiesAutoAccepted';
const CATEGORIES = ['analytics', 'marketing', 'preferences'];

const banner = document.getElementById('consent');

function read(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Storage blocked: the choice applies to this page view only.
  }
}

function hasDecided() {
  return read(DISMISSED_KEY) !== null || read(AUTO_KEY) !== null;
}

function currentModes() {
  const modes = { necessary: true, analytics: false, marketing: false, preferences: false };
  if (!hasDecided()) return modes;
  try {
    const stored = JSON.parse(read(MODE_KEY) || 'null');
    if (stored) CATEGORIES.forEach((k) => typeof stored[k] === 'boolean' && (modes[k] = stored[k]));
  } catch (e) {
    // ignore malformed value
  }
  return modes;
}

function toGTM(m) {
  const g = (v) => (v ? 'granted' : 'denied');
  return {
    functionality_storage: g(m.necessary),
    security_storage: g(m.necessary),
    ad_storage: g(m.marketing),
    ad_user_data: g(m.marketing),
    ad_personalization: g(m.marketing),
    analytics_storage: g(m.analytics),
    personalization_storage: g(m.preferences),
  };
}

function save(modes) {
  write(MODE_KEY, JSON.stringify(modes));
  write(DISMISSED_KEY, 'true');
  window.dataLayer = window.dataLayer || [];
  // GTM reads consent commands as the `arguments` object gtag() pushes
  const gtag = typeof window.gtag === 'function' ? window.gtag : function () { window.dataLayer.push(arguments); };
  gtag('consent', 'update', toGTM(modes));
  window.dataLayer.push({ event: 'cookie_consent_update' });
}

if (banner) {
  const options = document.getElementById('consent-options');
  const customize = banner.querySelector('[data-consent="customize"]');
  const saveButton = banner.querySelector('[data-consent="save"]');

  const show = (expanded) => {
    const modes = currentModes();
    CATEGORIES.forEach((k) => {
      options.querySelector(`input[name="${k}"]`).checked = modes[k];
    });
    options.hidden = !expanded;
    saveButton.hidden = !expanded;
    customize.hidden = expanded;
    customize.setAttribute('aria-expanded', String(expanded));
    banner.hidden = false;
  };

  const hide = () => {
    banner.hidden = true;
  };

  banner.addEventListener('click', (e) => {
    const action = e.target.closest('[data-consent]');
    if (!action) return;
    const all = (v) => ({ necessary: true, analytics: v, marketing: v, preferences: v });
    switch (action.dataset.consent) {
      case 'accept':
        save(all(true));
        hide();
        break;
      case 'reject':
        save(all(false));
        hide();
        break;
      case 'customize':
        show(true);
        options.querySelector('input[name="analytics"]').focus();
        break;
      case 'save': {
        const modes = { necessary: true };
        CATEGORIES.forEach((k) => {
          modes[k] = options.querySelector(`input[name="${k}"]`).checked;
        });
        save(modes);
        hide();
        break;
      }
    }
  });

  // "Cookie settings" links reopen the banner with the categories visible
  document.querySelectorAll('[data-cookie-settings]').forEach((el) =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      show(true);
      banner.querySelector('input[name="analytics"]').focus();
    })
  );

  if (!hasDecided()) show(false);
}
