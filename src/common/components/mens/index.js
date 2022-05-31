import React, { useState, useEffect } from "react";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ViewProductCard from "../product/ViewProductCard";
import ProductList from "common/components/product/ProductList";

const MensComponent = ({ data }) => {
  return <ProductList products={data} path="mens" />;
};

export default MensComponent;
