import { Typography, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function UserBadge() {
    return (
        <Space align='center' size='middle' className='bg-card pl-middle shadow-card'>
            <Title level={5}>John Pork</Title>
            <Avatar shape='square' size='large' icon={<UserOutlined />} className='rounded-none' />
        </Space>
    );
}
