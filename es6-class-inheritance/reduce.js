//reduce(accumulatorFunction, initial value)
//accumulatorFunction uses two parameters: the initial value and final value.

const numbers = [1,2,3,4,5,6];
// const total = numbers.reduce((previous, current)=>previous+current ,0)
const total = numbers.reduce((previous, current)=>{
    console.log(previous, current);
   return previous+current;
} ,0)
console.log(total);
