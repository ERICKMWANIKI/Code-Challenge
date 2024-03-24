// Function for the user for input  a valid mark is entered
function promptForMark() {
    let mark;
    do {
        mark = parseFloat(prompt("Enter the student's mark (0-100):"));
    } while (isNaN(mark) || mark < 0 || mark > 100);
    return mark;
}

// Function to calculate and return the grade based on mark
function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// function to run the program
function main() {
    const mark = promptForMark();
    const grade = calculateGrade(mark);
    console.log(`The student's grade is: ${grade}`);
}

// Run the main function
main();