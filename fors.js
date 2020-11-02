var names = ["Luis", "Nashe", "Chacon", "Alejandro"];

function sayHi(name) {
    console.log("Hola " + name);
}

for (var count = 0; count < names.length ; count++){
    sayHi(names[count]);
}

for (var name of names){
    sayHi(name)
}
