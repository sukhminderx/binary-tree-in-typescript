import { Queue } from "../Queue";
import { Stack } from "../Stack";
import { Node } from "./Node";

export class Tree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  get _root() {
      return this.root;
  }

  /*
        traverse Level Order and insert at the first position found
    */
  levelOrderInsert(data: any) {
    let newNode = new Node(data);
    newNode._left = null;
    newNode._right = null;
    if (!this.root) {
      this.root = newNode;
    } else {
      this.levelOrderTraverseAndInsert(this.root, newNode);
    }
  }

  /*
        create a queue
        start with root; add root to queue
        loop while q is not empty
        get front of queue; 
        process front
        if front has children(left/right) --> add to queue
        when all nodes of the tree are processed, delete queue
    */
  levelOrderTraversal() {
    const root = this.root;
    if (!root) {
      return;
    }
    let q: Queue | null = new Queue();
    q.enqueue(root);

    while (!q.underflow()) {
      const temp = q.dequeue();
      if(temp) {
        console.log(temp._data); // log data while traversing
        if (temp._left) {
          q.enqueue(temp._left);
        }
        if (temp._right) {
          q.enqueue(temp._right);
        }
      }
    }
    q = null;
  }

  /*
        create a queue
        start with root; add root to queue
        loop while q is not empty
        get front of queue; 
        process front
        if front has children(left/right) --> add to queue
        when all nodes of the tree are processed, delete queue
    */
  levelOrderTraverseAndInsert(root: Node, node: Node) {
    if (!root) {
      return;
    }
    let q: Queue | null = new Queue();
    q.enqueue(root);

    let added = false;
    while (!q.underflow()) {
      const temp = q.dequeue();
      if (temp) {
        if (temp._left) {
          q.enqueue(temp._left);
        } else if (!added)  {
          temp._left = node;
          added = true;
        }
        if (temp._right) {
          q.enqueue(temp._right);
        } else if (!added) {
          temp._right = node;
          added = true;
        }
      }
    }
    q = null;
  }

  /*
    each node is processed before its children
    uses stack if not recursive; ie to handle iteration

    process root
    process left subtree in preOrder
    process right subtree in postOrder
  */
  preOrderTravesal(node: Node | null) { // starts with root at level 1
      if(node) {
        console.log(node._data);
        this.preOrderTravesal(node._left);
        this.preOrderTravesal(node._right);
      }
  }

  /*
    process sequence -> left child , parent, right child
    
    process left subtree in inOrder
    process root
    process right subtree in inOrder
  */
  inOrderTravesal(node: Node | null) { // starts with root at level 1
      if(node) {
        this.inOrderTravesal(node._left);
        console.log(node._data);
        this.inOrderTravesal(node._right);
      }
  }

  /*
    process sequence -> left child , right child, parent
    
    process left subtree in postOrder
    process right subtree in postOrder
    process root
  */
  postOrderTravesal(node: Node | null) { // starts with root at level 1
      if(node) {
        this.postOrderTravesal(node._left);
        this.postOrderTravesal(node._right);
        console.log(node._data);
      }
  }

  /*
    uses stack
    start from root
  */
  preOrderIterativeStack(root: Node | null) {
      let node = root;
      let s: Stack = new Stack();
      s.push(node);
      while(!s.isEmpty()) {
        while(node) {
            console.log(node._data);
            s.push(node);
            node = node._left;
        }
        node= s.pop();
        node=node!.right;
      }
  }
}
