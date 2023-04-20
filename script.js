const contentMinutes = document.querySelector('.minutes');
const contentSeconds = document.querySelector('.seconds')
const contentMilliseconds = document.querySelector('.milliseconds')
const btnStart = document.querySelector('.btnstart');
const btnPause = document.querySelector('.btnpause');
const btnResume = document.querySelector('.btnresume');
const btnReset = document.querySelector('.btnreset');



let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

btnStart.addEventListener('click', startInterval);
btnPause.addEventListener('click', pauseInterval);
btnResume.addEventListener('click', resumeInterval);
btnReset.addEventListener('click', resetInterval);

function startInterval() {
    interval = setInterval(() =>{
        if(!isPaused) {
            milliseconds = milliseconds + 10;

            if(milliseconds === 1000) {
               seconds++;
               milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            contentMinutes.textContent = formatTime(minutes);
            contentSeconds.textContent = formatTime(seconds);
            contentMilliseconds.textContent = formatMilliseconds(milliseconds);
        }
    }, 10)
    btnStart.style.display = 'none';
    btnPause.style.display = 'block';
}

function pauseInterval() {
    isPaused = true;
    btnPause.style.display = 'none';
    btnResume.style.display = 'block';
}


function resumeInterval() {
    isPaused = false;
    btnPause.style.display = 'block';
    btnResume.style.display = 'none';
}

function resetInterval() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    contentMinutes.textContent = "00";
    contentSeconds.textContent = "00";
    contentMilliseconds.textContent = "000";

    btnStart.style.display = 'block';
    btnPause.style.display = 'none';
    btnResume.style.display = 'none';
    
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}





