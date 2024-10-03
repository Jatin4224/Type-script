//a)using sq brackets

const numbers: number[] = [1, 2, 3, 4];

//b)using the array constructor

// const numbers1: number[] = new Array(1, 2, 3, 4, 5);

//c)using the array.of method
const names: string[] = Array.of("jai", "jatin");

//Accessing elements using index

console.log(names[1]); //op - jatin

console.log(names.length); //op -2

// a)adding elements to an array using push:
const fruits: string[] = ["apple", "orange", "peach"];

const newFruits = fruits.push("kiwi");
console.log(newFruits);

//b)removing element from an array using pop
const lastData = fruits.pop();
console.log(lastData);

//Iterating over elements
// -you can iterate over the elements of an array using various loopins constructs suh as for, or array methods like forEach

//using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//usinf forEach
fruits.forEach((curVal) => console.log(curVal));

//Map method
// -the map method creates a new array by apllying a provided function to each element of the original array .it transforms each element and returns a enew array witht he transformed values.

//1)doubling each number

// const doubleData: number[] = numbers.map((curValue: number) => curValue * 2);
// console.log(doubleData);

//2)converting numbers to strings

const numberToStrings: string[] = numbers.map((curValue: number) =>
  curValue.toString()
);

//Filter

// 1) filtering even numbers

const evenNumbers: number[] = numbers.filter(
  (curELM: number) => curELM % 2 === 0
);

console.log(evenNumbers);

//2)filtering number > 3

const numberGreaterThenThree: number[] = numbers.filter(
  (currElm: number) => currElm > 3
);
console.log(numberGreaterThenThree);
