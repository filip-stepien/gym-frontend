import { Layout } from 'antd';
import { Outlet } from 'react-router';

import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Chat from '../components/Chat';

const { Header, Sider, Content } = Layout;

export default function ChatLayout() {
    return (
        <Layout className='gap-layout p-layout h-screen'>
            <Sider>
                <Menu />
            </Sider>
            <Layout className='gap-layout'>
                <Header className='flex h-auto flex-col p-0 leading-none'>
                    <Nav />
                </Header>
                <Content className='gap-layout flex flex-col'>
                    <Outlet />
                </Content>
            </Layout>
            <Sider>
                <Chat />
            </Sider>
        </Layout>
    );
}
