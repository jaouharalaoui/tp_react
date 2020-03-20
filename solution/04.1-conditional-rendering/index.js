import React from "react";
import ReactDOM from "react-dom";

const colorClasses = {
  red: "alert-danger",
  yellow: "alert-warning"
};

const Alert = props => {
  //your component here
  return (
    <div class={`alert ${colorClasses[props.color]}`} role="alert">
      {props.text}
    </div>
  );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
  <div>
    <Alert text="OMG! Something really bad has happended!" color="red" />
    <Alert text="Well, it is not that bad after all!" color="yellow" />
  </div>,
  document.querySelector("#myDiv")
);
