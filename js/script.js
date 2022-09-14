let hourHand = document.getElementById("HH-hand")
let minuteHand = document.getElementById("MM-hand")
let secondHand = document.getElementById("SS-hand")


function addZiro(e){
  return e < 10 ? `0${e}` : e
}

function hourNumbers() { 
  
  const dateNow = new Date();
  let DD = dateNow.getDay();
  let HH = dateNow.getHours();
  let MM = dateNow.getMinutes();
  let SS = dateNow.getSeconds();

  //get days name
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayName = days[DD];

  document.getElementById("DD").innerHTML = dayName
  document.getElementById("HH").innerHTML = `${addZiro(HH)}`
  document.getElementById("MM").innerHTML = `${addZiro(MM)}`;
  document.getElementById("SS").innerHTML = `${addZiro(SS)}`;
}
setInterval(hourNumbers,1000)

function fixClock(){

  const dateNow = new Date();
  let hour = dateNow.getHours() * 30;
  let min = dateNow.getMinutes() * 6;
  let sec = dateNow.getSeconds() * 6;

  hourHand.style.transform = `rotate(${hour}deg) translate(-50%,-80%)`
  minuteHand.style.transform = `rotate(${min}deg) translate(-50%,-80%)`
  secondHand.style.transform = `rotate(${sec}deg) translate(-50%,-80%)`
}
setInterval(fixClock, 1000);
