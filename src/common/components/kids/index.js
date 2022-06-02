import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { PRODUCT_TYPE_KIDS as prodTypes } from "categorymock";
import { PRODUCT_DATA as mockdata } from "mockdata";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import  ProductFilter  from "common/components/filter/ProductFilter";
import ViewProductCard from "../product/ViewProductCard";

const KidsComponent = ({ data }) => {
  const [kidsProducts, setKidsProducts] = useState(data);
  const [Filters, setFilters] = useState({
      productType: []
  });

  const handleFilterType = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    setFilters(newFilters);
  }
};

  return (
    <MainBox>
      <div>Filter by Brand :</div>
   
      <StyledGrid gutter={[16, 16]}>
      <ProductFilter
          handleFilterType={(filters) => handleFilterType(filters)}
          productTypes={prodTypes}
        />

        {kidsProducts?.map((product) => (
          <ViewProductCard key={product.id} product={product} path={"kids"} />
        ))}
      </StyledGrid>
    </MainBox>
  );
};

export default KidsComponent;
