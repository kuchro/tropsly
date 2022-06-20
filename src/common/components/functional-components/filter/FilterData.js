import React, { useState } from "react";
import { Select } from "antd";

const FilterData = ({ filterType, handleFilterType, productTypes }) => {
  const [selectedItems, setSelectedItems] = useState([]);


  const [Checked, setChecked] = useState([]);

  const handleToggle = (id,data) => {
  
    const currentIndex = Checked.indexOf(id[0]);
    const newCheckedFilter = [...Checked];
    currentIndex === -1
      ? newCheckedFilter.push(id[0])
      : newCheckedFilter.splice(currentIndex, 1);

    setChecked(newCheckedFilter);
    handleFilterType(newCheckedFilter);
    setSelectedItems(data);
  };

  return (
    <Select
      mode="multiple"
      placeholder={`Select ${filterType}`}
      value={selectedItems}
      onChange={handleToggle}
      style={{
        width: "100%",
      }}
      onSelect={()=>handleToggle}
    >
      {productTypes.map((item) => (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default FilterData;
