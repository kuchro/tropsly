import { useState, useEffect } from "react";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
import { StyledLayout, StyledHeader } from "./StyledComponents";
import { PRODUCT_DATA as mockdata } from "mockdata";

const ProductDetailsPage = ({ product }) => {


  useEffect(() => {
    //setProductData(mockdata.filter((product) => product.category === id));
  }, []);
  return (
    <>
      <Layout>
        <StyledHeader>{product}</StyledHeader>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
