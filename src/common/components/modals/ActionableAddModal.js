import { Button, Modal } from "antd";
import React, { useState } from "react";


const ActionableAddModal = ({
  onConfirm,
  onCancel,
 actionType,
 buttons
}) => {
  const [visible] = useState(true);

  return (
    <>
      <Modal
        title="Action"
        centered
        visible={visible}
        onOk={() => onConfirm()}
        onCancel={() => onCancel()}
        okText='Add Category'
        cancelText='Close'
        width={1000}
        footer={buttons}
      >
        {actionType}
       
      </Modal>
    </>
  );
};

export default ActionableAddModal;
