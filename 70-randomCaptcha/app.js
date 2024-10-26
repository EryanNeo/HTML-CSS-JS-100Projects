console.log('script added');

let captcha=document.querySelector('.captcha');
let reload=document.querySelector('.reload-btn');
let input=document.querySelector('input')
let check=document.querySelector('.check-btn');
let statusTxt=document.querySelector('.status-text')

// console.log(captcha);
// console.log(captcha);
// console.log(input);
// console.log(reload);
// console.log(statusTxt);

let allChar='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function getCaptcha(){
    let cap='';
    for(i=0;i<6;i++){
        cap+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    captcha.innerHTML=cap;
}
reload.addEventListener('click',()=>{
    captcha.innerHTML='';
    getCaptcha();
})

check.addEventListener('click',(e)=>{
    e.preventDefault();
    statusTxt.style.display='block';
    let inputVal=input.value;
    if(inputVal===captcha.innerText){
        statusTxt.style.color='#4bd2ec';
        statusTxt.innerText='Nice, Captcha Matched';
        setTimeout(()=>{
            statusTxt.style.display='';
            input.value='';
            captcha.innerText='';
            getCaptcha();
        },4000);
    }
    else{
        statusTxt.style.color='#4bd2ec';
        statusTxt.innerText='Wrong Captcha.';
    }
})