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


// QUESTION 4 
// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.

function camelCase(cssProp) {
    const words = cssProp.split('-');
    // Split the inputted string where there are hyphens 
    for (let i = 1; i < words.length; i++) {
        // incremenet through the word. When the character is not the first chractaer in the first word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // Change the character at position 0 of the splity words to uppercase 
    return words.join('');
    // join the split words back together
}

console.log(camelCase('margin-left'));
// print the camelCased words to the console 

// re-write the function using a for...in loop:
function camelCase2(cssProp) {
    const myvar = cssProp.split('-');
    for(let i in myvar) {
        if(i !== '0') {
            myvar[i] = myvar[i].charAt(0).toUpperCase() + myvar[i].slice(1);
        }
    }
    return myvar.join('');
}
console.log(camelCase2('hello-this-ispractice'));

// re-write the function using a for...of loop
function camelCase3(cssProp) {
    const mywords = cssProp.split('-');
    let isFirstWord = true;
    let camelCased = '';

    for(const myword of mywords) {
        if(isFirstWord) {
            camelCased += myword;
            isFirstWord = false; 
        } else {
            camelCased += myword.charAt(0).toUpperCase() + myword.slice(1);
        }
    }
    return camelCased;
}
console.log(camelCase3('another-camel-case-function'));

// re-write the function using the conditional operator 
function camelCase4(cssProp) {
    const thiswords = cssProp.split('-');
    let firstWord = true; 
    let camelcase = '';

    for (const thisword of thiswords) {
        camelcase += camelcase ? thisword.charAt(0).toUpperCase() + thisword.slice(1) : thisword;
    }
    return camelcase;
}

console.log(camelCase4('this-is-another-practice-one'));

// QUESTION 5 
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// This code returns the wrong results because floating point number cannot be represented accurately in binary 

// a - why does this code not work?
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) 
// toFixed is used to make a floating-point number into a fixed number of decimal places 
// it returns a string representation of the toFixed number. 
// Because it returns a string representation, doing arethmateic on the result of toFixed can result in string concatenation 
// which has occurred here with this code.

// b - create a function that adds the two numbers correctly 
function currencyAddition(float1, float2) {
    const precision = 100; //The number of decimal places to consider 
    const int1 = Math.round(float1 * precision);
    const int2 = Math.round(float2 * precision);
    // Convert the floating point numbers to integers 
    // Math.round returns the value rounded to the nearest integer 
    const sumInCents = int1 + int2;
    // Add the numbers as integers to maintain accuracy 
    const result = sumInCents / precision; 
    // Convert the result back to floating point numbers 

    return result 
}
console.log(currencyAddition(0.10, 0.20)); 

//  c - create a function that returns the given matheamatical equation 
// d - extend the function to support different decimal places:
function currencyOperation(float1, float2, operation, numDecimals) { //added the numDecimals parameter 
    if (numDecimals < 1 || numDecimals > 10) {
        throw new Error ("numDecimals must be between 1 and 10");
    }
    const precision = Math.pow(10, numDecimals); //The number of decimal places to consider 
    //Adding math.pow calculates the precision required for the number of decimals inputted in numDecimals.
    // Allows you to work with the integer representation of the floating point number  to retain accuracy 
    const int1 = Math.round(float1 * precision);
    const int2 = Math.round(float2 * precision);
     // Convert the floating point numbers to integers 
    // Math.round returns the value rounded to the nearest integer
    let resultsInCents;

        switch (operation) {
            case '+':
                resultsInCents = int1 + int2;
                break;
            case '-':
                resultsInCents = int1 - int2;
                break;
            case '*':
                resultsInCents = int1 * int2;
                break;
            case '/':
                if (int2 !== 0) {
                    resultsInCents = int1 / int2;
                } else {
                    throw new Error ("Division by 0");
                    // check to avoid division by 0 
                } 
                break;
            default: 
                throw new Error("Invalid mathematics: " + operation);
        }
        // Switch statement handles different operators, depending on what is inputted will result in which case is used
        // default is initiated if the oepration doesnt match any of the cases 
        const result = resultsInCents / precision;
        // change the integers back to floating point numbers 
        return result;
}

console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, '+', 2));
console.log(currencyOperation(0.5,0.5,'*', 9));
console.log(currencyOperation(0.6, 0, '/', 9)); // error - division by 0 
console.log(currencyOperation(0.6, 0.9, '/', 12)); // error - decimals must be between 1 and 10 



