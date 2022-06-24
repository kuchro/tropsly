import {useState} from 'react';

import { useRouter } from "next/router";
import ProductDetailsPage from "common/components/product/product-details/ProductDetailsPage.js";

import axios from "axios";
import { HOST_DATA } from "hostdata";

export const getServerSideProps = async ( context ) => {
  
  const { id } = context.query;
  
  let productDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${id}`);
  let productData = await productDataResponse.data;
  return {
    props: { data: productData }
  };
};

const ClothesWomensTypePage = ({data}) => {
  const [productData] = useState(data);
  return (
    <ProductDetailsPage product={productData}/>
  );
};

export default ClothesWomensTypePage;
