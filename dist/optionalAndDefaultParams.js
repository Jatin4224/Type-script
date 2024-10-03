"use strict";
//typescript allows you to define optional and default parameters in functions.
//optional parameters are denoted by appending a ? symbol after the parameter name, and default
//parameters are specified by providing a default value in the parameter declaration.
const greet4 = (name, id) => {
    return `welcome ${name} nd your id is ${id} `;
};
const op = greet4("jai", 5);
console.log(op);
//1) Default parameter
const greet5 = (name, id = 1) => {
    return `welcome ${name} nd your id is ${id} `;
};
const op1 = greet5("jai");
console.log(op1);
//2)Optional parameter
const greet6 = (name, id) => {
    return `welcome ${name} nd your id is ${id} `;
};
const op2 = greet6("jai");
console.log(op2);
