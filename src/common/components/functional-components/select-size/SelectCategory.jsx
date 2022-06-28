import React from "react";
import { selectCategoryData } from "common/util/DataTransformer";
import { SelectOptions } from "common/styles/CommonStyledComponents";

const SelectCategory = ({ category, categoryData, register,registerProp, errors }) => {
  return (
    <SelectOptions {...register(registerProp, { required: true })}>
        <option selected="selected" disabled="true">- Please Select -</option>
      {selectCategoryData(category, categoryData).map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
      {errors.category && <span>{category} is required.</span>}
    </SelectOptions>
  );
};

export default SelectCategory;
