import {useState} from 'react';

import { useRouter } from "next/router";
import ProductDetailsPage from "common/components/product-details/ProductDetailsPage.js";

import { PRODUCT_DATA as mockdata } from "mockdata";


export const getServerSideProps = async ( context ) => {
  
  const { id } = context.query;
  
  const product = mockdata.find((product) => product.id === id);
  // const res = fetch("http://localhost:8000/api/products/kids/" + id);");
  //const data = await res.json();

  return {
    props: { data: product }
  };
};

const ClothesWomensTypePage = ({data}) => {
  const [productData] = useState(data);
  return (
    <ProductDetailsPage product={productData}/>
  );
};

export default ClothesWomensTypePage;
