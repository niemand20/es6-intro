const bottle = {
    color:"yellow",
    price: 50,
    isCleaned: true,
    capacity: 1
}

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
//console.log(pairs);

console.log(bottle);
//seal cannot remove existing property or add a new property, but can modify that property
// Object.seal(bottle);
//freeze prevents to remove or add or modify a property
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 200;
bottle.height = 12;
console.log(bottle);

