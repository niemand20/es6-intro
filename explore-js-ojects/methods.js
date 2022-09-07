const student = {
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
// const stuExam =  student.exam();
// console.log(stuExam);
const reExam = student.improveExam("algebra");
// console.log(reExam);

const treatMoney = student.treatDey(900,100);
console.log(treatMoney);

const dolaRemaining = student.treatDey(500,50);
console.log(dolaRemaining);