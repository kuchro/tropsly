import React,{useEffect,useState} from "react";
import { StyledSelect } from "common/styles/CommonStyledComponents";
import Form from "react-bootstrap/Form";

export const SelectSizeComponent = ({data, onChangeSelectData}) => {
  const [productSize, setProductSize] = useState(data);
  useEffect(() => {
    const elements = [];
    productSize.map((size) =>
      elements.push(<Option key={size}>{size}</Option>)
    );
    setProductSize(elements);
  }, []);



  const handleChange = (value) => {
    onChangeSelectData(value);
  };

  return (
    <StyledSelect
      placeholder={productSize.length > 0 ? "Select Size" : "Out of stock"}
      disabled={productSize.length === 0}
      onChange={handleChange}
      tokenSeparators={[","]}
    >
      {productSize}
    </StyledSelect>
  );
};

export default SelectSizeComponent;
