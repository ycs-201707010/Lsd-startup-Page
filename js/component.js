const pageBody = document.body;
const searchInput = document.querySelector("#search-area input");
const clock = document.getElementById("clock");

function goFocus() {
  searchInput.style.visibility = "visible";
  searchInput.focus();
}
