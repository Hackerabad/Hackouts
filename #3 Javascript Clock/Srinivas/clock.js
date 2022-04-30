const hour = document.querySelector(".hour-number");
const minute = document.querySelector(".minute-number");
const second = document.querySelector(".second-number");
displaytime();
function displaytime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hour.innerHTML = "0" + hours + " :";
  } else {
    hour.innerHTML = hours + " :";
  }
  if (minutes < 10) {
    minute.innerHTML = "0" + minutes + " :";
  } else {
    minute.innerHTML = minutes + " :";
  }
  second.innerHTML = seconds;
  requestAnimationFrame(displaytime);
}


