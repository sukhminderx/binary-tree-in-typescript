import { Node } from "./Node";

export class Stack {
  /* last index is TOP of stack */
  private values: Array<any> = [];

  /*
    use push to insert at last index
  */
  push(data: any) {
    this.values.push(data);
  }

  /*
    use pop to insert at last index
  */
  pop(): any {
    return this.values.pop() as any;
  }

  /*
    return last element as its on top
  */
  top(): any {
    return this.values[this.values.length - 1];
  }
  
  /*
    print values arrays
  */
  printStack () {
    console.log(this.values);
  }

  /*
    assign to []
  */
  delete() {
    this.values = [];
  }

  isEmpty () {
    return !this.values.length;
  }
}