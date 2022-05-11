import { memo } from "react"
import React  from 'react'

const Products = (props) => {
   
  return (
    <>
    <ol>
      {props.product.map((item)=>(
         <li>{item.title}
         <img src={item.thumbnail} alt='this is picture' height='100px' width='100px'/>
         <p>{item.description}</p>
         <h3>${item.price}</h3>
         </li>
      ))}
        </ol>  
    </>
  )
}

export default memo(Products) 