// Copyright © 2019 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function addNavBarBurgers(){
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  $navbarBurgers.forEach(function(el) {
    var $target = document.getElementById(el.dataset.target)
    if (!$target) return

    function setOpen (open) {
      el.classList.toggle('is-active', open)
      $target.classList.toggle('is-active', open)
      // The page behind the open menu does not scroll
      document.documentElement.classList.toggle('is-clipped', open)
      el.setAttribute('aria-expanded', open ? 'true' : 'false')
      el.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    }

    el.addEventListener('click', function() {
      setOpen(!el.classList.contains('is-active'))
    })
    // Close when keyboard focus moves out of the navigation (e.g. Tab past the
    // last link), so focus never goes to content hidden behind the open menu
    document.addEventListener('focusin', function(e) {
      if (el.classList.contains('is-active') && !el.closest('.navbar').contains(e.target)) {
        setOpen(false)
      }
    })
    // Escape closes the menu and returns focus to the menu button
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && el.classList.contains('is-active')) {
        setOpen(false)
        el.focus()
      }
    })
    // Close when the window grows past the mobile layout
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function(e) {
      if (e.matches) setOpen(false)
    })
  })
}

function initializeTabsAndAnchors () {
  var anchorTable = {}

  function createAnchorTable(element) {
    const tabContainer = element.closest('.tab-content')
    if(tabContainer) {
      const tab = element.parentElement
      const tabName = tab.getAttribute('data-content')
      anchorTable[element.id] = tabName
    }
  }

  function addAnchor(element) {
    element.insertAdjacentHTML('beforeend',
    `<a class="header-hash" href="#${element.id}" aria-label="Link to this section">#</a>` )
  }

  function addAnchors() {
    var headers = document.querySelectorAll(
      '.docs-content h2[id], .docs-content h3[id], .docs-content h4[id], .docs-content h5[id], .docs-content h6[id]')
      if (headers) {
          headers.forEach(addAnchor)
          headers.forEach(createAnchorTable)
      }
  }

  function hashChanged() {
    const hash = window.location.hash
    const id = window.location.hash.substring(1)
    const key = anchorTable[id]
    toggleTab(key)
    document.getElementById(id).scrollIntoView()
  }

  function addOnHashChange () {
    if ('onhashchange' in window) { // event supported?
      window.onhashchange = function () {
        hashChanged(window.location.hash);
      }
    }
    else { // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                hashChanged(storedHash);
            }
        }, 1000);
    }
  }

  function toggleTab(key) {
    const activeClass = 'is-active'

    function getTabsByKey(key) {
      return [...document.querySelectorAll(`[data-tab="${key}"]`)]
    }

    let activeTabs = getTabsByKey(key)

    if (activeTabs.length === 0) return false

    tabs.forEach(tab => {
      if (tab && tab.classList.contains(activeClass)) {
        tab.classList.remove(activeClass)
      }
    })
    activeTabs.forEach(tab => {
      tab.classList.add(activeClass)
    })
    tabContent.forEach(item => {
      if (item && item.classList.contains(activeClass)) {
        item.classList.remove(activeClass)
      }
      let data = item.getAttribute('data-content')
      if (data === key) {
        item.classList.add(activeClass)
      }
    })
    if (window.sessionStorage) {
      window.sessionStorage.setItem('tabActive', key)
    }

    return true
  }

  const tabs = document.querySelectorAll('.tabs li')
  const tabContent = document.querySelectorAll('.tab-content section')

  function addTabs(){

    if(tabs.length===0) return

    function handleClick(event) {
      event.preventDefault()
      let tab = event.currentTarget
      let key = tab.getAttribute('data-tab')
      toggleTab(key)
    }

    if (window.sessionStorage.getItem('tabActive')) {
      const success = toggleTab(window.sessionStorage.getItem('tabActive'))
      if (success === false) {
        let key = tabs[0].getAttribute('data-tab')
        toggleTab(key)
      }
    } else if (tabs && tabs[0]) {
      let key = tabs[0].getAttribute('data-tab')
      toggleTab(key)
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', handleClick)
    })

  }

  addAnchors()
  addTabs()
  addOnHashChange()

}

function addLightboxHandler() {
  document.querySelectorAll('figure').forEach(fig => {
    fig.addEventListener('click', event => {
      basicLightbox.create(`<img src="${event.target.src}" alt="${event.target.alt}" />`).show()
    })
  })
}

// Navigation group dropdowns (disclosure pattern): click or Enter/Space to
// toggle, Escape or a click outside to close.
function initializeNavGroups () {
  var groups = Array.prototype.slice.call(document.querySelectorAll('.nav-group'))
  function close (group, focusToggle) {
    var toggle = group.querySelector('.nav-group__toggle')
    group.classList.remove('is-active')
    toggle.setAttribute('aria-expanded', 'false')
    if (focusToggle) toggle.focus()
  }
  groups.forEach(function (group) {
    var toggle = group.querySelector('.nav-group__toggle')
    toggle.addEventListener('click', function () {
      var open = !group.classList.contains('is-active')
      groups.forEach(function (g) { close(g, false) })
      if (open) {
        group.classList.add('is-active')
        toggle.setAttribute('aria-expanded', 'true')
      }
    })
    group.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && group.classList.contains('is-active')) close(group, true)
    })
    group.addEventListener('focusout', function (e) {
      if (e.relatedTarget && !group.contains(e.relatedTarget)) close(group, false)
    })
  })
  document.addEventListener('click', function (e) {
    groups.forEach(function (g) { if (!g.contains(e.target)) close(g, false) })
  })
}

// Horizontally scrollable tables and tab bars must be reachable by keyboard.
// Checked again whenever a region changes size: tables inside hidden tabs only
// get dimensions when revealed, and the viewport width can change.
function makeScrollableRegionsFocusable () {
  function update (el) {
    const scrollable = el.scrollWidth > el.clientWidth
    if (scrollable && !el.hasAttribute('tabindex')) {
      // Keep native table semantics; only add focusability and a name.
      el.setAttribute('tabindex', '0')
      el.dataset.scrollFocus = 'true'
      if (el.tagName === 'TABLE' && !el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', 'Scrollable table')
        el.dataset.scrollLabel = 'true'
      }
    } else if (!scrollable && el.dataset.scrollFocus) {
      // Only undo what was added here
      el.removeAttribute('tabindex')
      delete el.dataset.scrollFocus
      if (el.dataset.scrollLabel) {
        el.removeAttribute('aria-label')
        delete el.dataset.scrollLabel
      }
    }
  }
  const regions = document.querySelectorAll('.content table, .tabs')
  regions.forEach(update)
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) { update(entry.target) })
    })
    regions.forEach(function (el) { observer.observe(el) })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  addNavBarBurgers()
  initializeNavGroups()
  makeScrollableRegionsFocusable()
  initializeTabsAndAnchors()
  addLightboxHandler()
})
