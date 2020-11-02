var fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

fruits.push("grapes");
console.log(fruits);
console.log(fruits.length);

fruits.pop();
console.log(fruits);
console.log(fruits.length);

fruits.unshift("grapes");
console.log(fruits);
console.log(fruits.length);

fruits.shift();
console.log(fruits);
console.log(fruits.length);

console.log(fruits.indexOf("orange"));


var articles = [
    {name: "Bycicle", cost: 3000 },
    {name: "TV", cost: 2500},
    {name: "Book", cost: 320},
    {name: "Phone", cost: 8000},
    {name: "Laptop", cost: 25000},
    {name: "Headphones", cost: 1700},
];

var filterArticles = articles.filter(function(article){
    return article.cost <= 1800;
});

console.log(filterArticles);

var mapArticles =articles.map(function(article){
    return article.name;
});

console.log(mapArticles);

var findArticles = articles.find(function (article){
    return article.name === "Laptop";
})

console.log(findArticles);

articles.forEach(function (article){
    console.log(article.name + " " + article.cost);
});

var someArticles = articles.some(function (article){
    return article.cost <=1800;
});

console.log(someArticles);
