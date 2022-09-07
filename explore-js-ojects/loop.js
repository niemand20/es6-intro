const numbers = [23,42,68,79,86,19]
for (const number of numbers ){
    // console.log(number);
}
// <------------------------->
const bottle = {
    color:"yellow",
    price: 50,
    isCleaned: true,
    capacity: 1
}
//for of cannot be used on objects
// for (const key of bottle){
//     // console.log(key);
// }
// <------------------------->
/*
3 ways to read object properties
1. object.color[property name]
2.object["color"] ->[hard-coded property name]
3.bottle[key] -> [when we don't know property's name, we store the value in a variable and then loop through it]
*/ 
// <------------------------->

//getting all the values of keys and loop through that values
const keys = Object.keys(bottle)
for (const key of keys){
    // console.log(key);
    //  console.log(key, bottle[key]);
}

//getting all the values of values and loop through that values
// const values = Object.values(bottle);
// for(const value of values){
//     // console.log(value);
//     console.log(value,bottle[value])
// }


// Object.keys() returns an array. So we can loop through this array
// for (const key of Object.keys(bottle)){
//     console.log(key);
// }
// <------------------------->


//for in loop
// for (const key in bottle){
//     const value = bottle[key];
//     console.log(key, value);
// }

// <------------------------->

//advanced system
const pair = Object.entries(bottle);
// console.log(pair);

for(const [key,value] of Object.entries(bottle)){
    console.log(key, value);
}



