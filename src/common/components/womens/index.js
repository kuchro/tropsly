import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { PRODUCT_DATA as mockdata } from "mockdata";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import MainProductCard from "../product/MainProductCard";

const WomensComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(mockdata.filter((product) => product.category === "2"));
  }, []);

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