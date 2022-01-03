/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // 链表为空直接返回null
  if (!head) return null;
  // 创建Map对象保存键值对
  const m = new Map();
  let node = head;
  // 遍历链表，复制各节点，并建立 “原节点 -> 新节点” 的 Map 映射
  while (node) {
    m.set(node, new Node(node.val));
    node = node.next;
  }
  node = head;
  // 构建新链表的 next 和 random 指向
  while (node) {
    m.get(node).next = node.next ? m.get(node.next) : null;
    m.get(node).random = node.random ? m.get(node.random) : null;
    node = node.next;
  }
  // 返回新链表的头节点
  return m.get(head);
};
