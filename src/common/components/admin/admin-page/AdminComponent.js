import { Menu, Layout, Breadcrumb } from "antd";

import React, { useState } from "react";
const { Header, Content, Sider } = Layout;
import {
  ShoppingOutlined,
  UserOutlined,
  SkinOutlined,
} from "@ant-design/icons";

import AddProduct from "common/components/admin/add-product/AddProduct";
import ConfigManagerComponent from "common/components/admin/config-manager/ConfigManagerComponent"
import ManageProduct from 'common/components/admin/manage-product/ManageProduct'
import DeliveryOption from 'common/components/admin/delivery/DeliveryOption'
import OrdersComponent from 'common/components/admin/order/OrdersComponent'


export const AdminComponent = ({data,dataWithId}) => {
  const [selectedItem, setSelectedItem] = useState("AddProduct");
  const components = {
    AddProduct: <AddProduct configurationData={dataWithId} />,
    ManageProduct: <ManageProduct categoryData={dataWithId}/>,
    DeliveryOption: <DeliveryOption/>,
    CurrentOrders: <OrdersComponent/>,
    ConfigurationManager: <ConfigManagerComponent configuration={data}/>,
  };
  const onClickLoadMenu = (menuId) => {
    setSelectedItem(menuId);
  };

  const dataArr = [
    {
      key: 1,
      label: "Products & Info",
      icon: SkinOutlined,
      children: [
        { label: "Add Product", key: "AddProduct" },
        {
          label: "Manage products",
          key: "ManageProduct",
        },
        {
            label: "Manage Configuration",
            key: "ConfigurationManager",
          },
          {
            label: "Delivery Option",
            key: "DeliveryOption",
          }
      ],
    },
    {
      key: 2,
      label: "Orders",
      icon: ShoppingOutlined,
      children: [
        { id: 1, label: "Current Orders", key: "CurrentOrders" }
    
      ],
    },
  ];

  const items2 = dataArr.map((data, index) => {
    const key = String(index + 1);
    return {
      key: data.key,
      icon: React.createElement(data.icon),
      label: data.label,
      children: data.children.map((child, index) => {
        const key = String(index + 1);
        return {
          key: child.key,
          label: child.label,
          onClick: () => onClickLoadMenu(child.key),
        };
      }),
    };
  });
  return (
    <Layout>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Sider
            className="site-layout-background"
            width={250}
            style={{ background: "inherit" }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["AddProduct"]}
              style={{
                background: "inherit",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {components[selectedItem]}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminComponent;
