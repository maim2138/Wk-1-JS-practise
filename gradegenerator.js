function getStudentGrades(marks){
    let grade;
    if(marks > 79) {
        return grade = "A";
    } else if (marks >= 60) {
        return grade = "B";
    } else if (marks >= 50) {
        return grade = "C";
    } else if (marks >= 40) {
        return grade = "D";
    } else {
        return grade = "E";
    }
}

console.log( `Student of marks ${marks}has a grade of ${grade} `);
