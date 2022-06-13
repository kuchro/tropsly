import React, { useState } from "react";
import { Select, Tag } from "antd";

const DeleteCategory = ({ path, categories, catToDelete }) => {
  const [pathRoute, setPathRoute] = useState(path);
  const [catOptions, setCatOptions] = useState([]);
  //const { label, value, closable, onClose } = props;

  const handleChange = (value) => {
    catToDelete(value);
  };

  return (
    <>
      <Select
        mode="tags"
        color="red"
        showArrow
        onChange={handleChange}
        placeholder='Choose categories to delete'
        style={{
          width: "100%",
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

export default DeleteCategory;
