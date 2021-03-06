import React from "react";
import Form from "react-bootstrap/Form";
const SelectData = ({data,callbackFunction}) => {
  return (
    <Form.Select aria-label="selectData" onChange={callbackFunction}>
       <option selected="selected" disabled="true">-- Please Select --</option>
      {data.map((item) => (
        <option key={item.deliveryId} value={item.deliveryId}>
          {item.deliveryName}, Price: ${item.deliveryPrice}, {item.extraOptions}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectData;
