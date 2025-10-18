const userTime = document.querySelector(".user-time");

function updateTime() {
  const time = Date.now();
  userTime.textContent = time;

  requestAnimationFrame(updateTime);
}

updateTime();
