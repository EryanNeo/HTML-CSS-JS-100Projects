console.log('script added');

const toggle=document.querySelector('#toggle');
const nav=document.querySelector('#nav')
console.log(toggle,nav);

toggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
})