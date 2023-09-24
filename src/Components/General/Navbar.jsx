import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { TopBanner } from './TopBanner';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../ProductContext';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("")
  const navigate = useNavigate()

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successful", {
        autoClose: 1000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
      });
      navigate("/Auth")
    }).catch((error) => {
      toast.error(error.message, {
        autoClose: 1000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
      });
    });
  }

  //monitor current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setdisplayName(user.displayName)
        if (user.displayName == null){
          const ul = user.email.substring(0, user.email.indexOf("@"));
          const uName = ul.charAt(0).toUpperCase() + ul.slice(1);
          setdisplayName(uName);
        }
      } else {
        setdisplayName("")
      }
    });
  
  }, [])

  const isAuthenticated = !!displayName;
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
              {/* <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-lg bg-gray-200 text-black placeholder-gray-700"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute top-3 right-3 text-gray-300" />
              </div> */}
              <Link to="/Favorites"> <FontAwesomeIcon icon={faHeart} className="text-black text-xl hover:text-gray-300" /> </Link>
              <Link to="/Cart"> <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl hover:text-gray-300" /> <span className="cart-count">{totalItemCount}</span> </Link>
              <p> {displayName} </p>
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
              {isAuthenticated ? (
                <li> <Link to="/Auth" onClick={logoutUser} className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} > Sign Out </Link> </li>
              ) : (
                <li> <Link to="/Auth" className={`block py-2 pl-3 pr-4 rounded hover:underline text-black`} > Sign In </Link> </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
