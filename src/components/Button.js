export const Button = ({ updateCounter }) => {
  return (
    <div>
      <button onClick={updateCounter}>Add</button>
      <button onClick={updateCounter}>Subtract</button>
    </div>
  );
};
