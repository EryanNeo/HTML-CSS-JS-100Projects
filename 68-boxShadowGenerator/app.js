console.log('script added');
let sliders=document.querySelectorAll('input[type="range"]');
let color=document.querySelector('input[type="color"]');
let output=document.querySelector('#css-code');
let btnCpy=document.getElementById('copy');

// console.log(sliders,color,output,btnCpy);

function createBox(){
    let x=sliders[0].value;
    let y=sliders[1].value;
    let blurRadius=sliders[2].value;
    let spreadRadius=sliders[3].value;
    let shadowColor=color.value;
    let boxShadow=`${x}px ${y}px ${blurRadius}px ${spreadRadius}px`;
    document.getElementById('box').style.cssText=`box-shadow: ${boxShadow} ${shadowColor}`;
    output.value=`box-shadow: ${boxShadow}`;
}
createBox();

sliders.forEach(slider=>{
    slider.addEventListener('input',createBox);
})
color.addEventListener('change',createBox);
btnCpy.addEventListener('click',()=>{
    output.select();
    document.execCommand('copy');
    alert(`${output.value}\n Copied`);
})