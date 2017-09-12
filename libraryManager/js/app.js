"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = function () {
    var books = [
        { id: 1, title: "U", author: "JJ", available: true, category: Category.Fiction },
        { id: 2, title: "GoT", author: "GRRM", available: false, category: Category.Fiction },
        { id: 3, title: "AFtA", author: "EH", available: true, category: Category.History },
        { id: 4, title: "GGS", author: "JD", available: true, category: Category.History }
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
var getBookTitlesByCategory = function (categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.History; }
    console.log("Getting " + Category[categoryFilter] + " books");
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
//****************
//const fictionBooks = getBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(val));
//console.log(idGenerator("John", 1904));
//let historyBooks = getBookTitlesByCategory();
//logFirstAvailable();
//let johnsBooks: string[] = checkoutBooks('john', 1, 2, 3);
//johnsBooks.forEach(title => console.log(title));
var availableBooks = getTitles(false);
availableBooks.forEach(function (title) { return console.log(title); });
//# sourceMappingURL=app.js.map