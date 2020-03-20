import React from "react";
import ReactDOM from "react-dom";

const clickHandler = () => {
  console.log("I was clicked!");
};

const Alert = () => {
  return (
    <button className="btn btn-success btn-lg" onClick={clickHandler}>
      Click Me
    </button>
  );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
