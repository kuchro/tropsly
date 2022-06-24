import { useState, useContext, useEffect } from "react";

import { Space, Typography, Divider, Collapse, Popover, Button } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;
import {
  StyledLayout,
  StyledImage,
  StyledContent,
  Description,
  StyledText,
  DetailsLayout,
  Input,
} from "./StyledComponents";

import { InfoCircleTwoTone } from "@ant-design/icons";
import SelectSizeComponent from "common/components/functional-components/select-size/SelectSizeComponent";
import AddToCartButton from "common/components/functional-components/button-action/AddToCartButton";
import CommentSection from "common/components/product/product-comment-section/CommentSection";
import RatingComponent from "common/components/product/rate-product/RatingComponent";
import ActionableButtons from "common/components/functional-components/button-action/ActionableButtons";
import FavoritesActions from "common/components/functional-components/favorites-button/FavoritesActions";

import UserContext from "store/user-context";

import { MaterialMapper } from "common/util/DataTransformer";

import { GET_DELIVERY_DATA } from "common/http/RequestHandler.js";

const ProductDetailsPage = ({ product }) => {
  const [deliveryInfo, setDeliveryInfo] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState([]);
  const userCtx = useContext(UserContext);

  const fetchData = async () => {
    let deliveryData = await GET_DELIVERY_DATA();
    setDeliveryInfo(deliveryData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    userCtx.addToCart({
      ...product,
      uId: Date.now(),
      size: selectedSize,
      quantity: parseInt(quantity),
    });
  };

  const onChangeQuanityty = (e) => {
    setQuantity(e.target.value);
  };

  const content = deliveryInfo.map((data) => {
    return (
      <div>
        <StyledText>{`${data.deliveryName}, price $${data.deliveryPrice}, ${data.extraOptions}`}</StyledText>
      </div>
    );
  });

  return (
    <>
      <StyledLayout>
        <Space size={50}>
          <StyledImage src={product.image} />
          <StyledContent>
            <Title>{product.title}</Title>

            <StyledText>{`Price: $${product.price}, + delivery costs. More info here `}</StyledText>
            <Popover
              overlayStyle={{
                width: "20vw",
              }}
              content={content}
              title="Delivery Options"
              trigger="hover"
            >
              <InfoCircleTwoTone style={{ fontSize: "20px", color: "#08c" }} />
            </Popover>
            <br />

            <StyledText>On stock {product.quantity}</StyledText>
            <Divider />
            <StyledText>Select number of items</StyledText>
            <br />
            <Input
              value={quantity}
              onChange={(e) => onChangeQuanityty(e)}
              type="number"
              min="0"
            />
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
                    numOfItems={quantity}
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
          <Collapse ghost>
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
