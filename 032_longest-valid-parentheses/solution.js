/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // TODO
  var buf = [],
    count = 0;
  for (var i = 0, len = s.length; i < len; i++) {
    if (buf.length === 0) {
      buf.push(i);
    } else {
      var idx = buf.pop();
      if (s[idx] === '(' && s[i] === ')') {
      } else {
        buf.push(idx, i);
      }
    }
  }
  console.log(buf);
  return count;
};

var data = [
  { s: '(()', result: 2 },
  { s: '()(())', result: 6 }
];
for (var i of data) {
  var result = longestValidParentheses(i.s);
  console.log(result, result === i.result);
}
