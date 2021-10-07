import { useState } from "react";
import { Button } from "./components/Button";
import Count from "./components/Count";
import "./App.css";

function App() {
  //Create State - a variable that, when changed, updates a component.
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>

      {/* Components */}
      <Button />
      <Count />
    </div>
  );
}

export default App;
