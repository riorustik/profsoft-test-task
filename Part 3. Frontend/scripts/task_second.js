const test_eng = document.querySelector(".bloсk-about__test-visible");
const test_rus = document.querySelector(".bloсk-about__test-hidden");
const blockTime = document.querySelector(".time");

document.querySelector(".bloсk-about__title").onclick = () => {
  test_eng.classList.toggle("bloсk-about__test-hidden");
  test_rus.classList.toggle("bloсk-about__test-visible");
  test_rus.classList.toggle("bloсk-about__test-hidden");
};

function time() {
  let now_time = new Date();
  let hours = now_time.getHours();
  let minutes = now_time.getMinutes();
  let seconds = now_time.getSeconds();
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  blockTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}
time();
setInterval(time, 60000);
