console.log('script added');

const listItems=document.querySelectorAll('.list-item');
const textItems=document.querySelectorAll('.text-item');
// console.log(listItems,textItems);

function removeActiveList(el){
    el.classList.toggle('lactive');
}
function addActiveText(el){
    document.querySelector('.active').classList.toggle('active');
    el.classList.toggle('active');
}


listItems.forEach(item=>item.addEventListener('click',(event)=>{
    removeActiveList(document.querySelector('.lactive'));
    item.classList.toggle('lactive');
    if(event.target.matches(".list-item")){
        // console.log(event.target.children[0].getAttribute('href'));
        addActiveText(document.querySelector(event.target.children[0].getAttribute('href')));
    }
    else{
        // removeActiveList(document.querySelector('.lactive'));
        // item.classList.toggle('lactive');
        // console.log(event.target.getAttribute('href'));
        addActiveText(document.querySelector(event.target.getAttribute('href')));
    }
}));