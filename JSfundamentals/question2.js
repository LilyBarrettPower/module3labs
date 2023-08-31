// What of the below are not giving the correct answer
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
// This will return "34" because the 3 and 4 will be treated as strings 
// To fix this you could make it so that three and four are not strings (remove quotes)
// You could explicitly convert them to numbers using Number class function:
        let addition2 = Number(three) + Number(four);    
        console.log(addition2);
    // this will convert the strings in three and four to their number counterparts 
    // you could also use parseInt to convert the strings to intergers 

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
// Again, could remove the quotes in the variables to make them numbers OR use Number class function 
console.log(lessThan2)

    let lessThan3 = Number(thirty) < Number(four);
    console.log(lessThan3);
    //this will return false as lessThan3 has converted the strings to numbers 



