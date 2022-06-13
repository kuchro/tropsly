
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import ProductDetailsPage from "common/components/product-details/ProductDetailsPage.js";
import axios from "axios";
import { HOST_DATA } from "hostdata";
// export const getStaticPaths = async () => {
//   const kidsProducts = mockdata.filter((product) => product.category === "3");
//   const paths = kidsProducts.map((product) => {
//     return { 
//       params: { id: product.id.toString() } 
//     }
//   });
//   return {
//     paths,
//     fallback: false
//   }
// };
//to serve static page getStaticProps
// const id = context.params.id;
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

const KidsProductDetailPage = ({data}) => {
  const router = useRouter();

  const [productData] = useState(data);

  return (
    <ProductDetailsPage product={productData}/>
  );
};

export default KidsProductDetailPage;
