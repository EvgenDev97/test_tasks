const buildArrayFromPrompts = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array[i] = prompt(`Введите число ${i}`);
  }
  return array;
};

const sumArray = (array) => {
  return array.reduce((sum, elem) => sum + +elem, 0);
};
//alert(sumArray(buildArrayFromPrompts(4)));

const buildMatrixFromPrompts = (size) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = buildArrayFromPrompts(size);
  }
  return matrix;
};
//console.log(buildMatrixFromPrompts(3));

const sumMatrix = (matrix) => {
  return matrix.reduce((sum, array) => sum + sumArray(array), 0);
};

alert(sumMatrix(buildMatrixFromPrompts(2)));
