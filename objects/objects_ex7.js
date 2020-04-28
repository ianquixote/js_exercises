let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
  rad: 4,
  dude: 5
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2
console.log(newObj.qux);
console.log(newObj.rad);
console.log(newObj.dude);

let newObj2 = copyObj(objToCopy, [ 'foo', 'rad', 'dude' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
console.log(newObj2.qux);
console.log(newObj2.rad);
console.log(newObj2.dude);

console.log(objToCopy);
console.log(newObj);
console.log(newObj2);

function copyObj (obj, arr) {
  if (arr !== undefined) {
    let newObj = {}
    arr.forEach(key => newObj[key] = obj[key]);
    return newObj;
  } else {
    return obj;
  }
}
