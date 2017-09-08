"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = function () {
    var books = [
        { title: "U", author: "JJ", available: true, category: Category.Fiction },
        { title: "GoT", author: "GRRM", available: false, category: Category.Fiction },
        { title: "AFtA", author: "EH", available: true, category: Category.History }
    ];
    return books;
};
var logFirstAvailable = function (books) {
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
console.log(getBookTitlesByCategory(Category.Fiction));
//# sourceMappingURL=app.js.map