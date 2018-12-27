/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var res = new ListNode(0);
  var pl1 = l1, pl2 = l2, current = res;
  var sum = 0;

  while (pl1 || pl2) {
    sum += (pl1 && pl1.val) || 0;
    sum += (pl2 && pl2.val) || 0;

    pl1 = pl1 && pl1.next;
    pl2 = pl2 && pl2.next;

    current.next = new ListNode(sum % 10);
    current = current.next;

    // 取十位上的整数
    sum = (sum / 10) ^ 0;
  }
  sum === 1 && (current.next = new ListNode(1));
  return res.next;
};

// 测试
var data = [
  { l1: arr2list([2, 4, 3]), l2: arr2list([5, 6, 6]) },
  { l1: arr2list([2,4,3]), l2: arr2list([5,4]) }
];
for (var i of data) {
  let result = addTwoNumbers(i.l1, i.l2);
  console.log(list2arr(result));
}
// [7, 0, 0, 1]
// [7, 8, 3]

function arr2list(arr) {
  if (!arr.length) return null;
  var list = new ListNode(arr[0]);
  var p = list;
  for (var i = 1, l = arr.length; i < l; ++i) {
    p.next = new ListNode(arr[i])
    p = p.next;
  }
  return list;
}

function list2arr(list) {
  var arr = [];
  var p = list;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  return arr;
}
