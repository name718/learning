export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;  // 空数组返回 null 表示空链表

    const head = new ListNode(arr[0]);  // 初始化链表头节点
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);  // 创建新节点并连接到当前节点
        current = current.next;  // 移动到下一个节点
    }

    return head;  // 返回链表头节点
}
