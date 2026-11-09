(() => {
  // <stdin>
  var HTML_ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var box = document.getElementById("notfound");
  function track(suggestions) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "docs_404",
      page_path: location.pathname + location.search,
      page_referrer: document.referrer || "(direct)",
      suggestions
    });
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c) => HTML_ENTITIES[c]);
  }
  function termsFromPath(base) {
    let path = decodeURIComponent(location.pathname);
    if (base && path.startsWith(base)) path = path.slice(base.length);
    const stop = /* @__PURE__ */ new Set(["docs", "index", "html", "md", "the", "and", "for", "www", "v3", "reference", "guides"]);
    const words = path.replace(/\.[a-z]+$/i, "").split(/[\/_\-.\s]+/).map((w) => w.toLowerCase()).filter((w) => w.length > 1 && !/^\d+$/.test(w) && !stop.has(w));
    return Array.from(new Set(words)).slice(-4).join(" ");
  }
  async function suggest() {
    if (!box) {
      track(0);
      return;
    }
    const term = termsFromPath(box.dataset.base);
    if (!term) {
      track(0);
      return;
    }
    try {
      const pagefind = await import(
        /* webpackIgnore: true */
        box.dataset.pagefind
      );
      await pagefind.options({ baseUrl: box.dataset.base });
      const search = await pagefind.search(term);
      const data = await Promise.all(search.results.slice(0, 5).map((r) => r.data()));
      track(data.length);
      if (!data.length) return;
      document.getElementById("notfound-results").innerHTML = data.map(
        (d) => `<li><a class="notfound__link" href="${escapeHTML(d.url)}">
          <span class="notfound__link-title">${escapeHTML(d.meta.title || d.url)}</span>
          ${d.meta.section ? `<span class="notfound__link-section">${escapeHTML(d.meta.section)}</span>` : ""}
        </a></li>`
      ).join("");
      box.hidden = false;
      document.querySelectorAll(".notfound [data-search-open]").forEach(
        (b) => b.addEventListener("click", () => {
          const input = document.getElementById("search-input");
          if (input && !input.value) {
            input.value = term;
            input.dispatchEvent(new Event("input"));
          }
        })
      );
    } catch (e) {
      track(0);
    }
  }
  suggest();
})();
