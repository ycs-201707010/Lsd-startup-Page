const pageBody = document.body;
const searchInput = document.querySelector("#search-area input");
const clock = document.getElementById("clock");

function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} ${minutes}`;
}

pageBody.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    return searchInput.blur();
  }

  searchInput.style.display = "block";
  searchInput.focus();
});

searchInput.onfocus = () => {
  clock.style.display = "none";
};

searchInput.onblur = () => {
  searchInput.value = "";
  searchInput.style.display = "none";
  clock.style.display = "block";
};

getClock();
setInterval(getClock, 1000);
