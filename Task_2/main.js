let books = [];
let id = 0;
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

};

const displayBooks = (books) => {
    const priority = document.getElementsByName('priority');
    const titleUl = document.getElementById('titleUl');
    const authorUl = document.getElementById('authorUl');
    const priorityUl = document.getElementById('priorityUl');
    const categoryUl = document.getElementById('categoryUl');

    id = id + 1;

    const titleLi = document.createElement('li');
    const authorLi = document.createElement('li');
    const priorityLi = document.createElement('li');
    const categoryLi = document.createElement('li');

    titleLi.setAttribute('id', id);
    authorLi.setAttribute('id', id);
    priorityLi.setAttribute('id', id);
    categoryLi.setAttribute('id', id);

    titleLi.innerText += books.title;
    authorLi.innerText += books.author;
    categoryLi.innerText += books.category;

    for (let i = 0; i < priority.length; i++) {
        if (priority[i].checked) {
            console.log(priority[i].value);
            priorityLi.innerText += books.priority[i].value;
        }
    }

    titleLi.setAttribute("onclick", "remove(this)");

    titleUl.appendChild(titleLi);
    authorUl.appendChild(authorLi);
    priorityUl.appendChild(priorityLi);
    categoryUl.appendChild(categoryLi);

};

function remove(bookLi) {

    let element = bookLi;
    element.remove();

    for (let i = 0; i < books.length; i++) {
        if (element.id == books[i].id) {

            books.splice(i, 1);
        }
    }
}