//a type alias is way to give a name to specific type or combination of types.it allows you to create a custom name for a type,making it easier to reuse
// and refer to the same type in different parts of your code.

type Personn = {
  name: string;
  age: number;
  isStudent: boolean;
  adress: { city: string; country: string };
};

const person: Personn = {
  name: "jatin",
  age: 24,
  isStudent: true,
  adress: {
    city: "Pune",
    country: "India",
  },
};

//Q) define an interface or type representing a product with properties for name, price, and quantity.
// create a product object with the following data:
//name: "laptop"
//price: 1000
//quantity: 5

type Productt = {
  name: string;
  price: number;
  quantity: number;
};

const product = {
  name: "laptop",
  price: 1000,
  quantity: 5,
};

//given the product object from the prev question ,write a function called calculateTotalPrice taht calculates and returns the total price (price *quantity  )of the product

const calculateTotalPrice = (product: Productt) => {
  return product.price * product.quantity;
};

console.log(calculateTotalPrice(product));
