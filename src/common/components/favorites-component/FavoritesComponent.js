import React, {useContext } from "react";
import {  StyledGrid } from "common/styles/CommonStyledComponents";
import UserContext from "store/user-context";
import DeleteItem from "common/components/button-action/DeleteItem";

import ViewProductCard from "common/components/product/ViewProductCard.js";

const FavoritesComponent = () => {
  const userCtx = useContext(UserContext);

  const removeFromFav = (id) => {
    userCtx.removeFromFav(id);
  };

  return (
    <>
      <StyledGrid gutter={[16, 24]}>
        {userCtx.favoriteProducts.map((product) => (
          <ViewProductCard
            key={product.id}
            product={product}
            path={"mens"}
            operation={
              <DeleteItem operation={() => removeFromFav(product.id)} />
            }
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default FavoritesComponent;
