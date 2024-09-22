console.log('script added');

const input=document.querySelector('input');
const eye=document.querySelector('.eye-icon');
// console.log(input,eye)

eye.addEventListener('click',()=>{
    if(input.type==='password'){
        input.type='text';
        eye.classList.toggle('eye-icon-striked');
    }
    else{
        input.type='password';
        eye.classList.toggle('eye-icon-striked');
    }
})