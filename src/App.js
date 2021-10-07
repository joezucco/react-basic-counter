import { useState } from "react";
import { Button } from "./components/Button";
import Count from "./components/Count";
import "./App.css";

function App() {
  //Create State - a variable that, when changed, updates a component.
  const [counter, setCounter] = useState(0);

  //Set function to update the counter.
  const updateCountAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='App'>
      {/* Components */}
      <Count counter={counter} />
      <Button updateCounter={updateCountAdd}/>
    </div>
  );
}

export default App;
