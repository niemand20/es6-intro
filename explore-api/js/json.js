const user = {id: 1, name: "amir gorib", job:"actor"};
// Javascript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: "alia",
    address:{
        street: "kochukhet bhut er goli",
        city: "Dhaka",
        country: "BD"
    },
    products:["laptop","mic", "monitor", "keyboard"],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
// console.log(typeof shop)
// console.log(typeof shopJSON)