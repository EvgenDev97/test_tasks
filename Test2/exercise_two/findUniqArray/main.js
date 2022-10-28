let someArray = [1, 2, 3, 2, 2, 3, 3, 1];
let someArrayTwo = [1, 1, 2, 2, 4, 2, 3, 7, 3];
const findUniqArray = (Arr) => {
  let result = [];
  for (let str of Arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};

alert(findUniqArray(someArrayTwo));

//other methods
/*
const findUniqArrayTwo = Array.from(new Set(someArrayTwo));
console.log(findUniqArrayTwo);

const findUniqArrayThree = [...new Set(someArray)];
console.log(findUniqArrayThree);*/
