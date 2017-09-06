interface ItemConstructor {
    new (id: string): IItem;
}

interface IItem {
    id: string;
}

class Item implements IItem {
    constructor(public id: string){}
}

interface ItemIdToItemMap {
    [id: string]: IItem
}

class ItemsCache {
    //private itemsCache: { [key: string]: IItem};
    private itemsCache: ItemIdToItemMap;
    constructor(private itemsConstructor: ItemConstructor){
        this.itemsCache = {};
    }

    public createItem(id: string): IItem {
        if(!!this.itemsCache[id]){
            return this.itemsCache[id];
        }

        const item: IItem = new this.itemsConstructor(id);
        this.itemsCache[id] = item;
        return item;
    }
}

const cache = new ItemsCache(Item);
const item1 = cache.createItem('1');
const item2 = cache.createItem('2');
const item3 = cache.createItem('1');

console.log(item1, item2, item3);

const item4: Item = {
    id: "new id"
}

console.log(item4);
const item45 = <Item> {
    id: "new id2"
}
const item5: Item = new Item("some other Id");
console.log(item45, item5);


console.log('===========');
console.log('===========');
console.log('===========');

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class CheckBox extends Control {
    select(): void {

    }
}

class Button {
    select(): void {}
}

let selectableControl: SelectableControl;
//Ok
selectableControl = new CheckBox();
//NG
//selectableControl = new Button();


