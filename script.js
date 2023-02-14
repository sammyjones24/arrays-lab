'use strict'

console.log('hello world');

// let randomNum = 5; //let locally scoped
// var num = 2;  //var locally scoped
// const number = 7; //const globally scoped

// console.log(randomNum);
// console.log(num);
// console.log(number);

document.write('<h2>Arrays</h2>');
document.write('<h1>Arrays Lab</h1>');

// alert('this is an alert message be careful!');
// let name = prompt('what is your name');
// console.log(name);
// let numb = prompt('choose a number between 1 and 10')

// if(numb < 5){
//   document.write('your number was less than 5');
// }
// else{
//   document.write('your number is greater than 5');
// }

//for loop syntax
// for(statement 1; statement 2; statement 3)
//statement 1 where you are starting you the for most of the time it will be let i=0
//statement 2 is the condition you want to run through ex) i < 10
//statement 3 is how often you excute the command ex) i++

for(let i=0; i<10; i++){
  console.log(i);
}
const numb1 = prompt('pick a number');
const numb2 = prompt('pick another number');
Number(numb1);
Number(numb2);
let add = function add(numb1, numb2){
  document.write(numb1 + numb2)
}

add(numb1, numb2);