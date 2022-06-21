import React, { useContext, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { Form, Typography, Popconfirm } from "antd";
import { StyledImage, CartContainer, TableContainer, InfoContainer } from "./StyledComponents";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
import UserContext from "store/user-context";

import { getRoutePath } from "common/util/UtilsFunctions";

const ShoppingCart = ({ data }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const userCtx = useContext(UserContext);
  const isEditing = (record) => record.productId === editingKey;

  const onEdit = (record) => {
    form.setFieldsValue({
      quantity: "",
      ...record,
    });
    setEditingKey(record.productId);
  };

  const onCancel = () => {
    setEditingKey("");
  };

  const onSave = (product) => {
    userCtx.updateQuanitytyProduct(product, form.getFieldsValue().quantity);
    setEditingKey("");
  };

  const onConfirmDelete = (id) => {
    userCtx.removeFromCart(id);
  };

  const columnData = [
    {
      title: "Image",
      dataIndex: "image",
      key: "uId",
      width: "15px",
      render: (image) => <StyledImage src={image} />,
      editable: false,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "uId",
      editable: false,
      render: (text, record) => (
        <>
          <Link
            href={`/${getRoutePath(record.categoryId, data)}/${
              record.productId
            }`}
          >
            <a>{record.title}</a>
          </Link>
        </>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "uId",
      editable: true,
      width: "30px",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "uId",
      editable: false,
      width: "30px",
      render: (size) =>
        size.length == 1 ? <span>{size}</span> : <spam>{size.toString()}</spam>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "uId",
      editable: false,
      width: "30px",
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
              onConfirm={() => onSave(record)}
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
                onConfirm={() => onConfirmDelete(record.uId)}
              >
                <Typography.Link> Delete</Typography.Link>
              </Popconfirm>
            </span>
          </>
        );
      },
    },
  ];

  const mergedColumns = columnData.map((col) => {
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

  const calculateTotalPrice = () => {
    let total = 0;
    userCtx.cartProducts.forEach((product, index) => {
      total += parseFloat(product.price) * parseFloat(product.quantity);
    });
    console.log(total);
    return total.toFixed(2);
  };

  return (
    <CartContainer>
      {userCtx.cartProducts.length == 0 ? (
        <>
          <h1>No products in shooping cart</h1>
          <button onClick={() => Router.push("/")}>Go to home page</button>
        </>
      ) : (
        <TableContainer>
          <DataTableComponent
            form={form}
            dataSource={userCtx.cartProducts}
            columnsData={mergedColumns}
            onCancel={() => onCancel()}
            pageSize={5}
          />
        </TableContainer>
      )}

      <InfoContainer>
        <h1>Potential total price: {calculateTotalPrice()}$</h1>
      </InfoContainer>
    </CartContainer>
  );
};

export default ShoppingCart;
