class TeamMeamber{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}


class Instructor extends TeamMeamber {
    designation = "Web Course Instructor";
    team = "web team";
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`Start support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Create quiz for module ${module}`)
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}
class Developer extends TeamMeamber{
    
    designation = "Developer";
    team = "web team";
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the feature ${feature}`)
    }
    release(version){
        console.log(`release new version ${version}`)
    }
   
}

class JobPlacement extends TeamMeamber{
    
    designation = "Job Placement Commandos";
    team = "Job Placement";
    region;
    
    constructor(name, location,region){
        super(name,location)
        this.region = region;
        
    }
    developFeature(feature){
        console.log(`please develop the feature ${feature}`)
    }
    release(version){
        console.log(`release new version ${version}`)
    }
    
}

const alia = new Developer("Alia Bhatt", "Dhaka", "React");
console.log(alia);
alia.provideFeedback()
const bipasha = new JobPlacement("bipasha", "kolkata", "india");
console.log(bipasha);