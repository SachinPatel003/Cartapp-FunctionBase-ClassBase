import React from 'react'
import Product from './Product'

export default function ProductList(props) {  
  return (
    props.productList.length > 0 ?
    props.productList.map((product,index)=>{
      return <Product product={product} key={index} incrementQunatity={props.incrementQunatity} decrememtnQunantity={props.decrememtnQunantity} index={index} remove={props.remove}/>
    }) 
    : <h1>Item not avilable in Cart</h1>
  )
}
  