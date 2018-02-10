/**
 * VARIABLES, CONDITIONS - TEST
 * Theme: Famous Composer
 *
 * 1: Convert this data into variables using let/const:
 * - First name : Wolfgang
 * - Last name : Mozart
 * - Place of Birth : Salzburg
 * - Age : 57
 * - Year of Death : 1791
 *
 * 2: Re-assign one of the variables to a new value
 *
 * 3: Store the variables into an object
 *    - Use the shorthand
 *
 * 4: Create the following sentence and log it to the screen:
 *    - Create a function and pass the object as an argument
 *    - output this sentence:
 *      "[fn] [ln] was born in [pob] and died in [yod] at the age of [age]"
 *
 *
 * 5: Use the first name variable to check if the name is Wolfgang
 *    - TRUE -> set to -> Beethoven
 *    - FALSE -> set to -> Wolfgang Amadeus
 *
 * 6: Create a new condition to check if value of the previous task
 * resulted into 'Beethoven'.
 *    - TRUE -> log sentence: "Beethoven was born in Bonn"
 */

// 1:
let firstName = 'Wolfgang';
const lastName = 'Mozart';
const pob = 'Salzburg';
const age = 57;
const yod = 1791;

// 2
firstName = 'Wolfgang Amadeus';

// 3
const composerObj = {
  firstName,
  lastName,
  pob,
  age,
  yod,
};

console.log(composerObj.lastName = 'yrdt');


// 4
function composerInfo(composerObj) {
  const s = `${composerObj.firstName} ${composerObj.lastName} was born in ${composerObj.pob} and died in ${composerObj.yod} at the age of ${composerObj.age}`;

  console.log(s);
}
composerInfo(composerObj);

// 5
const composerName = firstName === 'Wolfgang' ? 'Beethoven' : 'Wolfgang Amadeus';
console.log(composerName);

// 6
const secondComposer =  composerName === 'Beethoven' && ('Beethoven was born in Bonn');
console.log(secondComposer);
