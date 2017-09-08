export interface Item {
    id: string;
}

interface ItemConstructor<T extends Item> {
    new(id: string): T;
}

interface IdToItemMap<T extends Item> {
    [id: string]: T; //dictionary
}

class ItemsCache<T extends Item> {
    private itemsCache: IdToItemMap<T>;

    constructor(private itemConstructor: ItemConstructor<T>){
        this.itemsCache = {};
    }
    
    public createItem(id: string): T {
        if(this.itemsCache[id]){
            return this.itemsCache[id];
        }
        const item: T = new this.itemConstructor(id);
        this.itemsCache[id] = item;

        return item;
    }
}

class Person implements Item {
    constructor(public id: string){}
}

const itemsCache = new ItemsCache(Person);

const person1: Person = itemsCache.createItem('a');
const person2: Person = itemsCache.createItem('b');
const person3: Person = itemsCache.createItem('a');
console.log(person1, person2, person3, person1 === person3);