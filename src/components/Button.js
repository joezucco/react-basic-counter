export const Button = ({ addCounter, subtractCounter, labelOne, labelTwo, labelThree, doubleCounter }) => {
  return (
    <div>
      <button onClick={addCounter}>{labelOne}</button>
      <button onClick={subtractCounter}>{labelTwo}</button>
      <button onClick={doubleCounter}>{labelThree}</button>
    </div>
  );
};
