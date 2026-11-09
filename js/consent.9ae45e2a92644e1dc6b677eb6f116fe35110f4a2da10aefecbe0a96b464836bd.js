(() => {
  // <stdin>
  var MODE_KEY = "framerCookiesConsentMode";
  var DISMISSED_KEY = "framerCookiesDismissed";
  var AUTO_KEY = "framerCookiesAutoAccepted";
  var CATEGORIES = ["analytics", "marketing", "preferences"];
  var banner = document.getElementById("consent");
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
    }
  }
  function hasDecided() {
    return read(DISMISSED_KEY) !== null || read(AUTO_KEY) !== null;
  }
  function currentModes() {
    const modes = { necessary: true, analytics: false, marketing: false, preferences: false };
    if (!hasDecided()) return modes;
    try {
      const stored = JSON.parse(read(MODE_KEY) || "null");
      if (stored) CATEGORIES.forEach((k) => typeof stored[k] === "boolean" && (modes[k] = stored[k]));
    } catch (e) {
    }
    return modes;
  }
  function toGTM(m) {
    const g = (v) => v ? "granted" : "denied";
    return {
      functionality_storage: g(m.necessary),
      security_storage: g(m.necessary),
      ad_storage: g(m.marketing),
      ad_user_data: g(m.marketing),
      ad_personalization: g(m.marketing),
      analytics_storage: g(m.analytics),
      personalization_storage: g(m.preferences)
    };
  }
  function save(modes) {
    write(MODE_KEY, JSON.stringify(modes));
    write(DISMISSED_KEY, "true");
    window.dataLayer = window.dataLayer || [];
    const gtag = typeof window.gtag === "function" ? window.gtag : function() {
      window.dataLayer.push(arguments);
    };
    gtag("consent", "update", toGTM(modes));
    window.dataLayer.push({ event: "cookie_consent_update" });
  }
  if (banner) {
    const options = document.getElementById("consent-options");
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
      customize.setAttribute("aria-expanded", String(expanded));
      banner.hidden = false;
    };
    const hide = () => {
      banner.hidden = true;
    };
    banner.addEventListener("click", (e) => {
      const action = e.target.closest("[data-consent]");
      if (!action) return;
      const all = (v) => ({ necessary: true, analytics: v, marketing: v, preferences: v });
      switch (action.dataset.consent) {
        case "accept":
          save(all(true));
          hide();
          break;
        case "reject":
          save(all(false));
          hide();
          break;
        case "customize":
          show(true);
          options.querySelector('input[name="analytics"]').focus();
          break;
        case "save": {
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
    document.querySelectorAll("[data-cookie-settings]").forEach(
      (el) => el.addEventListener("click", (e) => {
        e.preventDefault();
        show(true);
        banner.querySelector('input[name="analytics"]').focus();
      })
    );
    if (!hasDecided()) show(false);
  }
})();
