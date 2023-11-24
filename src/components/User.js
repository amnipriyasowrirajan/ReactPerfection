import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //API CALL
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect is called");
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h2>Name: {props.name} </h2>

      <h3>Count = {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        click here
      </button>
    </div>
  );
};

export default User;
