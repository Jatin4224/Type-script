//this function call signature refers to the decalration or defination of a function ,which includes the functions name,parameters, and return
//type.it defines the structure and type information of a function without including the functions implementation or body.

//type alias in obj
type Student = {
  name: string;
  age: number;
  gender?: string;
};

const student1: Student = {
  name: "jai",
  age: 22,
};

const introduction: () => 