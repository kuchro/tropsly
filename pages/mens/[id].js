import {useState} from 'react';
import { useRouter } from "next/router";
import ProductDetailsPage from "common/components/product/product-details/ProductDetailsPage.js";
import axios from "axios";
import { HOST_DATA } from "hostdata";

export const getServerSideProps = async ( context ) => {
  
  const { id } = context.query;
  
  let productDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${id}`);
  let productData = await productDataResponse.data;
  // const res = fetch("http://localhost:8000/api/products/kids/" + id);");
  //const data = await res.json();

  return {
    props: { data: productData }
  };
};

const ClothesMensTypePage = ({data}) => {
  const [productData] = useState(data);

  return (
    <ProductDetailsPage product={productData}/>
  );
};

export default ClothesMensTypePage;
