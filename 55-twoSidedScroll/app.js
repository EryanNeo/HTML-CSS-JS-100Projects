console.log('script added');

const sliderContainer=document.querySelector('.slider-container');
const right=document.querySelector('.right-side');
const left=document.querySelector('.left-side');
const upBtn=document.getElementById('up-btn');
const downBtn=document.getElementById('down-btn');
const sliderLength=right.querySelectorAll('div').length

// console.log(sliderContainer,right,left,upBtn,downBtn,sliderLength);

let active=0;
right.style.top=`-${(sliderLength-1)*100}vh`

upBtn.addEventListener('click',()=>nextSlide('down'));
downBtn.addEventListener('click',()=>nextSlide('up'));

function nextSlide(params){
    const sliderHeight=sliderContainer.clientHeight;
    if (params==='up'){
        active++;
        if(active>sliderLength-1){
            active=0;
        }
    }
    if (params==='down'){
        active--;
        if(active<0){
            active=sliderLength-1;
        }
    }
    right.style.transform=`translateY(${active*sliderHeight}px)`;
    left.style.transform=`translateY(-${active*sliderHeight}px)`;
}
