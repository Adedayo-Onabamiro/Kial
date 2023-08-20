import React, { createContext, useState, useEffect } from 'react';

//this isnt just where product context is, but other contexts as well actually

// Product Context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// Selected Product Context
export const SelectedProductContext = createContext();

export const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </SelectedProductContext.Provider>
  );
};

// CartContext.js
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const addToCart = (product) => {
    // const [showNotification, setShowNotification] = useState(false);

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Ensure price is in the correct format
      const formattedPrice = typeof product.price === 'string' ? product.price : `$${product.price.toFixed(2)}`;

      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1, price: formattedPrice }]);
    }


  };

  const increaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? 
          (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null) 
          : item
      ).filter(item => item !== null)
    );
  };
  
  const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

//this is the pop up that shows when item added to cart
// export const Notification = ({ message }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); // Hide after 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return isVisible ? <div className="notification">{message}</div> : null;
// };


//Favorite Context
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const initialFavoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
  const [favoriteItems, setFavoriteItems] = useState(initialFavoriteItems);

  const addToFavorite = (product) => {
    setFavoriteItems((prevItems) => [...prevItems, product]);
    console.log("added to fave")
  };

  const removeFromFavorite = (productId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    console.log("removed to fave")
  };

  const isFavorite = (productId) => {
    return favoriteItems.some((item) => item.id === productId);
  };

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);


  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorite, removeFromFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
