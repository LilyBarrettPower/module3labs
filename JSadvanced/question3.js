

// QUESTION 3 
// a - create a debounce function 
function debounce(func,delay) { //add the delay parameter to the function (b) 
    // The input func is the function that you want to debounce ("printMe" in this case)
    let timerID;
    // declare the variable to hold the ID of the timeout set 

                    //  const delay = 1000; - COMMENT OUT THE DELAY VARIABLE (b) 

    // create a delay of 1000ms so there are no function calls until 1 second of inactivity has passed 
    return function (...args) {
        // the "rest" parameter allows any number of arguments to be passed into the function
        clearTimeout(timerID);
        // Means there is only one timer active at any given time 
        timerID = setTimeout(() => {
            func.apply(this, args);
            // this function is what is executed after the delay 
        }, delay);
    };
}



function printMe(msg) { // add msg as a parameter to the function (c) 
    console.log(msg);
    }
    printMe = debounce(printMe, 800); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    // 1000ms of no calls
    setTimeout(() => printMe('First message'), 100);
    setTimeout(() => printMe('Second message'), 100);
    setTimeout(() => printMe('Third message'), 100);
    // Change the calling of the function printMe to include the message that you want to print when called (c) 
