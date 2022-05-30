import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import { Button } from "antd";

const AddToFavButton = ({onAddToFav}) => {

  return (
    <Button
      type="primary"
      onClick={()=>onAddToFav()}
      shape="circle"
      size={"large"}
      icon={<HeartTwoTone />}
      style={{ marginLeft: "15px"}}
    />
  );
};

export default AddToFavButton;
