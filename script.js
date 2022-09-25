const hrs = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const milisec = document.querySelector(".miliseconds");

const btns = document.querySelector(".stopWatch__btns");
const laps = document.querySelector(".stopWatch__lap-wripper");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const lap = document.querySelector(".lapb");
const stop = document.querySelector(".reset");
let count = 0;

pause.remove()
lap.disabled = true;
stop.disabled = true;

start.addEventListener("click", (event) => {
   let ms = milisec.innerHTML;
   let s = sec.innerHTML;
   let m = min.innerHTML;
   let h = hrs.innerHTML;
   let timeId = setInterval(time, 100);

   function time() {
      ms++;
      if (ms > 9) {
         ms = 0;
         s++;
      }
      if (s > 59) {
         s = 0;
         m++;
      }
      if (m > 59) {
         m = 0;
         h++;
      }

      milisec.innerHTML = ms;
      sec.innerHTML = s;
      min.innerHTML = m;
      hrs.innerHTML = h;

   }

      stop.disabled = false;
      lap.disabled = false;
      start.remove();
      btns.prepend(pause);

      pause.addEventListener("click", (event) =>  {
         clearInterval(timeId);
         lap.disabled = true;
         btns.prepend(start);
         pause.remove();
         start.innerHTML = 'Продолжить';
         
      })

      lap.addEventListener("click", (event) => {
         let newLap = document.createElement("div");
         newLap.classList.add("lap")
         newLap.innerHTML = `${hrs.innerHTML}:${min.innerHTML}:${sec.innerHTML}:${milisec.innerHTML}`;
         laps.append(newLap)
      })

      stop.addEventListener("click", (event) => {
         clearInterval(timeId);
         setToNull();
         lap.disabled = true;
         pause.remove();
         start.innerHTML = "Старт";
         btns.prepend(start);
         
      })

})




function setToNull() {
   milisec.innerHTML = "0";
   sec.innerHTML = "00";
   min.innerHTML = "00";
   hrs.innerHTML = "00";
}