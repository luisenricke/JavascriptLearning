var developer = {
    name: "Luis",
    lastName: "Villalobos",
    age: 25,
    about: function () {
        console.log(this.name + " is a developer");
    }
};

console.log(developer);
console.log(developer.name);
console.log(developer.about());

function makeDeveloper(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.about = function () {
        console.log(this.name + " is a developer");
    }
}

var newDeveloper = new makeDeveloper("Nashe", "Osorio", 24);

console.log(newDeveloper);
console.log(newDeveloper.name);
console.log(newDeveloper.about());
