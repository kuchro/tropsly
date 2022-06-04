import React, { useState, useEffect } from "react";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import FilterCollection from "common/components/filter/FilterCollection";
import FilterPrice from "common/components/filter/FilterPrice";


import ProductList from "common/components/product/ProductList";
const KidsComponent = ({ data }) => {
  const [kidsProducts, setKidsProducts] = useState(data);


  return (

    <>

        <FilterCollection data={data} setProducts={setKidsProducts} name={"Category"} type={"productType"} />
        <FilterCollection data={data} setProducts={setKidsProducts} name={"Brand"} type={"brand"}/>
    

      <ProductList products={kidsProducts} path="mens" />

      <FilterPrice />
    </>
  );
};
export default KidsComponent;
