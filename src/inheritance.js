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
var testAnimal = function (animal) {
    console.log("Legs: ", animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood('milk');
    animal.eatFood('meat');
};
var Animal = /** @class */ (function () {
    function Animal(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    Animal.prototype.eatFood = function (food) {
        console.log("Ate " + food);
    };
    return Animal;
}());
//cannot instantiate and abstract class
//new Animal()
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 4) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof');
    };
    Dog.prototype.eatFood = function (food) {
        if (food !== 'meat') {
            console.log('YUK!');
            return;
        }
        _super.prototype.eatFood.call(this, food);
    };
    return Dog;
}(Animal));
testAnimal(new Dog());
