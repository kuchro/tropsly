import React, { useState } from "react";
import { Select } from "antd";

const CategorySelect = ({ path, categories, catToDelete }) => {
  const [pathRoute, setPathRoute] = useState(path);
  const [catOptions, setCatOptions] = useState([]);

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
