/*In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.*/

// a - Define a custom toString method for the Person object that will format and print
// their details
function Person(name, age, gender) {
  // constructor function
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }; // toStirng method specifies the string format of the object
}
const person1 = new Person("James Brown", 73, "male"); // person1 is created using the Person constructor
console.log("person1: " + person1);

// b - create two new people using the constructor function
const person2 = new Person("Lily Barrett", 23, "female");
const person3 = new Person("Millicent Harrex", 23, "female");
console.log("Person 2: " + person2);
console.log("Person 3: " + person3);

//c - create a new constructor function "student" that uses call to inherit from person
// add an extra property: cohort

// Forwarding with call or apply is a way to pass all arguments along with the
// context when calling a function.
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender); //Inherit properties from Person using .call
  this.cohort = cohort; // add the cohort property to Student

  this.toString = function () {
    //d - add a toString method to print the student details
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
  };
}
const student1 = new Student("Lily Barrett", 23, "female", "2023");
console.log("Student 1: " + student1);

const student2 = new Student("Tony Power", 52, "male", "1800's");
console.log("Student2: " + student2);
