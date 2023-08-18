import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../ProductContext';

export const Cart = () => {
  return (
    <div className='w-full h-auto my-12 flex flex-col items-center justify-center'>
        <div className='w-10/12 h-full flex flex-col'>
            <span className='flex flex-row w-full h-fit my-2'> <p className='text-black'>Home / Cart</p> </span>
            <div className='w-full h-full flex flex-col items-center justify-center'>
              <CartComponent></CartComponent>
            </div>
        </div>
    </div>
  )
}



const CartItem = ({img, product, price, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item p-4 flex items-center space-x-4 bg-gray-100 my-2">
      <div className="w-1/4 flex items-center space-x-2">
        <img src={img} alt="Product" className="h-8 w-8" />
        <span>{product}</span>
      </div>
      <div className="w-1/4">{price}</div>
      <div className="w-1/4 flex items-center space-x-2">
        <button onClick={decreaseQuantity}> <FontAwesomeIcon className='h-5 w-5 text-red-500' icon={faMinus} /> </button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}> <FontAwesomeIcon className='h-5 w-5 text-red-500' icon={faPlus} /> </button>
      </div>
      <div className="w-1/4">${(quantity * parseFloat(price.slice(1))).toFixed(2)}</div>
    </div>
  );
};

export const CartComponent = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="cart-section w-full">
      <div className="cart-header grid grid-cols-4 sm:p-4 font-bold text-start">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          img = {item.image}
          product={item.product}
          price={item.price}
          quantity={item.quantity}
          increaseQuantity={() => increaseQuantity(item.id)}
          decreaseQuantity={() => decreaseQuantity(item.id)}
        />
      ))}
      <div className="cart-total p-4 font-bold">
        <div className="total-section flex">
          <div className="total-label mr-5">Total:</div>
          <div className="total-value">${total}</div>
        </div>
        {/* ... other total sections */}
      </div>
    </div>
  );
};

