import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderMovie = () => {
    const {pathname} = useLocation();
    const items = [
        { label: <Link to='/'>Search</Link>, key: '/' },
    ];
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderMovie);