console.log('script added');

const selectField=document.querySelector('.select-field');
const selectText=document.querySelector('#select-text');
const list=document.getElementById('list');
const arrowIcon=document.querySelector('.select-field img');
const options=document.getElementsByClassName('options');
// console.log(selectField,selectText,list,arrowIcon,options);

selectField.addEventListener('click',()=>{
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
})

for (option of options){
    option.onclick=function(){
        if(this.classList.contains('default')){
            selectText.innerHTML='Select Social Media';
        }
        else{
            selectText.innerHTML=this.textContent;
        }
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}