/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Some Utils
 */
var utils = {
  arr2list(arr) {
    if (!arr.length) return null;
    var list = new ListNode(arr[0]);
    var p = list;
    for (var i = 1, l = arr.length; i < l; ++i) {
      p.next = new ListNode(arr[i]);
      p = p.next;
    }
    return list;
  },

  list2arr(list) {
    var arr = [];
    var p = list;
    while (p) {
      arr.push(p.val);
      p = p.next;
    }
    return arr;
  }
};

module.exports = {
  ListNode,
  utils
}
