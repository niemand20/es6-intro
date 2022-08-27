// method 0
const numbers = [2,3,9,4,6,8];
const output = [];
for (const number of numbers){
    const doubled = number*2;
    output.push(doubled);
}
// console.log(output);

// method 0.5
// function doubles(numbers){
//     const output = [];
//     for (const number of numbers){
//     const doubled = number*2;
//     output.push(doubled);
    
//     }
//     return output;
// }

// 1
function doubles(numbers){
    const output = [];
    for (const number of numbers){
    const doubled = doubleIt(number)
    output.push(doubled);
    
    }
    return output;
}
// method 2
// function doubleIt(number){
//     return number*2
// }

// method 3
const doubleIt = num => num*2;
// -------------------------------------------------------------------------
// method 0,method 0.5, method1+method2, method1+method3 either way is okay
// -------------------------------------------------------------------------

const doubled1 = doubles([2,3,9,4,6,8]);
console.log(doubled1);

// map
// method 1
const makeDouble =  numbers.map(doubleIt);
console.log(makeDouble);

// method 2
const makeDoubleDirect = numbers.map(num=>num*2)
console.log(makeDoubleDirect);

// method 3
const makeDouble2 = numbers.map(x=>x*3);
console.log(makeDouble2);

// method 4
const fiveTimes = [2,34,5,8,93].map(x=>x*5);
console.log(fiveTimes);

