function findLargestNumber(arr) {
  return Math.max(...arr); // Using spread operator to pass array elements as individual arguments
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Should output: 8
function removeDuplicates(arr) {
  return [...new Set(arr)]; // Convert Set back to array using spread syntax
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Should output: [1, 2, 3, 4, 5]
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0); // Keep only even numbers
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output: [2, 4]
function filterArray(arr, steps) {
  const n = arr.length;
  steps = steps % n; // To handle cases where steps is greater than the array length
  return arr.slice(steps).concat(arr.slice(0, steps)); // Slice the array at 'steps' and concatenate
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]
function rotateArray(arr, steps) {
  const n = arr.length;
  steps = steps % n; // To handle cases where steps is greater than the array length
  return arr.slice(steps).concat(arr.slice(0, steps)); // Rotate the array
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]
