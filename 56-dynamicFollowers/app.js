console.log('script added');

const followers=document.querySelectorAll('.followers');

// console.log(followers);

followers.forEach(follower=>{
    follower.innerHTML='0';
    const updateFollowerCounter=()=>{
        const target=Number(follower.getAttribute('data-target'));
        const c=Number(follower.innerText);
        const increment=target/500;
        if (c<target){
            follower.innerHTML=`${Math.ceil(c+increment)}`
            setTimeout(updateFollowerCounter,1)
        }
        else{
            follower.innerText=target;
        }
    }
    updateFollowerCounter();
})