"use strict";
var Item = /** @class */ (function () {
    function Item(id) {
        this.id = id;
    }
    return Item;
}());
var ItemsCache = /** @class */ (function () {
    function ItemsCache(itemsConstructor) {
        this.itemsConstructor = itemsConstructor;
        this.itemsCache = {};
    }
    ItemsCache.prototype.createItem = function (id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        var item = new this.itemsConstructor(id);
        this.itemsCache[id] = item;
        return item;
    };
    return ItemsCache;
}());
var cache = new ItemsCache(Item);
var item1 = cache.createItem('1');
var item2 = cache.createItem('2');
var item3 = cache.createItem('1');
console.log(item1, item2, item3);
var item4 = {
    id: "new id"
};
console.log(item4);
var item45 = {
    id: "new id2"
};
var item5 = new Item("some other Id");
console.log(item45, item5);
