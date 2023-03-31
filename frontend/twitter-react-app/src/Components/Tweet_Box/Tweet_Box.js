import React from "react";
import "./Tweet_Box.css";

const Tweet_Box = (props) => {
  return (
    <div className="message-box">
      <div className="header">
        <h6>
          {props.user}
        </h6>
      </div>
      <div className="message">
        <p className="message-date"> tweeted <b>@</b> <i>{props.date}</i></p>
        <p className="message-text">{props.message}</p>
      </div>
    </div>
  );
};

export default Tweet_Box;
