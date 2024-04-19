import React, { useState } from "react";
import logo from "@/logo 1.png"
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', margin:10}}>
          <img width={75} src={logo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Tableau de bord
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/admin" />
            Administrateurs
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to="/test" />
            Tests
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            <Link to="/question" />
            Questions
          </Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>
            <Link to="/option" />
            Options
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            <Link to="/filiere" />
            Filiere
          </Menu.Item>
          <Menu.Item key="13" icon={<TeamOutlined />}>
            <Link to="/etudiant" />
            Etudiants
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            <Link to="/prof" />
            Enseignants
          </Menu.Item>
          {/*<Menu.Item key="8" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          
          <Menu.Item key="9" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Custom Select Customer</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="11" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Product
          </Menu.Item> */}
          <Menu.Item key="12" icon={<SettingOutlined />}>
            <Link to="/settings" />
            Parametre
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
