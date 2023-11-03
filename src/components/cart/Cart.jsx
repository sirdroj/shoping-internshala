import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import Card from "../card/Card";
import "./cart.scss";
import MyContext from "../../context/MyContext";
const Cart = () => {
  var ctn = true;
  const { add, remove, cart, total, checkout } = useContext(MyContext);
  return (
    <div className="cart">
      <div className="products">
        {PRODUCTS.map((product) => {
          // console.log("incart",product.id,cart[product.id])
          if (cart[product.id] > 0) {
            ctn = false;
            return (
              <Card add={add} remove={remove} cart={cart} product={product} />
            );
          }
        })}
        {ctn ? <h2 className="p-4 text-3xl">no items to display 😒</h2> : ""}
      </div>

      <div className="total sticky top-5">
        <div className="flex flex-col gap-3 rounded bg-white shadow-sm py-5 px-3 mr-5">
          <h2 className="font-bold text-gray-500 text-xl">Total</h2>
          <h2 className="font-semibold text-gray-900 text-3xl"> ₹{total()}</h2>
          <button onClick={checkout} className="font-semibold border-2 p-2 rounded bg-light">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
