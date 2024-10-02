console.log('script added');

const upload=document.querySelector('input');
const image=document.querySelector('.img img');
const close1=document.querySelector('.icon p');

// console.log(upload,image,close);

upload.addEventListener('change',()=>{
    uploadFile(event);
})

function uploadFile(event){
    image.classList.add('active');
    close1.classList.add('exit');
    image.src=URL.createObjectURL(event.target.files[0]);
    close1.addEventListener('click',()=>{
        image.classList.remove('active');
        close1.classList.remove('exit');
        // image.src='';
    })
}
