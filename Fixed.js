function squareNumber(num) {
  return num * num;
}

// Test the function
console.log(squareNumber(4)); // should return 16
function repeatString(str) {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += str;
  }
  return result;
}

// Test the function
console.log(repeatString("Hello")); // should return "HelloHelloHello"
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test the function
console.log(reverseString("Hello")); // should return "olleH"
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
}

// Test the function
console.log(randomNumber()); // should return a random number between 1 and 10
