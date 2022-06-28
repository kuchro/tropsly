import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  StyledInput,
  Label,
  Submit,
  StyledTextArea,
  Disabled,
} from "./StyledComponents";


import { Divider, Checkbox, InputNumber } from "antd";
const CheckboxGroup = Checkbox.Group;

import SelectCategory from "common/components/functional-components/select-size/SelectCategory";
import ImageUpload from "./ImageUpload";

import { ADD_NEW_PRODUCT, UPLOAD_IMAGE } from "common/http/RequestData";



const AddProduct = ({ configurationData,awshostInfo }) => {
  const plainOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [CheckedList, setCheckedList] = useState([]);

  const [file, setFile] = useState();
  const [checkBoxData, setCheckBoxData] = useState(plainOptions);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onSubmit = async (data, e) => {
    await uploadImage().then((res) => {
      data.image = `${awshostInfo.AWS_HOST}/${awshostInfo.BUCKET}/${res.data}`;
    });
    data.size = CheckedList;
    await ADD_NEW_PRODUCT(data);
    e.target.reset();
    setCheckAll(false);
    setCheckedList([]);
 
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file.originFileObj);
    formData.append("fileName", file.name);
    return UPLOAD_IMAGE(formData);
  };

  return (
    <ProductContainer>
      <Label>Photo</Label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload setImageFile={(file)=>setFile(file)}/>
        <Label>Title</Label>
        <StyledInput
          name="title"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required.</span>}
        <Label>Serial Number</Label>
        <StyledInput
          name="serialNumber"
          placeholder="Serial Number"
          {...register("serialNumber", { required: true })}
        />
        {errors.serialNumber && <span>Serial Number is required.</span>}
        <Label>Description</Label>
        <StyledTextArea
          placeholder="Please fill description"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Description is required.</span>}

        <Divider />
        <Label>Category</Label>
        <SelectCategory
          category={"category"}
          categoryData={configurationData}
          register={register}
          registerProp="categoryId"
          errors={errors}
        />

        <Label>Brand</Label>
        <SelectCategory
          category={"brand"}
          categoryData={configurationData}
          register={register}
          registerProp="brandId"
          errors={errors}
        />

        <Label>Product Type</Label>
        <SelectCategory
          category={"product-type"}
          categoryData={configurationData}
          register={register}
          registerProp="productTypeId"
          errors={errors}
        />
        <Label>Material Type</Label>
        <SelectCategory
          category={"material-type"}
          categoryData={configurationData}
          register={register}
          registerProp="materialTypeId"
          errors={errors}
        />
        <Divider />
        <Checkbox
          {...register("size")}
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <br />
        <CheckboxGroup
          options={checkBoxData}
          value={CheckedList}
          onChange={onChange}
        />
        <Divider />
        <Label>Price($)</Label>
        <div>
          <StyledInput
            type="number"
            step="0.01"
            placeholder={errors?.price ? "Price is required" : "Add Price"}
            min={0}
            {...register("price", { required: true })}
          />
        </div>
        <Label>Quantity</Label>
        <StyledInput
          type="number"
          placeholder={
            errors.quantity ? "Quantity is required" : "Add Quantity"
          }
          min={0}
          {...register("quantity", { required: true })}
        />
        <Divider />
        {file?<Submit type="submit" value="Add Product" /> : <Disabled disabled type="submit" value="Please upload image" />}
      </form>
    </ProductContainer>
  );
};

export default AddProduct;
