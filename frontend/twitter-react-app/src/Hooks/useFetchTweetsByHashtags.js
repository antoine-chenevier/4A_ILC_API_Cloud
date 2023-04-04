import { useEffect, useState } from "react";

function useFetchTweetsByHashtag(hashtag) {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () =>
      await fetch(`http://localhost:5000/tweetsHashtag/${hashtag}`)
        .then((res) => res.json())
        .then((data) => {
          const arrayOfJsonObjects = data.map((jsonString) =>
            JSON.parse(jsonString)
          );
          setTweets(arrayOfJsonObjects);
        });

    fetchTweets();
  }, [hashtag]);
  return tweets;
}

export default useFetchTweetsByHashtag;
