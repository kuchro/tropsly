import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ProductsContainer,
} from "common/styles/CommonStyledComponents";
import FilterCollection from "common/components/functional-components/filter/FilterCollection";

import ProductList from "common/components/product/product-info/ProductList";

const MensComponent = ({ data }) => {
  const [mensProducts, setMensProducts] = useState(data);
  return (
    <MainContainer>
      <FilterCollection data={data} setProducts={setMensProducts} />
      <ProductsContainer>
        <ProductList products={mensProducts} path="mens" />
      </ProductsContainer>
    </MainContainer>
  );
};

export default MensComponent;
