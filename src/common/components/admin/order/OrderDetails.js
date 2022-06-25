import React from "react";
import {
  DetailsContainer,
  AddressInfo,
  PersonalInfo,
  ProductInfo,
} from "./StyledComponent";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
const OrderDetails = ({ orderData }) => {
  const columnData = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      editable: false,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      editable: false,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      editable: false,
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      editable: false,
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      editable: false,
    },
  ];

  return (
    <>
      {console.log(orderData)}
      <DetailsContainer>
        <PersonalInfo>
          <h3>Personal Data</h3>
          <p>First Name: {orderData.customerPersonalData.firstName}</p>
          <p>Last Name: {orderData.customerPersonalData.lastName}</p>
          <p>Phone: {orderData.customerPersonalData.phoneNumber}</p>
          <p>Email: {orderData.customerPersonalData.emailAddress}</p>
        </PersonalInfo>
        <AddressInfo>
          <h3>Address</h3>
          <p>
            Street: {orderData.customerPersonalData.customerAddress.streetName}
          </p>
          <p>
            Flat No. :{" "}
            {orderData.customerPersonalData.customerAddress.flatNumber}
          </p>
          <p>
            House No. :{" "}
            {orderData.customerPersonalData.customerAddress.houseNumber}
          </p>
          <p>City: {orderData.customerPersonalData.customerAddress.city}</p>
          <p>
            Zip-Code: {orderData.customerPersonalData.customerAddress.zipCode}
          </p>
          <p>Region: {orderData.customerPersonalData.customerAddress.region}</p>
        </AddressInfo>
      </DetailsContainer>
      <h3>Ordered products</h3>
      <ProductInfo>
        <DataTableComponent
          form={null}
          dataSource={orderData.orderedProducts}
          columnsData={columnData}
          onCancel={null}
          scrollData={{
            x: 800,
          }}
          pageSize={2}
        />
      </ProductInfo>
    </>
  );
};

export default OrderDetails;
