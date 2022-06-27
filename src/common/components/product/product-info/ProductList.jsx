import React from 'react'
import { MainBox, StyledGrid } from "common/styles/CommonStyledComponents";
import ProductCardView from "./ProductCardView";

const ProductList = ({products, path}) => {
  return (
    <MainBox>
    <StyledGrid gutter={[16, 16]}>
        {products?.map((product) => (<ProductCardView key={product.productId} product={product} path={path} />))}
    </StyledGrid>
  </MainBox>
  )
}

export default ProductList