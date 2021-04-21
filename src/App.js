import "./App.css";

import React, { useState } from "react";
import Timed from "./components/Timed.js";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount, count2, setCount2] = useState(0);

  return (
    <div>
      <p>You have {count} points</p>
      <p>You have {count} points</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count + 2)}>Click me</button>
      <button onClick={() => setCount(count + 3)}>Click me</button>
      <button onClick={() => setCount(count * 2)}>Click me</button>
      <button onClick={() => setCount(count * 3)}>Click me</button>
      <button onClick={() => setCount(count * 6)}>Click me</button>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count + 2)}>Click me</button>
      <button onClick={() => setCount(count + 3)}>Click me</button>
      <button onClick={() => setCount(count * 2)}>Click me</button>
      <button onClick={() => setCount(count * 3)}>Click me</button>
      <button onClick={() => setCount(count * 6)}>Click me</button>
    </div>
  );
}

export default App;
