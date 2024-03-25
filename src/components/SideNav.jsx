import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import '../App.css'; 

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Favorites', 'sub1', <MailOutlined />, [
    getItem('Gas Vehicles', 'g1', null, [getItem('2-4 Passengers', '1'), getItem('4+ Passengers', '2')], 'group'),
    getItem('Electric Vehicles', 'g2', null, [getItem('2-4 Passengers', '3'), getItem('4+ Passengers', '4')], 'group'),
  ]),
  getItem('Standard SUV', 'sub2', <AppstoreOutlined />, [
    getItem('Top Rated', '5'),
    getItem('View All', '6'),
  ]),
  {
    type: 'divider',
  },
  getItem('Minivan', 'sub4', <SettingOutlined />, [
    getItem('Top Rated', '9'),
    getItem('View All', '10'),

  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;
