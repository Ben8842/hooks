import React, { useState } from "react";

function Timed() {
  // Declare a new state variable, which we'll call "count"
  function bounceUp() {
    setCount(bounce + 1);
  }
  var { interval: interval } = this.state;
  const [bounce, setCount] = useState(0);
  var interval = setInterval(bounceUp.bind(this), 25);

  return (
    <div>
      <div>Hello World</div>
      <div>{bounce} is the bounce</div>
    </div>
  );
}

export default Timed;
