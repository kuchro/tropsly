import React, { useState, useEffect } from "react";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";

import ProductList from "common/components/product/product-info/ProductList";

const MensComponent = ({ data }) => {
  return <ProductList products={data} path="mens" />;
};

export default MensComponent;