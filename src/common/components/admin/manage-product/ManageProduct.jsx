import { Typography, Popconfirm, Tag, Space, Form } from "antd";
import React, { useState, useEffect } from "react";
import { HOST_DATA } from "hostdata";
import { CONFIG_COLUMNS } from "mockdata";
import axios from "axios";
import { selectCategoryData } from "common/util/DataTransformer";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
import { UPDATE_PRODUCT_DATA,DELETE_PRODUCT_BY_ID } from "common/http/RequestData";

import {GET_PRODUCTS} from 'common/http/RequestData'
const ManageProduct = ({ categoryData }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.productId === editingKey;

  const fetchData = async () => {
    let getAllProducts = await GET_PRODUCTS();
    setData(getAllProducts);
    console.debug("All products", getAllProducts);
  };

  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const onConfirmDelete = async (productId) => {
    await DELETE_PRODUCT_BY_ID(productId);
    setReloadData(true);
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
      await UPDATE_PRODUCT_DATA(key,row);
      setReloadData(true);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "image",
      dataIndex: "image",
      width: "15%",
      editable: true,
      render: (image) => (
        <Typography.Text ellipsis={true} style={{ width: 250 }}>
          {image}
        </Typography.Text>
      ),
    },
    {
      title: "description",
      dataIndex: "description",
      width: "30%",
      editable: true,
      render: (description) => (
        <Typography.Text ellipsis={true} style={{ width: 250 }}>
          {description}
        </Typography.Text>
      ),
    },
    {
      title: "size",
      dataIndex: "size",
      width: "15%",
      editable: true,
      render: (size) => <p>{size.join()}</p>,
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
      render: (_, record) => {
        return (
          <Space>
            <>
              <Tag>
                {
                  selectCategoryData("product-type", categoryData).find(
                    (x) => x.id === record.productTypeId
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
      title: "Material Type",
      dataIndex: "materialType",
      key: "materialType",
      render: (_, record) => {
        return (
          <Space>
            <>
              <Tag>
                {
                  selectCategoryData("material-type", categoryData).find(
                    (x) => x.id === record.materialTypeId
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
      width: "12%",
      editable: false,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
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
      key: "actions",
      width: "15%",
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
