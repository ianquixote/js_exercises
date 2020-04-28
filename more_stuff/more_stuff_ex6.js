let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/);

function allMatches (array, regex) {
  let newArray = [];
  words.forEach(function (word) {
    if (regex.test(word)) {
      newArray.push(word);
    }
  });
  console.log(newArray);
}
