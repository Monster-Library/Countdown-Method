import Countdown from "./Countdown.js";

const counDown = setInterval(() => {
  const { days, hours, min, sec, isEnd } = Countdown("Jan 7, 2022 7:37:55");
  // if this countdown is end
  if (isEnd) {
    clearInterval(counDown);
    parent.innerHTML = `The Time Is Finshed`.toUpperCase();
  }
  // if coundown isn't end
  else {
    parent.innerHTML = `${days < 10 ? `0${days}` : days}:${
      hours < 10 ? `0${hours}` : hours
    }:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  }
}, 1000);

const parent = document.querySelector("#root");
