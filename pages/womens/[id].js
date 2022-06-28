import { useState } from "react";

import ProductDetailsPage from "common/components/product/product-details/ProductDetailsPage";

import {
  GET_PRODUCT_BY_ID,
  GET_MATERIAL_TYPE,
} from "common/http/RequestData.js";
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  let productDataResponse = await GET_PRODUCT_BY_ID(id);
  console.debug("Product:", productDataResponse.data);

  let transferData = [];
  let materialTypes = await GET_MATERIAL_TYPE();
  if (materialTypes) {
    transferData = materialTypes;
  }

  return {
    props: { data: productDataResponse.data, material: transferData },
  };
};

const ClothesWomensTypePage = ({ data, material }) => {
  const [productData] = useState(data);
  return <ProductDetailsPage product={productData} materialTypes={material} />;
};

export default ClothesWomensTypePage;
