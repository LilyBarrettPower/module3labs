/*We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.*/

/* a - Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below*/

function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000; // create a delay of a random number between 1 and 20 seconds

  return new Promise((resolve, reject) => {
    if (delay % 2 === 0) {
      // making the if statement to determine if the delay number is even
      setTimeout(() => {
        resolve(`Promise has been resolved after ${delay} milliseconds`); //d - add the delay into the messages
      }, delay);
    } else {
      setTimeout(() => {
        reject(`Promise was rejected after ${delay} milliseconds`); // d - add the delay into the messages
      }, delay);
    }
  });
}
randomDelay()
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  }); //c - create a catch to print a rejected message
//b -If the random delay is even, consider this a successful delay and resolve the promise,
//and if the random number is odd, consider this a failure and reject it
