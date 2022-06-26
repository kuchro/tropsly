import { useRouter } from "next/router";
import Link from "next/link";
import KidsComponent from "common/components/views/kids/index.js";
import {
  GET_CATEGORY_DATA,
  GET_CATEGORY_BY_ID,
} from "common/http/RequestData.js";

export const getServerSideProps = async ({resolvedUrl}) => {
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
const KidsPage = ({ data }) => {
  return <KidsComponent data={data} />;
};

export default KidsPage;
