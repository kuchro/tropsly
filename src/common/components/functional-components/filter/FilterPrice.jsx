import React, { useState } from "react";
import { Slider, Button } from "antd";
import { Label, DivBlock } from "common/styles/CommonStyledComponents";
const FilterPrice = ({ productsData, setProductsFromRange }) => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(50);
  const onChangePrice = (value) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
    let filteredProducts = productsData.filter((p, j) => {
      return p.price >= value[0] && p.price <= value[1];
    });
    setProductsFromRange(filteredProducts);
  };

  const sortFromLowestPrice = () =>{
   let asc = productsData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
   setProductsFromRange([...asc]);
  }

  const sortFromHigestPrice = () =>{
   let desc =  productsData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
   setProductsFromRange([...desc]);
  }
  return (
    <>
      <Label>Sort</Label>
      <DivBlock>
        <Button style={{width: '60%'}} onClick={()=>sortFromLowestPrice()}>From Lowest Price</Button>
        <Button style={{width: '60%'}} onClick={()=>sortFromHigestPrice()}>From Higest Price</Button>
      </DivBlock>
      <Label>Price Range</Label>
      <Label>
        {" "}
        min:{minValue} max:{maxValue}
      </Label>
      <Slider
        min={0}
        max={600}
        onChange={(value) => onChangePrice(value)}
        range={true}
        defaultValue={[10, 50]}
      />
    </>
  );
};

export default FilterPrice;
