'use strict';

a = 5;
console.log(a);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log(string/number);
let something;
console.log(something);

let person = {
name: "John",
age: 25,
isMarried: false
};

console.log(person.name);
console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

//alert ("Hello World!");

//let answer = confirm("Are you here?");

//console.log(answer);

//let answer = +prompt("Are you 18?", "Yes");

//console.log(typeof(answer));

//console.log("arr" + " - object");
//console.log(4 + " - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(7%3);

console.log("7" == 7);
console.log("7" === 7);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);