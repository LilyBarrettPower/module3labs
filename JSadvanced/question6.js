/*Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/

Function.prototype.delay = function (ms) {
  // adds a new method "delay" to the function prototype
  const originalFunction = this; // assigns the current function to the originalFunction variable
  //   constructor function
  return function (arg1, arg2) {
    // returns a new function that takes 2 parameters
    setTimeout(function () {
      // creates trhe delay
      originalFunction(arg1, arg2); // calls the orginal function with the 2 parameters
    }, ms); // delay input in ms
  };
};

function multiply(a, b) {
  console.log(a * b);
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// b - use apply to incease the number of possible parameters

Function.prototype.delay2 = function (ms) {
  const secondFunction = this;
  return function (...args) {
    //...args allows any number of arguments to be passed
    setTimeout(() => {
      secondFunction.apply(this, args); // .apply binds the context to the function
    }, ms);
  };
};

function multiply2(a, b, c, d) {
  console.log(a * b * c * d); // using 4 parameters
}
multiply2.delay2(1000)(5, 5, 5, 5);

// c - Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works. - done above.
