console.log('script added');

let result=document.querySelector('.result-btn');

result.addEventListener('click',decimal);

function decimal(){
    let deci=document.getElementById('number').value;
    let tempDecimal;
    let rem=0;
    let binary='';
    let place=1;
    tempDecimal=deci;
    if(tempDecimal==0)binary='0';
    while(tempDecimal>0){
        rem=tempDecimal%2;
        binary=String(rem)+binary;
        tempDecimal=parseInt(tempDecimal/2);
        place*=10;
    }
    const h1=document.createElement('h1');
    h1.innerHTML=`${binary}`;
    const container=document.querySelector('.results-container');
    container.append(h1);
}