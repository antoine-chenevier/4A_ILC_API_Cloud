import React, { useEffect, useState } from "react";
import Tweet_Box from "../Components/Tweet_Box/Tweet_Box";
import "./Home.css";

function getTweets() {
  // const getrequest = new XMLHttpRequest();
  // getrequest.open("GET", "http://localhost:5000/tweets");
  // getrequest.send();
  // getrequest.responseType = "json";
  // getrequest.onload = () => {
  //   if (getrequest.readyState == 4 && getrequest.status == 200) {
  //     const jsonString = getrequest.response;
  //       console.log(jsonString);
  //       // const d = JSON.parse(jsonString);
  //       console.log(typeof(jsonString));

  //   } else {
  //     console.log("Error failed to fetch data from the endpoint");
  //   }
  // };

  const fetchTweets = async () =>
    await fetch(`http://localhost:5000/tweets`)
      .then((res) => res.json())
      .then((data) => {
        const response = {
          list: [
            '{"id": 4, "user": "christian", "message": "None", "date": "25/03/2023 17:19:03"}',
            '{"id": 3, "user": "christian", "message": "None", "date": "25/03/2023 17:18:54"}',
            '{"id": 1, "user": "None", "message": "None", "date": "25/03/2023 17:15:39"}',
            '{"id": 2, "user": "None", "message": "None", "date": "25/03/2023 17:18:43"}',
          ],
        };

        const parsedList = response.list.map((item) => JSON.parse(item));

        console.log(data);
        const res = JSON.parse(data[0]);
        console.log(res.id);
        
      });

  fetchTweets();
}

function Home() {
  getTweets();
  return (
    <div className="Home">
      <h1>Welcome to the home page</h1>
      <Tweet_Box user="christian" message="This is a message" />
    </div>
  );
}

export default Home;
