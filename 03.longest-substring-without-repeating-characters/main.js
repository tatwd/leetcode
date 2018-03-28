/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  // return s
  //   .split('')
  //   .reduce((arr, item) => {
  //     if (!arr.includes(item))
  //       arr.push(item);
  //     return arr;
  //   }, []).length;
  // let i, j, len, map = {};
  // let start = 0, end = 0;
  // for (i = 0, j = 0, len =  s.length; i < len; ++i) {
  //   start = j;
  //   if (map[s[i]])
  //     j = map[s[i]];
  //   else
  //     map[s[i]] = i;
  // }
  // end = j;
  // return s.slice(start, end);

  /*
   * solution 1 - use Map
   */
  let map = new Map();
  let res = 0;

  // todo

  return res;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
