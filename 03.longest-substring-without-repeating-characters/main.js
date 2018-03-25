/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  return s
    .split('')
    .reduce((arr, item) => {
      if (!arr.includes(item))
        arr.push(item);
      return arr;
    }, []).length;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
