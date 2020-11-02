// function declaration

function testFunction() {
    return 0;
}

console.log(testFunction());

function sayHi(student) {
    console.log(`Hi ${student}`);
}

sayHi("Luis");

// function expression

var testFunctionVar = function(a, b) {
    return a + b;
}

console.log(testFunctionVar(1, 1));


// Scopes
var globalScope = "global";

function localTest() {
    var localScope = "local";
}
