import './App.css';
import {useState} from 'react';

function App() {

  let post = 'Docker for DevOps';
  let [title, b] = useState('What is AWS?');

  return (
    <div className="App">
      <div className="black-nav">
        <h3>Blog</h3>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>May 20, 2022</p>
      </div>
    </div>
  );
}

export default App;
