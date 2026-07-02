import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setStatus(data.status));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>World Wallet AI</h1>
      <p>Backend Status: {status}</p>
    </div>
  );
}

export default App;
