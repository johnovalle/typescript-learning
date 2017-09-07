"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log('===========');
console.log('===========');
console.log('===========');
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.select = function () {
    };
    return CheckBox;
}(Control));
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.select = function () { };
    return Button;
}());
var selectableControl;
//Ok
selectableControl = new CheckBox();
//NG
//selectableControl = new Button();
