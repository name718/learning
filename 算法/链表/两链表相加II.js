import {arrayToLinkedList, ListNode} from "./构造链表.js";
import {reverseList} from "./反转链表.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let p = reverseList(l1)
    let q = reverseList(l2)
    let carry = 0
    let result = new ListNode(-1)
    let resultP = result
    while (p || q || carry) {
        const a = p ? p.val : 0;
        const b = q ? q.val : 0;
        const sum = a + b + carry;
        carry = Math.floor(sum / 10);
        resultP.next = new ListNode(sum % 10)
        resultP = resultP.next;
        if (p) {
            p = p.next;
        }
        if (q) {
            q = q.next;
        }
    }
    return reverseList(result.next);
};
const l1 = arrayToLinkedList([7, 2, 4, 3])
const l2 = arrayToLinkedList([5, 6, 4])

addTwoNumbers(l1, l2)
