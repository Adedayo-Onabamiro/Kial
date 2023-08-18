import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { TopBanner } from './TopBanner';
import { Link } from 'react-router-dom';
import { CartContext } from '../../ProductContext';


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const { cartItems } = useContext(CartContext);

  // Calculate total quantity of items in the cart
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className='w-full h-auto '>
      <TopBanner></TopBanner>
      <nav className="bg-transparent w-full md:px-8 z-20 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo on the left */}
          <div className="flex items-center"> <span className="text-xl font-bold font-custom">KIAL</span> </div>

          <div className="flex md:order-2">
            <div className="flex items-center space-x-4 mx-4">
              {/* Search bar */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-lg bg-gray-200 text-black placeholder-gray-700"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute top-3 right-3 text-gray-300" />
              </div>
              <Link to="/ProductDetails"> <FontAwesomeIcon icon={faHeart} className="text-black text-xl hover:text-gray-300" /> </Link>
              <Link to="/Cart"> <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl hover:text-gray-300" /> <span className="cart-count">{totalItemCount}</span> </Link>
            </div>

            <button data-collapse-toggle="navbar-sticky" type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200`}
              aria-controls="navbar-sticky" aria-expanded="false" onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-black" aria-hidden="true" />
            </button>
          </div>

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMenu ? '' : 'hidden'}`} id="navbar-sticky" >
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ${showMenu ? '' : 'hidden'} md:flex`}>
              <li> <Link to="/" className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} aria-current="page"> Home </Link> </li>
              <li> <Link to="/Contact" className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} > Contact </Link> </li>
              <li> <Link to="/About" className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} > About </Link> </li>
              <li> <Link to="/SignUp" className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} > Signup </Link> </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};
