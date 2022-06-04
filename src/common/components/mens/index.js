import React, { useState, useEffect } from "react";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import FilterCollection from "common/components/filter/FilterCollection";

import ProductList from "common/components/product/ProductList";

const MensComponent = ({ data }) => {
  const [mensProducts, setMensProducts] = useState(data);
  return(
    <MainBox>
      <StyledGrid gutter={[16, 16]}>
      <div>
        <FilterCollection data={data} setProducts={setMensProducts} />
      </div>
      
      <ProductList products={mensProducts} path="mens" />
      </StyledGrid>
    </MainBox>
  )
};

export default MensComponent;
