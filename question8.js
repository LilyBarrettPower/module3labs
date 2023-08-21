const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }


const brisbane = {
    name: 'Brisbane',
    population: 2_580_000,
    state: 'QLD',
    founded: '13 September 1824',
    timezone: 'Australia/Brisbane'
}
//Created the second object 

function iterateProperties (city) {
for (let key in city) {
    console.log('Property: ' + key);
    console.log('Value: ' + city[key]);
}}
// Wrote a function that created a for...in loop to print all properties of sydney
iterateProperties(sydney);
iterateProperties(brisbane);
//Altered the function so that it can be called for multiple objects 
//Called the function for both sydney and brisbane objects 

