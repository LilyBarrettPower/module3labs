// What of the below are not giving the correct answer
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
// This will return "34" because the 3 and 4 will be treated as strings 
// To fix this you could make it so that three and four are not strings (remove quotes)
// You could explicitly convert them to numbers using Number class function

console.log(addition)

let multiplication = three * four
// This will return 12 because the implicit conversion of the strings to numbers due to the mathematical operator 
let division = three / four
// This will return 0.75 

let subtraction = three - four
// This will return 11 due to implicit conversion 
console.log(subtraction)

let lessThan1 = three < four
// Will return true because F is higher in the alphabet than T
console.log(lessThan1)

let lessThan2 = thirty < four
// Will return true becayse F is higher than T in the alphabet
console.log(lessThan2)