import { Button, Modal } from "antd";
import React, { useState } from "react";


const ActionableModal = ({
  onCancel,
 actionType,
 buttons,
 text
}) => {
  const [visible] = useState(true);

  return (
    <>
      <Modal
        title={`Action ${text}`}
        centered
        visible={visible}
        onCancel={() => onCancel()}
        okText={`${text}`}
        width={1000}
        footer={buttons}
      >
        {actionType}
       
      </Modal>
    </>
  );
};

export default ActionableModal;
