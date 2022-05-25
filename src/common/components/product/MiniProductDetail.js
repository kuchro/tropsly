import { useState, useEffect } from "react";
import { Descriptions, Button, Divider } from "antd";
import { StyledSelect } from "common/styles/CommonStyledComponents";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Option } = StyledSelect;

const MiniProductDetails = ({ product }) => {
  const [productSize, setProductSize] = useState(product.size);
  const [selectedSize, setSelectedSize] = useState([]);

  useEffect(() => {
    const elements = [];
    product.size.map((size) =>
      elements.push(<Option key={size}>{size}</Option>)
    );
    setProductSize(elements);
  }, []);

  const handleChange = (value) => {
    setSelectedSize(value);
  };

  const mapMaterialInfo = (material) => {
    return Object.entries(material).map(([k, v]) => (
      <span>
     {k}:{v} 
      </span>
    ));
  };

  return (
    <div>
      <Descriptions title="Product info">
        <Descriptions.Item>{product.description}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label="Size">
          {product.size.map((size) => (
            <span>{size}, </span>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Material" >
          {mapMaterialInfo(product.material)}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Button
        disabled={selectedSize.length === 0}
        type="primary"
        shape="circle"
        size={"large"}
        icon={<ShoppingCartOutlined />}
      />
      <StyledSelect mode="tags" onChange={handleChange} tokenSeparators={[","]}>
        {productSize}
      </StyledSelect>
    </div>
  );
};

export default MiniProductDetails;
