const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // clear data
    searchField.value = '';

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(books.length === 0){
      document.getElementById('error-message').style.display = "block"  
    }
    books.forEach(book =>{
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="...">

        <div class="card-body">
            <h3 class="card-title">Title:${book.title}</h3>
            <h4 class="card-title">Writer:${book.author_name}</h4>
            <h6 class="card-title">Publish Year:${book.first_publish_year}</h5>
            <h6 class="card-title">Publisher:${book.publisher}</h6>
            <p class="card-text">I could not find any description in the given api. So, i was unable to add one.</p>
        </div>
    </div>
           `;
     
    searchResult.appendChild(div);       
    })
    
}