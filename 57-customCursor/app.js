console.log('script added');

const outer=document.querySelector('.outer-cursor');
const inner=document.querySelector('.inner-cursor');

document.addEventListener('mousemove',moveCursor);

function moveCursor(e){
    let x=e.clientX;
    let y=e.clientY;
    inner.style.left=`${x}px`;
    inner.style.top=`${y}px`;
    outer.style.left=`${x}px`;
    outer.style.top=`${y}px`;
}