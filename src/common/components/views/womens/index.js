import React, { useState, useEffect } from "react";
import ProductList from "common/components/product/product-info/ProductList";
import FilterCollection from "common/components/functional-components/filter/FilterCollection";

import {
  MainContainer,
  ProductsContainer,
} from "common/styles/CommonStyledComponents";
const WomensComponent = ({ data, materialTypes }) => {
  const [womensProducts, setWomensProducts] = useState(data);

  return (
    <MainContainer>
      <FilterCollection data={data} setProducts={setWomensProducts} />
      <ProductsContainer>
        <ProductList products={womensProducts} materialTypes={materialTypes} path="womens" />
      </ProductsContainer>
    </MainContainer>
  );
};
export default WomensComponent;
