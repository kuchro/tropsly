
import { MainBox } from "common/styles/CommonStyledComponents";

import {capitalizeFirstLetter} from 'common/util/DataTransformer'

import ProductList from "common/components/product/product-info/ProductList";

const MainView = ({ products, materialTypes }) => {

  return (
    <MainBox>
      {products.map((productData) => {
        return (
          <>
            <h1>{capitalizeFirstLetter(productData.categoryName)}</h1>
            <ProductList products={productData.products.slice(0, 4)} materialTypes={materialTypes} path={productData.categoryName} />
          </>
        );
      })}
    </MainBox>
  );
};
export default MainView;
