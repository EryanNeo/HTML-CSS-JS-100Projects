console.log('script added');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const themeToggler = document.getElementById('theme-toggler');
const body = document.body;

async function searchWikipedia(query) {
    const endodedQuery = encodeURIComponent(query);
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&search=${endodedQuery}`;
    const response = await fetch(endpoint);
    if(!response){
        throw new Error('Failed to fetch search results.');
    }
    const json = await response.json();
    return json;
}
function displayResults(results){
    searchResults.innerHTML = '';
    results.forEach((result) => {
        const url = `https://en.wikipedia.org/?curid=${results.pageid}`;
        const titleLink = `<a href="${url}" target="_blank" rel="noopener">${result.title}</a>`;
        const urlLink = `<a href="${url}" target="_blank" rel="noopener">${result.title}</a>`;
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3 class="result-title">${titleLink}</h3>
            ${urlLink}
            <p class="result-snippet">${result.snippet}</p>
        `;
        searchResults.appendChild(resultItem);
    })
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if(!query){
        searchResults.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }
    searchResults.innerHTML = "<div class='spinner'>Loading ...</div>";
    try{
        const results = await searchWikipedia(query);
        if (results.queery.searchinfo.totalhits === 0){
            searchResults.innerHTML = "<p>No Results Found.</p>";
        }
        else{
            displayResults(results.queery.search);
        }
    }
    catch(error){
        console.error(error);
        searchResults.innerHTML = "<p>An error Occured while searching.</p>"
    }
})

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')){
        themeToggler.textContent = 'Dark';
        themeToggler.style.background = '#fff';
        themeToggler.style.color = '#333';
    }
    else{
        themeToggler.textContent = 'Light';
        themeToggler.style.border = '2px solid #ccc';
        themeToggler.style.color = '#333';
    }
})