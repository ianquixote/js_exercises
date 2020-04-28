function factorial(number) {
  let result
  if (number === 0) {
    result = 1
  } else {
    result = factorial(number - 1) * number
  }
  return result
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
