console.log('script added');

const insert=document.getElementById('insert');
const key=document.getElementById('key');
console.log(insert,key);

function keyWidth(){
    if(key.innerHTML==='Press Any Key'){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

window.addEventListener('keydown',(event)=>{
    insert.innerHTML=`
    <div class='key'>
        ${event.key===" "?'SpaceBar':event.key}
        <small>event.Key</small>
    </div>
    <div class='key'>
        ${event.key===" "?'SpaceBar':event.keyCode}
        <small>event.KeyCode</small>
    </div>
    <div class='key'>
        ${event.key===" "?'SpaceBar':event.code}
        <small>eventCode</small>
    </div>
    `;
    keyWidth();
})