console.log('script added');
const inputs=document.querySelectorAll('input');
const img=document.querySelector('img');

inputs.forEach(input=>input.addEventListener('change',handleUpdate));

function handleUpdate(){
    switch(this.name){
        case 'spacing':{
            img.style.setProperty(`--${this.name}`,this.value+'px');
            // console.log('spacing')
            break;
        }
        case 'blur':{
            img.style.setProperty(`--${this.name}`,this.value+'px');
            // console.log('blur')
            break;
        }
        case 'base':{
            img.style.setProperty(`--${this.name}`,this.value);
            // console.log('base')
            break;
        }
    }
}