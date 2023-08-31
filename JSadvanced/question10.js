/*10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)
*/
import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// a - Write a new version of this function using async/await
async function waitForPromise(url) {
  // declare async function that takes url as an argument
  let fPromise = fetch(url).then((response) => {
    // Call fatch function from library, initiate HTTP request.then() handles response
    if (response.status === 200) {
      // status code 200 means OK
      return response.json(); // if OK, return the parsed JSON data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
      //   If not OK, return an error
    }
  });
  let fetchResult = await fPromise; // wait for completion of the promise
  //   assign the resultsb to fetchResult
  console.log(`Success: `, fetchResult); // log resolved JSON data
  return fPromise;
}

waitForPromise("https://jsonplaceholder.typicode.com/todos/1"); // call the function

//  b - try with valid and invalid URLs
//  "request failed with status 404" - is the reslt when the URL is invalid :)

// c - use promise.all to allow an array of URLs

async function waitPromise(...urls) { //use rest syntax to allow multiple arrays
  try {
    const fPromises = urls.map(url => // use a map as needs to be iterable 
      fetch(url).then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
    );
    const fetchResult = await Promise.all(fPromises); // use Promise.all to wait for all promises 
    console.log(`Success: `, fetchResult);
    return fPromises;
  } catch (error) {
    console.error(error.message); // if ANY promise fails, an error will occur 
    throw error;
  }
}

const urlArray = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2"
];

waitPromise(...urlArray); // rest syntax 
