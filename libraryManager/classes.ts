import { Book, Author, Librarian } from './interfaces';

class Employee {
    title: string;

    addToSchedule(): void {
        console.log("Employee added to schedule");
    }
    logTitle(): void {
        console.log(`Employee has the time ${this.title}.`);
    }
}

class Researcher {
    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}.`);
    }
}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {

    constructor(title: string, year: number, public edition: number){
        super(title, year); 
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} -- ${this.year}`);
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia, Employee, Researcher };