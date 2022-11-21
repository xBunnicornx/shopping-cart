import React from "react";

function Cart(props) {
  return <div>{props.cart.map((item) => <div>{item.name} (${item.price})</div>)}</div>;
}

export default Cart;
