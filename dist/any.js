"use strict";
//the any type is the most flexible type in TypeScript.it essentially turns off all type checking for the variables or exppressions it is applied to .
//any means u can write number,string,boolean anything u can write
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myfavNum = 5;
myfavNum = "vinod";
//useCases
// -working with dynamic data
// -migration from javascript
//Unkown type in TS.
// -the unknown type is safer alternative to any because it still enforces type checking and type safety.
// -variables of type unknown can hold values of any type,but you must perform type checks or type assertions before using them in specific WebAssembly={.}
// let my favNum1 = 55;
// myfavNum1 = true //type checking
let num2;
num2 = 5;
num2 = "jai";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
//real life use case of unknown
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("api-url");
        const data = yield response.json();
        return data;
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchData();
        if (typeof response === "object") {
            //perform operation if api response is object
        }
    });
}
