// @ts-check

/**
 * linear search iterates over the list and time complexity O(n)
 * @param {Array<number>} list
 * @param {number} target
 * @returns
 */
function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }

  return "not found";
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(linearSearch(a, 0));

module.exports = {};
