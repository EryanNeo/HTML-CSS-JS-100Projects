console.log('script added');

document.getElementById('btn').addEventListener('click',function(){
    let num1=document.querySelector('.num1').value;
    let num2=document.querySelector('.num2').value;
    let result=document.querySelector('.result');
    let op=document.getElementById('selectOp').value;
    switch(op){
        case '+':
            result.innerHTML=Number(num1)+Number(num2);
            break;
        case '-':
            result.innerHTML=Number(num1)-Number(num2);
            break;
        case '*':
            result.innerHTML=Number(num1)*Number(num2);
            break;
        case '/':
            result.innerHTML=Number(num1)/Number(num2);
            break;
    }
})
