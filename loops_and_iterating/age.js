let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

console.log('You are ' + age + ' years old.');

for (let i = 10; i < 41; i += 10) {
  console.log(`In ${i} years, you will be ${i + age} years old.`);
}
