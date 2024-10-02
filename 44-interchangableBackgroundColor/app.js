console.log('script added');

const boxes=document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach(box=>{
    box.style.backgroundColor=`rgb(${random256()},${random256()},${random256()})`
})

boxes.forEach(box=>{
    box.addEventListener('click',(event)=>{
        document.body.style.backgroundColor=(event.target.style.backgroundColor);
    })
})

function random256(){
    return Math.floor(Math.random()*255);
}