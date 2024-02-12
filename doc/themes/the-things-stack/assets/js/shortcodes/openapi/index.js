
const apiTagSummary = document.getElementsByClassName("api-tag-summary")
const apiItemSummary = document.getElementsByClassName("api-item-summary")

// Onload
window.onload = function() {
// Jump to location in hash.
  if (location.hash) {
    location.replace(location.hash)
    // Compensate for the fixed header.
    window.scrollTo(window.scrollX, window.scrollY - 125);
  }
}

function collapseAll() {
  // Collapse all API Tags.
  if (apiTagSummary?.length > 0) {
    for (var i = 0; i < apiTagSummary.length; i++) {
      apiTagSummary[i].classList.remove("active")
      const content = apiTagSummary[i].nextElementSibling
      content.style.display = "none"
      // Toggle the icon.
      const explandIcon = apiTagSummary[i].getElementsByClassName("api-tag-summary-icon-expand")[0]
      const collapseIcon = apiTagSummary[i].getElementsByClassName("api-tag-summary-icon-collapse")[0]
      explandIcon.style.display = "block"
      collapseIcon.style.display = "none"
    }
  }

  // Collapse all API Items.
  if (apiItemSummary?.length > 0) {
    for (var i = 0; i < apiItemSummary.length; i++) {
      apiItemSummary[i].classList.remove("active")
      const content = apiItemSummary[i].nextElementSibling
      content.style.display = "none"
      // Toggle the icon.
      const explandIcon = apiItemSummary[i].getElementsByClassName("api-item-summary-icon-expand")[0]
      const collapseIcon = apiItemSummary[i].getElementsByClassName("api-item-summary-icon-collapse")[0]
      explandIcon.style.display = "block"
      collapseIcon.style.display = "none"
    }
  }
}

// Expand/Collapse Individual API Tags.
if (apiTagSummary?.length > 0) {
  for (var i = 0; i < apiTagSummary.length; i++) {
    apiTagSummary[i].addEventListener("click", function() {
      this.classList.toggle("active")
      const content = this.nextElementSibling
      if (content.style.display === "flex") {
        content.style.display = "none"
      } else {
        content.style.display = "flex"
      }

    // Toggle the icon.
    const explandIcon = this.getElementsByClassName("api-tag-summary-icon-expand")[0]
    const collapseIcon = this.getElementsByClassName("api-tag-summary-icon-collapse")[0]
    if (explandIcon.style.display === "none") {
      explandIcon.style.display = "block"
      collapseIcon.style.display = "none"
    } else {
      explandIcon.style.display = "none"
      collapseIcon.style.display = "block"
    }
    })
  }
}

// Expand/Collapse Individual API Items.
if (apiItemSummary?.length > 0) {
  for (var i = 0; i < apiItemSummary.length; i++) {
    apiItemSummary[i].addEventListener("click", function() {
      this.classList.toggle("active")
      const content = this.nextElementSibling
      if (content.style.display === "flex") {
        content.style.display = "none"
      } else {
        content.style.display = "flex"
      }

    // Toggle the icon.
    const explandIcon = this.getElementsByClassName("api-item-summary-icon-expand")[0]
    const collapseIcon = this.getElementsByClassName("api-item-summary-icon-collapse")[0]
    if (explandIcon.style.display === "none") {
      explandIcon.style.display = "block"
      collapseIcon.style.display = "none"
    } else {
      explandIcon.style.display = "none"
      collapseIcon.style.display = "block"
    }
    })
  }
}
