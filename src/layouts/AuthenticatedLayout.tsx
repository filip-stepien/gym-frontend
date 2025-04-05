import { Layout } from 'antd';
import { Outlet } from 'react-router';

import { Menu } from '../components/Menu';
import { Nav } from '../components/Nav';
import { Chat } from '../components/Chat/Chat';

type AuthenticatedLayoutProps = {
    renderChat?: boolean;
};

const { Header, Sider, Content } = Layout;

export function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
    return (
        <Layout className='gap-layout p-small h-screen'>
            <Sider className='bg-card shadow-card'>
                <Menu accountType='client' />
            </Sider>
            <Layout className='gap-layout'>
                <Header className='flex h-auto flex-col p-0 leading-none'>
                    <Nav />
                </Header>
                <Content className='gap-layout flex flex-col'>
                    <Outlet />
                </Content>
            </Layout>
            {props.renderChat && (
                <Sider className='bg-card shadow-card !min-w-fit'>
                    <Chat />
                </Sider>
            )}
        </Layout>
    );
}
