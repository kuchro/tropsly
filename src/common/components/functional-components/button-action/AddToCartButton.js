import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddToCartButton = ({sizes, onAddToCart, numOfItems}) => {

    return (
        <Button
          disabled={sizes.length === 0 || numOfItems == 0}
          type="primary"
          shape="circle"
          size={"large"}
          onClick={()=>onAddToCart()}
          icon={<ShoppingCartOutlined />}
          style={{ marginLeft: "15px" }}
        />
      );
    };

export default AddToCartButton