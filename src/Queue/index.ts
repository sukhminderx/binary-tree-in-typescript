import { Node } from "../Tree/Node";

export class Queue {
    _values: Array<null | Node> = [];
  
    enqueue(val: null | Node) {
      this._values.push(val);
    }
  
    dequeue(): null | Node {
      if (this.underflow()) {
        return null;
      } else {
        const front = this._values[0];
        this._values.shift();
        return front;
      }
    }
    underflow() {
      return !this._values.length;
    }
    front(): null | Node {
      if (this.underflow()) {
        return null;
      } else {
        const front = this._values[0];
        return front;
      }
    }
  
    print() {
        console.log(this._values);
    }
  }