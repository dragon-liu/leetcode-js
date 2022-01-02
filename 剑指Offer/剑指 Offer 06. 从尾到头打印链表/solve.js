/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let nums = [];
  let node = head;
  // 遍历链表，将每个元素从数组头部插入，实现倒序输出
  while (node !== null) {
    nums.unshift(node.val);
    node = node.next;
  }
  return nums;
};
