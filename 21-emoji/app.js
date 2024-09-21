console.log('script added');

const btn=document.querySelector('#emoji')
const emojis='abcdefghijklmnopqrstuvwxyz'


btn.addEventListener('mouseover',()=>{
    btn.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
})