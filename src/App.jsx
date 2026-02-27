import { useState } from "react";
import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const mode = import.meta.env.VITE_MODE;

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🚀 Experiment 10 - Deployment & DevOps</h1>

      <h2>Environment Variables</h2>
      <p><strong>API URL:</strong> {apiUrl}</p>
      <p><strong>Mode:</strong> {mode}</p>

      <h2>Counter Example</h2>
      <div className="count">{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;