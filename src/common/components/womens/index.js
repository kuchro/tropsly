import React, { useState, useEffect } from "react";
import { MainBox,StyledGrid } from "common/styles/CommonStyledComponents";
import FilterCollection from "common/components/filter/FilterCollection";

import ProductList from "common/components/product/ProductList";

const WomensComponent = ({ data }) => {
  const [womensProducts, setWomensProducts] = useState(data);

  return (
    <MainBox>
    <StyledGrid gutter={[16, 16]}>
    <div>
      <FilterCollection data={data} setProducts={setWomensProducts} />
    </div>
    
    <ProductList products={womensProducts} path="mens" />
    </StyledGrid>
  </MainBox>
  );
};

export default WomensComponent;
