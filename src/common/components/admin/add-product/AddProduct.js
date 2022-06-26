import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  Input,
  Label,
  TextArea,
  Submit,
} from "./StyledComponents";

import { Divider, message, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;
import { CAT_MOCK, BRAND_MOCK, MATERIAL_MOCK } from "categorymock";
import axios from "axios";
import { HOST_DATA } from "hostdata";
import { selectCategoryData } from "common/util/DataTransformer";
import SelectCategory from "common/components/functional-components/select-size/SelectCategory";
import ImageUpload from "./ImageUpload";

const AddProduct = ({ configurationData }) => {
  const plainOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [categoryData, setCategoryData] = useState(configurationData);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [CheckedList, setCheckedList] = useState([]);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

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
    await uploadImage().then(res=>{
      data.image=`https://localhost:4566/sportshop.images/${res.data}`;
    });
    data.size = CheckedList;
    axios
      .post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}`, data)
      .then(function (response) {
        console.log(response);
        e.target.reset();
        message.success("Product Added to database.");
      })
      .catch(function (error) {
        message.error("Something went wrong...");
      });
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file.originFileObj);
    formData.append("fileName", file.name);
   return axios
      .post(`${HOST_DATA.API_URL}${HOST_DATA.IMAGE_UPLOAD}`, formData)
      .then(function (response) {
   
        message.success("Image uploaded to the server.");
        return response;
      })
      .catch(function (error) {
        console.log(error)
        message.error("Something went wrong...");
        return null;
      });
  };

  // const checkTest = async ()=>{
  //   let output;
  //     await uploadImage().then(res=>{
  //     output=res;
  //   });
  //   console.log(output);
  // }
  return (
    <ProductContainer>
      <Label>Photo</Label>
      <ImageUpload setImageFile={(file)=>setFile(file)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Title</Label>
        <Input placeholder="Title" {...register("title", { required: true })} />
        {errors.title && <span>Title is required.</span>}
        <Label>Serial Number</Label>
        <Input
          placeholder="Serial Number"
          {...register("serialNumber", { required: true })}
        />
        {errors.serialNumber && <span>Serial Number is required.</span>}
        <Label>Description</Label>
        <TextArea
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
          options={plainOptions}
          value={CheckedList}
          onChange={onChange}
        />
        <Divider />
        <Label>Price($)</Label>
        <Input
          type="number"
          placeholder={errors.price ? "Price is required" : "Add Price"}
          min={0}
          {...register("price", { required: true })}
        />
        <Label>Quantity</Label>
        <Input
          type="number"
          placeholder={
            errors.quantity ? "Quantity is required" : "Add Quantity"
          }
          min={0}
          {...register("quantity", { required: true })}
        />
        <Divider />
        <Submit type="submit" value="Add Product" />
      </form>
    </ProductContainer>
  );
};

export default AddProduct;
