import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartOpen, setCartOpen] = useState(false)

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartOpen])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id && item.size === product.size);
    //if product exists, don't add again
      if (existing) {
        return prevItems;
      }

      //if product does not exists add new item
      return [...prevItems, { 
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        size: product.size,
        quantity: 1 }];
    });
    setCartOpen(true)
  };

  const increaseQty = (id, size) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id, size) => {
    //remove product(s) by id
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.size === size)) 

    );
  };



  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, cartOpen, setCartOpen, openCart, closeCart, decreaseQty, increaseQty }}>
      {children}
    </CartContext.Provider>
  );
};