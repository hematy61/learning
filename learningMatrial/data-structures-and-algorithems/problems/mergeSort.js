// @ts-check

/**
 *
 * step 1: divide - recursively divide the list into smaller lists
 * step 2: conquer -  recursively sort the sub-lists
 * step 3: merge - recursively merge the sub-lists
 *
 * @param {number[]} list
 */
function mergeSort(list) {
  // Recursion stopping condition
  if (list.length <= 1) return list;

  // divide
  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);
  const leftList = mergeSort(left);
  const rightList = mergeSort(right);

  // conquer and merge
  return sortAndMerge(leftList, rightList);
}

function sortAndMerge(leftList, rightList) {
  let result = [];
  let i = 0;
  let j = 0;

  // sort and merge
  while (i < leftList.length && j < rightList.length) {
    if (leftList[i] < rightList[j]) {
      result.push(leftList[i]);
      i++;
    } else {
      result.push(rightList[j]);
      j++;
    }
  }
  const a = result.concat(leftList.slice(i)).concat(rightList.slice(j));
  return a;
}

console.log(mergeSort([20, 1, 100, -1, 1, 200, 0, 6, 4]));

module.exports = {};
