function multiply(num1, num2) {
  return num1 * num2
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}.`);
