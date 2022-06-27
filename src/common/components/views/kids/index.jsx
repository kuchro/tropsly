import React, { useState } from "react";
import FilterCollection from "common/components/functional-components/filter/FilterCollection";

import {
  MainContainer,
  ProductsContainer,
} from "common/styles/CommonStyledComponents";
import ProductList from "common/components/product/product-info/ProductList";
const KidsComponent = ({ data }) => {
  const [kidsProducts, setKidsProducts] = useState(data);

  return (
    <MainContainer>
      <FilterCollection data={data} setProducts={setKidsProducts} />
 
      <ProductsContainer>
        <ProductList products={kidsProducts} path="kids" />
      </ProductsContainer>
    </MainContainer>
  );
};
export default KidsComponent;
