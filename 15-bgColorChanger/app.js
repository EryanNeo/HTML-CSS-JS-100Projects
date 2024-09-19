console.log('script added');

const btn=document.getElementById('btn');
const hex=document.getElementById('hex-code');

function randomColor(){
    let letters='0123456789abcdef';
    let col='#';
    for (let i=0;i<6;i++){
        col+=letters[Math.floor(Math.random()*16)];
    }
    return col;
}
btn.addEventListener('click',()=>{
    const color=randomColor();
    document.body.style.backgroundColor=color;
    hex.innerHTML=color;
})