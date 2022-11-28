class MyDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return this;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.prev = leader;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}