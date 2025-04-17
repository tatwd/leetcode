/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  reserve(nums, 0, nums.length - 1);
  reserve(nums, 0, k - 1);
  reserve(nums, k, nums.length - 1);
};

var reserve = function (nums, start, end) {
  while (start < end) {
    var cur = nums[start];
    nums[start] = nums[end];
    nums[end] = cur;
    start++;
    end--;
  }
};

// [1, 2, 3, 4, 5, 6, 7]
//     6  7     2  3

// var arr = [1, 2, 3, 4, 5, 6, 7];
// rotate(arr, 3);
// console.log(arr);
