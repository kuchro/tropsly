import React, { useState } from "react";
import {
  MainContainer,
  ProductsContainer,
} from "common/styles/CommonStyledComponents";
import FilterCollection from "common/components/functional-components/filter/FilterCollection";

import ProductList from "common/components/product/product-info/ProductList";

const MensComponent = ({ data,materialTypes }) => {
  const [mensProducts, setMensProducts] = useState(data);
  return (
    <MainContainer>
      <FilterCollection data={data} setProducts={setMensProducts} />
      <ProductsContainer>
        <ProductList products={mensProducts} materialTypes={materialTypes} path="mens" />
      </ProductsContainer>
    </MainContainer>
  );
};

export default MensComponent;
