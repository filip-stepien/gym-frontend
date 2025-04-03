import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router';

import Menu from './Menu';
import Nav from './Nav';
import Chat from './Chat';

const { Header, Sider, Content } = AntLayout;

export default function Layout() {
    return (
        <AntLayout className='gap-layout p-layout h-screen'>
            <Sider className='bg-card shadow-card'>
                <Menu accountType='client' />
            </Sider>
            <AntLayout className='gap-layout'>
                <Header className='flex h-auto flex-col p-0 leading-none'>
                    <Nav />
                </Header>
                <Content className='gap-layout flex flex-col'>
                    <Outlet />
                </Content>
            </AntLayout>
            <Sider className='bg-card shadow-card'>
                <Chat />
            </Sider>
        </AntLayout>
    );
}
