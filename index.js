function myStartsWith(searchString, pos) {
  pos = pos || 0;
  //return this.substring(pos,searchString.length)===searchString
  for (let i = pos; i < searchString.length; i++) {
    if (searchString[i] !== this[i]) {
      return false;
    }
  }
  return true;
}
console.log(myStartsWith.call("myy", "yy", 1)); // true
console.log(myStartsWith.call("myy", "myy")); // true
console.log(myStartsWith.call("myy", "yy")); //false

function myFlat() {
  const newArr = [];
  function helper(input) {
    if (Array.isArray(input)) {
      input.forEach(helper);
    } else {
      newArr.push(input);
    }
  }
  helper(this);
  return newArr;
}

console.log(
  myFlat.call([
    [
      [
        ["a", "b"],
        ["c", "d"],
      ],
      [
        ["e", "f"],
        ["g", "h"],
      ],
    ],
    [
      [
        ["i", "j"],
        ["k", "l"],
      ],
      [
        ["m", "n"],
        ["o", "p"],
      ],
    ],
  ])
);
/*
 [
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p'
]
 */

function myFilter(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}
console.log(myFilter.call([1, 2, 3, 4], (i) => i % 2 === 0)); //[2,4]

function myReducer(callback, initial) {
  let prev = initial;
  for (let i = 0; i < this.length; i++) {
    prev = callback(prev, this[i], i, this);
  }
  return prev;
}
console.log(myReducer.call([1, 2, 3], (prev, curr) => prev + curr, 0)); //6
// console.log(module.exports === exports);
