console.log('script added');

const testimonialContainer=document.querySelector('.testimonial-container');
const testimonial=document.querySelector('.testinomial');
const userImage=document.querySelector('img');
const username=document.querySelector('.user-name');
const handle=document.querySelector('.handle');

// console.log(testimonial,testimonialContainer,userImage,username,handle);

const testimonials=[
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/go.png',
        text:'Hey Man How You Doing'
    },
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/css.png',
        text:'Hey Man How You Doing'
    },
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/git.png',
        text:'Hey Man How You Doing'
    },
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/html.png',
        text:'Hey Man How You Doing'
    },
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/js.png',
        text:'Hey Man How You Doing'
    },
    {
        name:'Aryan Kumar',
        position:'@kumar',
        photo:'images/vscode.png',
        text:'Hey Man How You Doing'
    }
];
let counter=1;

function showNext(){
    const {name,position,photo,text}=testimonials[counter];
    testimonial.innerHTML=text;
    userImage.src=photo;
    username.innerHTML=name;
    handle.innerHTML=position;
    counter++;
    if (counter>testimonials.length-1)counter=0;
}
setInterval(showNext,10000);