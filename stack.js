/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (!this.last) this.last = newNode;
    this.size++;
    this.first = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error;
    let oldNode = this.first;
    this.size--;
    if(!oldNode.next) return oldNode.val;
    let nextNode = oldNode.next;
    this.first = nextNode;
    return oldNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) throw new Error;
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

module.exports = Stack;
