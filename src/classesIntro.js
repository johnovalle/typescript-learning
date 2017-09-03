"use strict";
var Car = /** @class */ (function () {
    // constructor(public brandName: string){ //public keyword is short for assignment
    //     //this.brandName = brandName;
    //     Car.SERIES_NUMBER++;
    //     this._seriesNumber = Car.SERIES_NUMBER;
    // }
    function Car(brandName) {
        this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
    Car.BuildCar = function (brandName) {
        return new Car(brandName);
    };
    Car.BuyCar = function (brandName, ownerName) {
        var car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    };
    Car.prototype.startCar = function () {
        this._startEngine();
    };
    Car.prototype._startEngine = function () { };
    Object.defineProperty(Car.prototype, "seriesNumber", {
        get: function () {
            return this._seriesNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (name) {
            this._ownerName = name;
        },
        enumerable: true,
        configurable: true
    });
    //public brandName: string;
    Car.SERIES_NUMBER = 0;
    return Car;
}());
//let car = new Car("Audi");
var car = Car.BuyCar("Audi", "John");
car.startCar();
console.log("Brand 1: ", car.brandName);
console.log("Series #: ", car.seriesNumber);
console.log("Owner: ", car.ownerName);
//let car2 = new Car("Toyota");
var car2 = Car.BuyCar("Mustang", "Rina");
console.log("Brand 2: ", car2.brandName);
console.log("Series #: ", car2.seriesNumber);
console.log("Owner: ", car2.ownerName);
