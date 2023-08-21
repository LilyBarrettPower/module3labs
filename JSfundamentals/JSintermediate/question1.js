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

console.log(trun("I love JavaScript!", 5));
console.log(truncate("Hello my name is Lily", 10));

// QUESTION 3 
const animals = ['Tiger', 'Giraffe']
console.log(animals);

// a - add 2 new values to the end 
animals.push('Horse', 'Banshee');
console.log(animals);

// b - add 2 values to the beginning of the array 
animals.unshift('Goat', 'Pig');
console.log(animals);

// c - sort the array alphabetically
animals.sort();
console.log(animals);

// d - create a function to replace the middle animal
 function replaceMiddleAnimal(newValue) {
    if (animals.length % 2 == 0) {
        console.log("Cannot find middle animal");
        return;
        // Create a fall back so that if there is no "middle animal" the function will return an error statement
    } else {
     const middleIndex = Math.floor(animals.length / 2);
     animals[middleIndex] = newValue;
    }
    // If there is a middle animal the function will replace that animal.
}
    // Create the function to replace the middle animal with a new value

replaceMiddleAnimal('Crocodile');
// call the function, error message returned as there is no middle animal 

animals.push('Elephant');
// Added a new value so that there is a middle animal 
replaceMiddleAnimal('Crocodile');
console.log(animals);
// log the array with the middle animal replaced with crocodile


// e - Create a function to return an array that contains all beginsWith elements 
function findMatchingAnimals(beginsWith) {
    beginsWith = beginsWith.toLowerCase();
    // Convert to lowercase
    const matchingAnimals = [];
    // Create an empty array which stores the animals names that meet the criteria 
    for (const animal of animals) {
        // Loop that iterates over each animal in the array animals 
        if (animal.toLowerCase().startsWith(beginsWith)) {
            // Adding toLowerCase to convert the animal and begins with to lowercase so the function is case insenstive
            matchingAnimals.push(animal);
        }
        // Checks if the current animal name starts with the "beginsWith" string 
        // if it does, the animals name is added to the matchingAnimals array
    }
    return matchingAnimals;
}

const startsWithG = findMatchingAnimals("G");
console.log(startsWithG);
// Call and log the findMatchingAnimals function 

const startsWithp = findMatchingAnimals("p");
console.log(startsWithp);
// Call thhe function using the case insensitivity
