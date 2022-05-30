import React, { useContext } from "react";
import UserContext from "store/user-context";

import AddOrRemoveButton from "common/components/button-action/AddOrRemoveButton";
import AddToFavButton from "common/components/button-action/AddToFavButton";
import DeleteItem from "common/components/button-action/DeleteItem";

const FavoritesActions = ({product}) => {
  const userCtx = useContext(UserContext);

  const addToFavItems = (product) => {
    if (userCtx.checkIfAlreadyFav(product.id)) {
    } else {
      userCtx.addToFav(product);
    }
  };
  const removeFromFav = (id) => {
    userCtx.removeFromFav(id);
  };

  return (
    <>
      <AddOrRemoveButton
        exist={userCtx.checkIfAlreadyFav(product.id)}
        buttonDelete={
          <DeleteItem operation={() => removeFromFav(product.id)} />
        }
        buttonAdd={<AddToFavButton onAddToFav={() => addToFavItems(product)} />}
      />
    </>
  );
};

export default FavoritesActions;
