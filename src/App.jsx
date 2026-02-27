import { useState } from "react";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const mode = import.meta.env.VITE_MODE;

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Experiment 10 - Deployment & DevOps</h1>

      <h2>Environment Variables</h2>
      <p><strong>API URL:</strong> {apiUrl}</p>
      <p><strong>Mode:</strong> {mode}</p>

      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;