
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import ProductDetailsPage from "common/components/product-details/ProductDetailsPage.js";
import { PRODUCT_DATA as mockdata } from "mockdata";

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
  
  const product = mockdata.find((product) => product.id === id);
  // const res = fetch("http://localhost:8000/api/products/kids/" + id);");
  //const data = await res.json();

  return {
    props: { data: product }
  };
};

const KidsProductDetailPage = ({data}) => {
  const router = useRouter();

  const [productData] = useState(data);

  return (
    <div>
      <div>{productData.title}</div>
    </div>
  );
};

export default KidsProductDetailPage;
