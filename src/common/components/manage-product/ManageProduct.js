import {
  message,
  Typography,
  Popconfirm,
  Table,
  Tag,
  Column,
  Input,
  InputNumber,
  Space,
  Form,
} from "antd";
import React, { useState, useEffect } from "react";
import EditableCell from "./EditableCell";
import { HOST_DATA } from "hostdata";
import axios from "axios";
import PopConfirmation from "common/components/modals/PopConfirmation";
import { selectCategoryData } from "common/util/DataTransformer";

const ManageProduct = ({ categoryData }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.productId === editingKey;

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

  const onConfirmDelete = (productId) => {
    axios
      .delete(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${productId}`)
      .then(function (response) {
        message.success("Product successfully removed.");
        setReloadData(true);
      })
      .catch(function (error) {
        message.error("Something went wrong, try again later.");
      });
  };



  const edit = (record) => {
    form.setFieldsValue({
      image: "",
      title: "",
      description: "",
      material: "",
      price: "",
      quantity: "",
      ...record,
    });
    setEditingKey(record.productId);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key, record) => {
    try {
       
      const row = await form.validateFields();
    //   const newData = [...data];
    //   const index = newData.findIndex((item) => key === item.id);
    //   const item = newData[index];
      axios
        .put(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${key}`, row)
        .then(function (response) {
          message.success("Product successfully updated.");
          setReloadData(true);
          setEditingKey('');
        })
        .catch(function (error) {
          message.error("Something went wrong, try again later.");
        });
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "productId",
      width: "5%",
    },
    {
      title: "image",
      dataIndex: "image",
      width: "10%",
      editable: true,
    },
    {
      title: "title",
      dataIndex: "title",
      width: "10%",
      editable: true,
    },
    {
      title: "description",
      dataIndex: "description",
      width: "10%",
      editable: true,
    },
    {
      title: "material",
      dataIndex: "material",
      width: "10%",
      editable: true,
    },
    {
      title: "size",
      dataIndex: "size",
      width: "10%",
      editable: true,
    },
    {
      title: "ategory",
      dataIndex: "category",
      render: (_, record) => {
        return (
          <Space>
            <>
              <Tag>
                {
                  selectCategoryData("category", categoryData).find(
                    (x) => x.id === record.categoryId
                  )?.name
                }
              </Tag>
            </>
          </Space>
        );
      },
      width: "10%",
      editable: false,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (_, record) => {
        return (
          <Space>
            <>
              <Tag>
                {
                  selectCategoryData("brand", categoryData).find(
                    (x) => x.id === record.brandId
                  )?.name
                }
              </Tag>
            </>
          </Space>
        );
      },
      width: "10%",
      editable: false,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
      editable: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: "10%",
      editable: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      width: "10%",
      fixed: "right",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={()=>cancel()}
              style={{
                marginRight: 8,
              }}
            >
              Cancel
            </Typography.Link>
            <Popconfirm title="Do you want to save?" onConfirm={() => save(record.productId, record)}>
              <Typography.Link>Save</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <>
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
          <span>
            <br/>
            <Popconfirm title="Are you sure?" onConfirm={()=>onConfirmDelete(record.productId)}>
            <Typography.Link> Delete</Typography.Link>
            </Popconfirm>
          </span>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "price" || "quantity" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        scroll={{
          x: 1500,
        }}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ManageProduct;
