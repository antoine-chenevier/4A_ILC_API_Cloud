import React, { useState } from "react";
import "./Create_Tweet_Box.css";

const Create_Tweet_Box = ({ onTweetPosted }) => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `user=${user}&message=${message}`,
    };
    const response = await fetch("http://localhost:5000/tweet", requestOptions);
    const data = await response.json();
    console.log(data); // Print the response from the server
    setUser("");
    setMessage("");
    onTweetPosted(); // Call the onTweetPosted function to notify Home component
  };

  return (
    <div className="create-tweet-box">
      <span className="create-tweet-box-header">
        <h6 className="create-tweet-box-header-text"> POST A NEW TWEET</h6>
      </span>
      <form onSubmit={handleFormSubmit}>
        <input
          name="user"
          className="create-tweet-box-user"
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <textarea
          name="message"
          className="create-tweet-box-message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span className="create-tweet-box-postBtn">
          <button className="create-tweet-box-postBtn-btn" type="submit">
            Tweet
          </button>
        </span>
      </form>
    </div>
);   
  };
  export default Create_Tweet_Box;
