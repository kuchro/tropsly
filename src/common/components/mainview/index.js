import { useState } from "react";

import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";

import { PRODUCT_DATA as mockdata } from "mockdata";
import { CAT_MOCK as category } from "categorymock";

import ProductList from "common/components/product/ProductList.js";

const MainView = () => {
  const [mensProduct, setMensProducts] = useState(
    mockdata.filter((product) => product.category === "1")
  );
  const [womensProduct, setWomensProducts] = useState(
    mockdata.filter((product) => product.category === "2")
  );
  const [kidsProduct, setKidsProducts] = useState(
    mockdata.filter((product) => product.category === "3")
  );

  return (
    <MainBox>

        <h1>Mens</h1>
        <ProductList products={mensProduct.slice(0, 4)} path="mens" />
        <h1>Womens</h1>
        <ProductList products={womensProduct.slice(0, 4)} path="womens" />
        <h1>Kids</h1>
        <ProductList products={kidsProduct.slice(0, 4)} path="kids" />

    </MainBox>
  );
};
export default MainView;
