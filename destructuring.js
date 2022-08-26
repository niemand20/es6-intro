const fish = {
    name: "king hilsha",
    address: "chandpur",
    color: "silver",
    phone: '01293923428',
    price:4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone);
// console.log(color);
// console.log(price);

//object destructing
const {address} = fish;
// console.log(address);



const {age, name} = {name:"almas", age:45, profession: "makeup artist"};
// console.log(age);

//array destructing
const [first, another] = [347,962];
// console.log(first, another);

const nayoks = ['shakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king);

// destructure return value from a function
const getNames = ()=>['alim', 'halim'];
const [baba,chacha] = getNames();
console.log(baba, chacha);
