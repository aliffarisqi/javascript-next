class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  deleteDups() {
    const set = new Set();
    let current = this.head;
    let previous = null;
    while (current) {
      if (set.has(current.data)) {
        previous.next = current.next;
      } else {
        set.add(current.data);
        previous = current;
      }
      current = current.next;
    }
  }
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(5);
linkedList.append(10);
linkedList.append(5);
linkedList.append(3);
linkedList.append(4);
console.log("Original Linked List:");
linkedList.display();

linkedList.deleteDups();

console.log("\nLinked List after removing duplicates:");
linkedList.display();
