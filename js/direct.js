function launchFolder() {
  let categorySet = new Set();

  for (i in commands) {
    categorySet.add(commands[i].category);
  }

  console.log(categorySet);
}

/** 시계 부분을 클릭하면 나오는 바로가기 폴더를 생성하는 함수 */
function paintFolder() {
  const categories = document.createElement("ul");
  categories.classList.add("categories");

  const category = document.createElement("li");
  category.classList.add("category");

  //   for (i in commands) {
  //   }
}

launchFolder();
