console.log('script added');
let body = document.body;
let themer = document.querySelector('.themer');
const followButtons = document.querySelectorAll('.follow-button');

themer.addEventListener('click', toggleTheme);

function toggleTheme(){
    if(body.className === 'light-theme'){
        body.className = 'dark-theme';
        themer.innerText = 'Light';
        themer.style.color = 'Black';
    }
    else{
        body.className = 'light-theme';
        themer.innerText = 'Dark';
    }
}

followButtons.forEach(btn => {
    btn.addEventListener('click',e => toggleFollow(e.target));
})

function toggleFollow(button){
    button.classList.toggle('followed');
    if(button.innerText == 'Follow'){
        button.innerText = 'Unfollow';
    }
    else{
        button.innerText = 'Follow';
    }
}