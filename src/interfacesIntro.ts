interface Santa {
    readonly numberOfKidsToVisit: number;
    weight?: number;
    giveGift(callback: GiftGivenCallback): void;
    drinkMilk?(): void;
}

interface Santa { //merges interfaces
    fly?(): void;
}

interface FatSanta extends Santa {
    eat(): void;
}

interface GiftGivenCallback {
    (success: boolean): void;
}

let santa: Santa = {
    numberOfKidsToVisit: 987654321,
    giveGift: (callback: GiftGivenCallback): void => {
        callback(true);
    }
};

//santa.numberOfKidsToVisit = 0;
let numberOfKidsToVisit = santa.numberOfKidsToVisit;

if (santa.fly) {
    santa.fly();
}
//anonymous interface
let getNameAndAge2 = (): { name: string, age: number }=> {
    return {name: 'Rick', age: 72};
}

let fatSanta: FatSanta;