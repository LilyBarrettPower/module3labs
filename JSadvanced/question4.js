// QUESTION 4 
// Write a function that outputs a number in the fibinachi sequence every second 

function printFibonacci() {
    let a = 0;
    let b = 1;
    // Create the variables that start the sequence 

    const intervalID = setInterval(() => {
        // Set interval repeates teh function every interval 
        console.log(a); // Value a is logged
        const nextNumber = a + b; // creates teh fibbonacci sequence 
        a = b; // a is updated to b 
        b = nextNumber; // b is updated to nextNumber 
    }, 1000); // interval of 1000ms / one second 

    setTimeout(() => {
        clearInterval(intervalID);
    }, 10000); // the sequence will continue for 10 seconds 
}

printFibonacci();

function printFibbonacciTimeout(limit) { // add the limit as an argument
    let a = 0;
    let b = 1; 
    let count = 0; // create a variable to house the count 

    function printNext() {
        // printNext is the nested function 
        if (count >= limit) { // if the count is less than the limit, continue running the sequence 
            return;
        }
        console.log(a);
        const nextNumber = a + b;
        a = b;
        b = nextNumber; 

        count++; //increment the count

        setTimeout(printNext, 1000);
        // schedules itself to print the next number in the sequence after 1 second 
    }
    printNext();
    // starts the sequence
}

printFibbonacciTimeout(10); // print the sequence 10 times 