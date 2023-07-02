pageBody.addEventListener("keydown", keyDownMethod);
pageBody.addEventListener("keyup", keyUpMethod);
searchInput.onfocus = () => {
  clock.style.display = "none";
};

searchInput.onblur = async () => {
  await (pageBody.style.background = "var(--background)");
  searchInput.value = "";
  clock.style.display = "block";
  searchInput.style.display = "none";
  toggleBtn.style.visibility = "visible";
  pageBody.classList.add("def");
  //console.log("value : ", searchInput.value);
};

clock.addEventListener("click", showCategories);

tgleColor.addEventListener("click", () => {
  invertColor = !invertColor;

  if (invertColor === true) {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
  }
});

/** 시계 표시모드(24시, AMPM) 전환 (우측 상단 버튼 클릭시 작동하는 메서드) */
tgleClock.addEventListener("click", () => {
  mode24h = !mode24h;
  let btntxt;

  if (mode24h === true) {
    localStorage.setItem("clock-mode", "mode_24");
    btntxt = "12";
  } else {
    localStorage.setItem("clock-mode", "mode_ampm");
    btntxt = "24";
  }

  tgleClock.innerText = btntxt;
  getClock();
});
