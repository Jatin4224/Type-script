//normal variable - syntax
let nambo: string = "hey";
let namb: number = 345;
let namboo = <string>"abhi";

//union variable[two type] - string or number

let surname: string | number;
surname = "545";

// const func = (n, m) => {
//   console.log(n, m);
// };
// const func = (n: number, m: number) => {
//   console.log(n, m);
// };

//type keyword
type UserName = string | number;
let a: UserName = 20; //string number ho tab dikkt nahi uske alawa ho tab dkkt h

//type using  in function'

type userNamee = (n: number, m: number) => number;

const funcc: userNamee = (n, m) => {
  console.log(n, m);
  return n * m;
};
