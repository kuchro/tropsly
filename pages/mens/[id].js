import { useState } from "react";
import ProductDetailsPage from "common/components/product/product-details/ProductDetailsPage";

import { GET_PRODUCT_BY_ID } from "common/http/RequestData.js";
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  let productDataResponse = await GET_PRODUCT_BY_ID(id);
  console.debug("Product:", productDataResponse.data);
  return {
    props: { data: productDataResponse.data },
  };
};

const ClothesMensTypePage = ({ data }) => {
  const [productData] = useState(data);

  return <ProductDetailsPage product={productData} />;
};

export default ClothesMensTypePage;
