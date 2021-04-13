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


export const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
 let finalList= new LinkedList();
 let currentl1 = l1.head;
 let currentl2 = l2.head;

while(currentl1  !== null || currentl2 !== null) {
  if(currentl1.data <= currentl2.data) {
    finalList.addTail(currentl1.data)
    if(!currentl1.next){
      finalList.addTail(currentl2.data)
      return finalList
    }
    currentl1 = currentl1.next;
 
  } else if(currentl2.data <= currentl1.data){
   finalList.addTail(currentl2.data)
   if(!currentl2.next){
    finalList.addTail(currentl1.data)

    return finalList
  }
   currentl2 = currentl2.next;
  }

}

return finalList;
};

export let linkedList = new LinkedList();
export let list1 = new LinkedList();
export let list2= new LinkedList();


