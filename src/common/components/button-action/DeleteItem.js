import React from 'react'

import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";

const DeleteItem = ({operation}) => {
  return (
    <Button
      type="primary"
      shape="circle"
      size={"large"}
      onClick={operation}
      icon={<HeartFilled color='red'/>}
      style={{ marginLeft: "15px",  color: 'red' }}
    />
  );
};


export default DeleteItem