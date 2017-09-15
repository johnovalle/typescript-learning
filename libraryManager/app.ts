import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Mag } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';
import { Purge } from './utilityFunctions';
import Shelf from './shelf';
import * as _ from 'lodash';

// var test = _.snakeCase("type definition testing");
// console.log(test);

const getAllBooks = (): Book[] => {
    let books = [
        {id: 1, title: "Odyssey", author: "Homer", available: true, category: Category.History },
        {id: 2, title: "Game of Thrones", author: "George R. R. Martin", available: false, category: Category.Fiction },
        {id: 3, title: "A Farewell to Arms", author: "Ernest Hemingway", available: true, category: Category.Fiction },
        {id: 4, title: "Guns, Germs, and Steel", author: "Jared Diamond", available: true, category: Category.History },
        {id: 5, title: "Fire and Ice", author: "Robert Frost", available: true, category: Category.Poetry },
        {id: 6, title: "Leaves of Grass", author: "Walt Whitman", available: true, category: Category.Poetry },
        {id: 7, title: "The Diary of a Young Girl", author: "Anne Frank", available: true, category: Category.Biography }
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

const getBooksById = (id: number): Book => {
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

function printBook({title, author: bookauthor}: Book): void {
    console.log(`${title} by ${bookauthor}`);
}

function logFavoriteBooks([book1, book2, ...others]: Book[]){
    printBook(book1);
    printBook(book2);
    let {title: booktitle, author: bookauthor } = book1;
    console.log(booktitle, bookauthor);
    console.log(others);
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

// let myBook = {
//     id: 444,
//     title: 'The Nose',
//     author: 'Nikolai Gogol',
//     available: false,
//     category: Category.Fiction,
//     year: 1836,
//     copies: 2,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// }

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

// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }

// let myPaper = new Newspaper("Times", 2017);
// myPaper.printCitation();

// let inventory: Array<Book> = [
//     {id: 10, title: "The C Programmming Language", author: "Homer", available: true, category: Category.Software },
//     {id: 11, title: "Code Complete", author: "George R. R. Martin", available: false, category: Category.Software },
//     {id: 12, title: "Clean Code", author: "Ernest Hemingway", available: true, category: Category.Software },
//     {id: 13, title: "Design Patterns", author: "Jared Diamond", available: true, category: Category.Software },
// ];

// // let purgedBooks: Array<Book> = Purge<Book>(inventory);
// // console.log(purgedBooks);
// // let purgedNumbers: Array<number> = Purge<number>([1,2,3,4,5,6]);
// // console.log(purgedNumbers);

// let bookShelf: Shelf<Book> = new Shelf<Book>();

// inventory.forEach(book => bookShelf.add(book));

// let firstBook: Book = bookShelf.getFirst();

// let magazines: Array<Mag> = [
//     { title: "Game programming", publisher: "Coding Books" },
//     { title: "Game Design Patterns", publisher: "O'Reilly" },
//     { title: "Foundation Game Design", publisher: "FoE" } 
// ];

// let magShelf: Shelf<Mag> = new Shelf<Mag>();
// magazines.forEach(mag => magShelf.add(mag));
// let firstMag: Mag = magShelf.getFirst();

// magShelf.printTitles();

//let [book1, book2] = getAllBooks();
//let books: Book[] = [];
//books.push(...getAllBooks());

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}

type EmployeeCategory = 'Manager' | 'Non-Manager';
let employee: EmployeeCategory = 'Manager';