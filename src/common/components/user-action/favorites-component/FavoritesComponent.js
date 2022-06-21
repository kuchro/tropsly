import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";

import { StyledGrid } from "common/styles/CommonStyledComponents";
import UserContext from "store/user-context";

import { getRoutePath } from "common/util/UtilsFunctions";
import ProductCardView from "common/components/product/product-info/ProductCardView.js";

const FavoritesComponent = ({ data }) => {
  const [favProducts, setFavProducsts] = useState([]);

  useEffect(() => {
    const favProducts = JSON.parse(localStorage.getItem("fav"));
    setFavProducsts(favProducts);
  }, []);
  const userCtx = useContext(UserContext);

  const onRemoveFravProduct = (id) => {
    userCtx.removeFromFav(id);
    setFavProducsts(JSON.parse(localStorage.getItem("fav")));
  };

  return (
    <>
      {favProducts.length == 0 ? (
        <>
          <>
            <h1>No products in shooping cart</h1>
            <button onClick={() => Router.push("/")}>Go to home page</button>
          </>
        </>
      ) : (
        <StyledGrid gutter={[16, 24]}>
          {favProducts.map((product) => (
            <ProductCardView
              key={product.productId}
              product={product}
              path={getRoutePath(product.categoryId, data)}
              action={() => onRemoveFravProduct(product.productId)}
            />
          ))}{" "}
        </StyledGrid>
      )}
    </>
  );
};

export default FavoritesComponent;
