import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Tree } from "./Tree";


function App() {
  const tree = new Tree();
  tree.levelOrderInsert(1);
  tree.levelOrderInsert(2);
  tree.levelOrderInsert(3);
  tree.levelOrderInsert(4);
  tree.levelOrderInsert(5);
  tree.levelOrderInsert(6);
  tree.levelOrderInsert(7);
  tree.levelOrderInsert(8);
  tree.levelOrderInsert(9);

  console.log('--level order traversal--');
  tree.levelOrderTraversal();

  console.log('--pre order traversal--');
  tree.preOrderTravesal(tree._root);

  console.log('--pre order iterative traversal--');
  tree.preOrderIterativeStack(tree._root);

  console.log('--in order traversal--');
  tree.inOrderTravesal(tree._root);

  console.log('--post order traversal--');
  tree.postOrderTravesal(tree._root);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Tree ADTS in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
