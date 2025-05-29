import { Space, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import keycloak from '@/keycloak';

const { Title } = Typography;

export function LogoutButton() {
    const onClick = () => {
        keycloak.logout({ redirectUri: window.location.origin + '/logout' });
    };

    return (
        <Space className='bg-card p-small px-middle shadow-card cursor-pointer' onClick={onClick}>
            <ArrowRightOutlined />
            <Title level={5} className='select-none'>
                Logout
            </Title>
        </Space>
    );
}
