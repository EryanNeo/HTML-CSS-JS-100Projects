console.log('script added');

const menu=document.getElementById('menu');
const sidebar=document.getElementById('sidebar');
const content=document.getElementById('content');

menu.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
})