const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.parent = null
    }
    root() {
        return this.parent
    }
    add(data) {
        this.parent = addData(this.parent, data);

        function addData(node, data) {
            if (node === null) {
                return new Node(data);
            }

            if (node.data === data) {
                return;
            }

            if (data < node.data) {
                node.left = addData(node.left, data);
            } else {
                node.right = addData(node.right, data);
            }

            return node;
        }
    }


    has(data) {
        if (data === this.parent.data) return true;
        let node = this.parent;

        return findInside(data, node)

        function findInside(data, node) {
            return (data > node.data) ? findRightLeft(data, node.right) :
                (data < node.data) ? findRightLeft(data, node.left) : true
        }

        function findRightLeft(data, nextNode) {
            return (nextNode) ? findInside(data, nextNode) : false
        }
    }

    find(data) {
        if (data === this.parent.data) return this.parent;
        let node = this.parent;

        return findInside(data, node)

        function findInside(data, node) {
            return (data > node.data) ? findRightLeft(data, node.right) :
                (data < node.data) ? findRightLeft(data, node.left) : node
        }

        function findRightLeft(data, nextNode) {
            return (nextNode) ? findInside(data, nextNode) : null
        }
    }


    remove(data) {
        let node = this.parent;

        this.parent = removeData(data, node);

        function removeData(data, node) {
            if (!node) return null

            if (data < node.data && node.left) {
                node.left = removeData(data, node.left);
                return node
            } else if (data > node.data && node.right) {
                node.right = removeData(data, node.right);
                return node
            } else {
                if (data === node.data) {
                    if (node.right && node.left) {
                        let minFromBigger = node.right
                        while (minFromBigger.left) {
                            minFromBigger = minFromBigger.left
                        }

                        node.data = minFromBigger.data;
                        node.right = removeData(minFromBigger.data, node.right)
                        return node

                    } else if (node.left) {
                        node = node.left
                        return node
                    } else if (node.right) {
                        node = node.right
                        return node
                    } else return null
                }
            }
        }
    }

    min() {
        let node = this.parent;

        if (!node) return null;

        if (!node.left && !node.right) {
            return node.data
        }

        while (node.left) {
            node = node.left
        }
        return node.data
    }

    max() {
        let node = this.parent;

        if (!node) return null;

        if (!node.left && !node.right) {
            return node.data
        }

        while (node.right) {
            node = node.right
        }
        return node.data
    }
}

module.exports = {
    BinarySearchTree
};