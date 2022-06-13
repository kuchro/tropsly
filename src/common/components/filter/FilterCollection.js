
import React, { useState, useEffect } from "react";

import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ProductFilter from "./ProductFilter";

import { PRODUCT_TYPE_KIDS as prodTypes } from "categorymock";
import { BRAND_MOCK as brands } from "categorymock";


const FilterCollection = ({ data, setProducts, name, type }) => {

    const [Filters, setFilters] = useState({
        isEnabled: false,
        productType: { isEnabled: false, data: [] },
        brand: { isEnabled: false, data: [] },
    });

    const showFilteredResult = (filters) => {
        const entry = {
            filters: filters,
        };
        getAllProducts(entry);
    };

    const getAllProducts = (entry) => {
        if (entry.filters.isEnabled) {
            let products = {};
            if (entry.filters.productType.isEnabled) {
                let filterSet = new Set(entry.filters.productType.data);
                products = data.filter((product) =>
                    filterSet.has(product.product_type)
                );
                setProducts(products);
            }
            if (entry.filters.brand.isEnabled) {
                let filterSet = new Set(entry.filters.brand.data);
                products = data.filter((product) =>
                    filterSet.has(product.brand)
                );
                setProducts(products);
            }
        }
        if (!entry.filters.productType.isEnabled && !entry.filters.brand.isEnabled) {
            setProducts(data);
        }
    };

    const handleFilterType = (filters, category) => {
        const newFilters = { ...Filters };

        newFilters[category].data = filters;
        newFilters.isEnabled = true;
        newFilters[category].isEnabled = filters.length > 0 ? true : false;

        setFilters(newFilters);
        showFilteredResult(newFilters);
    };


    return (
        <div style={{display: 'flex'}}>


            <ProductFilter filterType={name}
                handleFilterType={(filters) =>
                    handleFilterType(filters, type)
                }
                productTypes={prodTypes}
            />

        </div>
    );
}

export default FilterCollection;