// @ts-check

/**
 * Binary search has O(log n) time complexity
 *
 * @param {Array<number>} list
 * @param {number} target
 * @returns
 */
function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;

  // finding the match
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (list[middle] === target) {
      // best case and finding the index of the target
      return middle;
    } else if (list[middle] < target) {
      // moving left after the middle
      left = middle + 1;
    } else {
      // moving right before middle
      right = middle - 1;
    }
  }

  // when there is no match
  return "not found";
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(a, 5));

module.exports = binarySearch;
