"use strict";
var santa = {
    numberOfKidsToVisit: 987654321,
    giveGift: function (callback) {
        callback(true);
    }
};
//santa.numberOfKidsToVisit = 0;
var numberOfKidsToVisit = santa.numberOfKidsToVisit;
if (santa.fly) {
    santa.fly();
}
//anonymous interface
var getNameAndAge2 = function () {
    return { name: 'Rick', age: 72 };
};
var fatSanta;
