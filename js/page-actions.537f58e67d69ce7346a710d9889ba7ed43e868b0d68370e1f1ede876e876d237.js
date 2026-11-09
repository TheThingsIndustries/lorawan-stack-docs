(() => {
  // <stdin>
  function track(action) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "docs_page_action", page_action: action });
  }
  function fallbackCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) throw new Error("copy failed");
  }
  async function copyFrom(textPromise) {
    if (navigator.clipboard && window.ClipboardItem && window.isSecureContext) {
      try {
        const blob = textPromise.then((t) => new Blob([t], { type: "text/plain" }));
        await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
        return;
      } catch (e) {
      }
    }
    const text = await textPromise;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (e) {
      }
    }
    fallbackCopy(text);
  }
  document.querySelectorAll(".page-actions").forEach((bar) => {
    const menu = bar.querySelector(".page-actions__menu");
    const copyButton = bar.querySelector('[data-page-action="copy-markdown"]');
    let markdown = null;
    function loadMarkdown() {
      if (!markdown && copyButton) {
        markdown = fetch(copyButton.dataset.markdownUrl).then((res) => {
          if (!res.ok) throw new Error(res.status);
          return res.text();
        });
        markdown.catch(() => {
          markdown = null;
        });
      }
      return markdown;
    }
    if (menu) menu.addEventListener("toggle", () => menu.open && loadMarkdown());
    bar.addEventListener("click", async (e) => {
      const el = e.target.closest("[data-page-action]");
      if (!el) return;
      const action = el.dataset.pageAction;
      if (action === "open-menu") {
        if (!menu.open) track("open-menu");
        return;
      }
      track(action);
      if (action !== "copy-markdown") {
        if (menu) menu.open = false;
        return;
      }
      const label = el.querySelector("strong");
      const original = label.textContent;
      try {
        await copyFrom(loadMarkdown());
        label.textContent = "Copied to clipboard";
      } catch (err) {
        label.textContent = "Could not copy, use View as Markdown";
      }
      setTimeout(() => {
        label.textContent = original;
        if (menu) menu.open = false;
      }, 1600);
    });
    document.addEventListener("click", (e) => {
      if (menu && menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
  });
})();
