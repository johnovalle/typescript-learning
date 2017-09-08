export const getAllBooks = () => {
    let books = [
        {title: "U", author: "JJ", available: true, category: Category.Fiction },
        {title: "GoT", author: "GRRM", available: false, category: Category.Fiction },
        {title: "AFtA", author: "EH", available: true, category: Category.History }
    ]
    return books;
}

const logFirstAvailable = (books): void => {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
        
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total: ${numberOfBooks}`);
    console.log(`first: ${firstAvailable}`);
}

enum Category { Biography, Poetry, Fiction, History, Children };

const getBookTitlesByCategory = (categoryFilter: Category): Array<string> => {
    console.log(`Getting ${Category[categoryFilter]} books`);
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
};


console.log(getBookTitlesByCategory(Category.Fiction));