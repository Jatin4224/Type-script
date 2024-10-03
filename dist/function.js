"use strict";
// const func = (n: number, m: number) => {
//   return n * m;
// };
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "mac",
    stock: 3,
    price: 999,
    photo: "photourl",
};
getData(productOne);
const mode = "dark"; // only light nd theme
const errorHandler = () => {
    throw new Error();
};
//function Detailed explaination
//write greet function in typescript
function greet(name, id) {
    {
        console.log(`welcome , ${name} and your id is ${id}`);
    }
}
//function call
greet("jai", 4);
//using arrow function
const greet1 = (name, id) => {
    {
        console.log(`welcome , ${name} and your id is ${id}`);
    }
};
//function call
greet1("jai", 4);
//Function Return Type //jo return krna h uska type bhi likhna padega :string
const greet2 = (name, id) => {
    {
        return `welcome , ${name} and your id is ${id}`;
    }
};
const mygreet = greet2("jatin", 22);
console.log(mygreet);
//write a function called isPalindrome that takes string as a parameter and returns true nd false
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
isPalindrome("123321");
