import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Profile from "./Profile/ProfilePhoto";
import FName from "./Profile/FullName";
import MyAddress from "./Profile/Address";

const { Header, Content, Footer } = Layout;

const Layoutant = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Accueil</Menu.Item>
          <Menu.Item key="2">Produits</Menu.Item>
          <Menu.Item key="3">Gallerie</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Profile />
          <FName />
          <MyAddress />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Layoutant;
