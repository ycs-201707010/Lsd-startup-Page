const pageBody = document.body;
const searchInput = document.querySelector("#search-area input");
const tgleColor = document.querySelector(".toggleColor");
const tgleClock = document.querySelector(".toggleClockMode");
const clock = document.getElementById("clock"); // 시계 div
const clockTime = clock.querySelector(".time"); // 시계의 시간부분 표기
const clockAmpm = clock.querySelector(".ampm"); // Am Pm 구분

function goFocus() {
  pageBody.classList.remove("help");
  tgleColor.style.visibility = "hidden";
  searchInput.style.display = "block";
  searchInput.focus();
  pageBody.classList.remove("def");
}

const commands = [
  {
    // Gmail
    category: "General",
    name: "Mail",
    key: "m",
    url: "https://gmail.com",
    search: "/#search/text={}",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "mail",
    quickLaunch: true,
  },
  {
    // Google drive
    category: "General",
    name: "Drive",
    key: "d",
    url: "https://drive.google.com",
    search: "/drive/search?q={}",
    color: "linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)",
    icon: "drive",
    quickLaunch: false,
  },
  {
    category: "General",
    name: "Slack",
    key: "sl",
    url: "https://slack.com",
    color: "#4A154B",
    icon: "slack",
    quickLaunch: false,
  },
  {
    category: "General",
    name: "WhatsApp",
    key: "w",
    url: "https://web.whatsapp.com",
    color: "linear-gradient(135deg, #25D366, #128C7E, #075E54)",
    icon: "whatsapp",
    quickLaunch: false,
  },
  {
    category: "General",
    name: "Discord",
    key: "dc",
    url: "https://discord.com/app",
    color: "#7289da",
    icon: "discord",
    quickLaunch: false,
  }, // end of General

  {
    category: "Programming",
    name: "GitHub",
    key: "g",
    url: "https://github.com",
    search: "/search?q={}",
    color: "linear-gradient(135deg, #2b2b2b, #3b3b3b)",
    icon: "github",
    quickLaunch: true,
  },
  {
    category: "Programming",
    name: "StackOverflow",
    key: "st",
    url: "https://stackoverflow.com",
    search: "/search?q={}",
    color: "linear-gradient(135deg, #53341C, #F48024)",
    icon: "stackoverflow",
    quickLaunch: true,
  },
  {
    category: "Programming",
    name: "HackerNews",
    key: "h",
    url: "https://news.ycombinator.com/",
    search: "/search?stories[query]={}",
    color: "linear-gradient(135deg, #FF6600, #DC5901)",
    icon: "hackernews",
    quickLaunch: true,
  },
  {
    category: "Programming",
    name: "MDN",
    key: "md",
    url: "https://developer.mozilla.org/en-US",
    search: "/search?q={}",
    color: "#212121",
    icon: "mdn",
    quickLaunch: false,
  },
  {
    category: "Programming",
    name: "DevDocs",
    key: "dd",
    url: "https://devdocs.io",
    color: "linear-gradient(135deg, #33373A, #484949)",
    icon: "devdocs",
    quickLaunch: false,
  }, // end of Programming

  {
    category: "Fun",
    name: "YouTube",
    key: "y",
    url: "https://youtube.com",
    search: "/results?search_query={}",
    color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
    icon: "youtube",
    quickLaunch: false,
  },
  {
    category: "Fun",
    name: "Reddit",
    key: "r",
    url: "https://reddit.com",
    search: "/search?q={}",
    color: "linear-gradient(135deg, #FF8456, #FF4500)",
    icon: "reddit",
    quickLaunch: false,
  },
  {
    category: "Fun",
    name: "Netflix",
    key: "n",
    url: "https://www.netflix.com",
    color: "linear-gradient(135deg, #E50914, #CB020C)",
    icon: "netflix",
    quickLaunch: false,
  },
  {
    category: "Fun",
    name: "Spotify",
    key: "s",
    url: "https://open.spotify.com/",
    search: "/search/{}",
    color: "#1dd35e",
    icon: "spotify",
    quickLaunch: false,
  },
  {
    category: "Fun",
    name: "Twitch",
    key: "tw",
    url: "https://www.twitch.tv",
    search: "/directory/game/{}",
    color: "linear-gradient(135deg, #6441a5, #4b367c)",
    icon: "twitch",
    quickLaunch: false,
  }, // end of Fun

  {
    category: "Other",
    name: "Twitter",
    key: "t",
    url: "https://www.twitter.com",
    search: "/search?q={}&src=typed_query",
    color: "linear-gradient(135deg, #1DA1F2, #19608F)",
    icon: "twitter",
    quickLaunch: true,
  },
  {
    category: "Other",
    name: "Instagram",
    key: "i",
    url: "https://www.instagram.com",
    color:
      "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
    icon: "instagram",
    quickLaunch: true,
  },
  {
    category: "Other",
    name: "LinkedIn",
    key: "l",
    url: "https://linkedin.com",
    search: "/search/results/all/?keywords={}",
    color: "linear-gradient(135deg, #006CA4, #0077B5)",
    icon: "linkedin",
    quickLaunch: true,
  },
  {
    category: "Other",
    name: "Notion",
    key: "ns",
    url: "https://www.notion.so",
    color: "linear-gradient(135deg, #FFF, #3F3F3F)",
    icon: "notion",
    quickLaunch: true,
  },
  {
    category: "Other",
    name: "Translate",
    key: "tr",
    url: "https://translate.google.com/",
    search: "/#view=home&op=translate&sl=auto&tl=en&text={}",
    color: "#1a73e8",
    icon: "translate",
    quickLaunch: false,
  }, // end of Other
];

/** 설정과 관련된 변수. (야간 / 주간 모드 등) */
let invertColor; // true = 야간모드, false : 주간모드

let mode24h; // true = 24시간 표기법, false = am, pm 표기법
