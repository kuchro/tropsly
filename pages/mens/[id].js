import {useState} from 'react';
import { useRouter } from "next/router";
import Mens from "common/components/mens/index.js";
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

const ClothesMensTypePage = ({data}) => {
  const [productData] = useState(data);

  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Type is:{id}</p>
      <p>title:{productData.title}</p>
    </div>
  );
};

export default ClothesMensTypePage;
