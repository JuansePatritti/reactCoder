import React, { createContext, useState, useEffect} from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState({ qty: 0, total: 0 });




  useEffect(() => {
    let qtyInitial = 0;
    let total = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
      total += product.quantity * product.price;
    });
    setTotals({ qty: qtyInitial, total: total });
  }, [cart]);



  

  const addToCart = (prod, quantity) => {
    if (isInCart(prod.id)) {
      setCart(
        cart.map((product) => {
          if (product.id === prod.id)
            return { ...product, quantity };
          return product;
        })
      );
    } else {
      setCart([...cart, { ...prod, quantity }]);
    }
  };

  const removal = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CustomContext.Provider
      value={{ cart, totals, addToCart, removal, clear }}
    >
      {children}
    </CustomContext.Provider>
  );
};
