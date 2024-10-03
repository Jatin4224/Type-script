//the any type is the most flexible type in TypeScript.it essentially turns off all type checking for the variables or exppressions it is applied to .
//any means u can write number,string,boolean anything u can write

let myfavNum: any = 5;
myfavNum = "vinod";

//useCases
// -working with dynamic data
// -migration from javascript

//Unkown type in TS.

// -the unknown type is safer alternative to any because it still enforces type checking and type safety.
// -variables of type unknown can hold values of any type,but you must perform type checks or type assertions before using them in specific WebAssembly={.}

// let my favNum1 = 55;
// myfavNum1 = true //type checking

let num2: unknown;
num2 = 5;
num2 = "jai";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

//real life use case of unknown

async function fetchData(): Promise<unknown> {
  const response = await fetch("api-url");
  const data = await response.json();
  return data;
}

async function processData() {
  const response = await fetchData();

  if (typeof response === "object") {
    //perform operation if api response is object
  }
}
