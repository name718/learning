import {arrayToLinkedList, ListNode} from "./构造链表.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev; // 返回新的头节点
};
const head = [1, 2, 3, 4, 5]
const p = arrayToLinkedList(head)
reverseList(p)
