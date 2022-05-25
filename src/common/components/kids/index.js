import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { PRODUCT_DATA as mockdata } from "mockdata";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import MainProductCard from "../product/ViewProductCard";

const KidsComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(mockdata.filter((product) => product.category === "3"));
  }, []);

  return (
    <MainBox>
      <StyledGrid gutter={[16, 16]}>
          {products.map((product) => {
            return <MainProductCard key={product.id} product={product} path={"kids"} />;
          })}
      </StyledGrid>
    </MainBox>
  );
};

export default KidsComponent;
