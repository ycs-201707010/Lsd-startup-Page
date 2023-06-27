/** 시계 */
function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} ${minutes}`;
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
