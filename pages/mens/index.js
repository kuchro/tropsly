

import MensComponent from "common/components/views/mens/index";

import {
  GET_CATEGORY_DATA,
  GET_PRODUCTS_CATEGORY_BY_ID,
  GET_MATERIAL_TYPE,
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

  let transferData = [];
  let materialTypes = await GET_MATERIAL_TYPE();
  if(materialTypes){
    transferData = materialTypes;
  }

  return {
    props: { data: productData, material: transferData },
  };
};

const MensPage = ({ data, material }) => {
  return <MensComponent data={data} materialTypes={material}/>;
};

export default MensPage;
