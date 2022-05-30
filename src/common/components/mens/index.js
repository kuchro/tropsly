import React, { useState, useEffect } from "react";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import MainProductCard from "../product/ViewProductCard";

const MensComponent = ({data}) => {
  const [products, setProducts] = useState(data);


  return (
    <MainBox>
      <StyledGrid gutter={[16, 16]}>
          {products.map((product) => {
            return <MainProductCard key={product.id} product={product} path={"mens"}/>;
          })}

      </StyledGrid>
    </MainBox>
  );
};

export default MensComponent;
