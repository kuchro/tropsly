import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ViewProductCard from "../product/ViewProductCard";

const WomensComponent = ({ data }) => {

  return (
    <MainBox>
      <StyledGrid>
      {data.map((product) => (<ViewProductCard key={product.id} product={product} path={"womens"} />))}
      </StyledGrid>
    </MainBox>
  );
};

export default WomensComponent;
