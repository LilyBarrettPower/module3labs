function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
// a - I think that the printing order will be #4, #3, #2, #1 

/*setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')*/

// b - rewrite the function as an arrow function 

const delayFunc = (msg) => console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayFunc, 100, '#1: Delayed by 100ms');
setTimeout(delayFunc, 20, '#2: Delayed by 20ms');
setTimeout(delayFunc, 0, '#3: Delayed by 0ms');
delayFunc('#4: Not delayed at all');

// c - Add a fifth test that has a large delay 
let delay5 = setTimeout(delayFunc, 15000, '#5: Delayed by 15000ms');

//  d - Use clearTimeout to prevent the fifth test from printing 
clearTimeout(delay5);

