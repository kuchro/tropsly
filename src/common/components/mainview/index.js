
import { useState } from "react";

import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";

import { PRODUCT_DATA as mockdata } from "mockdata";
import { CAT_MOCK as category } from "categorymock";
import MainProductCard from "common/components/product/MainProductCard.js";

const MainView = () => {

  const [mensProduct, setMensProducts] = useState(mockdata.filter((product) => product.category === "1"));
  const [womensProduct, setWomensProducts] = useState(mockdata.filter((product) => product.category === "2"));
  const [kidsProduct, setKidsProducts] = useState(mockdata.filter((product) => product.category === "3"));
  return (
    <MainBox>
      <h1>Mens</h1>
      <StyledGrid gutter={[16, 24]} >
        {mensProduct.slice(0, 4).map((product) => (
          <MainProductCard key={product.id} product={product} path={"mens"} />
        ))}
      </StyledGrid>

      <h1>Womens</h1>
      <StyledGrid gutter={[16, 24]} >
        {womensProduct.slice(0, 4).map((product) => (
          <MainProductCard key={product.id} product={product} path={"womens"} />
        ))}
      </StyledGrid>
      <h1>Kids</h1>
      <StyledGrid gutter={[16, 24]} >
        {kidsProduct.slice(0, 4).map((product) => (
          <MainProductCard key={product.id} product={product} path={"kids"} />
        ))}
      </StyledGrid>
    </MainBox>
  );
};
export default MainView;
