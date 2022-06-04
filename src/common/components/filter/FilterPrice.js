import React, { useState } from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const FilterPrice = () => {
    const [sortPrice, setSorPtice] = useState();
    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'From the highest',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    label: 'From the lowest',
                    key: '2',
                    icon: <UserOutlined />,
                }
            ]}
        />
    );

    return (

        <Dropdown overlay={menu}>
            <Button>
                <Space>
                    Price
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>

    );
};

export default FilterPrice;
