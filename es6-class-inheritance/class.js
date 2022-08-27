class Instructor {
    name;
    designation = "Web Course Instructor";
    team = "web team";
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Create quiz for module ${module}`)
    }
}

const aamir = new Instructor("amir", "mumbai");
console.log(aamir);
aamir.startSupportSession("9.00");

const solaiman = new Instructor("solaiman", 'Dhaka');
console.log(solaiman);