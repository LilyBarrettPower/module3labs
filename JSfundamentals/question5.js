

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
// Print the function to the console
console.log(getGreeting("Lily"))
    


// Rewrite this function using:
// function expression syntax:

const greeting = function(name) {
    return 'Hello ' + name + "!";
}

console.log(greeting("Lily"))

// Arrow function syntax 

const greetingAgain = (name) => {return 'Hello ' + name + "!"};
// Print the return to the console 
console.log(greetingAgain("Lily"))

// The second part of the function must be in curly braces :) 