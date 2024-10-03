// const func = (n: number, m: number) => {
//   return n * m;
// };

//parameter optional

// const func = (n: number, m: number, l?: number) => {
//   if (typeof l === "undefined") return m * m;
//   return n * m * l;
// };

// func(2, 3);

//Default parameter

// const func = (n: number, m: number, l: number = 4) => {
//   return n * m * l;
// };
// func(3, 4);

//Rest operator
// type funcType = (...m: number[]) => number[];
// const func: funcType = (...m) => {
//   return m;
// };

// func(25, 23, 34, 5, 7);

//object and function

interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  name: "mac",
  stock: 3,
  price: 999,
  photo: "photourl",
};

getData(productOne);

//readonly - change ni ho sakta

// Never type

type themeMode = "light" | "dark";
const mode: themeMode = "dark"; // only light nd theme

const errorHandler = (): never => {
  throw new Error();
};
