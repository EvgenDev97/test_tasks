const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combineObjects(...objs) {
  return objs.reduce((a, b) => {
    //a - вычисляемое значение; a = a[0]
    //reduce последовательно обрабатывает каждый элемент и сохраняет промежуточный результат
    //каждая итерация принимает на вход результат предыдущей итерации и текущий элемент массива
    for (let k in b) {
      if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}

console.log(combineObjects(objA, objC, objD));
