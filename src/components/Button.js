export const Button = ({ addCounter, subtractCounter }) => {
  return (
    <div>
      <button onClick={addCounter}>Add</button>
      <button onClick={subtractCounter}>Subtract</button>
    </div>
  );
};
