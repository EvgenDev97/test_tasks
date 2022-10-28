const someArray = [3, 10, 3, 3, 3];
const someArrayTwo = [1, 1, 2, 1, 1];
const someArrayThree = [1, 0, 0];
const someArrayFor = [0, 1, 0];
const someArrayFive = [1, 1, 1, 2, 1, 1];
const findUniqNumber = (arr) => {
  const uniq = arr.find((e) => arr.indexOf(e) == arr.lastIndexOf(e));
  return uniq;
};
alert(findUniqNumber(someArray));
console.log(findUniqNumber(someArrayTwo));
console.log(findUniqNumber(someArrayThree));
console.log(findUniqNumber(someArrayFor));
console.log(findUniqNumber(someArrayFive));
