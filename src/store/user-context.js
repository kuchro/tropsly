import { createContext, useState } from "react";
import {
  success,
  deleted_success,
} from "common/components/modals/ModalComponent";

const UserContext = createContext({
    cartProducts: [],
    favoriteProducts: [],
    addToCartProduct: (product) => {},
    addToFavProduct: (product) => {},
    checkIfAlreadyInCart: (id) => {},
    checkIfAlreadyFav: (id) => {},
    removeFromCart: (id) => {},
    removeFromFav: (id) => {},
});

export const UserContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const addToCartProduct = (product) => {
    success("cart");
    setCart([...cart, product]);
  };
  const addToFavProduct = (product) => {
    success("favorite list");
    console.log("fav here", product);
    setFav([...fav, product]);
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
    setCart(cart.filter((item) => item.productId !== id));
  };
  const removeFromFav = (id) => {
    deleted_success("favorites list");
    setFav(fav.filter((item) => item.productId !== id));
  };

  const context = {
    cartProducts: cart,
    addToCart: addToCartProduct,
    addToFav: addToFavProduct,
    favoriteProducts: fav,
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
