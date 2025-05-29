const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 60 },
    { name: "Eve", grade: 95 },
    { name: "Frank", grade: 78 },
    { name: "Grace", grade: 65 },
    { name: "Heidi", grade: 88 }
];
const resultDisplay = document.getElementById("resultDisplay");

function filterPassingStudents(studentList, minGrade) {
    return studentList.filter(student => student.grade >= minGrade);
}

const passingGrade = 70;
const passingStudents = filterPassingStudents(students, passingGrade);
console.log(`Students with a grade of ${passingGrade}`);
console.log(passingStudents);
