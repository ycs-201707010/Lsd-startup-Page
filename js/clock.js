const clock = document.getElementById("clock");

function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} ${minutes}`;
}

getClock();
setInterval(getClock, 1000);
