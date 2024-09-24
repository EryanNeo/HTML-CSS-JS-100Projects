console.log('script added');

const menu=document.querySelector('.menu');
const links=document.querySelectorAll('.menu li');
const highlight=document.querySelector('.highlight');
const btn=document.querySelector('.btn');

// console.log(menu,links[0],highlight,btn);

btn.addEventListener('click',function(){
    if(this.dataset.open==='close'){
        menu.style.clipPath='circle(100% at 50% 50%)';
        this.dataset.open='open';
    }
    else{
        menu.style.clipPath='';
        this.dataset.open='close';
        highlight.style='';
    }
})
links.forEach(link=>{
    link.addEventListener('pointerover',function(){
        const w=this.offsetWidth,h=this.offsetHeight,t=this.offsetTop;
        highlight.style.cssText=`transform:translateY(${t/10}rem);width:${w/10}rem;height:${h/10}rem;`;
    })
})
