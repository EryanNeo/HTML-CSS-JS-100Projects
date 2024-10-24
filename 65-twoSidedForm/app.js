console.log('script added');

const loginForm=document.querySelector('.login-form');
const signupForm=document.querySelector('.signup-form');
const loginBtn=document.querySelector('.log-in-btn');
const signupBtn=document.querySelector('.sign-up-btn');
const backLayer=document.querySelector('.back-layer');

// console.log(signupBtn,signupForm,loginBtn,loginForm,backLayer);

signupBtn.addEventListener('click',()=>{
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    backLayer.style.clipPath="inset(0 0 0 50%)";
})
loginBtn.addEventListener('click',()=>{
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    backLayer.style.clipPath="";
})