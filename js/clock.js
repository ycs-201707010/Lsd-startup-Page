/** 시계 */
function getClock() {
  const today = new Date();
  let hours, minutes, textIn12;
  if (mode24h === true) {
    // 24시간 표기법일 때.
    hours = String(today.getHours()).padStart(2, "0");
    minutes = String(today.getMinutes()).padStart(2, "0");
    textIn12 = "";
  } else {
    // am pm 표기법일 때.
    if (today.getHours() < 12) {
      hours = String(today.getHours()).padStart(2, "0");
      textIn12 = "am";
    } else if (today.getHours() === 12) {
      hours = String(today.getHours()).padStart(2, "0");
      textIn12 = "pm";
    } else {
      hours = String(today.getHours() - 12).padStart(2, "0");
      textIn12 = "pm";
    }
    minutes = String(today.getMinutes()).padStart(2, "0");
  }

  clockTime.innerText = `${hours} ${minutes}`;
  clockAmpm.innerText = textIn12;
}

/** 시계를 클릭할 시 시계를 숨기고 바로가기 모음 창 띄우기 */
function showCategories() {
  clock.style.display = "none";

  pageBody.classList.add("help");
}

/** 시계를 다시 표시하고 바로가기 모음 창은 숨기기 (Esc키 입력시 호출됨) */
function hideCategories() {
  clock.style.display = "block";

  pageBody.classList.remove("help");
}
