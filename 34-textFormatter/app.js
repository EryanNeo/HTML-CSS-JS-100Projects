console.log('script added');

const input=document.getElementById('input-field');
const btns=document.querySelectorAll('.btn');
const output=document.getElementById('output-field');
// console.log(text,btns,output);

input.addEventListener('keyup',()=>output.innerHTML=input.value);
var clicked;
let removeClick=function(){
    btns.forEach(btn=>{
        if(btn==clicked){}
        else{
            btn.classList.remove('clicked');
        }
    })
}

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let classBtn=(btn.classList[1]);
        switch(classBtn){
            case 'uppercase':output.classList.toggle(classBtn);break;
            case 'lowercase':output.classList.toggle(classBtn);break;
            case 'capitalize':output.classList.toggle(classBtn);break;
            case 'bold':output.classList.toggle(classBtn);break;
            case 'italic':output.classList.toggle(classBtn);break;
            case 'underline':output.classList.toggle(classBtn);break;
        }
        btn.classList.toggle('clicked');
        clicked=btn;
        removeClick();
    })
})