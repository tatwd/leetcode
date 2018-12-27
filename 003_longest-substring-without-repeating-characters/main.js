/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // Solution 1
  var chars = [];
  var result = 0;
  for (var i = 0, len = s.length; i < len; ++i) {
    var index = chars.indexOf(s[i])
    if (index !== -1) {
      chars = chars.slice(index + 1);
    }
    chars.push(s[i]);
    result = Math.max(result, chars.length);
  }
  return result;
};

var data = [
  { s: '', result: 0 },
  { s: ' ', result: 1 },
  { s: 'dvdf', result: 3 },
  { s: 'ckilbkd', result: 5 },
  { s: 'abcabcbb', result: 3 },
  { s: 'bbbbb', result: 1 },
  { s: 'pwwkew', result: 3 }
];
for (var i of data) {
  let result = lengthOfLongestSubstring(i.s);
  console.log(result, result === i.result);
}
