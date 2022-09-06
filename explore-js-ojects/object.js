//1. create object using object literals
const player = {};
//object properties
player.name =" Small Nirob";
player.specialty = "batsman";

//player.bat is a method, not function
player.bat = function(){
    console.log("swing your bat");
}
// console.log(player);
// player.bat();

//2.
const student = {
    name:"pandy",
    job:"khay ande",
    ball: function(){
        console.log("throw the ball");
    },
    salary : 200000

}

//3. object constructor
//it works without even calling new
const person = new Object();
// console.log(person);

//4. object create method
// const item = Object.create(null);
const atel = Object.create(student)
// console.log(atel);
// console.log(atel.name);


//5. class 
class Person{
    name = "ablu";
    address = "sodor ghat";
    constructor(age,eld){
        this.age = age;
        this.eld = eld;
    }
}

const person1 = new Person(56,34);
// console.log(person1);

//5. create object using function 

function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car("elon", 32);
console.log(tesla);

