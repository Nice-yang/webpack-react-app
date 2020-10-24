import React from 'react';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { menuData } from './config';
import './index.less';

const { SubMenu } = Menu;

function renderItem(data) {
  const { name, icon, link, children } = data;
  const IconDom = Icon[icon];
  if (children && children.length) {
    return (
      <SubMenu key={name} icon={<IconDom />} title={name}>
        {children.map(item => renderItem(item))}
      </SubMenu>
    )
  }

  return (
    <Menu.Item key={name} icon={<IconDom />}>
      <a href={link}>{name}</a>
    </Menu.Item>
  )
}

export default () => (
  <Menu mode="inline" theme="dark">
    {menuData.map(item => renderItem(item))}
  </Menu>
)