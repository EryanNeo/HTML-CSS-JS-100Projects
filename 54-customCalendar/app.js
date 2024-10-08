console.log('script added');

const day1=document.getElementById('day');
const dayn1=document.getElementById('day-number');
const month1=document.getElementById('month');
const year1=document.getElementById('year');

// console.log(day,dayn,month,year);
date=new Date();
month1.innerHTML=(date.toLocaleDateString('en',{month:'long'}));
dayn1.innerHTML=(date.getDate());
year1.innerHTML=date.getFullYear();
day1.innerHTML=date.toLocaleDateString('en',{weekday:'long'});