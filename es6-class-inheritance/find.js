const numbers = [23,45,65,93,90,29,60, 3, 77, 80, 56,98];
const fives = numbers.find(num => num%5===0);
const fivesAll = numbers.filter(num => num%5===0);
console.log(fives);
console.log(fivesAll);
const products = [
    {id: 1, name :"laptop" ,price: 50000},
    {id: 2, name :"mobile" ,price: 85000},
    {id: 3, name :"watch" ,price: 35000},
    {id: 4, name :"tablet" ,price: 40000}
];
const cheap = products.find(pro=>pro.price<50000);
console.log(cheap);