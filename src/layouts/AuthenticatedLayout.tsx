import { Layout } from 'antd';
import { Outlet } from 'react-router';

import { Menu } from '@/components/Menu';
import { Nav } from '@/components/Nav';
import { Chat } from '@/components/Chat/Chat';
import { getCSSVariable } from '@/utils/getCSSVariable';

type AuthenticatedLayoutProps = {
    renderChat?: boolean;
};

const { Header, Sider, Content } = Layout;

const sidersHeight = `calc(100vh - ${getCSSVariable('--spacing-layout')})`;

export function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
    return (
        <Layout className='gap-layout p-small'>
            <Sider
                className='bg-card shadow-card top-small sticky h-screen'
                style={{ height: sidersHeight }}
            >
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
                <Sider
                    className='bg-card shadow-card top-small sticky !min-w-90'
                    style={{ height: sidersHeight }}
                >
                    <Chat />
                </Sider>
            )}
        </Layout>
    );
}
