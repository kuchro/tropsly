import React from "react";
import { Select } from "antd";

const CategorySelect = ({ path, categories, catToDelete }) => {
  const handleChange = (value) => {
    catToDelete(value);
  };

  return (
    <>
      <Select
        mode="tags"
        status="vertical"
        showSearch
        onChange={handleChange}
        placeholder='Choose categories'
        style={{
          width: "60%",
        }}
        options={categories.map(option=>{
           return {
                key: option,
                value: option
            }
        })}
      />
    </>
  );
};

export default CategorySelect;
