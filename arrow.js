// function expression
const add = function add(first, second){
    const total = first+second;
    return total;
}

// anonymous function
const add2 = function (first, second){
    const total = first+second;
    return total;
}

const add3 = function(first,second){
    return first+second;
}

// arrow function
const add4 = (first,second)=>first+second;
const result = add4(10,20)
console.log(result);


// const result = add(10,20);
// console.log(result);