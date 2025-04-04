import { Space, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function LogoutButton() {
    return (
        <Space className='bg-card p-small px-middle shadow-card'>
            <ArrowRightOutlined />
            <Title level={5}>Logout</Title>
        </Space>
    );
}
