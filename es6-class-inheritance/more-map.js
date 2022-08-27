const numbers = [12,32,74,80,96];
const half = numbers.map(x=>x/2);
const thirds = numbers.map(x=>x/3);
const thirds1 = numbers.map(x=>(x/3).toFixed(2));
const thirds2 = numbers.map(x=>parseFloat((x/3).toFixed(2)));
// console.log(half);
// console.log(thirds);
// console.log(thirds1);
// console.log(thirds2);

const friends = ["tom ", "tom hanks", "tom brady", "Tom solaiman"];
const firstLetters = friends.map(x=>x[0]);
// console.log(firstLetters);
const nameLength = friends.map(x=>x.length);
// console.log(nameLength);

const products = [
    {id: 1, name :"laptop" ,price: 50000},
    {id: 2, name :"mobile" ,price: 85000},
    {id: 3, name :"watch" ,price: 35000},
    {id: 4, name :"tablet" ,price: 40000}
];
// const items = products.map(product=>console.log(product));
// const items1 = products.map(product=>console.log(product.name));
const items1 = products.map(product=>product.name);
const prices = products.map(p=>p.price)
console.log(items1);
console.log(prices);