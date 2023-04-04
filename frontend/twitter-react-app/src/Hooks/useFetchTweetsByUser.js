import { useEffect, useState } from "react";

function useFetchTweetsByUser(user) {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () =>
      await fetch(`http://localhost:5000/tweets/${user}`)
        .then((res) => res.json())
        .then((data) => {
          const arrayOfJsonObjects = data.map((jsonString) =>
            JSON.parse(jsonString)
          );
          setTweets(arrayOfJsonObjects);
        });

    fetchTweets();
  }, [user]);
  return tweets;
}

export default useFetchTweetsByUser;
