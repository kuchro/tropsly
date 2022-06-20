import { useRouter } from "next/router";

import MensComponent from "common/components/views/mens/index.js";
import { HOST_DATA } from "hostdata";
import axios from "axios";

export const getServerSideProps = async () => {
  let catResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`
  );
  let categoryId = catResponse.data.find((x) => x.name == "mens").id;
  let productDataResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_CATEGORY}${categoryId}`
  );
  let productData = productDataResponse.data;
  return {
    props: { data: productData },
  };
};

const MensPage = ({ data }) => {
  return <MensComponent data={data} />;
};

export default MensPage;
