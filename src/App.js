/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  //let post = 'Docker for DevOps';
  let [title, setTitle] = useState(['What is React.js?', 'Why React.js is important?', 'What is Components?']);
  let [like0, setLike0] = useState(0);
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h3>React Simple Blog</h3>
      </div>

      <div className="list">
        <h4>
          {title[0]}<span onClick={() => { setLike0(like0 + 1) }}>🤍</span> {like0} </h4>
        <p>May 20, 2022</p>

        <h4>{title[1]} <span onClick={() => { setLike1(like1 + 1) }}>🤍</span> {like1} </h4>
        <p>May 21, 2022</p>

        <h4>{title[2]} <span onClick={() => { setLike2(like2 + 1) }}>🤍</span> {like2} </h4>
        <p>May 22, 2022</p>
      </div>
      <Modal></Modal>
    </div >
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Datail</p>
    </div>
  )
}


export default App;
