import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="app-container">
      <h1>Click Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button className="but" onClick={increase}>Increase</button>
        <button className="but" onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
