import { Layout } from 'antd';
import { Outlet } from 'react-router';

import { type AccountType, Menu } from '@/components/Menu';
import { Nav } from '@/components/Nav';
import { Chat } from '@/components/Chat/Chat';
import { getCSSVariable } from '@/utils/getCSSVariable';

type AuthenticatedLayoutProps = {
    accountType: AccountType;
    renderChat?: boolean;
};

const { Header, Sider, Content } = Layout;

const sidersHeight = `calc(100vh - ${getCSSVariable('--spacing-layout')})`;

export function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
    const { accountType, renderChat } = props;
    return (
        <Layout className='gap-layout p-small min-w-[1200px]'>
            <Sider
                className='bg-card shadow-card top-small sticky h-screen'
                style={{ height: sidersHeight }}
            >
                <Menu accountType={accountType} />
            </Sider>
            <Layout className='gap-layout'>
                <Header className='flex h-auto flex-col p-0 leading-none'>
                    <Nav />
                </Header>
                <Content className='gap-layout flex flex-col'>
                    <Outlet />
                </Content>
            </Layout>
            {renderChat && (
                <Sider
                    className='bg-card shadow-card top-small sticky !min-w-80'
                    style={{ height: sidersHeight }}
                >
                    <Chat />
                </Sider>
            )}
        </Layout>
    );
}
