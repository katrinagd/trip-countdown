function tripCountdown(){
    const tripDate = new Date("March 15, 2024 00:00");
    const now = new Date();
    const diff = tripDate - now;

    const msInSecond = 1000; //ms = milliseconds in seconds 1000ms = 1s
    const msInMinute = msInSecond * 60; //ms = milliseconds in minutes 60000ms = 1min (60 * 1000)
    const msInHour = msInMinute * 60; //ms = milliseconds in hours 3600000ms = 1h (60 * 60 * 1000)
    const msInDay = msInHour * 24; //ms = milliseconds in days 86400000ms = 1day (60 * 60 * 24 * 1000)

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        happySkiing();
        console.log(timerID);
    }
}
let timerID = setInterval(tripCountdown, 1000);

function happySkiing(){
    const heading = document.querySelector('h1');
    heading.textContent = "Happy Skiing!";
    heading.className = "animate";
}

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');

// By default make pause button disabled
pauseButton.disabled = true;


playButton.addEventListener('click', () => {
    document.querySelector('#myAudio').play();
    pauseButton.disabled = false;
    playButton.disabled = true;
});


pauseButton.addEventListener('click', () => {
    document.querySelector('#myAudio').pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
});



