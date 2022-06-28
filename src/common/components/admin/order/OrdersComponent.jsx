import { Typography, Popconfirm, Tag, Button, Form } from "antd";
import React, { useState, useEffect } from "react";

import { OrderDetailModal } from "common/components/functional-components/modals/ModalComponent";

import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";

import {
  GET_ALL_ORDER_DATA,
  DELETE_ORDER_BY_ID,
  UPDATE_ORDER,
} from "common/http/RequestData";

const OrdersComponent = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.productOrderId === editingKey;

  const fetchDataOrders = async () => {
    let getAllProducts = await GET_ALL_ORDER_DATA();
    setData(getAllProducts);
    console.debug("Orders", getAllProducts);
  };

  useEffect(() => {
    fetchDataOrders();
    setReloadData(false);
  }, [reloadData]);

  const onConfirmDelete = async (orderId) => {
    await DELETE_ORDER_BY_ID(orderId, () => setReloadData(true));
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
    setEditingKey(record.productOrderId);
  };

  const onCancel = () => {
    setEditingKey("");
  };

  const onSave = async (orderId) => {
    try {
      const row = await form.validateFields();
      row.Id = orderId;
      await UPDATE_ORDER(
        row,
        () => setReloadData(true),
        () => setEditingKey("")
      );
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      width: "10%",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      width: "5%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "10%",
      editable: true,
    },
    {
      title: "Details",
      dataIndex: "navigate",
      width: "10%",
      editable: false,
      render: (text, record) => (
        <Button onClick={() => OrderDetailModal(record)}>Details</Button>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
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
              onConfirm={() => onSave(record.productOrderId)}
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
                onConfirm={() => onConfirmDelete(record.productOrderId)}
              >
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
        x: 0,
      }}
      pageSize={6}
    />
  );
};

export default OrdersComponent;
