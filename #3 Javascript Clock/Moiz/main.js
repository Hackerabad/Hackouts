const hour=document.querySelector(".hour-hand");
const minute=document.querySelector(".minute-hand");
const second=document.querySelector(".second-hand");

function displaytime(){
    const time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds = time.getSeconds();
    const secondDeg = seconds / 60 * 360 +90;
    const minDeg = minutes/ 60 * 360 + 90;
    const hourDeg = hours/12 * 360 + 90;
    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    requestAnimationFrame(displaytime);
}
displaytime();