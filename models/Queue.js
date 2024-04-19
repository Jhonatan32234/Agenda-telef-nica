import { Node } from "./Node.js";

export class Queue{
  data;//Datos
  next;//Siguiente dato
  head;//Cabeza del dato o primer dato
  tail;//Cola de dato

 
constructor(data) {
  this.data = data;
  this.next = null;
}

enqueue(data) {
  this.Node = new Node(data);
  if (!this.head) {
    this.head = this.Node;
    this.tail = this.Node;
    } else {
    this.tail.next = this.Node;
    this.tail = this.Node;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    let data = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return data;
  }
  bubbleSort() {
    let swapped;
    do {
      swapped = false;
      let current = this.head;
      let queue = [];
      while (current) {
        queue.push(current.data);
        current = current.next;
      }
      for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i].name > queue[i + 1].name) {
          let temp = queue[i];
          queue[i] = queue[i + 1];
          queue[i + 1] = temp;
          swapped = true;
        }
      }
      current = this.head;
      for (let i = 0; i < queue.length; i++) {
        current.data = queue[i];
        current = current.next;
      }
    } while (swapped);
  }
}




   
