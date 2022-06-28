import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Popconfirm, Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Router from "next/router";
import {getUUID} from 'common/util/UtilsFunctions'
import { PersonalData, FormContainer, AddressData } from "./StyledComponents";
import { ORDER_PRODUCTS } from "common/http/RequestData.js";
import UserContext from "store/user-context";

const CustomerDataForm = ({ orderData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [orderInfo] = useState(orderData);
  const userCtx = useContext(UserContext);


  const onSubmit = async (data) => {
    data.orderNumber = getUUID();
    data.totalPrice = orderInfo.totalPrice;
    data.deliveryId = orderInfo.deliveryId;
    data.products = orderInfo.products.map(product=>{
      return {
        name: product.title,
        quantity: product.quantity,
        price: product.price,
        serialNumber: product.serialNumber,
        size: product.size
      }
    });
     await ORDER_PRODUCTS(data).then(res => {
      if(res.status >= 200 && res.status <=299 ){
        Router.push('/confirmation/'+data.orderNumber);
        setTimeout(()=>{
          userCtx.resetShoppingCart();
        },1500)
      
      }else{
        //present to error
      }
    });
  };

  const handleOnConfirm = ()=>{
    return null; 
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <PersonalData>
            <Form.Group className="mb-3" column="sm">
              <Form.Label>Personal Information</Form.Label>
              <Form.Control
                id="firstName"
                placeholder="First Name"
                {...register("customerDataInfo.firstName", {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors.customerDataInfo?.firstName &&
                errors.customerDataInfo?.firstName.type === "required" && (
                  <span>This is required</span>
                )}
              {errors.customerDataInfo?.firstName &&
                errors.customerDataInfo?.firstName.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="lastName"
                placeholder="Last Name"
                {...register("customerDataInfo.lastName", {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors.customerDataInfo?.lastName &&
                errors.customerDataInfo?.lastName.type === "required" && (
                  <span>This is required</span>
                )}
              {errors.customerDataInfo?.lastName &&
                errors.customerDataInfo?.lastName.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="phoneNumber"
                placeholder="Phone Number"
                {...register("customerDataInfo.phoneNumber", {
                  required: true,
                  maxLength: 12,
                })}
              />
              {errors.customerDataInfo?.phoneNumber &&
                errors.customerDataInfo?.phoneNumber.type === "required" && (
                  <span>This is required</span>
                )}
              {errors.customerDataInfo?.phoneNumber &&
                errors.customerDataInfo?.phoneNumber.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="emailAddress"
                placeholder="Email"
                {...register("customerDataInfo.emailAddress", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                required
              />
              {errors.customerDataInfo?.emailAddress &&
                errors.customerDataInfo?.emailAddress.type === "required" && (
                  <span>This is required</span>
                )}
            </Form.Group>
          </PersonalData>
          <AddressData>
            <Form.Group className="mb-3" column="sm">
              <Form.Label>Address Data</Form.Label>
              <Form.Control
                id="streetName"
                placeholder="Street Name"
                {...register(
                  "customerDataInfo.customerAddressData.streetName",
                  { required: true, maxLength: 30 }
                )}
              />
              {errors.customerDataInfo?.customerAddressData?.streetName &&
                errors.customerDataInfo?.customerAddressData?.streetName
                  .type === "required" && <span>This is required</span>}
              {errors.customerDataInfo?.customerAddressData?.streetName &&
                errors.customerDataInfo?.customerAddressData?.streetName
                  .type === "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="flatNumber"
                placeholder="Flat Number"
                {...register(
                  "customerDataInfo.customerAddressData.flatNumber",
                  { required: true, maxLength: 30 }
                )}
              />
              {errors.customerDataInfo?.customerAddressData?.flatNumber &&
                errors.customerDataInfo?.customerAddressData?.flatNumber
                  .type === "required" && <span>This is required</span>}
              {errors.customerDataInfo?.customerAddressData?.flatNumber &&
                errors.customerDataInfo?.customerAddressData?.flatNumber
                  .type === "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="houseNumber"
                placeholder="House Number"
                {...register(
                  "customerDataInfo.customerAddressData.houseNumber",
                  { required: true, maxLength: 10 }
                )}
              />
              {errors.customerDataInfo?.customerAddressData?.houseNumber &&
                errors.customerDataInfo?.customerAddressData?.houseNumber
                  .type === "required" && <span>This is required</span>}
              {errors.customerDataInfo?.customerAddressData?.houseNumber &&
                errors.customerDataInfo?.customerAddressData?.houseNumber
                  .type === "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="city"
                placeholder="City"
                {...register("customerDataInfo.customerAddressData.city", {
                  required: true,
                  maxLength: 15,
                })}
              />
              {errors.customerDataInfo?.customerAddressData?.city &&
                errors.customerDataInfo?.customerAddressData?.city.type ===
                  "required" && <span>City is required</span>}
              {errors.customerDataInfo?.customerAddressData?.city &&
                errors.customerDataInfo?.customerAddressData?.city.type ===
                  "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="zipCode"
                placeholder="Zip Code"
                {...register("customerDataInfo.customerAddressData.zipCode", {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors.customerDataInfo?.customerAddressData?.zipCode &&
                errors.customerDataInfo?.customerAddressData?.zipCode.type ===
                  "required" && <span>Zip Code is required</span>}
              {errors.customerDataInfo?.customerAddressData?.zipCode &&
                errors.customerDataInfo?.customerAddressData?.zipCode.type ===
                  "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="region"
                placeholder="Region"
                {...register("customerDataInfo.customerAddressData.region", {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors.customerDataInfo?.customerAddressData?.region &&
                errors.customerDataInfo?.customerAddressData?.region.type ===
                  "required" && <span>Region is required</span>}
              {errors.customerDataInfo?.customerAddressData?.region &&
                errors.customerDataInfo?.customerAddressData?.region.type ===
                  "maxLength" && <span>Max length exceeded</span>}
            </Form.Group>
          </AddressData>
        </FormContainer>
        <Popconfirm type="submit"
          title="Are you sure you want to order that?"
          onConfirm={() =>  handleSubmit(onSubmit)()}
        >
          <Button>Purchase products</Button>
        </Popconfirm>
        
      </form>
    </>
  );
};

export default CustomerDataForm;
