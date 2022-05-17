import React from "react";
import { Col, Card } from "antd";
import {
  StyledImage,
  StyledCard,
  StyledButton,
  StyledDivider,
} from "./StyledElements";
import { ShoppingCartOutlined, InfoCircleTwoTone } from "@ant-design/icons";

const { Meta } = Card;
const ProductCard = ({ product }) => {
  return (
    <Col lg={6} key={product.id}>
      <StyledCard
        hoverable
        style={{ width: 340 }}
        cover={<StyledImage alt="example" src={product.image} />}
      >
        <Meta title={product.title} />
        <StyledDivider/> 
        <StyledButton
          type="primary"
          shape="circle"
          size={"large"}
          icon={<ShoppingCartOutlined />}
        />
        <StyledButton
          type="primary"
          shape="circle"
          size={"large"}
          icon={<InfoCircleTwoTone />}
        />
      </StyledCard>
    </Col>
  );
};

export default ProductCard;
