import React, { useState } from "react";
import Tweet_Box from "../Components/Tweet_Box/Tweet_Box";
import "./Explore.css";

function Explore() {
  const [searchTweets, setSearchTweets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.startsWith("#")) {
      const hashtag = query.substring(1);
      const tweets = await searchTweetsByHashtag(hashtag);
      setSearchTweets(tweets);
    } else {
      const tweets = await searchTweetsByName(query);
      setSearchTweets(tweets);
    }
  };
  
  return (
    <div className="Explore">
      <input
        className="Explore-search"
        placeholder="Search for a tweet by name or by hashtag"
        type="text"
        onChange={handleSearch}
      ></input>
      {searchQuery && searchTweets && (
        <p className="Explore-search-info">
          Searching in tweets by {searchQuery.startsWith("#") ? "hashtag" : "name"} for "{searchQuery}"
        </p>
      )}
      {searchTweets ? (
        searchTweets.map((tweet) => (
          <Tweet_Box
            key={tweet.id}
            id={tweet.id}
            user={tweet.user}
            message={tweet.message}
            date={tweet.date}
          />
        ))
      ) : (
        <h5>SEARCHING IN TWEETS...</h5>
      )}
    </div>
  );
}

export default Explore;

async function searchTweetsByHashtag(hashtag) {
  const response = await fetch(`http://localhost:5000/tweetsHashtag/${hashtag}`);
  const data = await response.json();
  const arrayOfJsonObjects = data.map((jsonString) => JSON.parse(jsonString));
  return arrayOfJsonObjects;
}

async function searchTweetsByName(name) {
  const response = await fetch(`http://localhost:5000/tweets/${name}`);
  const data = await response.json();
  const arrayOfJsonObjects = data.map((jsonString) => JSON.parse(jsonString));
  return arrayOfJsonObjects;
}
