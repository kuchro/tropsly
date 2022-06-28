import React, { useContext } from "react";
import Link from "next/link";
import { Col, Typography, Card } from "antd";
const { Title } = Typography;

import { StyledImage } from "./StyledElements";

import {
  StyledCard,
  StyledDivider,
  StyledButton,
  AlignLeft,
} from "common/styles/CommonStyledComponents";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { Info } from "../../functional-components/modals/ModalComponent";
import FavoritesActions from "common/components/functional-components/favorites-button/FavoritesActions";

const ProductCardView = ({ product, path, action }) => {
  return (
    <Col lg={6} md={8} xs={24} key={product.productId}>
      <StyledCard
        key={product.productId}
        hoverable
    
        cover={
          <Link href={`/${path}/${product.productId}`}>
            <StyledImage alt="example" src={product.image} />
          </Link>
        }
      >
        <Link href={`/${path}/${product.productId}`}>
          <Title style={{ textAlign: "left" }} level={3}>
            {product.title}
          </Title>
        </Link>
        <StyledDivider />
        <AlignLeft>
          <FavoritesActions product={product} onFavRemove={action} />
          <StyledButton
            onClick={() => Info(product)}
            type="primary"
            shape="circle"
            size={"large"}
            icon={<InfoCircleTwoTone />}
          />
        </AlignLeft>

        <Typography
          style={{ textAlign: "left" }}
          title="Price"
          type="numerical"
        >{`Price: $${product.price} PLN`}</Typography>
      </StyledCard>
    </Col>
  );
};

export default ProductCardView;
