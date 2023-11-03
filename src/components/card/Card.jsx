import React from "react";
import "./card.scss";
const Card = ({ product, add, remove, cart }) => {
  return (
    <div className="flex justify-center card border-0 shadow-sm bg-white rounded-xl ">
      <img
        className="w-full aspect-square object-contain"
        src={product.productImage}
      />
      <p className="producrName">{product.title}</p>
      <p>₹{product.price} </p>
      <div className="btns">
        <button
          className="px-3 py-0 bg-black text-white text-sm rounded flex justify-center items-center "
          onClick={() => {
            remove(product.id);
          }}
        >
          Remove
        </button>
        <p>{cart[product.id]}</p>
        <button
          className="px-3 py-0 bg-black text-white text-sm rounded flex justify-center items-center "
          onClick={() => {
            add(product.id);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
