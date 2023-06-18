let categorySet;
const directEl = document.getElementById("directs");

/** 먼저 commands 배열에서 category 속성값만 빼서 다른 배열로 반환 */
function loadCategory() {
  categorySet = new Set();

  for (i in commands) {
    categorySet.add(commands[i].category);
  }
}

function buildAndAppendLists() {
  const categories = document.createElement("ul");
  categories.classList.add("categories");

  categorySet.forEach((category) => {
    categories.insertAdjacentHTML(
      "beforeend",
      `
      <li class="category">
        <h2 class="category-name">${category}</h2>
        <ul>${buildListItem(category)}</ul>
      </li>
      `
    );
  });

  directEl.appendChild(categories);
}

function buildListItem(currentCategory) {
  const itemList = commands
    .map(({ category, name, url, icon }, i) => {
      const iconEl = `<img src="assets/icons/${icon}.png" height="28px" style="fill : var(--foreground)" >`;

      if (category === currentCategory) {
        return `
        <style>
          .command-key-${i} {
            color: var(--foreground);
            background-color: var(--background);
            border: 4px solid var(--foreground);
          }
        </style>
        <li class="command">
          <a href="${url}" target="_self">
            <span class="command-key command-key-${i}">${iconEl}</span>
            <span class="command-name">${name}</span>
          </a>
        </li>
      `;
      }
    })
    .join("");

  return itemList;
}

/** 시계 부분을 클릭하면 나오는 바로가기 폴더를 생성하는 함수 */
function launchFolder() {
  loadCategory();

  buildAndAppendLists();

  // for (i in categoryArray) {
  //   const category = document.createElement("li");
  //   category.classList.add("category");

  //   const categoryName = document.createElement("h2");
  //   categoryName.classList.add("category-name");
  //   category.innerText = `${categoryArray[i]}`;
  // }
}

launchFolder();
