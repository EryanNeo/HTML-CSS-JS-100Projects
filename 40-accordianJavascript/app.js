console.log('script added');

const itemHeader=document.querySelectorAll('.accordian-item-header');

itemHeader.forEach(accordian=>{
    accordian.addEventListener('click',collapseAccordians);
    function collapseAccordians(){
        const activeAccordian=document.querySelector('.active');
        if (activeAccordian && activeAccordian !==accordian){
            activeAccordian.classList.toggle('active');
            activeAccordian.nextElementSibling.style.maxHeight=0;
        }
        accordian.classList.toggle('active');
        const accordianItemBody=accordian.nextElementSibling;
        if(accordian.classList.contains('active')){
            accordianItemBody.style.maxHeight=accordianItemBody.scrollHeight+'px';
        }
        else{
            accordianItemBody.style.maxHeight=0;
        }
    }
});


// const itemHeaders = document.querySelectorAll(".accordian-item-header");

// itemHeaders.forEach((accordion) => {
//   accordion.addEventListener("click", collapseAccordions);

//   function collapseAccordions() {
//     const activeAccordion = document.querySelector(".active");
//     if (activeAccordion && activeAccordion !== accordion) {
//       activeAccordion.classList.toggle("active");
//       activeAccordion.nextElementSibling.style.maxHeight = 0;
//     }

//     accordion.classList.toggle("active");
//     const accordionItemBody = accordion.nextElementSibling;

//     if (accordion.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     } else {
//       accordionItemBody.style.maxHeight = 0;
//     }
//   }
// });
