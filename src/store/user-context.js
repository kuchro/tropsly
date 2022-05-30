import { createContext, useState } from "react";
import { success,deleted_success,warning } from "common/components/modals/ModalComponent";

const UserContext = createContext({
  addToCart: [],
  addToFav: [],
});

export const UserContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const addToCartProduct = (product) => {
    success('cart');
    setCart([...cart, product]);
  };
  const addToFavProduct = (product) => {
    success('favorite list');
    console.log("fav here", product);
    setFav([...fav, product]);
  };

  const checkIfAlreadyInCart = (id) => {
    const productExist = cart.find((item) => item.id === id);
    if (productExist) {
      return true;
    }

    return false;
  };

  const checkIfAlreadyFav = (id) => {
    const productExist = fav.find((item) => item.id === id);
    if (productExist) {
      return true;
    }
    return false;
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const removeFromFav = (id) => {
    deleted_success('favorites list');
    setFav(fav.filter((item) => item.id !== id));
  };

  const favoriteProducts = () => {
    return fav;
  };

  const context = {
    addToCart: addToCartProduct,
    addToFav: addToFavProduct,
    favoriteProducts: favoriteProducts,
    removeFromFav: removeFromFav,
    removeFromCart: removeFromCart,
    checkIfAlreadyInCart: checkIfAlreadyInCart,
    checkIfAlreadyFav: checkIfAlreadyFav
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
