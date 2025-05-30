import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router';

import { Menu } from '@/components/Menu';
import { Nav } from '@/components/Nav';
import { Chat } from '@/components/Chat/Chat';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { UserRole } from '@/roles';
import { HamburgerMenu } from '@/components/HamburgerMenu';

type AuthenticatedLayoutProps = {
    role: UserRole;
    renderChat?: boolean;
};

const { Header, Sider, Content } = Layout;

const sidersHeight = `calc(100vh - ${getCSSVariable('--spacing-layout')})`;

export function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
    const { role, renderChat } = props;
    return (
        <Layout className='gap-layout p-small min-w-[300px]'>
            <Sider
                className='bg-card shadow-card top-small sticky hidden h-screen lg:block'
                style={{ height: sidersHeight }}
            >
                <Menu role={role} />
            </Sider>
            <Layout className='gap-small lg:gap-layout'>
                <Header className='bg-layout flex h-auto flex-col p-0 leading-none'>
                    <Flex justify='space-between'>
                        <HamburgerMenu role={role} className='mr-middle flex lg:hidden' />
                        <Nav className='flex-1' />
                    </Flex>
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
