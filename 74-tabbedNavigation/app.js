console.log('script added');

let menus=document.querySelectorAll('.menu-links li');
// console.log(menus);
menus.forEach(li=>{
    li.addEventListener('click',(e)=>{
        document.querySelectorAll('.menu-links ul li.active').forEach(activeEle=>{
            activeEle.classList.remove('active');
        })
        e.target.classList.add('active');
        document.querySelectorAll('.sections > section').forEach(section=>{
            if(e.target.textContent===section.dataset.section){
                document.querySelectorAll('.sections .visible').forEach(ele=>{
                    ele.classList.remove('visible');
                })
                section.classList.add('visible');
            }
        })
    })
})