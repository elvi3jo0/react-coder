import React from 'react';

const CartWidget = () => {

  const itemCount = 0
   
  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i> {/* Ícono del carrito  */}
      <span className="badge badge-pill badge-danger">{itemCount}</span> 
    </div>
  )
}

export default CartWidget;
