const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

updateTime();
setInterval(updateTime,1000);


function updateTime(){
   let date = new Date();
   minuteHand.style.setProperty("--rotation", date.getMinutes()*6);
   hourHand.style.setProperty("--rotation",date.getMinutes() + date.getHours()*30);
   secondHand.style.setProperty("--rotation", date.getSeconds()*6);
}