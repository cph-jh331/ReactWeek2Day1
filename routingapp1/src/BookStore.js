class BookStore {

    constructor() {
        this._books = [
            { id: 1, title: "How to Learn JavaScript - Vol 1", info: "Study hard" },
            { id: 2, title: "How to Learn ES6", info: "Complete all exercises :-)" },
            { id: 3, title: "How to Learn React", info: "Complete all your CA's" },
            {
                id: 4, title: "Learn JavaScript, React and MobX", info: "Don't drink beers, until Friday (after four)"
            }
        ]
        this._nextID = 5;
    }
    get books() {
        return this._books;
    }

    addBook(book) {
        book.id = this._nextID;
        this._books.push(book);
        this._nextID++;
    }

    deleteBook(id) {
        let book = this.findBook(id);
        if (book !== null) {
            let index = this._books.indexOf(book);
            this._books.splice(index, 1);
        }
    }

    findBook = (id) => {
        for (let book of this._books) {
            if (book.id === id) {
                return book;
            }
        }
        return null;
    }
}

export default new BookStore();