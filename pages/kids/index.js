import { useRouter } from "next/router";
import Link from "next/link";
import KidsComponent from 'common/components/kids/index.js'
import { HOST_DATA } from "hostdata";
import axios from "axios";


export const getServerSideProps = async () => {

  let catResponse = await  axios.get(`${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`);
  let categoryId = catResponse.data.find(x=>x.name=="kids").id;
  let productDataResponse = await axios.get(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_CATEGORY}${categoryId}`);
  let productData = productDataResponse.data;
  return {
    props: {data: productData}
  }

};
const KidsPage = ({data}) => {


  return (
    <div>
    <KidsComponent data={data}/>  
    </div>
  );
};

export default KidsPage;