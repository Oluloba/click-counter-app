import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);

    // Show message if threshold is reached
    if (newCount === 15) {
      setMessage('❌You have reached the limit!');
    } 
  };

  const decrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);

      // Clear message if going back below threshold
      if (newCount < 14) {
        setMessage('');
      }
    }
  };

  return (
    <div className="app-container">
      <h1>Click Counter</h1>
      <div className="counter-display">{count}</div>

      {message && <div className="message">{message}</div>}

      <div className="button-group">
        <button className="btn" onClick={increase}>Increase</button>
        <button className="btn" onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;

