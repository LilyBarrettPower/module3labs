function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}

    Person.prototype.canDrive = function() {
        return this.age > 16;
    };
// Created a function that prints true if the person is old enough to drive


class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive () {
        return this.age > 16;
    }
    // Add the canDrive method to the class constructor 
}


const person1 = new Person('Lily', 23);
const person2 = new Person('Millie', 24);
// Create two people variables 

let person3 = new PersonClass('Sarah', 50); 
// Create a third person from the class function

console.log(person1);
console.log(person1.canDrive());
// Print the canDrive method result to the console
console.log(person2);
console.log(person2.canDrive());
// Print the people variables to the console 
console.log(person3);
console.log(person3.canDrive());
// Print the new person to the console and the canDrive method to the console