/**
 * Countdown v1
 * @param {string} endDate the end time write by this format => "Jan 10, 2022 23:59:59"
 * @returns days, hours, min, sec
 */
const Countdown = (endDate, ifTimeEnd) => {
  let countdown = new Date(endDate).getTime();
  let now = new Date().getTime();
  let dateDiff = countdown - now;
  let isEnd = false;

  if (dateDiff <= 0) {
    isEnd = true;
  }
  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    min,
    sec,
    isEnd,
  };
};

export default Countdown;
