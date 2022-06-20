import React, {useContext, useState } from "react";
import {  StyledGrid } from "common/styles/CommonStyledComponents";
import UserContext from "store/user-context";
import DeleteItem from "common/components/functional-components/button-action/DeleteItem";

import ProductCardView from "common/components/product/product-info/ProductCardView.js";

const FavoritesComponent = ({data}) => {
  const [catData, setCatData] = useState(data)
  const userCtx = useContext(UserContext);

  const removeFromFav = (id) => {
    userCtx.removeFromFav(id);
  };

  const getRoutePath = (productCatId) =>{
    console.log(productCatId)
    return catData.find(x=>x.id==productCatId).name;
  }
  

  return (
    <>
      <StyledGrid gutter={[16, 24]}>
        {userCtx.favoriteProducts.map((product) => (
          <ProductCardView
            key={product.productId}
            product={product}
            path={getRoutePath(product.categoryId)}
            operation={
              <DeleteItem operation={() => removeFromFav(product.productId)} />
            }
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default FavoritesComponent;
