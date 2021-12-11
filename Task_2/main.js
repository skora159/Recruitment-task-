const button = document.getElementById('button');

let books = [];


// displayLocalStorage();


let id = 1;
class Book {
    constructor(id, title, author, priority, category) {

        this.id = id;
        this.title = title;
        this.author = author;
        this.priority = priority;
        this.category = category;

    }

}

const add = () => {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const priority = document.getElementsByName('priority');
    const category = document.getElementById('category');
    const textCategory = category.options[category.selectedIndex].text;


    for (let i = 0; i < priority.length; i++) {
        if (priority[i].checked) {
            console.log(priority[i].value);

        }
    }



    let newBook = new Book(id, title, author, priority, textCategory);




    books.push(newBook);
    console.log(books);
    displayBooks(newBook);

    window.localStorage.setItem('book', JSON.stringify(books));

};

const displayBooks = (books) => {
    const priority = document.getElementsByName('priority');
    const containerDisplay = document.querySelector('div.containerDisplay');
    const displayedBook = document.createElement('div');

    const descriptionsBookTitle = document.createElement('div');
    const descriptionsBookAuthor = document.createElement('div');
    const descriptionsBookPriority = document.createElement('div');
    const descriptionsBookCategory = document.createElement('div');

    displayedBook.setAttribute('id', id);
    displayedBook.setAttribute('class', 'displayedBook');
    descriptionsBookTitle.setAttribute('class', 'descriptions');
    descriptionsBookAuthor.setAttribute('class', 'descriptions');
    descriptionsBookPriority.setAttribute('class', 'descriptions');
    descriptionsBookCategory.setAttribute('class', 'descriptions');

    id = id + 1;

    descriptionsBookTitle.innerText += books.title;
    descriptionsBookAuthor.innerText += books.author;

    for (let i = 0; i < priority.length; i++) {
        if (priority[i].checked) {
            console.log(priority[i].value);
            descriptionsBookPriority.innerText += books.priority[i].value;
        }
    }

    descriptionsBookCategory.innerText += books.category;

    title.value = '';
    author.value = '';

    displayedBook.setAttribute("onclick", "remove(this)");

    containerDisplay.appendChild(displayedBook);
    displayedBook.appendChild(descriptionsBookTitle);
    displayedBook.appendChild(descriptionsBookAuthor);
    displayedBook.appendChild(descriptionsBookPriority);
    displayedBook.appendChild(descriptionsBookCategory);

};

function remove(book) {

    let element = book;
    element.remove();

    for (let i = 0; i < books.length; i++) {

        if (element.id == books[i].id) {

            books.splice(i, 1);
        }
    }
};