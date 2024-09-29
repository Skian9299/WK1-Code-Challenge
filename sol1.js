// Function to determine the grade based on entered marks
function calculateGrade(marks) {
    // Check if the entered marks are valid, i.e., between 0 and 100 inclusive
    if (marks >= 0 && marks <= 100) {
        let grade; // Declare a variable to store the grade

        // Determine the grade based on the entered marks
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

        // Output the determined grade
        console.log(`The student's grade is: ${grade}`);
    } else {
        // Print an error message for invalid input
        console.log("Invalid input! Please enter marks between 0 and 100.");
    }
}

// Declare the marks variable
let marks = 85; // Example mark
calculateGrade(marks);
