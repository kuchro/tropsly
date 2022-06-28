

import { useState } from "react";
import ProductDetailsPage from "common/components/product/product-details/ProductDetailsPage";

import {
 GET_PRODUCT_BY_ID
} from "common/http/RequestData.js";
export const getServerSideProps = async ( context ) => {
  const { id } = context.query; 
  let productDataResponse = await GET_PRODUCT_BY_ID(id);
  return {
    props: { data: productDataResponse.data }
  };
};

const KidsProductDetailPage = ({data}) => {

  const [productData] = useState(data);

  return (
    <ProductDetailsPage product={productData}/>
  );
};

export default KidsProductDetailPage;
