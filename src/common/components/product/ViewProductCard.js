import React, { useContext } from "react";
import Link from "next/link";
import { Col, Typography } from "antd";
const { Title } = Typography;

import { StyledImage } from "./StyledElements";

import {
  StyledCard,
  StyledDivider,
  StyledButton,
} from "common/styles/CommonStyledComponents";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { Info } from "../modals/ModalComponent";
import FavoritesActions from "common/components/favorites-button/FavoritesActions";

const ViewProductCard = ({ product, path }) => {
  return (
    <Col lg={6} md={8} xs={16} key={product.id}>
      <StyledCard
        hoverable
        style={{ width: 340 }}
        cover={
          <Link href={`/${path}/${product.productId}`}>
            <StyledImage alt="example" src={product.image} />
          </Link>
        }
      >
        <Link href={`/${path}/${product.id}`}>
          <Title level={3}>{product.title}</Title>
        </Link>
        <StyledDivider />
        <FavoritesActions product={product} />
        <StyledButton
          onClick={() => Info(product)}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<InfoCircleTwoTone />}
        />
        <Typography title="Price" type="numerical">{`Price: $${product.price} PLN`}</Typography>
      </StyledCard>
    </Col>
  );
};

export default ViewProductCard;
