const clock = document.querySelector(".time");
const date = document.  querySelector(".date");

function handleClock(){
const time = new Date();
const localTime = time.toLocaleTimeString();
const localDate = time.toLocaleDateString();

date.innerHTML = localDate;
clock.innerHTML = localTime;
};

handleClock();
setInterval(handleClock, 1000);

