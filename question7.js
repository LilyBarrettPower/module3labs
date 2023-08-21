// To allow for method chaining, each method needs to return a object or value that the next method can be called on

const basketballGame = {
    score: 0,
    fouls: 0,
    // Added a fouls object property
    freeThrow() {
    this.score++;
    return this; //Returning "this" for chaining
    },

    basket() {
    this.score += 2;
    return this; // Returning "this" for chaining
    },

    threePointer() {
    this.score += 3;
    return this; // Returning "this" for chaining
    },

    foulCount() {
        this.fouls++;
        return this;
    },
    // Added a foulCount function 

    halfTime() {
    console.log('Halftime score is: ' +this.score, 'Halftime foul count is: ' +this.fouls);
    return this; // for chaining 
    },
    // added foul count to the halftime score 

    fullTime() {
    console.log('Full time score is: ' +this.score, 'Full time foul count is: ' +this.fouls);
    return this;
    }
    }
    // added a new method to print the full time score 
    // added foul count to the full time score

    //modify each of the above object methods to enable function chaining as below:
             // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foulCount().halfTime().fullTime();
    // added fullTime function to this function chain.
    // added foul count to the function chain
    // The function chain what theb "game"

    basketballGame.basket().basket().freeThrow().basket().foulCount().basket().halfTime().threePointer().basket().foulCount().basket().freeThrow().foulCount().fullTime()
    // different combination of method calls