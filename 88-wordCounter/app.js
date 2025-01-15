console.log('script added');
const textInput = document.querySelector('.text-input');
const word = document.querySelector('.word-count');
const letter = document.querySelector('.letter-count');
const space = document.querySelector('.space-count');
// console.log(textInput, word, letter, space);
const checks = [atleastTwoCharacters, absceneOfThreeConsecutiveCharacters];

function atleastTwoCharacters(text){
    const letters = text.match(/[a-z]/gi) || [];
    return letters.length >= 2;
}

function absceneOfThreeConsecutiveCharacters(text){
    for(const character of text){
        const occurences = Array.from(text).filter(v => v === character).length;
        if(occurences >= 3){
            return false;
        }
    }
    return true;
}

textInput.addEventListener('input', () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spcaeCount = (textInput.value.match(/\s+/gi) || []).length;
    let wordCount = 0;
    outer: for(const texxt of splitted){
        for(const check of checks){
            if(!check(texxt)){
                continue outer;
            }
        }
        wordCount++;
    }
    word.textContent = wordCount;
    letter.textContent = letterCount;
    space.textContent = spcaeCount;
})