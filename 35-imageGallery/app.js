console.log('script added');

const images=document.querySelectorAll('.image-gallery img');
const wrapper=document.querySelector('#wrapper');
const closeBtn=document.querySelector('#wrapper span');
const imageWrapper=document.querySelector('#fullImg');

// console.log(images,wrapper,closeBtn,imageWrapper);

function openModal(pic){
    wrapper.style.display='flex';
    imageWrapper.src=pic;
}

images.forEach((image,index)=>{
    image.addEventListener('click',()=>{
        // openModal(`images/img${index+1}.jpg`);
        openModal(image.getAttribute('src'));
        console.log(image.getAttribute('src'));
    })
})
closeBtn.addEventListener('click',()=>{
    wrapper.style.display='none';
})