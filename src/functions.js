"use strict";
function getError(message, user) {
    return "Error " + message + ", requesting user: " + user;
}
var errorToLog = getError('someError', 'someUser');
var getErrorFunc = getError;
var getErrorFucntion = getError;
console.log(getErrorFucntion('message', 'user'));
var getErrorOptional = function (msg, usr) {
    if (usr) {
        return "Optional error " + msg + " user: " + usr;
    }
    else {
        return "Optional only error " + msg;
    }
};
console.log(getErrorOptional('err1'));
console.log(getErrorOptional('err3', 'usr1'));
var getErrorDefault = function (msg, usr) {
    if (usr === void 0) { usr = 'unknown'; }
    return "Default error " + msg + " user: " + usr;
};
console.log(getErrorDefault('err1'));
console.log(getErrorDefault('err3', 'usr1'));
var logErrors = function () {
    var errors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        errors[_i] = arguments[_i];
    }
    console.log(errors.join(' | '));
};
logErrors();
logErrors('error1');
logErrors('error2', 'error3');
logErrors('err4', 'err5', 'err6');
//requires at least one error
var logAllErrors = function (err) {
    var restErr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restErr[_i - 1] = arguments[_i];
    }
    var allErrors = [err].concat(restErr);
    console.log(allErrors.join(' || '));
};
//logAllErrors();
logAllErrors('error1');
logAllErrors('error2', 'error3');
logAllErrors('err4', 'err5', 'err6');
function logPoint(param1, param2) {
    if (typeof param1 === 'object') {
        _logPointXY(param1.x, param1.y);
    }
    else {
        _logPointXY(param1, param2);
    }
}
var _logPointXY = function (x, y) {
    console.log("[" + x + ", " + y + "]");
};
logPoint(1, 2);
logPoint({ x: 3, y: 4 });
var showMessageToUser = function (_a) {
    var width = _a.width, height = _a.height;
    //const { width, height } = config;
    console.log(width * height);
};
showMessageToUser({
    font: 'Helvetica',
    fontSize: '20px',
    width: 5,
    height: 30
});
