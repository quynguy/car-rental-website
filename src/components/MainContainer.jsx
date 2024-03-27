import React from 'react';
import '../App.css';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Card} from 'antd';

import CarsList from './CarsList';

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
    getItem('New Arrivals', 'sub2', <AppstoreOutlined />, [
      getItem('Top Rated', '5'),
      getItem('View All', '6'),
    ]),
    {
      type: 'divider',
    },
    getItem('Minivan', 'sub3', <SettingOutlined />, [
      getItem('Top Rated', '7'),
      getItem('View All', '8'),
    ]),
    getItem('Pickup Trucks', 'sub4', <SettingOutlined />, [
      getItem('Top Rated', '11'),
      getItem('View All', '12'),
    ]),
    getItem('Compact Car', 'sub5', <SettingOutlined />, [
      getItem('Top Rated', '13'),
      getItem('View All', '14'),
    ]),
    getItem('Luxury Car', 'sub6', <SettingOutlined />, [
      getItem('Top Rated', '15'),
      getItem('View All', '16'),
    ]),
    getItem('Standard SUV', 'sub7', <SettingOutlined />, [
      getItem('Top Rated', '17'),
      getItem('View All', '18'),
    ]),
  ];




const MainContainer = ({ cars }) => {
    console.log(cars);
    const onClick = (e) => {
        console.log('click ', e);
      };
  return (

    <div className="main-container">
        <div className="left-maincontainer">
        
        <Menu
            onClick={onClick}
            style={{
                width: 200,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
         />

        </div>

        <div className="right-maincontainer">
          <CarsList />
        </div>

    </div>

  )
}

export default MainContainer;