console.log('script added');

const body=document.body;
const imgs=document.querySelectorAll('.img');
const arrowBtn=document.querySelectorAll('.arrow-btn');

let activeImg=0;
function activeImages(){
    imgs.forEach(img=>{
        img.classList.remove('active');
        img.classList.remove('animateTransition');
    });
    imgs[activeImg].classList.add('active');
    imgs[activeImg].classList.add('animateTransition');
}
function setImageAsBackground(){
    body.style.backgroundImage=imgs[activeImg].style.backgroundImage;
}

setImageAsBackground();
arrowBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('right-arrow')){
            // console.log('right');
            activeImg++;
            if(activeImg>imgs.length-1){
                activeImg=0;
            }
        }
        else{
            // console.log('left');
            activeImg--;
            if(activeImg<0){
                activeImg=imgs.length-1;
            }
        }
        setImageAsBackground();
        activeImages();
        // console.log(activeImg);
    })
})