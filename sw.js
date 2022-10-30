let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timer = document.getElementsByClassName("timer");

let poused;
let secound = 0, hours = 0, minit = 0;

function handler() {
    secound++;

    timer[2].innerHTML = secound;
    timer[2].innerHTML = timer[2].innerHTML.padStart(2, "0");

    timer[1].innerHTML = minit;
    timer[1].innerHTML = timer[1].innerHTML.padStart(2, "0");

    timer[0].innerHTML = hours;
    timer[0].innerHTML = timer[0].innerHTML.padStart(2, "0");

    if (secound == 60) {
        secound=0;
        minit++;
    };
    if(minit== 60){
        minit = 0;
        hours++;
    };
}
function delaye(){
    secound=0;
}
startBtn.addEventListener("click", function() {
    poused = setInterval(handler, 1000);
    startBtn.style.border="1px solid green"
    stopBtn.style.border="none"
    resetBtn.style.border="none"
  
});

stopBtn.addEventListener("click", () => {
  clearInterval(poused);

  startBtn.style.border="none"
  stopBtn.style.border="1px solid #0087c5"
  resetBtn.style.border="none"
});

resetBtn.addEventListener('click' , () =>{
    clearInterval(poused);
    secound = 0 
    minit = 0
    hours = 0
    for(let x of timer){
        x.innerHTML="00"
    }
    startBtn.style.border="none"
    stopBtn.style.border="none"
    resetBtn.style.border="1px solid orange"
})

window.addEventListener("click" , function(event){
    if(event.target.nodeName !== 'BUTTON'){
        startBtn.style.border="none"
        stopBtn.style.border="none"
        resetBtn.style.border="none"
    }
})