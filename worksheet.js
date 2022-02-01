

// // Variables // //

// //Question 1 -- Days of the Week
// let dayOfWeek = 'Monday';
// console.log(dayOfWeek);

// dayOfWeek = 'Friday';
// console.log('I can\'t wait for ' + dayOfWeek + '!');


// // Question 2 -- User Input
// let animalInput = prompt("What is your favorite animal?");
// let colorInput = prompt("What is your favorite color?");
// console.log("I\'ve never seen a " + colorInput + " " + animalInput + "!");



// // Conditionals // //



// // Question 1 -- Meals
// // Favorite breakfast: Avocado Toast
// // Favorite Lunch: Steak salad
// // Favorite Dinner: Vietnamese Pho


// let timeOfDay = prompt("What time is it (in military time)?")
// console.log("It\'s " + timeOfDay + "! You know that that means...")
// let favoriteMeal = "";

// if(timeOfDay < 1200) {
//   favoriteMeal = "Avocado Toast";  
// }
// else if(timeOfDay > 1200 && timeOfDay < 1700) {
//   favoriteMeal = "Steak salad";
// }
// else if (timeOfDay > 1700) {
//   favoriteMeal = "Vietnamese Pho";
// }

// console.log("It\'s " + favoriteMeal + " time!")


// // Question 2 -- Random Number

// let randomNumber = Math.floor(Math.random() * 11); // returns a random integer from 0 to 10

// if(randomNumber >= 0 && randomNumber <= 2) {
//   console.log('Beatles');
// }
// else if(randomNumber >= 3 && randomNumber <= 5) {
//   console.log('Stones');
// }
// else if(randomNumber >= 6 && randomNumber <=8) {
//   console.log('Floyd');
// }
// else if(randomNumber >= 9 && randomNumber <= 10) {
//   console.log('Hendrix');
// }


// // Loops // //



// // Exercise 1 -- Looped message
// for(let i=0; i<7; i++){
//   console.log("Javascript is cool!");
// }


// // Exercise 2 -- Looped printed numbers
// let printNumber = ""; 
// for(let i=0; i<11 ; i++) {
//   let printNumber = i;
//   console.log(printNumber)
// }


// // Exercise 3 -- Hello goodbye

// let wordOne = "hello";
// let wordTwo = "goodbye";

// for(let i=0; i<5; i++) {
//   console.log(wordOne);
//   console.log(wordTwo);
// }



// // Functions // //


// // Exercise 1 -- Favorite Movie (void functions)
//Favorite Movie: Moulin Rouge

// let favoriteMovie = "Moulin Rouge";
// console.log(favoriteMovie)

// function printMovieName() {
//   let favoriteMovie = "Moulin Rouge";
//   console.log(favoriteMovie);
// }

// printMovieName()


// // Exercise 2 -- Favorite Band (return functions)

// function favoriteBand() {
//   let userInput = prompt("What\'s Your favorite band?");
//   return(userInput); 
// }

// let userFavoriteBand = favoriteBand()
// console.log(userFavoriteBand)


// // Exercise 3 -- Concert (parameters)

// function concertDisplay(musicalAct) {
//   let myStreet = prompt("What street do you live on?");
//   console.log("It would be great if " + musicalAct + " played a show on " + myStreet + "!");
// }

// concertDisplay(userFavoriteBand)



// // Arrays // //


// // Exercise 1 -- Desktop Items

// let desktopItems = ['Journal', 'Waterbottle', 'Mousepad', 'Pen bag'];
// desktopItems.push('Infinity Gauntlet');

// for(let i=0; i < desktopItems.length; i++){
//   console.log(desktopItems[i]);
// } 


// // Magic Number // //


function guessTheNumber(){
  let magicNumber = Math.floor(Math.random()*50);
  let userGuess = 0;
  console.log("I'm thinking of a number between 0 and 50...");
  
  while(userGuess != magicNumber) { //while guess is equal to false:
    userGuess = prompt("Pick a number, any number");

    if (userGuess <= magicNumber+10 && userGuess >= magicNumber-10){ // mn= 13 -10 = 3. Ug between 3 and 13
      console.log(userGuess)
      console.log('Getting warmer! Guess again.')
    }
    
    else if (userGuess < magicNumber) { //if guess is less than number
      console.log(userGuess)
      console.log('Too low! Guess again.');
    }  

    else if(userGuess > magicNumber) { //if guess is higher than number 
      console.log(userGuess)
      console.log('Too high! Guess again.');
    }

    else if (userGuess == magicNumber) {
      console.log('You guessed correctly! The magic number is ' + userGuess + "!");
    }
  }
}
guessTheNumber()