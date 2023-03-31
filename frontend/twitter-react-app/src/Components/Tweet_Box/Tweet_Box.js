import React from "react";
import "./Tweet_Box.css";

const Tweet_Box = (props) => {
  return (
    <div className="message-box">
      <div className="header">
        <h6>
          {props.user}
        </h6>
        <p> <b>@</b> {props.date}</p>
      </div>
      <div className="message">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Tweet_Box;
