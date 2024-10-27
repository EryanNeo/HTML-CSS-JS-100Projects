console.log('script added');
const section=document.querySelector('.container');
const btn=document.querySelector('.btn');
// console.log(section,btn);
const url='https://api.thecatapi.com/v1/images/search';
btn.addEventListener('click',getRandomCats);

async function getRandomCats(){
    section.innerHTML="";
    try{
        const response=await fetch(url);
        const json=await responst.json();
        // console.log(json);
        return randomCatPhoto(json);
    }
    catch(e){
        console.log('Error::',e);
        return randomCatPhoto([
            {
                url:'Error in fetching.'
            }
        ]);
    }
}

randomCatPhoto=(json)=>{
    let photo=json[0].url;
    section.classList.add('cats');
    let image=document.createElement('img');
    image.src=photo;
    image.classList.add('random-cats');
    image.alt=photo;
    section.appendChild(image);
}