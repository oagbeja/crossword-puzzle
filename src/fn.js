let modeArray = ["V", "H", "D"];
let alpArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const twoDimensionArray = (m, n) => {
  let arr = [];

  for (var i = 0; i < m; i++) {
    arr[i] = [];
    for (var j = 0; j < n; j++) {
      arr[i][j] = "";
    }
  }

  return arr;
};

const getRandomValue = (dimension) => {
  return Math.floor(Math.random() * dimension);
};

const getCoordinates = (dimension) => {
  return [getRandomValue(dimension), getRandomValue(dimension)];
};

const shuffleArray = () => {
  return modeArray.sort(function () {
    return Math.random() - 0.5;
  });
};

const processHorizontal = (arr, coord, word, dimension) => {
  if (word.length + coord[1] > dimension) return false;
  for (let i = coord[1]; i < word.length + coord[1]; i++) {
    if (!arr[coord[0]] || (arr[coord[0]][i] && arr[coord[0]][i] !== ""))
      return false;
  }
  return true;
};

const processVertical = (arr, coord, word, dimension) => {
  if (word.length + coord[0] > dimension) return false;

  for (let i = coord[0]; i < word.length + coord[0]; i++) {
    if (!arr[i] || (arr[i][coord[1]] && arr[i][coord[1]] !== "")) return false;
  }
  return true;
};

const processDiagonal = (arr, coord, word, dimension) => {
  let n = 0;
  let i = coord[0];
  let j = coord[1];
  while (n < word.length) {
    if (
      !arr[i] ||
      !(!arr[i][j] && arr[i][j] === "") ||
      (arr[i][j] && arr[i][j] !== "")
    )
      return false;
    i++;
    j++;
    n++;
  }

  return true;
};

const addDiagonal = (arr, coord, word) => {
  let n = 0;
  let i = coord[0];
  let j = coord[1];
  while (n < word.length) {
    arr[i][j] = word[n];
    n++;
    i++;
    j++;
  }
  return arr;
};

const addHorizontal = (arr, coord, word) => {
  let n = 0;
  for (let i = coord[1]; i < word.length + coord[1]; i++) {
    arr[coord[0]][i] = word[n];
    n++;
  }
  return arr;
};

const addVertical = (arr, coord, word) => {
  let n = 0;
  for (let i = coord[0]; i < word.length + coord[0]; i++) {
    arr[i][coord[1]] = word[n];
    n++;
  }
  return arr;
};

const processFlow = (arr, coord, word, dimension) => {
  let shuffledArr = shuffleArray();
  let result = false;
  for (let el of shuffledArr) {
    switch (el) {
      case "H":
        result = processHorizontal(arr, coord, word, dimension);
        break;
      case "V":
        result = processVertical(arr, coord, word, dimension);
        break;
      case "D":
        result = processDiagonal(arr, coord, word, dimension);
        break;
    }
    if (result === true) return [true, el];
  }

  return [false];
};

const processCoordinates = (arr, dimension, word) => {
  let chkCount = 50;
  let i = 0;

  while (i < chkCount) {
    let coord = getCoordinates(dimension);

    let result = processFlow(arr, coord, word, dimension);
    if (result[0] === true) {
      return [result[1], arr, coord, word];
    }
    i++;
  }
  return false;
};

const addToArr = (procResult) => {
  let arr = procResult[1];
  let coord = procResult[2];
  let word = procResult[3];

  switch (procResult[0]) {
    case "H":
      arr = addHorizontal(arr, coord, word);
      break;
    case "V":
      arr = addVertical(arr, coord, word);
      break;
    case "D":
      arr = addDiagonal(arr, coord, word);
      break;
  }
  return arr;
};

const fillRemaining = (arr, dimension) => {
  for (let i = 0; i < dimension; i++)
    for (let j = 0; j < dimension; j++) {
      if (!arr[i][j])
        arr[i][j] = alpArray[Math.floor(Math.random() * alpArray.length)];
    }
  return arr;
};

const createPuzzle = (dimension, itemArray) => {
  let itemsWorked = [];
  //suitable for square
  let arr = twoDimensionArray(dimension, dimension);

  for (let el of itemArray) {
    if (el.trim().length > 0 && el.trim().length <= dimension) {
      //   checkVertical / horzontal;
      el = el.trim().toUpperCase();
      let procResult = processCoordinates(arr, dimension, el);

      if (!procResult) continue;
      arr = addToArr(procResult);

      itemsWorked.push(el);
    }
  }

  arr = fillRemaining(arr, dimension);
  return [arr, itemsWorked];
};

export default createPuzzle;
