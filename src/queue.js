const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }

    insertInPosition(position, value) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }

        let node = { value, next: null };

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;
    }

    getNodeByPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }

    removeFromPosition(position) {
        if (position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        this.insertInPosition(this.getLength(), value);
    }

    dequeue() {
        const del = this.getNodeByPosition(0);
        this.removeFromPosition(0);
        return del;
    }
}

module.exports = {
    Queue
};