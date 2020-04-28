let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));

function sumOfSquares (array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0)
}
