// Enums in typescript are commonly used when u want to represent a set of related values and choose on value from multiple options.
//An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// In typescript , when enum constants are note explicitly assigned numeric values,they are automatically assigned incremental numeric values starting from 0.the default numeric
//value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

//example
// user 1 = login => normal user bnaega
// user 2 = login => admin user bnjyga yh user

enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  name: "jatin",
  email: "jatin@yahoo.com",
  password: "jatin",
  role: Roles.admin,
};

const user2: LoginDetails = {
  email: "jatin23@yahoo.com",
  password: "jatin23",
  role: Roles.user,
};

// Now, how to check if the user is admin
const isAdmin = (user: LoginDetails): string => {
  const { email, role } = user;

  return role === Roles.admin
    ? `${email} is allowed to edit the website.`
    : `${email} is not allowed to edit the website.`;
};

console.log(isAdmin(user1)); // Output: jatin@yahoo.com is allowed to edit the website.
console.log(isAdmin(user2)); // Output: jatin23@yahoo.com is not allowed to edit the website.
