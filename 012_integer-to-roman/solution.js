/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var map = [
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ];
  var last = '';
  for (var i = 0, len = map.length; i < len; i++) {
    var k = map[i][0];
    var v = map[i][1];
    if (num === v) return k;
    if (num < v) {
      return last + intToRoman(num - map[last]);
    } else {
      // FIXED
      // if (i === len - 1)
      //   return k + intToRoman(num - v);
    }
    last = k;
  }
};
// 测试
var data = [
  { input: 3, output: 'III' },
  { input: 4, output: 'IV' },
  { input: 9, output: 'IX' },
  { input: 58, output: 'LVIII' },
  { input: 1994, output: 'MCMXCIV' }
];
for (var i of data) {
  var res = intToRoman(i.input);
  console.log(res, res === i.output);
}
