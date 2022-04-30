const hrs = document.querySelector(".hour-display .number");
const mins = document.querySelector(".minute-display .number");
const secs = document.querySelector(".second-display .number");
var n = 20;
function displayTime() {
  const time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
  if (hour < 10) {
    hrs.innerHTML = `0${hour} :`;
  } else {
    hrs.innerHTML = `${hour} :`;
  }
  if (minute < 10) {
    mins.innerHTML = `0${minute} :`;
  } else {
    mins.innerHTML = `${minute} :`;
  }
  //   setInterval(() => {
  //     if (second != temp) {
  //       n = n - 1;
  //       secs.innerHTML = `${n}`;
  //     }
  //   }, 10);
  if (second < 10) secs.innerHTML = `0${second}`;
  else secs.innerHTML = `${second}`;
  requestAnimationFrame(displayTime); //provides time interval with 60frames per second
  var temp = second;
}
displayTime();
