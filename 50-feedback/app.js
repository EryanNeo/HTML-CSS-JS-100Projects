console.log('script added');

const ratings=document.querySelectorAll('.rating');
const ratingContainer=document.querySelector('.ratings-container');
const btn=document.getElementById('btn');
const panel=document.getElementById('panel');

let selected='Satisfied';

ratingContainer.addEventListener('click',e=>{
    console.log(e.target.parentNode);
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        // console.log(e.target.parentNode.classList);
        e.target.parentNode.classList.add('active');
        selected=e.target.nextElementSibling.innerHTML
    }
})

btn.addEventListener('click',()=>{
    panel.innerHTML=`
    <p class='heart'>&#9829;</p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:${selected}</strong>`
})

function removeActive(){
    for(let rating of ratings){
        rating.classList.remove('active');
    }
}