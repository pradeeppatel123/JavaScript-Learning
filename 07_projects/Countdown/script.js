const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const Demo = document.getElementById("demo");

// Getting formated date from date string
let deadline = new Date("feb 25, 2024 21:49:25").getTime();

let x = setInterval(() => {
  // getting current time and date
  let now = new Date().getTime();

  // calculating difference
  let t = deadline - now;

  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;

  if (t < 0) {
    clearInterval(x);
    Days.innerHTML = "0";
    Hours.innerHTML = "0";
    Minutes.innerHTML = "0";
    Seconds.innerHTML = "0";
    Demo.innerHTML = "TIME UP";
  }
}, 1000);
