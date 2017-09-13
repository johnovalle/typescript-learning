import { Book, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

class ReferenceItem {

    private _publisher: string;

    constructor(public title: string, private year: number) {
        console.log('Creating a new ReferenceItem');
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(publisher: string) {
        this._publisher = publisher;
    }
}

export { UniversityLibrarian, ReferenceItem };