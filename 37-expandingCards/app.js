console.log('script added');

const slides=document.querySelectorAll('.slide');
slides.forEach((slide)=>{
    slide.addEventListener('click',()=>{
        removeActives();
        slide.classList.add('active');
    })
})
function removeActives(){
    slides.forEach((slide)=>slide.classList.remove('active'));
}