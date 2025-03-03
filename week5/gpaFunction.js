function checkGPA(gpa) {
    // returns true if the parameter is between 0 and 4
    // returns false if it isn't
    return gpa >= 0 && gpa <= 4;
}

// prints some tests of the function
console.log("Tests to see if the following GPA's are valid.")
console.log('(-3): ' + checkGPA(-3))
console.log('0:    ' + checkGPA(0))
console.log('3.9:  ' + checkGPA(3.9))
console.log('7:    ' + checkGPA(7))