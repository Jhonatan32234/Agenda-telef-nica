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
}




   