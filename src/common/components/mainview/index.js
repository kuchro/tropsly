import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { MainBox, ChildrenBox } from "./StyledComponents";
import {PRODUCT_DATA as mockdata} from 'mockdata'
import ProductCard from "common/components/product/index.js";

const MainView = () => {
  return (
 
    <MainBox>
      <ChildrenBox sx={{ backgroundColor: "#aaa" }}>
          {mockdata.map(product => <ProductCard product={product}/>)}
      </ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#bbb" }}>
      {mockdata.map(product => <ProductCard product={product}/>)}
      </ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#ccc" }}>
      {mockdata.map(product => <ProductCard product={product}/>)}
      </ChildrenBox>
      <ChildrenBox sx={{ backgroundColor: "#ddd" }}>
          {mockdata.map(product => <ProductCard product={product}/>)}
      </ChildrenBox>
    </MainBox>
   
  );
};
export default MainView;
