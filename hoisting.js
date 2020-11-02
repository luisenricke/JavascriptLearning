
// Make function with hoisting
hey();

function hey () {
    console.log(`Hola ${name}`);
}

// Make variable with hoisting
console.log(name); // var name = undefiened;

var name = "Luis";
