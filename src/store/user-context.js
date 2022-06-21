import { createContext, useState } from "react";
import { message } from "antd";
import {
  success,
  deleted_success,
} from "common/components/functional-components/modals/ModalComponent";

import Router from 'next/router'

const UserContext = createContext({
    cartProducts: [],
    favoriteProducts: [],
    addToCartProduct: (product) => {},
    updateQuanitytyProduct: (product, quantity) => {},
    addToFavProduct: (product) => {},
    checkIfAlreadyInCart: (id) => {},
    checkIfAlreadyFav: (id) => {},
    removeFromCart: (id) => {},
    removeFromFav: (id) => {},
});

export const UserContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);



  const updateQuanitytyProduct = (product,quantity) => {
    const newCart = [...cart];
    const index = newCart.findIndex((p) => p.productId === product.productId);
    if (index === -1) {
      newCart.push(product);
    } else {
      newCart[index].quantity = quantity;
    }
    setCart(newCart);
  }

  const addToCartProduct = (product) => {
    setCart([...cart, product]);
    success("cart");
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };
  const addToFavProduct = (product) => {
    success("favorite list");
    console.log("fav here", product);
    setFav([...fav, product]);
    localStorage.setItem("fav", JSON.stringify([...fav, product]));
  };

  const checkIfAlreadyInCart = (id) => {
    const productExist = cart.find((item) => item.productId === id);
    if (productExist) {
      return true;
    }

    return false;
  };

  const checkIfAlreadyFav = (id) => {
    const productExist = fav.find((item) => item.productId === id);
    if (productExist) {
      return true;
    }
    return false;
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.uId !== id));
    localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item.uId !== id)));
  };
  const removeFromFav = (id) => {
    setFav(fav.filter((item) => item.productId !== id));
    //deleted_success("favorites list");
    localStorage.setItem("fav", JSON.stringify(fav.filter((item) => item.productId !== id)));
  };

  const context = {
    cartProducts: cart,
    favoriteProducts: fav,
    addToCart: addToCartProduct,
    updateQuanitytyProduct: updateQuanitytyProduct,
    addToFav: addToFavProduct,
    removeFromFav: removeFromFav,
    removeFromCart: removeFromCart,
    checkIfAlreadyInCart: checkIfAlreadyInCart,
    checkIfAlreadyFav: checkIfAlreadyFav,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
