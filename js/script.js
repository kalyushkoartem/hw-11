const timer1 = document.querySelector("#timer1");
const start1 = document.querySelector("#start1");

let time1 = 60 * 60; 
let interval1;

start1.addEventListener("click", () => {
  start1.disabled = true;

  interval1 = setInterval(() => {
    time1--;

    const hours = Math.floor(time1 / 3600);
    const minutes = Math.floor((time1 % 3600) / 60);
    const seconds = time1 % 60;

    timer1.textContent =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;

    if (time1 === 30 * 60) {
      alert("Залишилося менше половини часу!");
    }

    if (time1 <= 0) {
      clearInterval(interval1);
      timer1.textContent = "Час вийшов!";
    }
  }, 1000);
});

const timer2 = document.querySelector("#timer2");
const start2 = document.querySelector("#start2");

let time2 = 30;
let interval2;

start2.addEventListener("click", () => {
  start2.disabled = true;

  interval2 = setInterval(() => {
    time2--;

    timer2.textContent =
      `00:${String(time2).padStart(2, "0")}`;

    if (time2 === 10) {
      timer2.style.transform = "scale(1.3)";
      timer2.style.transition = "0.3s";

      setTimeout(() => {
        timer2.style.transform = "scale(1)";
      }, 300);
    }

    if (time2 <= 0) {
      clearInterval(interval2);

      alert("Час закінчився!");

      start2.disabled = false;
      start2.textContent = "Почати знову";

      time2 = 30;
      timer2.textContent = "00:30";
    }
  }, 1000);
});