let num = 4936

console.log(`The ones place of ${num} is ${num % 10}`);
console.log(`The tens place of ${num} is ${(num % 100 - (num % 10)) / 10}`);
console.log(`The hundreds place of ${num} is ${(num % 1000 - (num % 100)) / 100}`);
console.log(`The thousands place of ${num} is ${(num % 10000 - (num % 1000)) / 1000}`);
