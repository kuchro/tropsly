import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import MainProductCard from "../product/ViewProductCard";

const WomensComponent = ({data}) => {
  const [products, setProducts] = useState(data);

  return (
    <MainBox>
      <StyledGrid>
          {products.map((product) => {
            return <MainProductCard key={product.id} product={product} path={"womens"} />;
          })}
      </StyledGrid>
    </MainBox>
  );
};

export default WomensComponent;