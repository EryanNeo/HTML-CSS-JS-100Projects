console.log('script added');

const btn=document.querySelector('.btn');
const quoteOutput=document.querySelector('#quote-output');
const authorOutput=document.querySelector('.author-output');

console.log(btn,quoteOutput,authorOutput);

btn.addEventListener('click',generateQuote);
const arryaOfQuotes=[
    {
        author:'Albert Einstein',
        quote:'We cannot solve problems with the kind of thinking we employed when we came up with them'
    },
    {
        author:'Mahatma Gandhi',
        quote:'Learn as if you will live forever, live like you will die tomorrow.'
    },
    {
        author:'Mark Twain',
        quote:'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too'
    },
    {
        author:'Norman Vincent Peale',
        quote:'When you change your thoughts, remember to also change your world'
    },
    {
        author:'Walter Anderson',
        quote:'It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.'
    },
    {
        author:'Diane McLaren',
        quote:'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.'
    }
]

function randomObject(){
    // console.log(Math.floor(Math.random()*6));
    return arryaOfQuotes[Math.floor(Math.random()*6)];
}
function generateQuote(){
    let random=randomObject();
    // console.log(random);
    quoteOutput.innerHTML=`<span>${random['quote']}</span>`;
    authorOutput.innerHTML=`<small>${random.author}</small>`;
}