import React from 'react';

function Sidebar(props){
  let sidebarItem = props.sidebarItems.map(item => 
    <li>{item}</li>
  )

  return(
    <div>
      <ul class="no-bullet-item">
        {sidebarItem}
      </ul>
    </div>
  )
}

export default Sidebar