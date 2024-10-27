console.log('script added');

let form=document.querySelector('form');
let input=document.querySelector('input');
let output=document.querySelector('.output');
let msg=document.querySelector('.message-container');
// console.log(form,input,output,msg);

function getTodo(value){
    let todo=document.createElement('div');
    let text=document.createElement('span');
    text.innerHTML=value;
    todo.appendChild(text);
    msg.classList.toggle('success');
    msg.textContent='Item Added';
    setTimeout(()=>{
        msg.classList.toggle('success');
    },4000);
    let close=document.createElement('span');
    close.innerHTML='&times;';
    close.classList.add('delete');
    close.addEventListener('click',()=>{
        output.removeChild(todo);
        msg.classList.toggle('error');
        msg.textContent='Item deleted';
        setTimeout(() => {
            msg.classList.toggle('error')
        }, 4000);
    });
    todo.appendChild(close);
    todo.classList.add('todo');
    return todo;
}
form.addEventListener('submit',e=>{
    e.preventDefault();
    let value=input.value;
    if(!value.trim())return;
    output.appendChild(getTodo(value));
    input.value='';
})
