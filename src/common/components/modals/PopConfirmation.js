import { message, Popconfirm, Button } from "antd";
import React from "react";


const PopConfirmation = ({onConfirm, onCancel}) => {


  return (
    <Popconfirm
      title="Are you sure you want to delete this?"
      onConfirm={()=>onConfirm()}
      onCancel={()=>onCancel()}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" value="Delete">Delete</Button>
    </Popconfirm>
  );
};

export default PopConfirmation;
