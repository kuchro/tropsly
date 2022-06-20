import React, { useState, useEffect } from "react";
import FilterCollection from "common/components/functional-components/filter/FilterCollection";

import ProductList from "common/components/product/product-info/ProductList";
const KidsComponent = ({ data }) => {
  const [kidsProducts, setKidsProducts] = useState(data);

  return (
    <>
      <FilterCollection
        data={data}
        setProducts={setKidsProducts}
        name={"Category"}
        type={"productType"}
      />
      <FilterCollection
        data={data}
        setProducts={setKidsProducts}
        name={"Brand"}
        type={"brand"}
      />

      <ProductList products={kidsProducts} path="kids" />
    </>
  );
};
export default KidsComponent;
