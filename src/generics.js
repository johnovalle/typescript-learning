"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemsCache = /** @class */ (function () {
    function ItemsCache(itemConstructor) {
        this.itemConstructor = itemConstructor;
        this.itemsCache = {};
    }
    ItemsCache.prototype.createItem = function (id) {
        if (this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        var item = new this.itemConstructor(id);
        this.itemsCache[id] = item;
        return item;
    };
    return ItemsCache;
}());
var Person = /** @class */ (function () {
    function Person(id) {
        this.id = id;
    }
    return Person;
}());
var itemsCache = new ItemsCache(Person);
var person1 = itemsCache.createItem('a');
var person2 = itemsCache.createItem('b');
var person3 = itemsCache.createItem('a');
console.log(person1, person2, person3, person1 === person3);
