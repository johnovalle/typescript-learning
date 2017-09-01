"use strict";
var isDog = true;
var dogAge = 5;
var dogName = "Star";
var dogNames = [dogName, "Fluffy"];
var dogAges = [4, 6, 2.1];
var someUnknownThing = "string";
var someThingsArray = ["x", 5];
var doStuff = function () {
    console.log('doing stuff');
    return;
};
doStuff();
var throwError = function (message) {
    throw new Error(message);
};
var Action;
(function (Action) {
    Action[Action["GET_USERS"] = 0] = "GET_USERS";
    Action[Action["ADD_USER"] = 100] = "ADD_USER";
    Action[Action["EDIT_USER"] = 101] = "EDIT_USER";
    Action[Action["DELETE_USER"] = 102] = "DELETE_USER";
})(Action || (Action = {}));
var action = Action.GET_USERS;
console.log(action);
