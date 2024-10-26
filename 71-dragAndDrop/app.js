console.log('script added');
const fill=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty');

console.log(fill,empties);


function dragStart(){
    setTimeout(()=>{
        this.className='invisible';
    },0);
}
function dragEnd(){
    this.className='fill';
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.className+=' hover';
}
function dragLeave(){
    this.className='empty';
}
function dragDrop(){
    this.className='empty';
    this.append(fill);
}
empties.forEach((empty)=>{
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
});

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);
