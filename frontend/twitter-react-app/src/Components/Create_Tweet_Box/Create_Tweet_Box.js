import React from "react";
import "./Create_Tweet_Box.css";

const Create_Tweet_Box = () => {
  return <div className="create-tweet-box">
    <span className="create-tweet-box-header">
    <h6 className="create-tweet-box-header-text"> POST A NEW TWEET</h6>
    </span>
    <form>
        <input className="create-tweet-box-user" type="text" placeholder="User" />
        <textarea className="create-tweet-box-message" placeholder="Message"></textarea>
        <span className="create-tweet-box-postBtn"><button className="create-tweet-box-postBtn-btn"  type="submit">Tweet</button></span>
    </form>
  </div>;
};

export default Create_Tweet_Box;
