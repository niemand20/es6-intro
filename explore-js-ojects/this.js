// console.log(this);

const kodomAli = {
    name: "kodom ali",
    money: 5000,
    study: "math",
    subject: ["calculus","geometry", "algebra"],
    exam: function(){
        console.log(this);
        // console.log(this.name, " is participating in an exam");
        return this.name + " is participating in an exam";
    },
    examArrow: ()=>{
        console.log(this);
    },
    examNested:()=>{
        const arrow = ()=>{
            console.log(this);
        }
        arrow();
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

kodomAli.exam();

const badamAli = {
    name: "kacha badam",
    money: 8000
}

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler(){
    console.log("inside clickHandler ",this);
}
document.getElementById("btn-click2").addEventListener("click",function(){
    console.log(this);
})