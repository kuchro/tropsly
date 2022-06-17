import React from "react";
import { selectCategoryData } from "common/util/DataTransformer";
import { SelectOptions } from "common/styles/CommonStyledComponents";
const SelectCategory = ({ category, categoryData, register, errors }) => {
  return (
    <SelectOptions {...register(category, { required: true })}>
      {selectCategoryData(category, categoryData).map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
      {errors.category && <span>{category} is required.</span>}
    </SelectOptions>
  );
};

export default SelectCategory;
