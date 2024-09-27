console.log('script added');

const container2=document.querySelector('.content-2');
const btn=document.querySelector('.btn');
const elipses=document.querySelector('.elipses');

btn.addEventListener('click',()=>{
    container2.classList.toggle('toggle');
    elipses.classList.toggle('toggle1');
    btn.classList.toggle('clicked');
    if(btn.classList.item(1)=='clicked'){
        btn.textContent='Less';
    }
    else{
        btn.textContent='Read More';
    }
    console.log(btn.classList.item(1));
})