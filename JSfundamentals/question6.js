
const westley = {
    name: 'Westley',
    numFingers: 5
    }

    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }

    const inigo = {
    firstName: 'Inigo',
    // Add a last name property
    lastName: 'Botswana',
    greeting(person) {
    // Add the last name property to the function
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + getCatchPhrase(person));
    }, 
    }
// Needed to remove the "this." from the console.log because getCatchPhrase is a variable now, not a function...

            // getCatchPhrase(person) {
            //     if (person.numFingers === 6) {
            //         return 'You killed my father. Prepare tp die.';
            //     } else {
            //     return 'Nice to meet you.';
            //     } 
            //     }
            // }
// Completed an if...else statement to change the greeting depending on number of fingers 
// Commented out the above function using orginal syntax 

const getCatchPhrase = (person) => (
    person.numFingers === 6 ? 'You killed my father. Prepare to die' : 'Nice to meet you.'
   )
//    Changed the function to an arrow function with conditional operator

    inigo.greeting(westley)
    inigo.greeting(rugen)