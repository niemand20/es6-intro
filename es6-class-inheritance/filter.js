const numbers = [23,45,65,93,90,29,60, 3, 77, 80, 56,98];
const bigNums = numbers.filter(number=> number>60);
// console.log(bigNums);
const even = numbers.filter(number=> number%2===0);
const odd = numbers.filter(number=> number%2===1);
// console.log(even);
// console.log(odd);

const products = [
    {id: 1, name :"laptop" ,price: 50000},
    {id: 2, name :"mobile" ,price: 85000},
    {id: 3, name :"watch" ,price: 35000},
    {id: 4, name :"tablet" ,price: 40000}
];

const expensive = products.filter(product=>product.price>150000);
console.log(expensive);

