import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router';

import { Menu } from '../components/Menu';
import { Nav } from '../components/Nav';
import { Chat } from '../components/Chat';

type AuthenticatedLayoutProps = {
    renderChat?: boolean;
};

const { Header, Sider, Content } = AntLayout;

export function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
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
            {props.renderChat && (
                <Sider className='bg-card shadow-card'>
                    <Chat />
                </Sider>
            )}
        </AntLayout>
    );
}
