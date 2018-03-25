/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let obj = {};
  let len = 0;

  s.split('')
    .forEach(item => {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
      });

  return Object.keys(obj).length;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
