function jumpOverFence(fox) {
  return `${fox} Jumps Over The Fence`;
}

// Test the function
console.log(jumpOverFence("The Lazy Brown Fox")); // should return "The Lazy Brown Fox Jumps Over The Fence"
function isEvenOrOdd(num) {
  return num % 2 === 0;
}

// Test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(5)); // should return false
function celsiusToFahrenheit(celsiusNumber) {
  return (celsiusNumber * 9) / 5 + 32;
}

// Test the function
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32
function findMaxNumber(arr) {
  return Math.max(...arr);
}

// Test the function
console.log(findMaxNumber([1, 2, 3, 4, 5])); // should return 5
function sayHelloWorld() {
  setTimeout(() => {
    console.log("Hello World");
  }, 2000);
}

// Test the function
sayHelloWorld(); // should log "Hello World" after 2 seconds
