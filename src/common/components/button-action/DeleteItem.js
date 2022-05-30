import React from 'react'

import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DeleteItem = ({operation}) => {
  return (
    <Button
      type="primary"
      shape="circle"
      size={"large"}
      onClick={operation}
      icon={<DeleteOutlined />}
      style={{ marginLeft: "15px",  color: 'red' }}
    />
  );
};


export default DeleteItem