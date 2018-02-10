/**
 * 01 - VAR, CONST, LET, OBJ, String Template, and Conditions
 *
 */

var fName = 'Ludwig';
var lName = 'Beethoven';
var age = 56;
var job = 'composer';
var myname;


/**
 * Shothand objects
 */

const myComposer = {
  fName: fName,
  lName: lName,
  age,
  job
};

console.log(myComposer);


/**
 * String template
 */
// var a = 'hi, ' + fName + ' ' + lName;
const b = `Hi, I'm ${ fName } ${ lName }, 

I'm ${ age } and work as a ${ job }.`;
console.log(b);

/**
 * VAR, LET & CONST
 */
var composername = 'Ludwig';
console.log(composername);

composername =  'Mozart';
console.log(composername);

let composername2 = 'Ludwig';
console.log(composername2);

composername2 =  'Mozart';
console.log(composername2);

// const composername3 = 'Ludwig';
// console.log(composername3);
//
// composername3 =  'Mozart';
// console.log(composername3);

function f() {
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log('x in block scope is', x);
    console.log('y in block scope is', y);
    console.log('z in block scope is', z);
  }
  console.log('x outside of block scope is', x);
  console.log('y outside of block scope is', y);
  console.log('z outside of block scope is', z);
}

f();

/**
 * Conditions
 */

if (job) {
  console.log(job);
}

if (job === 'composer') {
  console.log(job);
} else {
  console.log(' IETS ANDERS');
}

const jobType = job === 'composer' ? 'CORRECT' : 'WRONG';
console.log(jobType);

const jobShow = job === '' && ('MY JOB');
console.log(jobShow);
