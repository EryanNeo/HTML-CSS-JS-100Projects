console.log('script added');

const arrow=document.getElementById('arrow');

console.log(arrow);
window.addEventListener('scroll',()=>{
    let position=window.scrollY;
    console.log(position);
    if (position<=5){
        arrow.classList.toggle('fade-in');
        arrow.classList.toggle('fade-out');
    }
})