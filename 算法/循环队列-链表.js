class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.front = null;  // 队头指针
        this.rear = null;   // 队尾指针
        this.size = 0;      // 队列大小
    }

    // 入队
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            // 如果队列为空，队头和队尾都指向新节点，形成环
            this.front = newNode;
            this.rear = newNode;
            newNode.next = this.front; // 指向自身，形成循环
        } else {
            // 将新节点连接到队尾，并更新 rear 和 next 指向
            this.rear.next = newNode;
            newNode.next = this.front;
            this.rear = newNode;
        }
        this.size++;
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const dequeuedValue = this.front.value;
        if (this.front === this.rear) {
            // 队列中只有一个元素时，出队后队列变空
            this.front = null;
            this.rear = null;
        } else {
            // 移动 front 指针，并更新 rear 的 next 指向新的 front
            this.front = this.front.next;
            this.rear.next = this.front;
        }
        this.size--;
        return dequeuedValue;
    }

    // 检查队列是否为空
    isEmpty() {
        return this.size === 0;
    }

    // 获取队列的第一个元素
    getFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.value;
    }

    // 获取队列的大小
    getSize() {
        return this.size;
    }

    // 打印队列内容
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = "";
        let current = this.front;
        do {
            result += current.value + " ";
            current = current.next;
        } while (current !== this.front); // 循环直到回到起点
        console.log(result.trim());
    }
}

// 使用示例
const circularQueue = new CircularQueue();
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);

circularQueue.printQueue(); // 输出: 1 2 3
console.log(circularQueue.dequeue()); // 输出: 1
circularQueue.printQueue(); // 输出: 2 3
circularQueue.enqueue(4);
circularQueue.printQueue(); // 输出: 2 3 4
