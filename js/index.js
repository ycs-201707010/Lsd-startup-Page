/** 초기화면에서 문자 및 숫자 그리고 알트키를 눌렀을 때만 input 활성화 하게끔.. */
function keyDownMethod(e) {
  if (e.key === "HangulMode") {
    goFocus();
  } else {
    const expression = `abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-=_+[]{};':",.<>/?|\`\\`;
    const myinput = e.key.toLowerCase();

    console.log(myinput);
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
  } else {
    pageBody.style.background = "var(--background)";
  }
}

/** 사용자가 검색어 및 명령어를 입력하고 엔터를 치면 그 사이트로 이동시킴 */
function submitWord(value) {
  let url;
  const valueArray = value.split(":");

  // console.log(full);

  if (valueArray[0] === "y") {
    // youtube
    if (valueArray[1] !== undefined) {
      url = `https://www.youtube.com/results?search_query=${valueArray[1]}`;
    } else {
      url = "https://www.youtube.com/";
    }
  } else if (valueArray[0] === "g") {
    // github
    if (valueArray[1] !== undefined) {
      url = `https://github.com/search?q=${valueArray[1]}`;
    } else {
      url = "https://github.com/";
    }
  } else if (valueArray[0] === "s") {
    // spotify
    if (valueArray[1] !== undefined) {
      url = `https://open.spotify.com/search/${valueArray[1]}`;
    } else {
      url = "https://open.spotify.com/";
    }
  } else if (valueArray[0] === "t") {
    // twitter
    if (valueArray[1] !== undefined) {
      url = `https://twitter.com/search?q=${valueArray[1]}&src=recent_search_click&f=live`;
    } else {
      url = "https://twitter.com/";
    }
  } else if (valueArray[0] === "tw") {
    // twitchTV
    if (valueArray[1] !== undefined) {
      url = `https://www.twitch.tv/directory/game/${valueArray[1]}`;
    } else {
      url = "https://www.twitch.tv/";
    }
  } else if (valueArray[0] === "d") {
    // Discord
    url = "https://discord.com/app";
  } else if (valueArray[0] === "n") {
    // netflix
    url = "https://www.netflix.com/";
  } else if (valueArray[0] === "na") {
    // naver
    if (valueArray[1] !== undefined) {
      url = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${valueArray[1]}`;
    } else {
      url = "https://www.naver.com/";
    }
  } else {
    // google search
    url = `https://www.google.com/search?q=${valueArray[0]}`;
  }

  window.open(url, "_self");
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

pageBody.addEventListener("keydown", keyDownMethod);
pageBody.addEventListener("keyup", keyUpMethod);
searchInput.onfocus = () => {
  clock.style.display = "none";
};

searchInput.onblur = () => {
  //console.log("potato");
  pageBody.style.background = "var(--background)";
  searchInput.value = "";
  clock.style.display = "block";
  searchInput.style.visibility = "hidden";
  //console.log("value : ", searchInput.value);
};

getClock();
setInterval(getClock, 1000);
