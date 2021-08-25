import "./Navigation.css";
import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function template() {
  const { location } = this.props;
  return (
    <Menu
      style={{ float: 'right' }}
      theme="dark"
      onClick={this.handleClick}
      defaultSelectedKeys={['/']}
      selectedKeys={[location.pathname]}
      mode="horizontal">
      <Menu.Item key="/home">
        <NavLink to="/home">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="/stats">
        <NavLink to="/stats">Statistics</NavLink>
      </Menu.Item>
      <Menu.Item key="/reviews">
        <NavLink to="/reviews">Reviews</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default template;
