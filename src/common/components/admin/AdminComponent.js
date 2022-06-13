import { Menu, Layout, Breadcrumb } from "antd";

import React, { useState } from "react";
const { Header, Content, Sider } = Layout;
import {
  ShoppingOutlined,
  UserOutlined,
  SkinOutlined,
} from "@ant-design/icons";

import AddProduct from "common/components/add-product/AddProduct";
import ConfigManagerComponent from "common/components/config-manager/ConfigManagerComponent"



export const AdminComponent = ({data}) => {
  const [selectedItem, setSelectedItem] = useState();
  const components = {
    AddProduct: <AddProduct />,
    RemoveProduct: <span>Menu 2</span>,
    CurrentOrders: <span>Menu 3</span>,
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
          label: "Remove products",
          key: "RemoveProduct",
        },
        {
            label: "Manage Configuration",
            key: "ConfigurationManager",
          }
      ],
    },
    {
      key: 2,
      label: "Orders",
      icon: ShoppingOutlined,
      children: [
        { id: 1, label: "Current Orders", key: "CurrentOrders" },
        {
          label: "Order In Progress",
          key: "OrderInProgress",
        },
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
              defaultOpenKeys={["sub1"]}
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
