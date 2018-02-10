/**
 * 04 - Destructuring Assignment
 *
 */
const agent = {
  firstName: 'James',
  lastName: 'Bond',
  age: 37,
  sex: 'm',
  codeName: '008',
  handgun: true
};

const firstName = agent.firstName;
console.log(agent.lastName);
/**
 * You can change the const name of an object value
 * You can give default values
 */
const { firstName: name, lastName, age, sex, codeName = '007' } = agent;

console.log(name, lastName, age, sex, codeName);

// Destructure array
const arr = ['Goldmember', 'baron'];
const [villanName, villanSurname] = arr;

console.log(villanName, villanSurname);

/**
 *
 * Force the order of the output
 */
const fullName = ({firstname, lastname}) => {
  console.log(firstname, lastname);
};

// Put the value in an object to force the output
fullName({lastname: 'Bond', firstname: 'James'});

/**
 * Spread the rest of the values inside an object
 */
const { firstName: fname, lastName: lname, ...restAgentData } = agent;
console.log(fname, lname, restAgentData);
