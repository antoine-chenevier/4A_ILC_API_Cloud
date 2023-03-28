import React from 'react';
import './Tweet_Box.css';

const Tweet_Box = (props) => {
  return (
    <div className='message-box'>
        <h6>{props.user} tweeted</h6>
        <p>{props.message}</p>
    </div>
  )
}

export default Tweet_Box;