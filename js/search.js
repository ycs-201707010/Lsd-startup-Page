const pageBody = document.body;
const searchInput = document.querySelector("#search-area input");
const clock = document.getElementById("clock");

/** 시계 */
function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} ${minutes}`;
}

/** 알파벳이랑 숫자만 처음에 입력받게끔.. */
function allowOnly(e) {
  if (e.key === "Escape") {
    return searchInput.blur();
  }

  const expression = `abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-=_+[]{};':",.<>/?|\`\\`;
  const myinput = e.key.toLowerCase();

  const a = expression.indexOf(myinput);

  if (a === -1) {
    e.keyCode = 0;
  } else {
    searchInput.style.display = "block";
    searchInput.focus();
  }
}

pageBody.addEventListener("keydown", allowOnly);

/** */
function inputAndBGChange(e) {
  if (searchInput.value === "") {
    return searchInput.blur();
  }

  // const c1 = searchInput.value.length;

  // if (c1 <= 3) {
  // }
}

pageBody.addEventListener("keyup", inputAndBGChange);

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
