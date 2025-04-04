import { Space, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function LogoutButton() {
    return (
        <Space className='bg-card p-small px-middle shadow-card cursor-pointer'>
            <ArrowRightOutlined />
            <Title level={5} className='select-none'>
                Logout
            </Title>
        </Space>
    );
}
