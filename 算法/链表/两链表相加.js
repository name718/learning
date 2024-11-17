import {arrayToLinkedList, ListNode} from "./构造链表.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export var addTwoNumbers = function (l1, l2) {
    const resList = new ListNode(-1);  // 哑节点，最终返回 resList.next
    let resP = resList;
    let carry = 0;

    while (l1 || l2 || carry) {
        const a = l1 ? l1.val : 0;
        const b = l2 ? l2.val : 0;

        const sum = a + b + carry;
        carry = Math.floor(sum / 10);  // 计算进位
        resP.next = new ListNode(sum % 10);  // 只保留个位
        resP = resP.next;

        // 移动到下一个节点
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return resList.next;
};

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]
const p1 = arrayToLinkedList(l1)
const p2 = arrayToLinkedList(l2)
console.log(addTwoNumbers(p1, p2))
