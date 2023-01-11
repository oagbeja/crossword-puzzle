const createPuzzle = (dimension, itemArray) => {
  let itemsWorked = 0;
  //suitable for square
  let arr = twoDimensionArray(dimension, dimension);
  for (let el of itemArray) {
    if (el.trim().length > 0 && el.trim().length <= dimension) {
      //   checkVertical / horzontal;
    }
  }
};

const twoDimensionArray = (m, n) => {
  let arr = new Array(m);
  for (var i = 0; i < m; i++) {
    arr[i] = new Array(n); // make each element an array
  }
  return arr;
};
