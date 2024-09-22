// sortingAlgorithms.js
export const bubbleSort = async (arr, setArray, speed) => {
  const array = [...arr];
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        setArray([...array]);
        await delay(speed); // Adjust delay based on user speed input
      }
    }
  }
  return array;
};

export const selectionSort = async (arr, setArray, speed) => {
  const array = [...arr];
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArray([...array]);
      await delay(speed); // Adjust delay based on user speed input
    }
  }
  return array;
};

export const mergeSort = async (arr, setArray, speed) => {
  const array = [...arr];
  await mergeSortHelper(array, 0, array.length - 1, setArray, speed);
  return array;
};

const mergeSortHelper = async (array, start, end, setArray, speed) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  await mergeSortHelper(array, start, mid, setArray, speed);
  await mergeSortHelper(array, mid + 1, end, setArray, speed);
  await merge(array, start, mid, end, setArray, speed);
};

const merge = async (array, start, mid, end, setArray, speed) => {
  let tempArray = [];
  let i = start, j = mid + 1;
  
  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      tempArray.push(array[i++]);
    } else {
      tempArray.push(array[j++]);
    }
  }
  
  while (i <= mid) tempArray.push(array[i++]);
  while (j <= end) tempArray.push(array[j++]);
  
  for (let k = start; k <= end; k++) {
    array[k] = tempArray[k - start];
    setArray([...array]);
    await delay(speed); // Adjust delay based on user speed input
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
