// Using challow copies
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo, ';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };


let moreSports = [...teamSports, "Equestrian"];
// Created a shallow copy of the array
// Added a new value to the end of the array
moreSports.unshift("Football");
// Added a new sport to the beginnig of the array
console.log(moreSports)

let dog = dog1;
// Create a shallow copy of the string
let dog2 = dog1 + ' ' + "Mary";
// concatenate the new value to the end of the string
console.log(dog2)

let cat2 = {...cat1};
// Create trhe shallow copy 
cat2.name = 'Prince Harry';
// Changed the value of the name property of the object to my cats name (Prince Harry) 
console.log(cat2)


console.log(teamSports)
console.log(dog1)
console.log(cat1)
// The value of the original variables havent changed because the new values were added and changed in new variables 

