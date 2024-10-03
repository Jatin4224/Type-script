"use strict";
//a class in terms of OOP is a blueprint for creating objects.
//a class is like a blueprint for creating similar things.
// class Persons {
//   name: string = "jai";
//   age: number = 12;
//   hobbies: string[] = ["reading", "gym"];
// }
//instance of class
// const person1: Persons = new Persons();
// console.log(person1);
//whenever we create instance of class it automatically calls constructor
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
//instance of class
const person1 = new Persons("vinod", 12, ["gym", "book"]);
const person2 = new Persons("jai", 20, ["gym", "book"]);
const person3 = new Persons("jatin", 32, ["gym", "book"]);
console.log(person1);
console.log(person2);
console.log(person3);
