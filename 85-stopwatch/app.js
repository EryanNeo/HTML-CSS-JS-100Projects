console.log('script added');
const INTERVAL_MS = 1000 / 60;
let timerId;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;
const timer = document.getElementById('timer');
const start = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');

function startTimer(){
    start.disabled = true;
    stopBtn.disabled = false;
    reset.disabled = false;
    lastTimerStartTime = Date.now();
    timerId = setInterval(updateTimer, INTERVAL_MS);
}
function stopTimer(){
    start.disabled = false;
    stopBtn.disabled = true;
    reset.disabled = false;
    millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
    clearInterval(timerId);
    timerId = null;
}
function resetTimer(){
    if(timerId){
        stopTimer();
    }
    start.disabled = false;
    stopBtn.disabled = true;
    reset.disabled = true;
    timer.textContent = '00:00:00';
    millisElapsedBeforeLastStart = 0;
}
function updateTimer(){
    const milliElapsed = Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
    const secElapsed = milliElapsed / 1000;
    const min = secElapsed / 60;
    const millisText = formatNumber(milliElapsed % 1000, 3);
    const secText = formatNumber(Math.floor(secElapsed % 60, 2));
    const minText = formatNumber(Math.floor(min, 2));
    timer.textContent = `${minText}:${secText}:${millisText}`;
}
function formatNumber(number, length){
    const stringNumber = String(number);
    if(stringNumber.length > length){
        return stringNumber.slice(0, length);
    }
    return stringNumber.padStart(length, '0');
}

start.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);