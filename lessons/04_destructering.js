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
const { firstName: name, lastName, age, sex, codeName = '007' } = agent;

console.log(name, lastName, age, sex, codeName);

const arr = ['Goldmember', 'baron'];
const [villanName, villanSurname] = arr;

console.log(villanName, villanSurname);

const fullName = ({firstname, lastname}) => {
  console.log(firstname, lastname);
};

fullName({lastname: 'Bond', firstname: 'James'});

const { firstName: fname, lastName: lname, ...ruben } = agent;
console.log(fname, lname, ruben);
