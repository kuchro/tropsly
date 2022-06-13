import {
  message,
  Table,
  Tag,
  Column,
  Space,
} from "antd";
import React, { useState, useEffect } from "react";
import EditableCell from "./EditableCell";
import { HOST_DATA } from "hostdata";
import axios from "axios";
import PopConfirmation from "common/components/modals/PopConfirmation";
import { selectCategoryData } from "common/util/DataTransformer";

const ManageProduct = ({categoryData}) => {
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const fetchData = async () => {
    let getAllProducts = await axios.get(
      `${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}`
    );
    let allProducts = await getAllProducts.data;
    setData(allProducts);
    console.log(allProducts);
  };
  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const onConfirmDelete = (productId) =>{
    axios
    .delete(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${productId}`)
    .then(function (response) {
      message.success("Product successfully removed.");
      setReloadData(true);
    })
    .catch(function (error) {
      message.error("Something went wrong, try again later.");
    });
  }

  return (
    <Table
      dataSource={data}
      scroll={{
        x: 1300,
      }}
    >
      <Column title="Image" dataIndex="image" key="image" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Description" dataIndex="description" key="description" />
      <Column title="Material" dataIndex="material" key="material" />
      <Column title="Category" key="category"  render={ (data) => (
          <Space>
            <>
             <Tag>{selectCategoryData('category', categoryData).find(x=> x.id===data.categoryId)?.name}</Tag>
            </>
          </Space>
        )} />
      <Column title="Brand" key="bran" render={ (data) => (
          <Space>
            <>
             <Tag>{selectCategoryData('brand', categoryData).find(x=> x.id===data.brandId)?.name}</Tag>
            </>
          </Space>
        )} />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Quantity" dataIndex="quantity" key="quantity" />
      <Column
        title="Action"
        key="action"
        render={(data) => (
          <Space>
            <>
              <PopConfirmation
                onConfirm={() => onConfirmDelete(data.id)}
                onCancel={() => {}}
                text={"Delete"}
              />
            </>
          </Space>
        )}
      />
    </Table>
  );
};

export default ManageProduct;
