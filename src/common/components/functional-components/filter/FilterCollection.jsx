import React, { useState, useEffect } from "react";

import ProductFilter from "./ProductFilter";
import { capitalizeFirstLetter } from "common/util/DataTransformer";
import { FilterBox } from "common/styles/CommonStyledComponents";
import { GET_ALL_CONFIG } from "common/http/RequestData.js";
import FilterPrice from "common/components/functional-components/filter/FilterPrice";

const FilterCollection = ({ data, setProducts }) => {
  const [categoryConfig, setCategoryConfig] = useState([]);
  const fetchConfig = async () => {
    let config = await GET_ALL_CONFIG();
    setCategoryConfig(config);
  };
  useEffect(() => {
    fetchConfig();
  }, []);

  const [Filters, setFilters] = useState({
    isEnabled: false,
    "product-type": { isEnabled: false, uniqueKey: "productTypeId", data: [] },
    "material-type": {
      isEnabled: false,
      uniqueKey: "materialTypeId",
      data: [],
    },
    brand: { isEnabled: false, uniqueKey: "brandId", data: [] },
  });

  const showFilteredResult = (filters, category) => {
    const entry = {
      filters: filters,
    };
    getAllProducts(entry, category);
  };

  const getAllProducts = (entry, category) => {
    if (entry.filters.isEnabled) {
      let products = {};

      if (entry.filters[category]?.isEnabled) {
        let filterSet = new Set(entry.filters[category].data);
        products = data.filter((product) =>
          filterSet.has(product[entry.filters[category].uniqueKey])
        );
        setProducts(products);
      } else {
        setProducts(data);
      }
    }
  };

  const handleFilterType = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category].data = filters;
    newFilters.isEnabled = true;
    newFilters[category].isEnabled = filters.length > 0 ? true : false;
    setFilters(newFilters);
    showFilteredResult(newFilters, category);
  };

  return (
    <FilterBox>
      
      <FilterPrice productsData={data} setProductsFromRange={setProducts} />
      {Object.entries(categoryConfig).map(([k, v]) => {
        return k !== "category" ? (
          <ProductFilter
            filterType={capitalizeFirstLetter(k)}
            handleFilterType={(filters) => handleFilterType(filters, k)}
            productTypes={v}
          />
        ) : null;
      })}
    </FilterBox>
  );
};

export default FilterCollection;
