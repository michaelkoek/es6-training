/**
 * 02 - Arrow Functions
 *
 */
// // function declaration
function myAge() {
  return 31;
}

console.log(myAge());

// function expression
const sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 4));

// implicit return
const add = (a, b) => {
  const n = a + 1;
  return n + b;
};
console.log(add(2, 5));

// explicit
const multiply = (a, b) => a * b;

console.log(multiply(2, 2));

const divide = a => 2 / 2;
console.log(divide());

/**
 * Default parameters
 */
const added = (a = 5, b = 10) => {
  return a + b;
};
console.log(added(4));
console.log(added(4, 10));
console.log(added(undefined, 20));
console.log(added(null));

const students = [
  {
    "index": 0,
    "isActive": false,
    "age": 25,
    "eyeColor": "blue",
    "name": "Roach Hunter",
    "gender": "male"
  },
  {
    "index": 1,
    "isActive": true,
    "age": 22,
    "eyeColor": "brown",
    "name": "Dena Terrell",
    "gender": "female"
  },
  {
    "index": 2,
    "isActive": true,
    "age": 28,
    "eyeColor": "blue",
    "name": "Vanessa Guthrie",
    "gender": "female"
  },
  {
    "index": 3,
    "isActive": false,
    "age": 31,
    "eyeColor": "brown",
    "name": "Dolores Frank",
    "gender": "female"
  },
  {
    "index": 4,
    "isActive": false,
    "age": 36,
    "eyeColor": "blue",
    "name": "Natasha Adams",
    "gender": "female"
  }
];


//map
const showStudents = students.map((std, num, arr) => {
  return {
    uid: num,
    data: arr,
    name: std.name,
    gender: std.gender,
    eyeColor: std.eyeColor
  };
});

console.log(showStudents);

for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}

// forEach
students.forEach((student, i) => {
  console.log(`hi ${student.name} ${i}`);
});

// filter
const ageStudent = students.filter((stud) => {
  return stud.name.length > 12
});

console.log(ageStudent);

// for... in looop
for (let i in students) {
  console.log(i)
}

const getAgeAcc = students
  .map(student => student.age) // [25, 40, 16, 19]
  .reduce((acc, cur = 0) => acc + cur);

console.log(getAgeAcc);

// Return the first found index
const findStudent = students.findIndex(student => {
  return student.isActive;
});

// console.log(findStudent);

const number = [1, 2, 3, 4, 7, 5, 6, 10];
//
const getAgeStudent = students.filter(student => student.age > 25);
console.log(getAgeStudent);

const numberMoreFive = number.filter(num => num > 5);
console.log(numberMoreFive);


const eyeColor = students.map(item => {
  return {
    name: item.name,
    eyecolor: item.eyeColor
  };
});
console.log(eyeColor);


const eyeOlder = students
  .filter(student => student.age > 25)
  .map(item => item);

console.log(eyeOlder);

const ageAcc = students
  .map(student => student.age)
  .reduce((acc, cur = 0) => acc + cur);

console.log(ageAcc);

//

const greetStudent = (student, i) => {
  return `Hello ${student.name} ${i}`;
};

// Referentie variabel naar 'greetStudent
console.log(greetStudent);

// const myStudent = students.map(function(item) {
//   return item;
// });

// Map expects a method with argument
const myStudent = students.map(greetStudent);

console.log(myStudent);

function* generator(i) {

  yield i;
  yield i + 10;
  yield i + 100;

}
const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

