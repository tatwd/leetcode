/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var result = [];
  for (var i = 0; i < numRows; ++i) {
    // FIXME: get a currect d
    var d = numRows - i === 1 ? (numRows - 1) * 2 : (numRows - i - 1) * 2;
    for (var j = i; j < s.length; j += d) {
      result.push(s[j]);
    }
  }
  return result;
};

var data = [
  { s: 'PAYPALISHIRING', numRows: 3 },
  { s: 'PAYPALISHIRING', numRows: 4 }
];
for (var i of data) {
  var result = convert(i.s, i.numRows);
  console.log(result);
}
// PAHNAPLSIIGYIR
// PINALSIGYAHRPI
