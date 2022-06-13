import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Input, Label, Submit } from "./StyledComponents";
import axios from "axios";
import { HOST_DATA } from "hostdata";

import { successCustomMessage } from "common/components/modals/ModalComponent";
const AddCategory = ({ path, actionButton }) => {
  const [pathRoute, setPathRoute] = useState(path);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${HOST_DATA.API_URL}${HOST_DATA.CONFIGURE}${pathRoute}`, data)
      .then(function (response) {
        successCustomMessage(`Category ${data.name} created`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Add {path}</Label>
      <Input {...register("name", { required: true })} />
      {errors.name && <span>Name is required.</span>}
      <br />
      {actionButton}
    </form>
  );
};

export default AddCategory;
