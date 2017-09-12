export const getAllBooks = () => {
    let books = [
        {id: 1, title: "U", author: "JJ", available: true, category: Category.Fiction },
        {id: 2, title: "GoT", author: "GRRM", available: false, category: Category.Fiction },
        {id: 3, title: "AFtA", author: "EH", available: true, category: Category.History },
        {id: 4, title: "GGS", author: "JD", available: true, category: Category.History }
    ]
    return books;
}

const logFirstAvailable = (books = getAllBooks()): void => {
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

const getBookTitlesByCategory = (categoryFilter: Category = Category.History): Array<string> => {
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

const getBooksById = (id: number) => {
    const allBooks = getAllBooks();
    return allBooks.filter((val,idx, arr) => val.id === id)[0];
}

function createCustomerId(name: string, id: number): string {
    return name + id;
}
let idGenerator: (char: string, nums: number) => string;
//idGenerator = createCustomerId;
idGenerator = (c:string, n:number) => n+c;


function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);
}

function checkoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Checking out books for ${customer}`);
    let booksCheckedOut: string[] = [];

    for(let id of bookIds) {
        let book = getBooksById(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
            book.available = false;
        }
    }

    return booksCheckedOut;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProp: any): string[] {
    let foundTitles: string[] = [];
    if(typeof bookProp === 'string'){
        foundTitles = getAllBooks().filter(val => val.author === bookProp)
                                   .map(val => val.title);
    }
    else if(typeof bookProp === 'boolean') {
        foundTitles = getAllBooks().filter(val => val.available === bookProp)
                                   .map(val => val.title);
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

let availableBooks = getTitles(false);
availableBooks.forEach(title => console.log(title));