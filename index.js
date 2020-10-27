const finishedObj = {
  text: "a",
  id: 1
};
console.log(finishedObj.text);

const show = document.getElementById("clock");

function getTime() {
  const Today = new Date();
  const Chrismas = new Date(2020, 12 - 1, 25);
  const diffMillisec = Chrismas.getTime() - Today.getTime();
  const totalLeft = {
    day: Math.floor(diffMillisec / 1000 / 60 / 60 / 24),
    hours: Math.floor((diffMillisec / 1000 / 60 / 60) % 24),
    minutes: Math.floor((diffMillisec / 1000 / 60) % 60),
    seconds: Math.floor((diffMillisec / 1000) % 60)
  };
  show.innerText = `${totalLeft.day}d ${totalLeft.hours}h ${totalLeft.minutes}m ${totalLeft.seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
