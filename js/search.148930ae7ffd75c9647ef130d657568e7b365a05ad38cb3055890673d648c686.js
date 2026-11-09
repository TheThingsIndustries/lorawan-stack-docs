(() => {
  // ns-params:@params
  var baseURL = "/docs/";
  var pagefind = "/docs/pagefind/pagefind.js";
  var sections = ["Getting started", "Cloud", "Enterprise", "Hardware", "Integrations", "API", "Concepts", "CLI reference", "Release notes"];

  // <stdin>
  var PAGE_SIZE = 10;
  var SUB_RESULTS = 3;
  var RECENT_KEY = "tts-docs-recent-searches";
  var RECENT_MAX = 5;
  var TRACK_DELAY = 1200;
  var HTML_ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var REFERENCE_FACTOR = 0.25;
  var REFERENCE_QUERY = /\b(ttn-lw-cli|cli|command|flag|grpc|rpc|proto|reference|http api|endpoint)\b/i;
  var dialog = document.getElementById("search-dialog");
  if (dialog) {
    let loadPagefind = function() {
      if (!pagefindPromise) {
        pagefindPromise = import(pagefind).then(async (pagefind2) => {
          await pagefind2.options({ baseUrl: baseURL, excerptLength: 24 });
          await pagefind2.init();
          await pagefind2.filters();
          return pagefind2;
        }).catch((err) => {
          pagefindPromise = null;
          throw err;
        });
      }
      return pagefindPromise;
    }, escapeHTML = function(s) {
      return String(s).replace(/[&<>"']/g, (c) => HTML_ENTITIES[c]);
    }, readRecent = function() {
      try {
        const v = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
      } catch (e) {
        return [];
      }
    }, saveRecent = function(q2) {
      q2 = q2.trim();
      if (!q2) return;
      const next = [q2].concat(readRecent().filter((x) => x.toLowerCase() !== q2.toLowerCase())).slice(0, RECENT_MAX);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      } catch (e) {
      }
    }, track = function(event, data) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event }, data));
    }, trackSearchNow = function() {
      clearTimeout(trackTimer);
      const key = term + "|" + (filter || "");
      if (term.length < 2 || key === lastTracked) return;
      lastTracked = key;
      track("docs_search", { search_term: term, search_results: lastCount, search_filter: filter || "All" });
      if (lastCount === 0) track("docs_search_no_results", { search_term: term, search_filter: filter || "All" });
    }, scheduleTrack = function() {
      clearTimeout(trackTimer);
      trackTimer = setTimeout(trackSearchNow, TRACK_DELAY);
    }, showStart = function() {
      const recent = readRecent();
      recentList.innerHTML = recent.map(
        (q2) => `<li><button type="button" class="search-empty__link search-link-button" data-recent="${escapeHTML(q2)}">${escapeHTML(q2)}</button></li>`
      ).join("");
      recentGroup.hidden = recent.length === 0;
      start.hidden = false;
      noResults.hidden = true;
      filtersEl.hidden = true;
      list.innerHTML = "";
      more.hidden = true;
      status.textContent = "";
      input.setAttribute("aria-expanded", "false");
      setActive(-1);
    }, renderFilters = function(counts, total) {
      const order = (sections || []).slice();
      Object.keys(counts).forEach((k) => {
        if (order.indexOf(k) === -1) order.push(k);
      });
      const chip = (label, value, count, on) => `<button type="button" class="search-chip${on ? " is-active" : ""}" data-filter="${escapeHTML(value)}" aria-pressed="${on}">${escapeHTML(label)} <span class="search-chip__count">${count}</span></button>`;
      const chips = [chip("All", "", total, !filter)];
      order.forEach((name) => {
        const n = counts[name] || 0;
        if (!n && name !== filter) return;
        const on = name === filter;
        chips.push(chip(name, name, n, on));
      });
      filtersEl.innerHTML = chips.join("");
      filtersEl.hidden = total === 0;
    }, resultHTML = function(r, index) {
      const title = escapeHTML(r.meta && r.meta.title || r.url);
      const section = r.meta && r.meta.section ? `<span class="search-result__section">${escapeHTML(r.meta.section)}</span>` : "";
      const subs = (r.sub_results || []).filter((s) => s.url && s.url.indexOf("#") !== -1 && s.url !== r.url).slice(0, SUB_RESULTS).map(
        (s) => `<li><a class="search-result__sub" href="${escapeHTML(s.url)}"
          data-search-item data-position="${index + 1}" role="option">
          <span class="search-result__sub-title">${escapeHTML(s.title)}</span>
          <span class="search-result__excerpt">${s.excerpt || ""}</span></a></li>`
      ).join("");
      return `<li class="search-result">
      <a class="search-result__main" href="${escapeHTML(r.url)}"
        data-search-item data-position="${index + 1}" role="option">
        <span class="search-result__head"><span class="search-result__title">${title}</span>${section}</span>
        <span class="search-result__excerpt">${r.excerpt || ""}</span>
      </a>
      ${subs ? `<ul class="search-result__subs">${subs}</ul>` : ""}
    </li>`;
    }, items = function() {
      return Array.prototype.slice.call(list.querySelectorAll("[data-search-item]"));
    }, setActive = function(i) {
      const all = items();
      all.forEach((el) => {
        el.classList.remove("is-active");
        el.removeAttribute("aria-selected");
        el.removeAttribute("id");
      });
      active = all.length ? Math.max(-1, Math.min(i, all.length - 1)) : -1;
      if (active >= 0) {
        const el = all[active];
        el.classList.add("is-active");
        el.setAttribute("aria-selected", "true");
        el.id = "search-active-option";
        input.setAttribute("aria-activedescendant", el.id);
        el.scrollIntoView({ block: "nearest" });
      } else {
        input.removeAttribute("aria-activedescendant");
      }
    }, open = function(q2) {
      if (!dialog.open) {
        dialog.showModal();
        document.documentElement.classList.add("search-open");
      }
      if (typeof q2 === "string") input.value = q2;
      input.focus();
      input.select();
      if (input.value.trim()) runSearch();
      else showStart();
      loadPagefind().catch(() => {
      });
    }, close = function() {
      trackSearchNow();
      if (dialog.open) dialog.close();
      document.documentElement.classList.remove("search-open");
    };
    const input = document.getElementById("search-input");
    const form = dialog.querySelector("form");
    const list = document.getElementById("search-results");
    const status = document.getElementById("search-status");
    const more = document.getElementById("search-more");
    const filtersEl = document.getElementById("search-filters");
    const start = document.getElementById("search-start");
    const recentGroup = document.getElementById("search-recent-group");
    const recentList = document.getElementById("search-recent");
    const noResults = document.getElementById("search-noresults");
    const noResultsTerm = document.getElementById("search-noresults-term");
    const noResultsFilter = document.getElementById("search-noresults-filter");
    const noResultsAll = document.getElementById("search-noresults-all");
    const forumLink = document.getElementById("search-forum-link");
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    document.querySelectorAll("[data-search-shortcut]").forEach((el) => {
      el.textContent = isMac ? "\u2318 K" : "Ctrl K";
    });
    let pagefindPromise = null;
    let term = "";
    let filter = null;
    let results = [];
    let shown = 0;
    let active = -1;
    let searchSeq = 0;
    let trackTimer = null;
    let lastTracked = "";
    let lastCount = 0;
    async function renderMore(seq) {
      const slice = results.slice(shown, shown + PAGE_SIZE);
      const data = await Promise.all(slice.map((r) => r.data()));
      if (seq !== searchSeq) return;
      list.insertAdjacentHTML("beforeend", data.map((d, i) => resultHTML(d, shown + i)).join(""));
      shown += slice.length;
      more.hidden = shown >= results.length;
    }
    async function runSearch() {
      const seq = ++searchSeq;
      term = input.value.trim();
      if (!term) {
        showStart();
        return;
      }
      start.hidden = true;
      let pagefind2;
      try {
        pagefind2 = await loadPagefind();
      } catch (e) {
        status.textContent = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? "The search index is not built for this preview. Run `make search.dev`, then reload." : "Search is unavailable right now. Please try again later.";
        return;
      }
      const opts = filter ? { filters: { section: filter } } : {};
      const search = await pagefind2.debouncedSearch(term, opts, 120);
      if (search === null || seq !== searchSeq) return;
      const counts = search.totalFilters && search.totalFilters.section || {};
      const total = typeof search.unfilteredResultCount === "number" ? search.unfilteredResultCount : search.results.length;
      let refIds = /* @__PURE__ */ new Set();
      if (!REFERENCE_QUERY.test(term) && filter !== "CLI reference") {
        const ref = await pagefind2.search(term, { filters: Object.assign({}, opts.filters, { type: "reference" }) });
        if (seq !== searchSeq) return;
        refIds = new Set(ref.results.map((r) => r.id));
      }
      results = search.results.map((r) => ({ r, score: refIds.has(r.id) ? r.score * REFERENCE_FACTOR : r.score })).sort((a, b) => b.score - a.score).map((x) => x.r);
      lastCount = results.length;
      shown = 0;
      list.innerHTML = "";
      renderFilters(counts, total);
      input.setAttribute("aria-expanded", results.length ? "true" : "false");
      if (!results.length) {
        noResults.hidden = false;
        noResultsTerm.textContent = term;
        noResultsFilter.textContent = filter ? ` in ${filter}` : "";
        noResultsAll.hidden = !filter;
        if (forumLink) forumLink.href = forumLink.dataset.base + encodeURIComponent(term);
        status.textContent = "";
        more.hidden = true;
      } else {
        noResults.hidden = true;
        status.textContent = `${results.length} result${results.length === 1 ? "" : "s"}${filter ? ` in ${filter}` : ""}`;
        await renderMore(seq);
        if (seq === searchSeq) setActive(0);
      }
      scheduleTrack();
    }
    dialog.addEventListener("close", () => {
      trackSearchNow();
      document.documentElement.classList.remove("search-open");
    });
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) close();
    });
    document.querySelectorAll("[data-search-open]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        open();
      });
      ["mouseenter", "focus", "touchstart"].forEach(
        (ev) => el.addEventListener(ev, () => loadPagefind().catch(() => {
        }), { once: true, passive: true })
      );
    });
    dialog.querySelectorAll("[data-search-close]").forEach((el) => el.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      const k = e.key && e.key.toLowerCase();
      if (k === "escape" && dialog.open) {
        e.preventDefault();
        close();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        e.preventDefault();
        dialog.open ? close() : open();
        return;
      }
      if (k === "/" && !dialog.open) {
        const t = e.target;
        const typing = t && (t.isContentEditable || /^(input|textarea|select)$/i.test(t.tagName));
        if (!typing) {
          e.preventDefault();
          open();
        }
      }
    });
    input.addEventListener("input", () => runSearch());
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive(active + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive(active - 1);
      }
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const all = items();
      const target = all[active >= 0 ? active : 0];
      if (target) target.click();
    });
    list.addEventListener("mousemove", (e) => {
      const item = e.target.closest("[data-search-item]");
      if (item) {
        const i = items().indexOf(item);
        if (i !== active) setActive(i);
      }
    });
    list.addEventListener("click", (e) => {
      const link = e.target.closest("[data-search-item]");
      if (!link) return;
      saveRecent(term);
      trackSearchNow();
      track("docs_search_click", {
        search_term: term,
        search_filter: filter || "All",
        search_result_url: link.getAttribute("href"),
        search_result_position: Number(link.dataset.position)
      });
      const url = new URL(link.href, location.href);
      if (url.pathname === location.pathname && url.hash) close();
    });
    more.addEventListener("click", () => renderMore(searchSeq));
    filtersEl.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-filter]");
      if (!chip) return;
      filter = chip.dataset.filter || null;
      runSearch();
      input.focus();
    });
    noResults.addEventListener("click", (e) => {
      if (e.target.closest("[data-search-clear-filter]")) {
        filter = null;
        runSearch();
        input.focus();
      }
    });
    start.addEventListener("click", (e) => {
      const r = e.target.closest("[data-recent]");
      if (r) {
        input.value = r.dataset.recent;
        runSearch();
        input.focus();
      }
    });
    const q = new URLSearchParams(location.search).get("q");
    if (q) open(q);
  }
})();
