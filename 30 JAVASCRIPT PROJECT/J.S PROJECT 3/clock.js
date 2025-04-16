let hours = 0,
  minutes = 0,
  second = 0;
let timer = null;

const display = document.getElementById("display");
function updaetdisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = second < 10 ? "0" + second : second;
  display.textContent = `${h}:${m}:${s}`;
}

function starttime() {
  if (timer) return;

  timer =setInterval(()=>{
    second++
    if(second==60){
      second=0;
      minutes++
    }
    if(minutes==60)
    {
      minutes=0
      hours++
    }
    updaetdisplay();
  },1000)
}

function stoptimer(){
  clearInterval(timer);
  timer=null
}


function resettimer(){
  stoptimer();
  hours=minutes=second=0;
  updaetdisplay()
}

document.getElementById("start").addEventListener("click", starttime);
document.getElementById("stop").addEventListener("click", stoptimer);
document.getElementById("reset").addEventListener("click", resettimer);