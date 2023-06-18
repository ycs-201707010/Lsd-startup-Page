/** 초기화면에서 문자 및 숫자 그리고 알트키를 눌렀을 때만 input 활성화 하게끔.. */
function keyDownMethod(e) {
  if (e.key === "HangulMode") {
    goFocus();
  } else {
    const expression = `abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-=_+[]{};':",.<>/?|\`\\`;
    const myinput = e.key.toLowerCase();

    // console.log(myinput);
    const a = expression.indexOf(myinput);

    if (a === -1) {
      e.keyCode = 0;
    } else {
      goFocus();
    }
  }
}

/** 입력한 명령어에 따라 배경색을 변경 */
function inputToBgChange(e) {
  const lowValue = searchInput.value.toLowerCase();
  const com = lowValue.substr(0, 3);
  let pageKey, pageColor;

  for (k in commands) {
    pageKey = commands[k].key;
    pageColor = commands[k].color;

    if (
      com === pageKey ||
      (com.startsWith(`${pageKey}:`) && commands[k].search !== undefined)
    ) {
      pageBody.style.background = pageColor;
      break;
    } else {
      pageBody.style.background = "var(--background)";
    }
  }
}

/** 사용자가 검색어 및 명령어를 입력하고 엔터를 치면 그 사이트로 이동시킴 */
function submitWord(value) {
  let key, main, search, final;
  const valueArray = value.split(":");

  console.log(value);

  for (k in commands) {
    key = commands[k].key;

    if (valueArray[0] === key) {
      if (valueArray[1] !== undefined && commands[k].search !== undefined) {
        main = commands[k].url;
        search = commands[k].search.replace("{}", valueArray[1]);

        final = main + search;
      } else {
        if (value === key) {
          main = commands[k].url;
        } else {
          // google search
          main = `https://www.google.com/search?q=${value}`;
        }
        final = main;
      }

      break;
    } else {
      // google search
      final = `https://www.google.com/search?q=${value}`;
    }
  }

  window.open(final, "_self");
}

/** 입력한 검색어 및 명령어에 따라 bg 색상 변환해주는 메서드 */
function keyUpMethod(e) {
  inputToBgChange(e);

  //console.log(e.key, searchInput.value);

  if (e.key === "Escape") {
    return searchInput.blur();
  }

  if (e.key === "Enter") {
    const lowValue = searchInput.value.toLowerCase();

    return submitWord(lowValue);
  }
}

// pageBody.addEventListener("keydown", keyDownMethod);
// pageBody.addEventListener("keyup", keyUpMethod);
// searchInput.onfocus = () => {
//   clock.style.display = "none";
// };

// searchInput.onblur = () => {
//   //console.log("potato");
//   pageBody.style.background = "var(--background)";
//   searchInput.value = "";
//   clock.style.display = "block";
//   searchInput.style.visibility = "hidden";
//   //console.log("value : ", searchInput.value);
// };

// getClock();
// setInterval(getClock, 1000);
