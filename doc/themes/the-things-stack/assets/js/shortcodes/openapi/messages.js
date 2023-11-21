
// Jump to the selected message.
function jumpToMessage() {
  // Get the option selected in the dropdown.
  const selected = document.getElementById("api-messages-selector").value
  if (selected == "Select a Message") {
    return
  }
  // Strip the leading `v3` from the selected.
  location.replace("#" + selected.replace("v3", "").toLowerCase())
}
