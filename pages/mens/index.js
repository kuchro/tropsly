

import MensComponent from "common/components/views/mens/index";

import {
  GET_CATEGORY_DATA,
  GET_PRODUCTS_CATEGORY_BY_ID,
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
      let productDataResponse = await GET_PRODUCTS_CATEGORY_BY_ID(category.id);
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

const MensPage = ({ data }) => {
  return <MensComponent data={data} />;
};

export default MensPage;
