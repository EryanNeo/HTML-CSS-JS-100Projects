console.log('script added');
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    document.body.classList.toggle('on');
    document.querySelector('#audio').play();
});