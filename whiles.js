var names = ["Luis", "Nashe", "Chacon", "Alejandro"];

function sayHi(name) {
    console.log("Hola " + name);
}

while (names.length > 0) {
    var name = names.shift();
    sayHi(name);
}
