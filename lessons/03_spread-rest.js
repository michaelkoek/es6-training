/**
 * 03 - Spread and Rest operators
 *
 */

const obj1 = {a: 1, e: 2, c: 3};
const obj2 = {d: 4, e: 5, f: 6};

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const weapons = { knife: 1, handgun: 'dessert eagle'};
const soldier = {...weapons, name: 'team 6',  department: 'navy seals'};

console.log(soldier);
// Yeay,

//
const arr = [10, 1, 2, 4, 5];
const max = Math.max(...arr);
console.log(max);

const mystring = 'hello';
const char = [...mystring];
console.log(char);

const abet = ['alpha','bravo', 'charlie'];
const endabet = [...abet, 'x-raxy', 'yankee', 'zulu'];

console.log(endabet);

const copyAbet = [...endabet];

endabet.push('Delta');
console.log('endabet', endabet);
console.log('copyAbet', copyAbet);
console.log(endabet);

/**
 * Rest OPERATOR
 * @param victor
 */
const missions = (...victor) => {
  console.log(victor)
};
const data = {
  name: 'michael',
  age: 31
};
missions(data);
