import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

const AddToCartButton = ({ sizes, onAddToCart, numOfItems, alreadyIn }) => {
 
  return (
    <>
      {alreadyIn() ? (
        <Popconfirm
          title="Product with that size is already in shopping cart. Are you sure?"
          onConfirm={() => onAddToCart()}
        >
          <Button
            disabled={sizes.length === 0 || numOfItems == 0}
            type="primary"
            shape="circle"
            size={"large"}
            onClick={null}
            icon={<ShoppingCartOutlined />}
            style={{ marginLeft: "15px" }}
          />
        </Popconfirm>
      ) : (
        <Button
          disabled={sizes.length === 0 || numOfItems == 0}
          type="primary"
          shape="circle"
          size={"large"}
          onClick={() => onAddToCart()}
          icon={<ShoppingCartOutlined />}
          style={{ marginLeft: "15px" }}
        />
      )}
    </>
  );
};

export default AddToCartButton;
