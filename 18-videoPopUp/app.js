console.log('script added');

const btn=document.querySelector('.btn');
const trailerContainer=document.querySelector('.trailer-container');
const closeIcon=document.querySelector('.close-icon');
const video=document.querySelector('video');

// console.log(btn,trailerContainer,closeIcon,video);
btn.addEventListener('click',()=>{
    trailerContainer.classList.remove('active');
    video.setAttribute('autoplay','True');
})
closeIcon.addEventListener('click',()=>{
    trailerContainer.classList.add('active');
    video.pause();
    video.currentTime=0;
})