// QUESTION 1 
function makeCounter(startsFrom, incrementBy) { //add startsFrom argument as a parameter (b) add incrementBy parameter (c)
    let currentCount = startsFrom || 0; // If startsFrom is not provided the conter will start at 0 (b)
    incrementBy = incrementBy || 1; // If incrementBy is not provided, it should increment by 1 
    return function() {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2


    // a - Create a second counter and test that it stays independent from the first counter 
    let counter2 = makeCounter();
    counter2();
    counter2();
    // yes the two counters do stay independent from each other 

    // b - Modify makeCounter to start from a starting point rather than from 0 

    let counter3 = makeCounter(10); // The counter will start counting at 10 
    counter3(); // 11
    counter3(); // 12 

    // c - Add an argument that determines the increment of each call 
    let counter4 = makeCounter(6, 2); // Counter will start at 6 and increment by 2 
    counter4(); // 8 
    counter4(); // 10 



