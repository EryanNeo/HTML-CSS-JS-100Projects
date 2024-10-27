console.log('script added');

const btn=document.getElementById('btn');
const content=document.getElementById('content');
// console.log(btn,content);

btn.addEventListener('click',joke);

async function joke() {
    let config={
        headers:{
            Accept:'application/json',
        },
    };
    let b;
    try{
        let a=await fetch('https://icanhazdadjoke.com/',config);
        b=await a.json();
    }
    catch(e){
        b={
            joke:`${e}`
        }
    }
    
    content.innerHTML=b.joke;
}