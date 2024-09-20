console.log('script added');

let toggler=document.getElementById('switch');
toggler.addEventListener('click',()=>{
    (toggler.checked)?document.body.style.backgroundColor='black':document.body.style.backgroundColor='white';
})