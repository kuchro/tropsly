import { useRouter } from "next/router";
import Link from "next/link";
import WonensComponent from "common/components/views/womens/index.js";

import { HOST_DATA } from "hostdata";
import axios from "axios";
export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  console.log("PathName!!", resolvedUrl.replace("/", ""));

  let catResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.CATEGORY}`
  );
  let categoryId = catResponse.data.find(
    (x) => x.name == resolvedUrl.replace("/", "")
  ).id;
  let productDataResponse = await axios.get(
    `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT_CATEGORY}${categoryId}`
  );
  let productData = productDataResponse.data;
  return {
    props: { data: productData },
  };
};

const WomensPage = ({ data }) => {
  return <WonensComponent data={data} />;
};

export default WomensPage;
