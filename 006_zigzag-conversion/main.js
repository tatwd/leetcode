/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var result = [];
  var n = (numRows - 1) * 2;
  for (var i = 0; i < numRows; ++i) {
    var d = i * 2;
    for (var j = i; j < s.length; j += d) {
      result += s[j];
      d = n - d || n;
    }
  }
  // var curRow = 0;
  // var goingDown = false;
  // for (var c of s) {
  //   result[curRow] = !result[curRow] ? c : result[curRow] + c;
  //   if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
  //   curRow += goingDown ? 1 : -1;
  // }
  return result;
};

var data = [
  { s: 'PAYPALISHIRING', numRows: 3 }
  // { s: 'PAYPALISHIRING', numRows: 4 }
];
for (var i of data) {
  var result = convert(i.s, i.numRows);
  console.log(result);
}
// PAHNAPLSIIGYIR
// PINALSIGYAHRPI
