// @ts-check

/**
 * @param {string} input
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak1 = function (input, wordDict) {
  /**
   * @type {Map}
   */
  const dictionary = new Map(
    Object.entries(wordDict).map(([key, value]) => [value, value])
  );
  let tempWord = input;
  const length = input.length;
  let firstPointer = 0;
  let secondPointer = 0;
  for (let i = length; i > length; i--) {
    if (dictionary.has(tempWord.slice(firstPointer, secondPointer + 1))) {
      tempWord = tempWord.slice(secondPointer + 1);
      firstPointer = 0;
      secondPointer = 0;
      continue;
    }
    secondPointer++;
  }

  console.log("😊 -> wordBreak1 -> tempWord", tempWord);
  return !tempWord.length;
};

const result1 = wordBreak1("tifanni", ["ti", "ff", "a", "f", "n", "i"]);
console.log("😊 -> result1", result1);

const result2 = wordBreak1("leetcode", ["leet", "code"]);
console.log("😊 -> result2", result2);

const result3 = wordBreak1("applepenapple", ["apple", "pen"]);
console.log("😊 -> result3", result3);

const result4 = wordBreak1("catsandog", ["cats", "dog", "sand", "and", "cat"]);
console.log("😊 -> result4", result4);

const result5 = wordBreak1("aaaaaaa", ["aaaa", "aaa"]);
console.log("😊 -> result5", result5);
