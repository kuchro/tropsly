import { useState, useEffect } from "react";
import { Descriptions, Divider } from "antd";
import { StyledSelect } from "common/styles/CommonStyledComponents";

import { MaterialMapper } from "common/util/DataTransformer";



const { Option } = StyledSelect;

const MiniProductDetails = ({ product }) => {
  const [productSize, setProductSize] = useState(product.size);

  useEffect(() => {
    const elements = [];
    product.size.map((size) =>
      elements.push(<Option key={size}>{size}</Option>)
    );
    setProductSize(elements);
  }, []);


  return (
    <div>
      <Descriptions title="Product info">
        <Descriptions.Item>{product.description}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label="Available Size">
          {product.size.join(', ')}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions>
      <Descriptions.Item label="Material">
          {product.materialTypeId}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
    </div>
  );
};

export default MiniProductDetails;
