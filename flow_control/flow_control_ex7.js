function allCapsIf10 (string) {
  if (string.length > 10) {
    console.log(string.toUpperCase());
  } else {
    console.log(string);
  }
}

allCapsIf10('Hello World');
allCapsIf10('goodbye')
