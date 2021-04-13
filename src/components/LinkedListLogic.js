export class Node {
    constructor(data,next){
      this.data = data;
      this.next = next;
    }

  }
  
export class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addTail(data) {
      const newNode = new Node(data, null);
      if(!this.head){
        this.head = newNode
      } else {
        let current = this.head;
        while (current.next){
          current = current.next;
        };
        current.next = newNode;
      };
    }
    addHead(head,data) {
      let newNode = new Node(data,null)
      if(!this.head) {
          this.head= newNode
          return head
      } else {
          newNode.next = this.head
          this.head =newNode
      }
      return this.head
  }
  
}
export let linkedList = new LinkedList();


