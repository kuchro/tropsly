import React from 'react'
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ViewProductCard from "../product/ViewProductCard";

const ProductList = ({products, path}) => {
  return (
    <MainBox>
    <StyledGrid gutter={[16, 16]}>
        {products.map((product) => (<ViewProductCard key={product.productId} product={product} path={path} />))}
    </StyledGrid>
  </MainBox>
  )
}

export default ProductList