function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else if (number % 2 === 1) {
    console.log('odd');
  } else {
    console.log('Error, number must be an integer');
  }
}

evenOrOdd(1)
evenOrOdd(2)
evenOrOdd(3.5)
evenOrOdd(4.5)
