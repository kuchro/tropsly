import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ProductList from "common/components/product/product-info/ProductList";

const WomensComponent = ({ data }) => {

   return <ProductList products={data} path="womens" />;
}
export default WomensComponent;
