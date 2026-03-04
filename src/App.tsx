import React, { useState } from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Fake Frontend Project</h1>
      <p>{message}</p>
      <Button label="Click me" onClick={() => setCount((c) => c + 1)} />
    </div>
  );
};

export default App;
