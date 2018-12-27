/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = ~(1 << 31);
  var min = 1 << 31;

  var res = 0;
  var r = 0;
  while (x != 0) {
    res = res * 10 + (x % 10);
    x = (x / 10) ^ 0;
  }
  return res <= max && res >= min ? res : 0;
};

var data = [
  { x: 123, result: 321 },
  { x: -123, result: -321 },
  { x: 120, result: 21 },
  { x: 1534236469, result: 0 }
];
for (var i of data) {
  var result = reverse(i.x);
  console.log(result, result === i.result);
}
