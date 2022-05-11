import React from 'react'
import './Card.css'

const FetchData = (props) => {
  return (
   
  <>
     <ol>
        <div className='card'>
          
        
          <li> 
          <p>{props.userss.value}</p>
          {/* <h4>${user.price}</h4>
          <img src={user.image} alt= 'imagess' height='100px' width='100px'/> */}
          </li>
        
          
           
        </div>
     </ol>
     </>
   
  )
}

export default FetchData