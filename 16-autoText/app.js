console.log('script added');

const typedText=document.querySelector('.typed-text');
const cursor=document.querySelector('.cursor');
const words=['Awesome','Fun','Cool','Life','Famous','Weird'];
const typingDelay=400;
const erasingDelay=400;
const newLetterDelay=2000;
let index=0;
let charIndex=0;

document.addEventListener('DOMContentLoaded',()=>{
    if(words.length){
        setTimeout(type,newLetterDelay);
    }
})

function type(){
    if(charIndex<words[index].length){
        typedText.textContent+=words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        setTimeout(erase,erasingDelay);
    }
}

function erase(){
    if(charIndex>0){
        typedText.textContent=words[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        index++;
        if(index>=words.length){
            index=0;
        }
        setTimeout(type,typingDelay+1100);
    }
}