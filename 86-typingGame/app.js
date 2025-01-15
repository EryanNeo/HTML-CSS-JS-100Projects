console.log('script added');
const main = document.querySelector('.main');
const typingArea = document.querySelector('.typingArea');
const btn = document.querySelector('button');
// console.log(main, typingArea, btn);
const words = [
    'A day in the life of a Progammer',
    'What is JavaScript?',
    'What is React?',
    'What\'s your name?'
];
const game = {
    start: 0,
    end: 0,
    user: '',
    arrTxt: ''
};
btn.addEventListener('click', () => {
    if(btn.textContent === 'Start'){
        play();
        typingArea.value = '';
        typingArea.disabled = false;
    }
    else if(btn.textContent === 'Done'){
        typingArea.disabled = true;
        main.style.borderColor = 'white';
        end();
    }
})
function play(){
    let randTxt = Math.floor(Math.random() * words.length);
    main.textContent = words[randTxt];
    game.arrTxt = words[randTxt];
    main.style.borderColor = '#c8c8c8';
    btn.textContent = 'Done';
    const duration = new Date();
    game.start = duration.getTime();
}
function end(){
    const duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start) / 1000;
    game.user = typingArea.value;
    const correct = results();
    main.style.borderColor = 'white';
    main.innerHTML = `Time: ${totalTime}, Score: ${correct.score} out of ${correct.total}`;
    btn.textContent = 'Start';
}
function results(){
    let valueOne = game.arrTxt.split(' ');
    let valueTwo = game.user.split(' ');
    let score = 0;
    valueOne.forEach((word, idx) => {
        if(word === valueTwo[idx]){
            score++;
        }
    });
    return {score, total: valueOne.length};
}