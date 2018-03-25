/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
};

ListNode.prototype.nextTo = function(next) {
  if (next instanceof ListNode)
    this.next = next;
  return this;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let res = new ListNode(0);
  let temp = res;
  let [_l1, _l2] = [l1, l2];
  let sum = 0;

  while (_l1 && _l2) {
    if (!isNaN(_l1.val)) {
      sum += _l1.val;
      _l1 = _l1.next;
    }

    if (!isNaN(_l2.val)) {
      sum += _l2.val;
      _l2 = _l2.next;
    }

    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    sum = (sum / 10) ^ 0;
  }

  if (sum === 1)
    temp.next = new ListNode(1);

  return res.next;
};

// 2 -> 4 -> 3
let l1 = new ListNode(2).nextTo(
  new ListNode(4).nextTo(new ListNode(3)));

// 5 -> 6 -> 6
let l2 = new ListNode(5).nextTo(
  new ListNode(6).nextTo(new ListNode(6)));

let result = addTwoNumbers(l1, l2);
console.log(JSON.stringify(result));
