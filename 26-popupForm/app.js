console.log('script added');

const mclose=document.getElementById('close');
const mopen=document.getElementById('open');
const mmodal=document.getElementById('modal');
// console.log(mclose,mopen,mmodal);

mopen.addEventListener('click',()=>{
    mmodal.classList.add('show-modal');
})
mclose.addEventListener('click',()=>{
    mmodal.classList.remove('show-modal');
})
window.addEventListener('click',e=>{
    // console.log(e.target===mmodal);
    // console.log(e.target);
    e.target===mmodal?mmodal.classList.remove('show-modal'):false;
})

