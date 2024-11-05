let message = "Hello, World!";
console.log(message);
let myVariable = "The muffin man";
console.log(myVariable);

// Incorrect: treating a string like a function

function greeting(i) {
  console.log(i);
}

greeting("ik where you live");
const user = {
  name: "John",
  age: 30,
};

// Accessing properties safely
console.log(user.name); // "John"
console.log(user.age); // 30

console.log("User info: " + user.name + " | " + user.age);

let num = 15;
console.log(num + 5);
