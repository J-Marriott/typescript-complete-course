"use strict";
console.log("It works!");
function sayHello() {
    console.log("Hello!");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
var userData = {
    name: 'Joe',
    age: 27
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var myRealAge = 27;
myRealAge = "27";
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
function neverReturns() {
    throw new Error('An error!');
}
