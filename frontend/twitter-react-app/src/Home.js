import React, { useEffect } from 'react'

function getTweets(){
    const getrequest = new XMLHttpRequest();
    getrequest.open("GET","http://localhost:5000/tweets");
    getrequest.send();
    getrequest.responseType= "json";
    getrequest.onload = () =>{
        if(getrequest.readyState == 4 && getrequest.status == 200){
            const data = getrequest.response;
            console.log(data);
        }else{
            console.log("Error failed to fetch data from the endpoint");
        }
    }
}

function Home(){
    useEffect(()=>{
        getTweets();
    },[]);
    return (
        <div>
            <h1>Welcome to the home page</h1>
        </div>
    );
}

export default Home;