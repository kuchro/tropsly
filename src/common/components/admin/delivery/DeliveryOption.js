import React, { useEffect, useState } from "react";
import {
  Input,
  InputNumber,
  message,
  Button,
  Typography,
  Popconfirm,
  Form,
} from "antd";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
import {
  GET_DELIVERY_DATA,
  DELETE_DATA_BY_ID,
  SAVE_DATA,
  UPDATE_DATA,
} from "common/http/RequestHandler.js";
import { HOST_DATA } from "hostdata";

import { Container, TableContainer, AddItemContainer } from "./StyledComponent";

const layout = {
  labelCol: {
    span: 18,
  },
  wrapperCol: {
    span: 25,
  },
};

const DeliveryOption = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.deliveryId === editingKey;

  const fetchData = async () => {
    let deliveryData = await GET_DELIVERY_DATA();
    setData(deliveryData);
  };

  useEffect(() => {
    fetchData();
    setReloadData(false);
  }, [reloadData]);

  const onEdit = (record) => {
    form.setFieldsValue({
      deliveryName: "",
      deliveryPrice: "",
      description: "",
      extraOptions: "",
      ...record,
    });
    setEditingKey(record.deliveryId);
  };

  const onCancel = () => {
    setEditingKey("");
  };

  const onAddDelivery = (values) => {
    SAVE_DATA(HOST_DATA.DELIVERY, values, () => setReloadData(true));
  };

  const onSave = async (id) => {
    const row = await form.validateFields();
    row.deliveryId = id;
    UPDATE_DATA(HOST_DATA.DELIVERY, row, () => setReloadData(true));
    setEditingKey("");
  };

  const validateMessages = {
    required: "${label} is required!",
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const columns = [
    {
      title: "Delivery Name",
      dataIndex: "deliveryName",
      key: "deliveryName",
      width: "10%",
      editable: true,
    },
    {
      title: "Delivery Price",
      dataIndex: "deliveryPrice",
      key: "deliveryPrice",
      width: "10%",
      editable: true,
    },
    {
      title: "Extra Options",
      dataIndex: "extraOptions",
      key: "extraOptions",
      width: "10%",
      editable: true,
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
              onConfirm={() => onSave(record.deliveryId)}
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
                onConfirm={() =>
                  DELETE_DATA_BY_ID(HOST_DATA.DELIVERY, record.deliveryId, () =>
                    setReloadData(true)
                  )
                }
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
        inputType: col.dataIndex === "deliveryPrice" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Container>
      <TableContainer>
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
      </TableContainer>
      <AddItemContainer>
        <Form
          labelCol={{
            span: 14,
          }}
          wrapperCol={{
            span: 25,
          }}
          layout="horizontal"
          name="nest-messages"
          onFinish={onAddDelivery}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["deliveryName"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["deliveryPrice"]}
            label="Price of delivery"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber precision={2} step={0.1} />
          </Form.Item>
          <Form.Item
            name={["extraOptions"]}
            label="Extra Options"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add 
            </Button>
          </Form.Item>
        </Form>
      </AddItemContainer>
    </Container>
  );
};

export default DeliveryOption;
