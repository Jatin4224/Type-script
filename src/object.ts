type obj = {
  height: number;
  weight: number;
  gender?: boolean; //means this value is optionnal
};

const obj1: obj = {
  gender: true,
  weight: 34,
  height: 21,
};

const obj2: obj = {
  weight: 4,
  height: 5,
};

//using interface

interface objj {
  height: number;
  weight: number;
  gender?: boolean; //means this value is optionnal
}
const obj3: objj = {
  gender: true,
  weight: 34,
  height: 21,
};

const obj4: objj = {
  weight: 4,
  height: 5,
};

// -when we have to create class or object we use interface
