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
// console.log(currencyOperation(0.6, 0, '/', 9)); // error - division by 0 
// console.log(currencyOperation(0.6, 0.9, '/', 12)); // error - decimals must be between 1 and 10 

// QUESTION 6 
// create a function that returns all unique values 
function unique(duplicatesArray) {
    const uniqueArray = [];
    // create the emptyb array for the unique values to go into 
    for (const item of duplicatesArray) {
        if(!uniqueArray.includes(item)) {
            // iterate the duplicate array looking for unique items
            uniqueArray.push(item);
            // if the unique array does not include the item, push the item into the unique array
        }
    }
    return uniqueArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(unique(colours));
console.log(unique(testScores));

// QUESTION 7 
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
//  a - write a function that uses the find function to return a book title with the matching id 
function getBookTitle(bookID) {
    const bookTitle = books.find(book => book.id === bookID);
    return bookTitle ? bookTitle.title : 'Book not found';
}

console.log(getBookTitle(1));

//  b Write a function to return all book objects written before 1950
function getOldBooks() {
    const oldBooks = books.filter(book => book.year < 1950);
    // Use the .filter method to add any books with the year less than 1950 to the variable oldBooks
    return oldBooks;
}

console.log(getOldBooks(books));

// c - Add a new genre property to all the books with the value classic 
// map function creates a new array with the results of a function applied to every index 
function addGenre() {
    const booksGenre = books.map((book) => ({
        // create a new variable for the new array with the genre to add to 
        ...book, 
        // copy each book property using spread syntax 
        genre: 'classic'
    }));
    return booksGenre
}
console.log(addGenre(books));

//  d - return an array for books that are written by authors starting with authorInitial 
function getTitles(authorInitial) {
    const titles = 
    books.filter(book => book.author.charAt(0) === authorInitial)
    // get the first character of the author property and compare to the authorInitial
    books.map(book => book.title);
    // the map function creates a new array with the titles of the books that fit the .filter condition

    return titles;
}

const titleInitial = getTitles('A');
console.log(titleInitial);

// e - use find and foreach to find the book with the most recent publication date 
// function latestBook() {
//     const bookDate = books[0];
//     // create an empty array 
//     books.forEach(book => {
//         books.find(books => book.year )
//     })
// }

// QUESTION 8 
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
// a - Create a new map that stores names beginnning with D,E and F 
const phoneBookDEF = new Map()
// b - initialise the contents 
phoneBookDEF.set('Dianne', '0220215282')
phoneBookDEF.set('Eilish', '0220215282')
phoneBookDEF.set('Finlay', '0220768899')
// c - update the phone number for carline 
phoneBookABC.set('Caroline', '090800838383')
// d - write a function that prints the values and properties of the map 
function printPhoneBook(contacts) {
    contacts.forEach((phoneNumber, name) => {
        // forEach iterates over every contact in the phonebook
        console.log(`${name}: ${phoneNumber}`);
        // and logs the name and phonenumber of each contact 
    });
}
printPhoneBook(phoneBookABC);
// e - combine both phonebooks 
const phoneBookABCDEF = new Map([...phoneBookABC, ...phoneBookDEF]);
// Using the spread syntax to combine the maps 
console.log(phoneBookABCDEF);

// f - print out the list of names in the phonebook 
for (const name of phoneBookABCDEF.keys()) {
    // .keys returns an iterable for the keys 
    console.log(name);
}

// QUESTION 9 
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

// a - write a function that calculates and returns the total salaries 
function salariesSum(salaries) {
    let total = 0;
    // create the variable to store the sum, starts at 0
    for (const name in salaries) {
        // iterate through the keys and add the corresponding salaries
        total +=salaries[name];
    } 
    return total;
}

console.log(salariesSum(salaries));

// b - write a function that calculates and returns the name of the top earner 
function topEarner(salaries) {
    let highestSalary = 0;
    let topEarnerName = null;
    // create the empty variables 
    for (const name in salaries) {
        if(salaries[name] > highestSalary) {
            highestSalary = salaries[name];
            topEarnerName = name;
        }
        // use a for...in loop to iterate over the salaries and compare them
        // the name of the person with the highest salary will be returned 
    }
    return topEarnerName;
}

console.log(topEarner(salaries));

// QUESTION 10 

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
// a - Print the total number of minutes that have passed today
const totalMinutesPassed = today.getHours() * 60 + today.getMinutes();
console.log('Total minutes passed today: ' + totalMinutesPassed);
// need to add getHours otherwise it just prints the amount of miinutes that have passed since the last hour 
// b - print the total number of seconds that have passed today 
const totalSecondsPassed = totalMinutesPassed * 60 + today.getSeconds();
// Used the previous function totalMinutesPassed to get the total minutes *60 = total seconds before THIS hour 
console.log('Total seconds passed today: ' + totalSecondsPassed);

// c - calculate and print your age 
const birthDate = new Date('2000-04-14');
//  create a date object for my birthday 

const years = today.getFullYear() - birthDate.getFullYear();
const months = today.getMonth() - birthDate.getMonth();
const days = today.getDate() - birthDate.getDate();
// calculating the difference between todays date and my birthdate, adding these to variables 

if (months < 0 || (months === 0 && days <0)) {
    years--; //This accounts for if the birthdate hasnt happened yet this year 
    // if the true, one year will be subtracted 
    // -- is a decrement value, subtracts one from the value 
}
if (months < 0) {
    months += 12;
    // Checks if the birthday has happened this year, if true, adds 12 to the month output 
}
if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() -1, birthDate.getDate());
    days += (today - lastMonth) / (24 * 60 * 60 * 1000);
    months --;
    // checks the birthday has happned this day, if true it will calculate the number of days remaining in the previous month 
    //  and subtract one months difference from it 
}

console.log(`I am ${years} years, ${months} months and ${days} days old.`);

// d - create a function that returns the difference between two dates 
function daysInBetween(date1, date2) {
    return ((date2 - date1) / (24 * 60 * 60 * 1000));
    // need to divide by milliseconds per day as all dates are stored in JS as milliseconds 
}

dateA = new Date ('2023-04-12');
dateB = new Date ('2023-04-15')
console.log(daysInBetween(dateA, dateB));
