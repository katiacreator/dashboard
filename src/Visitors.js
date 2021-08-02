import React from 'react';

function Visitors(props){
  return(
    <div>
      <h3>Website Visitors</h3>
      <h2>{props.numVisitors}</h2>
    </div>
  )
}

export default Visitors