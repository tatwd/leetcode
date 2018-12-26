/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  var set = new Set();
  var result = 0;
  var current = 0;
  for (var c of s) {
    if (set.has(c)) {
      result = Math.max(result, current);
      set.clear();
      current = 0;
    }
    set.add(c);
    current++;
  }
  return result;
};

var data = [
  "abcabcbb",
  "bbbbb",
  "pwwkew"
]
for (var s of data) {
  let result = lengthOfLongestSubstring(s);
  console.log(result);
}

