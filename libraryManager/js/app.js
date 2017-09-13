"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
exports.getAllBooks = function () {
    var books = [
        { id: 1, title: "Odyssey", author: "Homer", available: true, category: enums_1.Category.History },
        { id: 2, title: "Game of Thrones", author: "George R. R. Martin", available: false, category: enums_1.Category.Fiction },
        { id: 3, title: "A Farewell to Arms", author: "Ernest Hemingway", available: true, category: enums_1.Category.Fiction },
        { id: 4, title: "Guns, Germs, and Steel", author: "Jared Diamond", available: true, category: enums_1.Category.History },
        { id: 5, title: "Fire and Ice", author: "Robert Frost", available: true, category: enums_1.Category.Poetry },
        { id: 6, title: "Leaves of Grass", author: "Walt Whitman", available: true, category: enums_1.Category.Poetry },
        { id: 7, title: "The Diary of a Young Girl", author: "Anne Frank", available: true, category: enums_1.Category.Biography }
    ];
    return books;
};
var logFirstAvailable = function (books) {
    if (books === void 0) { books = exports.getAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total: " + numberOfBooks);
    console.log("first: " + firstAvailable);
};
var getBookTitlesByCategory = function (categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.History; }
    console.log("Getting " + enums_1.Category[categoryFilter] + " books");
    var allBooks = exports.getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
};
var getBooksById = function (id) {
    var allBooks = exports.getAllBooks();
    return allBooks.filter(function (val, idx, arr) { return val.id === id; })[0];
};
function createCustomerId(name, id) {
    return name + id;
}
var idGenerator;
//idGenerator = createCustomerId;
idGenerator = function (c, n) { return n + c; };
function createCustomer(name, age, city) {
    console.log("Creating customer " + name);
}
function checkoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = getBooksById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
            book.available = false;
        }
    }
    return booksCheckedOut;
}
function getTitles(bookProp) {
    var foundTitles = [];
    if (typeof bookProp === 'string') {
        foundTitles = exports.getAllBooks().filter(function (val) { return val.author === bookProp; })
            .map(function (val) { return val.title; });
    }
    else if (typeof bookProp === 'boolean') {
        foundTitles = exports.getAllBooks().filter(function (val) { return val.available === bookProp; })
            .map(function (val) { return val.title; });
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
//****************
//const fictionBooks = getBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(val));
//console.log(idGenerator("John", 1904));
//let historyBooks = getBookTitlesByCategory();
//logFirstAvailable();
//let johnsBooks: string[] = checkoutBooks('john', 1, 2, 3);
//johnsBooks.forEach(title => console.log(title));
//let availableBooks = getTitles(false);
//availableBooks.forEach(title => console.log(title));
var myBook = {
    id: 444,
    title: 'The Nose',
    author: 'Nikolai Gogol',
    available: false,
    category: enums_1.Category.Fiction,
    year: 1836,
    copies: 2,
    markDamaged: function (reason) { return console.log("Damaged: " + reason); }
};
//printBook(myBook);
//myBook.markDamaged('missing back cover');
// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDamage("tea stains");
//let favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = "Sharon";
//favoriteLibrarian.assistCustomer('Carol');
//var ref = new ReferenceItem('Facts and Figures', 2017);
//ref.printItem();
//ref.publisher = 'Random Publishing House';
//console.log(ref.publisher);
//let refBook: ReferenceItem = new Encyclopedia('Worldpedia', 2017, 10);
//refBook.printCitation();
var Newspaper = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper("Times", 2017);
myPaper.printCitation();
//# sourceMappingURL=app.js.map