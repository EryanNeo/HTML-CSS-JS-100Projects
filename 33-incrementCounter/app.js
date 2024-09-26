console.log('script added');

const count=document.querySelector('#count');
const save=document.querySelector('.save-btn');
const increment=document.querySelector('.increment-btn');
const saveTxt=document.querySelector('.entries-field');
// console.log(count,save,increment,saveTxt);

let index=0;
increment.addEventListener('click',()=>{
    index++;
    // console.log(index);
    count.textContent=index;
})
save.addEventListener('click',()=>{
    let text=saveTxt.textContent;
    if(text==''){
        text+=String(index);
    }
    else{
        text+=',';
        text+=String(index);
    }
    saveTxt.textContent=text;
    index=0;
    count.textContent=index;
})