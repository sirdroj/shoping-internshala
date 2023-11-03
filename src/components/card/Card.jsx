import React from 'react'
import "./card.scss"
const Card = ( {product,add,remove,cart}) => {
  return (
    <div className="card">
          <img src={product.productImage} />
          <p className='producrName'>{product.title}</p>
          <p>₹{product.price} </p>
          <div className="btns">
          <button
              onClick={() => {
                remove(product.id);
              }}
            >
              remove
            </button>
            <p>{cart[product.id]}</p>
            <button
              onClick={() => {
                add(product.id);
              }}
            >
              add
            </button>
            
          </div>
        </div>
  )
}

export default Card