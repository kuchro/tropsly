import { Button, Modal } from "antd";
import React, { useState } from "react";


const ActionableDeleteModal = ({
  onCancel,
  onConfirm,
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
        onOk={()=>onConfirm()}
        onCancel={() => onCancel()}
        okText='Delete'
        width={1000}
        footer={buttons}
      >
        {actionType}
       
      </Modal>
    </>
  );
};

export default ActionableDeleteModal;
