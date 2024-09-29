const readline = require('readline-sync'); // Import readline-sync

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok"); // Print "Ok" if speed is within the limit
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            console.log("License suspended"); // Print message if license is suspended
        } else {
            console.log(`Points: ${demeritPoints}`); // Correctly print the number of points
        }
    }
}

// Example usage:
const speed = parseInt(readline.question("Enter the car's speed: "), 10); // Use readline-sync for input
// Call the speedDetector function with the entered speed
speedDetector(speed);
