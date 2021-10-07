import { useState } from "react";
import { Button } from "./components/Button";
import Count from "./components/Count";
import "./App.css";

function App() {
  //Create State - a variable that, when changed, updates a component.
  const [counter, setCounter] = useState(0);

  //Set function to update/increment the counter.
  const updateCountAdd = () => {
    setCounter(counter + 1);
  };

  //Set function to decrement the counter.
  const updateCountSubtract = () => {
    setCounter(counter - 1);
  };

  //Function to double the counter.
  const doubleCounter = () => {
    setCounter(counter * 2);
  };

  return (
    <div className='App'>
      {/* Components */}
      <Count counter={counter} />
      <Button
        addCounter={updateCountAdd}
        subtractCounter={updateCountSubtract}
        doubleCounter={doubleCounter}
        label={"Subtract"}
        labelOne='Add'
        labelTwo='Subtract'
        labelThree='Double'
      />
    </div>
  );
}

export default App;
