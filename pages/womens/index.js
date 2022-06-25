import { useRouter } from "next/router";
import Link from "next/link";
import WonensComponent from "common/components/views/womens/index.js";
import {
  GET_CATEGORY_DATA,
  GET_CATEGORY_BY_ID,
} from "common/http/RequestData.js";

import { HOST_DATA } from "hostdata";
import axios from "axios";
export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  let productData = [];
  let catResponse = await GET_CATEGORY_DATA();
  if (catResponse) {
    let category = catResponse.find(
      (x) => x.name == resolvedUrl.replace("/", "")
    );
  
    if (category) {
      console.info("CategoryId successfully found!", category.id);
      let productDataResponse = await GET_CATEGORY_BY_ID(category.id);
      console.log(
        `${productDataResponse.length} products successfully fetched!`
      );
      productData = productDataResponse;
    }else{
      console.warn(
        "Application may be not configured - Missing categories. Please check Admin panel."
      );
    }
  } else {
    console.warn(
      "Application may be not configured - Missing categories. Please check Admin panel."
    );
  }

  return {
    props: { data: productData },
  };
};

const WomensPage = ({ data }) => {
  return <WonensComponent data={data} />;
};

export default WomensPage;
