import {
  message,
  Typography,
  Popconfirm,
  Tag,
  Space,
  Form,
} from "antd";
import React, { useState, useEffect } from "react";
import { HOST_DATA } from "hostdata";
import { CONFIG_COLUMNS } from "mockdata";
import axios from "axios";
import { selectCategoryData } from "common/util/DataTransformer";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";


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

  const onEdit = (record) => {
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

  const onCancel = () => {
    setEditingKey("");
  };

  const onSave = async (key) => {
    try {
      const row = await form.validateFields();
      axios
        .put(`${HOST_DATA.API_URL}${HOST_DATA.PRODUCT}${key}`, row)
        .then(function (response) {
          message.success("Product successfully updated.");
          setReloadData(true);
          setEditingKey("");
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
      title: "Category",
      dataIndex: "category",
      key: "category",
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
      key:'brand',
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
      title: "Actions",
      dataIndex: "actions",
      key: 'actions',
      width: "10%",
      fixed: "right",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => onCancel()}
              style={{
                marginRight: 8,
              }}
            >
              Cancel
            </Typography.Link>
            <Popconfirm
              title="Do you want to save?"
              onConfirm={() => onSave(record.productId)}
            >
              <Typography.Link>Save</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => onEdit(record)}
            >
              Edit
            </Typography.Link>
            <span>
              <br />
              <Popconfirm
                title="Are you sure?"
                onConfirm={() => onConfirmDelete(record.productId)}
              >
                <Typography.Link> Delete</Typography.Link>
              </Popconfirm>
            </span>
          </>
        );
      },
    },
  ];


  const mergedColumns = CONFIG_COLUMNS.concat(columns).map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "quantity" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <DataTableComponent
      form={form}
      dataSource={data}
      columnsData={mergedColumns}
      onCancel={() => onCancel()}
      scrollData={{
        x: 1500,
      }}
      pageSize={6}
    />
  );
};

export default ManageProduct;
