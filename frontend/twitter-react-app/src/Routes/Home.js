import React from "react";
import Create_Tweet_Box from "../Components/Create_Tweet_Box/Create_Tweet_Box";
import Tweet_Box from "../Components/Tweet_Box/Tweet_Box";
import useFetchAllTweets from "../Hooks/useFetchAllTweets";
import "./Home.css";

function Home() {
  const tweets = useFetchAllTweets();
  return (
    <div className="Home">
      <h1>HOME</h1>
      <Create_Tweet_Box/>
      {tweets ? (
        tweets.map((tweet) => (
          <Tweet_Box key={tweet.id} id={tweet.id} user={tweet.user} message={tweet.message} date={tweet.date}/>
        ))
      ) : (
        <h1>LOADING TWEETS...</h1>
      )}
    </div>
  );
}

export default Home;

