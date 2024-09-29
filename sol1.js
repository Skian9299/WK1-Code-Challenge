const prompt = require('prompt-sync')();

const marks = parseInt(prompt("Enter student marks between 0 and 100: "));

if (marks >= 0 && marks <= 100) {
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(`The student's grade is: ${grade}`);
} else {
    console.log("Invalid input! Please enter marks between 0 and 100.");
}
