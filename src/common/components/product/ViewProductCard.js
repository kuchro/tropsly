import React from "react";
import Link from "next/link";
import { Col, Card } from "antd";

import {
  StyledImage,
} from "./StyledElements";

import { StyledCard, StyledDivider, StyledButton } from "common/styles/CommonStyledComponents";
import { ShoppingCartOutlined, InfoCircleTwoTone } from "@ant-design/icons";
import { Info } from "../modals/ModalComponent";

const { Meta } = Card;
const MainProductCard = ({ product, path }) => {
  return (
    <Col lg={6} md={8} xs={16}  key={product.id}>
      <StyledCard
        hoverable
        style={{ width: 340 }}
        cover={
          <Link href={`/${path}/${product.id}`}>
            <StyledImage alt="example" src={product.image} />
          </Link>
        }
      >
        <Link href={`/${path}/${product.id}`}>
          <Meta title={product.title} />
        </Link>
        <StyledDivider />
        <StyledButton
          onClick={() => {
            Info(product);
          }}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<InfoCircleTwoTone />}
        />
      </StyledCard>
    </Col>
  );
};

export default MainProductCard;
