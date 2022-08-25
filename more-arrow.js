const add  = (first,second) => first + second;
const getFullName = (first,last) => first +' '+ last;
const multiply = (first,second) => first * second;
const result = multiply(10,2);
console.log(result);


// no parameter arrow function
const getPie =()=>3.14;

// one parameter
const doubleIt = (num)=>num*2;

// one parameter simple version
const fiveTimes = num => num*5;

// multiline arrow function
//if you want to return something in multiple line arrow function, you should return manually 
const doMatch = (x,y,z)=>{
    const firstSum = x+y;
    const secondSum = y+z;
    const multiplyResult = firstSum+secondSum;
    const result = multiplyResult/2;
    return result;
}