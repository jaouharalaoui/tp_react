import React from "react";
import ReactDOM from "react-dom";

const buttonStyles = {
  //write button styles here
  color: "black",
  background: "yellow",
  fontSize: "16px",
  border: "1px solid black",
  borderRadius: "10px"
};

const badgeStyles = {
  //write the span styles here
  background: "red",
  marginLeft: "5px",
  borderRadius: "50%"
};

const Badge = props => {
  return (
    <button style={buttonStyles} type="button" className="btn btn-primary">
      {props.label}
      <span style={badgeStyles} className="badge badge-light">
        {props.number}
      </span>
    </button>
  );
};

//dont forget to change the label
ReactDOM.render(
  <Badge label="Alerts" number="2" />,
  document.querySelector("#myDiv")
);
