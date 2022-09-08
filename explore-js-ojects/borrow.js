const kodomAli = {
    name: "kodom ali",
    money: 5000,
    study: "math",
    subject: ["calculus","geometry", "algebra"],
    exam: function(){
        // console.log(this.name, " is participating in an exam");
        return this.name + " is participating in an exam";
    },
    //you can call one method inside another method
    improveExam: function(sub){
        this.exam();
        return `${this.name} is taking improve exam on ${sub}`
    },
    //set object's value
    treatDey: function(amount,tips){
        this.money = this.money- amount-tips;
        return this.money;
    }

};
const result = kodomAli.exam();
// console.log(result);

const badamAli = {
    name: "kacha badam",
    money: 8000
}

//borrowing method from another object (using call)
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badamAli, 400,40);
// console.log(badamMoney);

//borrowing method from another object (using apply)
const badamMoney2 = kodomAli.treatDey.apply(badamAli,[1000,100]);
// console.log(badamMoney2);

//borrowing method from another object (using bind)
const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000,100);
console.log(remaining);