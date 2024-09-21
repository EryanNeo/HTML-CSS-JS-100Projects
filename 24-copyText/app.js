console.log('script added');

const cp=document.querySelector('.copy-btn');
const mv=document.querySelector('.move-btn');
const text=document.querySelector('.container textarea');
const finalText=document.querySelector('.out-container textarea');
const out=document.querySelector('.out');

cp.addEventListener('click',()=>{
    let temp=text.value;
    copyToClipboard(temp);
})
mv.addEventListener('click',()=>{
    let temp=text.value;
    finalText.value=temp;
})

text.addEventListener('click',(target)=>{
    // this.select();
    target.target.select();
});
finalText.addEventListener('click',(target)=>{
    // this.select();
    target.target.select();
});

function copyToClipboard(str){
    const outputContainer=document.querySelector('.out-container');
    const textArea=document.createElement('textarea');
    textArea.value=str;
    outputContainer.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textArea);
    out.innerHTML=`<h3>ContentCopied</h3>`;
    out.classList.add('added');
    setTimeout(()=>{
        out.classList.toggle('added');
        out.textContent='';
    },2000)
}
