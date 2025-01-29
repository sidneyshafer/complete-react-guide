import React, { useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  // Effect 3: Clear any initial console logs when the component mounts
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div>
      <h1>React Side Effects - Timer Example</h1>
      <Counter />
    </div>
  );
}

export default App;