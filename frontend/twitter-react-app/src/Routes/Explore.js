import React, { useEffect, useState } from "react";
import Tweet_Box from "../Components/Tweet_Box/Tweet_Box";
import useFetchTweetsByUser from "../Hooks/useFetchTweetsByUser";
import useFetchTweetsByHashtag from "../Hooks/useFetchTweetsByHashtags";
import "./Explore.css";

function Explore() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchTweets, setSearchTweets] = useState([]);

  const tweetsByHashtag = useFetchTweetsByHashtag(query);
  const tweetsByUser = useFetchTweetsByUser(query);

  useEffect(() => {
    const fetchTweets = async () => {
      if (!query) {
        return;
      }

      const hashtagsRegex = /#\w+/g;
      const hashtags = query.match(hashtagsRegex);

      if (hashtags) {
        setSearchType("hashtags");
        setSearchTweets(tweetsByHashtag);
      } else {
        setSearchType("users");
        setSearchTweets(tweetsByUser);
      }
    };

    fetchTweets();
  }, [query, searchType, tweetsByHashtag, tweetsByUser]);

  return (
    <div className="Explore">
      <input
        className="Explore-search"
        placeholder="Search for a tweet by name or by hashtag"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      {query !== "" && <h5>Search results for "{query}"</h5>}
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
