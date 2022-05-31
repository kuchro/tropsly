import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { PRODUCT_DATA as mockdata } from "mockdata";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ViewProductCard from "../product/ViewProductCard";

const KidsComponent = ({ data }) => {

  return (
      
    <MainBox>
      <StyledGrid gutter={[16, 16]}>
          {data.map((product) => (<ViewProductCard key={product.id} product={product} path={"kids"} />))}
      </StyledGrid>
    </MainBox>
  );
};

export default KidsComponent;
