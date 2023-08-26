/*The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails
//  When passing the car.description as an argument to setTimeout, the context is lost and the method is unable to
// access the properties of car. "This" is lost

// a - fix setTimeout by wrapping it in a function

setTimeout(() => car.description(), 200);
//  Wrapped the call to car.description in an arrow function

// b - change the year by creating a clone and overriding it
const carClone = { ...car, year: 2000 };
// Using the spread syntax

// c - the delayed description uses the original value because it is calling the object car, not carClone

// d - use bind to fix the description method
const boundCar = car.description.bind(car);
//explicitly binding the right context into the function reference
setTimeout(boundCar, 200);

//e - clone and change another property
const carCloneTwo = { ...carClone, make: "lamborghini" };
setTimeout(boundCar, 500);

// set timeout does still use the values from the original

setTimeout(() => carCloneTwo.description(), 1000);
