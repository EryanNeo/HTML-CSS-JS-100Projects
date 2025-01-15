console.log('script added');
const game = {
    timer: 0,
    start: null
};
const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Press to Start';
document.body.prepend(message);

const box = document.createElement('div');
box.classList.add('box');
const output = document.querySelector('.output');
output.appendChild(box);
box.addEventListener('click', () => {
    box.textContent = '';
    box.style.display = 'none';
    game.timer = setTimeout(addBox, randomNubmer(3000));
    if(!game.start){
        message.textContent = 'Watch for element and click it';
    }
    else{
        const current = new Date().getTime();
        const duration = (current - game.start) / 1000;
        message.textContent = `It took ${duration} seconds to click.`;
    }
})

function randomNubmer(max){
    return Math.floor(Math.random() * max);
}
function addBox(){
    game.start = new Date().getTime();
    const container = output.getBoundingClientRect();
    const dim = [randomNubmer(50) + 20, randomNubmer(50) + 20];
    box.style.display = 'block';
    box.style.width = `${dim[0]}px`;
    box.style.height = `${dim[0]}px`;
    box.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
    box.style.left = randomNubmer(container.width - dim[0]) + 'px';
    box.style.top = randomNubmer(container.width - dim[1]) + 'px';
    box.style.borderRadius = randomNubmer(50) + '%';
}