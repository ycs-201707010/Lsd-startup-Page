const pageBody = document.body;
const clockObj = document.getElementById("clock");
const searchForm = document.querySelector(".search");
const searchInput = searchForm.querySelector("#search-area input");

function showWord() {
  searchInput.focus();
  console.log(searchInput.innerText);
}

pageBody.addEventListener("keypress", showWord);
