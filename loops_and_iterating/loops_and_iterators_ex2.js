function factorial (n) {
  for (let facLoop = 0, result = 1; facLoop <= n; facLoop += 1, result = result * facLoop) {
    if (n === facLoop) {
      return result
    }
  }
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
