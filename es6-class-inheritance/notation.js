const student = {
    name: "kolim uddin",
    age: 15,
    class: "ten",
    marks: {
        math: 93,
        physics: 80,
        chemistry: 71
    }
}

const marks = student.marks.math;
// console.log(marks);

//can access marks using third brackets as well
 const physics = student["marks"]["physics"];
//  console.log(physics);

// 
 const subject = "math";
 const subjectMarks = student.marks[subject];
 console.log(subjectMarks);
