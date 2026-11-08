// "Copy page" menu under the page title: copies the page's Markdown version
// (index.md) for use in AI tools, and tracks which actions people use.
//
// Analytics: pushes { event: 'docs_page_action', page_action } to the GTM dataLayer.

function track(action) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'docs_page_action', page_action: action });
}

function fallbackCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand('copy');
  area.remove();
  if (!ok) throw new Error('copy failed');
}

// Copies the text of a promise. Safari only allows clipboard writes during the
// click itself, so pass the pending download to ClipboardItem where available.
async function copyFrom(textPromise) {
  if (navigator.clipboard && window.ClipboardItem && window.isSecureContext) {
    try {
      const blob = textPromise.then((t) => new Blob([t], { type: 'text/plain' }));
      await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
      return;
    } catch (e) {
      // fall through
    }
  }
  const text = await textPromise;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (e) {
      // fall through
    }
  }
  fallbackCopy(text);
}

document.querySelectorAll('.page-actions').forEach((bar) => {
  const menu = bar.querySelector('.page-actions__menu');
  const copyButton = bar.querySelector('[data-page-action="copy-markdown"]');
  let markdown = null;
  // Start downloading the Markdown as soon as the menu opens, so Copy is instant
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
  if (menu) menu.addEventListener('toggle', () => menu.open && loadMarkdown());

  bar.addEventListener('click', async (e) => {
    const el = e.target.closest('[data-page-action]');
    if (!el) return;
    const action = el.dataset.pageAction;
    if (action === 'open-menu') {
      if (!menu.open) track('open-menu');
      return;
    }
    track(action);
    if (action !== 'copy-markdown') {
      if (menu) menu.open = false;
      return;
    }
    const label = el.querySelector('strong');
    const original = label.textContent;
    try {
      await copyFrom(loadMarkdown());
      label.textContent = 'Copied to clipboard';
    } catch (err) {
      label.textContent = 'Could not copy, use View as Markdown';
    }
    setTimeout(() => {
      label.textContent = original;
      if (menu) menu.open = false;
    }, 1600);
  });

  // Close the menu on Escape or when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (menu && menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
});
