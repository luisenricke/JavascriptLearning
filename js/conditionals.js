
if(true) {
    console.log("printed");
}

if(false) {
    console.log("not printed");
}

if(true) {
    console.log("simple true");
} else {
    console.log("simple false");
}

if(false) {
    console.log("nested true");
} else if (false){
    console.log("nested false true");
} else {
    console.log("nested false false");
}

// Ternary
var num = (false) ? 1 : 0;
console.log(num);
