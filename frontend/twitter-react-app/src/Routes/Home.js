import React from "react";
import Tweet_Box from "../Components/Tweet_Box/Tweet_Box";
import useFetchAllTweets from "../Hooks/useFetchAllTweets";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>HOME</h1>
      {tweets ? (
        tweets.map((tweet) => (
          console.log(tweet),
          <Tweet_Box key={tweet.id} id={tweet.id} user={tweet.user} message={tweet.message} date={tweet.date}/>
        ))
      ) : (
        <p>Loading tweets...</p>
      )}
    </div>
  );
}

export default Home;

