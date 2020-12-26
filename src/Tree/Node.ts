import { INode } from "./INode";

export class Node implements INode {
  data: any = null;
  left: Node | null = null;
  right: Node | null = null;

  constructor(data: any) {
    this.data = data;
  }

  set _left(node: Node | null) {
    this.left = node;
  }

  set _right(node: Node | null) {
    this.right = node;
  }

  set _data(data: any) {
      this.data = data;
  }

  get _left() {
    return this.left as Node;
  }

  get _right() {
    return this.right as Node;
  }

  get _data() {
      return this.data;
  }
}
