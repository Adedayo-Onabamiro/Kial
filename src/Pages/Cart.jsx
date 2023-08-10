import React, { useState } from 'react';

export const Cart = () => {
  return (
    <div className='w-full h-96 my-12 border border-black flex flex-col items-center justify-center'>
        <div className='w-10/12 h-full border border-black flex'>
            <span className='flex flex-row w-full h-fit border border-black'> <p className='text-black'>Home / Cart</p> </span>
            <div className='w-full h-full flex flex-col items-center justify-center'> </div>
        </div>
    </div>
  )
}

// export const CartItem = ({ productName, price }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const subtotal = price * quantity;
//   const delivery = 10.00; // Placeholder for delivery charge

//   return (
//     <div className="mb-4 border-b border-gray-300 pb-4">
//       {/* Product info */}
//       <div className="flex items-center mb-2">
//         {/* ... product image, name, etc. ... */}
//       </div>

//       {/* Quantity */}
//       <div className="flex items-center mb-2">
//         <button onClick={handleDecrement} className="text-gray-500">-</button>
//         <span className="mx-2">{quantity}</span>
//         <button onClick={handleIncrement} className="text-gray-500">+</button>
//       </div>

//       {/* Subtotal */}
//       <p>Subtotal: ${subtotal.toFixed(2)}</p>
//     </div>
//   );
// }

// export const MainCart = () => {
//   const items = [
//     { productName: "Product A", price: 99.99 },
//     { productName: "Product B", price: 49.99 },
//     // ... other cart items ...
//   ];

//   const subtotal = items.reduce((total, item) => total + item.price, 0);
//   const total = subtotal + 10.00; // Adding delivery charge
//   const delivery = 10.00; // Defining the delivery charge

//   return (
//     <div className="bg-white p-8 shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      
//       {items.map((item, index) => (
//         <CartItem key={index} productName={item.productName} price={item.price} />
//       ))}

//       <div className="flex items-center justify-between mb-6">
//         <button className="text-blue-600">Return to Cart</button>
//         <button className="text-blue-600">Update Cart</button>
//       </div>
      
//       <div className="flex items-center justify-between">
//         <div>
//           <p>Subtotal: ${subtotal.toFixed(2)}</p>
//           <p>Delivery: ${delivery.toFixed(2)}</p>
//         </div>
//         <div>
//           <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }

