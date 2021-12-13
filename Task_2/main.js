const button = document.getElementById('button');

let books = [];



id = Date.now();
class Book {
    constructor(id, title, author, priority, category) {

        this.id = id;
        this.title = title;
        this.author = author;
        this.priority = priority;
        this.category = category;

    }

}

const onSubmit = () => {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const priority = document.querySelectorAll('.priority-input');
    const category = document.getElementById('category').value;

    let activeRadioButtonPriority

    priority.forEach(radioButton => {

        if (radioButton.checked) {
            console.log(radioButton.value);

            activeRadioButtonPriority = radioButton.value;
        }

    });

    add(id, title, author, parseInt(activeRadioButtonPriority), category);


};

const displayBook = (book) => {
    const containerDisplay = document.querySelector('.containerDisplay');
    const displayedBook = document.createElement('div');
    const descriptionsBookTitle = document.createElement('div');
    const descriptionsBookAuthor = document.createElement('div');
    const descriptionsBookPriority = document.createElement('div');
    const descriptionsBookCategory = document.createElement('div');

    id = id + 1;

    displayedBook.setAttribute('id', id);
    displayedBook.setAttribute('class', 'displayedBook');
    descriptionsBookTitle.setAttribute('class', 'descriptions');
    descriptionsBookAuthor.setAttribute('class', 'descriptions');
    descriptionsBookPriority.setAttribute('class', 'descriptions');
    descriptionsBookCategory.setAttribute('class', 'descriptions');

    descriptionsBookTitle.innerText += book.title;
    descriptionsBookAuthor.innerText += book.author;
    descriptionsBookPriority.innerText += book.priority;
    descriptionsBookCategory.innerText += book.category;

    title.value = '';
    author.value = '';

    // displayedBook.setAttribute("onclick", "remove(this)");

    containerDisplay.appendChild(displayedBook);
    displayedBook.appendChild(descriptionsBookTitle);
    displayedBook.appendChild(descriptionsBookAuthor);
    displayedBook.appendChild(descriptionsBookPriority);
    displayedBook.appendChild(descriptionsBookCategory);

};

// function remove(book) {

//     let element = book;
//     element.remove();

//     const bookLS = JSON.parse(localStorage.getItem('books'));


// for (let i = 0; i < books.length; i++) {
//     console.log(bookLS[i].id);
//     if (element.id == books[i].id) {


//         books.splice(i, 1);
//     }
// }

// for (let j = 0; j < books.length; j++) {

//     if (element.id == bookLS[j].id) {

//         bookLS.splice(j, 1);

//     }

// }
//     window.localStorage.setItem('books', JSON.stringify(bookLS));
// };

function loadPages() {

    const books = localStorage.getItem('books');
    if (books) {

        JSON.parse(books).forEach((book) => {
            add(book.id, book.title, book.author, book.priority, book.category);
        })
    }
};

function validate() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    let isValid = true;

    if (!title.value) {
        title.classList.add('no-valid');
        isValid = false;

    } else {
        title.classList.remove('no-valid');
    }
    if (!author.value) {
        author.classList.add('no-valid');
        isValid = false;

    } else {
        author.classList.remove('no-valid');
    }

    if (isValid) {
        onSubmit();
    }

}

function add(id, title, author, priority, category) {

    let newBook = new Book(id, title, author, priority, category);

    books.push(newBook);
    displayBook(newBook);
    window.localStorage.setItem('books', JSON.stringify(books));

}