// Implicit
var a = 4 + "7";
console.log("a: " + a);
console.log("a: " + (typeof a));

var b = 4 * "7";
console.log("b: " + b);
console.log("b: " + (typeof b));


// Explicit
var c = 1;
console.log("c: " + c);
console.log("c: " + (typeof c));

var d = c + "2";
console.log("d: " + d);
console.log("d: " + (typeof d));

var e = String(c);
console.log("e: " + (typeof e));

var f = Number(e);
console.log("f: " + (typeof f));
