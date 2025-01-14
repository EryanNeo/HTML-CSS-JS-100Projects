console.log('script added');
// let books = [];
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let btn = document.querySelector('button');
let bookList = document.querySelector('#book-list');

// console.log(title, author, year, btn, bookList);
btn.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value === '' || author.value === '' || year.value === ''){
        if(!title.value){
            alert('Fill Book Title!')
        }
        else if(!author.value){
            alert('Fill Book Author!')
        }
        else if(!year.value){
            alert('Fill Book Publish Year!')
        }
    }
    else{
        const newRow = document.createElement('section');
        const newTitle = document.createElement('div');
        newTitle.innerHTML = title.value;
        const newAuthor = document.createElement('div');
        newAuthor.innerHTML = author.value;
        const newYear = document.createElement('div');
        newYear.innerHTML = year.value;
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newYear);
        bookList.appendChild(newRow)
    }
});

// function bookAdded(){
//     // books.push({
//     //     'title': title.value,
//     //     'author': author.value,
//     //     'year': year.value
//     // })
//     console.log(title.value, author.value, year.value);
//     let newBook = document.createElement('div');
//     newBook.classList.add('book');
//     newBook.innerHTML = `
//         <span class="header">${title.value}</span>
//         <span class="header">${author.value}</span>
//         <span class="header">${year.value}</span>
//     `;
//     bookList.appendChild(newBook);
// }

