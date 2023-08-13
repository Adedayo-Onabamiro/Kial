import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


export const Cart = () => {
  return (
    <div className='w-full h-96 my-12 border border-black flex flex-col items-center justify-center'>
        <div className='w-10/12 h-full border border-black flex flex-col'>
            <span className='flex flex-row w-full h-fit border border-black'> <p className='text-black'>Home / Cart</p> </span>
            <div className='w-full h-full flex flex-col items-center justify-center'>
              <CartComponent></CartComponent>
            </div>
        </div>
    </div>
  )
}



const CartItem = ({ product, price, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item p-4 flex items-center space-x-4 bg-gray-100 my-2">
      <div className="w-1/4 flex items-center space-x-2">
        <img src="./img/image 63.png" alt="Product" className="h-8 w-8" />
        <span>{product}</span>
      </div>
      <div className="w-1/4">{price}</div>
      <div className="w-1/4 flex items-center space-x-2">
        <button onClick={decreaseQuantity}> <FontAwesomeIcon className='h-5 w-5 text-red-500' icon={faMinus} /> </button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}> <FontAwesomeIcon className='h-5 w-5 text-red-500' icon={faMinus} /> </button>
      </div>
      <div className="w-1/4">${(quantity * parseFloat(price.slice(1))).toFixed(2)}</div>
    </div>
  );
};

export const CartComponent = () => {
  const [items, setItems] = useState([
    { id: 1, product: 'Item 1', price: '$10', quantity: 2 },
    { id: 2, product: 'Item 2', price: '$20', quantity: 1 },
    // ... other items
  ]);

  const increaseQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);

  return (
    <div className="cart-section w-full">
      <div className="cart-header grid grid-cols-4 p-4 text-start bg-gray-300">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          product={item.product}
          price={item.price}
          quantity={item.quantity}
          increaseQuantity={() => increaseQuantity(item.id)}
          decreaseQuantity={() => decreaseQuantity(item.id)}
        />
      ))}
      <div className="cart-total p-4 bg-gray-300">
        <div className="total-section grid grid-cols-2">
          <div className="total-label">Total</div>
          <div className="total-value">${total}</div>
        </div>
        {/* ... other total sections */}
      </div>
    </div>
  );
};

