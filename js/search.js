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

/** 입력한 검색어 및 명령어에 따라 bg 색상 변환해주는 메서드 */
function inputAndBGChange(e) {
  if (searchInput.value === "" || e.key === "Escape") {
    return searchInput.blur();
  }

  const com = searchInput.value.substr(0, 3);

  if (com === "y" || com.startsWith("y:")) {
    pageBody.style.background = "var(--youtube)";
  } else if (com === "g" || com.startsWith("g:")) {
    pageBody.style.background = "var(--github)";
  } else if (com === "s" || com.startsWith("s:")) {
    pageBody.style.background = "var(--spotify)";
  } else if (com === "t" || com.startsWith("t:")) {
    pageBody.style.background = "var(--twitter)";
  } else if (com === "tw" || com.startsWith("tw:")) {
    pageBody.style.background = "var(--twitch)";
  } else if (com === "d" || com.startsWith("d:")) {
    pageBody.style.background = "var(--discord)";
  } else if (com === "n" || com.startsWith("n:")) {
    pageBody.style.background = "var(--netflix)";
  } else if (com === "na" || com.startsWith("na:")) {
    pageBody.style.background = "var(--naver)";
  }

  console.log(e.key, searchInput.value);

  // if (e.key === )
}

/** 사용자가 검색어 및 명령어를 입력하고 엔터를 치면 그 사이트로 이동시킴 */
function submitWord(e, value) {
  const full = value;

  // console.log(full);

  if (full.startsWith("y")) {
    return (location.href = "https://www.youtube.com/");
  } else if (full.startsWith("g")) {
  } else if (full.startsWith("s")) {
  } else if (full.startsWith("t") && !full.startWith("tw")) {
  } else if (full.startsWith("tw")) {
  } else if (full.startsWith("d")) {
  } else if (full.startsWith("n") && !full.startWith("na")) {
  } else if (full.startsWith("na")) {
  }
}

pageBody.addEventListener("keydown", allowOnly);
pageBody.addEventListener("keyup", inputAndBGChange);
searchInput.onfocus = () => {
  clock.style.display = "none";
};

searchInput.onblur = () => {
  console.log("potato");
  searchInput.value === "";
  pageBody.style.background = "var(--background)";
  searchInput.style.display = "none";
  clock.style.display = "block";
};

getClock();
setInterval(getClock, 1000);
