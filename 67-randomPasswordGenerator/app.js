console.log('script added');

const genBtn=document.querySelector('.btn-1');
const copyBtn=document.querySelector('.btn-2');
const password=document.querySelector('#password');

genBtn.addEventListener('click',()=>genPassword());
copyBtn.addEventListener('click',()=>copyPassword());

function genPassword(){
    let pass='';
    let passLen=6+Math.floor(Math.random()*5);
    for(let i=0;i<=passLen;i++){
        pass+=String.fromCharCode(65+Math.floor(Math.random()*65));
    }
    password.value=pass;
}
function copyPassword(){
    password.select();
    document.execCommand('copy');
}