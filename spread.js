const max = Math.max(12,43,56,76,84);
// console.log(max)
const numbers = [23,343,543,846,124];
const largest = Math.max(...numbers);
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

// const numbers2 = [numbers]
const numbers2 = [...numbers]
numbers.push(942);
numbers2.push(637);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers]
const numbers4 = [8346,3472,5092,...numbers,9638];
console.log(numbers3);
console.log(numbers4);
