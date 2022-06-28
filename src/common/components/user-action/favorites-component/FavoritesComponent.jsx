import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import { Button, Result } from "antd";
import { StyledGrid } from "common/styles/CommonStyledComponents";
import UserContext from "store/user-context";

import { getRoutePath } from "common/util/UtilsFunctions";
import ProductCardView from "common/components/product/product-info/ProductCardView";

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
        <Result
          status="404"
          title="404"
          subTitle="Sorry, no products in your favorite bucket."
          extra={
            <Button type="primary" onClick={() => Router.push("/")}>
              Go to home page
            </Button>
          }
        />
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
