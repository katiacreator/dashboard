import React from 'react';

function AverageRating(props){
  return(
    <div>
      <h3>Average Rating</h3>
      <h2>{props.avgRating}</h2>
    </div>
  )
}

export default AverageRating