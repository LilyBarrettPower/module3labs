// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// QUESTION 1:
let str = "lily barrett power";

function capital() {
arr = str.split(" ");
// Split the string into an array of words so the words can be manipulated individually
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
}
// Capititilise each first letter of each word individually 
// then join the capital letter with the rest of the word 
 return arr.join(" ");
}
// Join the array of words back into a string 

console.log(capital(str))
// Log the final capitilised string 

// QUESTION 2 
// Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.
function trun(str, max) {
    if (str.length > max) {
        return str.slice(0, max-1) + "...";
        // returns the string from position 0 to position of max length-1 (to leave room for ...)
    } else {
        return str;
    }
}
// If str length exceeds the max length then the ellipsis character will be added to equate to max length 
//Using an if...else loop 
function truncate(str, max) {
    return (str.length > max) ?
    str.slice(0, max -1 ) + "..." : str;
}
// truncate a string using the conditional operator 

console.log(trun("I love JavaScript!", 5))
console.log(truncate("Hello my name is Lily", 10))