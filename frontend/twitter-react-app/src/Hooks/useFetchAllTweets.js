import { useEffect, useState } from "react";

function useFetchAllTweets() {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () =>
      await fetch(`http://localhost:5000/tweets`)
        .then((res) => res.json())
        .then((data) => {
          const arrayOfJsonObjects = data.map((jsonString) =>
            JSON.parse(jsonString)
          );
          setTweets(arrayOfJsonObjects);
        });

    fetchTweets();
  }, []);
  return tweets;
}

export default useFetchAllTweets;
