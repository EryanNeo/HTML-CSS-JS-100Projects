console.log('script added');
const display=document.getElementById('display-joke');
const btn=document.getElementById('getJoke');
console.log(display,btn);

btn.addEventListener('click',getRandomJoke);

function getRandomJoke(){
    const ajax=new XMLHttpRequest()
    const url='https://api.chuchnorris.io/jokes/random';
    ajax.open('GET',url,true);
    ajax.onreadystatechange=()=>{
        if(ajax.status===200 && ajax.readyState===4){
            let data=JSON.parse(ajax.responseText);
            display.innerHTML=`${data.value}`;
        }
        else{
            ajax.onerror=onerror();
        }
    }
    ajax.send();
}
function onerror(){
    display.textContent='Something went wrong :(';
}