import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  ProductHeader,
  Select,
  Input,
  Label,
  TextArea,
  Submit
} from "./StyledComponents";
import { Divider, Typography, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;
import { CAT_MOCK, BRAND_MOCK, MATERIAL_MOCK } from "categorymock";
import axios from "axios";
import { HOST_DATA } from "hostdata";
const AddProduct = () => {
  const plainOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [CheckedList, setCheckedList] = useState([]);

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

  const onSubmit = (data) => {
      data.size = CheckedList;
      axios.post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}`,data).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ProductContainer>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Photo</Label>
        <Input placeholder="Image" {...register("image")} />
        <Label>Title</Label>
        <Input placeholder="Title" {...register("title", {required: true})} />
        {errors.Title && <span>Title is required.</span>}
        <Label>Description</Label>
        <TextArea
          placeholder="Please fill description"
          {...register("description", {required: true})}
        />
        {errors.Description && <span>Description is required.</span>}
        <Divider />
        <Label>Category</Label>
        <Select type='number' {...register("category", { required: true })}>
          {CAT_MOCK.map((item) => (
            <option key={item.key} value={item.name}>
              {item.name}
            </option>
          ))}
          {errors.Section && <span>Section is required.</span>}
        </Select>

        <Label>Material</Label>
        <Select {...register("material", { required: true })}>
          {MATERIAL_MOCK.map((item) => (
            <option key={item.key} value={item.name}>
              {item.name}
            </option>
          ))}
      
        </Select>
        {errors.Material && <span>Material is required.</span>}
        <Label>Brand</Label>
        <Select {...register("brand", { required: true })}>
          {BRAND_MOCK.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </Select>
        <Divider />
        <Checkbox {...register("size")}
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
        <Input type="number" placeholder={errors.Quantity ? 'This field is required' : 'Add Price'} min={0} {...register("price",{ required: true })} />
        <Label>Quantity</Label>
        <Input type="number" placeholder={errors.Quantity ? 'This field is required' : 'Add Quantity'} min={0} {...register("quantity", { required: true })} />
        <Divider />
        <Submit type="submit" value="Add Product"/>
      </form>
    </ProductContainer>
  );
};

export default AddProduct;
