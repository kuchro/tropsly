import { useState, useContext } from "react";

import { Space, Typography, Divider, Collapse } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;
import {
  StyledLayout,
  StyledImage,
  StyledContent,
  Description,
  StyledText,
  DetailsLayout,
} from "./StyledComponents";
import SelectSizeComponent from "common/components/functional-components/select-size/SelectSizeComponent";
import AddToCartButton from "common/components/functional-components/button-action/AddToCartButton";
import CommentSection from "common/components/comment-section/CommentSection";
import RatingComponent from "common/components/rating-component/RatingComponent";
import ActionableButtons from "common/components/functional-components/button-action/ActionableButtons";
import FavoritesActions from "common/components/functional-components/favorites-button/FavoritesActions";

import UserContext from "store/user-context";

import { MaterialMapper } from "common/util/DataTransformer";

const ProductDetailsPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState([]);
  const userCtx = useContext(UserContext);

  const addToCart = (product) => {
    userCtx.addToCart({ ...product, size: selectedSize });
  };

  return (
    <>
      <StyledLayout>
        <Space size={40}>
          <StyledImage src={product.image} />
          <StyledContent>
            <Title>{product.title}</Title>

            <StyledText>{`Price: $${
              product.price
            }, with delivery +$${15}`}</StyledText>
            <br />

            <StyledText>On stock {product.quantity}</StyledText>
            <Divider />
            <SelectSizeComponent
              data={product.size}
              onChangeSelectData={(data) => setSelectedSize(data)}
            />
            <ActionableButtons
              actions={
                <>
                  <AddToCartButton
                    sizes={selectedSize}
                    onAddToCart={() => addToCart(product)}
                  />
                  <FavoritesActions product={product} />
                </>
              }
            />
            <Divider />
            <RatingComponent productId={product.productId} />
          </StyledContent>
        </Space>

        <DetailsLayout>
          <Collapse>
            <Panel header="About product" key="1">
              <Description>{product.description}</Description>
            </Panel>
            <Panel header="Material" key="2">
              <Description>{MaterialMapper(product.material)}</Description>
            </Panel>
            <Panel header="Opinions" key="3">
              <CommentSection productId={product.productId} />
            </Panel>
          </Collapse>
        </DetailsLayout>
      </StyledLayout>
    </>
  );
};

export default ProductDetailsPage;
