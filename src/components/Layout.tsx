import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router';

import Menu from './Menu';
import { Nav } from './Nav';
import Chat from './Chat';

const { Header, Sider, Content } = AntLayout;

export default function Layout() {
    return (
        <AntLayout className='gap-middle p-small h-screen'>
            <Sider className='bg-card shadow-card'>
                <Menu accountType='client' />
            </Sider>
            <AntLayout className='gap-middle'>
                <Header className='flex h-auto flex-col p-0 leading-none'>
                    <Nav />
                </Header>
                <Content className='gap-middle flex flex-col'>
                    <Outlet />
                </Content>
            </AntLayout>
            <Sider className='bg-card shadow-card'>
                <Chat />
            </Sider>
        </AntLayout>
    );
}
