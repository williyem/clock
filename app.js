const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");


setInterval(updateTime,1000);


function updateTime(){
   let date = new Date();
   secondHand.style.setProperty("--rotation", date.getSeconds()*6 +"deg");
   minuteHand.style.setProperty("--rotation", date.getMinutes()*6+"deg");
   hourHand.style.setProperty("--rotation",date.getMinutes() + date.getHours()*30+"deg");
}
    

