import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  Input,
  Label,
  TextArea,
  Submit
} from "./StyledComponents";
import { Divider, message, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;
import { CAT_MOCK, BRAND_MOCK, MATERIAL_MOCK } from "categorymock";
import axios from "axios";
import { HOST_DATA } from "hostdata";
import { selectCategoryData } from "common/util/DataTransformer";
import SelectCategory from 'common/components/functional-components/select-size/SelectCategory'




const AddProduct = ({configurationData}) => {
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


  const onSubmit = (data, e) => {
      data.size = CheckedList;
      //need to be modyfied
      //data.userId = 3;
      axios.post(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}`,data).then(function (response) {
        console.log(response);
        e.target.reset();
        message.success("Product Added to database.");
      })
      .catch(function (error) {
        message.error("Something went wrong...");
      });
     
     
  }

  return (
    <ProductContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Photo</Label>
        <Input placeholder="Image" {...register("image")} />
        <Label>Title</Label>
        <Input placeholder="Title" {...register("title", {required: true})} />
        {errors.title && <span>Title is required.</span>}
        <Label>Material</Label>
        <Input placeholder="Material" {...register("material", {required: true})} />
        {errors.material && <span>Material is required.</span>}
        <Label>Description</Label>
        <TextArea
          placeholder="Please fill description"
          {...register("description", {required: true})}
        />
        {errors.description && <span>Description is required.</span>}
    
        <Divider />
        <Label>Category</Label>
        <SelectCategory category={"category"} categoryData={configurationData} register={register} errors={errors}/>
        
        <Label>Brand</Label>
          <SelectCategory category={"brand"} categoryData={configurationData} register={register} errors={errors}/>
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
        <Input type="number" placeholder={errors.price ? 'Price is required' : 'Add Price'} min={0} {...register("price",{ required: true })} />
        <Label>Quantity</Label>
        <Input type="number" placeholder={errors.quantity ? 'Quantity is required' : 'Add Quantity'} min={0} {...register("quantity", { required: true })} />
        <Divider />
        <Submit type="submit" value="Add Product"/>
      </form>
    </ProductContainer>
  );
};

export default AddProduct;
