import React from 'react';

function Sentiment(props){
  let sentiments = props.sentimentAnalysis.map(sentiment => 
    <li>{sentiment}</li>
  )

  return(
    <div>
      <h3>Sentiment Analysis</h3>
      <ul class="no-bullet-item">
        {sentiments}
      </ul>
    </div>
  )
}

export default Sentiment