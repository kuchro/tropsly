import { message, Popconfirm, Button } from "antd";
import React from "react";


const PopConfirmation = ({onConfirm, onCancel, text}) => {


  return (
    <Popconfirm
      title={`Are you sure you want to ${text.toLowerCase()} this?`}
      onConfirm={()=>onConfirm()}
      onCancel={()=>onCancel()}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary">{text}</Button>
    </Popconfirm>
  );
};

export default PopConfirmation;
