import React, { useState, useEffect } from "react";
import Button from "./components/Button";

// TODO: This component re-fetches data on every render because the dependency
// array is missing in useEffect — an intentional pattern to review.
const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // BUG: missing dependency array causes this to run on every render
    setMessage(`Button clicked ${count} times`);
  });

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Fake Frontend Project</h1>
      <p>{message}</p>
      <Button label="Click me" onClick={() => setCount((c) => c + 1)} />
    </div>
  );
};

export default App;
