// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
  }

  add(number) {
    if (!this.head) {
      this.head = new Node(number);
    } else {
      let current = this.head;
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = new Node(number);
    }
  }

  addAt(index, item){
    if (index === 0){
        this.head = new Node(item, this.head);
    } 
    else {
        let current = this.head;
        let previous = null;
        for (let i = 0; i < index; i++){
            if (!current){
                throw new Error("Index out of range");
            }
            previous = current;
            current = current.next_node;
        }
        previous.next_node = new Node(item, current);
    }
  }

  get(index) {
    if (!this.head) {
      throw new Error("This list is empty");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current.next_node) {
        throw new Error("Index out of range");
      }
      current = current.next_node;
    }
    return current.value;
  }

  remove(index){
    if(!this.head){
        throw new Error("This list is empty");
    }
    if (index === 0){
        this.head = this.head.next_node;
    }
    else {
        let current = this.head;
        let previous = null;
        for (let i = 0; i < index; i ++){
            if (!current.next_node){
                throw new Error("Index out of range");
            }
            previous = current;
            current = current.next_node;
        }
        previous.next_node = current.next_node;
    }
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
list.addAt(1, 11);
list.addAt(0, 13);

console.log(list.get(2));
// => 11

console.log(list.get(3));
// => 5

module.exports = LinkedList;
