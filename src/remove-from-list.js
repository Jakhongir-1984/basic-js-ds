const { NotImplementedError } = require('../extensions/index.js');

// const { lNode } = require('../extensions/l-node.js');

/**
 * Given a singly linked l of integers l and an integer k,
 * remove all elements from l l that have a value equal to k.
 *
 * @param {l} l
 * @param {Number} k
 * @return {l}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked ls are already defined using interface
 * class lNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {


    if (l.value === k) {
        l = l.next;
    };

    let currentNode = l;
    if (currentNode) {
        while (currentNode.next) {
            if (currentNode.next.value === k) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            };
        };
    };
    return l;
}

module.exports = {
    removeKFromList
};