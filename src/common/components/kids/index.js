import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { PRODUCT_TYPE_KIDS as prodTypes } from "categorymock";
import { PRODUCT_DATA as mockdata } from "mockdata";
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ProductFilter from "common/components/filter/ProductFilter";
import ViewProductCard from "../product/ViewProductCard";

const KidsComponent = ({ data }) => {
  const [kidsProducts, setKidsProducts] = useState(data);
  const [Filters, setFilters] = useState({
    isEnabled: false,
    productType: { isEnabled: false, data: [] },
  });

  const showFilteredResult = (filters) => {
    const entry = {
      filters: filters
    }
    getAllProducts(entry)
  }

  const getAllProducts = (entry) => {

    if (entry.filters.isEnabled) {
      let products = {};
      if (entry.filters.productType.isEnabled) {
        let filterSet = new Set(entry.filters.productType.data)
        products = data.filter(product => filterSet.has(product.product_type))
        setKidsProducts(products)
      }

    } if (!(entry.filters.productType.isEnabled)) {
      setKidsProducts(data)
    }
  }


  const handleFilterType = (filters, category) => {
    const newFilters = { ...Filters };

    switch (category) {
      case 'productType':
          newFilters[category].data = filters;
          newFilters.isEnabled =true;
          newFilters.productType.isEnabled = filters.length > 0 ? true : false;
          break;
      default:
            console.log(category)
    }
    setFilters(newFilters);
    showFilteredResult(newFilters);
  }


return (
  <MainBox>
    <div>Filter by Brand :</div>

    <StyledGrid gutter={[16, 16]}>
      <ProductFilter
        handleFilterType={(filters) => handleFilterType(filters, "productType")}
        productTypes={prodTypes}
      />

      {kidsProducts?.map((product) => (
        <ViewProductCard key={product.id} product={product} path={"kids"} />
      ))}
    </StyledGrid>
  </MainBox>
)};
export default KidsComponent;
