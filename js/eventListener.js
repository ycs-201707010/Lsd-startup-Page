pageBody.addEventListener("keydown", keyDownMethod);
pageBody.addEventListener("keyup", keyUpMethod);
searchInput.onfocus = () => {
  clock.style.display = "none";
};

searchInput.onblur = () => {
  pageBody.style.background = "var(--background)";
  searchInput.value = "";
  clock.style.display = "block";
  searchInput.style.display = "none";
  toggleBtn.style.visibility = "visible";
  //console.log("value : ", searchInput.value);
};

clock.addEventListener("click", showCategories);

toggleBtn.addEventListener("click", () => {
  console.log("potato");
  invertColor = !invertColor;

  if (invertColor === true) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
});
