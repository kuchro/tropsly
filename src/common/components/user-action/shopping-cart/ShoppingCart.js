import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { Form, Typography, Popconfirm, Table, Button, Popover } from "antd";
import SelectData from "common/components/functional-components/select-size/SelectData";
const { Text } = Typography;
import {
  StyledImage,
  CartContainer,
  TableContainer,
  InfoContainer,
} from "./StyledComponents";
import DataTableComponent from "common/components/functional-components/data-table/DataTableComponent";
import UserContext from "store/user-context";
import { InfoCircleTwoTone } from "@ant-design/icons";
import CustomerDataForm from "./CustomerDataForm";
import { GET_DELIVERY_DATA } from "common/http/RequestData.js";
import { getRoutePath } from "common/util/UtilsFunctions";

const ShoppingCart = ({ data }) => {
  const [formEdit] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const userCtx = useContext(UserContext);
  const [reloadData, setReloadData] = useState(false);
  const [dataToOrder, setDataToOrder] = useState([]);
  const [showDataForm, setShowDataForm] = useState(false);
  const [buttonText, setButtonText] = useState("Order Products");
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryInfo, setDeliveryInfo] = useState([]);
  const [deliveryOptionId, setDeliveryOptionId] = useState();
  const [selectedDeliveryPrice, setSelectedDeliveryPrice] = useState();

  const fetchData = async () => {
    let deliveryData = await GET_DELIVERY_DATA();
    setDeliveryInfo(deliveryData);
    setDataToOrder(userCtx.cartProducts);
    setReloadData(false);
  };

  useEffect(() => {
    fetchData();
  }, [reloadData]);
  const isEditing = (record) => record.uId === editingKey;

  const onEdit = (record) => {
    formEdit.setFieldsValue({
      quantity: record.quantity,
      ...record,
    });
    setEditingKey(record.uId);
  };

  const onCancel = () => {
    setEditingKey("");
  };

  const onSave = (product) => {
    userCtx.updateQuanitytyProduct(product, formEdit.getFieldsValue().quantity);
    setReloadData(true);
    setEditingKey("");
  };

  const onConfirmDelete = (id) => {
    userCtx.removeFromCart(id);
  };

  const onSelectChange = (e) => {
    setDeliveryOptionId(e.target.value);
    setSelectedDeliveryPrice(
      deliveryInfo?.find((x) => x.deliveryId == e.target.value).deliveryPrice
    );
  };

  const orderProduct = () => {
    setShowDataForm(!showDataForm);
    dataToOrder.deliveryId = deliveryOptionId;
    dataToOrder.totalPrice = totalPrice;
    dataToOrder.deliveryPrice = selectedDeliveryPrice;
    dataToOrder.products = userCtx.cartProducts;
    console.log(dataToOrder);
    if (!showDataForm) {
      setButtonText("Hide Data Form");
      return;
    }
    setButtonText("Order Products");
  };

  const columnData = [
    {
      title: "Image",
      dataIndex: "image",
      key: "uId",
      width: "10%",
      render: (image) => <StyledImage src={image} />,
      editable: false,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "uId",
      editable: false,
      width: "30%",
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
      key: (Math.random() + 1).toString(36).substring(7),
      editable: true,
      width: "15%",
    },
    {
      title: "Sizes",
      dataIndex: "size",
      key: "uId",
      editable: false,
      width: "10%",
      render: (size) =>
        size.length == 1 ? <span>{size}</span> : <spam>{size.toString()}</spam>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "uId",
      editable: false,

      render: (price) => <span>{`$${price}`}</span>,
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

  const renderColumnData = () => {
    return columnData.map((col) => {
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
  };

  const calculateTotalPrice = () => {
    let totalPriceOfProduct = userCtx.cartProducts
      .reduce(
        (acc, product) =>
          acc + product.quantity * product.price,
        0
      )
      .toFixed(2);
    setTotalPrice(totalPriceOfProduct);
    return totalPriceOfProduct;
  };

  return (
    <>
      {userCtx.cartProducts.length == 0 ? (
        <div>
          <h1>No products in shooping cart</h1>
          <button onClick={() => Router.push("/")}>Go to home page</button>
        </div>
      ) : (
        <CartContainer>
          <TableContainer>
            <DataTableComponent
              form={formEdit}
              dataSource={[...userCtx.cartProducts]}
              columnsData={renderColumnData()}
              onCancel={() => onCancel()}
              pageSize={5}
              summaryData={() => (
                <Table.Summary fixed>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={2}>
                      Select Delivery Option
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align="center" index={1} colSpan={4}>
                      <SelectData
                        data={deliveryInfo}
                        callbackFunction={(e) => onSelectChange(e)}
                      />
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={2}>
                      Total product price
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align="center" index={1} colSpan={4}>
                      <Text type="danger">${calculateTotalPrice()}</Text>
                      <Popover
                        overlayStyle={{
                          width: "25vw",
                        }}
                        content={
                          <Text>
                            {" "}
                            {selectedDeliveryPrice
                              ? `Price does not include selected delivery costs +$${selectedDeliveryPrice}`
                              : "Price does not include selected delivery costs. Please select delivery option"}
                          </Text>
                        }
                        title="Price"
                        trigger="hover"
                      >
                        <InfoCircleTwoTone
                          style={{
                            margin: "10px",
                            fontSize: "20px",
                            color: "#08c",
                          }}
                        />
                      </Popover>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
            {selectedDeliveryPrice ? (
              <Button
                disabled={selectedDeliveryPrice ? false : true}
                onClick={() => orderProduct()}
              >
                {buttonText}
              </Button>
            ) : (
              <Popover
                overlayStyle={{
                  width: "15vw",
                }}
                content={<Text>Please select delivery option</Text>}
                title="Info"
                trigger="hover"
              >
                <Button
                  disabled={selectedDeliveryPrice ? false : true}
                  onClick={() => orderProduct()}
                >
                  {buttonText}
                </Button>
              </Popover>
            )}
          </TableContainer>
          {showDataForm ? (
            <InfoContainer>
              <CustomerDataForm orderData={dataToOrder} />
            </InfoContainer>
          ) : null}
        </CartContainer>
      )}
    </>
  );
};

export default ShoppingCart;
