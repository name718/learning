// 实现循环队列-数组方法
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size); // 固定大小的数组
        this.front = -1;  // 指向队头元素
        this.rear = -1;   // 指向队尾元素
    }

    // 入队
    enqueue(value) {
        if (this.isFull()) {
            return "Queue is full";
        }
        if (this.isEmpty()) {
            this.front = 0; // 当队列为空时，初始化队头
        }
        this.rear = (this.rear + 1) % this.size; // 更新队尾指针
        this.queue[this.rear] = value;
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const dequeuedValue = this.queue[this.front];
        if (this.front === this.rear) {
            // 如果队列中只有一个元素，重置队头和队尾
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size; // 更新队头指针
        }
        return dequeuedValue;
    }

    // 检查队列是否为空
    isEmpty() {
        return this.front === -1;
    }

    // 检查队列是否已满
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // 获取队头元素
    getFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[this.front];
    }

    // 获取队列大小
    getSize() {
        if (this.isEmpty()) return 0;
        if (this.rear >= this.front) {
            return this.rear - this.front + 1;
        } else {
            return this.size - (this.front - this.rear - 1);
        }
    }

    // 打印队列内容
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = "";
        let i = this.front;
        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.trim());
    }
}

// 使用示例
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);

circularQueue.printQueue(); // 输出: 1 2 3 4 5
console.log(circularQueue.dequeue()); // 输出: 1
circularQueue.printQueue(); // 输出: 2 3 4 5
circularQueue.enqueue(6);
circularQueue.printQueue(); // 输出: 2 3 4 5 6
