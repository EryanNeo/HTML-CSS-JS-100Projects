console.log('script added');

const p=document.querySelector('#p');
const input=document.querySelector('#input');
const btn=document.querySelector('#searchBtn');

// console.log(p,input,btn);

btn.addEventListener('click',()=>{
    let text=input.value;
    if(text!==""){
        let regExp=new RegExp(text,'gi');
        p.innerHTML=p.textContent.replace(regExp,"<mark>$&</mark>");
    }
})