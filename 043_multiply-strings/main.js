/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (!num1 || !num2) return num1 || num2;
  if (num1 == '0' || num2 == '0') return '0';

  // TODO: 需要优化

  var len1 = num1.length
    , len2 = num2.length
    , rows = []
    , cur = r = v = 0
    , ans = s = '';

  for (var i = len1 - 1; i >= 0; --i) {
    r = v = 0;

    var row = [];
    for (var k = 0; k < len1 - i - 1; k++)
      row.push(0);

    for (var j = len2 - 1; j >= 0; --j) {
      v = num1[i] * num2[j];
      if (!row.length) {
        row.unshift(v % 10);
      } else {
        if (r !== 0) {
          row[0] = (v % 10) + r;
        } else {
          row.unshift(v % 10);
        }
      }
      r = (v / 10) ^ 0;
      if (r > 0) row.unshift(r);
    }
    rows.push(row);
  }

  for (var row of rows) {
    s = '';
    r = 0;
    var d = row.length - ans.length;
    for (var i = row.length - 1; i >= 0; i--) {
      var v = i - d < 0 ? 0 : (ans[i - d] - '');
      cur = row[i] + v + r;
      r = (cur / 10) ^ 0;
      s = cur % 10 + s;
    }
    if (r !== 0) s = r + s;
    ans = s;
  }
  return ans;
};

// 测试
var data = [
  { num1: '', num2: '', result: '' },
  { num1: '', num2: '3', result: '3' },
  { num1: '2', num2: '3', result: '6' },
  { num1: '123', num2: '456', result: '56088' },
  { num1: '123456789', num2: '987654321', result: '121932631112635269' },
  { num1: '9333', num2: '0', result: '0' },
];
for (var i of data) {
  var result = multiply(i.num1, i.num2);
  console.log(result, result === i.result);
}
