let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

function oddLengths (array) {
  newArray = array.map(element => element.length).filter(element => element % 2 === 1);
  return newArray
}
